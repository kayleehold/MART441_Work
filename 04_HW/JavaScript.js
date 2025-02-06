function PrincessStory()
{
    

/* QUESTION ONE */
var ChoiceOne = window.prompt('You are a princess. You have been arraged to marry the prince of a far away kingdom whom you have never met. DO YOU A) Stay and marry the prince or B) Escape the castle and runaway?')


if (ChoiceOne == 'A')
{
    /* Question One Choosing A */
    var ChoiceTwo1 = window.prompt('The engagement is settled and your wedding date picked. You travel to the new kingdom. You come face to face with the prince upon entering the palace gates. He bows to you slowly and offers his hand to help you down from the carriage. DO YOU A) Take his hand kindly B) Ignore his help and gesture?') 

    
    if(ChoiceTwo1 == 'A')
    {
        /* Question Two Choosing A */
        var ChoiceThree1 = window.prompt ('The prince introduces himself and whispers in your ear asking you if you would meet him in secret after dinner. DO YOU A) Agree to meet him B) Stay in your room and rest early?')
        
        if(ChoiceThree1 == 'A')

        {
            var Ending1 = window.prompt ('You meet him in the garden, he is a lot more relaxed in his body language and you see a bouquet of flowers behind his back. These flowers must have been specially shipped from her home since they only grow in her home kingdom. You spent the night chatting and conversation feels so natural. Over the next few months before the wedding you slowly fall in love and live happily ever after. A) Play Again B) End')

        }
        else
        {
            var Ending2 = window.prompt('You find a bouquet of flowers at your door in the morning. They are from the prince. These flowers must have been specially shipped from her home since they only grow in her home kingdom. Over the next few months before the wedding you slowly fall in love and live happily ever after. A) Play Again B) End')
        }
    }
    else
    {
        /* Question Two Choosing B */
        var ChoiceThree2 = window.prompt ('The prince remains quite throughout the night. After dinner he finds you alone and asks if you will meet with him alone in the rose garden later that evening. DO YOU A) Agree to meet him B) Stay in your room and rest early?')
    
        if(ChoiceThree2 == 'A')
        {
            var Ending3 = window.prompt ('You meet him in the garden, he is a lot more relaxed in his body language and you see a bouquet of flowers behind his back. These flowers must have been specially shipped from her home since they only grow in her home kingdom. You spent the night chatting and conversation feels so natural. Over the next few months before the wedding you slowly fall in love and live happily ever after. A) Play Again B) End')
        }
        else
        {
            var Ending4 = window.prompt ('You find a bouquet of flowers at your door in the morning. They are from the prince. These flowers must have been specially shipped from her home since they only grow in her home kingdom. Over the next few months before the wedding you slowly fall in love and live happily ever after. A) Play Again B) End')
        }
    }
}
else
{
    /* Question One Choosing B */
    var ChoiceTwo2 = window.prompt('You plan your escape for nightfall. Do you A) Pack lightly B) Pack heavy including armour?')

    if(ChoiceTwo2 == 'A')
    {
        /* Question Two Choosing A */
        var ChoiceThree3 = window.prompt ('You pack light but you realize after hours in the woods you are being followed. DO YOU A) Yell out and demand they show themself B) Run quickly in hopes of outrunning them?')
    
        if (ChoiceThree3 == 'A')
        {
            var Ending5 = window.prompt ('The person shows themself. It is your personal guard Maria who has followed you. She says she is sworn to protect you and wishes to follow you to help you escape. You agree to let her follow you. With her help you living lives full of adventure, love, and your choosen family. It is a happy ending')
        }
        else
        {
            var Ending6 = window.prompt ('You run but you are weak and slow. You trip and fall twisting your ankle. The person catches up and comes toward you. It is your personal guard Maria who has followed you. She says she was sworn to protect you till the end of the earth. You agree to let her follow you. With her help you living lives full of adventure, love, and your choosen family. It is a happy ending')
        }
    }
    else
    {
        /* Question Two Choosing B */
        var ChoiceThree4 = window.prompt ('You pack heavy but you realize after hours in the woods you are being followed. DO YOU A) Point your sword and demand they show themself B) Run quickly in hopes of outrunning them?')    
    
        if (ChoiceThree3 == 'A')
            {
                var Ending7 = window.prompt ('The person shows themself but not before you almost take them out with your sword from fear. They dodge the swing and you see that the person is your personal guard Maria who has followed you. She says she has sworn to protect you till the end of the earth. You agree to let her follow you. With her help you living lives full of adventure, love, and your choosen family. It is a happy ending')
            }
            else
            {
                var Ending8 = window.prompt ('You run but you are weak and slow from your heavy packing. You trip and fall twisting your ankle along with cutting your arm on the sword as you fall. The person catches up and comes toward you. It is your personal guard Maria who has followed you. She says she would follow you to the end of the earth. She helps mend your cut and helps you walk. You agree to let her follow you. With her help you living lives full of adventure, love, and your choosen family. It is a happy ending')
            }
    }
    }
}    


