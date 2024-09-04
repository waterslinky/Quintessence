
rainbow_skin = JSON.parse(localStorage.getItem("rainbow_skin"))

function draw_entities(){

    // tabindex="-1"

    players.forEach(entitie => {

        // console.log(entitie.pos_buffer_index !== NaN,"LK")
        if(entitie.pos_buffer_index >= 0){
            // console.log("OTHER PLAUYERS")
            if((entitie.pos_buffer_index)<1){
                // console.log("A")
                // a++

                entitie.x=entitie.pos_buffer[0][0]
                entitie.y=entitie.pos_buffer[0][1]
            }
            else{
                // console.log("B")
                // b++

                entitie.x=entitie.pos_buffer[1][0]
                entitie.y=entitie.pos_buffer[1][1]
            }
        }


        
        if(entitie.x+entitie.size_x>=world_cam[0]  &&  entitie.x<=world_cam[0]+innerWidth){
            if(entitie.y+entitie.size_y>=world_cam[1]  &&  entitie.y<=world_cam[1]+innerHeight){

                let AlphaPercent=0
                
                if(entitie.game_mode== "AscendedGost"){
                    AlphaPercent=.5
                }
                else{
                    AlphaPercent=1
                }


                if(rainbow_skin==true){


                    if(typeof entitie.r!="number"){
                        entitie.r = 0
                    }
                    if(typeof entitie.g!="number"){
                        entitie.g = 0
                    }
                    if(typeof entitie.b!="number"){
                        entitie.b = 0
                    }
                    entitie.r+=Math.random()*5
                    entitie.g+=Math.random()*3
                    entitie.b+=Math.random()*7




                    screen.fillStyle = "rgb("+Math.abs((Math.floor(entitie.r)%512)-256)+","+Math.abs((Math.floor(entitie.g)%512)-256)+","+Math.abs((Math.floor(entitie.b)%512)-256)+","+AlphaPercent+")" ;
                }
                else{
                    screen.fillStyle = "rgb("+entitie.color+","+AlphaPercent+")" ;
                }

                screen.fillRect(Math.round((entitie.x*FOV)-player.cam[0]),Math.round((entitie.y*FOV)-player.cam[1]),Math.round(player.size_x*FOV),Math.round(player.size_y*FOV)); 
            
                
        
                if(entitie!=player){
                    screen.fillStyle = "rgb(0,0,0"+","+AlphaPercent+")" ;
            
                    screen.textAlign = "center";
                    screen.textBaseline = "middle";

                    screen.font = (27*FOV)+"px serif";
                    screen.fillText(entitie.name, (entitie.x*FOV)-player.cam[0]+((entitie.size_x/2)*FOV),(entitie.y*FOV)-player.cam[1]-((block_size/4)*FOV));                    
                }

                    
        
                // entitie.pos_buffer_index+=.5
                // console.log(entitie.pos_buffer_index)
                
            }
        }




    });




    // if(player.x+player.size_x>=world_cam[0]  &&  player.x<=world_cam[0]+innerWidth){
    //     if(player.y+player.size_y>=world_cam[1]  &&  player.y<=world_cam[1]+innerHeight){
        
    //         screen.fillStyle = "rgb("+player.color+")" ;
    //         screen.fillRect((player.x*FOV)-player.cam[0],(player.y*FOV)-player.cam[1], block_size*FOV,block_size*FOV); 

    //     }
    // }



}


// function remake_etrude_structcher_ghosts(block){
//     block.ghost_layer_offset_x = 0
//     block.ghost_layer_offset_y = 0

//     let ghost_layer_offset_x=0
//     let ghost_layer_offset_y=0

//     let lowest_x = 0
//     let lowest_y = 0


//     let extrude_length = 0
//     let extrude_size = [1,1]

//     if(block.dir==0 || block.dir==2){

//         extrude_length = JSON.parse(selected_extrude_block.extrude_min) 
//         extrude_size[1] = extrude_length

//         if(block.dir==0){
//             ghost_layer_offset_y = (extrude_length*-1)
//         }

//     }
//     else{

//         extrude_length = JSON.parse(selected_extrude_block.extrude_min)
//         extrude_size[0] = extrude_length


//         if(block.dir==3){
//             ghost_layer_offset_x = (extrude_length*-1)+1
//         }

//     }

//     if(extrude_length==0){

//         extrude_size = [0,0]


//     }







//     if(typeof structures[block.end_structure.name]!="undefined"){

//         lowest_x = JSON.parse(block.end_structure.offset_x)
//         lowest_y = JSON.parse(block.end_structure.offset_y)

//         if(block.ghost_layer_offset_x<lowest_x){
//             lowest_x = ghost_layer_offset_x
//         }

//         if(block.ghost_layer_offset_y<lowest_y){
//             lowest_y = ghost_layer_offset_y
//         }


//         let most_x = structures[block.end_structure.name].length + JSON.parse(block.end_structure.offset_x)
//         let most_y = structures[block.end_structure.name][0].length + JSON.parse(block.end_structure.offset_y)


//         if(extrude_size[0]>most_x){

//             most_x = extrude_size[0]

//         }

//         if(extrude_size[1]>most_y){

//             most_y = extrude_size[1]

//         }



//         // // let lowest_x = JSON.parse(block.end_structure.offset_x)
//         // // let lowest_y = JSON.parse(block.end_structure.offset_y)


//         // // console.log("X: "+(structures[block.end_structure_name].length+extrude_length))
//         // // console.log("y: "+structures[block.end_structure_name][0].length)      

//         console.log(most_x)
//         console.log(most_y)

        
        
//     }
//     else{
//         lowest_x = ghost_layer_offset_x
//         lowest_y = ghost_layer_offset_y
//     }


//     block.ghost_layer = []            

//     for(let x=0;x<10;x++){
//         let line = []

//         for(let y=0;y<10;y++){
//             line.push(get_just_block("grass"))
//         }

//         block.ghost_layer.push(line)    

//     }










//     if(block.dir==0 || block.dir==2){


//         for(let i=0;i<extrude_length;i++){
        
//             block.ghost_layer[ghost_layer_offset_x][i] = get_just_block(block.extrude_block)
//         }
 
        

        
//     }
//     else{


//         block.ghost_layer = []

//         for(let i=0;i<extrude_length;i++){
//             block.ghost_layer.push([get_just_block(block.extrude_block)])
//         }

   
        







//     }


//     block.ghost_layer_offset_x = lowest_x
//     block.ghost_layer_offset_y = lowest_y




    


// }

function remake_etrude_structcher_ghosts(block){
    // alert("remake"+block.dir)

    


}



function x_block_index_to_world(x_index){
    return (x_index-((player.cam[0])/display_block_size))*display_block_size
}
function y_block_index_to_world(y_index){
    return (y_index-((player.cam[1])/display_block_size))*display_block_size
}   


