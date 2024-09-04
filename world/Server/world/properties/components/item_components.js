
const item_components = {
    "name":{
        "value_types":["string"],

        "structure_properties":[
            {
                "name":"name",
                "value":function(value){

                        if(typeof value=="string"){
                            return value 
                        }
                        else{
                            console.error("Component name is type string not type: "+typeof value)
                        } 
                }
            }
        ]
    },

    "hiden_in_accended":{

        "value_types":["boolean"],

        "properties":[
            {
                "name":"hiden_in_accended",
                // "value":function(value){

                //         if(typeof value=="boolean"){
                            
                //             return value 
                //         }
                //         else{
                //             console.error("Component 'hiden_in_accended' is type boolean not type: "+typeof value)
                //         } 
                // }
            }
        ]
    },

    "display_name":{
        "value_types":["string"],
        "properties":[
            {
                
                "name":"display_name",
                "value":function(value){

                        if(typeof value=="string"){
                        return value 
                        }
                        else{
                            console.error("Component display_name is type string not type: "+typeof value)
                        } 
                }
            }
        ]
    },

    "collision_box":{
        "value_types":["boolean","object"],
        "properties":[
            {
                
                "name":"collision_box"
            }
        ]
    },


    "random_tick_event":{
        "note":"This function runs after the 'random_tick_time' time is over.",
        "value_types":["function"],
        "properties":[
            {
                "name":"random_tick_event"
            }

            
        ],
        "update_block_function":function(block){
            if(block.next_random_tick_time<=engin.time_in_loop){
                block.next_random_tick_time = engin.time_in_loop + get_property(block,"random_tick_time")()
            }
        }
    },
    "loop_random_tick":{
        "note":"This function runs after the 'random_tick_time' time is over.",
        "value_types":["boolean"],
        "structure_properties":[
            {
                "name":"loop_random_tick"
            }
        ]
    },
    "random_tick_time":{
        "note":"",
        "value_types":["function"],
        "properties":[
            {
                "name":"random_tick_time"
            }
        ],
        "structure_properties":[
            {
                "name":"random_tick_event",
                "value":function(item){

                    item.next_random_tick_time = engin.time_in_loop + get_property(item,"random_tick_time")()

                },
                "type":"on_created"
            }
        ]
    },

    

    "image":{
        "value_types":["string"],
        "structure_properties":[
            {
                "name":"image",
                "value":function(item){

                    if(is_server==false){
                        let property = images[get_property(item,"image")]

                        
                        
                        if(typeof property.length=="undefined" && typeof property.src=="undefined"){
                
                            let x=item.x || 0
                            let y=item.y || 0

                            let image = property.image(undefined,x,y)
                
                            if(property.cell_width){
                                image = {"image":image,"cell_width": property.cell_width,"animation_time": property.animation_time}
                            }
                            return image            
                
                        }
                        else{

                            return property

                        }
                
                
                    }
                    
                },
                "type":"on_created"
            }
        ],
        "properties":[
            {
                "name":"image",
                "value":function(value){
                    
                    return value
                    
                }
            }
        ]
        

    },

    "random_tick":{
        "value_types":["object"],
        // "properties":[
        //     {
        //         "name":"random_tick_event",
        //         "value":function(value){
                    
        //             return value.event
                    
        //         }
        //     }
        // ]

        "element_structure":{

            "loop":{
                "types":["boolean"],
                "note":"If true then the random_tick will loop untell the random tick event returns false."
            },
            "time":{
                "types":["function"],
    
            },
            "event":{
                "types":["function"]
                
            },
                
        }
        

    },


    "category":{
        "value_types":["string"],
        
        "properties":[
            {
                "name":"category",
                "value":function(value){

                    if(typeof value=="string"){
                        return value 
                    }
                    else{
                        console.error("Component 'category' is type string not type: "+typeof value)
                    } 
                }
            }
        ]
    },
    "kills_grass":{
        "value_types":["boolean"],

        "properties":[
            {
                "name":"kills_grass",
                "value":function(value){

                    if(typeof value=="boolean"){
                        return value 
                    }
                    else{
                        console.error("Component 'kills_grass' is type boolean not type: "+typeof value)
                    } 
                }
            }
        ]
    },
    "hand_size":{
        "value_types":["number"],

        "properties":[
            {
                "name":"hand_size",
                "value":function(value){

                    
                    return value 
                   
                }
            }
        ]
    },
    "destroy_time":{
        "value_types":["number"],

        "properties":[
            {
                "name":"destroy_time",
                "value":function(value){

                    
                    return value 
                   
                }
            }
        ]
    },
    "in_accended_inventory":{
        "value_types":["boolean"],

        "properties":[
            {
                "name":"in_accended_inventory",
                "value":function(value){

                    
                    return value 
                   
                }
            }
        ]
    },
    "transparent":{
        "value_types":["boolean"],

        "properties":[
            {
                "name":"transparent",
                "value":function(value){

                    
                    return value 
                   
                }
            }
        ]
    },

    "on_used":{
        "value_types":["function"],

        "properties":[
            {
                "name":"on_used",
                "value":function(value){

                    
                    return value 
                   
                }
            }
        ]
    },

    "hit_box":{
        "value_types":["object"],

        "properties":[
            {
                "name":"hit_box",
                "value":function(value){

                    
                    return value 
                   
                }
            }
        ]
    },

    

    "use_after_duration":{
        "value_types":["number"],

        "properties":[
            {
                "name":"use_after_duration",
                "value":function(value){

                    
                    return value 
                   
                }
            }
        ]
    },


    
    
}














// let states = {
//     "types":["list"],
//     "prop":{
//         // "name":"states",
//         "index_structher":{
//             "types":["diconary"],
//             "reqiurs":["name"],
//             "allow_all_elements":true
//         }
//     }
// }


// let a = {
//     "event":function(x,y){
    
                  
                        
//         // if(get_property(get_block_from_index(x,y-1),"kills_grass")!=false){
            
//         //     change_block(x,y,"dirt")
//         //     // console.log("EVENT DO THOIING")
//         // }
//         // else{
//         //     if(get_block_from_index(x,y-1).name=="dirt" && get_block_from_index(x+1,y).name=="air"){
                
//         //         change_block(x-1,y,"grass")
//         //     // console.log("EVENT DO THOIING")

        

//         //     }
//         //     if(get_block_from_index(x+1,y).name=="dirt" && get_block_from_index(x+1,y-1).name=="air"){
//         //         change_block(x+1,y,"grass")
//         //     // console.log("EVENT DO THOIING")

//         //     }
//         // }



        
//     },
//     "loop":true,
//     "time":function(){
//     return (10000*Math.random())+14000
//     }
// }



// let tick2 = {
//     "name":"random_tick",
//     "types":["diconary"],
//     "elemnt_structher":{

//         "loop":{
//             "types":["bool"],
//         },
//         "time":{
//             "types":["func"],

//         },
//         "event":{
//             "types":["func"],
            
//         },
            
        
//     }
// }























































    
        






































