



accended_inventory_elements=new image({
        "x":((((62/16)*slot_size)/2)+25)+75,
        "y":(innerHeight/2),
        // "size_x":innerWidth*.7,
        // "size_x": ((slot_size)*(156/15)) ,
        // "size_x": ((15/156)*(slot_size))*(156/15),
        // "size_x": (156)*((15/156)*slot_size),
        "size_x": (58/16)*slot_size,
        // "groups":["ui"],

        "px":((58/16)*slot_size)/58,

        



        "size_y":(79/16)*slot_size,
        "image":accended_menu_image,
        "align":"center",
        "hover_brightness":0,
        "elements":[]
})


// inventory_elements=new group()

var accended_inventory_slidder=true

accended_inventory_layer={
    "name":"accended_inventory",
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
    "elements":[accended_inventory_elements,
        new align({
            "elements":[inventory_main_elements],
            "x":innerWidth-1100,
            "y":(innerHeight/2)+75

         
        }),
        new align({
            "elements":[small_crafting_table_main_elements],
            "x":(innerWidth/2)+675,
            "y":185,
        })

    ],
    "on_added":function(){
        player.show_inventory_hand=true

    },
    "on_removed":function(){
        player.show_inventory_hand=false

        
    }
}







let accended_blocks_list=[]
let base_accended_blocks_list=[]

