//V2.7

if(is_server){
    var {get_block,reload_path,change_block,block_is, get_just_block} = require("./block")
}




blocks_to_updata=[45,22]
block_size=32

function server_engin_update(){
    players.forEach(player => {


        //generate_chucks

        if(game_rules.generate_chucks_client_side){
            let generate_chuck_area = [render_distance[0],render_distance[1]]
        
            if(game_rules.simulation_distance[0]>generate_chuck_area[0]){
                generate_chuck_area[0] = game_rules.simulation_distance[0]
            }
        
            if(game_rules.simulation_distance[1]>generate_chuck_area[1]){
                generate_chuck_area[1] = game_rules.simulation_distance[1]
            }
        
            // console.log(Math.floor((player.x/block_size)/chuck_size),Math.floor((player.y/block_size)/chuck_size))

            let player_block_x = Math.floor(player.x/block_size)
            let player_block_y = Math.floor(player.y/block_size)

            let player_chuck_x = Math.floor(player_block_x/chuck_size)
            let player_chuck_y = Math.floor(player_block_y/chuck_size)

            for(let generate_x=player_chuck_x-generate_chuck_area[0];generate_x<player_chuck_x+generate_chuck_area[0];generate_x++){

                for(let generate_y=player_chuck_y-generate_chuck_area[1];generate_y<player_chuck_y+generate_chuck_area[1];generate_y++){
                    if(generate_x<world_setting.world_size[0] && generate_y<world_setting.world_size[1] && generate_x>=0 && generate_y>=0){

                        if(chucks[generate_x]==undefined){
                            chucks[generate_x]={}
                        }


                        if(chucks[generate_x][generate_y]==undefined){

                            chucks[generate_x][generate_y] = generate_chuck(generate_x,generate_y,{
                                "seed":world_setting.seed,
                                "oct":3
                            })          
                                 
                        }
                    
                    }                
                }






                            
            }



        
        }
        

        
        
        if(is_server){
            player.x=player.pos_buffer[1][0]
            player.y=player.pos_buffer[1][1]
        }
   
        
        let render_from=[parseInt(((player.x+(block_size/2)))/block_size)-blocks_to_updata[0],  parseInt(((player.y+(block_size/2)))/block_size)-blocks_to_updata[1]  ]

        let subreact=[0,0]

        if(render_from[0]<0){
            subreact[0]=render_from[0]
            
            render_from[0]=0
        }
        if(render_from[1]<0){
            subreact[1]=render_from[1]

            render_from[1]=0

        }

        let render_to=[parseInt(((player.x+(block_size/2)))/block_size)+blocks_to_updata[0]+1+(subreact[0]*-1),  parseInt(((player.y+(block_size/2)))/block_size)+blocks_to_updata[1]+1+(subreact[1]*-1)  ]
        // console.log(render_to[0])
        // let render_to=[render_from[0]+((blocks_to_updata[0]*2))+1, render_from[1]+((blocks_to_updata[1]*2))+1  ]
        
        if(world_setting.world_size[0] && render_to[0]>(world_setting.world_size[0]*chuck_size)){
            render_to[0] = (world_setting.world_size[0]*chuck_size)
        }
        if(world_setting.world_size[1] && render_to[1]>(world_setting.world_size[1]*chuck_size)){
            render_to[1] = (world_setting.world_size[1]*chuck_size)
        }





        for(let x=render_from[0];x<render_to[0];x++){
            if(-1<x){
                for(let y=render_from[1];y<render_to[1];y++){
                    if(-1<y){

                        if(get_block_from_index(x,y)!=undefined){
                                    

                            let block = get_block_from_index(x,y)
                            
                            if(get_property(block,"update_functions")!=undefined){
                                get_property(block,"update_functions").forEach(update_function => {
                                    update_function(block)
                                });
                            }
                        }
                    }
                }
            }
        }
        }
    );

}





if(is_server){
    module.exports={change_block,block_is,server_engin_update,get_block,reload_path,disconect_player}
}