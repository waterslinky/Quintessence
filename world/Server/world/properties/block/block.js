reseve=false
change_block=function(x,y,block_name,break_block=false){
    // let new_block_list=[]

    // if()
    // console.log()
    

    if(break_block && !is_server){
        let current_block=get_property(get_block_from_index(x,y),"image")
        for(let i=0;i<5;i++){
            
            
            // console.log(current_block)
            let color=false

            try{
                color=image_pixles(current_block)[Math.round((current_block.width-1)*Math.random()) ][Math.round((current_block.height-1)*Math.random())  ]  
            }
            catch{
                console.log("err")
            }
            
            

            if(color){
                // alert("color")
                particles.push(new par({
                    "x":x*block_size,
                    "y":y*block_size,
                    "time":engin.time_in_loop+700+(Math.random()*400),
                    "color":color 
                }))

            }


            
        }    
    }


    if(get_property(get_block_from_index(x,y),"hit_box_index")!=undefined){
        let start_x=x-get_property(get_block_from_index(x,y),"hit_box_index")[0]

        // console.log(get_block_from_index(x,y),get_property(get_block_from_index(x,y),"hit_box"))
        let start_y=y+((get_property(get_block_from_index(x,y),"hit_box")[1]-1)-get_property(get_block_from_index(x,y),"hit_box_index")[1])

        let width=get_property(get_block_from_index(x,y),"hit_box")[0]
        let hieght=get_property(get_block_from_index(x,y),"hit_box")[1]



        for(let x_i=0;x_i<width;x_i++){
            for(let y_i=0;y_i>hieght*-1;y_i--){
                let x=start_x+x_i
                let y=start_y+y_i

                if(typeof get_property(get_block_from_index(x,y),"hit_box_index")!="undefined" && get_property(get_block_from_index(x,y),"hit_box_index")[0]==x_i && get_property(get_block_from_index(x,y),"hit_box_index")[1]+"  "+(y_i+(hieght/2))){
                    set_block_from_index(x,y,create_item("air"))
                }
                
            }
        }

        
        // console.log(get_block_from_index(x,y).hit_box_index)
    }


    let new_block=create_item(block_name,{x,y})


    if(get_property(new_block,"hit_box")!=undefined){

        for(let y_index=0;y_index<get_property(new_block,"hit_box")[1];y_index++){
            for(let x_index=0;x_index<get_property(new_block,"hit_box")[0];x_index++){
                    set_block_from_index(x+x_index,y-((get_property(new_block,"hit_box")[1]-1)-y_index),create_item(block_name,{x:x+x_index,y:y-((get_property(new_block,"hit_box")[1]-1)-y_index)}))
                    get_block_from_index(x+x_index,y-((get_property(new_block,"hit_box")[1]-1)-y_index)).hit_box_index=[x_index,y_index]  

                    
                    // console.log([
                
            }
        }
    }
    else{
        set_block_from_index(x,y,new_block)
    }

    
 
 
    // if(!reseve && !is_server){
    //     console.log("CHANGE BLOCK")
        emit_self_data("change_block",arguments)
    // }

    
    

}

function change_state(block,state_name,index){
    block.state_index[state_name] = index
}

