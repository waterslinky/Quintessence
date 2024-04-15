
//Set up
var selected_extrude_block={}


// extrude_direction_ui_dir=0


var extrude_direction_image_ui=new image({
    "image": images.extrude_direction,
    "x": (innerWidth*.09)+35,
    "y": (innerHeight*.06)+90,
    "px":((30/16)*slot_size)/30,

    "size_x": (30/16)*slot_size,
    "size_y": (30/16)*slot_size

    
})






var extrude_relaod_image_ui=new button({
    "image": images.extrude_reload,
    "x": (innerWidth*.09)+375,
    "y": (innerHeight*.06)+190,


    "size_x": slot_size*0.75,
    "size_y": slot_size*0.75,


    "on_clicked":function(){
        // alert("reload")

        
        selected_extrude_block.extrude_distance = number_from(selected_extrude_block.extrude_min,selected_extrude_block.extrude_max)()

        console.log( number_from(selected_extrude_block.extrude_min,selected_extrude_block.extrude_max)())

        extrude_ui_changed()
        
        // let t=0
        // let loops = 1000
        // for(let i=0;i<loops;i++){
        //     t+=number_from(JSON.parse(extrude_to_wall_min_text.text),JSON.parse(extrude_to_wall_max_text.text))()
        // }

        // // number_from(JSON.parse(extrude_to_wall_min_text.text),JSON.parse(extrude_to_wall_max_text.text))()


        // console.log(selected_extrude_block)




    }
    
})



function select_extrude_direction_images(){
    extrude_direction_left_image_ui.image=undefined
    extrude_direction_right_image_ui.image=undefined
    extrude_direction_up_image_ui.image=undefined
    extrude_direction_down_image_ui.image=undefined

    if(selected_extrude_block.dir==0){
        extrude_direction_up_image_ui.image=extrude_direction_up_image
    }
    if(selected_extrude_block.dir==1){
        extrude_direction_right_image_ui.image=extrude_direction_right_image
    }

    if(selected_extrude_block.dir==2){
        extrude_direction_down_image_ui.image=extrude_direction_down_image
    }
    if(selected_extrude_block.dir==3){
        extrude_direction_left_image_ui.image=extrude_direction_left_image
    }

}

var extrude_direction_left_image_ui=new button({
    "image": images.extrude_direction_left,
    "x": extrude_direction_image_ui.x+(extrude_direction_image_ui.px*1),
    "y": extrude_direction_image_ui.y+(extrude_direction_image_ui.px*11),


    "size_x": extrude_direction_image_ui.px*8,
    "size_y": extrude_direction_image_ui.px*8,
    "on_clicked":function(){
        selected_extrude_block.dir=3
        select_extrude_direction_images()

        
    }

    
})

var extrude_direction_right_image_ui=new button({
    "image": images.extrude_direction_right,
    "x": extrude_direction_image_ui.x+(extrude_direction_image_ui.px*21),
    "y": extrude_direction_image_ui.y+(extrude_direction_image_ui.px*11),


    "size_x": extrude_direction_image_ui.px*8,
    "size_y": extrude_direction_image_ui.px*8,
    "on_clicked":function(){
        selected_extrude_block.dir=1
        select_extrude_direction_images()
    }

    
})

var extrude_direction_up_image_ui=new button({
    "image": images.extrude_direction_up,
    "x": extrude_direction_image_ui.x+(extrude_direction_image_ui.px*11),
    "y": extrude_direction_image_ui.y+(extrude_direction_image_ui.px*1),


    "size_x": extrude_direction_image_ui.px*8,
    "size_y": extrude_direction_image_ui.px*8,
    "on_clicked":function(){
        selected_extrude_block.dir=0
        select_extrude_direction_images()
    }

    
})

var extrude_direction_down_image_ui=new button({
    "image": images.extrude_direction_down,
    "x": extrude_direction_image_ui.x+(extrude_direction_image_ui.px*11),
    "y": extrude_direction_image_ui.y+(extrude_direction_image_ui.px*21),


    "size_x": extrude_direction_image_ui.px*8,
    "size_y": extrude_direction_image_ui.px*8,
    "on_clicked":function(){


        selected_extrude_block.dir=2
        select_extrude_direction_images()

        
    }

    
})

