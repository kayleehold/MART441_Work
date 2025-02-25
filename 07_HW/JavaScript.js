//Array
var imageTags = ["image1", "image2", "image3", "image4","image5","image6","image7","image8","image9","image10","image11","image12"];
//title image display
var blankImagePath = "images/titleimage.jpg";
//actual images
var actualImages = new Array();

//new variables hw6
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
// JSON declaration
var player = {"firstname":"", "lastname":"", "age":0, "score":0};
    
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
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
        
    }
    else if(firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    
    }

    // check to see if the images do not match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {  
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "EndScore.html";
        }
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "Game.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }
    
   
}

