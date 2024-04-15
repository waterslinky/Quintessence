//ENGIN 2.4
is_server=false
// groups_used=[]

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

// RunFucntionElement(element,false,run_mian_f,["element_child","draw"])


let loops_func=0
function RunFucntionElement(element,reverseOrder=false,run_mian){

    loops_func++
        if(element.elements && element.elements.length!=0){
            element.elements.forEach(element_child => {
                // console.log(element_child)

            
                

            
                if(reverseOrder){
                    


                    
                    
                    RunFucntionElement(element_child,reverseOrder,run_mian)
                        
                        
                    
                    
                    
                    run_mian(element,element_child)

                    

                   

                    
                }
                else{
               
                
                    run_mian(element,element_child)

                    
                    
                    RunFucntionElement(element_child,reverseOrder,run_mian)
                        
                        


                        // run_child_condition
                        

                }




                // reverseOrder

          
            });
        }   
        else{
                    let element_child=element

                    run_mian(element,element_child)
               

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
  


        

        this.layers=[]
        this.layers_stack=false

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

    pause(){
        if(!this.dont_add_time){
            this.start_time_paused=Date.now()
            this.dont_add_time=true
        }

    }

    unpause(){

        if(this.dont_add_time){
            this.time_paused+=Date.now()-this.start_time_paused
            this.dont_add_time=false            
        }
        


    }
    
    loop(time_stamp){
        this.time_stamp=time_stamp
        
        
        loops_func=0
        if(!is_server){
            requestAnimationFrame(this.run_loop());
        }
        
        

        if(this.time_paused>time_stamp){
            // console.log("Error time stamp is out of sync. Time Paused: "+this.time_paused+' Time Stamp: '+time_stamp)
        }
        
        
        this.loop_run_time=((time_stamp-this.time_paused)-this.current_time)
        if(!this.dont_add_time){
            this.all_time+=this.loop_run_time
        }
        // else{
        //     this.time_paused=Date.now()-engin.start_time_paused
        // }

        
        this.current_time=time_stamp-this.time_paused
        
        // console.log(this.current_time)

        



        // console.log(this.all_time)
        
        // console.log(this.all_time+"CURRENT: "+this.current_time+"frezz time"+this.time_paused)

        
        while(this.all_time>=this.time_step && this.dont_add_time==false){
            

            let groups_used=[]
            this.layers.forEach(layer => {
                // if(layer.elements){
                    // console.log("2")

                    RunFucntionElement(layer,false,function(element){

                        // console.log(element)
                        element.active=true
                        element.is_child=false

        // this.find_pos()

                        

                    })


                    


                    // layer.elements.forEach(element => {
                    //     element.active=true
                    //     // console.log("G")
                    // });
                // }
                
            })


            for(let i=this.layers.length-1;i>=0;i--){
                let layer=this.layers[i]


                                    
                if(layer.name=="default"){
                    RunFucntionElement(layer,false,function(element,element_child){

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
                            element_child.active=false
                            // console.log(element_child)
                            RunFucntionElement(element_child,false,function(element,element_child){
                                element_child.active=false

                                
                            },["element_child"])
                        }

                        if(element_child.groups){
                            element_child.groups.forEach(group => {
                                groups_used.push(group)
                        // console.log(groups_used)

                            });
                        }
            

                    },["element_child","element"])
                }
    
                this.selected_layers.forEach(selected_layer => {
                    if(selected_layer!="default"){
                        RunFucntionElement(layer,false,function(element,element_child){

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
                                // element_child.active=false
                                // console.log(element_child)
                                RunFucntionElement(element_child,false,function(element,element_child){
                                    // element_child.active=false
                                },["element_child"])
                            }

                            if(element_child.groups){
                                element_child.groups.forEach(group => {
                                    groups_used.push(group)
                            // console.log(groups_used)

                                });
                            }
                

                        },["element_child","element"])
                    }
                })




            }

            // this.layers.forEach(layer => {
             
            //         RunFucntionElement(layer,false,function(element){

                        
            //             // if(element.active){
            //             //     // if(element.child){
            //             //     //     element.child.find_pos(element)
            //             //     //     element.child.is_child=true
            //             //     //     // 
                              
                            
            //             //     // }
            //             //     // else{
            //             //         if(element.find_pos && !element.is_child){
            //             //             // element.find_pos()

            //             //         }
                                
            //             //     // }
            //             // }
                        

            //         },["element"])


                    

            // })


        

            


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




            

            if(this.layers_stack){


                this.layers.forEach(layer => {
                        
             
                    if(layer.elements  && !layer.paused){
                        if(layer.name=="default"){
                            if(layer.update){
                                layer.update()
                            }  
                    

                        
                            
                    
                        RunFucntionElement(layer,false,function(element_child){


                            if(element_child.active){
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
                                        RunFucntionElement(layer,true,function(element_child){


                                            if(element_child.active){
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
                
            
            

            
            
                
                
            }

            
           
            

            this.update()

 
         
            this.all_time-=this.time_step
        }

        //DRAWS SCREEN
        if(!is_server){

            this.draw()

            // groups_used=[]
            this.layers.forEach(layer => {
                        
                
                if(layer.elements){
                    
                    if(layer.name=="default"){
                        if(layer.draw){
                            layer.draw()
                        }  
                        
                            
                        
                        
                        RunFucntionElement(layer,false,function(element_child){


                            if(element_child.active){
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
        

                this.layers.forEach(element => {
                    if(element.elements || element.draw){
                
                        this.selected_layers.forEach(selected_layer => {
                            if(selected_layer!="default"){
                                if(element.name==selected_layer){


                                    if(element.draw){
                                        element.draw()
                                    }     
                        


                                // RunFucntionElement(element,"draw")
                                RunFucntionElement(element,false,function(element_child,FunctionName){


                                    if(element_child.active){
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
            


        }
        else{
            setImmediate(() => {
                this.run_loop()()
            });
        }
    }
    run_loop(){


        return (time_stamp) => {
            if(is_server){
                let date = new Date();
                time_stamp=date.getTime()-start_time;
            }


       
            this.loop(time_stamp)
        
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
                            if(layer_2.name==layer && layer_2.on_removed){
                                layer_2.on_removed()
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





                this.selected_layers.push(selected)
            }
    
    

            

        
  
    }

    set_game_state(game_state){

        this.draw=game_state.draw
        
        this.update=game_state.update

        this.layers=game_state.layers

        if(game_state.after_layers_draw){
            this.after_layers_draw=game_state.after_layers_draw
        }
        

    }


}

if(is_server){
    module.exports={engin_class}
}