select_extrude_direction_images()



extrude_layer_draw=function(){
    // let structure=structures[load_structure_name.text]
    // let new_block_list=[]

    // // let start_x=JSON.parse(load_structure_x.text)
    // // let start_y=JSON.parse(load_structure_y.text)

    // // let size_x=JSON.parse(load_structure_size_x.text)
    // // let size_y=JSON.parse(load_structure_size_y.text)

    // let extrude_number=10

    // let start_x=selected_extrude_block.x-3
    // let start_y=selected_extrude_block.y-3

    // let size_x=7
    // let size_y=7


    // if(selected_extrude_block.dir==0){
    //     start_y-=extrude_number
    //     size_y=extrude_number+size_y
    // }

    // if(selected_extrude_block.dir==2){
    //     // start_y+=extrude_number
    //     size_y=extrude_number+size_y
    // }



    // if(selected_extrude_block.dir==1){
    //     // start_x-=extrude_number
    //     size_x=extrude_number+size_x
    // }

    // if(selected_extrude_block.dir==3){
    //     start_x-=extrude_number
    //     size_x=extrude_number+size_x
    // }



    
    // // if(structure && save_or_load_switch=="load"){
    //     // console.log("TEMP")
    //     for(let x=0;x<size_x;x++){
    //         let line=[]
    //         for(let y=0;y<size_y;y++){
    //             // console.log(structure[x][y])
    //             let block=get_block_from_index(start_x+x,start_y+y)
    //             if(block){
    //                 line.push(block)
    //             }
                
    //         }
    //         if(line!=[]){
    //             new_block_list.push(line)
    //         }
            
    //     }

    //     // load_structure(0,0,structure,new_block_list)

    //     // new_block_list
    // // }

    // // if(save_or_load_switch=="save"){
    // //     for(let x=start_x;x<start_x+size_x;x++){
    // //         let line=[]
    // //         for(let y=start_y;y<start_y+size_y;y++){
    // //             // console.log(structure[x][y])
    // //             line.push(block_list[x][y])
    // //         }
    // //         new_block_list.push(line)
    // //     }


    // // }


    // // console.log(selected_extrude_block.ghost_layers)

    // if(selected_extrude_block.extrude_distance==undefined && extrude_to_wall_min_text.text!=undefined && extrude_to_wall_max_text.text!=undefined){
    //     console.log(extrude_to_wall_max_text.text)
    //     // selected_extrude_block.extrude_distance = number_from(JSON.parse(extrude_to_wall_min_text.text),JSON.parse(extrude_to_wall_max_text.text))()
    // }
    


    
    // selected_extrude_block.extrude_block=extrude_block_name.text



    // selected_extrude_block.end_structure = {

    //     "name": end_structure_text.text,
    //     "offset_x": end_structure_offset_x_text.text,
    //     "offset_y": end_structure_offset_y_text.text

    // }

    // remake_etrude_structcher_ghosts(selected_extrude_block)

    // let ghost_layers = selected_extrude_block.ghost_layers

    // if(ghost_layers!=undefined){
    //     ghost_layers.forEach(ghost_layer => {

    //         let offset_x = ghost_layer.offset_x
    //         let offset_y = ghost_layer.offset_y

    //         for(let x=0;x<ghost_layer.layer.length;x++){
    //             for(let y=0;y<ghost_layer.layer[0].length;y++){
    //                 // console.log("t")
    //                 new_block_list[0][0] = get_just_block("grass")
    //             }
    //         }

            
    //     });        
    // }

    if(selected_extrude_block.ghost_layers && selected_extrude_block.ghost_layers.length>0){
        let lowest_offset_x = selected_extrude_block.ghost_layers[0].offset_x || 0
        let lowest_offset_y = selected_extrude_block.ghost_layers[0].offset_y || 0

        let most_offset_x = lowest_offset_x
        let most_offset_y = lowest_offset_y

    


        selected_extrude_block.ghost_layers.forEach(ghost_layer => {
            let offset_x = ghost_layer.offset_x || 0
            let offset_y = ghost_layer.offset_y || 0

            console.log(ghost_layer )



            // if(isNaN(ghost_layer.offset_x) == false && ghost_layer.offset_x!=undefined){

            //     offset_x = ghost_layer.offset_x
            //     offset_y = ghost_layer.offset_y

            // }


            let x = (offset_x)
            let y = (offset_y)

            let end_x = (offset_x+ghost_layer.layer.length)
            let end_y = (offset_y+ghost_layer.layer[0].length)

            // console.log(y+"  "+end_y )


            if(x<lowest_offset_x){
                lowest_offset_x = x
            }
            // if(y>most_offset_x){
            //     most_offset_x = x
            // }



            if(y<lowest_offset_y){
                lowest_offset_y = y
            }
            // if(y>most_offset_y){
            //     most_offset_y = y
            // }



            // if(end_x<lowest_offset_x){
            //     lowest_offset_x = end_x
            // }
            if(end_x>most_offset_x){
                most_offset_x = end_x
            }


            // if(end_y<lowest_offset_y){
            //     lowest_offset_y = end_y
            // }
            if(end_y>most_offset_y){
                most_offset_y = end_y
            }


            // console.log("BOX   "+(x+"  "+y+"  "+end_x+"  "+end_y))


        });

        // console.log("BOX   "+(selected_extrude_block.x+lowest_offset_x)+" "+(selected_extrude_block.y+lowest_offset_y)+"  "+(selected_extrude_block.x+most_offset_x)+" "+(selected_extrude_block.y+most_offset_y))


        let layer = []

        for(let x=selected_extrude_block.x+lowest_offset_x-2;x<selected_extrude_block.x+most_offset_x+2;x++){
            let line=[]
            for(let y=selected_extrude_block.y+lowest_offset_y-2;y<selected_extrude_block.y+most_offset_y+2;y++){
                // console.log(x+" "+y)

                alert("FIX")

                line.push(block_list[x][y])
            }
            layer.push(line)
        }




        selected_extrude_block.ghost_layers.forEach(ghost_layer => {
            


            load_structure(2-(lowest_offset_x - (ghost_layer.offset_x || 0)),2-(lowest_offset_y - (ghost_layer.offset_y || 0)),ghost_layer.layer,layer)

            // for(let x=0;x<ghost_layer.layer.length;x++){
            //     // let line=[]
            //     for(let y=0;y<ghost_layer.layer[0].length;y++){
            //         // console.log(x+" g "+(y+start_y+2))
            //         // line.push(block_list[x][y])

            //         let block = ghost_layer.layer[x][y]
                    
            //         if(block.image){
            //             // console.log(block)
            //             layer[x+start_x][y+start_y] = block
            //         }
                    
            //     }
            //     // layer.push(line)
            // }
    
            
        })
        // layer

        // console.log(layer[2][2])
        render_blocks_fram((innerWidth*.09)+((innerWidth*.31))+25,(innerHeight*.06)+25,((innerWidth*.51)-50),((innerHeight*.88)-50),layer)        
    }
    
}

