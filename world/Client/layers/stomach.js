let stomach = new image({
    "x":275,
    "y":40,
    "image":images.stomach,
     "size_x":200,
     "size_y":200,
    "after_draw_func":function(){

        if(this.image && this.colored_image==undefined){
            this.colored_image = colorscale(this.image,"100,0,0,0.5")
        }


        if(this.colored_image){
            this.clip_canvas.width = this.display_size_x
            this.clip_canvas.height = this.display_size_y
            this.clip_screen.imageSmoothingEnabled = false;
            

            this.clip_screen.clearRect(0,0,this.clip_canvas.width,this.clip_canvas.height)
            


            this.temp_clip_canvas.width = this.display_size_x
            this.temp_clip_canvas.height = this.display_size_y
            this.temp_clip_screen.imageSmoothingEnabled = false;

            this.temp_clip_screen.clearRect(0,0,this.temp_clip_canvas.width,this.temp_clip_canvas.height)


            
            
            let pixles = 16
            let pixle_width = this.display_size_x/pixles
            let last_x = 0


            

            for(let i=0;i<pixles;i++){

                
        

                this.temp_clip_screen.fillStyle = "rgb(100,0,0)" 

                
                let y = (((player.hunger/player.max_hunger)*this.display_size_y)*-1)-((noise(i*10,(engin.time_in_loop/50),0.5,{"seed":1000,"oct":1})*50)-25)

                this.temp_clip_screen.fillRect(last_x, (this.display_size_y), Math.round(pixle_width), y); 
                // console.log(last_x, (this.display_size_y), pixle_width, (((player.hunger/player.max_hunger)*this.display_size_y)*-1)-((noise(i*10,(engin.time_in_loop/50),0.5,{"seed":1000,"oct":1})*50)-50))
                last_x += Math.round(pixle_width)
                // this.clip_screen.drawImage(this.temp_clip_canvas,0,0)



            }

            this.clip_screen.save()

            this.clip_screen.drawImage(colorscale(this.image,"100,0,0,0.5"),0,0,this.image.width,this.image.height,0,0,this.display_size_x,this.display_size_y);

            clip(this.clip_screen)

            this.clip_screen.drawImage(this.temp_clip_canvas,0,0);


            this.clip_screen.restore()

            screen.drawImage(this.clip_canvas,this.x,this.y)



            this.temp_clip_screen.clearRect(0,0,this.temp_clip_canvas.width,this.temp_clip_canvas.height)
            this.clip_screen.clearRect(0,0,this.clip_canvas.width,this.clip_canvas.height)


            for(let i=0;i<pixles;i++){

                


                let y = (((player.hunger/player.max_hunger)*this.display_size_y)*-1)-((noise(i*10,(engin.time_in_loop/50),0.5,{"seed":1000,"oct":1})*50)-25)+this.display_size_y

                // this.temp_clip_screen.beginPath();
                // this.temp_clip_screen.lineWidth = 7.5
                // this.temp_clip_screen.strokeStyle = "red"
                // // console.log(this.x+last_x, this.y+y,this.x+last_x+Math.round(pixle_width), this.y+y)
                // this.temp_clip_screen.moveTo(Math.round(pixle_width*i), y);
                // this.temp_clip_screen.lineTo(Math.round(pixle_width*(i+1)), y);
                // this.temp_clip_screen.stroke();

                this.temp_clip_screen.fillStyle = "red"

                this.temp_clip_screen.fillRect(Math.round(pixle_width*i), y,Math.ceil(pixle_width),Math.ceil(pixle_width)/2)
            }




            this.clip_screen.save()

            this.clip_screen.drawImage(colorscale(this.image,"255,0,0,0.5"),0,0,this.image.width,this.image.height,0,0,this.display_size_x,this.display_size_y);

            clip(this.clip_screen)

            this.clip_screen.drawImage(this.temp_clip_canvas,0,0);


            this.clip_screen.restore()


            
            

            screen.drawImage(this.clip_canvas,this.x,this.y)



            
        }




       
    }
    
})

stomach.clip_canvas = document.createElement('canvas')
stomach.clip_screen = stomach.clip_canvas.getContext("2d")




stomach.temp_clip_canvas = document.createElement('canvas')
stomach.temp_clip_screen = stomach.temp_clip_canvas.getContext("2d")

// console.log(stomach.image)
// stomach.colored_image = colorscale(stomach.image,"100,0,0")




