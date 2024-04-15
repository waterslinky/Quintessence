crafting_table_elements=new align({
    "elements":[

        new image({

            "x":0,
            "y":0,

            "size_x": (172/16)*slot_size,
            "size_y":(57/16)*slot_size,

            "image":images.crafting_table_ui,
            "align":"center",
            "hover_brightness":0,
            "groups":["ui"],
            "elements":[]

        }),
        new crafting_table_ui({

            "x":(13/16)*-slot_size,
            "y":(28.5/16)*-slot_size,

            "size_x": (96/16)*slot_size,
            "size_y":(51/16)*slot_size,

            "table_types":["crafting_table"],

            "hover_brightness":0,
            "groups":["ui"],
            "elements":[]

        })
    ]
})



crafting_table_layer={
    "name":"crafting_table",
    "groups":["ui"],
    "draw":function(){
        
        // inventory_elements.elements[0].image=grass_image
        // for(let i=0;i<inventory_elements.elements.length;i++){
        //     element=inventory_elements.elements[i]

        //     element.image=player.inventory[0].image
        // }
        // inventory_main_elements.elements[0].image=grass_image

    },
    "update":function(){},
    "keys_down":function(){},
    "elements":[
        // new align({
        //     "elements":[inventory_main_elements],
        //     "x":innerWidth/2,
        //     "y":(innerHeight/2)+280,
        //     "align":"center",
     
        // }),

        new align({
            "elements":[crafting_table_elements],
            "x":innerWidth/2,
            "y":280,
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

