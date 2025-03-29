$(document).ready(function() {
    // Get canvas and its context
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    
    // Variable to control the canvas background color
    let bgColor = "#fff";
    
    // CLASS FOR GAME OBJECTS
    class GameObject {
        constructor(x, y, size, color, speedX, speedY) {
            // Set the properties of the object
            this.x = x;                // X position
            this.y = y;                // Y position
            this.size = size;          // Size (radius for circle)
            this.color = color;        // Object color
            this.speedX = speedX;      // Horizontal speed
            this.speedY = speedY;      // Vertical speed
        }

        // Method to draw the object on the canvas
        draw() {
            ctx.fillStyle = this.color;                 // Set fill color
            ctx.beginPath();                            // Start drawing path
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);  // Draw circle
            ctx.fill();                                 // Fill the circle with color
            ctx.closePath();                            // End drawing path
        }

        // Method to move the object
        move() {
            this.x += this.speedX;   // Update X position
            this.y += this.speedY;   // Update Y position

            // Prevent objects from leaving the canvas by reversing speed on collision
            if (this.x - this.size < 0 || this.x + this.size > canvas.width) {
                this.speedX *= -1;  // Reverse X direction on canvas edge hit
            }
            if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
                this.speedY *= -1;  // Reverse Y direction on canvas edge hit
            }
        }
    }

    // CREATE GAME OBJECTS
    let player = new GameObject(150, 150, 30, "#dcb3fb", 0, 0);    // Player controlled by user
    let enemy = new GameObject(400, 300, 40, "#b3d8fb", 2, 2);     // Enemy moves autonomously


    // PLAYER CONTROL WITH ARROW KEYS
    $(document).keydown(function(e) {
        const speed = 5;  // Movement speed for the player

        // Check which arrow key is pressed and move the player accordingly
        switch (e.key) {
            case "ArrowUp":    player.y -= speed; break;   // Move up
            case "ArrowDown":  player.y += speed; break;   // Move down
            case "ArrowLeft":  player.x -= speed; break;   // Move left
            case "ArrowRight": player.x += speed; break;   // Move right
        }
        
        // object canva border
        player.x = Math.max(player.size, Math.min(player.x, canvas.width - player.size));
        player.y = Math.max(player.size, Math.min(player.y, canvas.height - player.size));
    });

    // COLLISION STUFF
    function checkCollision(obj1, obj2) {
        const dx = obj1.x - obj2.x;                      // Difference in X positions
        const dy = obj1.y - obj2.y;                      // Difference in Y positions
        const distance = Math.hypot(dx, dy);             // Calculate the distance between the centers

        return distance < obj1.size + obj2.size;         // True if objects overlap
    }

    // GAME LOOP
    function gameLoop() {
        // Clear the canvas before redrawing objects
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Move the enemy (autonomous movement)
        enemy.move();

        // Draw the player and the enemy
        player.draw();
        enemy.draw();

        // Check for collision between player and enemy
        if (checkCollision(player, enemy)) {
            // Toggle the canvas background color on collision
            bgColor = (bgColor === "#f0f0f0") ? "#ffcccb" : "#f0f0f0";

            // Change the size of both objects on collision
            player.size = (player.size > 20) ? 20 : 40;
            enemy.size = (enemy.size > 20) ? 20 : 40;
        }

        // Apply the new background color to the canvas
        canvas.style.background = bgColor;

        // Continue the animation loop
        requestAnimationFrame(gameLoop);
    }

    // START THE GAME LOOP
    gameLoop();
});