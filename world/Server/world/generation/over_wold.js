//V2.7
if(is_server){
    var {blank_world,generate_elevation_list,convert_names_to_blcoks,convert_blcoks__to_names,reload_path,noise} = require("./world_parts")
}





red=0
green=0
blue=0

test_map=[]


function generate_block(block_name,x,y){

    let new_block = create_item({"x":x,"y":y,"name":block_name})


    let chuck_x = x-(parseInt(x/chuck_size)*chuck_size)
    let chuck_y = y-(parseInt(y/chuck_size)*chuck_size)
    

    //Check if block can be placed
    if(get_property(new_block,"hit_box")!=undefined){

        let can_place = true
        for(let x_index=0;x_index<get_property(new_block,"hit_box")[0];x_index++){
                for(let y_index=0;y_index<get_property(new_block,"hit_box")[1];y_index++){
                
                    if(0>=chuck_x+x_index && chuck_size<chuck_x+x_index && 0>=chuck_y+y_index && chuck_size<chuck_y+y_index){
                        console.log("G")
                    }   
                    
                }
        }

        if(can_place){

            let hit_box = get_property(new_block,"hit_box")

            for(let x_index=0;x_index<hit_box[0];x_index++){
                for(let y_index=0;y_index<hit_box[1];y_index++){
                
                    if((0>=chuck_x+x_index && chuck_size<chuck_x+x_index && 0>=chuck_y+y_index && chuck_size<chuck_y+y_index)==false){
                        
                        // block_list[chuck_x+x_index][chuck_y-y_index] = create_item("stone")
                        
                        // new_block = create_item("stone")
                    }   
                    
                }
            }

            return
        }
        else{
            new_block = create_item("air")
        }

    }
    else{

        return new_block

    }



    
  


}

function in_range(i,start,end){

    if(start<=i && end>=i){
        return true
    }

    return false

}




function generate_load_extrude_block_to_chuck(block,x,y,chuck_x,chuck_y,orgin_chuck_x,orgin_chuck_y,chuck){

    let world_x = (chuck_x*chuck_size) + x
    let world_y = (chuck_y*chuck_size) + y


    let end_structure_offset_x = 0
    let end_structure_offset_y = 0

    let offset_x = block.offset_x || 0
    let offset_y = block.offset_y || 0

    let extrude_distance = 0

    if(typeof block.extrude_min=="number" && typeof block.extrude_min=="number"){

        extrude_distance = number_from(block.extrude_min,block.extrude_max,number_from_2D_index(world_x,world_y,world_setting.seed+18))()

    }



    if(block.dir==0 || block.dir==2){

        for(let i=0;i<extrude_distance;i++){

            generate_block_to_chuck(create_item(block.extrude_block),x,y-i,orgin_chuck_x,orgin_chuck_y,chuck)

        }

        if(block.dir==0){
            end_structure_offset_y = (extrude_distance*-1)
        }   
        else{
            end_structure_offset_y = extrude_distance + 1
        }

    }
    // else{
    //     end_structure_offset_y = 1

    //     let extrude_length = extrude_distance
    //     let layer = []

    //     for(let i=0;i<extrude_length;i++){
    //         layer.push([get_just_block(block.extrude_block)])
    //     }


    //     let ghost_layer = {
    //         "layer" : layer
    //     }

    //     // console.log(block.ghost_layer)
         


   
        
    //     if(block.dir==3){
    //         ghost_layer.offset_x = (extrude_length*-1)+1


    //         end_structure_offset_x = ghost_layer.offset_x-1
    //     }   
    //     else{

    //             end_structure_offset_x = extrude_length
                
        
            
    //     }


    //     block.ghost_layers.push(ghost_layer)   
    // }



    // end_structure_offset_x += offset_x
    // end_structure_offset_y += offset_y



    // let end_structure = structures[block.end_structure]

    // if(typeof end_structure != "undefined"){

    //     let structcher = convert_names_to_blocks(end_structure)

    //     load_structure((block.x+end_structure_offset_x),(block.y+end_structure_offset_y)-(structcher.length-1),structcher,all_blocks)




    // }


    // generate_structcher_to_chuck(structure,chuck,chuck_x,chuck_y,orgin_structure_x,orgin_structure_y,orgin_chuck_x,orgin_chuck_y)

    


    generate_structcher_to_chuck(structures[block.end_structure],chuck,chuck_x,chuck_y,x+block.offset_x+end_structure_offset_x,y+end_structure_offset_y+block.offset_y,orgin_chuck_x,orgin_chuck_y)
                                                            // world_x,world_y
}

