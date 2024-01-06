//ENGIN 2.4
is_server=false

let time_stamp=0

// alert("ENGIN")
function RunFucntionElement(element,FunctionName,reverseOrder=false){
    // try{
        // let groups_used=[]
            if(element.elements){
        element.elements.forEach(element_child => {
            
            function run_mian(){
                if(eval("element_child."+FunctionName)){

                    eval("element_child."+FunctionName+"()" )
                    // console.log(element_child.groups)   

                    // if(element_child.groups){
                    //     element_child.groups.forEach(group => {
                    //         groups_used.push(group)
                            
                    //     });
                        // console.log(element_child.groups)   
                    // }
                }
            }

            function run_child(){
                 try{
                if(element_child.elements.length){
                    // alert("g")

                    RunFucntionElement(element_child,FunctionName)
                    // alert("g")
                    
                }
            }
            catch{}           
            }

            // let group_found=false
            // groups_used.forEach(group => {
            //     array.forEach(element => {
                    
            //     });
            //     if(group==)
                
            // });
            if(reverseOrder){
                run_child()
                run_mian()

                
            }
            else{
                run_mian()
                run_child()   
            }




            // reverseOrder

            // RunFucntionElement(element_child,FunctionName)
        });
    }   
    if(!element.elements.length){
        
        // alert("F")
        eval("element."+FunctionName+"()" )

    }
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
    loop(time_stamp){
    
        
        
        if(!is_server){
            requestAnimationFrame(this.run_loop());
        }
        
        
        this.loop_run_time=time_stamp-this.current_time
        this.all_time+=this.loop_run_time
        this.current_time=time_stamp
        

        
        while(this.all_time>=this.time_step){
            this.time_in_loop=this.current_time-this.all_time

            if(this.layers_stack){


                this.layers.forEach(layer => {
                        
             
                    if(layer.elements){
                        if(layer.name=="default"){
                            if(layer.update){
                                layer.update()
                            }  
                    

                        
                    
                      
                        RunFucntionElement(layer,"update")

        
                    }

                    }
                });
        

                this.layers.forEach(element => {
                    if(element.elements || element.update){
                
                        this.selected_layers.forEach(selected_layer => {
                            if(selected_layer!="default"){
                                if(element.name==selected_layer){

                                    
                                    if(element.update){
                                        element.update()
                                    }     
                        


                                RunFucntionElement(element,"update")

                                
                        
                        
                            }
                            }
                            
                        });
                    }
                });
            
            

            
            
                
                
            }

            else{
                 let layer_found=false
            for(let i=0;i<this.layers.length;i++){
                let element=this.layers[i]
        
                if(element.update || element.elements){
                
                    for(let i=this.selected_layers.length-1;i>=0;i--){
                        let element_2=this.selected_layers[i]
                    
                        if(element.name==element_2){
                            layer_found=true
                            

                            if(!element.paused){
                                RunFucntionElement(element,"update",true)
                                // console.log(element.paused)

                            }
                            // else{
                            //     console.log()
                            // }

                            // if(element.update){
                            //     element.update()
                            // }

                         
                            
                            


                        }
                    };
                }
            };

            

            if(layer_found==false){
                
                

                this.layers.forEach(layer => {
            

                    if(layer.elements || layer.update){

                    
                    // selected_layers.forEach(element_2 => {
                        if(layer.name=="default"){
                            if(!layer.paused){
                                // console.log(layer.paused)
                                if(layer.update){
                                    layer.update()
                                }
                                
                        
                                
                                // element.elements.forEach(element_2 => {
                                //     if(element_2.update){
                                //         element_2.update()
                                //     }
                                    
                                        
                                        
                                // });

                            
                                RunFucntionElement(layer,"update")
                            }
                            

            
                        }
                    // });
                    }
                });
            }

            }

           
            

            this.update()

 
         
            this.all_time-=this.time_step
        }

        //DRAWS SCREEN
        if(!is_server){

            this.draw()

            if(this.layers_stack){

                let groups_used=[]
                this.layers.forEach(layer => {
                        
             
                    if(layer.elements){
                        if(layer.name=="default"){
                            if(layer.draw){
                                layer.draw()
                            }  
                    

                        
                    
                      
                        RunFucntionElement(layer,"draw")

        
                    }
                    // console.log("S")

                    }

                    if(layer.groups){
                        layer.groups.forEach(group => {
                            groups_used.push(group)
                            console.log(groups_used)
                        });

                    }
                    
                });
        

                this.layers.forEach(element => {
                    if(element.elements || element.draw){
                
                        this.selected_layers.forEach(selected_layer => {
                            if(selected_layer!="default"){
                                if(element.name==selected_layer){


                                    if(element.draw){
                                        element.draw()
                                    }     
                        


                                RunFucntionElement(element,"draw")

                                
                        
                        
                            }
                            }
                            
                        });
                    }
                });
            
            

            
            
                
                
            }
            else{
                if(this.selected_layers.length==0){
                    this.layers.forEach(element => {
            
                        if(element.name=="default"){
                            // console.log("f")
                            if(element.draw){
                                element.draw()
                            }


                            if(element.elements){
                
                
                            
                                // element.elements.forEach(element_2 => {
                                //     element_2.draw() 
                                // });
                                RunFucntionElement(element,"draw")






                                
                
                            }
        
                        }
                    });
                }



                
                else if(this.selected_layers.length==1){
                    this.layers.forEach(element => {
                        if(element.elements || element.draw){
                        
                            this.selected_layers.forEach(element_2 => {
                                if(element.name==element_2){
                                    // layer_found=true
                            
                                    if(element.draw){
                                        element.draw()
                                    }
                            
                                    // if(element.elements){
                                    //     element.elements.forEach(element_child => {
                                    //         element_child.draw()    
                                    //     });
                                    // }

 
                                    RunFucntionElement(element,"draw")
                                    
                            
                            
                                }
                            });
                        }
                    });
                }

                else{

                    this.layers.forEach(element => {
            
            
                        if(element.elements){
                
                
                            if(element.name==this.selected_layers[this.selected_layers.length-1]   ){
                                
                                RunFucntionElement(element,"draw")
                            
                                // element.elements.forEach(element_2 => {
                                //     element_2.draw()
                                        
                                        
                                // });
                
                            }
        
                        }
                    });
                }
            }

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