function create_item_old(data={}){
    let item = {}

    if(typeof data=="string"){
        
        item.name = data
        
    }
    else{

        for(let i in data){
            item[i] = data[i]
        }

    }

    let x = 0
    let y = 0

    if(data.x && data.y){
        x = data.x
        y = data.y

    }

    //?

    if(get_property(item,"state_propertys")){
        item.states = {}
        
        for(let state_name in get_property(item,"state_propertys")){
            
            item.states[state_name] = 0
        }

    }
    
    if(is_server==false){
        let property = get_property(item,"image")
        if(typeof property.length=="undefined" && typeof property.src=="undefined"){

            
            let image = property.image(undefined,x,y)

            // console.log(property)
            if(property.cell_width){
                // console.log(image)
                image = {"image":image,"cell_width": property.cell_width,"animation_time": property.animation_time}
            }
            
            item.image = image
            

        }


    }

    if(get_property(item,"template_function")){


        run_object(get_property(item,"template_function"),function(element){element(item,data)})
        
    }


    if(get_property(item,"random_tick")){
        let random_tick = get_property(item,"random_tick")
      
        item.random_tick = copy(random_tick)

        item.random_tick.ticks = engin.time_in_loop+random_tick.time()

    }



    if(item.x){
        delete item.x
    }
    if(item.y){
        delete item.y
    }
    
    
    return item 
}
function create_item(data={}){

    let item

    let x = 0
    let y = 0

    if(data.x && data.y){

        x = data.x
        y = data.y

    }

    if(typeof data=="string"){
        item = copy(blocks_structure[data] )
    }
    else{
        item = copy(blocks_structure[data.name] )
    }

    item.x = x
    item.y = y


    if(item.on_created_functions){
        for(on_created_function_name in item.on_created_functions){

            let on_created_function = item.on_created_functions[on_created_function_name]
            item["image"] = on_created_function(item)
            
        }  
    }


    delete item.y
    delete item.x
    delete item.on_created_functions

    return item
    
    
    
}


blank_area=function(x,y,width,hieght){

    // console.log([x,y,width,hieght])
    let solid_found=false
    for(let x_i=x;x_i<x+width;x_i++){
        for(let y_i=y;y_i>y-hieght;y_i--){
            // console.log("f")

            if(get_block_from_index(x_i,y_i).name!="air"){
                solid_found=true
            // console.log("solid_found")

            }
        }
    }
    // console.log("f")

    return !solid_found
}

function is_block(block){
    if(block.name!=undefined){
        return true
    }
}
function get_block_from_index(x,y,all_blocks=block_list){

    let chuck_x = Math.floor(x/chuck_size)
    let chuck_y = Math.floor(y/chuck_size)

    let chuck_index_x = x-(chuck_x*chuck_size)
    let chuck_index_y = y-(chuck_y*chuck_size)


    if(chucks[chuck_x] && chucks[chuck_x][chuck_y]){
        return chucks[chuck_x][chuck_y][chuck_index_x][chuck_index_y]
    }

    if(x>=0 && x<all_blocks.length){
        let list = all_blocks[x]
        if(y>=0 && list && y<list.length){
            if(list[y]){
                return list[y]
            }
            return {}
        }
    }

    return {}

}


function set_block_from_index(x,y,block){

    let chuck_x = Math.floor(x/chuck_size)
    let chuck_y = Math.floor(y/chuck_size)

    let chuck_index_x = x-(chuck_x*chuck_size)
    let chuck_index_y = y-(chuck_y*chuck_size)


    if(chucks[chuck_x] && chucks[chuck_x][chuck_y]){
        chucks[chuck_x][chuck_y][chuck_index_x][chuck_index_y] = block
    }

    // if(x>=0 && x<all_blocks.length){
    //     if(y>=0 && y<all_blocks[x].length){
    //         return all_blocks[x][y]
    //     }
    // }

}





const wheat_crop = {
    name:"wheat_crop",

    display_name:"Wheat Crop",

    in_accended_inventory:false,

    category:"nature",

    transparent:true,

    collision_box:false,

    destroy_time:0,

    render_bottom_side_image_on:["soil"],

    random_tick:{
        "event":function(x,y){

            let block = get_block_from_index(x,y)

            if(block.states.groth<3){
                block.states.groth++
            }
            else{
                return false
            }

            

        },
        "loop":true,
        "time":function(){
            return 60000+(Math.random()*180000)
        }
    },

    state_propertys:{
        "groth":[
            {
                "image":images.wheat_crop1,
                "bottom_side_image":images.wheat_crop_bottom1,
                "loot_table":block_loot_tables.wheat_seed
            },
            {
                "image":images.wheat_crop2,
                "bottom_side_image":images.wheat_crop_bottom2,
                "loot_table":block_loot_tables.wheat_seed
            },
            {
                "image":images.wheat_crop3,
                "bottom_side_image":images.wheat_crop_bottom3,
                "loot_table":block_loot_tables.wheat_seed

            },
            {
                "image":images.wheat_crop4,
                "top_side_image":images.wheat_crop4_top,
                "bottom_side_image":images.wheat_crop_bottom4,
                "loot_table":block_loot_tables.wheat_crop
            }
        ]
    }
}








