
//Set up
var load_structure_block={}

load_structure_save_switch_bg=new text( {

    "x": (innerWidth*.09)+25,
    "y": (innerHeight*.06)+150,  
    "width":360,
    "text":" ",

    "border_image":left_display_bar_stretch_image,

    "size": 70,
    "color": "rgb(255,255,255)",
    "align": "left", 
    "base_line":"middle",
    "border_size_multiplier":1.25,
    "border_align": "left", 


    // "border_image":rock_bar_stretch_image,
    // "border_align": "center",
    // "border_x_offset":240,
    


    // "make_text_button":true
})


let save_or_load_switch="load"






var load_structure_name = new text_controller({
                "text": "",
            
            
                "text_class":{
                    "color":"rgb(255,255,255)",
                    
            
                },
                "default_text_class":{
            
                    "color": "rgb(200,200,200,.5)",
                    "text":"Enter structure name",
            
            
            
                },
            
                "shared_traits":{
                    "x": (innerWidth*.09)+25,
                    "y": (innerHeight*.06)+250,  

                    "text_type":"no_spaces",


                    "size": 80,    
                    "align":"left",
                    "base_line":"middle",
                    "border_image":images.left_display_bar_stretch_image,
                    "image_bar":images.accended_text_selected,
                    
                    "border_size_multiplier":1.25,
                    "border_x_offset":30,
                    "border_align":"left",
                
            
                    "make_text_button":true,
                    "can_input_text":true,

                    "on_input_text_funtion":function(){

                
                        load_structure_block.structure_name = load_structure_name.text
                   
                        
            
                    }

                    // "on_unselected":function(){
                    //     save_server_selector()
                    // },
                    // "on_entered":function(){
                    //     save_server_selector()
                    // }
                    
            
                }
})

function parse_number(num){

    let parsed_number = 0

    if(num=="" || num=="-"){
        parsed_number = 0
    }
    else{
        try{
            parsed_number = JSON.parse(num)
        }
        catch{

        }
    }

    return parsed_number
}

load_structure_x=new text_controller({
                "text": " ",
                
            
                "text_class":{
                    "color":"rgb(255,255,255)",
                    
            
                },
                "default_text_class":{
            
                    "color": "rgb(200,200,200,.5)",
                    "text":"Enter structure X",
            
            
            
                },
            
                "shared_traits":{
                    "x": (innerWidth*.09)+25,
                    "y": (innerHeight*.06)+360,  

                    "text_type":"number",

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

                    // "on_unselected":function(){
                    //     save_server_selector()
                    // },
                    // "on_entered":function(){
                    //     save_server_selector()
                    // }
                    "on_input_text_funtion":function(){

                        load_structure_block.structure_x = parse_number(load_structure_x.text)

                        // if(load_structure_x.text!=""){
                        //     if(load_structure_x.text=="-"){
                        //         load_structure_block.structure_x = 0
                        //     }
                        //     else{
                        //         load_structure_block.structure_x = JSON.parse(load_structure_x.text)
                        //     }
                            
                        // }
                        // else{
                        //     load_structure_block.structure_x = ""
                        // }

                    }

                    
                    
            
                }
})

load_structure_y=new text_controller({
                // "text": " ",
                        
                        
                "text_class":{
                    "color":"rgb(255,255,255)", 
                },
                "default_text_class":{
                        
                    "color": "rgb(200,200,200,.5)",
                    "text":"Enter structure Y",
                        
                        
                        
                },
                        
                "shared_traits":{
                                "x": (innerWidth*.09)+25,
                                "y": (innerHeight*.06)+470,  
            
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
                                    load_structure_block.structure_y = parse_number(load_structure_y.text)
                                                  
            
                                }
            
                                // "on_unselected":function(){
                                //     save_server_selector()
                                // },
                                // "on_entered":function(){
                                //     save_server_selector()
                                // }
                                
                        
                }
})




load_structure_size_x=new text_controller({
    "text": "",
    

    "text_class":{
        "color":"rgb(255,255,255)",
        

    },
    "default_text_class":{

        "color": "rgb(200,200,200,.5)",
        "text":"Enter structure X",



    },

    "shared_traits":{
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+580,  

        "text_type":"number",

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
        "text_type":"positive_number",


        "on_input_text_funtion":function(){



            load_structure_block.structure_size_x = parse_number(load_structure_size_x.text)

            

        }

        // "on_unselected":function(){
        //     save_server_selector()
        // },
        // "on_entered":function(){
        //     save_server_selector()
        // }
        

    }
})

load_structure_size_y=new text_controller({
    // "text": " ",
            
            
    "text_class":{
        "color":"rgb(255,255,255)", 
    },
    "default_text_class":{
            
        "color": "rgb(200,200,200,.5)",
        "text":"Enter structure Y",
            
            
            
    },
            
    "shared_traits":{
                    "x": (innerWidth*.09)+25,
                    "y": (innerHeight*.06)+690,  

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

                    "text_type":"positive_number",


                    "on_input_text_funtion":function(){

                        load_structure_block.structure_size_y = parse_number(load_structure_size_y.text)


                        
            
                    }



                    // "on_unselected":function(){
                    //     save_server_selector()
                    // },
                    // "on_entered":function(){
                    //     save_server_selector()
                    // }
                    
            
    }
})


