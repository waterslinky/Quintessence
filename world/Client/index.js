document.body.style.backgroundColor="rgb(0,0,0)"


















//Entities

function update_entities(){
    entities.forEach(entitie => {
        if(entitie.update && entitie.x+entitie.size_x>=world_cam[0]  &&  entitie.x<=world_cam[0]+innerWidth){
            if(entitie.y+entitie.size_y>=world_cam[1]  &&  entitie.y<=world_cam[1]+innerHeight){
                // console.log("G")
                entitie.update()
            }
        }
    });



}

// async function readJsonFiles() {

//     const response = await fetch("./Client/test.json");
    
//     console.log(response)

// }
// readJsonFiles()


// async function readJsonFiles() {
//     const folderPath = "./Client/test_folder"; // Update this with the path to your JSON folder

//     try {
//         const response = await fetch(folderPath);
//         console.log(response)
//         if (!response.ok) {
//             throw new Error(`Failed to read the folder: ${response.statusText}`);
//         }
//         console.log("files")

//         const files = await response.json();
//         console.log(files)
//         for (const file of files) {
//             console.log(file)
//             const filePath = `${folderPath}/${file}`;

//             try {
//                 const fileResponse = await fetch(filePath);
//                 if (!fileResponse.ok) {
//                     throw new Error(`Failed to load ${file}`);
//                 }

//                 const jsonContent = await fileResponse.json();
//                 console.log(`Parsed JSON from ${file}:`, jsonContent);

//                 // Do something with the parsed JSON, e.g., update the UI
//             } catch (error) {
//                 console.error(`Error loading or parsing ${file}:`, error);
//             }
//         }
//     } catch (error) {
//         console.error(`Error reading the folder:`, error);
//     }
// }

// console.log(readJsonFiles())

function world_keys(){



    if(KeysDown["w"] || KeysDown[" "] || KeysDown["W"]){
        // console.log("WW"+player.game_mode)


        if((player.game_mode=="Ascended" || player.game_mode=="AscendedGost") && player.flying){
            // console.log("WW2")

            ApplyVelocityWhenNotMax(player,[0,-13*player.AirWalkMultiplier])

        }
        // if(player.game_mode=="Servival"){
        //     if(player.grouded){
        //         player.y_val-=13

        //     }
        // }

        if(!player.flying){
                    if(player.grouded){
            player.y_val-=18

        }
        }


    

    }
    if(KeysDown["a"] || KeysDown["A"]){
        if(player.grouded){
            ApplyVelocityWhenNotMax(player,[-9,0])

        }
        else{
            ApplyVelocityWhenNotMax(player,[-9*player.AirWalkMultiplier,0])

        }
        

    }
    if(KeysDown["d"] || KeysDown["D"]){
        if(player.grouded){
            ApplyVelocityWhenNotMax(player,[9*player.AirWalkMultiplier,0])

        }
        else{
            ApplyVelocityWhenNotMax(player,[9*player.AirWalkMultiplier,0])

        }
    

    }
    if(KeysDown["s"] || shift_down || KeysDown["S"]){
        
        if((player.game_mode=="Ascended" || player.game_mode=="AscendedGost")  && player.flying){
            ApplyVelocityWhenNotMax(player,[0,13])

        }
    }



    // let negitive=false


    player.check_boaundy()


    // if(player.x<0){
    //     player.x=0
    //     // console.log("SET 0")
    // }
    // if(player.y<0){
    //     player.y=0
    // }

    // if(player.x+player.size_x>=(block_list.length)*block_size){
    //     console.log("XXXXXXXXXXXXXXXXXXXXX")
    //     player.x=((block_list.length)*block_size)-player.size_x
    //     // console.log("SET 0")
    // }
    // if(player.y+player.size_y<block_list[0].length){
    //     player.y=block_list[0].length+player.size_y
    // }




    if(player.x+player.size_x>(block_list.length)*block_size){
        player.x=((block_list.length)*block_size)-player.size_x
    }
    if(player.y+player.size_y>(block_list[0].length)*block_size){
        player.y=((block_list[0].length)*block_size)-player.size_y
    }
    if(player.y<0){
        player.y=0
    }


    player.update()


    



    





}

