

var colors=["red", "blue", "green", "yellow"];
var randomchoosencolor=[]
var userchoosencolor=[]
var level=0;
var started=false;

$(".btn").click(function(){
    var userchoice=$(this).attr("id");
    // console.log(userchoice);
    userchoosencolor.push(userchoice);
    // console.log(userchoosencolor);
    playsound(userchoice)
    animatePress(userchoice);
    checkanswer(userchoosencolor.length -1);
});


// var choosen =[]
function next(){
    userchoosencolor=[];
level++;
$("#level-title").text("Level " + level);

    var randnum=Math.floor(Math.random()*4);
    // console.log(randnum);
    var choosen = colors[randnum];
    // console.log(choosen);
    randomchoosencolor.push(choosen);
    console.log(randomchoosencolor);
    id="#"+choosen;
    // setInterval(() => {
    //     
    // }, 500);
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(choosen);
    
}





function playsound(name){
    var sound="sounds/" + name + ".mp3";
    const audio = new Audio(sound);
    audio.play();
}

function animatePress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentcolor).removeClass("pressed");
      }, 100);
    }

$(document).keypress(function(){
        if(!started){
            $("#level-title").text("Level " + level);
            next();
            started=true;
        }
    });

function checkanswer(index){
    if(randomchoosencolor[index]==userchoosencolor[index]){
        console.log("Success");
        if(userchoosencolor.length==randomchoosencolor.length){
            setTimeout(function(){
                next();
            },1000);
        }
    }
    else{
        console.log("Wrong");
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("#level-title").text("Game over ! Press any key to restart");
        restart();
    }
}

function restart(){
    started=false;
    randomchoosencolor=[];
    level=0;
}
// for(let i=0;i<5;i++)
// {
//     next();
// }