var extrude_min_text=new text( {

    "x": (innerWidth*.09)+25,
    "y": (innerHeight*.06)+460,

    // "border_image":left_display_bar_stretch_image,

    "text": "Min: ",
    "size": 70,
    "color": "rgb(255,255,255)",
    "align": "left", 
    "base_line":"middle",

    // "border_image":underline_bar,

    // "border_align": "left", 


    // "border_image":rock_bar_stretch_image,
    // "border_align": "center",
    // "border_x_offset":240,
    

    "on_clicked":function(){
      
    },
    "make_text_button":true
})

var extrude_to_wall_min_button=new button({
    "image": images.unselected_extrude_to_wall_button,
    "x": (innerWidth*.09)+25,
    "y": (innerHeight*.06)+490,
    "px":((30/16)*slot_size)/30,

    "size_x": (225),
    "size_y": (225)*(9/16),
    "on_clicked":function(){
        if(extrude_to_wall_min_button.image==images.unselected_extrude_to_wall_button){
            extrude_to_wall_min_button.image=images.selected_extrude_to_wall_button
            extrude_to_wall_min_text.text="To Next Wall"
        }
        else{
            extrude_to_wall_min_button.image=images.unselected_extrude_to_wall_button
            extrude_to_wall_min_text.text="0"

        }
        
    }

    
})

