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

    if(typeof data=="string"){
        item = copy(blocks_structure[data] )
    }
    else{
        item = copy(blocks_structure[data.name] )

    }

    if(item.on_created_functions){
        item.on_created_functions.forEach(on_created_function => {
            on_created_function(item)
        });        
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

//Make to item
const blank = {

    name:"blank",

    hiden_in_accended:true,

    image:images.blank

}      


const extrude_block = {

    name:"extrude_block",

    display_name:"Extrude Block",

    transparent:true,

    kills_grass:false,

    collision_box:false,

    dir:0,

    extrude_min : 0,

    extrude_max : 0,



    extrude_block:"",

    offset_x : 0,

    offset_y : 0,

    on_right_clicked:function(){


            if(KeysDown["Control"]){
            dir++
                if(this.dir>3){
                dir=0
                }                
                

            }
            else{
                selected_extrude_block=this
                
                select_extrude_direction_images()

                extrude_to_wall_min_text.text=""+(this.extrude_min)+""
                extrude_to_wall_max_text.text = ""+(this.extrude_max)+""

                extrude_block_name.text = this.extrude_block

                if(this.end_structure!=undefined){
                    end_structure_text.text = this.end_structure
                    end_structure_offset_x_text.text = ""+(this.offset_x)+""
                    end_structure_offset_y_text.text = ""+(this.offset_y) +""             
                }
                else{
                    end_structure_text.text = ""
                    end_structure_offset_x_text.text = ""
                    end_structure_offset_y_text.text = ""   
                }






                // this.extrude_min+="f"
                
                engin.change_selected_layer("extrude_block","push")
                
            }





            
    },

    image:images.extrude_block

}


const laod_block = {

    name:"laod_block",

    display_name:"Laod Block",

    transparent:true,

    kills_grass:false,

    collision_box:false,

    structure_name:"",

    structure_x:0,

    structure_y:0,

    structure_size_x:10,
    
    structure_size_y:10,

    on_right_clicked:function(){

            if(this.structure_name==undefined){
                structure_name=""
            }
            load_structure_block = this


            load_structure_name.text=this.structure_name
            
            load_structure_size_x.text = ""+load_structure_block.structure_size_x+""
            load_structure_size_y.text = ""+load_structure_block.structure_size_y+""


            load_structure_x.text = ""+load_structure_block.structure_x+""
            load_structure_y.text = ""+load_structure_block.structure_y+""

            // load_structure_block.structure_y : JSON.parse(load_structure_y.text)




            engin.change_selected_layer("load_structure","push")
            
    },
        
    image:images.load_block

}


const leaf = {

    category:"nature",

    transparent:true,

    collision_box:false,

    loot_table:block_loot_tables.leaf,

    name:"leaf",

    display_name:"Leaf",

    destroy_time:0.75,
        
    side_image:images.leaf_side1,

    
    render_side_image_on:["log"],

    image:images.leaf
            
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


const dirt = {

    broken_with : [
        {
            "tool_type" : "shovel"         }
    ],
   
    category:"nature",

    name:"dirt",

    display_name:"Dirt",

    destroy_time:2,

    on_right_clicked:function(block,x,y){
        if(player.inventory[player.selected_slot_index.index].item.name=="hoe" && get_block_from_index(x,y-1).name=="air"){
            change_block(x,y,"soil")
        }
        
    },
    
  
    image:images.dirt
   
}


const log = {
   
    category : "nature",

    name : "log",

    display_name : "Log",

    collision_box : false,

    broken_with : [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",

                "loot_table" : item_loot_tables.bark_knife,
                "replace_with" : {
                    "name" : "slightly_striped_log"
                }
            }
    ],

    destroy_time : 2.5,
   
    image : images.log

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


const knowledge_tablet = {
    
    transparent:true,

    hit_box:[2,2],

    broken_with : [
        {
            "tool_type" : "pickaxe" 
        }
    ],

    use_after_duration:1000,

    on_used:function(){

                // for(let mushroom in mushrooms){
                    // if(mushrooms[mushroom].effect=="poison"){
                    player.add_knowledge({"name":all_mushrooms_colors[0],"text":all_mushrooms_effects[0].knowledge})
                    player.add_knowledge({"name":all_mushrooms_colors[1],"text":all_mushrooms_effects[1].knowledge})
                    player.add_knowledge({"name":all_mushrooms_colors[2],"text":all_mushrooms_effects[2].knowledge})


                    // window[all_mushrooms_effects[0].effect+"_mushroom"]

                    for(let mushroom_index=0;mushroom_index<all_mushrooms_effects.length;mushroom_index++){
                        let mushroom=all_mushrooms_effects[mushroom_index]
                    
                        if(mushroom.effect=="poison"){
                            chat.push({
                                "text":"Knowledge: "+get_property({"name":all_mushrooms_colors[mushroom_index]},"display_name")+"s are poisonous.",
                                "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                            })                              
                        }
                        if(mushroom.effect=="regeneration"){
                            chat.push({
                                "text":"Knowledge: "+get_property({"name":all_mushrooms_colors[mushroom_index]},"display_name")+"s heal you when eaten.",
                                "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                            })                                
                        }

                        if(mushroom.effect=="saturation"){
                            chat.push({
                                "text":"Knowledge: "+get_property({"name":all_mushrooms_colors[mushroom_index]},"display_name")+"s are safe to eat.",
                                "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                            })                               
                        }                    
                    
                        
                    }




                

                  

                    
                // }

    },

    stack_size : 1,

    name:"knowledge_tablet",

    display_name:"Knowledge Tablet",

    destroy_time:5,

    image:images.knowledge_tablet

}


const air = {
    
    name:"air",

    hiden_in_accended:true,

    kills_grass:false,

    collision_box:false,

    transparent:true,

    image:images.air

}


const grass = {

    category:"nature",
    name:"grass",
    display_name:"Grass",

    broken_with : [
        {
            "tool_type" : "shovel" 
        }
    ],

    destroy_time:2,

    image:images.grass,
    on_right_clicked:function(block,x,y){
        if(player.inventory[player.selected_slot_index.index].item.name=="hoe" && get_block_from_index(x,y-1).name=="air"){
            change_block(x,y,"soil")
        }
        
    },
               

    random_tick:{
                "event":function(x,y){

              
                    
                    // if(get_property(get_block_from_index(x,y-1),"kills_grass")!=false){
                        
                    //     change_block(x,y,"dirt")
                    //     // console.log("EVENT DO THOIING")
                    // }
                    // else{
                    //     if(get_block_from_index(x,y-1).name=="dirt" && get_block_from_index(x+1,y).name=="air"){
                            
                    //         change_block(x-1,y,"grass")
                    //     // console.log("EVENT DO THOIING")

                    

                    //     }
                    //     if(get_block_from_index(x+1,y).name=="dirt" && get_block_from_index(x+1,y-1).name=="air"){
                    //         change_block(x+1,y,"grass")
                    //     // console.log("EVENT DO THOIING")

                    //     }
                    // }



                    
                },
                "loop":true,
                "time":function(){
                    return (10000*Math.random())+14000
                }
    }
}


const stone_brick_pedestal = {
    category:"earth",
    name:"stone_brick_pedestal",
    display_name:"Stone Brick Pedestal",

    hit_box:[2,1],
    transparent:true,

    kills_grass:false,

    destroy_time:3,

    broken_with : [
        {
            "tool_type" : "pickaxe" 
        }
    ],

     
    image:images.stone_brick_pedestal
         
}


const stone_brick = {
    
    display_name:"Stone Brick",

    name:"stone_brick",

    broken_with : [
                {
                    "tool_type" : "pickaxe" 
                }
    ],

    destroy_time:10,

    image:images.stone_brick
}


const magnifying_glass = {

    name:"magnifying_glass",

    destroy_time:0,

    hand_size:1,

    image:images.magnifying_glass,
    
    hiden_in_accended:true

}


const stone = {
    category:"earth",

    name:"stone",

    display_name:"Stone",

    broken_with:[
        {
            "tool_type" : "pickaxe" 
        }
    ],

    destroy_time:3,

    image:images.stone
           
}


const soil = {
    category:"nature",

    
    name:"soil",

    transparent:true,

    display_name:"Soil",

    collision_box:[
        {
            "x":0,
            "y":4,
            "size_y":28,
            "size_x":32,

        }
    ],

    destroy_time:2,

    image:images.soil
           
}

const camp_fire = {
    category:"nature",

    
    name:"camp_fire",

    transparent:true,

    display_name:"Camp Fire",

    kills_grass:false,


    collision_box:false,

    on_placed:function(block,x,y){

        block.particle_emmiter = new particle_emitter({

                "parent_location":{"string":function(){return get_block_from_index(x,y).particle_emmiter}},

                "particle":Smoke_par,
                "x":(x+0.5)*block_size,
                "y":(y+0.5)*block_size,
                "emiter_timer":1400
            })
        

        particles.push(block.particle_emmiter)   
    },

    on_right_clicked:function(){
        engin.change_selected_layer(["camp_fire"],"set")
        
    },


    destroy_time:2,

    image:images.camp_fire
           
}


const marble = {

    category:"earth",

    name:"marble",

    display_name:"Marble",

    broken_with : [
        {
            "tool_type" : "pickaxe" 
        }
    ],

    destroy_time:3,

    image:images.marble
    
}


const slate = {

    category:"earth",

       
        name:"slate",

    display_name:"Slate",

    broken_with : [
                {
                    "tool_type" : "pickaxe" 
                }
    ],

    destroy_time:3,

    image:images.slate
       
}


const blue_mushroom = {
 
    category:"nature",

    on_used:function(){
        blue_mushroom_function()

        player.give_hunger(6)
    },
            
    has_knowledge:true,

    bottom_side_image:images.mushroom_root,

    render_bottom_side_image_on:["soil"],

    random_tick:{
        "event":function(x,y){

            if(get_block_from_index(x,y+1).name=="soil"){

                let random_number = Math.round(Math.random())

                if(random_number==0){
                    if(get_block_from_index(x-1,y+1).name=="soil" && get_block_from_index(x-1,y).name=="air"){
                        set_block_from_index(x-1,y,create_item("blue_mushroom"))
                    }

                }
                else if(random_number==1){
                    if(get_block_from_index(x+1,y+1).name=="soil" && get_block_from_index(x+1,y).name=="air"){
                        set_block_from_index(x+1,y,create_item("blue_mushroom"))
                    }
                }

            }
            
        },
        "loop":true,
        "time":function(){
            return 20000+(Math.random()*18000)
        }
    },

    decrease_after_use:1,

    use_after_duration:1200,

    transparent:true,

    kills_grass:false,

    collision_box:false,

    name:"blue_mushroom",

    display_name:"Blue Mushroom",

    destroy_time:0,


    image:images.blue_mushroom

}


const red_mushroom = {

        category:"nature",

        has_knowledge:true,

        collision_box:false,
            
        transparent:true,

        kills_grass:false,
            
        decrease_after_use:1,

        use_after_duration:1200,

        bottom_side_image:images.mushroom_root,

        random_tick:{
            "event":function(x,y){
    
                if(get_block_from_index(x,y+1).name=="soil"){
    
                    let random_number = Math.round(Math.random())
    
                    if(random_number==0){
                        if(get_block_from_index(x-1,y+1).name=="soil" && get_block_from_index(x-1,y).name=="air"){
                            set_block_from_index(x-1,y,create_item("red_mushroom"))
                        }
    
                    }
                    else if(random_number==1){
                        if(get_block_from_index(x+1,y+1).name=="soil" && get_block_from_index(x+1,y).name=="air"){
                            set_block_from_index(x+1,y,create_item("red_mushroom"))
                        }
                    }
    
                }
                
            },
            "loop":true,
            "time":function(){
                return 200
            }
        },

        render_bottom_side_image_on:["soil"],


        on_used:function(){
                red_mushroom_function()

                player.give_hunger(6)
        },

        name:"red_mushroom",

        display_name:"Red Mushroom",

        destroy_time:0,

        image:images.red_mushroom

}

    
const green_mushroom = {
 
    category:"nature",

    collision_box:false,

    has_knowledge:true,

    decrease_after_use:1,

    bottom_side_image:images.mushroom_root,

    render_bottom_side_image_on:["soil"],

    use_after_duration:1200,
    random_tick:{
        "event":function(x,y){

            if(get_block_from_index(x,y+1).name=="soil"){

                let random_number = Math.round(Math.random())

                if(random_number==0){
                    if(get_block_from_index(x-1,y+1).name=="soil" && get_block_from_index(x-1,y).name=="air"){
                        set_block_from_index(x-1,y,create_item("green_mushroom"))
                    }

                }
                else if(random_number==1){
                    if(get_block_from_index(x+1,y+1).name=="soil" && get_block_from_index(x+1,y).name=="air"){
                        set_block_from_index(x+1,y,create_item("green_mushroom"))
                    }
                }

            }
            
        },
        "loop":true,
        "time":function(){
            return 20000+(Math.random()*18000)
        }
    },


    on_used:function(){
        green_mushroom_function() 
        
        player.give_hunger(6)

        
    },
  
    transparent:true,

    kills_grass:false,

    name:"green_mushroom",

    display_name:"Green Mushroom",

    destroy_time:0,
           
    image:images.green_mushroom
    
}


const stone_boulder = {
        
    category:"earth",

    collision_box:false,

    broken_with : [
                {
                    "tool_type" : "pickaxe" 
                }
    ],

    transparent:false,

            
    name:"stone_boulder",

    display_name:"Stone Boulder",

    destroy_time:1.25,

    image:images.stone_boulder
    
}


const grass_block = {

    category:"nature",

    collision_box:false,
       
    collision_box:false,
            
    transparent:true,

    kills_grass:false,

    loot_table:block_loot_tables.grass_block,

    name:"grass_block",

    display_name:"Grass Block",

    destroy_time:0,

    image:images.grass_block
          
}


const tall_grass_block = {

    category:"nature",

    collision_box:false,

    loot_table:block_loot_tables.grass_block,

    collision_box:false,
            
    transparent:true,

    kills_grass:false,

    hit_box:[1,2],

    name:"tall_grass_block",

    display_name:"Tall Grass Block",

    destroy_time:0,

    image:images.tall_grass_block

}


const bedrock = {
    
    category:"earth",

    name:"bedrock",

    display_name:"Bed Rock",

    image:images.bedrock// let variated_images:[bedrock_image,bedrock_image2]variated_images[number_from(0,variated_images.length-1)()]

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
                    alert(block_js[state])
                    block[propertie.name] = propertie.value(block_js[state])
                });
                
            }

            if(component["structure_properties"]){
                component["structure_properties"].forEach(propertie => {
                    // alert(propertie.name)
                    if(propertie.type=="on_created"){
                        if(block_structure["on_created_functions"]==undefined){
                            block_structure["on_created_functions"] = []
                        }

                        block_structure["on_created_functions"].push(propertie.value)

                    }
                    else{
                        block_structure[propertie.name] = propertie.value(block_js[state])
                    }
                    
                });
                
            }

        }

        // blocks[block.name][]
    }

    // blocks
    // alert(block)
});

// blocks = blocks_structure


// const blocks={
//         "air":air,
//         "blank":blank,
//         "stone":stone,
//         // "dirt":dirt,
        
//         // "grass":grass,
//         // "stone_brick":stone_brick,
//         // // "cracked_block":cracked_block,
//         // "missing_block":missing_block,
        
//         // "magnifying_glass":magnifying_glass,
//         // "blue_mushroom":blue_mushroom,
//         // "green_mushroom":green_mushroom,
//         // "red_mushroom":red_mushroom,
//         // "knowledge_tablet":knowledge_tablet,
//         // "stone_brick_pedestal":stone_brick_pedestal,
//         // "marble":marble,
//         // "stone_boulder":stone_boulder,
//         // "grass_block":grass_block,
//         // "tall_grass_block":tall_grass_block,

//         // "log":log,

//         // "leaf":leaf,
//         // "slate":slate,

//         // "extrude_block":extrude_block,
//         // "laod_block":laod_block,
//         // "bedrock":bedrock,

//         // "plank":plank,
//         // "slightly_striped_log":slightly_striped_log,
//         // "moderately_striped_log":moderately_striped_log,
//         // "mostly_striped_log":mostly_striped_log,
//         // "striped_log":striped_log,


//         // "crafting_table":crafting_table,

//         // "soil":soil,
//         // "wheat_crop":wheat_crop,
//         // "camp_fire":camp_fire

//         // // "snowy_grass":snowy_grass,
//         // // "snow_layer_1":snow_layer_1,
//         // // "snow_layer_2":snow_layer_2,
//         // // "snow_layer_3":snow_layer_3,
//         // // "snow_block":snow_block





// }

if(is_server){
    module.exports={get_item,get_just_block,change_block,block_is}
}

            
     