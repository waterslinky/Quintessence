//ENGIN 2.4
if(typeof is_server=="undefined"){
    is_server=false
    // alert("F")
}

multiplayer=false

has_interacted=false
// groups_used=[]

let start_time=new Date()
let time_stamp=0

function destrinify(string){
    let new_string=""
    for(let i=0;i<string.length;i++){
        if(string[i]!="'" && string[i]!='"' ){
            // alert(string[i])
            new_string+=string[i]
        }
        
    }
    return new_string
}







// alert("ENGIN")


// function run_child(element_child,FunctionName){
//                     try{

//                         if(element_child.elements.length){
//                             // alert("g")

//                             RunFucntionElement(element_child,FunctionName)
//                                 // alert("g")
                                
//                         }

//                     }
//                     catch{}           
// }


// let loops_func=0
function RunFucntionElement(element,reverseOrder=false,run_mian,prams){
    
        // loops_func++
        if(element.elements && element.elements.length!=0){
            element.elements.forEach(element_child => {
                // console.log(element_child)

            
                

            
                if(reverseOrder){
                    


                    
                    
                    RunFucntionElement(element_child,reverseOrder,run_mian,prams)
                        
                        
                    
                    
                    
                    run_mian(element,element_child)

                    

                   

                    
                }
                else{
               
                    
                
                    run_mian(element,element_child)

                    // run_mian(prams_string)
                    

                    
                    
                        RunFucntionElement(element_child,reverseOrder,run_mian,prams)
                        
                        


                        // run_child_condition
                        

                }




                // reverseOrder

          
            });
        }   
        else{
                    // let element_child=element

                    run_mian(element,false)
                    // window[function_name](a,b)


        }
     
  







    // if(element.groups && groups_used){
    //     element.groups.forEach(group => {
    //         groups_used.push(group)
    //     });
    //     console.log(groups_used)
    // } 




 
    // }
  


    // }

    // catch{

    //     alert("F")
        
    //     eval("element."+FunctionName+"()" )
                
    // }
 
        // alert("F")
        // eval("element."+FunctionName+"()" )
                
}

class engin_class{
    constructor(){
        this.time_step=1000/30
        this.all_time=0
        this.current_time=0
        this.engin_current_time=0

        this.dont_add_time=false
        this.start_time_paused=0
        this.time_paused=0

        this.akf_timer=false
        this.afk_event=function(){}
  
        this.message_time=0
        this.message_text=""


        this.can_freez=true

        

        

        this.layers=[]
        // this.layers_stack=false

        //IF layers stack then they will render one after teh other if they do not then only one renders
        this.selected_layers=[]


        if(!is_server){
            requestAnimationFrame(this.run_loop());
        }
        else{
            setImmediate(() => {
                this.run_loop()()
            });
        }
    }

    add_transition(fade_in_time=3000,hold_time=1000,fade_out_time=3000,after_hold_function=function(){}){

        if(!this.in_transition){
            this.after_hold_function=after_hold_function

    
            this.fade_in_transition_end_time=this.time_in_loop+fade_in_time
            this.fade_in_transition_time=fade_in_time


            this.hold_transition_end_time=this.time_in_loop+fade_in_time+hold_time



            this.fade_out_transition_end_time=this.time_in_loop+fade_in_time+hold_time+fade_out_time
            this.fade_out_transition_time=fade_out_time

            this.in_transition=true            
        }


  

    }


    message(text,add_time=2500){
        sessionStorage.setItem("message", text);
        this.message_time=this.current_time+add_time
        this.message_text=text
    }

    pause(){
        if(!this.dont_add_time && this.can_freez){
            this.start_time_paused=Date.now()
            this.dont_add_time=true
        }

    }

    unpause(){

        if(this.dont_add_time && this.can_freez){
            this.time_paused+=Date.now()-this.start_time_paused
            this.dont_add_time=false            
        }


    }
    
