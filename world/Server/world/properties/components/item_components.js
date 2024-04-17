
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
        "update_function":function(block){
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







































































    
        






