function reload_etrude_ghost(randomize = false){
    // alert("t")
    for(let x=0;x<block_list.length;x++){
        for(let y=0;y<block_list[x].length;y++){

            let block = block_list[x][y]

            if(block.name == "extrude_block" ){
        

                if(randomize){
                    randomize_extrude_distance(block)
                }
                

                // console.log(block)
                // if(block.offset_x != undefined  ){
                    remake_etrude_structcher_ghosts(block)
                // }
                
            }

        }
    }
}


function world_keys_down(event){

    if (event.keyCode == 49){
        player.selected_slot_index.index=0
    }
    if (event.keyCode == 50){
        player.selected_slot_index.index=1
    }
    if (event.keyCode == 51){
        player.selected_slot_index.index=2
    }
    if (event.keyCode == 52){
        player.selected_slot_index.index=3
    }
    if (event.keyCode == 53){
        player.selected_slot_index.index=4
    }
    if (event.keyCode == 54){
        player.selected_slot_index.index=5
    }
    if (event.keyCode == 55){
        player.selected_slot_index.index=6
    }
    if (event.keyCode == 56){
        player.selected_slot_index.index=7
    }
    if (event.keyCode == 57){
        player.selected_slot_index.index=8
    }


    // console.log("W"+event.keyCode)

    if (event.keyCode == 82){


        reload_etrude_ghost( true )



    }


    if (event.keyCode == 71){
        if(player.game_mode=="AscendedGost"){
            // player.game_mode="Ascended"
            player.set_game_mode("Ascended",true,["flying",["flying_emitter","particle"]])

            
        }
        else if(player.game_mode=="Ascended"){
            // player.game_mode="Servival"
            player.set_game_mode("Servival",true)

        }

        else if(player.game_mode=="Servival"){
            // player.game_mode="AscendedGost"
            player.set_game_mode("AscendedGost",true,["flying",["flying_emitter","particle"]])


        }

        
    }

    if (event.keyCode == 9){
        // console.log("TAB")

        event.preventDefault(); 
    } 



    if(event.keyCode==69){

        if(player.game_mode=="Ascended" || player.game_mode=="AscendedGost"){
            
            engin.change_selected_layer("accended_inventory","push")
            
        }
        else{
            engin.change_selected_layer("inventory","push")
        }
        
        
    }

    // alert(event.keyCode)
    if(KeysDown[" "]=="Down" || KeysDown["w"]=="Down" || KeysDown["W"]){

        // let was_down=false
        // if(KeysDown["w"]){
        //     was_down=true
        // }

        // if(KeysDown[" "]){
        //     was_down=true
        // }
        




        if(LastTimeWDown+300>engin.time_in_loop  && (player.game_mode=="AscendedGost" || player.game_mode=="Ascended")){
            // alert("GH")
           
            if(player.flying){
                player.flying=false
                stop_flying(player)
                delete KeysDown["w"]

          

            }
            
            else{
                start_flying(player)


            }



        }
        

    // if(!was_down){
        LastTimeWDown=engin.time_in_loop
    // }
        
        
    }

    if(event.keyCode==16){
        shift_down=true
        // alert("SHIFT")


    }

    



    if (event.keyCode == 9){

        show_tab_list=true
    }



    if(event.keyCode==79){
        
        if(oped){
            eval(prompt("command"))
        }
        

        // set_fov(1.5)
        // FOV=1.5

    }
  
    
    if(KeysDown["Escape"]){
        engin.change_selected_layer("settings","push")

        


    }
    // console.log(event.keyCode)
}



function world_keys_up(event){


    if(event.keyCode==16){
        shift_down=false
        // alert("SHIFT")


    }



    if (event.keyCode == 9){

        show_tab_list=false
    }

}


function world_mouse_wheel(event){
    if(event.deltaY>0){
        player.selected_slot_index.index++
    }
    if(event.deltaY<0){
        player.selected_slot_index.index--
    }
    // player.selected_slot_index++
    if(player.selected_slot_index.index<0){
        player.selected_slot_index.index=8
    }

    if(player.selected_slot_index.index>8){
        player.selected_slot_index.index=0
    }

}








function world_mousedown(event){
    
    if(engin.selected_layers.length==0){
        mining=true
    }
    
}
function world_mouseup(event){
    mining=false
}