    loop(){
        // this.time_stamp=time_stamp
        
        
        // loops_func=0
        if(!is_server){
            requestAnimationFrame(this.run_loop());
        }
        
        

        // if(this.time_paused>time_stamp){
        //     // console.log("Error time stamp is out of sync. Time Paused: "+this.time_paused+' Time Stamp: '+time_stamp)
        // }
        
        
        // this.loop_run_time=((time_stamp-this.time_paused)-(this.engin_current_time-this.time_paused))
        // if(this.loop_run_time<0){
        //     console.log("Error time stamp is out of sync. Time_stamp: "+time_stamp+" this.time_paused: "+this.time_paused+"this.current_time: "+this.current_time)
        // }
        if(!this.dont_add_time){
            this.all_time+=this.loop_run_time
        }
        // else{
        //     this.time_paused=Date.now()-engin.start_time_paused
        // }
        this.engin_current_time=this.time_stamp
        
        
        
        // console.log(this.current_time)

        



        // console.log(this.all_time)
        
        // console.log(this.all_time+"CURRENT: "+this.current_time+"frezz time"+this.time_paused)


        if(this.akf_timer && this.all_time>=this.akf_timer && this.dont_add_time==false && this.afk_event && (connected==undefined || connected==true)){
            // alert("RTRT")
            this.afk_event()
            



        }

        
        while(this.all_time>=this.time_step && this.dont_add_time==false){

            if(this.before_update){
                this.before_update()
            }

            if(!is_server && music!=undefined && (music.paused || music.ended) && has_interacted){
                try{
                    music.play()
                }
                catch{
                    
                }
            }


            this.layers.forEach(layer => {
             
                if(layer.name==this.selected_layers[this.selected_layers.length-1]){
              
                    if(layer.keys){
                        layer.keys()
                    }
                }
                else if(layer.name=="default"){
                    if(this.selected_layers.length==0){
                        if(layer.keys){
                            layer.keys()
                        }                        
                    }
                    else{
                        if(layer.keys){
                            let old_KeysDown=KeysDown
                        KeysDown={}

                            layer.keys()
                            KeysDown=old_KeysDown
                        }                        
                    }

                }
                else{
                    if(layer.keys){
                        let old_KeysDown=KeysDown
                        KeysDown={}
                        layer.keys()
                        KeysDown=old_KeysDown
                    }   
                }
                
            });
            

            
            this.layers.forEach(layer => {
                // if(layer.elements){
                    // console.log("2")

                    RunFucntionElement(layer,false,function(element){

                        // console.log(element.render_box!=undefined)

                        element.is_child=false

                        if(element.reactivate_disabled==undefined || !element.reactivate_disabled){
                            element.active=true


                            
                            


                            if(element.reactivate!=undefined && element.reactivate==false){
                                element.active=false
                            }
                        }



        // this.find_pos()

                        

                    })

        
            //         if(this.selected_layers.includes(layer.name)){
            //             // layer.active=true
            //             RunFucntionElement(layer,false,function(element,element_child){

            //                 // console.log(element)
            //                 element.active=true
            //                 if(element_child){
            //                     element_child.active=true
            //                 }
                            
            //                 // element.is_child=false
    
            // // this.find_pos()
    
                            
    
            //             })
            //         }
            //         else{
            //             // if(layer.name!="default"){
            //                 RunFucntionElement(layer,false,function(element){

                                
            //                     console.log(element)
            //                     element.active=false
            //                     // element.is_child=false
        
            //     // this.find_pos()
        
                                
        
            //                 })                            
            //             // }

            //         }
            //         if(layer.name=="default"){
            //             RunFucntionElement(layer,false,function(element){

                            
            //                 // console.log(element)
            //                 element.active=true
            //                 // element.is_child=false
    
            // // this.find_pos()
    
                            
    
            //             })                            
            //         }


                    


                    // layer.elements.forEach(element => {
                    //     element.active=true
                    //     // console.log("G")
                    // });
                // }
                
            })

            



            // console.log("start")

            let groups_used=[]

            









            // console.log(groups_used+"PRE A")
// console.log("S")
            for(let i=this.layers.length-1;i>=0;i--){
                let layer=this.layers[i]
                
                

                // console.log(groups_used+"A")

                

                this.selected_layers.forEach(selected_layer => {
                    if(layer.name==selected_layer){
                        
                                        
                        // console.log("B")

                        
               
                        if(selected_layer!="default"){
                            RunFucntionElement(layer,false,function(element,element_child){
                                if(element.active && element.groups || element_child.active==undefined){
                                    

                                    // console.log(element)
                                    // element.active=true
                                    let group_found=false

                                    // console.log(groups_used)

                                    if(element.groups){
                                        // console.log(groups_used+"B2")
                                        groups_used.forEach(group_used => {
                                            element.groups.forEach(group => {
                                                // console.log("R")

                                                if(group==group_used){
                                                    group_found=true
                                                                                        
                                                    // console.log("FOUND"+group+group_used)
                                                }
                                            });
                                        });                            
                                    }


                                    if(group_found){
                                        // element_child.active=false
                                        // console.log(element_child)
                                        RunFucntionElement(element,false,function(element,element_child){
                                            // element.active=false
                                        })
                                    }

                                    if(element.groups){
                                        element.groups.forEach(group => {
                                            groups_used.push(group)
                                    // console.log(groups_used)

                                    });
                                }
                    
                                }
                            })
                        }                        
                    }

                })

                





            }
            // console.log("E")


            for(let i=this.layers.length-1;i>=0;i--){
                let layer=this.layers[i]
                
                if(layer.name=="default"){
                        RunFucntionElement(layer,false,function(element,element_child){
                            // console.log(element)
                            if(element.active || element_child.active==undefined){
                                // console.log(layer)
                                // element.active=true
                                let group_found=false

                                // console.log(groups_used)

                                if(element_child.groups){
                                    groups_used.forEach(group_used => {
                                        element_child.groups.forEach(group => {
                                            // console.log("R")

                                            if(group==group_used){
                                                group_found=true

                                                
                                                // console.log(groups_used,element_child)
                                            }
                                        });
                                    });                            
                                }


                                if(group_found){
                                    // element.active=false
                                    // console.log(element_child)
                                    RunFucntionElement(element,false,function(element,element_child){
                                        element.active=false

                                        
                                    })
                                }

                                if(element_child.groups){
                                    element_child.groups.forEach(group => {
                                        groups_used.push(group)
                                // console.log(groups_used)

                                    });
                                }                            
                            }

                

                        })
                }

            }

            // console.log(groups_used+"C")
            // console.log("END")





        

            


            // this.layers.forEach(layer => {
            //     // if(layer.elements){
            //         // console.log("2")

            //         RunFucntionElement(layer,false,function(element){

                        
            //             element.active=true
                        

            //         },["element"])


                    


            //         // layer.elements.forEach(element => {
            //         //     element.active=true
            //         //     // console.log("G")
            //         // });
            //     // }
                
            // })




            this.time_in_loop=this.current_time-this.all_time

            // if(this.layers_stack){


                this.layers.forEach(layer => {
                        
             
                    if(layer.elements  && !this.paused){
                        if(layer.name=="default"){
                            // console.log('tt')
                            if(layer.update){
                                layer.update()
                            }  
                    

                        
             
                            RunFucntionElement(layer,false,function(element,element_child){
    
                                if(element_child.active || element_child.active==undefined){
                                    if(element_child.update){
                                        element_child.update()
                                    }
                                }
    
                                
                               
                            
                            })
                      
                        // RunFucntionElement(layer,"update")

        
                    }

                    }
                });
                

              
        

                this.layers.forEach(layer => {
                    if(!layer.paused){
                        
                        if(layer.elements || layer.update){
                    
                            // console.log("RE")
                            this.selected_layers.forEach(selected_layer => {
                                if(selected_layer!="default"){
                                    // console.log(layer.name==selected_layer   && !layer.paused==false)

                                    
                                        if(layer.name==selected_layer){
                                            // console.log("reRUN"+(layer.paused==true)+layer.paused)
                                            
                                            if(layer.update){
                                                layer.update()
                                            }     
                                


                                        // RunFucntionElement(element,"update")
                                        RunFucntionElement(layer,false,function(element,element_child){

                                            if(element_child.active  || element_child.active==undefined){
                                                if(element_child.update){
                                                    element_child.update()
                                                }
                                            }
                
                                            
                                           
                                        
                                        })

                                        // update

                                        
                                
                                
                                        }                                    
                                    

                                }
                                
                            });
                        }
                    }
                });

                this.layers.forEach(layer => {
                    if(this.selected_layers.includes(layer.name) || layer.name=="default"){
                        RunFucntionElement(layer,false,function(element){

                            
                            if((element.active || element.active==undefined) && element.elements!=undefined){
                                element.elements.forEach(child_element => {
                                    if(child_element.find_pos && child_element.is_child==false){
                                        
                                        child_element.find_pos(element)

                                        
                                        child_element.is_child=true
                                    }
                                    // console.log(child_element)
                                    
                                    // console.log("g")
                                });
                                // if(element.child){
                                //     // console.log(element)
                                //     element.child.find_pos(element)
                                //     element.child.is_child=true
                                
                                
                                // }
                                // else{
                                //     if(element.find_pos && !element.is_child){
                                //         element.find_pos()

                                //     }
                                    
                                // }


                                
                            }
                            

                        })                        
                    }
             



                    

                })
                
            
            

            
            
                
                
            // }

            
           
            

            this.update()

 
         
            this.all_time-=this.time_step
        }

        //DRAWS SCREEN
        if(!is_server){

            this.draw()

            
            this.layers.forEach(layer => {
                        
                
                if(layer.elements){
                    
                    if(layer.name=="default"){
                        if(layer.draw){
                            layer.draw()
                        }  
                        
                            
                        
                        
                        RunFucntionElement(layer,false,function(element,element_child){

                            if(element_child.active || element_child.active==undefined){
                                if(element_child.draw){
                                    element_child.draw()
                                }
                            }

                            
                           
                        
                        })

                        // RunFucntionElement(layer,"draw")

            
                    }
                        
                }
                // console.log(layer.groups)

                //     if(layer.groups){
                //         console.log(layer.groups)

                //         layer.groups.forEach(group => {
                //             groups_used.push(group)
                //             console.log(groups_used)
                //         });

                //     }
                    
            });
        
            // let groups_used=[]
            this.layers.forEach(layer => {
                    if(layer.elements || layer.draw){
                
                        this.selected_layers.forEach(selected_layer => {
                            if(selected_layer!="default"){
                                if(layer.name==selected_layer){


                                    if(layer.draw){
                                        layer.draw()
                                    }     
                        


                                // RunFucntionElement(element,"draw")
                                RunFucntionElement(layer,false,function(element,element_child){

                                    if(element_child.active || element_child.active==undefined){
                                        if(element_child.draw){
                                            element_child.draw()
                                        }
                                    }
        
                                    
                                   
                                
                                })


                                
                        
                        
                            }
                            }
                            
                        });
                    }
            });
            
            

            
            
                
                
            

            if(this.after_layers_draw){
                this.after_layers_draw()
            }


            if(this.cursor && this.cursor.image!=undefined){

                draw_image(this.cursor.image,0,0,this.cursor.image.width,this.cursor.image.height,mouse_x-(this.cursor.size_x*0.5),mouse_y-(this.cursor.size_y*0.5),this.cursor.size_x,this.cursor.size_y);
                
            }
            


        }
        else{
            setImmediate(() => {
                this.run_loop()()
            });
        }


        if(!is_server){
            let message_data=sessionStorage.getItem("message")
            if(message_data && this.message_text=="" ){
                this.message(message_data,5000)
            }

            if(this.message_time>=this.current_time){
                screen.font = "60px serif";
                screen.textAlign = "center";
                screen.fillStyle = "rgb(255,255,255)";
                

                screen.fillText(this.message_text, innerWidth/2, 100);            
            }
            else{
                this.message_text=""
                sessionStorage.removeItem("message");
            }            
        }
       

        // crafting_points.forEach(point => {
        //     screen.beginPath();
        //     screen.arc(point[0], point[1], 10, 0, 2 * Math.PI);
        //     screen.fill();
        // });


        //Draws Transitions
        if(this.fade_in_transition_end_time){
            // console.log(this.end_transition_time+"TEST"+this.time_in_loop)

            if(this.fade_in_transition_end_time>=this.time_in_loop){
                // console.log("TEST")



                screen.fillStyle = "rgb(0,0,0,"+(1-((this.fade_in_transition_end_time-this.time_in_loop)/this.fade_in_transition_time))+")"
                screen.fillRect(0, 0, innerWidth, innerHeight)                
            }
            else{
                this.fade_in_transition_end_time=false

                screen.fillStyle = "rgb(0,0,0)"
                screen.fillRect(0, 0, innerWidth, innerHeight)  
            }

        }

        //Draw Hold Time
        else if(this.hold_transition_end_time){
            // console.log(this.end_transition_time+"TEST"+this.time_in_loop)

            if(this.hold_transition_end_time>=this.time_in_loop){
                // console.log("TEST")



                screen.fillStyle = "rgb(0,0,0)"
                screen.fillRect(0, 0, innerWidth, innerHeight)                
            }
            else{
                this.hold_transition_end_time=false

                this.after_hold_function()

                screen.fillStyle = "rgb(0,0,0)"
                screen.fillRect(0, 0, innerWidth, innerHeight)  
            }

        }

        //Draw fade Out Transition
        else if(this.fade_out_transition_end_time){
            // console.log("Test")

            if(this.fade_out_transition_end_time>=this.time_in_loop){
                // console.log("TEST")



                screen.fillStyle = "rgb(0,0,0,"+((this.fade_out_transition_end_time-this.time_in_loop)/this.fade_out_transition_time)+")"
                screen.fillRect(0, 0, innerWidth, innerHeight)                
            }
            else{
                this.fade_out_transition_end_time=false

                this.in_transition=false

            }

        }



    }

