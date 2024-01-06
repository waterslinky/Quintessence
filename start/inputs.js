// document.body.addEventListener("keyup",key_up);
// document.body.addEventListener("keydown",key_down);

document.body.addEventListener("mousemove",mouse_move);
document.body.addEventListener("mousedown",mouse_down_listener);
document.body.addEventListener("mouseup",mouse_up_listener);

document.body.addEventListener("contextmenu",function(close_menu){
    close_menu.preventDefault();
});


mouse_down=false
right_mouse_down=false
mouse_released=true


mouse_x=0
mouse_y=0

audioElement=false

    


    
// }



function mouse_move(event){
  


    mouse_x=event.offsetX*screen_scale
    mouse_y=event.offsetY*screen_scale



    
}

function mouse_down_listener(event){



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
                    if(element.mousedown){
                        element.mousedown(event)
                    }
                }
            })

        }

    }
   
   



}


function mouse_up_listener(event){
    if(event.button==0){

        mouse_down=false

        mouse_released=true

        let layer_found=false
        engin.layers.forEach(element => {
            engin.selected_layers.forEach(element_2 => {

                if(element.name==element_2){
                    layer_found=true
        
                    if(element.mouseup){
                

                        element.mouseup(event)
                    }
                }
            });
    

        });

        if(layer_found==false){
            engin.layers.forEach(element => {

                if(element.name=="default"){
                    if(element.mouseup){
                       element.mouseup(event) 
                    }
                }
            })

        }
    }

}
