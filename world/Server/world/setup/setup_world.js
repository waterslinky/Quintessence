//V2.7

players=[]
block_list=[]
entities=[]




custom_structures={
}

function add_custom_structure(structure_name,structure){

    let parsed_structure = export_world(structure)
    
    console.log(parsed_structure)

    custom_structures[structure_name]=parsed_structure
    structures[structure_name]=parsed_structure
}


//V2.7
if(is_server){
    var {over_world} = require("./world/generation/over_wold")
}

//World
AirDrag=.4
friction=1.1

gravity=1
max_terminal_val=18






//Mushrrom Effects
function regeneration_mushroom(){
    player.add_effect("regeneration",30000)

    // for(mushroom in all_mushrooms_effects){
    for(let mushroom_index=0;mushroom_index<all_mushrooms_effects.length;mushroom_index++){
        mushroom=all_mushrooms_effects[mushroom_index]
    
    
        // if(mushrooms[mushroom].effect=="regeneration"){
        //     let knowledge_needed=player.add_knowledge({"name":mushroom,"text":mushrooms[mushroom].knowledge})
        //     // player.add_knowledge({"name":mushroom,"text":mushrooms[mushroom].knowledge})
        //     if(knowledge_needed){
        //         chat.push({
        //             "text":"Knowledge: "+get_block(mushroom).display_name+"s heal you when eaten.",
        //             "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
        //         })                        
        //     }

        // }

        if(mushroom.effect=="regeneration"){
            let knowledge_needed=player.add_knowledge({"name":all_mushrooms_colors[mushroom_index],"text":mushroom.knowledge})
           
            if(knowledge_needed){
                chat.push({
                    "text":"Knowledge: "+get_property(all_mushrooms_colors[mushroom_index],"display_name")+"s heal you when eaten.",
                    "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                })                        
            }

        }
        
    }
}

function poison_mushroom(){
    player.add_effect("poison",5000)

    for(let mushroom_index=0;mushroom_index<all_mushrooms_effects.length;mushroom_index++){
        mushroom=all_mushrooms_effects[mushroom_index]

        if(mushroom.effect=="poison"){
            let knowledge_needed=player.add_knowledge({"name":all_mushrooms_colors[mushroom_index],"text":mushroom.knowledge})
           
            if(knowledge_needed){
                chat.push({
                    "text":"Knowledge: "+get_property(all_mushrooms_colors[mushroom_index],"display_name")+"s are poisonous.",
                    "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                })                        
            }

        }
        
    }

}

function saturation_mushroom(){
    // player.add_effect("poison",5000)

    player.give_hunger(3)

    for(let mushroom_index=0;mushroom_index<all_mushrooms_effects.length;mushroom_index++){
        mushroom=all_mushrooms_effects[mushroom_index]

        if(mushroom.effect=="saturation"){
            let knowledge_needed=player.add_knowledge({"name":all_mushrooms_colors[mushroom_index],"text":mushroom.knowledge})
           
            if(knowledge_needed){
                chat.push({
                    "text":"Knowledge: "+get_property(all_mushrooms_colors[mushroom_index],"display_name")+"s are safe to eat.",
                    "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                })                        
            }

        }
        
    }
}


let all_mushrooms_colors=[
    "red_mushroom",
    "green_mushroom",
    "blue_mushroom"
]

let all_mushrooms_effects=[
    {"effect":"poison","knowledge":"Kills you when eaten"},
    {"effect":"regeneration","knowledge":"Heals you when eaten"},
    {"effect":"saturation","knowledge":"Has no effect when eaten."}
]





function new_world(){


    world_setting.world_size=[10,5]
    world_setting.seed = Math.floor(Math.random()*1000)

    //GOOD SEED 849






    // block_list=over_world({
    //     "seed":world_setting.seed,
    //     "oct":3
    // })



    randomize_list(all_mushrooms_effects)
    



}


loading_images=setInterval(function () {
        if(loads_started==undefined || loads_started==0){
            clearInterval(loading_images)

            


            if(selected_status=="offline"){

                if(selected_slot){

                    import_saved_client()
                }

            }       

            

            
            let wolrd_imorted=import_saved_server()
            // 
            if(!wolrd_imorted){

                new_world()

                if(world_setting.world_size[0]!=undefined){
                    spawn_point = (world_setting.world_size[0]*chuck_size*block_size)/2
                }
                else{
                    spawn_point = 0
                }
                

                player.spawn_point()

            }

            // alert(block_list)

            if(world_setting.world_size[0]!=undefined){
                spawn_point = (world_setting.world_size[0]*chuck_size*block_size)/2
            }
            else{
                spawn_point = 0
            }
            

            // console.log(block_list)
            
            reload_etrude_ghost()



  

                       
            // make_new_world=false
            // if(!is_server){


            // }
          

            // if(!multiplayer){
            //     if(!make_new_world && !is_server){
            //         alert("w")
                    
            
            //     }
            //     else{

                    
            
            //     }
            
            // }


            make_inventory_ui()


            //Makes the Knowledge Tablet Image
            red_mushroom_function = window[all_mushrooms_effects[0].effect+"_mushroom"]

            green_mushroom_function = window[all_mushrooms_effects[1].effect+"_mushroom"]

            blue_mushroom_function = window[all_mushrooms_effects[2].effect+"_mushroom"]



            images.knowledge_tablet.push(images["knowledge_tablet_red_"+all_mushrooms_effects[0].effect])

            images.knowledge_tablet.push(images["knowledge_tablet_green_"+all_mushrooms_effects[1].effect])

            images.knowledge_tablet.push(images["knowledge_tablet_blue_"+all_mushrooms_effects[2].effect])

            images.knowledge_tablet.push(images.knowledge_tablet_overlay)   


            selected_mods = JSON.parse(localStorage.getItem("selected_mod_list_slot"+selected_slot))


            if(selected_mods==null){
                selected_mods = []
            }



            if(selected_mods.length!=0){
                engin.change_selected_layer(["pick_mod_directory"],"set")
            }
            else{
          
                start_game()
            }
            
        }

})
























if(is_server){
    module.exports={players,entities,block_list}
}