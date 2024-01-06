const canvas = document.getElementById("win");

old_innerWidth=2574
old_innerHeight=1285

canvas.width =old_innerWidth;
canvas.height =old_innerHeight;

aspect=[16,8]

screen_scale=1

if((innerWidth*(aspect[1]/aspect[0]))>innerHeight){
    // console.log("canv B")

    canvas.style.height=`${innerHeight}px`
    screen_scale=old_innerHeight/innerHeight
}
else{
    // console.log("canv A")

    canvas.style.width =`${innerWidth}px`
    screen_scale=old_innerWidth/innerWidth
}


screen = canvas.getContext("2d");
or_screen = screen

innerWidth=2574
innerHeight=1285

screen.imageSmoothingEnabled = false;


function clear_screen(color="183,183,255"){
    screen.fillStyle = "rgb("+color+")" ;
    screen.fillRect(0,0, innerWidth,innerHeight);      
}

function basic_draw_image(image,px_x,px_y,px_width,px_height,x,y,size_x,size_y,render_box=undefined){

    let start_render_percent_x=0
    let start_render_percent_y=0

    let render_percent_x=1
    let render_percent_y=1


    if(render_box!=undefined){
        if(render_box && y<render_box[1]){


                let h=((render_box[1]-y))/size_y

                if(h<0){
                    h=0
                }
                if(h>1){
                    h=1
                }


                render_percent_y = 1-h

                start_render_percent_y = h


        }

        if(render_box && y+size_y>(render_box[1]+render_box[3])){
                // console.log("OVER")


                let h=(size_y-((y+size_y)-(render_box[1]+render_box[3])))/size_y

                if(h<0){
                    h=0
                }
                if(h>1){
                    h=1
                }

                render_percent_y = h

                start_render_percent_y = 0


        }        
    }




    if(render_percent_y!=0){


        // screen.fillRect(x,y,size_x,size_y)


            // let end_y=y+size_y
            // let end_x=x+size_x


            if(px_width==undefined){
                px_width=image.height
            }

            if(px_height==undefined){
                px_height=image.height
            }





            if(render_box!=undefined){

                px_x+=px_width*start_render_percent_x
                px_y+=px_height*start_render_percent_y

                
                px_width*=render_percent_x
                px_height*=render_percent_y


                x+=size_x*start_render_percent_x
                y+=size_y*start_render_percent_y  

                size_x*=render_percent_x
                size_y*=render_percent_y  
            }


            screen.drawImage(image,px_x,px_y,px_width,px_height,x,y,size_x,size_y)

    }

}

draw_image=function(image,px_x,px_y,px_width,px_height,x,y,size_x,size_y,render_box=undefined){

    


    if(typeof image.length!="undefined"){
        image.forEach(png => {


            // if(render_box==undefined){
            basic_draw_image(png,px_x,px_y,px_width!=undefined ? px_width : png.width,px_height!=undefined ? px_width : png.height,x,y,size_x,size_y,render_box);
            // }
            
            
            
        });                
    }
    else{

        x += image.offset_x*100 || 0

        basic_draw_image(image,px_x,px_y,px_width!=undefined ? px_width : image.width,px_height!=undefined ? px_width : image.height,x,y,size_x,size_y,render_box);


           
    }

    
}


let old_screen
function save_screen(){
    old_screen=screen
}

function restore_screen(){
    screen=old_screen
}



function colorscale(image,color="200,200,0"){
    let canvas_2 = document.createElement('canvas');
    let screen_2 = canvas_2.getContext("2d");


    var imgW = image.width;
    var imgH = image.height;
    canvas_2.width = imgW;
    canvas_2.height = imgH;


    screen_2.imageSmoothingEnabled = false;



    screen_2.fillStyle = "rgb("+color+")";
    screen_2.fillRect(0, 0, innerWidth, innerHeight)


    screen_2.globalCompositeOperation = 'destination-in';


    screen_2.drawImage(image, 0, 0, imgW, imgH,0,0,imgW,imgH);



    return canvas_2

}

function setup_clip(){

    let canvas = document.createElement('canvas');
    let screen = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    screen.imageSmoothingEnabled = false;

    return {
        canvas : canvas,
        screen : screen
    }
}

function clip(clip_layer = {screen}){
    clip_layer.screen.globalCompositeOperation = 'destination-in';
}

function clip_image(clip_rect,image,x,y,size_x,size_y){



    clip_layer = setup_clip()


    clip_layer.screen.fillStyle = "rgb(0,0,0)";
    clip_layer.screen.fillRect(clip_rect.x, clip_rect.y, clip_rect.size_x, clip_rect.size_y)
    
    
    clip(clip_layer)

    clip_layer.screen.drawImage(image, 0, 0, image.width, image.height,x,y,size_x,size_y);
    

    


    return clip_layer.canvas

}

function clip_images(clip_rect,image,x,y,size_x,size_y){

    
    // console.log(image)
    if(typeof image.length!="undefined"){

        let canvas_2 = document.createElement('canvas');
        let screen_2 = canvas_2.getContext("2d");

        canvas_2.width = innerWidth;
        canvas_2.height = innerHeight;
    
    
        screen_2.imageSmoothingEnabled = false;

        
        image.forEach(png => {
            screen_2.drawImage(png, 0, 0, png.width, png.height,x,y,size_x,size_y)
        });
        
        

        return clip_image(clip_rect,canvas_2,0,0,innerWidth,innerHeight)
        
    }
    else{
        return clip_image(clip_rect,image,x,y,size_x,size_y)
    }

}




function image_pixles(image){
    if(typeof image.length=='undefined'){
        let list=[]
        try{
            // image.crossOrigin = "Anonymous";

            let canvas_2 = document.createElement('canvas');
            let screen_2 = canvas_2.getContext("2d");
        
        
            // alert(image.width+".width")
            var imgW = image.width;
            var imgH = image.height;
            canvas_2.width = imgW;
            canvas_2.height = imgH;
        
            // image.crossOrigin = "Anonymous";
        
        
            screen_2.drawImage(image,0,0)
        
            let data=screen_2.getImageData(0,0,imgW,imgH).data


            if(data){
                for(let x=0;x<imgW;x++){
                let line=[]
                for(let y=0;y<imgH;y++){
                    let pixle=[]
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))    ])
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))+1  ])
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))+2  ])
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))+3  ])
                    line.push(pixle)
                }
                list.push(line)
                }
            
                return list
            }


        }

        catch(err){
            if(!AlertedScreenSecurityError){
                alert(err)
                alert("Because of this error special effects will not show up and lag may occur.")

                AlertedScreenSecurityError=true
            }
            
        }

    }



    // alert("RET FALSE")
    return false
}

