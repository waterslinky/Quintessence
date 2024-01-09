
accended_inventory_slidder=new slidder(
    [100,50],
    [100,600],
    .5,
    slidder_bar_image

)



mod_selector_list_elements = []

mod_selector_elements=[
    new align({ 
    "elements":[

        new image({
            "x":(innerWidth/2),
            "y":(innerHeight/2),
            "size_x":126*19.5,
            "size_y":63*19.5,
            "align" : "center",
            "image":transparent_gray_image,
            
            "elements":mod_selector_list_elements
        }),
        // accended_inventory_slidder

    ],
    "on_removed" : function(){

        localStorage.setItem("selected_mod_list_slot"+selected_world_index, JSON.stringify(selected_mods))

    },
    groups:["ui"]
})]


open_mod_directory_elements = [

    new align({ 
        "elements":[  

            new text({
                "x": innerWidth/2,
                "y": 60,
                "text": "Select Mod Directory",
                "size": 48,
                "color": "rgb(255,255,255)",
                "align": "center"
            })
           
        ],
        "groups":["ui"]
    })

]

open_mod_list_elements = [

    new align({ 
        "elements":[  

            new text({
                "x": innerWidth/2,
                "y": 60,
                "text": "Select Mod",
                "size": 48,
                "color": "rgb(255,255,255)",
                "align": "center"
            }),

            new image({
                "x":(innerWidth/2)-1050,
                "y":(innerHeight/2)-500,
                "size_x":150,
                "size_y":150,
                "align" : "center",
                "image":rainbow_skin_mod_icon
            }),

            new text({
                "x": (innerWidth/2)-800,
                "y": (innerHeight/2)-520,
                "text": "Rainbow Skin",
                "size": 48,
                "color": "rgb(255,255,255)",
                "align": "center"
            }),

            new text({
                "x": (innerWidth/2)-880,
                "y": (innerHeight/2)-460,
                "text": "Makes your character rainbow",
                "size": 40,
                "color": "rgb(255,255,255)",
                "align": "left"
            }),
    
            new button({
                "x": 140,
                "y": 50,
                "size_x":900,
                "size_y":185,
                "update_func":function(){
                 
                        if(this.hover || this.selected){

                            this.stretch_image_rectangle = mod_selector_stretch_image
                            
                        }
                        else{
                                
                            this.stretch_image_rectangle = undefined
                            
                        }
                
                    
                },
                "on_clicked":function(){
                        
                        if(this.selected){
               
                            this.selected = false


                        }
                        else{
                            
                            this.selected = true
                        }
                        
                        localStorage.setItem("rainbow_skin", JSON.stringify(this.selected))
                        
                }
            })
           
        ],
        "groups":["ui"]
    })

]
let rainbow_skin_data = (localStorage.getItem("rainbow_skin"))

if(rainbow_skin_data!=null && JSON.parse(rainbow_skin_data)){

    open_mod_list_elements[0].elements[4].selected = true
}



