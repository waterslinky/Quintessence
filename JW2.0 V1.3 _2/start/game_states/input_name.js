let input_name = new text_controller({
    "text_class":{


        "color": "rgb(255,255,255)",




        "image_bar":accended_text_selected_image

        
        
        
  
     
        

    },
    "default_text_class":{

        
        "color": "rgb(200,200,200,.5)",
  
        "text":"Enter Name",


        
        

        

    },
    "text":account.name!=undefined ? account.name : "",
    "shared_traits":{
        
        
        "x": innerWidth/2,
        "y":innerHeight/2,
        
        "text_y_offset" : -5,

        "size": 80,
        "align":"center",
        "base_line":"top",
        
        
        
        "border_x_offset":170,
        "border_align": "center",        
        "border_image":feather_bar_stretch_image,
        
        "can_input_text":true,
        "make_text_button":true,
        
        "on_entered" : function(){           
            engin.change_selected_layer([],"set")

    
                                
            account.name=input_name.text
            display_name.text=input_name.text
    
            localStorage.setItem("name", JSON.stringify(
                input_name.text
            ))
                            
                            
        
        }

    }

})



name_input_elements=[
    new align({ 
        "elements":[
            new text({
                "x": innerWidth/2,
                "y": 50,
                "text": "Type your name:",
                "size": 48,
                "color": "rgb(255,255,255)",
                "align": "center"
            }),
           
            input_name,
            new text( {

                "x": innerWidth/2,
                "y":(innerHeight/2)+160,


                "text": "Enter",
                "size": 70,
                "color": "rgb(255,255,255)",
                "align": "center", 
                "base_line":"middle",
                "border_align": "center", 


                "border_image":rock_bar_stretch_image,
                // "border_align": "center",
                "border_x_offset":240,
                

                "on_clicked":function(){

                    // alert(this.text)
                    // console.log(input_name.text)


                  
    
                                
                    engin.change_selected_layer([],"set")
            
                //
            
                                        
                    account.name=input_name.text
                    display_name.text=input_name.text
            
                    localStorage.setItem("name", JSON.stringify(
                        input_name.text
                    ))
                                    
                                    
                
                },
                "make_text_button":true
            })
        
        
        
            //     new text_input({"x":innerWidth/2,
        //                     "y":innerHeight/2,
        //                     "text":account.name,
        //                     "size":90,
        //                     "color":"rgb(29,214,247)",
        //                     "aling":"center",
        //                     "on_entered_function":function(){
    
                                
        //         engin.change_selected_layer([],"set")
    
        // //
    
                                
        //                         account.name=this.text_input
        //                         display_name.text=this.text_input
    
        //                         localStorage.setItem("name", JSON.stringify(
        //                             this.text_input
        //                         ))
                            
        //                     }
        //     })
        ],
        "groups":["ui"]

    })
]