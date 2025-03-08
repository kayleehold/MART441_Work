$(document).ready(function() {
    // Select all images in the image container
    let images = $('.image-container img');
    let index = 0; // Track the current image index
    
    // Define an array of text messages to cycle through
    let texts = ['"To lose one parent may be regarded as misfortune; to lose both looks like carelessness" - Oscar Wilde', '"Set your heart ablaze!" - Rengoku', '"Friendship is magic!!" - My Little Pony'];
    let textIndex = 0; // Track the current text index
    
    // Define an array of shape colors to cycle through
    let shapes = ["purple", "pink", "blue"];
    let shapeIndex = 0; // Track the current shape index
    
    // Function to cycle through images
    function cycleImages() {
        $(images[index]).fadeOut(500, function() {
            index = (index + 1) % images.length; // Move to the next image
            $(images[index]).fadeIn(500); // Show the next image
        });
    }
    setInterval(cycleImages, 3000); // Change image every 3 seconds

    // Function to cycle through text messages
    function cycleText() {
        let textContainer = $('.text-container');
        textContainer.fadeOut(500, function() {
            textIndex = (textIndex + 1) % texts.length; // Move to next text
            textContainer.text(texts[textIndex]).fadeIn(500); // Update text
        });
    }
    setInterval(cycleText, 4000); // Change text every 4 seconds
    
    // Function to move and change the shape
    function moveShape() {
        let shape = $('.shape');
        shapeIndex = (shapeIndex + 1) % shapes.length; // Move to next shape color
        shape.css('background-color', shapes[shapeIndex]); // Change color
        
        // Set random position within the viewport
        shape.animate({
            left: Math.random() * ($(window).width() - 50) + 'px',
            top: Math.random() * ($(window).height() - 50) + 'px'
        }, 1000);
    }
    setInterval(moveShape, 2000); // Move shape every 2 seconds
});