



class button{
    constructor(info){

        this.orgin_x=info.x
        this.orgin_y=info.y


        if(info.align=="center"){
            this.x=info.x-(info.size_x/2)
            this.y=info.y-(info.size_y/2)
        }
        else{
            this.x=this.orgin_x
            this.y=this.orgin_y
            // console.log("NOOOOOOOT CENTER")
        }
        // console.log(info.x)

        if(info.update_func){
            this.update_func=info.update_func
        }
        

        this.color=info.color

        this.hover=false

        this.size_x=info.size_x
        this.size_y=info.size_y



        this.func=info.func
       

        if(info.image){
            this.image=info.image
        }
    }
    draw(){
        // screen.textAlign = "center";

        if(this.image){
            screen.save()
            // this.hover=true
            if(this.hover){
                screen.filter="brightness(1.25)"
            }
            
            screen.drawImage(this.image,0,0,this.image.width,this.image.height,this.x,this.y,this.size_x,this.size_y);
            screen.restore()

        }
        else{
            screen.fillStyle = "rgb("+this.color+")" ;
            screen.fillRect(this.x,this.y,this.size_x,this.size_y); 
        }


    }
    update(){
        this.hover=false
        
        
        if(this.size_y<0){
            if(mouse_x>=this.x && mouse_x<=this.x+this.size_x && mouse_y>=this.y+this.size_y && mouse_y<=this.y){
                this.hover=true
                if(mouse_down){
                    this.func()
                    mouse_down=false

                }
                
    
            }
        }

        else{
                    if(mouse_x>=this.x && mouse_x<=this.x+this.size_x && mouse_y>=this.y && mouse_y<=this.y+this.size_y){
            this.hover=true

            if(mouse_down){
                this.func() 
            mouse_down=false

            }

            
            // this.x=0


        }
        }

        if(this.update_func){
            this.update_func()
        }
        // this.update_funcinfo.update_func()

    }
}

class text{
    constructor(x,y,text,size,color,align="center",func=undefined,border_image=undefined){
        this.color=color
        this.align=align
        this.text=text
        this.x=x
        this.y=y

        this.func=func

        this.border_image_margin=15
        this.size=size

        this.border_image=border_image
        // this.size
    }
    draw(){
        screen.fillStyle = this.color ;
        
        screen.textAlign = this.align;
        screen.font = this.size+"px serif";
        let offset=0
        if(this.align=="center" ||this.align=="left" ){
            
            offset=(this.size/2.5)
        }
        // gray_box_outline

        if(this.border_image){
            screen.drawImage(this.border_image,0,0,this.border_image.width,this.border_image.height,this.x-(screen.measureText(this.text).width/2)-this.border_image_margin,this.y-(this.size/2)-this.border_image_margin,(screen.measureText(this.text).width)+(this.border_image_margin*2),this.size+(this.border_image_margin*2));

        }
        


        screen.fillText(this.text, this.x, this.y+offset);
        // console.log(screen.measureText("hello").width,"POPOPOPO")
        

    }
    update(){
        if(this.func){
            this.func()
        }
        
    }
  
}

class slidder{
    constructor(start_pos,end_pos){
        this.start_pos=start_pos
        this.end_pos=end_pos
        this.slider_width=25

        this.point_len=0
        this.point_pos=[start_pos[0],start_pos[1]]
        this.down=false

    }
    draw(){
        screen.strokeStyle = 'dark_gray';
        screen.lineWidth = this.slider_width;
    
        // draw a red line
        screen.beginPath();
        screen.moveTo(this.start_pos[0], this.start_pos[1]);
        screen.lineTo(this.end_pos[0], this.end_pos[1]);
        screen.stroke();

        screen.fillStyle = 'rgb(220,220,220)';



        screen.beginPath();
        screen.arc(this.point_pos[0],this.point_pos[1], 30, 0, 2 * Math.PI);
        screen.fill();
    }
    update(){

        // this.down=false

        if(mouse_down){
            if(mouse_x>=this.point_pos[0]-30){
                if(mouse_x<=this.point_pos[0]+30){
                    if(mouse_y>=this.point_pos[1]-30){
                        if(mouse_y<=this.point_pos[1]+30){
                            this.down=true

                        }
                    }
                }
            }
            
        }
        if(mouse_released){
            this.down=false
      

        }

        if(this.down){
            this.point_len=(mouse_x-this.start_pos[0])/(this.end_pos[0]-this.start_pos[0])
            if(this.point_len>1){
                this.point_len=1
            }
            if(this.point_len<0){
                this.point_len=0
            }

        }
        this.point_pos=[this.start_pos[0]+((this.end_pos[0]-this.start_pos[0])*this.point_len),this.start_pos[1]+((this.end_pos[1]-this.start_pos[1])*this.point_len)]



    }
  
}
