engin=new engin_class()

engin.cursor = new Cursor()

// let cursor = new Cursor()



function save_local(index,item){


    
    localStorage.setItem(index, JSON.stringify(
        item
    ))


}

stack_size=64

function get_local(index){

    var data = JSON.parse(localStorage.getItem(index))
    
    
    return data

    
}


selected_status=sessionStorage.getItem("status")

if(!selected_status){
    selected_status="offline"

}


if(selected_status=="offline"){
    selected_slot=sessionStorage.getItem("slot")
    console.log("Selected slot: "+selected_slot)

    
    
    if(!selected_slot){
        window.location.href = "../start/index.html";
    }
}


if((!get_local("username")) && (!get_local("password"))){
    save_local("username","")
    save_local("password","")
}



particles=[]
emiters=[]











//DEL
breaking_time_0=false


AlertedScreenSecurityError=false


let slot_size=150


//Blocks drawn display
blocks_drawn=0
show_blocks_drawn=false

//FPS display
FPS=0
FPS_times_draw=0
FPS_ticks=0
showFPS=true


//Average Draw Time
ADT=0
ADT_total=0
ADT_ticks=0
showADT=false

//Average Update Time
AUT=0
AUT_total=0
AUT_ticks=0
showAUT=false

showCurrentTime=false
show_time_stamp=false
show_time_paused=false
show_all_time=false


regeneration_timer=false

function reset_heart(){
    heart_parts=[]
    for(let i=1;i<=10;i++){
        heart_parts.push(i)

    }
}

function heal_heart(heal_amount=1){

    if(heart_parts.length<10){
        if(heart_parts.length+heal_amount>=10){
            reset_heart()
        }
        else{
            let number_not_included=[1,2,3,4,5,6,7,8,9,10]
            heart_parts.forEach(part => {
                number_not_included[part-1]=""
            });

            //Remove all empty spaces
            let old_number_not_included=number_not_included
            number_not_included=[]

            old_number_not_included.forEach(number => {
                if(number!=""){
                    number_not_included.push(number)
                }
            });

            
                
            for(let i=1;i<=heal_amount;i++){
                heart_parts.push(number_not_included[Math.round((number_not_included.length-1)*Math.random())]) 
                number_not_included.splice(Math.round((number_not_included.length-1)*Math.random()),1)
            }
            // console.log(number_not_included)
            
        }
    }

}

function damage_heart(damage_amount=1){

    if(heart_parts.length-damage_amount<=0){
        // console.log("INSTA KILL")
        heart_parts=[]
    }
    else{
        for(let i=1;i<=damage_amount;i++){
        
            heart_parts.splice(Math.round((heart_parts.length-1)*Math.random()),1)
        }
    }

}

heart_parts=[]
reset_heart()



showVelocity=false
LastTimeWDown=0



SpeedInBlocks=false



show_tab_list=false



//CAM SETTINGS
camera_bounded=true
world_cam=[0,0]
block_size=32
let chuck_size  = 20
let render_distance = [0,0]

//FOV SETTINGS
FOV = localStorage.getItem("FOV") ? localStorage.getItem("FOV") : 1.25


function set_fov(fov){
    if(FOV!=fov){
        localStorage.setItem("FOV",FOV)
        FOV=fov
    }
    
    display_block_size=(block_size*FOV)

    render_distance = [Math.ceil(((innerWidth/display_block_size)/chuck_size)/2),Math.ceil(((innerHeight/display_block_size)/chuck_size)/2)]
}

set_fov(FOV)


//DEL?
draw_block="air"
mining=false
is_placing=false
old_is_placing=is_placing

//Multiplayer
multiplayer_allod=true
multiplayer=false
connected=false

game_paused=false


chat=[]


texture_pack="a"




let oped=true



fly_par_tick=0



















//Draw loadingg screen
clear_screen("0,0,0")
screen.fillStyle = "rgb(255,255,255)" ;
screen.textAlign = "center";
screen.font = "200px serif";
screen.fillText("Loading...", innerWidth/2, innerHeight/2);