function draw_out_line_rect(x,y,width,height,size=3){
    screen.fillStyle = "rgb(0,0,0)"
    screen.fillRect(x, y,size, height)
    screen.fillRect(x, y,width, size)
    screen.fillRect(x+width, y,size, height)
    screen.fillRect(x, (y)+height,width, -size)   
}




function draw_block(block,x,y,size_x,size_y){
    // console.log(block)
    // let block_image = get_property(block,"image") 

    let block_image = block.image
   
    
    // console.error(get_property(block,"image"))
    if(block && block_image!=undefined){


 



        let image = typeof block_image.length!="undefined" ? block_image[0] : block_image

        let px_x=0
        let px_y=0

        let px_width = image.width
        let px_height = image.height


        if(block.hit_box){
            px_width = image.width/block.hit_box[0]
            px_height =  image.height/block.hit_box[1]

            px_x = px_width*block.hit_box_index[0]
            px_y = px_height*block.hit_box_index[1]

        }
        
        

        if(image!=undefined){
        
            
        

        
        
        
        
            let width=size_x
            let height=size_y
        
            
        
            let dir=block.dir
            if(dir!=undefined){
                screen.save()
        
                screen.translate(x+(width*.5),y+(height*.5))
                screen.rotate((Math.PI/2)*dir)
                draw_image(block_image,px_x,px_y,px_width,px_height,width*-.5,height*-.5,width,height);
                
                screen.restore()
            }
            else{
                
                draw_image(block_image,px_x,px_y,px_width,px_height,x,y,width,height);
              
            }
        
            // console.log()


            
                                
        
        }            
    }
        
        
   

}

