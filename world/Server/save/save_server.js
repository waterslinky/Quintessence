if (typeof require !== 'undefined') {
    const {get_local, save_local, selected_slot} = require('../../Client/setup');
}

function save_server(){

    let chuck_indexs = []

    for(chuck_name_x in chucks){
        for(chuck_name_y in chucks[chuck_name_x]){
            chuck_indexs.push([chuck_name_x,chuck_name_y])
            
            
            let new_chuck = []

            chucks[chuck_name_x][chuck_name_y].forEach(chuck_line => {
                let line = []
                chuck_line.forEach(chuck_block => {
                    let new_block = copy(chuck_block)
                    delete new_block.image

                    if(new_block.name=="red_mushroom"){
                        console.log(new_block,chuck_block)
                    }

                    line.push(new_block)
                });
                new_chuck.push(line)
            });

            save_local("chuck"+selected_slot+"_"+chuck_name_x+"_"+chuck_name_y,new_chuck)
        }
    }

    save_local("chucks"+selected_slot,chuck_indexs)



    save_local("custom_structures_slot"+selected_slot,custom_structures)

    // save_local("structures_slot"+selected_slot,new_block_list)

    

}



function import_saved_server(){
    let saved_block_list=null


    // if(typeof selected_slot!="undefined" && get_local("slot"+selected_slot)!=undefined){
    //     saved_block_list=get_local("world_slot"+selected_slot)

    //     saved_custom_structures=get_local("custom_structures_slot"+selected_slot)

    // }

    let chuck_indexs = get_local("chucks"+selected_slot)
    console.log(chuck_indexs)

    if(chuck_indexs){
        chuck_indexs.forEach(chuck_index => {
            if(chucks[chuck_index[0]]==undefined){
                chucks[chuck_index[0]]={}
                
            }

            // console.log(chuck_index[0],chuck_index[1])
            let local_chuck = get_local("chuck"+selected_slot+"_"+chuck_index[0]+"_"+chuck_index[1])
            let chuck = []

            for(let x=0;x<local_chuck.length;x++){

                let line = []

                for(let y=0;y<local_chuck[x].length;y++){
                    local_chuck[x][y].x=x+(chuck_index[0]*chuck_size)
                    local_chuck[x][y].y=y+(chuck_index[1]*chuck_size)

                    line.push(create_item(local_chuck[x][y]))
                }
                chuck.push(line)
            }


            chucks[chuck_index[0]][chuck_index[1]] = chuck
            
            console.log(chucks[chuck_index[0]][chuck_index[1]])
        });        
    }

    
    
    


    try{
        if(saved_block_list==null){
            return false       
        }
        alert("FIX")
        // block_list=convert_names_to_blocks(saved_block_list)
    }
    catch(err){
        alert("World Corrupted!")
        return false       
    }




    try{
        // if(saved_custom_structures==null){
        //     return false       
        // }
        // block_list=convert_names_to_blocks(saved_block_list)
        
        if(saved_custom_structures!=null && saved_custom_structures!=undefined){
            custom_structures = saved_custom_structures
            
            // console.log("RR"+custom_structures)

            for(custom_structure in custom_structures){
                structures[custom_structure]=custom_structures[custom_structure]
            }
            
        }
        
        
        
    }
    catch(err){

        // return false       
    }
    
    
    

    return true
    

}  

if (typeof window == 'undefined') {
    module.exports = { save_server, import_saved_server }
}