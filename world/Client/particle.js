

// class particle_link{
//     constructor(info){
//         this.link=info.link
//     }
//     draw(){
//         if(this.link.particle){
//             if(this.link.particle.draw){
//                 this.link.particle.draw()
//             }
//         }
        
        
 

//     }
//     update(){
//         if(this.link.particle ){
//             if(this.link.particle.update){
//                 this.link.particle.update()
//             }
            
//         }
//         else{
//             this.end_time_time=0
//         }

        
//     }
// }



class base_particle{
    constructor(info){
        this.parent = info.parent
        this.parent_location = info.parent_location
    }
}
class particle_emitter extends base_particle{
    constructor(info){
        super(info)
        this.particle=info.particle

        this.emiter_timer=info.emiter_timer || 120

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

        // if(this.link.particle ){
        //     if(this.link.particle.update){
        //         this.link.particle.update()
        //     }
            
        // }
        // else{
        //     this.end_time_time=0
        // }

        if(this.parent){
          
                this.x=this.parent.x+(this.parent.size_x/2)
           
                this.y=this.parent.y+(this.parent.size_y/2)
          
            //Parent Must have a X and a Y
        }

        while(this.spawn_next_particle_after<=engin.time_in_loop){
            
            this.spawn_next_particle_after=engin.time_in_loop+this.emiter_timer
            // console.log("R")
            particles.push(new this.particle({
                "x":this.x,
                "y":this.y,
                "color":"181, 255, 250",
                "angle":Math.PI*(Math.random()*2)

                }
            ))
        }
    }

    draw(){
        if(this.particle){
            if(this.particle.draw){
                this.particle.draw()
            }
        }
        
        
 

    }
    

}

class fly_par extends base_particle{
    constructor(info){
        super(info)

        this.color=info.color ? info.color : undefined
        this.change_color()

        this.size=20

        



        // if(engin.time_in_loop){
        //     this.end_time_time=engin.time_in_loop+6000
        // }
        // else{
        this.end_time_time=engin.time_in_loop+700+(Math.random()*400)
        this.start_time=engin.time_in_loop
        this.time_untill_fade=500


        // }

        // this.end_time_time=engin.time_in_loop+6000

        

        // this.angle=(Math.PI*.5)+(Math.PI*Math.random())

        let rang=.4

        this.angle=(info.angle+(Math.PI*(rang/2)))-((Math.PI-(Math.PI*rang))*Math.random())

        // this.angle=(angle)


        this.grav=0.3
        this.air_drag=0.08

        this.x=info.x
        // this.x=x+(block_size/2)
        // this.y=y+(block_size/2)

        this.y=info.y
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
    
        this.image = colorscale(images.white_particle,this.color)

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

class Smoke_par extends base_particle{
    constructor(info){
        super(info)



        this.size=block_size*1.5
        this.image = images.smoke.random_image()

     
        
        this.start_time=engin.time_in_loop
        this.end_time_time=this.start_time+30000


        this.x=info.x
        this.y=info.y
       

        this.val_x=0
        this.val_y=-0.5

        this.opacity = 1

    }
    
    draw(){

        screen.save()

        screen.globalAlpha = this.opacity

        screen.drawImage(this.image, ((this.x*FOV)-player.cam[0])-((this.size/2)*FOV),  ((this.y*FOV)-player.cam[1])-((this.size/2)*FOV), this.size*FOV,this.size*FOV);

        screen.restore()

    }
    update(){
       
        this.x+=this.val_x
        this.y+=this.val_y

        this.opacity-=0.002

        if(this.opacity<=0){
            this.opacity=0
            this.life=0
        }

    }
}

class par extends base_particle{
    constructor(info){
        super(info)

        this.color=info.color || "0,0,255"
        this.change_color()



        // if(engin.time_in_loop){
        //     this.end_time_time=engin.time_in_loop+6000
        // }
        // else{
        this.end_time_time=info.time
        this.start_time=engin.time_in_loop
        this.time_untill_fade=300


        // }

        // this.end_time_time=engin.time_in_loop+6000

        

        this.angle=(Math.PI*.5)+(Math.PI*Math.random())

        this.angle=(Math.PI*.7)+((Math.PI-(Math.PI*.4))*Math.random())


        this.grav=0.3
        this.air_drag=0.08

        this.x=info.x+((Math.random()*block_size)-(block_size/2))+(block_size/2)
        // this.x=x+(block_size/2)
        // this.y=y+(block_size/2)

        this.y=info.y+((Math.random()*block_size)-(block_size/2))+(block_size/2)
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