

// class engin_class{
//     constructor(){
//         this.time_step=1000/30
//         this.all_time=0
//         this.current_time=0

//         this.layers=[]
//         this.layers_stack=false
//         //IF layers stack then they will render one after teh other if they do not then only one renders
//         this.selected_layers=[]


//         requestAnimationFrame(this.run_loop());
//     }
//     loop(time_stamp){
        
        
//         requestAnimationFrame(this.run_loop());
        
//         this.loop_run_time=time_stamp-this.current_time
//         this.all_time+=this.loop_run_time
//         this.current_time=time_stamp
        

        
//         while(this.all_time>=this.time_step){
//             this.time_in_loop=this.current_time-this.all_time
            
            


//             let layer_found=false
//             this.layers.forEach(element => {
//                 if(element.update || element.elements){
                
//                     this.selected_layers.forEach(element_2 => {
//                     if(element.name==element_2){
//                         layer_found=true

//                         if(element.update){
//                             element.update()
//                         }

//                         if(element.elements){
//                             element.elements.forEach(element_2 => {
//                                 if(element_2.update){
//                                     element_2.update()   
//                                 }
                                
//                             });
//                         }
                        


//                     }
//                 });
//                 }
//             });

            

//             if(layer_found==false){
                
                

//                 this.layers.forEach(element => {
            

//                     if(element.elements || element.update){

                    
//                     // selected_layers.forEach(element_2 => {
//                         if(element.name=="default"){
//                             if(element.update){
//                                 element.update()
//                             }
                            
                    
                            
//                             element.elements.forEach(element_2 => {
//                                 if(element_2.update){
//                                     element_2.update()
//                                 }
                                
                                    
                                    
//                             });
            
//                         }
//                     // });
//                     }
//                 });
//             }

            

//             this.update()

 
         
//             this.all_time-=this.time_step
//         }

//         this.draw()

//         if(this.layers_stack){


//             let layer_found=false
//             this.layers.forEach(element => {
//                 if(element.elements || element.draw){
                
//                     this.selected_layers.forEach(element_2 => {
//                         if(element.name==element_2){
//                             layer_found=true
                    
//                             if(element.draw){
//                                 element.draw()
//                             }
                    
//                             if(element.elements){
//                                 element.elements.forEach(element_2 => {
//                                     element_2.draw()    
//                                 });
//                             }
                            
                    
                    
//                         }
//                     });
//                 }
//             });
        
        
        
//             if(layer_found==false){
        
        
        
//                 this.layers.forEach(element => {
        
        
//                     if(element.elements){
            
            
//                         if(element.name=="default"){
                        
//                             element.elements.forEach(element_2 => {
//                                 element_2.draw()
                                    
                                    
//                             });
            
//                         }
    
//                     }
//                 });
            
        
        
            
//             }
//         }
//         else{
//             if(this.selected_layers.length==0){
//                 this.layers.forEach(element => {
        
        
//                     if(element.elements){
            
            
//                         if(element.name=="default"){
                        
//                             element.elements.forEach(element_2 => {
//                                 element_2.draw()
                                    
                                    
//                             });
            
//                         }
    
//                     }
//                 });
//             }
//             else if(this.selected_layers.length==1){
//                 this.layers.forEach(element => {
//                     if(element.elements || element.draw){
                    
//                         this.selected_layers.forEach(element_2 => {
//                             if(element.name==element_2){
//                                 // layer_found=true
                        
//                                 if(element.draw){
//                                     element.draw()
//                                 }
                        
//                                 if(element.elements){
//                                     element.elements.forEach(element_2 => {
//                                         element_2.draw()    
//                                     });
//                                 }
                                
                        
                        
//                             }
//                         });
//                     }
//                 });
//             }

//             else{

//                 this.layers.forEach(element => {
        
        
//                     if(element.elements){
            
            
//                         if(element.name==   this.selected_layers[this.selected_layers.length-1]   ){
                        
//                             element.elements.forEach(element_2 => {
//                                 element_2.draw()
                                    
                                    
//                             });
            
//                         }
    
//                     }
//                 });
//             }
//         }


//         // this.draw()



        
    






























//     }
//     run_loop(){
//         return (time_stamp) => {

//             this.loop(time_stamp)
        
//         }
//     }


//     update(){
 
//     }
//     draw(){

//     }



//     set_game_state(game_state){

//         this.draw=game_state.draw
        

//         this.update=game_state.update

//         this.layers=game_state.layers
//     }


// }