var extrude_to_wall_min_text=new text_controller({
    // "text": " ",
            
            
    "text_class":{
        "color":"rgb(255,255,255)", 

    },
    "default_text_class":{
            
        "color": "rgb(200,200,200,.5)",
        "text":"Enter etrude min",
    
            
            
            
    },
            
    "shared_traits":{
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+680,

        "size": 80,    
        "align":"left",
        "base_line":"middle",
        "border_image":images.left_display_bar_stretch_image,
        "image_bar":images.accended_text_selected_image,
                
        "border_size_multiplier":1.25,
        "border_x_offset":30,
        "border_align":"left",
                
            
        "make_text_button":true,
        "can_input_text":true,

        "text_type":"number",


        "on_input_text_funtion":function(){

            selected_extrude_block.extrude_min = parse_number(extrude_to_wall_min_text.text)

          

        }


                    
            
    }
})




//Max
var extrude_max_text=new text( {

    "x": (innerWidth*.09)+25,
    "y": (innerHeight*.06)+770,

    // "border_image":left_display_bar_stretch_image,

    "text": "Max: ",
    "size": 70,
    "color": "rgb(255,255,255)",
    "align": "left", 
    "base_line":"middle",

    // "border_image":underline_bar,

    // "border_align": "left", 


    // "border_image":rock_bar_stretch_image,
    // "border_align": "center",
    // "border_x_offset":240,
    

    "on_clicked":function(){
      
    },
    "make_text_button":true
})

var extrude_to_wall_max_button=new button({
    "image": images.unselected_extrude_to_wall_button,
    "x": (innerWidth*.09)+25,
    "y": (innerHeight*.06)+800,
    "px":((30/16)*slot_size)/30,

    "size_x": (225),
    "size_y": (225)*(9/16),
    "on_clicked":function(){
        if(extrude_to_wall_max_button.image==images.unselected_extrude_to_wall_button){
            extrude_to_wall_max_button.image=images.selected_extrude_to_wall_button
            extrude_to_wall_max_text.text="To Next Wall"
        }
        else{
            extrude_to_wall_max_button.image=images.unselected_extrude_to_wall_button
            extrude_to_wall_max_text.text="0"

        }
        
    }

    
})

var extrude_to_wall_max_text=new text_controller({
    // "text": " ",
            
            
    "text_class":{
        "color":"rgb(255,255,255)", 
    },
    "default_text_class":{
            
        "color": "rgb(200,200,200,.5)",
        "text":"Enter etrude max",
            
            
            
    },
            
    "shared_traits":{
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+990,

        "size": 80,    
        "align":"left",
        "base_line":"middle",
        "border_image":images.left_display_bar_stretch_image,
        "image_bar":images.accended_text_selected_image,
                
        "border_size_multiplier":1.25,
        "border_x_offset":30,
        "border_align":"left",
                
            
        "make_text_button":true,
        "can_input_text":true,

        "text_type":"number",

        "on_input_text_funtion":function(){
        
            selected_extrude_block.extrude_max = parse_number(extrude_to_wall_max_text.text)

          
            

            extrude_ui_changed()

        }


                    
            
    }
})



//Tab names
extrude_range_tab_name = new text({
    "text": "Extrude Range",
    "color":"rgb(255,255,255)",
    "x": (innerWidth*.09)+25,
    "y": (innerHeight*.06)+60,  

    "border_image":images.underline_bar,

    "size": 35,    
    "align":"LEFT",
    "base_line":"middle",

    "on_clicked":function(){
        extrude_block_tab_name.border_image=undefined
        extrude_range_tab_name.border_image=underline_bar
        end_structure_tab_name.border_image=undefined

        replace_list_object(extrude_tab,extrude_range_tab)



    
    },
    "make_text_button":true



})
extrude_block_tab_name=new text({
    "text": "Extrude Block",
    "color":"rgb(255,255,255)",
    "x": (innerWidth*.09)+310,
    "y": (innerHeight*.06)+60,  

    


    "size": 35,    
    "align":"LEFT",
    "base_line":"middle",

    "on_clicked":function(){
        extrude_block_tab_name.border_image=underline_bar
        extrude_range_tab_name.border_image=undefined
        end_structure_tab_name.border_image=undefined

        replace_list_object(extrude_tab,extrude_block_tab)

    
    },
    "make_text_button":true



})
end_structure_tab_name = new text({
    "text": "End Structure", 
    "color":"rgb(255,255,255)",
    "x": (innerWidth*.09)+580,
    "y": (innerHeight*.06)+60,  

    "size": 35,    
    "align":"LEFT",
    "base_line":"middle",

    "on_clicked":function(){
        extrude_block_tab_name.border_image= undefined
        extrude_range_tab_name.border_image= undefined
        end_structure_tab_name.border_image= underline_bar

        replace_list_object(extrude_tab,end_structure_tab)


    
    },
    "make_text_button":true

})



