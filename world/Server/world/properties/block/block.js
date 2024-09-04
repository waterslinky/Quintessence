reseve=false
change_block=function(x,y,block_name,break_block=false){
    // let new_block_list=[]

    // if()
    // console.log()
    

    if(break_block && !is_server){
        let current_block=get_property(get_block_from_index(x,y),"image")
        for(let i=0;i<5;i++){
            
            
            // console.log(current_block)
            let color=false

            try{
                color=image_pixles(current_block)[Math.round((current_block.width-1)*Math.random()) ][Math.round((current_block.height-1)*Math.random())  ]  
            }
            catch{
                console.log("err")
            }
            
            

            if(color){
                // alert("color")
                particles.push(new par({
                    "x":x*block_size,
                    "y":y*block_size,
                    "time":engin.time_in_loop+700+(Math.random()*400),
                    "color":color 
                }))

            }


            
        }    
    }


    if(get_property(get_block_from_index(x,y),"hit_box_index")!=undefined){
        let start_x=x-get_property(get_block_from_index(x,y),"hit_box_index")[0]

        // console.log(get_block_from_index(x,y),get_property(get_block_from_index(x,y),"hit_box"))
        let start_y=y+((get_property(get_block_from_index(x,y),"hit_box")[1]-1)-get_property(get_block_from_index(x,y),"hit_box_index")[1])

        let width=get_property(get_block_from_index(x,y),"hit_box")[0]
        let hieght=get_property(get_block_from_index(x,y),"hit_box")[1]



        for(let x_i=0;x_i<width;x_i++){
            for(let y_i=0;y_i>hieght*-1;y_i--){
                let x=start_x+x_i
                let y=start_y+y_i

                if(typeof get_property(get_block_from_index(x,y),"hit_box_index")!="undefined" && get_property(get_block_from_index(x,y),"hit_box_index")[0]==x_i && get_property(get_block_from_index(x,y),"hit_box_index")[1]+"  "+(y_i+(hieght/2))){
                    set_block_from_index(x,y,create_item("air"))
                }
                
            }
        }

        
        // console.log(get_block_from_index(x,y).hit_box_index)
    }


    let new_block=create_item(block_name,{x,y})


    if(get_property(new_block,"hit_box")!=undefined){

        for(let y_index=0;y_index<get_property(new_block,"hit_box")[1];y_index++){
            for(let x_index=0;x_index<get_property(new_block,"hit_box")[0];x_index++){
                    set_block_from_index(x+x_index,y-((get_property(new_block,"hit_box")[1]-1)-y_index),create_item(block_name,{x:x+x_index,y:y-((get_property(new_block,"hit_box")[1]-1)-y_index)}))
                    get_block_from_index(x+x_index,y-((get_property(new_block,"hit_box")[1]-1)-y_index)).hit_box_index=[x_index,y_index]  

                    
                    // console.log([
                
            }
        }
    }
    else{
        set_block_from_index(x,y,new_block)
    }

    
 
 
    // if(!reseve && !is_server){
    //     console.log("CHANGE BLOCK")
        emit_self_data("change_block",arguments)
    // }

    
    

}

function change_state(block,state_name,index){
    block.state_index[state_name] = index
}

function create_item_old(data={}){
    let item = {}

    if(typeof data=="string"){
        
        item.name = data
        
    }
    else{

        for(let i in data){
            item[i] = data[i]
        }

    }

    let x = 0
    let y = 0

    if(data.x && data.y){
        x = data.x
        y = data.y

    }

    //?

    if(get_property(item,"state_propertys")){
        item.states = {}
        
        for(let state_name in get_property(item,"state_propertys")){
            
            item.states[state_name] = 0
        }

    }
    
    if(is_server==false){
        let property = get_property(item,"image")
        if(typeof property.length=="undefined" && typeof property.src=="undefined"){

            
            let image = property.image(undefined,x,y)

            // console.log(property)
            if(property.cell_width){
                // console.log(image)
                image = {"image":image,"cell_width": property.cell_width,"animation_time": property.animation_time}
            }
            
            item.image = image
            

        }


    }

    if(get_property(item,"template_function")){


        run_object(get_property(item,"template_function"),function(element){element(item,data)})
        
    }


    if(get_property(item,"random_tick")){
        let random_tick = get_property(item,"random_tick")
      
        item.random_tick = copy(random_tick)

        item.random_tick.ticks = engin.time_in_loop+random_tick.time()

    }



    if(item.x){
        delete item.x
    }
    if(item.y){
        delete item.y
    }
    
    
    return item 
}
function create_item(data={}){

    let item

    let x = 0
    let y = 0

    if(data.x && data.y){

        x = data.x
        y = data.y

    }

    if(typeof data=="string"){
        item = copy(blocks_and_items_structure[data] )
    }
    else{
        item = copy(blocks_and_items_structure[data.name] )
    }

    item.x = x
    item.y = y


    if(item.on_created_functions){
        for(on_created_function_name in item.on_created_functions){

            let on_created_function = item.on_created_functions[on_created_function_name]
            item[on_created_function_name] = on_created_function(item)
            
        }  
    }


    delete item.y
    delete item.x
    delete item.on_created_functions

    return item
    
    
    
}


blank_area=function(x,y,width,hieght){

    // console.log([x,y,width,hieght])
    let solid_found=false
    for(let x_i=x;x_i<x+width;x_i++){
        for(let y_i=y;y_i>y-hieght;y_i--){
            // console.log("f")

            if(get_block_from_index(x_i,y_i).name!="air"){
                solid_found=true
            // console.log("solid_found")

            }
        }
    }
    // console.log("f")

    return !solid_found
}