    set time_in_loop(val){
    }

    get time_in_loop(){
        return this.engin_current_time-this.all_time
    }

    set current_time(val){
    }

    get current_time(){
        return this.time_stamp-this.time_paused
    }

    set loop_run_time(val){
    }

    get loop_run_time(){
        // console.log(time_stamp)
        let val = ((this.time_stamp-this.time_paused)-(this.engin_current_time-this.time_paused))

        if(val<0){
            console.log("Error time stamp is out of sync. Time_stamp: "+this.time_stamp+" this.time_paused: "+this.time_paused+"this.current_time: "+this.current_time)
        }

        return val
    }

    set time_stamp(val){
    }

    get time_stamp(){


       
        return new Date().getTime()-start_time;
    }


    

     
    run_loop(){


        return (time_stamp) => {
            // if(is_server){
                let date = new Date();
                time_stamp=date.getTime()-start_time;
            // }


       
            // this.loop(time_stamp)
            this.loop()

            
        
        }
    }


    update(){
 
    }
    draw(){

    }


    change_selected_layer(selected,operation="set"){
            // alert("rfninrf"+operation)


            
            if(operation=="set"){
                let all_layers=[]

                selected.forEach(selected_layer => {
                    all_layers.push(selected_layer)
                });
        
                // alert(this.selected_layers)
                this.selected_layers.forEach(selected_layer => {
                    if(!all_layers.includes(selected_layer)){
                        all_layers.push(selected_layer)
                    }
                    
                });
        
        
        
        
        
                let old_layers=this.selected_layers
            
                this.selected_layers=selected

                all_layers.forEach(layer => {
                    if(old_layers.includes(layer)   ){
                        if(!this.selected_layers.includes(layer)   ){
                        // alert("Remove "+layer)

                        this.layers.forEach(layer_2 => {
                            // alert(layer.name)
                            if(layer_2.name==layer){
                            //     // layer_2.on_removed()

                            RunFucntionElement(layer_2,false,function(element,element_child){
                           
                      

                                if(element_child.on_removed!=undefined){
                                    element_child.on_removed()
                                }
                                
        
                            })

                            //     // if(layer_2.elements){
                            //     //     layer_2.elements.forEach(element => {
                            //     //         if(element.on_removed){
                            //     //             element.on_removed()
                            //     //         }
                            //     //     });                                    
                            //     // }



                            }


                        });

                        }
                    }
                    if(!old_layers.includes(layer)   ){
                        if(this.selected_layers.includes(layer)   ){
                        // alert("1"+layer)
                        }
                    }
                    
                });
        
            }
            // alert(operation)

            if(operation=="push"){
                // alert("add "+selected)


                this.layers.forEach(layer => {
                    // alert(layer.name)
                    if(layer.name==selected && layer.on_added){
                        layer.on_added()
                    }
                });




                if(this.selected_layers.includes(selected)==false){
                    this.selected_layers.push(selected)

                
                    if(this.layer_added_events){
                        this.layer_added_events.forEach(event => {
                            event()
                        })
                    }
                }
                
            }
    
    

            

        
  
    }