function block_to_image(block){
    let image_object={}


    if(typeof get_property(block,"image").length == "number"){

        image_object.image = get_property(block,"image")
    }
    else{
        image_object.image = [get_property(block,"image")]

    }        



    let block_dir=get_property(block,"dir")
    if(block_dir){
        image_object.dir=block_dir
    }

    let block_hit_box=get_property(block,"hit_box")
    if(block_hit_box){
        image_object.hit_box=block_hit_box
    }

    let block_hit_box_index=block.hit_box_index
    if(block_hit_box_index){
        image_object.hit_box_index=block_hit_box_index
    }


    if(get_property(block,"void")){
        image_object.image.push(void_block_image)
     
    }

    return image_object
}
function make_image_layer_from_blocks(start_x,start_y,width,hieght){

    let air_layer=make_new_2D_array(Math.ceil(width),Math.ceil(hieght))
    let block_list_mask=make_new_2D_array(Math.ceil(width),Math.ceil(hieght))
    let block_extensions_layer=make_new_2D_array(Math.ceil(width),Math.ceil(hieght))
    
    for(let x=start_x;x<width;x++){
        if(-1<x){
            // let line=[]
            for(let y=start_y;y<hieght;y++){
                if(-1<y){

                    
                    // screen.drawImage(air_image,0,0,air_image.width,air_image.height,,,,);
                    

                    // blocks_drawn++

                    // try{
                        let block = get_block_from_index(x,y)
                        if(is_block(block)){
                            if(get_property(block,"transparent")){
                                air_layer[x-start_x][y-start_y]={"image":images.filled_air}
                            }
                            // draw_block(block_list[x][y],(x*display_block_size)-player.cam[0],(y*display_block_size)-player.cam[1],display_block_size,display_block_size)
                            // console.log(x,y)
                            // if(block.image!=air_image){
                                
                            block_list_mask[x-start_x][y-start_y]=block_to_image(block) 
                                
                                // console.log(block_list_mask[x-start_x][y-start_y])
                            
                            // }
                            // else{
                            //     block_list_mask[x-start_x][y-start_y]=(undefined)
                            // }
                            
                            
                        // }
                        // catch{
                        //     // console.log(x,y)
                        // }






                        }

                    
                }
            }
            // block_list_mask.push(line)
        }

    }

    

    


    for(let x=start_x;x<width;x++){
        if(-1<x){
            for(let y=start_y;y<hieght;y++){
                if(-1<y){
                    
                    
                    if(get_block_from_index(x,y) && (get_property(get_block_from_index(x,y),"side_image") || get_property(get_block_from_index(x,y),"left_side_image") || get_property(get_block_from_index(x,y),"top_side_image") || get_property(get_block_from_index(x,y),"bottom_side_image") || get_property(get_block_from_index(x,y),"right_side_image"))){
                        // render_side_image_on
                        
                        let render_side_image_on = get_property(get_block_from_index(x,y),"render_side_image_on")
                        
                        //Up
                        let up_block=get_block_from_index(x,y-1)
                        let render_on_up_side = get_property(get_block_from_index(x,y),"render_top_side_image_on")
                        if(up_block!=undefined && (up_block.name=="air" || (render_on_up_side && render_on_up_side.includes(up_block.name)) || (render_side_image_on && render_side_image_on.includes(up_block.name)))){
                                // if((x-start_x)>=0 && (y-start_y)-1>=0 && x-start_x<=all_blocks.length-1 && (y-start_y)-1<=all_blocks[0].length-1){


                                    let extension_block = block_extensions_layer[x-start_x][(y-start_y)-1]
                                    let side_block

                                    if(get_property(get_block_from_index(x,y),"side_image")){

                                        side_block={
                                            "image":get_property(get_block_from_index(x,y),"side_image"),
                                            "dir":0
                                        }
                                        
    
                                    }
                                    else if(get_property(get_block_from_index(x,y),"top_side_image")){
                                        
        
                                        side_block={
                                            "image":get_property(get_block_from_index(x,y),"top_side_image"),
                                            "dir":0
                                        }
                                    
                                    }



      

                                    

                                    if(extension_block!=undefined){

                                        if(extension_block.length!=undefined){
                                            block_extensions_layer[x-start_x][(y-start_y)-1].push(side_block)
                                        }
                                        else{
                                            block_extensions_layer[x-start_x][(y-start_y)-1]=[extension_block,side_block]
                                        }
                        
                                        
                        
                                    }
                                    else{
                                        block_extensions_layer[x-start_x][(y-start_y)-1]=side_block
                                    }
                                // }
                        }

                        //Right
                        let right_block=get_block_from_index(x+1,y)
                        let render_on_right_side = get_property(get_block_from_index(x,y),"render_right_side_image_on")
                        if(right_block!=undefined && (right_block.name=="air" || (render_on_right_side && render_on_right_side.includes(right_block.name)) || (render_side_image_on && render_side_image_on.includes(right_block.name)))){

                                if(block_extensions_layer[(x-start_x)+1]){
                                    let extension_block = block_extensions_layer[(x-start_x)+1][y-start_y]
                                    let side_block

                                    if(get_property(get_block_from_index(x,y),"side_image")){

                                        side_block={
                                            "image":get_property(get_block_from_index(x,y),"side_image"),
                                            "dir":1
                                        }

                                    }
                                    else if(get_property(get_block_from_index(x,y),"right_side_image")){
                                        side_block={
                                            "image":get_property(get_block_from_index(x,y),"right_side_image"),
                                            "dir":0
                                        }
                                    }

                                
                                
                                    

                                    
                                    if(extension_block!=undefined){

                                            if(extension_block.length!=undefined){
                                                block_extensions_layer[(x-start_x)+1][(y-start_y)].push(side_block)
                                            }
                                            else{
                                                block_extensions_layer[(x-start_x)+1][(y-start_y)]=[extension_block,side_block]
                                            }
                            
                                            
                            
                                    }
                                    else{
                            
                                        block_extensions_layer[(x-start_x)+1][y-start_y]=side_block
                                                    

                                    }
                                }
                                
                        }


                        //Down
                        let down_block=get_block_from_index(x,y+1)
                        let render_on_bottom_side = get_property(get_block_from_index(x,y),"render_bottom_side_image_on")
                        if(down_block!=undefined && (down_block.name=="air" || (render_on_bottom_side && render_on_bottom_side.includes(down_block.name)) || (render_side_image_on && render_side_image_on.includes(down_block.name)))){
                                // if(x-start_x>=0 && (y-start_y)+1>=0 && x-start_x<=all_blocks.length-1 && (y-start_y)+1<=all_blocks[0].length-1){


                                let extension_block = block_extensions_layer[x-start_x][(y-start_y)+1]
                                let side_block

                                if(get_property(get_block_from_index(x,y),"side_image")){

                                    side_block={
                                        "image":get_property(get_block_from_index(x,y),"side_image"),
                                        "dir":2
                                    }

                                }
                                else if(get_property(get_block_from_index(x,y),"bottom_side_image")){
                                    side_block={
                                        "image":get_property(get_block_from_index(x,y),"bottom_side_image"),
                                        "dir":0
                                    }
                                }

                             
                            
                                

                                
                                if(extension_block!=undefined){

                                        if(extension_block.length!=undefined){
                                            block_extensions_layer[x-start_x][(y-start_y)+1].push(side_block)
                                        }
                                        else{
                                            block_extensions_layer[x-start_x][(y-start_y)+1]=[extension_block,side_block]
                                        }
                        
                                        
                        
                                }
                                else{
                                        block_extensions_layer[x-start_x][(y-start_y)+1]=side_block
                                                

                                }
                                // }
                            
                        }

                        //Left
                        let left_block=get_block_from_index(x-1,y)
                        let render_on_left_side = get_property(get_block_from_index(x,y),"render_left_side_image_on")
                        if(left_block!=undefined && (left_block.name=="air" || (render_on_left_side && render_on_left_side.includes(left_block.name)) || (render_side_image_on && render_side_image_on.includes(left_block.name)))){

                            if(block_extensions_layer[x-start_x-1]){
                                let extension_block = block_extensions_layer[x-start_x-1][(y-start_y)]
                                let side_block
                                    
                                if(get_property(get_block_from_index(x,y),"side_image")){

                                        side_block={
                                            "image":get_property(get_block_from_index(x,y),"side_image"),
                                            "dir":3
                                        }
                               
    
                                }
                                else if(get_property(get_block_from_index(x,y),"left_side_image")){
                                        side_block={
                                            "image":get_property(get_block_from_index(x,y),"left_side_image"),
                                            "dir":0
                                        }
                                }


                                if(extension_block!=undefined){

                                        if(extension_block.length!=undefined){
                                            block_extensions_layer[(x-start_x)-1][(y-start_y)].push(side_block)
                                        }
                                        else{
                                            block_extensions_layer[(x-start_x)-1][(y-start_y)]=[extension_block,side_block]
                                        }
                            
                                            
                            
                                }
                                else{
                                        block_extensions_layer[(x-start_x)-1][(y-start_y)]=side_block
                                }                                                                      
                            }
                        }

                        air_layer[x-start_x][y-start_y]={"image":images.filled_air}

                    }
                }
            }
        }
    }






    let all_layers=[air_layer,block_list_mask,block_extensions_layer]
    
    return all_layers
}
//Draws all blocks
function draw_blocks(){
   

    

    let start_x=parseInt(player.cam[0]/display_block_size)
    let start_y=parseInt(player.cam[1]/display_block_size)
    
    let render_to=[parseInt(player.cam[0]/display_block_size)+(innerWidth/display_block_size)+1,  parseInt(player.cam[1]/display_block_size)+(innerHeight/display_block_size)+1  ]
    if(world_setting.world_size[0]!=undefined && render_to[0]>world_setting.world_size[0]*chuck_size){
        
        render_to[0]=world_setting.world_size[0]*chuck_size

    }

    if(world_setting.world_size[1]!=undefined && render_to[1]>world_setting.world_size[1]*chuck_size){
        render_to[1]=world_setting.world_size[1]*chuck_size
    }
    let block_list_layers=make_image_layer_from_blocks(start_x,start_y,render_to[0],render_to[1])



    // console.log(block_list_layers)

    render_blocks((start_x*display_block_size)-player.cam[0],(start_y*display_block_size)-player.cam[1],block_list_layers,display_block_size)
    
    // for(let x=parseInt(player.cam[0]/display_block_size);x<render_to[0];x++){
    //     if(-1<x){
    //         for(let y=parseInt(player.cam[1]/display_block_size);y<render_to[1];y++){
    //             if(-1<y){

                    
    //                 // screen.drawImage(air_image,0,0,air_image.width,air_image.height,,,,);
                    

    //                 // blocks_drawn++

    //                 // try{
    //                     // if(block_list[x][y].transparent){
    //                     //     screen.drawImage(air_image,0,0,air_image.width,air_image.height,(x*display_block_size)-player.cam[0],(y*display_block_size)-player.cam[1],display_block_size,display_block_size);
    //                     // }
    //                     if(block_list[x][y].side_image){
    //                         // draw_block(block_list[x][y],(x*display_block_size)-player.cam[0],(y*display_block_size)-player.cam[1],display_block_size,display_block_size)
    //                         let image=block_list[x][y].side_image

    //                         //Up
    //                         if(get_block_from_index(x,y-1)!=undefined && get_block_from_index(x,y-1).name=="air"){

                                
    //                             draw_image(

    //                                 image,


    //                                 0,
    //                                 0,
                                    
    //                                 image.width,
    //                                 image.hight,


    //                                 (x*display_block_size)-player.cam[0],
    //                                 ((y*display_block_size)-player.cam[1])-display_block_size,
                                    
    //                                 display_block_size,
    //                                 display_block_size
                                    
    //                             )
    //                         }
                            
                            
    //                         //down   
    //                         if(get_block_from_index(x,y+1)!=undefined && get_block_from_index(x,y+1).name=="air"){

    //                             screen.save()
                                
    //                             screen.translate(((x*display_block_size)-player.cam[0])+(display_block_size/2),(((y*display_block_size)-player.cam[1])+(display_block_size))+(display_block_size/2))
    //                             screen.rotate((Math.PI/2)*2)

    //                             draw_image(

    //                                 image,


    //                                 0,
    //                                 0,
                                    
    //                                 image.width,
    //                                 image.hight,


    //                                 (display_block_size*-.5),
    //                                 (display_block_size*-.5),
                                    
    //                                 display_block_size,
    //                                 display_block_size
                                    
    //                             );
                            
    //                             screen.restore()
    //                         }

    //                         //Left 
    //                         if(get_block_from_index(x-1,y)!=undefined && get_block_from_index(x-1,y).name=="air"){
    //                             screen.save()
                                
    //                             screen.translate((((x*display_block_size)-player.cam[0])+(display_block_size/2))-(display_block_size),(((y*display_block_size)-player.cam[1]))+(display_block_size/2))
    //                             screen.rotate((Math.PI/2)*3)

    //                             draw_image(

    //                                 image,


    //                                 0,
    //                                 0,
                                    
    //                                 image.width,
    //                                 image.hight,


    //                                 (display_block_size*-.5),
    //                                 (display_block_size*-.5),
                                    
    //                                 display_block_size,
    //                                 display_block_size
                                    
    //                             );
                            
    //                             screen.restore()
    //                         }

                            


    //                         //Right
    //                         if(get_block_from_index(x+1,y)!=undefined && get_block_from_index(x+1,y).name=="air"){
    //                             screen.save()
                                
    //                             screen.translate((((x*display_block_size)-player.cam[0])+(display_block_size/2))+(display_block_size),(((y*display_block_size)-player.cam[1]))+(display_block_size/2))
    //                             screen.rotate((Math.PI/2)*1)

    //                             draw_image(

    //                                 image,


    //                                 0,
    //                                 0,
                                    
    //                                 image.width,
    //                                 image.hight,


    //                                 (display_block_size*-.5),
    //                                 (display_block_size*-.5),
                                    
    //                                 display_block_size,
    //                                 display_block_size
                                    
    //                             );
                            
    //                             screen.restore()

    //                         }

                        
    //                 }
    //                 // catch{
    //                 //     // console.log(x,y)
    //                 // }






                    
    //             }
    //         }
    //     }

    // }



    




}
function render_blocks_fram(x,y,width,hight,all_blocks){
    let block_size=width/all_blocks.length

    
    let new_block_list=[]
    all_blocks.forEach(block_line => {
        let line=[]
        block_line.forEach(block => {
            // try{
                line.push(block.image)
            // }
            // catch(err){
            //     console.log()
            // }
            
        })
        new_block_list.push(line)
        
    });


    if(all_blocks.length>0 && hight<block_size*all_blocks[0].length){
        block_size=hight/all_blocks[0].length

        x+=((width)*.5)
        x-=((all_blocks.length*block_size)*.5)

    }
    else{
        y+=((hight)*.5)
        y-=((all_blocks[0].length*block_size)*.5)

    }

   
    let block_list_layers = make_image_layer_from_blocks(0,0,all_blocks.length,all_blocks[0].length)
    // console.log(all_blocks)        

//     if(all_blocks[0].length!=0){
//  console.log(new_block_list)        
//     }

    render_blocks(x,y, block_list_layers ,block_size)
}


