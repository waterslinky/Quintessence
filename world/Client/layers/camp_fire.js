camp_fire_elements = new align({
    "elements":[
        new image({

            "x":0,
            "y":0,

            "size_x": (81/28)*534,
            "size_y":534,

            "image":images.campfire,
            "hover_brightness":0,
            "elements":[]

        }),
        new table_ui({

            "x":0,
            "y":0,

            "size_x": (((81/28)*534)/81)*41,
            "size_y":534,

            
           
            "hover_brightness":0,
            "elements":[]

        }),
        new camp_fire_ui({

            "x":(((81/28)*534)/81)*41,
            "y":0,

            "size_x": (81/28)*534,
            "size_y":534,

            
           
            "hover_brightness":0,
            "elements":[]

        })
    ],
    "size_x": (81/28)*534,
    "size_y":534,
    "align":"center",
    "group":["ui"]
})

camp_fire_layer = {
    "name":"camp_fire",
    "groups":["ui"],
    "update":function(){},
    "keys_down":function(){},
    "elements":[

        new align({
            "elements":[camp_fire_elements],
            "x":innerWidth/2,
            "y":290,
            "align":"center"
        }),

        new align({
            "elements":[inventory_main_elements],
            "x":innerWidth/2,
            "y":(innerHeight/2)+280,
            "align":"center"
        })
        
    ],
    "on_added":function(){

        player.show_inventory_hand=true

    },
    "on_removed":function(){

        player.show_inventory_hand=false

    }
}

