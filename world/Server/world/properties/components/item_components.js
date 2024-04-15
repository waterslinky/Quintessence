
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
        "properties":[
            {
                "name":"hiden_in_accended",
                "value":function(value){

                        if(typeof value=="boolean"){
<<<<<<< HEAD
                            // alert("WEFWEFEFW")
=======
                            
>>>>>>> b75d677f2e6c748f0ed886875f639eada954a65e
                            return value 
                        }
                        else{
                            console.error("Component 'hiden_in_accended' is type boolean not type: "+typeof value)
                        } 
                }
            }
        ]
    },

    "display_name":{
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
    "random_tick":{
        "properties":[
            {
                "name":"time",
                "value":function(value){

                    if(typeof value.time=="function"){
                        return value
                    }
                    else{
                        console.error("Component random_tick.time is type function not type: "+typeof value)
                    }
                    
                }
            }
        ],
        "structure_properties":[
            {
                "name":"loop",
                "value":function(value){

                    if(typeof value.loop=="boolean"){
                        return value 
                    }
                    else{
                        console.error("Component loop is type boolean not type: "+typeof value)
                    }
                    
                }
            },
            {
                "name":"next_random_tick",
                "value":function(item){

                    item.next_event_time = engin.time_in_loop + get_property(item,"time")()
                    
                },
                "type":"on_created"
            },
        ]
    },

    "image":{
        
        "structure_properties":[
            {
                "name":"image",
                "value":function(item){
                    // return images[value]

                    if(is_server==false){
                        let property = images[get_property(item,"image")]

                        
                        
                        if(typeof property.length=="undefined" && typeof property.src=="undefined"){

                            if(item.x!=undefined){
                                alert(item.x)
                            }
                
                            let x=item.x
                            let y=0
                            // console.log(property)
                            let image = property.image(undefined,x,y)
                
                            if(property.cell_width){
                                image = {"image":image,"cell_width": property.cell_width,"animation_time": property.animation_time}
                            }
                            // console.log(image)
                            return image
                            
                
                        }
                        else{
                            // console.log(property)
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






































































