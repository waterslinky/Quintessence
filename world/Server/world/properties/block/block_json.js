block_json = [
    {
        "name":"air",

        "hiden_in_accended":true,

        "kills_grass":false,

        "collision_box":false,

        "transparent":true,

        "image":"filled_air"
    },
    {
        "category":"earth",

        "name":"stone",
    
        "display_name":"Stone",
    
        "broken_with":[
            {
                "tool_type" : "pickaxe" 
            }
        ],
    
        "destroy_time":3,
    
        "image":"stone"
    },
    //make to item
    {
        
        "name":"blank",
        
        "hiden_in_accended":true,
        
        "image":"blank"
               
    },
    {
        "name":"bedrock",
    
        "category":"earth",        
    
        "display_name":"Bed Rock",
    
        "image":"bedrock"

        
    },
    {

        name:"extrude_block",
        
        display_name:"Extrude Block",

        data_properties:{
            dir:0,

            offset_x : 0,
        
            offset_y : 0,  

            extrude_block:"",
    
            extrude_min : 0,
        
            extrude_max : 0
        },

        transparent:true,
    
        kills_grass:false,
    
        collision_box:false,
    
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
    
        image:"extrude_block"
    
    },
    {

        name:"laod_block",

        display_name:"Laod Block",

        transparent:true,

        kills_grass:false,

        collision_box:false,

        data_properties:{

            structure_name:"",

            structure_x:0,

            structure_y:0,

            structure_size_x:10,
            
            structure_size_y:10,

        },

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
            
        image:"load_block"

    },
    {

        category:"nature",

        transparent:true,

        collision_box:false,

        loot_table:block_loot_tables.leaf,

        name:"leaf",

        display_name:"Leaf",

        destroy_time:0.75,
            
        side_image:"leaf_side1",
        
        render_side_image_on:["log"],

        image:"leaf"
                
    },
    {

        name:"dirt",
    
        display_name:"Dirt",

        broken_with : [
            {
                "tool_type" : "shovel"         }
        ],
       
        category:"nature",
    
        destroy_time:2,
    
        on_right_clicked:function(block,x,y){
            if(player.inventory[player.selected_slot_index.index].item.name=="hoe" && get_block_from_index(x,y-1).name=="air"){
                change_block(x,y,"soil")
            }
            
        },
      
        image:"dirt"
       
    },
    {

        name : "log",
        
        display_name : "Log",

        category : "nature",
    
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
       
        image : "log"
    
    },
    {
    
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
    
        image:"knowledge_tablet"
    
    },
    {
        
        name:"grass",

        display_name:"Grass",

        category:"nature",

        broken_with : [
            {
                "tool_type" : "shovel" 
            }
        ],
    
        destroy_time:2,
    
        image:"grass",

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
    }, 
    {

        category:"earth",

        name:"marble",

        display_name:"Marble",

        broken_with : [
            {
                "tool_type" : "pickaxe" 
            }
        ],

        destroy_time:3,

        image:"marble"
        
    },
    {

        category:"earth",

        
            name:"slate",

        display_name:"Slate",

        broken_with : [
                    {
                        "tool_type" : "pickaxe" 
                    }
        ],

        destroy_time:3,

        image:"slate"
        
    },
    {
    
        category:"nature",

        on_used:function(){
            blue_mushroom_function()

            player.give_hunger(6)
        },
                
        has_knowledge:true,

        bottom_side_image:"mushroom_root",

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


        image:"blue_mushroom"

    },
    {

            category:"nature",

            has_knowledge:true,

            collision_box:false,
                
            transparent:true,

            kills_grass:false,
                
            decrease_after_use:1,

            use_after_duration:1200,

            bottom_side_image:"mushroom_root",

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

            image:"red_mushroom"

    },
    {
    
        category:"nature",

        collision_box:false,

        has_knowledge:true,

        decrease_after_use:1,

        bottom_side_image:"mushroom_root",

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
            
        image:"green_mushroom"
        
    },
    {
            
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

        image:"stone_boulder"
        
    },
    {
        category:"nature",

        collision_box:false,
        
        collision_box:false,
                
        transparent:true,

        kills_grass:false,

        loot_table:block_loot_tables.grass_block,

        name:"grass_block",

        display_name:"Grass Block",

        destroy_time:0,

        image:"grass_block"
            
    },
    {

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

        image:"tall_grass_block"

    },
    {
    
        display_name:"Stone Brick",
    
        name:"stone_brick",
    
        broken_with : [
            {
                "tool_type" : "pickaxe" 
            }
        ],
    
        destroy_time:10,
    
        image:"stone_brick"
    },
    {
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
    
         
        image:"stone_brick_pedestal"
             
    }
]