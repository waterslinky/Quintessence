pack_name="default_pack"

function reverse_string(string){
    let new_string=[]
    for(let i=string.length-1;i>=0;i--){
        new_string+=string[i]
    }

    return new_string
}


class texture{
    constructor(){
        
    }
    set_up(image,chances=undefined){
        if(chances==undefined){
            chances=[]

            for(let i=0;i<image.length;i++){
                chances.push(1)
            }

        }

        this.chances=chances
        // console.log("IMP"+chances)
        
        if(chances!=undefined){
            let new_table=[]

            for(let i=0;i<image.length;i++){
                let chance = i<chances.length ? chances[i] : 1
                // let chance = 1

                new_table.push({"name":image[i],"chance":chance})
            }
            this.texture=new_table

        }
        else if(image.length!=undefined){
            let new_table=[]

            for(let i=0;i<image.length;i++){
                // let chance = i<chances.length ? chances[i] : 1
                let chance = 1

                new_table.push({"name":image[i],"chance":chance})
            }
            this.texture=new_table
        }
        else{
            this.texture=image
        }
        
        
    }
    image(chances,x=undefined,y=undefined){

        let c = 0

        if(chances==undefined){
            chances=this.chances
        }

            let new_chances=[]


            let chance_total = 0

            
            try{
                for(let i=0;i<this.texture.length;i++){

                    new_chances.push({"name":this.texture[i].name,"chance":chances[i]})

                }                
            }
            catch(err){
                console.error(this.texture)
            }

           
            for(let i=0;i<this.chances.length;i++){
                // let chance = i<chances.length ? chances[i] : 1
           
                // console.log(chances)
                chance_total+=chances[i]

                // new_chances.push({"name":this.texture[i].name,"chance":chance})
            }
            
            if(x!=undefined && y!=undefined){

      
                c=(number_from(1,chance_total,number_from_2D_index(x,y,1000))())

            }
            // console.log(chance_table(new_chances))
            // console.log(new_chances[1].name)

            return chance_table(new_chances,c)
        // }
        
        // return chance_table(this.texture)

        // if(this.texture.length==undefined){
        //     return this.texture
        // }


        
       


    }

    random_image(){

        let c = 0

        let chances=this.chances
        

        let new_chances=[]


        let chance_total = 0

            
            try{
                for(let i=0;i<this.texture.length;i++){

                    new_chances.push({"name":this.texture[i].name,"chance":chances[i]})

                }                
            }
            catch(err){
                console.error(this.texture)
            }

           
            for(let i=0;i<this.chances.length;i++){
                // let chance = i<chances.length ? chances[i] : 1
           
                // console.log(chances)
                chance_total+=chances[i]

                // new_chances.push({"name":this.texture[i].name,"chance":chance})
            }
            
          
                c=Math.round((chance_total-1)*Math.random())+1

            // console.log(chance_table(new_chances))
            // console.log(new_chances[1].name)

            return chance_table(new_chances,c)
        // }
        
        // return chance_table(this.texture)

        // if(this.texture.length==undefined){
        //     return this.texture
        // }


        
       


    }
}

// 

function texture_chain(var_name,path,table,num=0){

    window[var_name+num] = new Image();
    if(typeof window[var_name]=="undefined"){
        window[var_name] = new texture()
        // console.log("f")

    }
    
    let image = window[var_name+num]
    
    num++
    
    image.pre_path='Client/textures/'+pack_name+'/'+path
    image.path=path
    image.var_name=var_name
    image.var_num=num
    image.table=table
 
    image.src = (image.pre_path)+(image.var_num)+(".png")
    
    

    // console.log((image.pre_path)+(var_name+image.var_num)+(".png"));


    image.onload = function() {


        texture_chain(image.var_name,image.path,table,image.var_num)




        window[image.var_name+image.var_num]=image


        // console.log("PRE"+image.path)

        delete(image.pre_path)
        delete(image.path)
        delete(image.var_name)
        delete(image.var_name)
        delete(image.table)

        
        // console.log("after"+image.path)
        

    };


    image.onerror = function(){
        
   
        // window[var_name=window[var_name+1]]


        let list=[]

        for(let i=1;i<image.var_num;i++){
            list.push(window[var_name+i])
        }


        window[var_name].set_up(list,image.table)

        // alert(var_name)

        delete(image.pre_path)
        delete(image.path)
        delete(image.var_name)
        delete(image.var_num)
        delete(image.table)
        
        loads_started--

    }




    

}
function file_type(path,correct_type){
    let at_dot=false
    let type=""
    for(let i=path.length-1;i>=0 && !at_dot;i--){
        if(path[i]=="."){
            at_dot=true
        }
        else{
            if(path[i]!=" "){
                type+=path[i]
            }
            
        }
    }
    type=reverse_string(type)

    if(type==path){
        type="file"
    }
    return type==correct_type
}


