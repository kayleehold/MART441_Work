$(document).ready(function () {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    let score = 0;
    const scoreDisplay = document.getElementById("score");

    class GameObject {
        constructor(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Player extends GameObject {
        constructor(x, y) {
            super(x, y, 30, 30, "blue");
            this.speed = 30;
        }
        move(dx, dy) {
            let newX = this.x + dx;
            let newY = this.y + dy;
        
            // Check both horizontal and vertical movement separately to prevent getting stuck
            if (!obstacles.some(obj => isColliding(newX, this.y, obj))) {
                this.x = newX;
            }
            if (!obstacles.some(obj => isColliding(this.x, newY, obj))) {
                this.y = newY;
            }
        
            // Check for collectible pickup
            collectibles.forEach((collectible, index) => {
                if (isColliding(this.x, this.y, collectible)) {
                    collectibles.splice(index, 1);
                    score++;
                    scoreDisplay.textContent = score;
                }
            });
        }
        
        
    }

    function isColliding(x, y, obj) {
        return (
            x < obj.x + obj.width &&
            x + player.width > obj.x &&
            y < obj.y + obj.height &&
            y + player.height > obj.y
        );
    }
    

    let player = new Player(50, 50);
    let obstacles = [];
    let collectibles = [];

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        obstacles.forEach(obj => obj.draw());
        collectibles.forEach(obj => obj.draw());
        player.draw();
        requestAnimationFrame(gameLoop);
    }

    function startGame() {
        // Start the game loop only after obstacles & collectibles are loaded
        gameLoop();
    }

    fetch("obstacles.json")
        .then(response => response.json())
        .then(data => {
            obstacles = data.map(obj => new GameObject(obj.x, obj.y, obj.width, obj.height, "#66b5f4"));
            return fetch("collectibles.json"); // Chain the next fetch
        })
        .then(response => response.json())
        .then(data => {
            collectibles = data.map(obj => new GameObject(obj.x, obj.y, obj.width, obj.height, "#98f1bc"));
            startGame(); // Start the game after both JSON files load
        })
        .catch(error => console.error("Error loading JSON files:", error));

    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp": player.move(0, -player.speed); break;
            case "ArrowDown": player.move(0, player.speed); break;
            case "ArrowLeft": player.move(-player.speed, 0); break;
            case "ArrowRight": player.move(player.speed, 0); break;
        }
    });


});
