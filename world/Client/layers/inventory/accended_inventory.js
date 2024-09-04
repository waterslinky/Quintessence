

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
        "image":images.accended_menu,
        "align":"center",
        "hover_brightness":0,
        "elements":[]
})

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


function redo_accended_blocks(search_text = "",category){

    accended_blocks_list.splice(0)

    for(const block_name in blocks_and_items){
        let new_block = create_item(block_name)
        // console.log(new_block,block_name)
        if(!get_property(new_block,"hiden_in_accended")){ 
            let display_name
                

            if(typeof get_property(new_block,"display_name")=="object"){
                display_name = get_property(new_block,"display_name")[0].name
            }
            else{
                display_name = get_property(new_block,"display_name")
            }    
                
            if(display_name && (display_name.toLowerCase().startsWith(search_text.toLowerCase()) || display_name.toLowerCase().includes(search_text.toLowerCase())) && (category==undefined || get_property(new_block,"category") == category) && get_property(new_block,"in_accended_inventory")!=false){

                accended_blocks_list.push(new inventory_slot(new_block))

            }
        }     
    }

    reset_slidder()

}

class inventory_slot{
    constructor(item,count=1){
        this.item=item
        if(item.count){
         
            this.item.count=item.count
            delete item.count
        }
        else{
            item.count=count
        }

        

    }

    set_count(count){
        let extra=false
        if(count>stack_size){
            extra=count-stack_size
            this.item.count=stack_size
            // if(from){
            //     from.set_count(count-stack_size)
            //     // console.log(count-stack_size)

            // }
            
   
        }
        else{
            this.item.count=count
            // extra=count
        }
 
        

        if(this.item.count<=0){
            this.item=create_item("blank")
        }

        return extra
    }

    give_count(count,from=undefined){

        if(this.item.name=="blank"){
            this.item = create_item(from.item)
            this.item.count=0
            
        }

        let extra=this.set_count(this.item.count+count)


        

        if(extra){
            
            from.set_count(extra)

        }
        else{
     
            from.set_count(from.item.count-count)

        }
        

        // if(this.count<=0){
        //     this.item=get_block("blank")
        // }

    }
}



let accended_tabs_index={"index":2}
window.onload = function(){
    let accended_tabs=[new inventory_slot(create_item("grass")),new inventory_slot(create_item("stone")),new inventory_slot(create_item("magnifying_glass"))]

    
    
    
    
    

    
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

    
    accended_inventory_elements.elements[0].after_clicked=function(){
    
        redo_accended_blocks(accended_inventory_search.text,"nature")
     
        

    }

    accended_inventory_elements.elements[1].after_clicked=function(){

        redo_accended_blocks(accended_inventory_search.text,"earth")
        

    }

    accended_inventory_elements.elements[2].after_clicked=function(){

        redo_accended_blocks(accended_inventory_search.text)
        

    }




    

    var accended_inventory_search=new text({
        "x": accended_inventory_elements.px,
        "y": accended_inventory_elements.px*23,

        "text": "" ,   
        "size": 40,
        "base_line":"middle",
        "color": "rgb(50,50,50)",
        "align": "left",
        
        "can_input_text":true,
        "image_bar":images.accended_text_selected,"on_input_text_funtion":function(){

            

            redo_accended_blocks(this.text)


        },"after_update_func":false  
    })
    
    accended_inventory_elements.elements[2].after_clicked()
    

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
        images.slidder_bar

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




// inventory_main_elements.splice(0,1)




}