async function load_as_image(var_name,path,chances){
    // window[var_name] = {}
    
    let variable=window[var_name]

    if(variable==undefined){

        if(file_type(path,"png")){
            window[var_name]=new Image();
            window[var_name].src = 'Client/textures/'+pack_name+'/'+path


            // window[var_name]=image    
        
        }
        else{
            loads_started++
            await texture_chain(var_name,path,chances)
            

   
        }

    }
    else{
        

        let old_src=window[var_name].src


        let image=new Image();
        image.src = 'Client/textures/'+pack_name+'/'+path
        image.onerror=function(){

            window[var_name].src = old_src
            
        }
        image.onload = await function(){
            window[var_name].src = image.src
            
        }

        

        

        
        // return window[var_name]
      
        // window[var_name].src = 'Client/textures/'+pack_name+'/'+path  

        // window[var_name].onerror=function(){
        //     console.log(old_src)
        //     
        // }
           
        

    
        // if(image && image.src!=""){
        //     let old_src=window[var_name].src
            
            

        //     try{
        //         // window[var_name].src = 'Client/textures/'+pack_name+'/'+path
        //         // screen.drawImage(window[var_name],0,0)

                
        //     }
        //     catch{
        //         window[var_name].src = old_src
        //     }
        // }
        
    }

    return (window[var_name])
    


    // image.waitLoad()

}

    
async function load_as_animation(var_name,path,cell_width,animation_time,chances){


     
    variable = await load_as_image(var_name,path,chances)

    if(variable.texture==undefined){

        new_variable = new texture()
        new_variable.set_up([variable])

        window[var_name] = new_variable

        
    }


    window[var_name].cell_width = cell_width
    window[var_name].animation_time = animation_time



}


