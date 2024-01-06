function save_server(){
    new_block_list=export_world()
    save_local("world_slot"+selected_slot,new_block_list)

    save_local("custom_structures_slot"+selected_slot,custom_structures)

    save_local("structures_slot"+selected_slot,new_block_list)

    

}



function import_saved_server(){
    let saved_block_list=null


    if(get_local("slot"+selected_slot)!=undefined){
        saved_block_list=get_local("world_slot"+selected_slot)

        saved_custom_structures=get_local("custom_structures_slot"+selected_slot)

    }
    


    try{
        if(saved_block_list==null){
            return false       
        }
        block_list=convert_names_to_blocks(saved_block_list)
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