const slightly_striped_log = {

    name:"slightly_striped_log",

    display_name:"Slightly Striped Log",

    collision_box:false,

    broken_with : [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",
                "minning_speed" : 0.75,
                "loot_table" : item_loot_tables.bark_knife,
                "replace_with" : {
                    "name" : "moderately_striped_log"
                }
            }
    ],

    destroy_time:2.5,
  
    image:images.slightly_striped_log

}


const moderately_striped_log = {

    name:"moderately_striped_log",

    display_name:"Moderately Striped Log",

    collision_box:false,

    broken_with : [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",
                "minning_speed" : 0.75,
                "loot_table" : item_loot_tables.bark_knife,
                "replace_with" : {
                    "name" : "mostly_striped_log"
                }
            }
    ],

    destroy_time:2.5,
        
    image:images.moderately_striped_log

}


const mostly_striped_log = {

    name:"mostly_striped_log",

    display_name:"Mostly Striped Log",

    collision_box:false,

    broken_with : [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",
                "minning_speed" : 5,
                "loot_table" : item_loot_tables.bark_knife,
                "replace_with" : {
                    "name" : "striped_log"
                }
            }
    ],

    destroy_time : 2.5,
           
    image:images.mostly_striped_log

}


const striped_log = {
  
    name : "striped_log",

    display_name:"Striped Log",

    collision_box:false,

    broken_with : [
        {
            "tool_type" : "axe" 
        }
    ],

    destroy_time:2.5,
    
    image:images.striped_log

}


const plank = {
    
    name:"plank",

    display_name:"Plank",
        
    broken_with : [
            {
                "tool_type" : "axe" 
            }
    ],


    destroy_time:1.5,
    
    image:images.plank
       
}


const crafting_table = {

    name:"crafting_table",

    display_name:"Crafting Table",

    collision_box : false,

    transparent : true,
        
    on_right_clicked : function(){
            engin.change_selected_layer("crafting_table","push")
    },

    broken_with : [
            {
                "tool_type" : "axe" 
            }
    ],

    destroy_time:1.5,

    left_side_image : images.crafting_table_left,

    top_side_image : images.crafting_table_top,

    image:images.crafting_table,
        
}

const missing_block = {
  
    name:"missing_block",

    display_name:"Missing Block",

    destroy_time:0,

    image:images.missing_block
      
}



















blocks = {

}

const blocks_structure = {

}


block_json.forEach(block_js => {
    blocks[block_js.name] = {}
    let block = blocks[block_js.name]

    blocks_structure[block_js.name] = {}
    let block_structure = blocks_structure[block_js.name]

    for(let state in block_js){
        let component = item_components[state]
        if(component){

            

            if(component["properties"]){
                component["properties"].forEach(propertie => {
                    // alert(block_js[state])

                    let value = propertie.value

                    if(value){
                        block[propertie.name] = value(block_js[state])
                    }
                    else{
                        if(component.value_types.includes(block_js[state])){
                            block[propertie.name] = block_js[state]
                        }
                    }
                    
                });
                
            }

            if(component["structure_properties"]){
                component["structure_properties"].forEach(propertie => {

                    let value = propertie.value
                    // alert(propertie.name)
                    if(propertie.type=="on_created"){
                        if(block_structure["on_created_functions"]==undefined){
                            block_structure["on_created_functions"] = {}
                        }

                        block_structure["on_created_functions"][propertie.name]=value

                    }
                    else{

                        if(value){

                            block_structure[propertie.name] = value(block_js[state])

                        }
                        else{
                            if(component.value_types.includes(block_js[state])){
                                block_structure[propertie.name] = block_js[state]
                            }
                        }
                        
                    }
                    
                });
                
            }

        }
        // else{
        //     block[state] = block_js[state]
        // }

        // blocks[block.name][]
    }

    // blocks
    // alert(block)
});

// blocks = blocks_structure



if(is_server){
    module.exports={get_item,get_just_block,change_block,block_is}
}

            
     