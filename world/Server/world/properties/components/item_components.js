
const item_components = {
    "name":{
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
    // "random_tick":{
    //     "value_types":["object"],
    //     "requires":{
    //         "loop":{
    //             "type":"boolean",
    //             "note":"Loops until event function returns false."
    //         },
    //         "time":{
    //             "type":"function",
    //             "note":"Runs a function to determine the time untell the next random tick event is called. (return a integer greater than 0. a return value of 1000 = one second)"
    //         }
    //     },
    //     "properties":[
    //         {
    //             "name":"time",
    //             "value":function(value){

    //                 if(typeof value.time=="function"){
    //                     return value.time
    //                 }
    //                 else{
    //                     console.error("Component random_tick.time is type function not type: "+typeof value)
    //                 }
                    
    //             }
    //         }
    //     ],
    //     "structure_properties":[
    //         {
    //             "name":"loop",
    //             "value":function(value){

    //                 if(typeof value.loop=="boolean"){
    //                     return value.loop
    //                 }
    //                 else{
    //                     console.error("Component loop is type boolean not type: "+typeof value)
    //                 }
                    
    //             }
    //         },
    //         {
    //             "name":"next_random_tick",
    //             "value":function(item){

    //                 // console.log(get_property(item,"time")())

    //                 item.next_event_time = engin.time_in_loop + get_property(item,"time")()
                    
    //             },
    //             "type":"on_created"
    //         },
    //     ]
    // },

    "image":{
        
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
    "category":{
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
    }
}






































































