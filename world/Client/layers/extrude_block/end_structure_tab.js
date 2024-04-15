end_structure_text = new text_controller({
        // "text": " ",
        
                
        "text_class":{
            "color":"rgb(255,255,255)", 
        },
        "default_text_class":{
                
            "color": "rgb(200,200,200,.5)",
  
            "text":"Enter End Structure",
                
                
        },
                
        "shared_traits":{
            "x": (innerWidth*.09)+25,
            "y": (innerHeight*.06)+190,
    
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

            

                let text = end_structure_text.text
    
      

                selected_extrude_block.end_structure = text

          
                extrude_ui_changed()
    
    
            }
    
    
                        
                
        }
})

end_structure_offset_x_text = new text_controller({
    // "text": " ",
    
            
    "text_class":{
        "color":"rgb(255,255,255)", 
    },
    "default_text_class":{
            
        "color": "rgb(200,200,200,.5)",

        "text":"Enter Offset X",
            
            
    },
            
    "shared_traits":{
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+330,

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

        // "text_type":"no_spaces",
        "text_type":"number",


        "on_input_text_funtion":function(){

            
            selected_extrude_block.offset_x = parse_number(end_structure_offset_x_text.text)
           

            extrude_ui_changed()


        }


                    
            
    }
})

end_structure_offset_y_text = new text_controller({
    // "text": " ",
    
            
    "text_class":{
        "color":"rgb(255,255,255)", 
    },
    "default_text_class":{
            
        "color": "rgb(200,200,200,.5)",

        "text":"Enter Offset X",
            
            
    },
            
    "shared_traits":{
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+470,

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

        "text_type":"number",

        
        
        "on_input_text_funtion":function(){

            


            selected_extrude_block.offset_y = parse_number(end_structure_offset_y_text.text)

            extrude_ui_changed()


        }


                    
            
    }
})






end_structure_tab=[
    new text({
        "text": "End Structure Name:", 
        "color":"rgb(255,255,255)",
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+120,  
    
        "size": 45,    
        "align":"LEFT",
        "base_line":"middle",
    
        "on_clicked":function(){
            extrude_block_tab_name.border_image = undefined
            extrude_range_tab_name.border_image = undefined
            end_structure_tab_name.border_image = underline_bar
    
            replace_list_object(extrude_tab,end_structure_tab)
    
    
        
        },
        "make_text_button":true
    
    }),


    end_structure_text,
    new text({
        "text": "Structure Offset X:", 
        "color":"rgb(255,255,255)",
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+260,  
    
        "size": 45,    
        "align":"LEFT",
        "base_line":"middle",
    
        "on_clicked":function(){
            extrude_block_tab_name.border_image = undefined
            extrude_range_tab_name.border_image = undefined
            end_structure_tab_name.border_image = underline_bar
    
            replace_list_object(extrude_tab,end_structure_tab)
    
    
        
        },
        "make_text_button":true
    
    }),
    end_structure_offset_x_text,
    new text({
        "text": "Structure Offset Y:", 
        "color":"rgb(255,255,255)",
        "x": (innerWidth*.09)+25,
        "y": (innerHeight*.06)+400,  
    
        "size": 45,    
        "align":"LEFT",
        "base_line":"middle",
    
        "on_clicked":function(){
            extrude_block_tab_name.border_image = undefined
            extrude_range_tab_name.border_image = undefined
            end_structure_tab_name.border_image = underline_bar
    
            replace_list_object(extrude_tab,end_structure_tab)
    
    
        
        },
        "make_text_button":true
    
    }),
    end_structure_offset_y_text


]