$(document).ready(function () {

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var player;
    var stars;
    var bombs;
    var platforms;
    var cursors;
    var score = 0;
    var gameOver = false;
    var scoreText;
    var timerText;
    var startTime;

    var game = new Phaser.Game(config);

    function preload ()
    {
        console.log('Preload finished');

        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star1', 'assets/star.png');
        this.load.image('star2', 'assets/star2.png');
        this.load.image('star3', 'assets/star3.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    }

    function create ()
    {
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
        platforms.create(300, 180, 'ground');
        platforms.create(150, 100, 'ground');

        player = this.physics.add.sprite(100, 450, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();

        const starTypes = ['star1', 'star2', 'star3'];
        const starValues = { star1: 10, star2: 20, star3: 30 };

        stars = this.physics.add.group({
            key: 'star1',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {
            const type = Phaser.Utils.Array.GetRandom(starTypes);
            child.setTexture(type);
            child.setData('value', starValues[type]);
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            child.setGravityY(Phaser.Math.Between(100, 300));
        });

        bombs = this.physics.add.group();

        scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
        timerText = this.add.text(600, 16, 'Time: 0', { fontSize: '32px', fill: '#000' });
        startTime = this.time.now;

        this.time.addEvent({
            delay: 100,
            callback: () => {
                let elapsed = Math.floor((this.time.now - startTime) / 1000);
                timerText.setText('Time: ' + elapsed);
            },
            loop: true
        });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(bombs, platforms);

        this.physics.add.overlap(player, stars, collectStar, null, this);
        this.physics.add.collider(player, bombs, hitBomb, null, this);
    }

    function update ()
    {
        if (gameOver) return;

        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        } else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    }

    function collectStar (player, star)
    {
        star.disableBody(true, true);

        score += star.getData('value');
        scoreText.setText('Score: ' + score);

        if (stars.countActive(true) === 0)
        {
            stars.children.iterate(function (child) {
                const type = Phaser.Utils.Array.GetRandom(['star1', 'star2', 'star3']);
                const valueMap = { star1: 10, star2: 20, star3: 30 };
                child.enableBody(true, child.x, 0, true, true);
                child.setTexture(type);
                child.setData('value', valueMap[type]);
                child.setGravityY(Phaser.Math.Between(100, 300));
            });

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            bomb.allowGravity = false;
        }
    }

    function hitBomb (player, bomb)
    {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        gameOver = true;
        let finalTime = Math.floor((this.time.now - startTime) / 1000);
        this.add.text(200, 300, 'Game Over! Time: ' + finalTime + 's', { fontSize: '32px', fill: '#f00' });
    }

});