    set_game_state(game_state){

        this.draw=game_state.draw
        
        this.update=game_state.update

        this.layers=game_state.layers

        if(game_state.layer_added_events){
            this.layer_added_events = game_state.layer_added_events
        }
        

        // this.keys=typeof game_state.keys!="undefined" ? game_state.keys : undefined

        if(game_state.after_layers_draw){
            this.after_layers_draw=game_state.after_layers_draw
        }

        if(game_state.before_update){
            this.before_update=game_state.before_update
        }
        

    }


}

if(is_server){
    module.exports={engin_class}
}
else{
    document.addEventListener("visibilitychange", () => {
        
        if (document.visibilityState=="visible") {
            //document.title="2D Wolrd (Active)"
            console.log("Page Active") 
            console.log("")

            if(typeof engin!="undefined"){
                engin.unpause()
            }
            
        

            

        } 
        else{
            //document.title="2D Wolrd (Deactive)"
            console.log("Page Deactive")
            console.log("")

            if(typeof engin!="undefined"){
                engin.pause()
            }
        
        
        }
    });


    document.body.addEventListener("keydown",function(event){
        let layer_found=false
        

        engin.layers.forEach(layer => {
            // console.log("TTT: "+engin.selected_layers)
            engin.selected_layers.forEach(element_2 => {
                
                if(layer.name==element_2 && layer.active){
                    // console.log("L: "+event.key)
                    layer_found=true
                    if(layer.keys_down){

                        


                        layer.keys_down(event)

                    }
                    // else{
                        RunFucntionElement(layer,false,function(layer){
                            // console.log(layer.text_input)
                                                            
                            if(layer.active && layer.text_input){
                                // layer.text+=event.key
                                // console.log("NEW KEY!"+event.key)

                                layer.addletter(event.key)
                                
                            }
                        })
                    // }
                }
            });
        });
    });

    document.body.addEventListener("mousedown",function(event){
        has_interacted=true
        // console.log("MD -------------------")
        
        engin.layers.forEach(layer => {
            

                    RunFucntionElement(layer,false,function(element){

                    
                        // element.active=true
                        // console.log(element)
                        if(element.last_button_clicked){
                            // console.log("P")
                            element.last_button_clicked=false

                            if(element.on_unselected){
                                element.on_unselected()
                            }
   
                        
                        }

                        if(element.text_button && element.text_button.last_button_clicked){
                            // console.log("P")

                            element.text_button.last_button_clicked=false

                            if(element.on_unselected){
                                element.on_unselected()
                            }
              

                        }
                        



                        

                    })

                
        })

    })
     




}