function area_in_world(x,y,width,height){

    alert("fix")

    if(x+width<=block_list.length && x>=0){
        if(y+height<=block_list[x].length && y>=0){
            return true
        }
    }


    return false

}



load_structure_draw=function(){
    // let structure=structures[load_structure_name.text]
    // let new_block_list=[]


    // // alert(load_structure_block.x)
    // let start_x=load_structure_block.x+load_structure_block.structure_x
    // let start_y=load_structure_block.y+load_structure_block.structure_y

    // let size_x=load_structure_block.structure_size_x
    // let size_y=load_structure_block.structure_size_y



    
    // if(structure && save_or_load_switch=="load"){
    //     // console.log(structure)

    //     let out_of_world = false
    //     // console.log("r"+((start_y-structure[0].length)+1))
    //     for(let x=start_x;x<start_x+structure.length;x++){
    //         let line=[]
    //         for(let y=(start_y-structure[0].length)+1;y<start_y+1;y++){

    //             let block = get_block_from_index(x,y)
    //             // console.log(x,y)

    //             if(block==undefined){
    //                 out_of_world=true
    //                 console.log((x,y)+"RKJNGRJNRGNGREGEIGRIJGRGJIGRE")
    //             }
    //             else{
    //                 line.push(block)
    //             }

    //             // console.log(block_list[x][y])
                
    //         }
    //         new_block_list.push(line)
    //     }


    //     if(out_of_world){
    //         new_block_list=[]
    //     }

    //     load_structure(0,0,convert_names_to_blocks(structure),new_block_list)


    //     // new_block_list
    // }
    //     // if(Math.random()<0.01){
    //     //     console.log(structure)
    //     // }
    // if(save_or_load_switch=="save"){

        

    //     if(area_in_world(start_x,(start_y-size_y)+1,size_x,size_y)){
    //         for(let x=start_x;x<start_x+size_x;x++){
    //             let line=[]
    //             for(let y=(start_y-size_y)+1;y<start_y+1;y++){
    //                 // 
    //                 try{
    //                     line.push(block_list[x][y])
    //                 }
    //                 catch(err){
    //                     // console.log(x,y)
    //                 }
                    
    //             }
    //             new_block_list.push(line)
    //         }            
    //     }



    // }

    
    
    // if( new_block_list.length>0 ){
    //     // console.log(new_block_list)
        
    //     render_blocks_fram((innerWidth*.09)+((innerWidth*.41))+25,(innerHeight*.06)+25,((innerWidth*.41)-50),((innerHeight*.88)-50),new_block_list)
    // }
    
}
load_structure_elements_type_save=new align({
        "elements":[
          


            //Input structure name
            load_structure_name,

            //Input structure x
            load_structure_x,

            //Input structure y
            load_structure_y,


            load_structure_size_x,
            load_structure_size_y,







            // new align({
                
            //     "draw":load_structure_draw
            // })
        
        ],
        groups:["ui"]   
})










load_structure_elements_type_load = new align({
        "elements":[



            //Input structure name
            load_structure_name,

            //Input structure x
            load_structure_x,

            //Input structure y
            load_structure_y,


            //Load
            new text( {

                "x": (innerWidth*.09)+25,
                "y": (innerHeight*.06)+580,  

                "border_image":left_display_bar_stretch_image,

                "text": "Load",
                "size": 70,
                "color": "rgb(255,255,255)",
                "align": "left", 
                "base_line":"middle",
                "border_align": "left", 
                "border_size_multiplier":1.25,


                // "border_image":rock_bar_stretch_image,
                // "border_align": "center",
                "border_x_offset":24,
                

                "on_clicked":function(){

                    let structure=structures[load_structure_block.structure_name]

                    if(structure){
                        alert("FIX")
                        load_structure(load_structure_block.x + load_structure_block.structure_x,load_structure_block.y+(load_structure_block.structure_y-structure[0].length)+1,convert_names_to_blocks(structure),block_list)
                    }
                    
                    

                    engin.change_selected_layer([],"set")

                
                },
                "make_text_button":true
            }),          


            new text({
                "text": "Structure Block",
                "color":"rgb(255,255,255)",
                "x": (innerWidth*.09)+25,
                "y": (innerHeight*.06)+60,  

                "size": 60,    
                "align":"LEFT",
                "base_line":"middle",
             
            
            
            }),






            new align({
                
                "draw":load_structure_draw
            })
        
        ],
        groups:["ui"]   
})