function generate_block_to_chuck(block,x,y,orgin_chuck_x,orgin_chuck_y,chuck){

    if(in_range(x,orgin_chuck_x * chuck_size,((orgin_chuck_x + 1) * chuck_size)-1) && in_range(y,orgin_chuck_y * chuck_size,((orgin_chuck_y + 1) * chuck_size)-1)){

        if(block.void && chuck[x - (orgin_chuck_x*chuck_size)][y - (orgin_chuck_y*chuck_size)].name!="air"){

            return
            
        }
        
        chuck[x - (orgin_chuck_x*chuck_size)][y - (orgin_chuck_y*chuck_size)] = block

        chuck[x - (orgin_chuck_x*chuck_size)][y - (orgin_chuck_y*chuck_size)].void = false

    }

}

function generate_structcher_to_chuck(structure,chuck,chuck_x,chuck_y,orgin_structure_x,orgin_structure_y,orgin_chuck_x,orgin_chuck_y){

    

    // for(let structure_x=0;structure_x<structure.length;structure_x++){
    //     for(let structure_y=0;structure_y<structure[structure_x].length;structure_y++){

    //         let x = orgin_structure_x + structure_x 
    //         let y = orgin_structure_y - structure_y 

    //         let block = create_item(structure[structure_x][(structure[structure_x].length-1)-structure_y])



    //         if(block.name=="extrude_block"){

    //             generate_load_extrude_block_to_chuck(block,x,y,chuck_x,chuck_y,orgin_chuck_x,orgin_chuck_y,chuck)

    //         }
    //         else{
                
    //             generate_block_to_chuck(block,x,y,orgin_chuck_x,orgin_chuck_y,chuck)

    //         }

            
    //     }
    // }
    

}

function load_structure_to_chuck(structure,chuck,x,y,orgin_chuck_x,orgin_chuck_y){

    generate_block_to_chuck(create_item("stone"),x,y,orgin_chuck_x,orgin_chuck_y,chuck)

}




function generate_structcher_layer(structure,chuck,orgin_chuck_x,orgin_chuck_y){





    for(let i_x=-(structure.max_chucks[1]-1);i_x<((structure.max_chucks[1]-1)+1);i_x++){

        let chuck_x = orgin_chuck_x + i_x

        for(let i_y=-(structure.max_chucks[1]-1);i_y<((structure.max_chucks[1]-1)+1);i_y++){

            let chuck_y = orgin_chuck_y + i_y



            for(let x_index=0;x_index<chuck_size;x_index++){

                    let x = (chuck_x*chuck_size) + x_index

                    




                // let elevation = parseInt((noise(1000,x*3,1,{
                //         "seed":seed,
                //         "oct":3
                // })*10)+20)

                let elevation = parseInt((noise(1000,x*3,1,{
                    "seed":world_setting.seed,
                    "oct":3
                })*10)+20)



                let last_noise_value
                let noise_value
                let next_noise_value


                if(structure.only_noise_x){

                    last_noise_value = noise((x-1)*structure.multiplier_x,1000,structure.effect_drop,{"seed":world_setting.seed*structure.noise_setting.seed_multiplier,"oct":structure.noise_setting.oct})

                    noise_value = noise(x*structure.multiplier_x,1000,structure.effect_drop,{"seed":world_setting.seed*structure.noise_setting.seed_multiplier,"oct":structure.noise_setting.oct})

                    next_noise_value = noise((x+1)*structure.multiplier_x,1000,structure.effect_drop,{"seed":world_setting.seed*structure.noise_setting.seed_multiplier,"oct":structure.noise_setting.oct})
            
                }

                for(let y_index=0;y_index<chuck_size;y_index++){
                    
                    let y = (chuck_y*chuck_size) + y_index

                    
                    let random_number

                    if(structure.random_number_seed_multiplier){
                        random_number = number_from_2D_index(x,y,world_setting.seed*structure.random_number_seed_multiplier)
                    }

                    if(random_number==undefined || (random_number>=structure.random_number_range[0] && random_number<=structure.random_number_range[1])){
                        if(structure.type=="surface"){
                            
                            if(y+structure.offset_y==elevation){
                                
                                if(structure.noise_range){
                                    if(noise_value>=structure.noise_range[0] && noise_value<=structure.noise_range[1]){

                                        generate_structcher_to_chuck(structure.blocks,chuck,chuck_x,chuck_y,(chuck_x*chuck_size) + x_index,(chuck_y*chuck_size) + y_index,orgin_chuck_x,orgin_chuck_y)

                                    }                                
                                }
                                else if(structure.max_noise){
            
                                    if(last_noise_value<noise_value && next_noise_value<=noise_value){

                                        generate_structcher_to_chuck(structure.blocks,chuck,chuck_x,chuck_y,(chuck_x*chuck_size) + x_index,(chuck_y*chuck_size) + y_index,orgin_chuck_x,orgin_chuck_y)

                                    }

                                }



                            }    
                
                        }
                        else if(structure.type=="underground"){
                            // console.log(((orgin_chuck_x*chuck_size)-(chuck_y*chuck_size)) + y_index)

                            let top_left_block = noise((x-1)*structure.multiplier_x,(y+1)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})
                            let top_block = noise((x)*structure.multiplier_x       ,(y+1)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})
                            let top_right_block = noise((x+1)*structure.multiplier_x,(y+1)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})

                            let middle_left_block = noise((x-1)*structure.multiplier_x,(y)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})
                            let middle_block = noise((x)*structure.multiplier_x,(y)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})
                            let middle_right_block = noise((x+1)*structure.multiplier_x,(y)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})

                            let bottom_left_block = noise((x-1)*structure.multiplier_x,(y-1)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})
                            let bottom_block = noise((x)*structure.multiplier_x,(y-1)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})
                            let bottom_right_block = noise((x+1)*structure.multiplier_x,(y-1)*structure.multiplier_y,0,{seed:world_setting.seed*structure.noise_setting.seed_multiplier,oct:1})

                         
                            if(middle_block<top_left_block && middle_block<top_block && middle_block<top_right_block && middle_block<middle_left_block && middle_block<middle_right_block && middle_block<bottom_left_block && middle_block<bottom_block && middle_block<bottom_right_block){
                
                                generate_structcher_to_chuck(structure.blocks,chuck,chuck_x,chuck_y,(chuck_x*chuck_size) + x_index,(chuck_y*chuck_size) + y_index,orgin_chuck_x,orgin_chuck_y)

                            }


                            
                        }
                        else{
                            if(structure.only_noise_y){

                                noise_value = noise(1000,y*structure.multiplier_y,structure.effect_drop,{"seed":world_setting.seed*structure.noise_setting.seed_multiplier,"oct":structure.noise_setting.oct})

                            }
                            else if(structure.only_noise_x==undefined){

                                noise_value = noise(x*structure.multiplier_x,structure.effect_drop,y*structure.multiplier_y,structure.effect_drop,{"seed":world_setting.seed*structure.noise_setting.seed_multiplier,"oct":structure.noise_setting.oct})

                            }                    
                        }
                    }
                    

                            
                    



                }                    
            }        







            // for(let x_index=0;x_index<chuck_size;x_index++){


            //     for(let y_index=0;y_index<chuck_size;y_index++){
            //         chuck[x_index][y_index] = create_item("grass")
            //     }

            // }

            


            // for(let x=0;x<chuck.length;x++){
            //     for(let y=0;y<chuck[x].length;y++){

        
            //         block_list[x+(chuck_x*chuck_size)][y+(chuck_y*chuck_size)] = chuck[x][y]


            //     }
            // }

        }
    }









}

