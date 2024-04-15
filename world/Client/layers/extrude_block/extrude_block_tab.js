extrude_block_name=new text_controller({
    // "text": " ",
                
                
    "text_class":{
        "color":"rgb(255,255,255)", 
    },
    "default_text_class":{
                
            "color": "rgb(200,200,200,.5)",
            "text":"Enter extrude block",

                
                
                
        },
                
        "shared_traits":{
            "x": (innerWidth*.09)+25,
            "y": (innerHeight*.06)+140,
    
            "size": 60,    
            "align":"left",
            "base_line":"middle",
            "border_image":images.left_display_bar_stretch_image,
            "image_bar":images.accended_text_selected_image,
                    
            "border_size_multiplier":1.25,
            "border_x_offset":30,
            "border_align":"left",
                    
                
            "make_text_button":true,
            "can_input_text":true,
    
            "text_type":"no_spaces",


            "on_input_text_funtion":function(){
        

                selected_extrude_block.extrude_block = extrude_block_name.text

          
                
    
                
    
                extrude_ui_changed()
    
            }
    
    
                
        }
    })

extrude_block_tab=[
    extrude_block_name
]