var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, description, author, year)
    {
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    // Printing out on page
    toString()
    {
        return "Title: " + this.title + "\n Description: " + this.description + "\n Author: " + this.author + "\n Year: " + this.year 
    }

/*     For Images Later
    get theTitle()
    {
        return this.title;
    } */

}


// array to class to print
function initializeArray()
{
   // My Variables
    var myViewFinder = new ViewFinder("black lives matter", "99.films", "Black Lives Matter protester holding sign that reads 'racism isn't getting worse it's getting filmed'", "2020");
    var myViewFinder1 = new ViewFinder("Heinous actions: opposition to Trump", "David McNew", "People protest against Donald Trump on 17 February in Los Angeles, California","2025");
    var myViewFinder2 = new ViewFinder("World Violent protests in Georgia", "Jerome Gilles","Pro-European Union demonstrators hold Georgian and EU flags during a protest against the government's postponement of European Union accession talks until 2028, outside the Parliament in central Tbilisi, Georgia", "2024");
    var myViewFinder3 = new ViewFinder("Climate protest mires flights at Germany's Frankfurt airport as police thwart linked action in London", "Arne Dedert", "Emergency vehicles airport security are seen on a taxiway at Frankfurt Airport, where two activists (M) have glued themselves to the pavement", "2024");
    var myViewFinder4 = new ViewFinder("Men of Quality Respect Womens Equality", "Samantha Sophia", "Some candid shots from the 2017 Women’s March in Los Angeles. Powerful image of allies.", "2017");
   
    // Pushing Varibles
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}


function accessInformation()
{
    // Make random number based on Array Length to pick object from array
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);

    // calling the toString
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();

}