function generate_chuck(chuck_x,chuck_y,noise_settings){
    //REMOVE block_list

    let chuck = []


    for(let x_index=0;x_index<chuck_size;x_index++){
        let line = []

        for(let y_index=0;y_index<chuck_size;y_index++){
            line.push(create_item({"name":"air","x":(chuck_x*chuck_size) + x_index,"y":(chuck_y*chuck_size) + y_index}))
        }

        chuck.push(line)

    }

    
    // for(let x_index=0;x_index<chuck_size;x_index++){


    //     let x = (chuck_x*chuck_size) + x_index

    //     for(let y_index=0;y_index<chuck_size;y_index++){
    //         let y = (chuck_y*chuck_size) + y_index

    //         let a = noise((x-8)*10,y*10,0.5,{
    //             "seed":seed,
    //             "oct":3
    //         })

    //         if(a>0.9){
    //             chuck[x_index][y_index] = create_item("grass")
    //             console.log("grass")
    //         }
    //         else{
    //             chuck[x_index][y_index] = create_item("stone")
    //         }
            
    //     }
    // }

    for(let x_index=0;x_index<chuck_size;x_index++){


        let x = (chuck_x*chuck_size) + x_index

        for(let y_index=0;y_index<chuck_size;y_index++){
            let y = (chuck_y*chuck_size) + y_index

            let block_name = "air"

            let elevation = parseInt((noise(1000,x*3,1,{
                "seed":world_setting.seed,
                "oct":3
            })*10)+20)

            if(y>=elevation){

                if(noise(x*8,y*8,.5,noise_settings)>0.6){
                    
                    block_name = "stone_boulder"
                }
                else{
                
                    block_name = "stone"
                
                }







                if(y==elevation){
                    block_name = "grass"
                }

                if(y-1==elevation){
                    block_name = "dirt"
                }
                if(y-2==elevation){
                    block_name = "dirt"
                }                
            }





  

            let generated_block = generate_block(block_name,x,y,chuck)
            if(generated_block!=undefined){
                    if(generated_block.name!="air"){
                     
                        chuck[x_index][y_index] = generated_block
                }
            }

                
            
            
            }

    }


    // for(let x_index=0;x_index<chuck_size;x_index++){


    //     let x = (chuck_x*chuck_size) + x_index

    //     let elevation = parseInt((noise(200,x*3,1,{
    //         "seed":world_setting.seed,
    //         "oct":3
    //     })*10)+20)

    //     for(let y_index=0;y_index<chuck_size;y_index++){
    //         let y = (chuck_y*chuck_size) + y_index



    //     }
    // }

    generation_structures_rules.forEach(structure => {

        generate_structcher_layer(structure,chuck,chuck_x,chuck_y)
 
    });





        

        
    for(let x=0;x<chuck.length;x++){
                for(let y=0;y<chuck[x].length;y++){
                
                    
            
                        
                    set_block_from_index(x+(chuck_x*chuck_size),y+(chuck_y*chuck_size),create_item({x,y,"name":"stone"}))




                }
    }


    return chuck


}
chucks = {}
function over_world(noise_settings){
    // let block_list=blank_world()
    


    // let in_tree_range = false



    // for(let x=0;x<world_size[0];x++){
        
    //     for(let y=0;y<world_size[1];y++){
    //         if(y==elevation_list[x]-1){
    //             let grass_block_noise=noise(x*8,y*8,.5,{"seed":seed*5,"oct":1})
    //             if(grass_block_noise>.6 && number_from_2D_index(x,y,seed*25)>.2){
    //                 if(grass_block_noise>.8){
    //                     change_block(x,y,"tall_grass_block",false,block_list)
    //                     // block_list[x][y]=get_just_block("tall_grass_block")
    //                     // console.log("Tall GRASS")

    //                 }
    //                 else{
    //                     block_list[x][y]=create_item("grass_block",{x,y})
    //                     // console.log("GRASS")
    //                 }
                    
                    
    //             }
                
                

    //         }

        

    //         if(y>=elevation_list[x]){
            
                

        
    //             if(y>elevation_list[x]){
    //                 if(block_list[x][y].name=="air"){
    //                     if(noise(x*8,y*8,.5,noise_settings)>0.6){
    //                     block_list[x][y]=(create_item("stone_boulder",{x,y}))
    //                     }
    //                     else{

                            
                
    //                         // console.log("TT",x,y)
    //                         block_list[x][y]=(create_item("stone",{x,y}))


    //                     }

    //                     if(noise(x*4.5,y*19.5,.5,{"seed":seed*22,"oct":1})>.775){
    //                         // console.log("slate")
    //                         // console.log("TT",x,y)

    //                         change_block(x,y,"slate",false,block_list)
    //                     }

    //                         if(noise(x*6,y*6,.5,{"seed":seed*18,"oct":1})>.78){
    //                             // console.log("Marble")
    //                             change_block(x,y,"marble",false,block_list)
    //                         }


    //                 }
                    




    //             }
            
    //         }



             
                
    //         //Spawn Tree
    //         let tree = noise(x*120,700,.5,{"seed":seed*10,"oct":1})


    //         // console.log(tree)
    //         if(block_list[x][y].name=="grass"){
    //             if(tree>.75 && in_tree_range==false){
    //                 in_tree_range = true

                
    //                     change_block(x,y,"dirt",false,block_list)
    //                     // load_structure(x,y-1)
    //                     load_structure(x,y-1,convert_names_to_blocks(structures['tree']),block_list)


    //             }
    //             else{
    //                 in_tree_range = false
    //             }                        
    //         }

                



    //                 if(y==world_size-1){
    //                  block_list[x][y]=create_item("stone",{x,y})

                

    //         }




            









            
    //     }
        

    // }









    // for(let x=0;x<world_size[0];x++){
        
    //     for(let y=0;y<parseInt(noise(x*100,500,effect_drop=.5,{"seed":seed*7,"oct":4})*6)+1;y++){
    //         change_block(x,((world_size[1]-1)-y),"bedrock",false,block_list)

    //     }
    // }


            




    // for(let chuck_x=0;chuck_x<world_size[0]/chuck_size;chuck_x++){
    //     for(let chuck_y=0;chuck_y<world_size[1]/chuck_size;chuck_y++){
    //         let chuck = generate_chuck(chuck_x,chuck_y,noise_settings)

    //         for(let x=0;x<chuck.length;x++){
    //             for(let y=0;y<chuck[x].length;y++){
    //                 block_list[x+(chuck_x*chuck_size)][y+(chuck_y*chuck_size)] = chuck[x][y]
    //             }
    //         }
    //     }

    // }



}



if(is_server){
    module.exports={over_world}
}

