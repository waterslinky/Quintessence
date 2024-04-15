//SETTINGS
function draw_settings(){

    // console.log("L")

}

function update_settings(){ 
    set_fov(1.25+   (parseInt(FOV_slidder.point_len*200)/100) )  
}

FOV_slidder = new slidder([(innerWidth*.09)+250,(innerHeight*.06)+100],[(innerWidth*.09)+(innerWidth/3.5),(innerHeight*.06)+100],(FOV-1.25)/2,undefined,{"line_width":25,"point_size":25}),

settings_elements = [
    new align({
        "elements":[
            //FOV
            new image({
                "stretch_image_rectangle": images.gray_display_box_stretch_image,
                "x": innerWidth*.09,
                "y": innerHeight*.06,
                "size_x": (innerWidth*.82),
                "size_y": (innerHeight*.88),
                "elements" : [
                    new image({
                        "stretch_image_rectangle": images.gray_display_box_stretch_image,
                        "x": 60,
                        "y": (100)-(95/2),
                        "size_x": 730,
                        "size_y": 95,
                        "cap_size_x":40,
                        "cap_size_y":40
                    }),
                    new text({
                        "x": 85,
                        "y": 100,
                        "text": "FOV:",
                        "size": 60,
                        "color": "rgb(255,255,255)",
                        "align": "left",
                        "base_line": "middle"
                    }),
                    FOV_slidder,

                    //Pack A
                    new text({
                        "x": 15+(((innerWidth*.82)-(45))/4),
                        "y": (innerHeight*.88)-((130*1.5)+(15*2))-70,
                        "text": "Texture Pack A",
                        "size": 60,
                        "color": "rgb(255,255,255)",
                        "border_align": "center",
                        "align": "center",
                        "border_image":  images.display_bar_stretch_image,

                        "border_size_height":130,
                        "width":(((innerWidth*.82)-(120))/2),
                        "make_text_button":true,
                        "on_clicked":function(){
                        
                            reload_texters("default_pack") 


                        },
                    
                        "base_line":  "middle"

                    }),
                    


                    new text({
                        "x":30+((((innerWidth*.82)-(45))/2))+(((innerWidth*.82)-(45))/4),
                        "y": (innerHeight*.88)-((130*1.5)+(15*2))-70,
                        "text": "Texture Pack B",
                        "size": 60  ,"color": "rgb(255,255,255)",
                        "border_align": "center",
                        "align": "center",
                        "border_image" : images.display_bar_stretch_image,
                        "border_size_height":130,
                        "width":(((innerWidth*.82)-(120))/2),
                        "make_text_button":true,
                        "on_clicked":function(){
                        
                            reload_texters("pack_b") 

                        },
                        "base_line":  "middle"

                    }),
                    


                    new text({
                        "x": 15+(((innerWidth*.82)-(45))/4),
                        "y": (innerHeight*.88)-((130*.5)+(15*1))-70,
                        "text": "Save",
                        "size": 60,
                        "color": "rgb(255,255,255)",
                        "border_align": "center",
                        "align": "center",
                        "border_image": images.display_bar_stretch_image,
                        "border_size_height":130,
                        "width":(((innerWidth*.82)-(120))/2),
                        "make_text_button":true,
                        "on_clicked":function(){
                            if(!multiplayer){
                                


                                
                                    
                                save_slot()

                                
                            
                            
                                // save(("slot"+selected_slot),{"world":new_block_list,"player":traits_to_new_player(player,player.save_traits)})
                            }
                            else{
                                engin.message("You can only save on offline worlds.")
                            }

                        },
                        "base_line":  "middle"
                    }),

                    //Exit
                    new text({
                        "x": 30+((((innerWidth*.82)-(45))/2))+(((innerWidth*.82)-(45))/4),
                        "y": (innerHeight*.88)-((130*.5)+(15*1))-70,
                        "text": "Exit",
                        "size":  60 ,"color":  "rgb(255,255,255)",
                        "border_align": "center",
                        "align": "center",
                        "border_image": images.display_bar_stretch_image,
                        "border_size_height":130,
                        "width":(((innerWidth*.82)-(120))/2),
                        "make_text_button":true,
                        "on_clicked":function(){

                            
                        
                            window.location.href = "../start/index.html";        
                            // engin.change_selected_layer(["exit"],"set")


                        },
                        "base_line":  "middle"   
                    })


                ],
                groups:["ui"]


                
            }),
        ]
    })
]