function reload_other_texters(){





    //Effect Icons
    load_as_image("regeneration_icon","effect_icons/regeneration_icon.png")

    load_as_image("poison_icon",'effect_icons/poison_icon.png')


    //Knowledge Images

    //Red Shards
    load_as_image("knowledge_tablet_red_regeneration_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_red_regeneration.png')

    load_as_image("knowledge_tablet_red_poison_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_red_poison.png')

    load_as_image("knowledge_tablet_red_saturation_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_red_saturation.png')

    load_as_image("extrude_direction_image",'extrude_direction.png')

    load_as_image("extrude_reload_image",'reload.png')


    load_as_image("extrude_direction_left_image",'active_extrude_direction/left_extrude_direction.png')
    load_as_image("extrude_direction_right_image",'active_extrude_direction/right_extrude_direction.png')
    load_as_image("extrude_direction_up_image",'active_extrude_direction/up_extrude_direction.png')
    load_as_image("extrude_direction_down_image",'active_extrude_direction/down_extrude_direction.png')

    load_as_image("selected_extrude_to_wall_button_image",'selected_extrude_to_wall_button.png')
    load_as_image("unselected_extrude_to_wall_button_image",'unselected_extrude_to_wall_button.png')


    load_as_image("void_option_image",'void_option_image.png')

    load_as_image("selected_void_option_void_image",'selected_void_option_void.png')
    load_as_image("selected_void_option_solid_image",'selected_void_option_solid.png')
    load_as_image("unselected_void_option_void_image",'unselected_void_option_void.png')
    load_as_image("unselected_void_option_solid_image",'unselected_void_option_solid.png')


    
    





    // extrude_direction_left_image


    //green Shards
    load_as_image("knowledge_tablet_green_regeneration_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_green_regeneration.png')
    
    load_as_image("knowledge_tablet_green_poison_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_green_poison.png')
    
    load_as_image("knowledge_tablet_green_saturation_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_green_saturation.png')

    //Blue Shards
    load_as_image("knowledge_tablet_blue_regeneration_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_blue_regeneration.png')

    load_as_image("knowledge_tablet_blue_poison_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_blue_poison.png')

    load_as_image("knowledge_tablet_blue_saturation_image",'items/knowledge_tablet/mushroom_shards/knowledge_tablet_blue_saturation.png')


    // accended_menu_image
    load_as_image("accended_menu_image",'accended_menu.png')



    load_as_image("blank_knowledge_tablet_image",'items/knowledge_tablet/blank_knowledge_tablet.png')

    if(typeof knowledge_tablet_image=="undefined"){
        knowledge_tablet_image=[blank_knowledge_tablet_image]
    }
    


    load_as_image("knowledge_tablet_overlay_image",'items/knowledge_tablet/knowledge_tablet_overlay.png')

    // stone_brick_pedestal
    load_as_image("stone_brick_pedestal_image",'blocks/stone_brick_pedestal.png')


    // knowledge_table_image
    
    effect_icons={"regeneration":regeneration_icon,"poison":poison_icon}


 


    load_as_image("accended_text_selected_image",'accended_text_selected.png')
    load_as_image("accended_text_selected_image",'accended_text_selected.png')

    load_as_image("accended_text_selected_image",'accended_text_selected.png')

    load_as_image("accended_text_selected_image",'accended_text_selected.png')




    load_as_image("missing_block_image",'blocks/missing_block.png')

    
    // alert(image_pixles(missing_block_image))

    load_as_image("white_particle",'white_particle.png')


    load_as_image("display_bar_image",'display_bar.png')
    display_bar_stretch_image=new border_image({"image":display_bar_image,"cap_size_x_px":3})


    load_as_image("gray_display_box_image",'gray_display_box.png')
    gray_display_box_stretch_image=new border_image_box({"image":gray_display_box_image,"cap_size_x_px":4,"cap_size_y_px":4})


    load_as_image("dark_gray_display_box_image",'dark_gray_display_box.png')
    dark_gray_display_box_stretch_image=new border_image_box({"image":dark_gray_display_box_image,"cap_size_x_px":4,"cap_size_y_px":4})


    
    // stretch_image_rectangle(,this.x-(screen.measureText(this.text).width/2)-15,)



    load_as_image("ui_background_image",'ui_background.png')

    // ui_background
    load_as_image("inventory_slot_image",'inventory_slot.png')


    load_as_image("selected_slot_image",'selected_slot.png')






    load_as_image("empty_heart_image",'heart/empty_heart.png')


    load_as_image("heart_part_1_image",'heart/heart_part_1.png')

    load_as_image("heart_part_2_image",'heart/heart_part_2.png')

    load_as_image("heart_part_3_image",'heart/heart_part_3.png')

    load_as_image("heart_part_4_image",'heart/heart_part_4.png')

    load_as_image("heart_part_5_image",'heart/heart_part_5.png')

    load_as_image("heart_part_6_image",'heart/heart_part_6.png')

    load_as_image("heart_part_7_image",'heart/heart_part_7.png')

    load_as_image("heart_part_8_image",'heart/heart_part_8.png')

    load_as_image("heart_part_9_image",'heart/heart_part_9.png')

    load_as_image("heart_part_10_image",'heart/heart_part_10.png')



    load_as_image("hot_bar_image",'hot_bar_ui.png')

    load_as_image("underline_bar_image",'underline_bar.png')
    underline_bar=new border_image({"image":underline_bar_image,"cap_size_x_px":1})



    load_as_image("left_display_bar_image",'left_display_bar.png')
    left_display_bar_stretch_image=new border_image({"image":left_display_bar_image,"cap_size_x_px":6})

    







    


    





    
    
    // if(typeof block_list != 'undefined'){
        
    //     block_list.forEach(line => {
    //         line.forEach(block => {
    //             block.image=get_block(block.name).image  
    //         });

    //     });
    // }
    
}

function reload_texters(new_pack_name="default_pack"){
    pack_name=new_pack_name
    reload_other_texters()
    reload_particle_texters()
    reload_item_texters()
    reload_ui_texters()
    reload_block_texters()
    reload_cursor_texters()
}

reload_texters()

loads_started--