document.body.addEventListener("keyup",key_up);
document.body.addEventListener("keydown",key_down);

document.body.addEventListener("mousemove",mouse_move);
document.body.addEventListener("mousedown",mouse_down_listener);
document.body.addEventListener("mouseup",mouse_up_listener);

document.body.addEventListener("wheel",mouse_wheel);


document.body.addEventListener("contextmenu",function(close_menu){
    close_menu.preventDefault();
});




// document.addEventListener("visibilitychange", () => {
    
//     if (document.visibilityState=="visible") {
//         //document.title="2D Wolrd (Active)"
//         console.log("Page Active") 
//         console.log("")

//         engin.unpause()
       

        

//     } 
//     else{
//         //document.title="2D Wolrd (Deactive)"
//         console.log("Page Deactive")
//         console.log("")

//         engin.pause()
            
    
       
//     }
// });



shift_down=false

mouse_down=false
right_mouse_down=false
mouse_released=true


mouse_x=0
mouse_y=0
block_mouse_x=0
block_mouse_y=0
world_mouse_x=0
world_mouse_y=0

audioElement=false


// function keyboard_input(string,key){
//     if(key!="Shift"){
//         string+=key
//         console.log(string)
//     }

// }

//FIX
function key_up(event){

    //Prevent Tab
    if (event.keyCode == 9){
        // console.log("TAB")

        event.preventDefault(); 
    } 
    let layer_found=false

    engin.layers.forEach(element => {
        engin.selected_layers.forEach(element_2 => {
               
            if(element.name==element_2  && element.active){
                layer_found=true
                if(element.keys_up){

                    element.keys_up(event)

                }
            }
        });
    });

    if(layer_found==false){
        engin.layers.forEach(element => {

            if(element.name=="default"  && element.active){
                element.keys_up(event)
            }
        })

    }
    

    
}

//FIX
function key_down(event){
// console.log(event.key)
    // alert(event.keyCode)
    //Preevent Tab


    let layer_found=false

    // engin.layers.forEach(layer => {
    //     engin.selected_layers.forEach(element_2 => {
               
    //         if(layer.name==element_2 && layer.active){
    //             layer_found=true
    //             if(layer.keys_down){

    //                 RunFucntionElement(layer,false,function(layer){
    //                     // console.log(layer.text_input)
    //                     if(layer.active && layer.text_input){
    //                         // layer.text+=event.key

    //                         layer.addletter(event.key)
                            
    //                     }
    //                 })


    //                 layer.keys_down(event)

    //             }
    //         }
    //     });
    // });

    if(layer_found==false){
        engin.layers.forEach(element => {

            if(element.name=="default"  && element.active){
                element.keys_down(event)
            }
        })

    }
    








    
}

function mouse_move(event){
    mouse_x=event.offsetX*screen_scale
    mouse_y=event.offsetY*screen_scale



    if(typeof player!="undefined"){
        world_mouse_x=parseInt(((mouse_x+player.cam[0]))/(display_block_size))
        world_mouse_y=parseInt(((mouse_y+player.cam[1]))/(display_block_size))        
    }


}

function mouse_wheel(event){

    
    let layer_found=false

    engin.layers.forEach(element => {
        engin.selected_layers.forEach(element_2 => {
               
            if(element.name==element_2 && element.active){
                layer_found=true
                if(element.mouse_wheel){

                    element.mouse_wheel(event)

                }
            }
        });
    });

    if(layer_found==false){
        engin.layers.forEach(element => {

            if(element.name=="default"  && element.active){
                element.mouse_wheel(event)
            }
        })

    }
 
    
}


function mouse_down_listener(event){
    // console.log(event.button)
    if(event.button==0){
        mouse_down=true

        mouse_released=false

        let layer_found=false
        engin.layers.forEach(element => {
            engin.selected_layers.forEach(element_2 => {

                if(element.name==element_2){
                    layer_found=true
        
                    if(element.mousedown){
                

                        element.mousedown(event)
                    }
                }
            });
    

        });

        if(layer_found==false){
            engin.layers.forEach(element => {

                if(element.name=="default"){
            
                    element.mousedown(event)
                }
            })

        }

    }
    if(event.button==2){
        if(engin.selected_layers.length==0){
            is_placing=true
        }
        right_mouse_down=true

    }

    engin.layers.forEach(layer => {
    

            RunFucntionElement(layer,false,function(element){

            
                // element.active=true
                if(element.last_button_clicked){
                    // console.log("korggojrijgr")
                    element.last_button_clicked=false
                }
                



                

            })

        
    })


    // this.last_button_clicked=true



}


function mouse_up_listener(event){
    if(event.button==0){

        mouse_down=false

        mouse_released=true

        let layer_found=false
        engin.layers.forEach(layer => {
            engin.selected_layers.forEach(element_2 => {

                if(layer.name==element_2){
                    layer_found=true
        
                    if(layer.mouseup){

                        // element


                

                        layer.mouseup(event)
                    }
                }
            });
    

        });

        if(layer_found==false){
            engin.layers.forEach(element => {

                if(element.name=="default"){
            
                    element.mouseup(event)
                }
            })

        }
    }
    if(event.button==2){
        is_placing=false
        right_mouse_down=false
    }
}