function is_block(block){
    if(block.name!=undefined){
        return true
    }
}
function get_block_from_index(x,y,all_blocks=block_list){

    let chuck_x = Math.floor(x/chuck_size)
    let chuck_y = Math.floor(y/chuck_size)

    let chuck_index_x = x-(chuck_x*chuck_size)
    let chuck_index_y = y-(chuck_y*chuck_size)


    if(chucks[chuck_x] && chucks[chuck_x][chuck_y]){
        return chucks[chuck_x][chuck_y][chuck_index_x][chuck_index_y]
    }

    if(x>=0 && x<all_blocks.length){
        let list = all_blocks[x]
        if(y>=0 && list && y<list.length){
            if(list[y]){
                return list[y]
            }
            return {}
        }
    }

    return {}

}


function set_block_from_index(x,y,block){

    let chuck_x = Math.floor(x/chuck_size)
    let chuck_y = Math.floor(y/chuck_size)

    let chuck_index_x = x-(chuck_x*chuck_size)
    let chuck_index_y = y-(chuck_y*chuck_size)


    if(chucks[chuck_x] && chucks[chuck_x][chuck_y]){
        chucks[chuck_x][chuck_y][chuck_index_x][chuck_index_y] = block
    }

    // if(x>=0 && x<all_blocks.length){
    //     if(y>=0 && y<all_blocks[x].length){
    //         return all_blocks[x][y]
    //     }
    // }

}






















function grnef(object,element_structure){

    let return_value = true

    // if(typeof block_js[state]=="object" && element_structure){


    if(element_structure.allow_all_properties!=true){
        for(element_name in element_structure){

            // let element = element_structure[element_name]
            
            // console.log(element)
            if(element_structure[element_name].types==undefined || element_structure[element_name].types.includes(typeof object[element_name])){

                // console.log(element_structure[element_name].element_structure)
                if(typeof object[element_name]=="object" && element_structure[element_name].element_structure==undefined){

                    return_value = {
                        "type":"element_structure_component_error",
                        "needed_element_structure_location":element_name
                    }

                }
                else if(typeof object[element_name]=="object" && element_structure[element_name].element_structure){
                    console.log(object[element_name])
                    return_value = grnef(object[element_name],element_structure[element_name].element_structure)
                }


            }
            else{



                // console.error("Json error: Item '"+block_js.name+"' has propertie"+" '"+state+"'"+" this is type object and it has the propertry '"+element_name+"' with type "+typeof element_name+", when only types "+types_string+" are allowed.")
                return_value = {
                    "type":"json_error",
                    "element_structure":element_structure,
                    "element_name":element_name,
                    "object_type":typeof object[element_name]
                }
            }   
        }        
    }
    
    return return_value

}


blocks = {
}

blocks_structure = {
}

block_json.forEach(block_js => {
    blocks[block_js.name] = {}
    let block = blocks[block_js.name]

    blocks_structure[block_js.name] = {}
    let block_structure = blocks_structure[block_js.name]

    for(let state in block_js){
        let component = item_components[state]
        if(component){


            // console.log(component)

            if(component.value_types == undefined || component.value_types.includes(typeof block_js[state])){
                // console.log(block_js.name,component.value_types)
                if(typeof block_js[state]=="object" && component.element_structure){

                    console.log("T")
                    let return_value = grnef(block_js[state],component.element_structure)

                    if(return_value.type=="json_error"){

                        let types_string = ""

                        for(let i=0;i<return_value.element_structure[return_value.element_name].types.length;i++){
                            types_string+=return_value.element_structure[return_value.element_name].types[i]
        
                            if(i<return_value.element_structure[return_value.element_name].types.length-1){
                                types_string+=" or " 
                            }
                        }

                        

                        // console.log(return_value)
                        console.error("Json error: Item '"+block_js.name+"' has propertie"+" '"+state+"'"+" this is type object and it has the propertry '"+return_value.element_name+"' with type "+return_value.object_type+", when only types "+types_string+" are allowed.")
                    }
                    if(return_value.type=="element_structure_component_error"){


                        console.error(`Component error: Component ${state} has a ${return_value.needed_element_structure_location} propertie that allows type object but has no element_structure propertie.`)
                    }
                }

                if(component["properties"]){
                    component["properties"].forEach(propertie => {
                    
                        let value = propertie.value
    
                        if(value){
                                    block[propertie.name] = value(block_js[state])
                        }
                        else{
                                    // console.log(component.value_types,block_js[state])
            
                                    block[propertie.name] = block_js[state]
                                
                        }
                      
                        
                        
                    });
                    
                }
                
                if(component["structure_properties"]){
                    component["structure_properties"].forEach(propertie => {
    
                        
    
                        let value = propertie.value
    
                        if(propertie.type=="on_created"){
                                if(block_structure["on_created_functions"]==undefined){
                                    block_structure["on_created_functions"] = {}
                                }
        
                                block_structure["on_created_functions"][propertie.name]=value
        
                                
                        }
                        else{
                                // console.log(value)
        
        
        
        
                                if(value){
        
                                    block_structure[propertie.name] = value(block_js[state])
        
                                }
                                else{
                                    
                                    block_structure[propertie.name] = block_js[state]
                                    
                                }
                                
                        }
    
    
                        
                        
                    });
                    
                }

                if(component["update_block_function"]){
                    if(block_structure["update_block_functions"]==undefined){
                        block_structure["update_block_functions"] = []
                    }
                    block_structure["update_block_functions"].push(component["update_block_function"])
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
                

                console.error("Json error: Item '"+block_js.name+"' has propertie"+" '"+state+"'"+" that allows types "+types_string+" but is given type "+typeof block_js[state]+".")
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

// blocks = blocks_structure












if(is_server){
    module.exports={get_item,get_just_block,change_block,block_is}
}

            
     