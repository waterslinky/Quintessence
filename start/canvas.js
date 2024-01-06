const canvas = document.getElementById("win");




old_innerWidth=2574
old_innerHeight=1285


canvas.width =old_innerWidth;
canvas.height =old_innerHeight;

aspect=[16,8]

screen_scale=1




if((innerWidth*(aspect[1]/aspect[0]))>innerHeight){
    console.log("canv B")

    canvas.style.height=`${innerHeight}px`
    screen_scale=old_innerHeight/innerHeight
}
else{
    console.log("canv A")

    canvas.style.width =`${innerWidth}px`
    screen_scale=old_innerWidth/innerWidth
}


const screen = canvas.getContext("2d");


innerWidth=2574
innerHeight=1285

screen.imageSmoothingEnabled = false;

function clear_screen(color="183,183,255"){
        screen.fillStyle = "rgb("+color+")" ;

        screen.fillRect(0,0, innerWidth,innerHeight); 

      
}