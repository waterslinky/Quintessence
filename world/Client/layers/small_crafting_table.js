
small_crafting_table_main_elements=new crafting_table_ui({
    "x":0,
    "y":0,

    "size_x": (37/12)*slot_size,
    "size_y":(27/12)*slot_size,
    "on_removed":function(){
        alert("G")
    },



    "image":images.small_table,
    "align":"center",
    "hover_brightness":0,
    "groups":["ui"],
    "elements":[
        
    ]

})






// inventory_main_elements.elements.push(item_name_display)
