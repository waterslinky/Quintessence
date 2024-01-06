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
showFPS=false


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

//FOV SETTINGS
FOV=localStorage.getItem("FOV") ? localStorage.getItem("FOV") : 1.25

function set_fov(fov){
    if(FOV!=fov){
        localStorage.setItem("FOV",FOV)
        FOV=fov
    }
    

    // console.log(FOV)
    

    display_block_size=(block_size*FOV)
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



















class par{
    constructor(x,y,time,color="0,0,255"){

        this.color=color
        this.change_color()



        // if(engin.time_in_loop){
        //     this.end_time_time=engin.time_in_loop+6000
        // }
        // else{
        this.end_time_time=time
        this.start_time=engin.time_in_loop
        this.time_untill_fade=300


        // }

        // this.end_time_time=engin.time_in_loop+6000

        

        this.angle=(Math.PI*.5)+(Math.PI*Math.random())

        this.angle=(Math.PI*.7)+((Math.PI-(Math.PI*.4))*Math.random())


        this.grav=0.3
        this.air_drag=0.08

        this.x=x+((Math.random()*block_size)-(block_size/2))+(block_size/2)
        // this.x=x+(block_size/2)
        // this.y=y+(block_size/2)

        this.y=y+((Math.random()*block_size)-(block_size/2))+(block_size/2)
        // alert(((Math.random()*50)-25))
        // if(this.angle>Math.PI*1.5 && this.angle>Math.PI/2 ){
        // if(this.angle<Math.PI/2 ){
        // low of Math.PI*.5
        // hight of Math.PI*1.5

        // Math.PI*.5+(Math.PI*Math.random())


        // if(this.angle>Math.PI*1.5 || this.angle<Math.PI*.5 ){


        //     // this.angle=Math.PI

        //     this.y=10000
        // }


        this.speed=2

        // let mult=Math.random()*7
        let mult=(6-(Math.random()*3))/2


        this.val_x=Math.sin(this.angle)*mult
        // this.val_y=((Math.cos(this.angle))*mult)-3
        this.val_y=((Math.cos(this.angle))*mult)-1


        // this.whight=(Math.random()/4)+.5
        this.whight=.7+(Math.random()/8)
    }
    change_color(color=this.color){
        this.color=color
    
        this.image = colorscale(white_particle,this.color)

        // console.log("CHNAGE")
    }
    draw(){

        screen.save()

        if(this.time_untill_fade){
            
            if(this.start_time+this.time_untill_fade<engin.time_in_loop){
                
                this.start_time=engin.time_in_loop-(engin.time_in_loop-(this.start_time+this.time_untill_fade))
                this.time_untill_fade=false
                // console.log("DO NOT")
            }
        }

        else{
            let alpha=1-((engin.time_in_loop-this.start_time)/(this.end_time_time-this.start_time))
            screen.globalAlpha = alpha
        }
        // this.start_time=engin.time_in_loop

        
        
        // this.percent_untill_fade

        
        console.log()

        screen.drawImage(this.image, ((this.x*FOV)-player.cam[0])-(6*FOV),  ((this.y*FOV)-player.cam[1])-(6*FOV), 12*FOV,12*FOV);

        screen.restore()

    }
    update(){
        
        this.val_y+=this.grav*this.whight

        if(this.val_x<0){
            this.val_x+=this.air_drag
            if(this.val_x>0){
                this.val_x=0
    
                }   
        }
        if(this.val_x>0){
            this.val_x-=this.air_drag
            if(this.val_x<0){
            this.val_x=0

            }   
        }






       this.val_y+=this.grav*this.whight

        if(this.val_x<0){
            this.val_x+=this.air_drag
            if(this.val_x>0){
                this.val_x=0
    
                }   
        }
        if(this.val_x>0){
            this.val_x-=this.air_drag
            if(this.val_x<0){
            this.val_x=0

            }   
        }



        this.x+=this.val_x*3
        this.y+=this.val_y*3
    }
}

class particle_link{
    constructor(info){
        this.link=info.link
    }
    draw(){
        if(this.link.particle){
            if(this.link.particle.draw){
                this.link.particle.draw()
            }
        }
        
        
 

    }
    update(){
        if(this.link.particle ){
            if(this.link.particle.update){
                this.link.particle.update()
            }
            
        }
        else{
            this.end_time_time=0
        }

        
    }
}
class particle_emitter{
    constructor(info){
        this.particle=info.particle

        this.emiter_timer=120 // || function(){ return 100+(Math.random()*10) }

        this.spawn_next_particle_after=engin.time_in_loop+this.emiter_timer

  

        if(info.parent){
            this.parent=info.parent
            this.x=this.parent.x+(this.parent.size_x/2)
            this.y=this.parent.y+(this.parent.size_y/2)
            //Parent Must have a X and a Y
        }
        else{
            this.x=info.x
            this.y=info.y
        }

    }
    update(){
        // console.log("set to par")

        if(this.parent){
            this.x=this.parent.x+(this.parent.size_x/2)
            this.y=this.parent.y+(this.parent.size_y/2)
            //Parent Must have a X and a Y
        }

        while(this.spawn_next_particle_after<=engin.time_in_loop){
            this.spawn_next_particle_after=engin.time_in_loop+this.emiter_timer
            particles.push(new this.particle(
                this.x,this.y,
                engin.time_in_loop+700+(Math.random()*400),
                "181, 255, 250",
                Math.PI*(Math.random()*2)

            ))
            // console.log("EMIT PART")
        }
        // if(this.)


    }

}



class base_link{
    constructor(info){
        this.particle=info.particle
    }
}




class fly_par{
    constructor(x,y,time,color="0,0,255",angle){

        this.color=color ? color : undefined
        this.change_color()

        this.size=20

        



        // if(engin.time_in_loop){
        //     this.end_time_time=engin.time_in_loop+6000
        // }
        // else{
        this.end_time_time=time
        this.start_time=engin.time_in_loop
        this.time_untill_fade=500


        // }

        // this.end_time_time=engin.time_in_loop+6000

        

        // this.angle=(Math.PI*.5)+(Math.PI*Math.random())

        let rang=.4

        this.angle=(angle+(Math.PI*(rang/2)))-((Math.PI-(Math.PI*rang))*Math.random())

        // this.angle=(angle)


        this.grav=0.3
        this.air_drag=0.08

        this.x=x
        // this.x=x+(block_size/2)
        // this.y=y+(block_size/2)

        this.y=y
        // alert(((Math.random()*50)-25))
        // if(this.angle>Math.PI*1.5 && this.angle>Math.PI/2 ){
        // if(this.angle<Math.PI/2 ){
        // low of Math.PI*.5
        // hight of Math.PI*1.5

        // Math.PI*.5+(Math.PI*Math.random())


        // if(this.angle>Math.PI*1.5 || this.angle<Math.PI*.5 ){


        //     // this.angle=Math.PI

        //     this.y=10000
        // }


        this.speed=2

        // let mult=Math.random()*7
        let mult=(6-(Math.random()*3))/5


        this.val_x=Math.sin(this.angle)*mult
        // this.val_y=((Math.cos(this.angle))*mult)-3
        this.val_y=((Math.cos(this.angle))*mult)


        // this.whight=(Math.random()/4)+.5
        this.whight=.7+(Math.random()/8)
    }
    change_color(color=this.color){
        this.color=color
    
        this.image = colorscale(white_particle,this.color)

        // console.log("CHNAGE")
    }
    draw(){

        screen.save()

        if(this.time_untill_fade){
            
            if(this.start_time+this.time_untill_fade<engin.time_in_loop){
                
                this.start_time=engin.time_in_loop-(engin.time_in_loop-(this.start_time+this.time_untill_fade))
                this.time_untill_fade=false
                // console.log("DO NOT")
            }
        }

        else{
            let alpha=1-((engin.time_in_loop-this.start_time)/(this.end_time_time-this.start_time))
            screen.globalAlpha = alpha
        }
        // this.start_time=engin.time_in_loop

        
        
        // this.percent_untill_fade

        
        console.log()

        screen.drawImage(this.image, ((this.x*FOV)-player.cam[0])-((this.size/2)*FOV),  ((this.y*FOV)-player.cam[1])-((this.size/2)*FOV), this.size*FOV,this.size*FOV);

        screen.restore()

    }
    update(){
        
        // this.val_y+=this.grav*this.whight

        // if(this.val_x<0){
        //     this.val_x+=this.air_drag
        //     if(this.val_x>0){
        //         this.val_x=0
    
        //         }   
        // }
        // if(this.val_x>0){
        //     this.val_x-=this.air_drag
        //     if(this.val_x<0){
        //     this.val_x=0

        //     }   
        // }






    //    this.val_y+=this.grav*this.whight

    //     if(this.val_x<0){
    //         this.val_x+=this.air_drag
    //         if(this.val_x>0){
    //             this.val_x=0
    
    //             }   
    //     }
    //     if(this.val_x>0){
    //         this.val_x-=this.air_drag
    //         if(this.val_x<0){
    //         this.val_x=0

    //         }   
    //     }



        this.x+=this.val_x*3
        this.y+=this.val_y*3
    }
}


//Draw loadingg screen
clear_screen("0,0,0")
screen.fillStyle = "rgb(255,255,255)" ;
screen.textAlign = "center";
screen.font = "200px serif";
screen.fillText("Loading...", innerWidth/2, innerHeight/2);