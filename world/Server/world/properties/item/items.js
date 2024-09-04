function get_just_item(item_name,info){
    let item=false

    if(typeof item_name=="object"){
        console.log(item_name.name)
        item=new items[item_name.name](info)
        item.type="item"  
        item.count=item.count
    }
    else{
        if(items[item_name]!=undefined){
            item=new items[item_name](info)
            item.type="item"             
        }
    }

    return item

}

function capitalize_string(string){

    return string[0].toUpperCase() + string.slice(1)

}


const attribut_names = {
    "minning_speed":"Minning Speed"
}





let defalt_item = {

    "stack_size":stack_size,

    "hand_size":1,

    "use_after_duration":0,

    "decrease_after_use":1,

    "type":"item",

    "image":images.missing_block

}


let defalt_block = {

    "stack_size":stack_size,
    "hand_size":0.6,
    "type":"block",
    "image":images.missing_block

}


//Make get just item and get just block property
function get_property(item,property){

    
    if(item.name!=undefined && item!=undefined){
        
if(typeof item=="string"){
        item = create_item(item)
    }
    
    
    try{
        if(item[property]!=undefined){
            return item[property]
        }        
    }
    catch(err){
        console.error(item)
    }


    //This need to search not get a new item

    // console.log(item.name)

   

    // console.log(item.name)
    if(blocks_and_items[item.name]!=undefined){
        let state_propertys = blocks_and_items[item.name].state_propertys
        
        if(state_propertys!=undefined){

            let states = item.states

            for(let state_name in states){
                let state_index = states[state_name]
                let state = state_propertys[state_name][state_index]

                
    
                if(state[property]){
                    return state[property]
                }
    
                
            }
        }
    }

    // 
    try{
        let item_property = blocks_and_items[item.name][property]
    }
    catch(err){
        console.log(blocks_and_items[item.name])
    }
    
    let item_property = blocks_and_items[item.name][property]



    if(item_property!=undefined){
    
        return item_property

    }



    if(items[item.name]!=undefined){


        return defalt_item[property]
    }

    return defalt_block[property]
    
}
}
    

function add_void(block){
    if(!block.void){
        
        block.void=true

    }
}

function remove_void(block){
    if(block.void){
        block.void=false

        // if(block.image.length!=undefined){
        //     // let old_image=block.image
        //     // block.image=[old_image]   
            
        //     for(let i=block.image.length-1;i>=0;i--){
        //         if(block.image[i].src==void_block_image.src){
        //             block.image.splice(i,1)
        //         }
        //     }
            
        //     // block.image.push(void_block_image)    
        // }
        
        
    }
}


items={

}




items_structure = {

}


item_json.forEach(item_js => {
    items[item_js.name] = {}
    let item = items[item_js.name]

    items_structure[item_js.name] = {}
    let item_structure = items_structure[item_js.name]

    for(let state in item_js){
        let component = item_components[state]
        if(component){


            // console.log(component)

            if(component.value_types == undefined || component.value_types.includes(typeof item_js[state])){
                // console.log(block_js.name,component.value_types)
                if(typeof item_js[state]=="object" && component.element_structure){

                    console.log("T")
                    let return_value = grnef(item_js[state],component.element_structure)

                    if(return_value.type=="json_error"){

                        let types_string = ""

                        for(let i=0;i<return_value.element_structure[return_value.element_name].types.length;i++){
                            types_string+=return_value.element_structure[return_value.element_name].types[i]
        
                            if(i<return_value.element_structure[return_value.element_name].types.length-1){
                                types_string+=" or " 
                            }
                        }

                        

                        // console.log(return_value)
                        console.error("Json error: Item '"+item_js.name+"' has propertie"+" '"+state+"'"+" this is type object and it has the propertry '"+return_value.element_name+"' with type "+return_value.object_type+", when only types "+types_string+" are allowed.")
                    }
                    if(return_value.type=="element_structure_component_error"){


                        console.error(`Component error: Component ${state} has a ${return_value.needed_element_structure_location} propertie that allows type object but has no element_structure propertie.`)
                    }
                }

                if(component["properties"]){
                    component["properties"].forEach(propertie => {
                    
                        let value = propertie.value
    
                        if(value){
                            item[propertie.name] = value(item_js[state])
                        }
                        else{
                                    // console.log(component.value_types,block_js[state])
            
                                    item[propertie.name] = item_js[state]
                                
                        }
                      
                        
                        
                    });
                    
                }
                
                if(component["structure_properties"]){
                    component["structure_properties"].forEach(propertie => {
    
                        
    
                        let value = propertie.value
    
                        if(propertie.type=="on_created"){
                                if(item_structure["on_created_functions"]==undefined){
                                    item_structure["on_created_functions"] = {}
                                }
        
                                item_structure["on_created_functions"][propertie.name]=value
        
                                
                        }
                        else{
                                // console.log(value)
        
        
        
        
                                if(value){
        
                                    item_structure[propertie.name] = value(item_js[state])
        
                                }
                                else{
                                    
                                    item_structure[propertie.name] = item_js[state]
                                    
                                }
                                
                        }
    
    
                        
                        
                    });
                    
                }

                if(component["update_item_function"]){
                    if(item_structure["update_item_functions"]==undefined){
                        item_structure["update_item_functions"] = []
                    }
                    item_structure["update_item_functions"].push(component["update_item_function"])
                }


            }
            else{

                let types_string = ""

                for(let i=0;i<component.value_types.length;i++){
                    types_string+=component.value_types[i]

                    if(i<component.value_types.length-1){
                        types_string+=" or " 
                    }
                }
                

                console.error("Json error: Item '"+item_js.name+"' has propertie"+" '"+state+"'"+" that allows types "+types_string+" but is given type "+typeof item_js[state]+".")
            }





        }
        // else{
        //     block[state] = block_js[state]
        // }

        // blocks[block.name][]
    }

    // blocks
    // alert(block)
});



blocks_and_items_structure = {

}

for(let item_name in items_structure){
    blocks_and_items_structure[item_name] = items_structure[item_name]
}

for(let block_name in blocks_structure){
    blocks_and_items_structure[block_name] = blocks_structure[block_name]
}


function item_type(item){
    if(typeof item=="object" ? items[item.name] : items[item]){
        return "item"
    }

    if(typeof item=="object" ? blocks[item.name] : blocks[item]){
        return "block"
    }
}

blocks_and_items=copy(blocks)
for(item in items){
    
    blocks_and_items[item]=items[item]
}