function render_blocks(x,y,display_layers,block_size=display_block_size){
   
    let display_layer = display_layers[0]
    
    for(let x_index=0;x_index<display_layer.length;x_index++){
        let draw_x = Math.round(x+(x_index*block_size))
        for(let y_index=0;y_index<display_layer[x_index].length;y_index++){

            let block_layers=[]

            display_layers.forEach(display_layer => {

                    let block=display_layer[x_index][y_index]

                    // draw_block()
                    if(block!=undefined){
                        

                        if(block.length!=undefined){

                            block.forEach(b => {
                                block_layers.push(b)
                            });
                            

                        }
                        else{

                            block_layers.push(block)
                            
                        }



        


                        

                    }
            });

                
            let draw_y = Math.round(y+(y_index*block_size))

            let draw_size_x = Math.round(x+((x_index+1)*block_size))-Math.round(x+(x_index*block_size))
            let draw_size_y = Math.round((y+((y_index+1)*block_size)))-Math.round(y+(y_index*block_size))



            block_layers.forEach(block => {

                if(block!=undefined){
                                draw_block(
                                    block,
                                    draw_x,
                                    draw_y,
                                    draw_size_x,
                                    draw_size_y
                                )
                }
            });

        }
    }        
    

    
}


function run_object(object,run_function){

    if(typeof object=="object" && typeof object.length!="undefined"){

        object.forEach(element => {
            run_function(element)
        });

    }
    else{

        run_function(object)

    }

}



let hunger_time=15000
let hunger_end_timer=hunger_time

