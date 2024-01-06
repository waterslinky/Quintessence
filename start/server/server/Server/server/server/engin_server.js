//V2.7

if(is_server){
    var {get_block,reload_path,change_block,block_is} = require("./block")
}




blocks_to_updata=[45,22]
block_size=32

function server_engin_update(){
    players.forEach(player => {


        
        
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
        
        if(render_to[0]>block_list.length){
                    // console.log("HOLD BACK0")
                    render_to[0]=block_list.length
        }
        if(render_to[1]>block_list[1].length){
            // console.log("HOLD BACK1")

                    render_to[1]=block_list[1].length
        }





        for(let x=render_from[0];x<render_to[0];x++){
                    if(-1<x){
                        for(let y=render_from[1];y<render_to[1];y++){
                            if(-1<y){
                                // console.log("R")


                                if(block_list[x][y].random_tick){

                                    if(block_list[x][y].random_tick.ticks==undefined){
                                        
                                        block_list[x][y].random_tick.ticks=engin.time_in_loop+block_list[x][y].random_tick.time()
                                        
                                    }

                                    // console.log(engin.time_in_loop)

                                    if(block_list[x][y].random_tick.ticks<=engin.time_in_loop){
                                        
                                        block_list[x][y].random_tick.ticks=engin.time_in_loop+block_list[x][y].random_tick.time()

                                        block_list[x][y].random_tick.event(x,y)
                                        // console.log("EVENT")

                                        

                                        
                                        
                                    }
                                }
            
            
            
            
                                
                            }
                        }
                    }
            
        }
        
    });

}





if(is_server){
    module.exports={change_block,block_is,server_engin_update,get_block,reload_path,disconect_player}
}