world={
    

    "draw":function(){
     
    },
    "update":function(){

    },
    layers:[
        {
            "name":"settings",
            "draw":draw_settings,
            "update":update_settings,
            "keys_down":function(){},
            "elements":settings_elements
        },


        {
            "name":"load_structure",
            "draw":function(){},
            "update":function(){},
            "keys_down":function(){},
            "elements":load_structure_elements,
            "on_removed":on_load_structure_layer_removed,
            "draw":load_structure_draw
        },

        {
            "name":"extrude_block",
            "draw":function(){},
            "update":function(){},
            "keys_down":function(){},
            "elements":extrude_block_elements,
            "on_removed":on_extrude_ui_layer_removed,
            "on_added":on_extrude_ui_layer_added

            // "draw":load_structure_draw
        },


   


        // {
        //     "name":"exit",
        //     "draw":draw_exit,
        //     "update":function(){},
        //     "keys_down":function(){},
        //     "elements":exit_elements
        // },

        

        



        

        
        {
            "name":"default",
            "keys":world_keys,
            "keys_down":world_keys_down,
            "mouse_wheel":world_mouse_wheel,
            "keys_up":world_keys_up,
            "mousedown":world_mousedown,
            "mouseup":world_mouseup,
            "elements":[hot_bar_main_elements],
            "draw":  engin_draw,
            "update":engin_update


        }
    ],
    "after_layers_draw":function(){
        if(player.show_inventory_hand){

            
        


            

            if(inventory_hand.active){
                inventory_hand.orgin_x=mouse_x
                inventory_hand.orgin_y=mouse_y
                inventory_hand.find_pos()
                inventory_hand.draw()
            }

            
        }



        //Item Name Display
        if(item_name_display.active){

            item_name_display.x = mouse_x
            item_name_display.y = mouse_y - 60

            item_name_display.draw()
            
        }



    },

    "before_update":function(){
        item_name_display.active = false
    }
   
}


world.layers.push(survival_inventory_layer)
world.layers.push(accended_inventory_layer)
world.layers.push(crafting_table_layer)




const compile_blocks_and_items = function(){
    

    // for(const item_name in items){
    //     let item = items[item_name]

    //     for(let attribute in item){
    //         if(parse_item_attributes.includes(attribute)){

    //             item[attribute] = (typeof window != 'undefined' ? window : global)[item[attribute]]
                
    //         }
    //     }
        
    //     items[item_name] = item        
    // }




    blocks_and_items = copy(blocks)
    for(item in items){
        // console.log(items[item])
        blocks_and_items[item]=items[item]

    }

    // console.log(accended_inventory_search)
    redo_accended_blocks()
}