window.addEventListener("load", event => {

    
    // for (let block in blocks) {
    //     let new_block=get_block(block)
    //     if(!new_block.hiden_in_accended){
    //         accended_blocks_list.push(new inventory_slot(new_block))
    //     }
        
    // };


    let accended_tabs_index={"index":2}
    let accended_tabs=[new inventory_slot(get_item("grass")),new inventory_slot(get_item("stone")),new inventory_slot(get_item("magnifying_glass"))]
    
    
    
    

    
    // inventory_hand=new inventory_slot_ui({
    //     "x":0,
    //     "y":0,
    //     "align":"center",
    //     "type":"hand",
        
    //     "inventory_parent":player.inventory_hand
        
    // })


    //HOTBAR
    MakeInventoryRow(accended_inventory_elements.elements,accended_inventory_elements,2,2,3,1,16,0,"bar_slot",{"inventory":accended_tabs,"slot_index":accended_tabs_index})

    accended_tabs_ui = new inventory_group({
        "inventory_parent":accended_blocks_list,
        "inventory_image":accended_inventory_elements,
        "start_off_set_x":2,
        "start_off_set_y":27,
        "columns":3,
        "margin_y":17,
        "y_offset_val":function(){
            let val=((slot_size+accended_inventory_elements.px)*(Math.ceil(accended_tabs_ui.elements.length/3)-3))

            if(accended_inventory_slidder.point_height==(accended_inventory_elements.px*52)){
                val=0
                // console.log(")")
            }
            

            return val*accended_inventory_slidder.point_len 


        },
        "child_render_box":[0,(accended_inventory_elements.y-(accended_inventory_elements.display_size_y/2))+(accended_inventory_elements.px*26),400,(accended_inventory_elements.px*52)]

    })

    accended_inventory_elements.elements[accended_inventory_elements.elements.length-3].after_clicked=function(){
        // console.log("ggg")
        base_accended_blocks_list.splice(0)






        for (let block in blocks_and_items) {
            let new_block=get_item(block)
            if(new_block.category=="nature"){

                // if( !accended_inventory_search || new_block.name.toLowerCase().startsWith(accended_inventory_search.text.toLowerCase())){

                
                    if(!new_block.hiden_in_accended){
                        // accended_blocks_list.push(new inventory_slot(new_block))
                        base_accended_blocks_list.push(new_block.name)

                    }                
            }
        // }
 
            
        };





        // console.log("SWITCH")
        


        accended_blocks_list.splice(0)
        


        for (let block in blocks_and_items) {
            let new_block=get_item(block)
            if(new_block.category=="nature"){

                if( !accended_inventory_search || new_block.name.toLowerCase().startsWith(accended_inventory_search.text.toLowerCase())){

                
                    if(!new_block.hiden_in_accended){
                        accended_blocks_list.push(new inventory_slot(new_block))
                        // base_accended_blocks_list.push(new_block.name)

                    }                
            }
        }
 
            
        };

        // base_accended_blocks_list=accended_blocks_list
        // nature
        reset_slidder()
    }


    accended_inventory_elements.elements[accended_inventory_elements.elements.length-2].after_clicked=function(){
        // console.log("ggg")
        
        base_accended_blocks_list.splice(0)
        for (let block in blocks_and_items) {
            let new_block=get_item(block)
            if(new_block.category=="earth"){

                // if( !accended_inventory_search || new_block.name.toLowerCase().startsWith(accended_inventory_search.text.toLowerCase())){
                
                        if(!new_block.hiden_in_accended){
                            // accended_blocks_list.push(new inventory_slot(new_block))
                            base_accended_blocks_list.push(new_block.name)

                        }                
                // }
            }
 
            
        };














        accended_blocks_list.splice(0)
        


        for (let block in blocks_and_items) {
            let new_block=get_item(block)
            if(new_block.category=="earth"){

                if( !accended_inventory_search || new_block.name.toLowerCase().startsWith(accended_inventory_search.text.toLowerCase())){
                
                        if(!new_block.hiden_in_accended){
                            accended_blocks_list.push(new inventory_slot(new_block))
                            // base_accended_blocks_list.push(new_block.name)

                        }                
                }
            }
 
            
        };


        // nature
        // base_accended_blocks_list=accended_blocks_list
        reset_slidder()

    }



    accended_inventory_elements.elements[accended_inventory_elements.elements.length-1].after_clicked=function(){
        // console.log("ggg")
        
        
        base_accended_blocks_list.splice(0)
        for (let block in blocks_and_items) {
            let new_block=get_item(block)
            // if(new_block.category=="nature"){
                
            // if( !accended_inventory_search || new_block.name.toLowerCase().startsWith(accended_inventory_search.text.toLowerCase())){

                    if(!new_block.hiden_in_accended){
                        // accended_blocks_list.push(new inventory_slot(new_block))
                        base_accended_blocks_list.push(block)

                    }           
                // }     
            // }
 
            
        };











        accended_blocks_list.splice(0)
        


        for (let block in blocks_and_items) {
            let new_block=get_item(block)
            // if(new_block.category=="nature"){

            let text
            if(typeof new_block.name=="object"){
                // text = new_block.name[0].name
            }
            else{
                text = new_block.name
            }
            
                
            if( !accended_inventory_search || text.toLowerCase().startsWith(accended_inventory_search.text.toLowerCase())){

                    if(!new_block.hiden_in_accended){
                        accended_blocks_list.push(new inventory_slot(new_block))
                        // base_accended_blocks_list.push(new_block.name)

                    }           
                }     
            // }
 
            
        };

        //52 5

        // base_accended_blocks_list=accended_blocks_list

        // nature
        reset_slidder()

    }
    accended_inventory_elements.elements[accended_inventory_elements.elements.length-1].after_clicked()

    var accended_inventory_search=new text({
        "x": accended_inventory_elements.px,
        "y": accended_inventory_elements.px*23,

        "text": "" ,   
        "size": 40,
        "base_line":"middle",
        "color": "rgb(50,50,50)",
        "align": "left",
        
        "can_input_text":true,
        "image_bar":accended_text_selected_image,"on_input_text_funtion":function(){
        // console.log("RRRRRTT")
        // base_accended_blocks_list.splice(0)
        accended_blocks_list.splice(0)

        base_accended_blocks_list.forEach(block => {
            
            let display_name
            let new_block=get_item(block)
            if(typeof new_block.display_name=="object"){
                display_name = new_block.display_name[0].name
            }
            else{
                display_name = new_block.display_name
            }
            
            
            // if(new_block.category=="nature"){
                if(display_name.toLowerCase().startsWith(this.text.toLowerCase())){
                    if(!new_block.hiden_in_accended){
                        accended_blocks_list.push(new inventory_slot(new_block))
                        // base_accended_blocks_list.push(new_block.name)

                    }                      
                }
            
                
              
            // }
 
            
        })

        // alert("Y")
        reset_slidder()

        //52 5

        // base_accended_blocks_list=accended_blocks_list

        // nature
        reset_slidder()
    },"after_update_func":false  
})
    


//     var accended_inventory_search_selector=new image({
//         "x":100,
//         "y":100,
//         // "size_x":innerWidth*.7,
//         // "size_x": ((slot_size)*(156/15)) ,
//         // "size_x": ((15/156)*(slot_size))*(156/15),
//         // "size_x": (156)*((15/156)*slot_size),
//         "size_x":100,
//         // "groups":["ui"],

       

//         "show":false,



//         "size_y":100,
//         "image":accended_text_selected_image,
//         "allin":"center",
//         "hover_brightness":0,
//         "elements":[]
// })




    accended_inventory_slidder=new slidder(
        [ (accended_inventory_elements.x-(accended_inventory_elements.display_size_x/2))+(55.5*accended_inventory_elements.px),(accended_inventory_elements.y-(accended_inventory_elements.display_size_y/2))+(26*accended_inventory_elements.px)],
        [(accended_inventory_elements.x-(accended_inventory_elements.display_size_x/2))+(55.5*accended_inventory_elements.px),(accended_inventory_elements.y-(accended_inventory_elements.display_size_y/2))+(78*accended_inventory_elements.px)],
        0,
        slidder_bar_image

    )

    accended_inventory_elements.elements.push(accended_inventory_slidder)

    // accended_inventory_slidder







    var accended_inventory_search_button=new button({
        "x":((accended_inventory_elements.px)),
        "y":(accended_inventory_elements.px*20),
        "size_x":(accended_inventory_elements.px*52),
        "size_y":(accended_inventory_elements.px*5),
        // "color":"0,0,0",
        "on_clicked":function(){
            
        },
        "partner":{"text":accended_inventory_search},
        "update_func":function(){
            if(this.last_button_clicked){
                // console.log("UP")
                // this.partner.search_selector.show=true
                this.partner.text.text_input=true
                console.log()
            }
            else{
                // this.partner.search_selector.show=false
                this.partner.text.text_input=false


            }


            // console.log(this.partner)
            // this.partner.text="gh"
        
            
        }

    }) 


    accended_inventory_search.partner=accended_inventory_search_button

    accended_inventory_elements.elements.push(accended_inventory_search_button)


    
    accended_inventory_elements.elements.push(accended_inventory_search)
    // accended_inventory_elements.elements.push(accended_inventory_search_selector)

    // accended_inventory_search_selector

//  (((62/16)*slot_size)/2)+25











    



    accended_inventory_elements.elements.push(accended_tabs_ui)


    // alert(player.inventory_hand)



    // inventory_elements.forEach(element => {
    // inventory_main_elements.push(inventory_elements)  

    // inventory_layer.elements[0].elements.
    // })
    
// alert(inventory_layer.elements[0].elements.length+" length")



});

// inventory_main_elements.splice(0,1)




