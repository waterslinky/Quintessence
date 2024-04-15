let KeysDown={}
has_interacted=false




document.body.addEventListener("keydown",function(event){
    has_interacted=true

    if(typeof KeysDown[event.key]==="undefined"){
        KeysDown[event.key]="Down"
    }
    else if(KeysDown[event.key]=="Down"){
        KeysDown[event.key]="Held_Down"
        
    }

 
    if(event.keyCode==27 && engin.selected_layers.length!=0){
        // selected_layers=[]
        delete KeysDown[event.key]
        engin.change_selected_layer([],"set")
    }
    
  
    
    // console.log(KeysDown)
})


function keybind_down(key_binds,keys = KeysDown){
    let value

    for(key_bind in key_binds){
        let key = keys[key_bind]

        if(key=="Held_Down"){
            return key
        }

        if(key=="Down"){
            value = key
        }
    }

    return value
}

// document.body.addEventListener("mosue",function(event){})

// has_clicked










// function key_down(event){


//     let layer_found=false
//     engin.layers.forEach(element => {
        
//         // if(element.keys){
            
//         engin.selected_layers.forEach(element_2 => {
               
//                 if(element.name==element_2){
//                     layer_found=true
//                     if(element.keys){

                        
//                         console.log(event.keyCode)


                        
                        
//                     }

//                     element.elements.forEach(element_3 => {
//                         // console.log(element_3)
//                         if(element_3.text_input!=undefined){
//                             if(event.keyCode>=65 && event.keyCode<=90){

//                                 element_3.text_input+=event.key
//                             }   
//                             if(event.keyCode==8){
//                                 new_test=""
//                                 for(let i=0;i<element_3.text_input.length-1;i++){
//                                     new_test+=element_3.text_input[i]
//                                 }
//                                 element_3.text_input=new_test
                           
                                
//                             }
//                             let click_sound=new Audio("sounds/selcect.mp3")
//                             click_sound.volume=1
        
//                             click_sound.play()
//                         }
//                         if(event.keyCode==13){
//                             // console.log("EV")
                         
//                                 if(element_3.enter){
//                                     element_3.enter()
//                                     let click_sound=new Audio("sounds/click.mp3")
//                                     click_sound.volume=1
                
//                                     click_sound.play()
//                                 }
                                
                            
//                         }

//                         // alert(event.keyCode)

//                     });
//                 }
//             });
//         // }

//     });

//     if(layer_found==false){
//         engin.layers.forEach(element => {

//             if(element.name=="default" && element.keys){
//                 element.keys(event)
//             }
//         })




//     }
//     else{
//         if(event.keyCode==27 && engin.selected_layers.length!=0){
//             engin.selected_layers.splice(engin.selected_layers.length-1,1)
//         }
//     }








    
// }

















document.body.addEventListener("keyup",function(event){


    delete KeysDown[event.key]
    
    
    // console.log(KeysDown)
})