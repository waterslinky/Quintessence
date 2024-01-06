//V2.7
if(is_server){
    var {blank_world,generate_elevation_list,convert_names_to_blcoks,convert_blcoks__to_names,get_just_block,reload_path,noise} = require("./world_parts")
}





red=0
green=0
blue=0

test_map=[]

function over_world(noise_settings){
    let block_list=blank_world()

    let elevation_list=generate_elevation_list({
        "seed":seed,
        "oct":3
    })


    let in_tree_range = false




    spawn_structures_map=[]
    for(let x=0;x<world_size[0];x++){
        
        let line=[]
        for(let y=0;y<world_size[1];y++){
            
            let spawn_structures=line.push(noise(x*3,y*3,.5,{"seed":seed,"oct":1}))
        }

        spawn_structures_map.push(line)
    }



    for(let x=0;x<world_size[0];x++){
        
        for(let y=0;y<world_size[1];y++){
            if(y==elevation_list[x]-1){
                let grass_block_noise=noise(x*8,y*8,.5,{"seed":seed*5,"oct":1})
                if(grass_block_noise>.6 && number_from_2D_index(x,y,seed*25)>.2){
                    if(grass_block_noise>.8){
                        change_block(x,y,"tall_grass_block",false,block_list)
                        // block_list[x][y]=get_just_block("tall_grass_block")
                        // console.log("Tall GRASS")

                    }
                    else{
                        block_list[x][y]=get_just_block("grass_block",x,y)
                        // console.log("GRASS")
                    }
                    
                    
                }
                
                

            }
            if(y==elevation_list[x]){
                block_list[x][y]=get_just_block("grass",x,y)

            }
            if(y==elevation_list[x]+1){
                block_list[x][y]=get_just_block("dirt",x,y)

            }
            if(y==elevation_list[x]+2){
                block_list[x][y]=get_just_block("dirt",x,y)

            }
        

            if(y>=elevation_list[x]){
            
                

        
                if(y>elevation_list[x]){
                    if(block_list[x][y].name=="air"){
                        if(noise(x*8,y*8,.5,noise_settings)>0.6){
                        block_list[x][y]=(get_just_block("stone_boulder",x,y))
                        }
                        else{

                            
                
                            // console.log("TT",x,y)
                            block_list[x][y]=(get_just_block("stone",x,y))


                        }

                        if(noise(x*4.5,y*19.5,.5,{"seed":seed*22,"oct":1})>.775){
                            // console.log("slate")
                            // console.log("TT",x,y)

                            change_block(x,y,"slate",false,block_list)
                        }

                            if(noise(x*6,y*6,.5,{"seed":seed*18,"oct":1})>.78){
                                // console.log("Marble")
                                change_block(x,y,"marble",false,block_list)
                            }


                    }
                    




                }
            
            }



            let spawn_mushroom=noise(x*150,700,1,{"seed":seed,"oct":20})>.5
       

                if(spawn_mushroom){
                    let mushroom_map=noise(x*5,500,.5,{"seed":seed,"oct":1})


                    if(mushroom_map>.69 && mushroom_map<.8 && block_list[x][y].name=="grass"){

                        // if(mushroom_map>.7 && mushroom_map<=.73174399999999955){
                            red++
                            // block_list[x][y-1]=get_just_block("red_mushroom")
                            change_block(x,y-1,"red_mushroom",false,block_list)


                        // }
                   

                        // if(mushroom_map>.73174399999999955 && mushroom_map<.743314520063999506493956914709997363388538360595703125000000001){
                        //     green++
                        //     block_list[x][y-1]=get_just_block("green_mushroom")

                        // }

                        // if(mushroom_map>.743314520063999506493956914709997363388538360595703125000000001 && mushroom_map<.8){
                        //     blue++
                        //     block_list[x][y-1]=get_just_block("blue_mushroom")
                        // }

                        // green++

                        // average++
                        
                        // test_map.push(mushroom_map)
                        // average_list+=mushroom_map
                        
                        // red++
                    }



                    let mushroom_map_2=noise(x*5,500,.5,{"seed":seed*2,"oct":1})


                    if(mushroom_map_2>.69 && mushroom_map_2<.8 && block_list[x][y].name=="grass"){

                        // if(mushroom_map>.7 && mushroom_map<=.73174399999999955){
                            blue++
                            // block_list[x][y-1]=get_just_block("blue_mushroom")
                            change_block(x,y-1,"blue_mushroom",false,block_list)


                        // }
                   

                        // if(mushroom_map>.73174399999999955 && mushroom_map<.743314520063999506493956914709997363388538360595703125000000001){
                        //     green++
                        //     block_list[x][y-1]=get_just_block("green_mushroom")

                        // }

                        // if(mushroom_map>.743314520063999506493956914709997363388538360595703125000000001 && mushroom_map<.8){
                        //     blue++
                        //     block_list[x][y-1]=get_just_block("blue_mushroom")
                        // }

                        // green++

                        // average++
                        
                        // test_map.push(mushroom_map)
                        // average_list+=mushroom_map
                        
                        // red++
                    }


                    let mushroom_map_3=noise(x*5,500,.5,{"seed":seed*3,"oct":1})


                    if(mushroom_map_3>.69 && mushroom_map_3<.8 && block_list[x][y].name=="grass"){

                        // if(mushroom_map>.7 && mushroom_map<=.73174399999999955){
                            green++
                            change_block(x,y-1,"green_mushroom",false,block_list)
                            // block_list[x][y-1]=get_just_block("green_mushroom")

                        // }
                   

                        // if(mushroom_map>.73174399999999955 && mushroom_map<.743314520063999506493956914709997363388538360595703125000000001){
                        //     green++
                        //     block_list[x][y-1]=get_just_block("green_mushroom")

                        // }

                        // if(mushroom_map>.743314520063999506493956914709997363388538360595703125000000001 && mushroom_map<.8){
                        //     blue++
                        //     block_list[x][y-1]=get_just_block("blue_mushroom")
                        // }

                        // green++

                        // average++
                        
                        // test_map.push(mushroom_map)
                        // average_list+=mushroom_map
                        
                        // red++
                    }





                    

                    
                }
             
                
                //Spawn Tree
                    let tree = noise(x*120,700,.5,{"seed":seed*10,"oct":1})


                    // console.log(tree)
                    if(block_list[x][y].name=="grass"){
                        if(tree>.75 && in_tree_range==false){
                            in_tree_range = true

                
                                change_block(x,y,"dirt",false,block_list)
                                // load_structure(x,y-1)
                                load_structure(x,y-1,convert_names_to_blocks(structures['tree']),block_list)


                        }
                        else{
                            in_tree_range = false
                        }                        
                    }

                



                    if(y==world_size-1){
                     block_list[x][y]=get_just_block("stone",x,y)

                

            }




            









            
        }
        

    }






    for(let x=0;x<world_size[0];x++){
        
        for(let y=0;y<world_size[1];y++){
            if(y>elevation_list[x]+10){

                if(spawn_structures_map[x][y]<.19999){
                    // console.log("test MISSING")         
                    

                    if(typeof spawn_structures_map[x-1]!="undefined" && typeof spawn_structures_map[x+1]!="undefined" && spawn_structures_map[x][y]<=spawn_structures_map[x-1][y] && spawn_structures_map[x][y]<=spawn_structures_map[x+1][y]){
                        if(typeof spawn_structures_map[x][y-1]!="undefined"  && typeof spawn_structures_map[x][y+1]!="undefined" && spawn_structures_map[x][y]<=spawn_structures_map[x][y-1] && spawn_structures_map[x][y]<=spawn_structures_map[x][y+1]){

                            if(spawn_structures_map[x][y]<=spawn_structures_map[x-1][y-1] && spawn_structures_map[x][y]<=spawn_structures_map[x-1][y+1]){
                                if(spawn_structures_map[x][y]<=spawn_structures_map[x+1][y-1] && spawn_structures_map[x][y]<=spawn_structures_map[x+1][y+1]){











                                    let same=true
                                    if(spawn_structures_map[x][y]==spawn_structures_map[x-1][y]){
                                        same=false
                                        // console.log("save1")
                                    }
                                    if(spawn_structures_map[x][y]==spawn_structures_map[x][y-1]){
                                        same=false
                                        // console.log("save2")
                    
                                          
                                    }                    



                
                










                                    if(same){
                                        load_structure(x-3,y-7,convert_names_to_blocks(structures['old_temple']),block_list)
                                        // block_list[x][y]=get_just_block("missing_block")
                                        
                                        // console.log("Spawn structure.")                                                
                                    }
                                    else{
                                        // console.log("Tryed to spawn structure.")     
                                        // block_list[x][y]=get_just_block("grass")


                                    }
                                   


                                    
                                    
                                                        
                                }
                            }
                        }
                    }
                    


                    

                }
            }
        }
    }






    for(let x=0;x<world_size[0];x++){
        
        for(let y=0;y<parseInt(noise(x*100,500,effect_drop=.5,{"seed":seed*7,"oct":4})*6)+1;y++){
            change_block(x,((world_size[1]-1)-y),"bedrock",false,block_list)

        }
    }



    return block_list
}



if(is_server){
    module.exports={over_world}
}

