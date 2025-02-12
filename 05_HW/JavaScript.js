//Array
var imageTags = ["image1", "image2", "image3", "image4","image5","image6","image7","image8","image9","image10","image11","image12"];
//title image display
var blankImagePath = "images/titleimage.jpg";
//actual images
var actualImages = new Array();
    
function printBlanks()
{
   //random image creation
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}

function createRandomImageArray()
{   //Actaul image array
    var actualImagePath = ["images/bear.jpg", "images/bunny.jpg", "images/duck.jpg", "images/kirby.jpg", "images/penguin.jpg", "images/snoopy.jpg"];

    var count = [0,0,0,0,0,0];

    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
        
}

//flip image function call from html
function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];

}





