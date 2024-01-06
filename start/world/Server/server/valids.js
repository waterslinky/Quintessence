//V2.7

valid_block_list=["stone","air","grass","stone_brick","stone_statue","cracked_block","missing_block","dirt"]
    
    
function valid_block_name(name){
    for(let i=0;i<valid_block_list.length;i++){
        if(valid_block_list[i]==name){
        
            return name
            
        }
    }
    
    return "missing_block"
    
}