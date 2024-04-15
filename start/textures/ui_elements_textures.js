// await function(){




start_button = new Image();
start_button.src = 'textures/ui_elements/start_button.png'

credits_button = new Image();
credits_button.src = 'textures/ui_elements/credits_button.png'

dark_purple_bar_image = new Image();
dark_purple_bar_image.src = 'textures/dark_purple_bar.png'
dark_purple_bar_stretch_image=new border_image({"image":dark_purple_bar_image,"cap_size_x_px":8})


feather_bar_image = new Image();
feather_bar_image.src = 'textures/feather_bar.png'
feather_bar_stretch_image=new border_image({"image":feather_bar_image,"cap_size_x_px":20})


transparent_gray_image = new Image();
transparent_gray_image.src = 'textures/transparent_blue.png'


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

const images = {}

async function load_as_image(var_name,path,chances){
    // window[var_name] = {}
    
    let variable=window[var_name]

    if(variable==undefined){

        if(file_type(path,"png")){
            window[var_name]=new Image();
            window[var_name].src = path


            // window[var_name]=image    
        
        }
        else{
            loads_started++
            texture_chain(var_name,path,chances)
            

   
        }

    }
    else{
        

        let old_src=window[var_name].src


        let image=new Image();
        image.src = path

        image.onload=function(){
            window[var_name].src = image.src
        }

        image.onerror=function(){
            window[var_name].src = old_src
            return window[var_name]
        }
      
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
    


    // image.waitLoad()

}




function reverse_string(string){
    let new_string=[]
    for(let i=string.length-1;i>=0;i--){
        new_string+=string[i]
    }

    return new_string
}

load_as_image("slidder_bar_image",'textures/slidder_bar.png')


white_colon_image = new Image();
white_colon_image.src = 'textures/white_colon.png'

delete_world_image = new Image();
delete_world_image.src = 'textures/ui_elements/delete_world.png'

edit_mods_image = new Image();
edit_mods_image.src = 'textures/ui_elements/edit_mods.png'


gray_delete_world_image = new Image();
gray_delete_world_image.src = 'textures/ui_elements/gray_delete_world.png'



dark_purple_bar_fade_image = new Image();
dark_purple_bar_fade_image.src = 'textures/dark_purple_bar_fade.png'
dark_purple_bar_fade_stretch_image=new border_image({"image":dark_purple_bar_fade_image,"cap_size_x_px":12})

white_bar_image = new Image();
white_bar_image.src = 'textures/white_bar.png'
white_bar_stretch_image=new border_image({"image":white_bar_image,"cap_size_x_px":1})


cyan_bar_image = new Image();
cyan_bar_image.src = 'textures/cyan_bar.png'
cyan_bar_stretch_image=new border_image({"image":cyan_bar_image,"cap_size_x_px":4})


rock_bar_image = new Image();
rock_bar_image.src = 'textures/rock_bar.png'
rock_bar_stretch_image=new border_image({"image":rock_bar_image,"cap_size_x_px":13})





accended_text_selected_image = new Image()
accended_text_selected_image.src = 'textures/accended_text_selected.png'






//--
play_online_button = new Image();
play_online_button.src = 'textures/play_online_button.png'

play_offline_button = new Image();
play_offline_button.src = 'textures/play_offline_button.png'


youtube_button_image = new Image();
youtube_button_image.src = 'textures/youtube_button.png'


ui_divider_image = new Image();
ui_divider_image.src = 'textures/ui_divider_glow.png'




seed_icon = new Image();
seed_icon.src = 'textures/seed_icon.png'





slot_1_button = new Image();
slot_1_button.src = 'textures/slot_1.png'

slot_2_button = new Image();
slot_2_button.src = 'textures/slot_2.png'

slot_3_button = new Image();
slot_3_button.src = 'textures/slot_3.png'


gray_slot_1_button_image = new Image();
gray_slot_1_button_image.src = 'textures/ui_elements/gray_slot_1.png'

gray_slot_2_button_image = new Image();
gray_slot_2_button_image.src = 'textures/ui_elements/gray_slot_2.png'

gray_slot_3_button_image = new Image();
gray_slot_3_button_image.src = 'textures/ui_elements/gray_slot_3.png'


//--
online_icon = new Image();
online_icon.src = 'textures/online_icon.png'

offline_icon = new Image();
offline_icon.src = 'textures/offline_icon.png'




icon=new Image();
icon.src = 'textures/icons/gest_icon.png'


rainbow_skin_mod_icon=new Image();
rainbow_skin_mod_icon.src = 'textures/ui_elements/rainbow_skin_mod.png'


mod_selector=new Image();
mod_selector.src = "textures/ui_elements/mod_selector.png"

mod_selector_stretch_image=new border_image_box({"image":mod_selector,"cap_size_x_px":8,"cap_size_y_px":8})

// stretch_image_box(image, cap_size_x_px,cap_size_y_px , 2,2    ,x,y,width,height)

// dirt_image = new Image();
// dirt_image.src = 'textures/blocks/dirt.png'
// }()