function clint_update(){

        
    if(hunger_end_timer<=engin.time_in_loop){
        hunger_end_timer=engin.time_in_loop+hunger_time

        if(player.hunger>=15){
            heal_heart(1)
        }

        // player.take_hunger(1)
    }


        // players.forEach(player => {
        //     if(player.pos_buffer_index >= 0){
        //         player.pos_buffer_index+=.5
        //     }
            
        // });



        FPS_ticks++
        if(showAUT){
            AUT_ticks++

            if(AUT_ticks>=60){
                AUT=AUT_total/AUT_ticks

                AUT_ticks=0
                AUT_total=0
            }            
        }

        


        player.pos_buffer.splice(0,1)
        player.pos_buffer.push([player.x,player.y])




        if(multiplayer){
                ticks_ping++

                if(ticks_ping>=ticks_per_ping){
                    // console.log(ticks_ping)
                    ticks_ping=0

        

                    let ping_list=[]

                    

                    




                    let new_player={}
                    for(let i=0;i<player.send_trait.length;i++){
                        element=player.send_trait[i]

                        // console.log("PLAYER:"+window["element"])
                        
                        new_player[element]=player[element]
                        // eval(("new_player."+element+"=player."+element))
// eval(("."+element))  old_player_from_ping[element]
                        // new_player[element]
                        if(JSON.stringify(   new_player[element]   )!=JSON.stringify(old_player_from_ping[element]) ){
                            ping_list.push([element,  player[element]   ])
                        }
                        
                    };
            


        
                    old_player_from_ping=JSON.parse(JSON.stringify(new_player))



                    if(ping_list.length){
                        
                        socket.emit("ping",[socket.id,ping_list], function (response) {
                            console.log("ping response");
                        })
                    }
                    

                    
                }
        }






        let add_val=600
        let sound_pos=1500


        if(audioElement){
            if(mouse_x<=sound_pos && mouse_x>=sound_pos-add_val){
                // ticks_ping++
                // if(ticks_ping>=ticks_per_ping+1){
                //     ticks_ping=0
                //     socket.emit("ping",0)
                //     console.log("ping")
                // }
                // console.log(  ((mouse_x-(sound_pos-add_val) )*1)/(add_val)  ,"gg")
                // if(mouse_x>=sound_pos-add_val){

                    
                // } 
                
                audioElement.volume=((((mouse_x-(sound_pos-add_val) ))/((add_val))))
                stereoNode.pan.value = (1-(((mouse_x-(sound_pos-add_val) ))/((add_val))))*-1
        
                
                // console.log("A")
            }
            else{
                if(mouse_x>=sound_pos && mouse_x<=sound_pos+add_val){
        
                    
                    audioElement.volume=(1-((((mouse_x-(sound_pos) ))/((add_val)))))
                    stereoNode.pan.value =(((((mouse_x-(sound_pos) ))/((add_val)))))
                    
                    console.log(stereoNode.pan.value,"B")
                }
                else{
                    audioElement.volume=0
                }
                

            }
            
        }




        let selected_item = player.inventory[player.selected_slot_index.index].item


        if(mining){



            if(player.game_mode=="Servival"){

                let same_block=false

                if(player.block_brocking){
                    player.take_hunger(hunger_values.breaking_block)
                    let break_block_hit_box_index=get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box_index") 
                    let world_mouse_hit_box_index=get_property(get_block_from_index(world_mouse_x,world_mouse_y))

                    
                    

                    if(break_block_hit_box_index!=undefined && world_mouse_hit_box_index!=undefined){
                        // console.log(world_mouse_hit_box_index)
                        if(player.block_brocking[0]-break_block_hit_box_index[0]==world_mouse_x-world_mouse_hit_box_index[0] && player.block_brocking[1]-break_block_hit_box_index[1]==world_mouse_y-world_mouse_hit_box_index[1]){
                            same_block=true
                        }
                    }
                }



                if(((player.block_brocking[0]!=world_mouse_x || player.block_brocking[1]!=world_mouse_y) && !same_block) || player.selected_slot_index.index!=player.break_with_slot.index){
                    // console.log("REDO")
                    
                    
                    if(get_property(get_block_from_index(world_mouse_x,world_mouse_y),"destroy_time")!=undefined){

                        let mining_mult = 1

                        let held_item_tool_type = get_property(selected_item,"tool_type")
                        
                        let block_brocking = get_block_from_index(world_mouse_x,world_mouse_y)

                        if(get_property(block_brocking,"broken_with") && held_item_tool_type){

                            get_property(block_brocking,"broken_with").forEach(element => {
                                

                                held_item_tool_type.forEach(tool_type => {

                                    if(tool_type.tool_type==element.tool_type){

                                        mining_mult = tool_type.minning_speed

                                    }
                                });
                                
                            });
                            
                        }
        
                        player.started_breakking=engin.time_in_loop
        
                        player.end_break=engin.time_in_loop+((get_property(get_block_from_index(world_mouse_x,world_mouse_y),"destroy_time")*1000)/mining_mult)

                        player.break_with_slot.index = player.selected_slot_index.index
                
                        player.block_brocking=[world_mouse_x,world_mouse_y]
                        
                    }
                    else{
                        player.started_breakking=0
        
                        player.end_break=0
                
                        // console.log("FALSE")
                        player.block_brocking=false
                    }
        
                }
        
                if(player.block_brocking && engin.time_in_loop>=player.end_break){
        
                    // for(let i=0;i<5;i++){
                    //     let current_block=get_block_from_index(player.block_brocking[0],player.block_brocking[1]).image
                    //     let color=false
        
                    //     try{
                    //         color=image_pixles(current_block)[Math.round((current_block.width-1)*Math.random()) ][Math.round((current_block.height-1)*Math.random())  ]  
                    //     }
                    //     catch{}
                        
                        
        
                    //     if(color){
                    //         // alert("color")
                    //         particles.push(new par(player.block_brocking[0]*block_size,player.block_brocking[1]*block_size,engin.time_in_loop+700+(Math.random()*400),color ))
        
                    //     }


                        
                    // }
                    
                    let destroy_block = get_block_from_index(player.block_brocking[0],player.block_brocking[1])
                    let tool_types = get_property(selected_item,"tool_type")  

                    let loot_table = get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"loot_table")

                    
                    let replace_with = "air"
                    
                    if(get_property(destroy_block,"broken_with") && tool_types){

                        tool_types.forEach(tool => {

                            get_property(destroy_block,"broken_with").forEach(element => {

                                if(element.tool_type == tool.tool_type){

                                    if(element.loot_table){
                                        
                                        loot_table = element.loot_table
                                    }
                                    if(element.replace_with){
                                        replace_with=element.replace_with.name
                                    }
                                }
                            });

                           
                            
                        });
                    }

                    

                    
                    if(loot_table){

                        let loot=loot_table.roll()
                        loot.forEach(item => {

                            player.give_item(item.name,item.count)

                        });
                        
                    }
                    else{
                        
                        player.give_item(get_block_from_index(player.block_brocking[0],player.block_brocking[1]).name)

                    }

                    
                    // console.log(destroy_block.on_destoyed)             
                 
                    change_block(player.block_brocking[0],player.block_brocking[1],replace_with,true)

                    // if(destroy_block.on_destoyed){
                        
                    //     destroy_block.on_destoyed()
                    // }
        
        
        
                    player.started_breakking=0
        
                    player.end_break=0
            
                    player.block_brocking=false
                }
            }
            else{
                player.block_brocking=[world_mouse_x,world_mouse_y]
                

                change_block(player.block_brocking[0],player.block_brocking[1],"air")
            }




        }
        else{

            
            player.started_breakking=0

            player.end_break=0
         
            player.block_brocking=false


        }

        

        if(is_placing){

            if(get_property(get_block_from_index(world_mouse_x,world_mouse_y),"on_right_clicked") && !old_is_placing){
                get_property(get_block_from_index(world_mouse_x,world_mouse_y),"on_right_clicked")(get_block_from_index(world_mouse_x,world_mouse_y),world_mouse_x,world_mouse_y)

                is_placing=false
            }
            else{
             
                // blank_area(world_mouse_x,world_mouse_y,(typeof block_list[world_mouse_x][world_mouse_y].hit_box!="undefined" ? block_list[world_mouse_x][world_mouse_y].hit_box[0] : 1),(typeof block_list[world_mouse_x][world_mouse_y].hit_box!="undefined" ? block_list[world_mouse_x][world_mouse_y].hit_box[1] : 1))
                // console.log(player.inventory[player.selected_slot_index.index])

                if(selected_item.name!="blank" && item_type(selected_item)=="block" && blank_area(world_mouse_x,world_mouse_y,(typeof get_property(selected_item,"hit_box")!="undefined" ? get_property(selected_item,"hit_box")[0] : 1),(typeof get_property(selected_item,"hit_box")!="undefined" ? get_property(selected_item,"hit_box")[1] : 1))){

                    if(selected_item.count>=1){
                        if(typeof get_property(selected_item,"on_used")=="undefined"){
           
                            change_block(world_mouse_x,world_mouse_y,selected_item.name)

                            let block = get_block_from_index(world_mouse_x,world_mouse_y)

                            

                            if(get_property(block,"on_placed")){
                                get_property(block,"on_placed")(block,world_mouse_x,world_mouse_y)
                            }
                        
                            if(player.game_mode=="Servival"){

                                player.inventory[player.selected_slot_index.index].set_count(selected_item.count-1)
                                
                            }                        
                        }


                    }
                    
                }


                if(typeof get_property(selected_item,"on_used")!="undefined"){
                    if(typeof get_property(selected_item,"duration_ends")=="undefined"){
                        selected_item.duration_ends=engin.time_in_loop+get_property(selected_item,"use_after_duration")
                    }
                    else{
                                if(engin.time_in_loop>=get_property(selected_item,"duration_ends")){
                            
                                    if(get_property(selected_item,"on_used")){
                                        let returned = get_property(selected_item,"on_used")()

                                        if(returned || typeof returned=="undefined"){
                                            player.inventory[player.selected_slot_index.index].set_count(selected_item.count - (typeof get_property(selected_item,"decrease_after_use")!="undefined" ? get_property(selected_item,"decrease_after_use") : 0))
                                        }

                                    }
                                    
                                    

                                    selected_item.just_used=true
                                    selected_item.duration_ends=undefined

                                }
                    }
                }                
            }
           
        
        }
        else{



            if(old_is_placing && typeof get_property(selected_item,"on_used")!="undefined" && engin.time_in_loop<=(get_property(selected_item,"duration_ends")-get_property(selected_item,"use_after_duration"))+200 && (typeof get_property(selected_item,"just_used")!="undefined" && !get_property(selected_item,"just_used"))){


                if(selected_item.name!="blank" && blank_area(world_mouse_x,world_mouse_y,(typeof get_property(selected_item,"hit_box")!="undefined" ? get_property(selected_item,"hit_box")[0] : 1),(typeof get_property(selected_item,"hit_box")!="undefined" ? get_property(selected_item,"hit_box")[1] : 1))){
                    if(selected_item.count>=1){

                        
                        if(item_type(selected_item.name)=="block"){
                            change_block(world_mouse_x,world_mouse_y,selected_item.name)
                        }
                        
                            
                        if(player.game_mode=="Servival"){

                            player.inventory[player.selected_slot_index.index].set_count(selected_item.count-1)
                                    
                        }    

                    }
                }




            }

            if(typeof selected_item.duration_ends!="undefined"){
                selected_item.duration_ends=undefined
            }
            selected_item.just_used=false



        }
        old_is_placing=is_placing

        old_player={"x":player.x,"y":player.y}


        if(heart_parts.length==0){
            engin.add_transition(2000,1000,2000,function() {
                player.spawn_point()  
              
                reset_heart()
              
            })
        }
        // else{
        //     if(!regeneration_timer){
        //         regeneration_timer=setTimeout(() => {
        //             console.log("Regen")

        //             regeneration_timer=false
        //         }, (1000*60)/20);
        //     }
        // }
        




        particles.forEach(particle => {

            particle.update()
        });



        //Update cam
        world_cam[0]=(player.x)-(innerWidth/2)
        world_cam[1]=(player.y)-(innerHeight/2)


        if(world_cam[0]<0){
            world_cam[0]=0
        }


        if(world_cam[1]<0){
            world_cam[1]=0
        }




        if(world_setting.world_size[0]){
            if(world_cam[0]>((world_setting.world_size[0]*chuck_size)*block_size)-innerWidth){
                world_cam[0]=((world_setting.world_size[0]*chuck_size)*block_size)-innerWidth
            }
        }

        if(world_setting.world_size[1]){
            if(world_cam[1]>((world_setting.world_size[1]*chuck_size)*block_size)-innerHeight){
                world_cam[1]=((world_setting.world_size[1]*chuck_size)*block_size)-innerHeight
            }
        }

    


        // player.effects.forEach(effect => {
        for(let i=player.effects.length-1;i>=0;i--){
            effect=player.effects[i]

            let effect_object=false

            effects.forEach(object => {
                if(!effect_object && effect.name==object.name){
                    effect_object=object
                }
            })

            if(effect.last_time){
                effect.duration-=engin.time_in_loop-effect.last_time
            }
            
            effect.last_time=engin.time_in_loop


            if(!effect.end_time){
                
                effect.end_time=engin.time_in_loop+effect_object.time_interval


                

            }
            while(effect.end_time<=engin.time_in_loop && effect.duration>0){

                effect_object.function_effect()
                effect.end_time=engin.time_in_loop+effect_object.time_interval
                
            }
            if(effect.duration<=0){
                player.effects.splice(i,1)
                console.log("DEL")
            }
        }

 






}