//Void Option
var void_option_image_ui=new image({
    "image": images.void_option,
    "x": (innerWidth*.09)+35,
    "y": (innerHeight*.06)+970,
    "px":240/24,

    "size_x": 240,
    "size_y": 120

    
})

var void_option_void_ui=new button({
    "image": images.selected_void_option_void,
    "x": (innerWidth*.09)+35+(void_option_image_ui.px),
    "y": (innerHeight*.06)+970+(void_option_image_ui.px),


    "size_x": void_option_image_ui.px*10,
    "size_y": void_option_image_ui.px*10,

    "on_clicked":function(){
        void_option_void_ui.image=selected_void_option_void_image
        void_option_solid_ui.image=unselected_void_option_solid_image
    }

    
})

var void_option_solid_ui=new button({
    "image": images.unselected_void_option_solid,
    "x": (innerWidth*.09)+35+(void_option_image_ui.px*13),
    "y": (innerHeight*.06)+970+(void_option_image_ui.px),


    "size_x": void_option_image_ui.px*10,
    "size_y": void_option_image_ui.px*10,

    "on_clicked":function(){
        void_option_void_ui.image=images.unselected_void_option_void
        void_option_solid_ui.image=images.selected_void_option_solid
    }

    
})


extrude_tab=[]

extrude_ui_base=[
    new align({
        "elements":[
            new image({
                "stretch_image_rectangle": images.gray_display_box_stretch_image,
                "x": innerWidth*.09,
                "y": innerHeight*.06,
                "size_x": (innerWidth*.82),
                "size_y": (innerHeight*.88)


                
            }),

            new image({

                "stretch_image_rectangle": images.dark_gray_display_box_stretch_image,
                "x": (innerWidth*.09)+((innerWidth*.31)),
                "y": (innerHeight*.06),
                "size_x": (innerWidth*.51),
                "size_y": (innerHeight*.88)

            }),

            //Tabs



            extrude_block_tab_name,

            extrude_range_tab_name,

            end_structure_tab_name

        ],
        groups:["ui"]  
    }),
    new align({
        "elements":extrude_tab
    }),
    new align({
                
        "draw":extrude_layer_draw
    })

]

function randomize_extrude_distance(block = selected_extrude_block){

    block.extrude_distance = number_from(block.extrude_min,block.extrude_max)()
    // alert(block.extrude_distance)

}

function extrude_ui_changed(){
    extrude_block_changed()
}


function extrude_block_changed(block = selected_extrude_block){


    // load_extrude_block(block)

}

function on_extrude_ui_layer_removed(){
    extrude_block_changed()

}

function on_extrude_ui_layer_added(){
    extrude_ui_changed()
}



extrude_range_tab=[

    new align({
        "elements":[]
    }),
    new align({
        "elements":[
            extrude_ui_base,

            extrude_direction_image_ui,
            extrude_relaod_image_ui,

            extrude_direction_left_image_ui,
            extrude_direction_up_image_ui,
            extrude_direction_down_image_ui,
            extrude_direction_right_image_ui,


            extrude_min_text,
            extrude_to_wall_min_button,
            extrude_to_wall_min_text,


            extrude_max_text,
            extrude_to_wall_max_button,
            extrude_to_wall_max_text

            // void_option_image_ui,
            // void_option_void_ui,
            // void_option_solid_ui

           
        
        ] 
    })
]

replace_list_object(extrude_tab,extrude_range_tab)

extrude_block_elements=extrude_ui_base


