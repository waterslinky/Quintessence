
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