function engin_draw(){
    let time_pre_draw=Date.now()
    
    if(showADT){
        ADT_ticks++

        if(ADT_ticks>=60){
            ADT=ADT_total/ADT_ticks

            ADT_ticks=0
            ADT_total=0
        }            
    }




    player.cam[0]=((player.x+(block_size/2))*FOV)-(innerWidth/2)
    player.cam[1]=((player.y+(block_size/2))*FOV)-(innerHeight/2)

    if(camera_bounded){


        if(world_setting.world_size[0] && player.cam[0]<0 && innerWidth>=((world_setting.world_size[0]*chuck_size)*display_block_size)){
            player.cam[0]=innerWidth/-2
        }
        else if(world_setting.world_size[0]){
            if(player.cam[0]<0){
                player.cam[0]=0
            }
            if(player.cam[0]>((world_setting.world_size[0]*chuck_size)*display_block_size)-innerWidth){
                player.cam[0]=((world_setting.world_size[0]*chuck_size)*display_block_size)-innerWidth
            }
        }

        if(world_setting.world_size[1] && player.cam[1]<0 && innerHeight>=((world_setting.world_size[1]*chuck_size)*display_block_size)){
            player.cam[1]=(innerHeight/-2)+(((world_setting.world_size[1]*chuck_size)*display_block_size)/2)
        }
        else if(world_setting.world_size[1]){
                        
            if(player.cam[1]<0){
                player.cam[1]=0
            }
            if(player.cam[1]>((world_setting.world_size[1]*chuck_size)*display_block_size)-innerHeight){
                player.cam[1]=((world_setting.world_size[1]*chuck_size)*display_block_size)-innerHeight
            }          

        }            
    
    }



    world_mouse_x=parseInt(((mouse_x+player.cam[0]))/(display_block_size))
    world_mouse_y=parseInt(((mouse_y+player.cam[1]))/(display_block_size))

    block_mouse_x=world_mouse_x-((player.cam[0])/display_block_size)
    block_mouse_y=world_mouse_y-((player.cam[1])/display_block_size)


    clear_screen("0,0,0")

    FPS_times_draw++
    if(FPS_ticks>30){
        FPS_ticks=0
        FPS=FPS_times_draw

        FPS_times_draw=0

    }
 
    blocks_drawn=0
    draw_blocks()



    let render_to=[parseInt(player.cam[0]/display_block_size)+(innerWidth/display_block_size)+1,  parseInt(player.cam[1]/display_block_size)+(innerHeight/display_block_size)+1  ]
    for(let x=parseInt(player.cam[0]/display_block_size);x<render_to[0];x++){
        if(-1<x){
            for(let y=parseInt(player.cam[1]/display_block_size);y<render_to[1];y++){
                if(-1<y){
                    let block=get_block_from_index(x,y)
                    if(block!=undefined){
                        // if(block && block.name=="laod_block"){
                        //     let x=block.structure_x
                        //     let y=block.structure_y

                        //     if(block.structure_size_x!=undefined && block.structure_size_y!=undefined && save_or_load_switch=="save"){
                        //         draw_out_line_rect(x_block_index_to_world(block_list[x][y].x),y_block_index_to_world(block_list[x][y].y),block.structure_size_x*display_block_size,block.structure_size_y*display_block_size,3)

                        //     }
                        //     else{
                        //         let structure=structures[block.structure_name]

                        //         if(structure){
                        //             let gost_list=[]


                        //             for(let x_index=0;x_index<structure.length;x_index++){
                        //                 let line=[]
                        //                 for(let y_index=0;y_index<structure[x_index].length;y_index++){
                        //                     line.push(get_just_block("blank"))
                        //                 }
                        //                 gost_list.push(line)
                        //             }

                        //             load_structure(0,0,structure,gost_list)

                        //             screen.save()

                        //             screen.globalAlpha=.5

                        //             for(let x_index=0;x_index<structure.length;x_index++){
                        //                 for(let y_index=0;y_index<structure[x_index].length;y_index++){

                        //                     draw_block(gost_list[x_index][y_index],x_block_index_to_world(x+x_index),y_block_index_to_world(y+y_index),display_block_size,display_block_size)
                                        
                        //                 }
                        //             }

                        //             screen.restore()

                        //             draw_out_line_rect(x_block_index_to_world(block_list[x][y].x),y_block_index_to_world(block_list[x][y].y),structure.length*display_block_size,structure[0].length*display_block_size,3)
                        //         }                            
                        //     }


                            
                        // }

                        // if(block && block.name=="extrude_block"){

                        let ghost_layers = block.ghost_layers

                        if(ghost_layers){
                            
                            
                            screen.save()

                            screen.globalAlpha=.5

                            ghost_layers.forEach(ghost_layer => {

                                let ghost_layer_offset_x = 0
                                let ghost_layer_offset_y = 0

                                if(ghost_layer.offset_x){
                                    ghost_layer_offset_x = ghost_layer.offset_x * display_block_size
                                }

                                if(ghost_layer.offset_y){
                                    ghost_layer_offset_y = ghost_layer.offset_y * display_block_size
                                }





                                let ghost_layer_width
                                let ghost_layer_height



                                if(ghost_layer.width){
                                    ghost_layer_width = ghost_layer.width * display_block_size
                                }

                                if(ghost_layer.height){
                                    ghost_layer_height = ghost_layer.height * display_block_size
                                }



                                let x_pos = x_block_index_to_world(x) + ghost_layer_offset_x
                                let y_pos = y_block_index_to_world(y) + ghost_layer_offset_y


                                // if(ghost_layer.pos_x){
                                //     ghost_layer_offset_x = ghost_layer.pos_x * display_block_size
                                // }

                                // if(ghost_layer.pos_y){
                                //     ghost_layer_offset_y = ghost_layer.pos_y * display_block_size
                                // }



                                if(ghost_layer.layer){


                                    ghost_layer_width = ghost_layer.layer.length * display_block_size
                                    ghost_layer_height = ghost_layer.layer[0].length * display_block_size




                                    render_blocks( x_pos , y_pos ,[ ghost_layer.layer ],display_block_size)
                                    
                                    
                                }


                                // if()

                                if(ghost_layer_width!=undefined && ghost_layer_height!=undefined){
                                    
                                    draw_out_line_rect(x_pos,y_pos,ghost_layer_width,ghost_layer_height)
                                }

                                


                                            



                                            

                                

                                
                                            
                                            
                                
                                
                                
                                
                            });
                            
                            screen.restore()   



                        }

                        let outline_boxs = block.outline_boxs
                        if(outline_boxs){

                            
                            
                            screen.save()

                            screen.globalAlpha=.5

                            outline_boxs.forEach(outline_box => {
                                
                                // console.log(outline_box)

                                let outline_box_offset_x = 0
                                let outline_box_offset_y = 0

                                if(outline_box.offset_x){
                                    outline_box_offset_x = outline_box.offset_x * display_block_size
                                }

                                if(outline_box.offset_y){
                                    outline_box_offset_y = outline_box.offset_y * display_block_size
                                }





                                let outline_box_width
                                let outline_box_height



                                if(outline_box.width){
                                    outline_box_width = outline_box.width * display_block_size
                                }

                                if(outline_box.height){
                                    outline_box_height = outline_box.height * display_block_size
                                }



                                let pos_x = x_block_index_to_world(x) + outline_box_offset_x
                                let pos_y = y_block_index_to_world(y) + outline_box_offset_y


                                if(outline_box.pos_x!=undefined){
                                    pos_x = x_block_index_to_world(outline_box.pos_x)
                                }

                                if(outline_box.pos_y!=undefined){
                        
                                    pos_y = y_block_index_to_world(outline_box.pos_y)
                                }




                                
                                if(outline_box_width!=undefined && outline_box_height!=undefined){
                                    
                                    // console.log(x_pos,y_pos,outline_box_width,outline_box_height)
                                    draw_out_line_rect(pos_x,pos_y,outline_box_width,outline_box_height)
                                }

                                


                                            



                                            

                                

                                
                                            
                                            
                                
                                
                                
                                
                            });
                            
                            screen.restore()   

                        }
                                    



                            
                        // }


                    }                        
                }

            }
        }
    }



    
    //Adds structcher gost

    

    if(oped){
        let i=0

        if(showFPS){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("FPS: "+FPS, 10, 285+(i*48));
            i++
        }
        if(showAUT){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("Average update time: "+(parseInt(AUT*10000)/10000), 10, 285+(i*48));
            i++
        }

        if(showADT){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("Average draw time: "+(parseInt(ADT*10000)/10000), 10, 285+(i*48));
            i++
        }


 

        if(showVelocity){
            screen.textBaseline = "middle"

            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("X Velocity: "+parseInt(player.x_val*100)/100, 10, 285+(i*48));
            i++

        }

        if(showVelocity){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("Y Velocity: "+parseInt(player.y_val*-100)/100, 10, 285+(i*48));
            i++


        }

        if(SpeedInBlocks){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("Speed in Blocks: "+Math.abs(parseInt(((((player.inital_x-player.x)/block_size))*3000))/100), 10, 285+(i*48));
            i++
        
        }
        if(showCurrentTime){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("Current Time: "+Math.round(engin.current_time), 10, 285+(i*48));
            i++
        
        }

        if(show_time_stamp){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("Time Stamp: "+Math.round(engin.time_stamp), 10, 285+(i*48));
            i++
        
        }


        if(show_time_paused){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("Time Paused: "+Math.round(engin.time_paused), 10, 285+(i*48));
            i++
        
        }


        if(show_all_time){
            screen.textBaseline = "middle"
            screen.fillStyle = "rgb(255,255,255)" ;
            screen.textAlign = "start";
            screen.font = "48px serif";
            screen.fillText("All Time: "+Math.round(engin.all_time), 10, 285+(i*48));
            i++
        
        }
    }



    let block_in_hand = player.inventory[player.selected_slot_index.index].item


    let height=display_block_size
    let width=display_block_size

    // world_mouse_x-((player.cam[0])/display_block_size)


    let x=(player.block_brocking!=false ?  x_block_index_to_world(player.block_brocking[0]) : block_mouse_x*display_block_size)
    let y=((player.block_brocking!=false ? y_block_index_to_world(player.block_brocking[1]) : block_mouse_y*display_block_size))-(display_block_size*((get_property(block_in_hand,"hit_box") && !mining) ? get_property(block_in_hand,"hit_box")[1]-1 : 0))
    
    if(block_in_hand && block_in_hand.name!="blank" && !mining && item_type(block_in_hand)=="block"){
        screen.save()
        screen.globalAlpha = 0.25
        
        width=display_block_size*(get_property(block_in_hand,"hit_box") ? get_property(block_in_hand,"hit_box")[0] : 1)
        height=display_block_size*(get_property(block_in_hand,"hit_box") ? get_property(block_in_hand,"hit_box")[1] : 1)
        

        draw_image(get_property(block_in_hand,"image"),0,0,get_property(block_in_hand,"image").width,get_property(block_in_hand,"image").height,x,y,width,height);
    
        

        screen.restore()

    }





    if(player.block_brocking && get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index){ 

        height=display_block_size*(get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box") ? get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box")[1] : 1)
        width=display_block_size*(get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box") ? get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box")[0] : 1)
        y+=((get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index[1])*display_block_size)*-1
        x-=((get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index[0])*display_block_size)  

        // console.log((get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index[1]-1)-get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index[1])
    }
 


    draw_out_line_rect(x,y,width,height)


    if(player.block_brocking){
        let width=display_block_size*(get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box") ? get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box")[0] : 1)
        let height=display_block_size*(get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box") ? get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box")[1] : 1)
        


        screen.drawImage(
            images.break_block_sheet,
            parseInt(((engin.time_in_loop-player.started_breakking)/(player.end_break-player.started_breakking))*5)*8,
            0,
            8,
            8,
            ((player.block_brocking[0]*display_block_size)-player.cam[0])+( typeof get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index!="undefined" ? ( ((get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box")[0])-get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index[0])-2 )*display_block_size : 0   ),
            (((player.block_brocking[1]*display_block_size)-player.cam[1] ))-(display_block_size*(get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box") ? get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box")[1]-1 : 0))+( typeof get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index!="undefined" ?  (((get_property(get_block_from_index(player.block_brocking[0],player.block_brocking[1]),"hit_box")[1]-1)-get_block_from_index(player.block_brocking[0],player.block_brocking[1]).hit_box_index[1]))*display_block_size : 0  ),
            width,
            height
        );


        

    }

    for(let i=particles.length-1;i>=0;i--){

        let particle = particles[i]
        // 
//         if(particle.parent_location){
// console.log(particle.parent_location.base)
//         }


        if(particle.end_time_time<engin.time_in_loop || particle.life<=0 || (particle.parent_location && ((particle.parent_location.base && particle!==particle.parent_location.base[particle.parent_location.property]) || (particle.parent_location.string && particle!==particle.parent_location.string()))  )){
            
            particles.splice(i,1)
        }
        else{
            // console.log(particle)
        }
    }

    particles.forEach(par => {
        // if(par.layer==1){
        if(par.draw){
            par.draw()
        }
            
        // }
        



    });

    if(chat.length!=0){
        let width=0
        let height=0


        for(let i=chat.length-1;i>=0;i--){

            screen.textBaseline = "top";
            screen.textAlign = "start";
            screen.font = "35px serif";

            if(screen.measureText(chat[i].text).width+20>width+20){
                
                width=screen.measureText(chat[i].text).width+20
                height=(chat.length)*35


            }
            
        }

        screen.fillStyle = "rgb(50,50,50,.5)" ;
        screen.fillRect(10, 340,width, height+10); 


        for(let i=chat.length-1;i>=0;i--){
            screen.fillStyle = "rgb("+chat[i].color+")" ;

            screen.textBaseline = "top";
            screen.textAlign = "start";
            screen.font = "35px serif";
            screen.fillText(chat[i].text, 15, 345+(i*35));

            if(chat[i].end_time<=engin.current_time){
                chat.splice(i,1)
            }
        }
    }

    draw_entities()




    if(show_tab_list){
        let biggest_name=""
        players.forEach(player => {
            if(player.name.length>biggest_name.length){
                biggest_name=player.name
            }
    
    
            
        });

    
    
    
    
        screen.fillStyle = "rgb(100,100,100,.25)" ;
        

        screen.fillRect((innerWidth/2)-(screen.measureText(biggest_name).width/2)-10, 0,screen.measureText(biggest_name).width+20, (35*(players.length))+10); 
    

    
        for(let i=0;i<players.length;i++){
            screen.fillStyle = "rgb(0,0,0,.75)" ;
    
            screen.textAlign = "center";
            screen.font = "35px serif";
            screen.fillText(players[i].name, (innerWidth/2), 35*(i+1));
        };
    }
   


    //Draw Heart
    screen.drawImage(images.empty_heart,10,10,250,250)


    heart_parts.forEach(part => {

        screen.drawImage(images["heart_part_"+part],10,10,250,250) 
            
    });

    if(player.effects.length!=0){



        //Draws Icons
        screen.fillStyle = "rgb(100,100,100,.75)";
        screen.fillRect(15,(10+250+10)-(5), 60+(10)+10+(70*(player.effects.length-1)), 60+(10));

        let i=0
        player.effects.forEach(effect => {
    
            screen.drawImage(effect_icons[effect.name],25+(70*i),(10+250+10),60,60) 
            i++
            
        });        
    }

    

    ADT_total+=Date.now()-time_pre_draw
}

