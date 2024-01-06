//V2.7

if(is_server){
    var {blank_world,generate_elevation_list,convert_names_to_blcoks,convert_blcoks__to_names,get_block,reload_path,noise} = require("./world_parts")
}







function over_world(noise_settings){
    let block_list=blank_world()

    let elevation_list=generate_elevation_list({
        "seed":seed,
        "oct":3
    })

    for(let x=0;x<world_size[0];x++){
        
        for(let y=0;y<world_size[1];y++){
            if(y==elevation_list[x]){
                block_list[x][y]=get_block("grass")

            }
            if(y==elevation_list[x]+1){
                block_list[x][y]=get_block("dirt")

            }
            if(y==elevation_list[x]+2){
                block_list[x][y]=get_block("dirt")

            }
        

            if(y>=elevation_list[x]){
            
                

        
                if(y>elevation_list[x]){
                    if(block_list[x][y].name=="air"){
                        if(noise(x*8,y*8,.5,noise_settings)>0.6){
                        block_list[x][y]=(get_block("air"))
                        }
                        else{
                
                            block_list[x][y]=(get_block("stone"))
                        }
                    }
                    
                }
            
            }



                    if(y==world_size-1){
                block_list[x][y]=get_block("stone")

            }

            
        }
        

    }

    return block_list
}



if(is_server){
    module.exports={over_world}
}