let load_structure_ui = new align({
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
                "x": (innerWidth*.09)+((innerWidth*.41)),
                "y": (innerHeight*.06),
                "size_x": (innerWidth*.41),
                "size_y": (innerHeight*.88)
        
        }),
        new text({
                "text": "Structure Block",
                "color":"rgb(255,255,255)",
                "x": (innerWidth*.09)+25,
                "y": (innerHeight*.06)+60,  

                "size": 60,    
                "align":"LEFT",
                "base_line":"middle",
             
            
            
        }),

        load_structure_save_switch_bg,

        new tabs({

            "buttons":{
                "save_structure_tab":new text( {

                    "x": (innerWidth*.09)+25,
                    "y": (innerHeight*.06)+150,  
                
                    "select_tab":"save_structure_tab",
                
                    "text": "Save",
                    "size": 70,
                    "color": "rgb(255,255,255)",
                    "align": "left", 
                    "base_line":"middle",
                    "border_align": "left", 
                    // "border_size_multiplier":.8,
                
                    // "border_image":rock_bar_stretch_image,
                    "border_align": "left",
                    // "border_x_offset":240,
                    
                    "make_text_button":true
                }),
                "load_structure_tab":new text( {

                    "x": (innerWidth*.09)+200,
                    "y": (innerHeight*.06)+150,  
                
                    // "border_image":left_display_bar_stretch_image,
                    "select_tab":"load_structure_tab",
                    "text": "Load",
                    "size": 70,
                    "color": "rgb(255,255,255)",
                    "align": "left", 
                    "base_line":"middle",
                
                    "make_text_button":true
                })
            },

            "on_tab_selected":function(tab){
                tab.border_image=underline_bar
            },

            "on_tab_unselected":function(tab){
                tab.border_image=undefined
            },

            "tabs":{
                "load_structure_tab":load_structure_elements_type_load,
                "save_structure_tab":load_structure_elements_type_save
            },

            "starting_tab":"save_structure_tab"

        })          
    ]
})

// load_structure_elements=[]
// replace_list_object(load_structure_elements,load_structure_elements_type_load)

function on_load_structure_layer_removed(){
    // // remake_structcher_ghosts()

    // // alert("r")
    // // load_structure_block.structure_name=load_structure_name.text

    // // load_structure_block.structure_x = JSON.parse(load_structure_x.text)
    // // load_structure_block.structure_y = JSON.parse(load_structure_y.text)

    // // load_structure_block.structure_size_x = JSON.parse(load_structure_size_x.text)
    // // load_structure_block.structure_size_y = JSON.parse(load_structure_size_y.text) 





    
    // // load_structure_block.offset_x = 
    // // load_structure_block.offset_y = 
    
  
    // // console.log(ghost_layer)

    // // let text_x = load_structure_x.text
    // // let text_y = load_structure_y.text



    let offset_x = load_structure_block.structure_x
    let offset_y = load_structure_block.structure_y
    


    // load_structure_block.outline_boxs = []  
    // load_structure_block.ghost_layers = []

    


    // if(save_or_load_switch=="load"){

    //     let structure_name = load_structure_block.structure_name

    //     if(typeof offset_x == "number" && typeof offset_y == "number" && typeof structures[structure_name]!="undefined"){

    //         let structcher = convert_names_to_blocks(structures[structure_name])

    //         console.log(structcher)
    //         let layer = []


    //         for(let x=0;x<structcher.length;x++){
    //             let line = []
    //             for(let y=0;y<structcher[x].length;y++){
    //                 line.push(get_just_block("air"))
    //             }
    //             layer.push(line)

    //         }

            
    //         load_structure(0,0,structcher,layer)



    //         load_structure_block.ghost_layers = [{
    //             "layer":layer,
    //             "offset_x":offset_x,
    //             "offset_y":offset_y-(layer[0].length-1)          
    //         }]


            


    //     }

        
    // }

    if(save_or_load_switch=="save"){
        
        let width = load_structure_block.structure_size_x
        let height = load_structure_block.structure_size_y
        
        console.log(load_structure_block)
        
        // alert(typeof x == "number" ,typeof y == "number" , typeof width == "number" , typeof height == "number")
        if(typeof offset_x == "number" && typeof offset_y == "number" && typeof width == "number" && typeof height == "number"){
          
            load_structure_block.outline_boxs = [{
                "offset_x" :offset_x,
                "offset_y": (offset_y-height)+1,
                "width" : width,
                "height" : height
            }]  

  
        }

        
    }








 

    // // if(text_x!="" && text_y!=""){
    //     // console.log(text_x)




        




    // //     if(typeof x == "number" && typeof y == "number" && typeof width == "number" && typeof height == "number" && typeof structures[structure_name]!="undefined"){

  

            
    // //         load_structure_block.outline_boxs = [{
    // //             "pos_x" :x,
    // //             "pos_y": (y-height)+1,
    // //             "width" : width,
    // //             "height" : height
    // //         }]  
    // //         outline_boxs_made = true      
    // //     }
    // // // }

    // // if(outline_boxs_made==false){

    // //     load_structure_block.outline_boxs = []  

    // // }



    // // load_structure_block.height = 10

    // // console.log(load_structure_block.width)
    // // console.log(load_structure_block.height)
    

    
}