

item_name_display=new text({
    "text": "" ,

    
    "size": 50,
    "color": "rgb(7, 145, 106)",
    "border_x_offset":20,
    "align":"center",
    "border_image":images.display_bar_stretch_image,
    "after_update_func":function(){
        // this.x=mouse_x
        // // this.after_draw_func = function(){
        // //     console.log("g")
        // // }
        // // // console.error("f")
        // this.y=mouse_y-
        

        


    },
    // "reactivate":true,
    // "reactivate":false,
    "font":"Bold Tahoma",
    "base_line":"top",
    "border_align":"center" 
})



inventory_main_elements=new image({
    "x":0,
    "y":0,
    // "parent":inventory_main_elements_align,
    "size_x": (156/16)*slot_size,
    // "groups":["ui"],

    "align":"center",



    "size_y":(73/16)*slot_size,
    "image":images.inventory,
        // ,
    "hover_brightness":0,
    "elements":[
        
        ]
})




hot_bar_main_elements=new image({
    "x":innerWidth/2,
    "y":innerHeight-((20/16)*slot_size*.5)-20,

    "size_x": (156/16)*slot_size,
    "size_y":(20/16)*slot_size,

    "image":images.hot_bar,
    "align":"center",
    "hover_brightness":0,
    "groups":["ui"],
    "elements":[
    
    ]
})




function MakeInventoryRow(elements,parentElement,offsetX,offsetY,columns=1,marmin=1,slotSize=16,start_index,type="slot",exta){
    // try{
        
    let pixle_size = (parentElement.display_size_y/parentElement.image.height)
    // x=0 

    for(let column=0;column<columns;column++){
        let inputs={
                "parent":parentElement,

                "index":start_index+column,
                "x":(offsetX*pixle_size)+((column*marmin)*pixle_size)+(column*(slotSize*pixle_size)),
                // 
                // "align":"center_size",
                "y":(offsetY*pixle_size),
                // 


                // "inventory_parent":inventory_parent,
                "type":type,
                "column_index":column
                
                // "size_x":slot_size,
                // "size_y":(slotSize*pixle_size),
                // "size":1,
                // "image":grass_image
                
        }
   
        // console.log("F")
        if(exta.inventory){
            // console.log("G")

            inputs.inventory_parent=exta.inventory
        }

        if(exta.slot_index){
            // console.log("G")

            inputs.slot_index=exta.slot_index
        }

        if (exta.after_clicked){
            inputs.after_clicked=exta.after_clicked
        }

        if (exta.render_box){
            inputs.render_box=exta.render_box
        }

        // slot_index
        elements.push(
            new inventory_slot_ui(inputs)
        // alert(" newj fewjnfe")




        )
        // alert(" newj fewjnfe"+elements.length)

    }

    // for(let x=0;x<columns;x++){
        
    // }


    // return 
// }
// catch(err){
//     alert(err)
// }

}



function make_inventory_ui(){

    //Row 1 
    MakeInventoryRow(inventory_main_elements.elements,inventory_main_elements,2,55,9,1,16,0,"slot",{"inventory":player.inventory}) 
    //Row 2
    MakeInventoryRow(inventory_main_elements.elements,inventory_main_elements,2,36,9,1,16,9,"slot",{"inventory":player.inventory})         
    //Row 3
    MakeInventoryRow(inventory_main_elements.elements,inventory_main_elements,2,19,9,1,16,18,"slot",{"inventory":player.inventory}) 
    //Row 4 
    MakeInventoryRow(inventory_main_elements.elements,inventory_main_elements,2,2,9,1,16,27,"slot",{"inventory":player.inventory})

    

    
    inventory_hand=new inventory_slot_ui({
        "x":0,
        "y":0,
        "align":"center",
        "type":"hand",
        "item_size_mult":1.2,
        
        "inventory_parent":player.inventory_hand
        
    })
    // console.log(player.inventory_hand)


    //HOTBAR
    MakeInventoryRow(hot_bar_main_elements.elements,hot_bar_main_elements,2,2,9,1,16,0,"bar_slot",{"inventory":player.inventory,"slot_index":player.selected_slot_index})


    // inventory_main_elements.elements.push(item_name_display)
    // small_crafting_table_main_elements.elements.push(item_name_display)


    // alert(player.inventory_hand)



    // inventory_elements.forEach(element => {
    // inventory_main_elements.push(inventory_elements)  

    // inventory_layer.elements[0].elements.
    // })
    
// alert(inventory_layer.elements[0].elements.length+" length")



}
