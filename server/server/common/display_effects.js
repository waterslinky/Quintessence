function stretch_image_rectangle(image,cap_size_x_px,x,y,width,height){
    // y-=height/2
    if(width<height*(cap_size_x_px/image.height)*2){
        // x-=((height*(cap_size_x_px/image.height)*2)-width)/2
        width=height*(cap_size_x_px/image.height)*2
        
    }
    screen.drawImage(image, 0, 0, cap_size_x_px, image.height,x,y,height*(cap_size_x_px/image.height),height);


    screen.drawImage(image, cap_size_x_px, 0, image.width-(cap_size_x_px*2), image.height,x+(height*(cap_size_x_px/image.height)),y,width-((height*(cap_size_x_px/image.height))*2),height);


    screen.drawImage(image, cap_size_x_px+image.width-(cap_size_x_px*2), 0, cap_size_x_px, image.height,x+(height*(cap_size_x_px/image.height))+width-((height*(cap_size_x_px/image.height))*2),y,height*(cap_size_x_px/image.height),height);

}

function vertical_stretch_image_rectangle(image,cap_size_y_px,x,y,width,height){
    // y-=height/2


    height = Math.round(height)
    width = Math.round(width)

    x = Math.round(x)
    y = Math.round(y)




    let end_segment_height = Math.round(width*(cap_size_y_px/image.width))
    let middle_segment_height = height-(Math.round(width*(cap_size_y_px/image.width))*2)

    // if(height<width*(cap_size_y_px/image.width)*2){
    //     y-=((width*(cap_size_y_px/image.width)*2)-height)/2
    //     height=width*(cap_size_y_px/image.width)*2
        
    // }
    screen.drawImage(image, 0, 0, image.width,cap_size_y_px,x,y,width,end_segment_height);


    screen.drawImage(image, 0, cap_size_y_px, image.width, image.height-(cap_size_y_px*2),x,y+end_segment_height,width,middle_segment_height);


    screen.drawImage(image, 
        0, 
        cap_size_y_px+image.height-(cap_size_y_px*2), 
        
        image.width, 
        cap_size_y_px,
        
        x,
        y+middle_segment_height+end_segment_height,
        
        width,
        end_segment_height
    );


}

function stretch_image_box(image, cap_size_x_px,cap_size_y_px , cap_size_x,cap_size_y    ,x,y,width,height){
    // cap_size_x=Math.round(cap_size_x)
    width = Math.round(width)
    height = Math.round(height)

    x = Math.round(x)
    y = Math.round(y)

    //Top Left
    screen.drawImage(image, 0, 0, cap_size_x_px, cap_size_y_px,x,y,cap_size_x,cap_size_y );

    //Top Mid
    screen.drawImage(image,  (cap_size_x_px), 0, image.width-(cap_size_x_px*2), cap_size_y_px,x+cap_size_x,y,width-(cap_size_x*2),cap_size_y );


    //Top Right
    screen.drawImage(image,  cap_size_x_px+(image.width-(cap_size_x_px*2)), 0, (cap_size_x_px), cap_size_y_px,x+cap_size_x+(width-(cap_size_x*2)),y,cap_size_x,cap_size_y );


    //Mid Left
    screen.drawImage(image,  0, cap_size_y_px, cap_size_x_px, image.width-(cap_size_y_px*2),x, y+cap_size_y,cap_size_x,height-(cap_size_y*2));



    //Bottom Left

    screen.drawImage(image,  0, image.height-cap_size_y_px, cap_size_x_px, cap_size_y_px,x, y+(height-(cap_size_y)),cap_size_x,cap_size_y);

   //Bottom Mid

    
    screen.drawImage(image,  cap_size_x_px, image.height-cap_size_y_px, image.width-(cap_size_x_px*2), cap_size_y_px,x+(cap_size_x), y+(height-(cap_size_y)),width-(cap_size_x*2),cap_size_y);


    //Bottom Right

    
    screen.drawImage(image,  image.width-cap_size_x_px, image.height-cap_size_y_px, cap_size_x_px, cap_size_y_px,x+(width-(cap_size_x)), y+(height-(cap_size_y)),cap_size_x,cap_size_y);


    //Right Mid
    screen.drawImage(image,  image.width-cap_size_x_px, cap_size_y_px, cap_size_x_px, image.height-(cap_size_y_px*2),x+(width-(cap_size_x)), y+((cap_size_y)),cap_size_x,height-(cap_size_y*2));

        //Mid
        screen.drawImage(image,  cap_size_x_px, cap_size_y_px, image.width-(cap_size_x_px*2), image.height-(cap_size_y_px*2),x+((cap_size_x)), y+((cap_size_y)),width-(cap_size_x*2),height-(cap_size_y*2));


}

class border_image{
    constructor(info){
        //main_size unneeded with math
      
        this.image = info.image!=undefined ? info.image : undefined

        this.cap_size_x_px = info.cap_size_x_px!=undefined ? info.cap_size_x_px : undefined

        // this.image = info.x!=undefined ? info.x : undefined
        // this.image = info.y!=undefined ? info.y : undefined

        // this.image = info.width!=undefined ? info.width : undefined
        // this.image = info.height!=undefined ? info.height : undefined



    }
    draw(x,y,width,height){


        

        stretch_image_rectangle(this.image,this.cap_size_x_px,x,y,width,height)

        
    }
}


class border_image_box{
    constructor(info){
        //main_size unneeded with math
      
        this.image = info.image!=undefined ? info.image : undefined




        this.cap_size_x_px = info.cap_size_x_px!=undefined ? info.cap_size_x_px : undefined
        this.cap_size_y_px = info.cap_size_y_px!=undefined ? info.cap_size_y_px : undefined

        // this.cap_size_x = info.cap_size_x!=undefined ? info.cap_size_x : undefined
        // this.cap_size_y = info.cap_size_y!=undefined ? info.cap_size_y : undefined






    }
    draw(x,y,cap_size_x,cap_size_y,width,height){

     
        stretch_image_box(this.image, this.cap_size_x_px,this.cap_size_y_px , cap_size_x,cap_size_y    ,x,y,width,height)

        // stretch_image_box(image,this.cap_size_x_px,x,y,width,height)
        
    }
}