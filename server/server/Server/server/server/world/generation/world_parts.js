//V2.7

if(is_server){
    var {get_block,reload_path} = require("../../block")
    var {noise} = require("../../../../common/noise")

}

function blank_world(){
    let block_list=[]

    for(let x=0;x<world_size[0];x++){
        let line=[]
        for(let y=0;y<world_size[1];y++){

            line.push(get_block("air"))

        }
        block_list.push(line)

    }

    return block_list
}


function generate_elevation_list(noise_settings){

    
    let elevation_list=[]
    for(let x=0;x<world_size[0];x++){
        elevation_list.push(parseInt((noise(200,x*3,1,noise_settings)*10)+20))
    }
    return elevation_list
    
}







function convert_names_to_blocks(block_list_names){
    let block_list=[]
    for(let x=0;x<block_list_names.length;x++){
        let line=[]
        for(let y=0;y<block_list_names[0].length;y++){
            line.push(get_block(block_list_names[x][y]))
        }
        block_list.push(line)
    
    }

    
    return block_list
}

function convert_blocks_to_names(){
    let new_block_list=[]
    for(let x=0;x<block_list.length;x++){
        let line=[]
        for(let y=0;y<block_list[0].length;y++){
            line.push(block_list[x][y].name)
        }
        new_block_list.push(line)
    
    }

    
    return JSON.stringify(new_block_list)
}








if(is_server){
    module.exports={blank_world,generate_elevation_list,convert_names_to_blocks,convert_blocks_to_names,get_block,reload_path,noise}
}