world_load={

    "layer_added_events":[
        function(){
            is_placing = false
            mining = false
        }
    ],
    
    "draw":  function(){
        clear_screen("0,0,20")
    },
    "update":function(){
        // if(connected){
            
        //     engin.change_selected_layer(["world_load"],"set")
        // }
        // if(connected && loaded){
        //     engin.set_game_state(world)

        //     engin.change_selected_layer([],"set")

        // }




        // console.log("loading")

    },
    layers:[
        {
            "name":"default",
            "elements":[
                new align({
                    "elements":[
                            new text({
                                "x": innerWidth/2,
                                "y": innerHeight/2,
                                
                                "text": "Loading World...",
                                "size": 48,
                                "color": "rgb(255,255,255)",
                                "align": "center"
                            })
                    ],
                    "groups":["ui"]
                })
            
            ],
            "mousedown":function(abc){
                alert(abc)
            }
        },
        {
            "name":"pick_mod_directory",
            "elements":[
                new align({
                    "elements":[
                            new text({
                                "x": innerWidth/2,
                                "y": innerHeight/2,
                                
                                "text": "Pick Mod Directory",
                                "size": 48,
                                "color": "rgb(255,255,255)",
                                "align": "center"
                            })
                    ],
                    "groups":["ui"]
                })
            
            ],
            "mousedown":async function(){
                
                engin.change_selected_layer(["importing_mods"],"set")
                
                let mods = await pick_directory("read",selected_mods)
                
                

                    
                    
                for(const mod_name in mods){
                        
                        let mod = mods[mod_name]
                        
                        if(mod.textures){
                          
                            if(mod.textures.items){

                                for(const texture_name in mod.textures.items){
                                    let texture = await convert_file(mod.textures.items[texture_name])
                                    
                                    if(texture!=undefined){
                                        window[texture_name] = texture
                                    }
                                    

                                }                                
                            }
                        

                            if(mod.textures.blocks){

                                for(const texture_name in mod.textures.blocks){
                                    let texture = await convert_file(mod.textures.blocks[texture_name])
                                    
                                    if(texture!=undefined){
                                        window[texture_name] = texture
                                    }

                                }                                
                            }
                        

                            
                        }
                        
                }


                for(const mod_name in mods){
                
                        let mod = mods[mod_name]

                        if(mod.items){
                        
                            for(const item_name in mod.items){
                                item = await convert_file(mod.items[item_name])

                                if(item!=undefined){
                                    items[item_name] = item

                                }

                                

                            }
                            
                        }
                        
                        if(mod.blocks){
                        
                            for(const block_name in mod.blocks){
                                block = await convert_file(mod.blocks[block_name])

                                if(block!=undefined){
                                    blocks[block_name] = block
                                }
                                

                            }
                            
                        }
                        

                        
                        
                }
                    
                    
                    
                    
                    start_game()


            }
        },
        {
            "name":"importing_mods",
            "elements":[
                new align({
                    "elements":[
                            new text({
                                "x": innerWidth/2,
                                "y": innerHeight/2,
                                
                                "text": "Importing Mods",
                                "size": 48,
                                "color": "rgb(255,255,255)",
                                "align": "center"
                            })
                    ],
                    "groups":["ui"]
                })
            
            ],
            "mousedown":function(){
 
            }
        }
        
        // ,
        
        // {"name":"world_connecting","elements":[

        //     new align({
        //         "elements":[
        //             new text({"x": innerWidth/2,"y": innerHeight/2,
        //                 "text": "Connecting to server...",
        //                 "size": 48,
        //                 "color": "rgb(255,255,255)",
        //                 "align": "center"
        //             })
        //         ],
        //         "groups":["ui"]
        //     })
        
        // ]},

        // {"name":"world_load","elements":[

        //     new align({"elements":[
        //         new text({"x": innerWidth/2,
        //             "y": innerHeight/2,
        //             "text": "Connected on Server",
        //             "size": 48,
        //             "color": "rgb(255,255,255)",
        //             "align": "center"
        //         }),
            
        //         new text({
        //             "x": innerWidth/2,
        //             "y": (innerHeight/2)+60,
        //             "text": "Waiting on World...","size": 48,
        //             "color": "rgb(255,255,255)",
        //             "align": "center"
        //         })

        //     ],
        //     "groups":["ui"]})
            


        // ]}


    ]
}








 


ticks_per_ping=2
ticks_ping=0


// other_players=[]


function clint_send_to_server(){
    // socket.emit("data",["change_block",JSON.stringify([x,y,""+block_name+""])])
    socket.emit("player_pos",player.pos_buffer)

    
}

function engin_update(){

    let before_update_time=Date.now()

    for(let i=0;i<100;i++){
        // console.log("GERGRRG")
    }

    clint_update()

    if(showAUT){
        AUT_total+=Date.now()-before_update_time
    }

    if(!multiplayer){
        
        server_engin_update()
    }
    else{
        clint_send_to_server()
    }

    

}

function start_game(){
    compile_blocks_and_items()

    if(selected_status=="offline"){

        engin.set_game_state(world)
                
        engin.change_selected_layer([],"set")

    }


    if(selected_status=="online"){

                    address=sessionStorage.getItem("address")
                    port=sessionStorage.getItem("port")
                    // engin.set_game_state(world_load)
                
                    engin.change_selected_layer(["world_connecting"],"set")


                    engin.akf_timer=8000
                    engin.afk_event=function(){
                    
                    if(multiplayer){
                        socket.emit("disconnect_self","Inactive")

                        engin.message("Kicked from server do to inactivity.",5000)
            
                        window.location.href = "../index.html"
                    }
                    }
                    engin.can_freez=false
                
                
                    connect_to_server(address,port)
                    // console.log()
    }
        
    if(document.hidden && selected_status!="online"){

        engin.pause() 

    }


}



engin.set_game_state(world_load)
// engin.change_selected_layer(["pick_mod_directory"],"set")





