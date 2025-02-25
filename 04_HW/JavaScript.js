

function getName(greeting)
{
        var currentName = document.getElementById("txtName").value;
        document.getElementById("lblName").innerHTML = greeting + currentName;

        document.getElementById("btnSubmit").style.display="none";
        document.getElementById("txtName").style.display="none";
        document.getElementById("nameQ").style.display="none";

        document.getElementById("choice").style.display="block";
        document.getElementById("btnSubmit1").style.display="block";

        
        myQuestion.innerHTML = "Do you meet the prince from another kingdom or become a knight?";
        
}

function getChoice1()
{
    var myChoice = document.getElementById("choice").value;
    var myQuestion = document.getElementById("question");
    if(myChoice === "Prince")
    {
        document.getElementById("mainImage").src = "images/Prince.jpg"

        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit1").style.display="none";
        
        document.getElementById("choice2").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";
        

        myQuestion.innerHTML = "You Choose to meet the prince. He is kind and as you get to know him more and more you fall in love. He proposes. Do yo Decline or Accept?";
    }
    else if(myChoice === "Knight")
    {

        document.getElementById("mainImage").src = "images/Knight.jpg"

        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit1").style.display="none";
        
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";
        myQuestion.innerHTML = "You choose to become a Knight. Do you stay and train in your kingdom in hopes of being accepted or runaway to another land?";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }

}

function getChoice2()
{
    var answer = document.getElementById("choice2").value;
    var myQuestion = document.getElementById("question");

    if(answer === "Decline") //Decline the prince's Proposal
    {


        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
        
        document.getElementById("choice4").style.display="block";
        document.getElementById("btnSubmit4").style.display="block";
        

        myQuestion.innerHTML = "You decline the prince's offer and instead find joy in exploring the world and growing knowlege. Was it because you are Scared or because you vaild Independence?";

    }
    else if(answer === "Accept") //Accept the prince's proposal
    {
        document.getElementById("choice2").style.display="none";
        document.getElementById("btnSubmit2").style.display="none";
        
        document.getElementById("choice5").style.display="block";
        document.getElementById("btnSubmit5").style.display="block";
        myQuestion.innerHTML = "You accept the prince's proposal and become great rulers in as king and queen. Do you rule your kingdom in kindness or fear?";

    }
    else
    {
        myQuestion.innerHTML = "Invalid answer";
    }
}

function getChoice3()
{
    var answer = document.getElementById("choice3").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Stay") //Stay in the kingdom to become a knight
    {
        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";

        myQuestion.innerHTML = "You work hard and are respect by all in the kingdom, you live down in history has a most strong, cunning, and beautiful knight and ruler";
    
        document.getElementById("btnRestart").style.display="block"; //Restart Button
    }
    else if(answer === "Runaway") //Runaway to another kingdom to become a knight
    {
        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";

        myQuestion.innerHTML = "You work hard and grow a name for yourself in a new kingdom. You live down in history has a most strong, cunning, and beautiful knight.";
    
        document.getElementById("btnRestart").style.display="block"; //Restart Button
    }
}

function getChoice4()
{
    var answer = document.getElementById("choice4").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Scared") //Decline proposal out of fear
    {
        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";

        myQuestion.innerHTML = "After sometime you gather your courage and open your heart. You accept the prince's proposal and go on to become great and generous rulers known across the world and in history.";
    
        document.getElementById("btnRestart").style.display="block"; //Restart Button
    }
    else if(answer === "Independence") //Decline proposal for Independence
    {
        document.getElementById("choice4").style.display="none";
        document.getElementById("btnSubmit4").style.display="none";

        myQuestion.innerHTML = "You delcine the prince's proposal and go on to learn more about the world through independent study and travel. You knowlege helps your kingdom and you go down in history.";
    
        document.getElementById("btnRestart").style.display="block"; //Restart Button
    }
}

function getChoice5()
{
    var answer = document.getElementById("choice5").value;
    var myQuestion = document.getElementById("question");
    if(answer === "Kindness") 
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";

        myQuestion.innerHTML = "The kingdom adores you and your husband, you go on to become great and generous rulers known across the world and in history.";
    
        document.getElementById("btnRestart").style.display="block"; //Restart Button
    }
    else if(answer === "Fear") 
    {
        document.getElementById("choice5").style.display="none";
        document.getElementById("btnSubmit5").style.display="none";

        myQuestion.innerHTML = "Your kingdom obeys your every command, you go on to become hated rulers known across the world and in history.";

        document.getElementById("btnRestart").style.display="block"; //Restart Button

    }
}






