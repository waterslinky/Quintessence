
// alert("T")
// function start_screen_setup(){
    stars=[]


    function save_server_selector(){

        
        localStorage.setItem("name_1", name_1.text)
        localStorage.setItem("address_1", address_1.text) 
        localStorage.setItem("port_1", port_1.text) 
        
        localStorage.setItem("name_2", name_2.text)
        localStorage.setItem("address_2", address_2.text) 
        localStorage.setItem("port_2", port_2.text) 

        localStorage.setItem("name_3", name_3.text)
        localStorage.setItem("address_3", address_3.text) 
        localStorage.setItem("port_3", port_3.text) 

    }
    


    display_icon=new button({
        "x":0,
        "y":0,
        "size_x":80,
        "size_y":80,
        "on_clicked":function(){
    
            if(mouse_down && mouse_x>=this.x && mouse_x<=this.x+this.size_x && mouse_y>=this.y && mouse_y<=this.y+this.size_y){
    
                    
            engin.change_selected_layer("name_input","push")

    
                
                
            }
    
            
        },
        "image":icon
    })
    display_name=new text({"x":90,"y":40,"text":account.name,"size":48,"color":"rgb(255,255,255)","align":"start","base_line":"middle"})

    start_screen_elements=[new align({

        "elements":[
        //start BUTTON
        new button({
            "x":innerWidth/2,
            "y":innerHeight/2,
            "size_x":400,
            "size_y":200,
            "on_clicked":function(){
             
                // alert("clicked")
                try{
  if(account.name==""){
    
                    
            engin.change_selected_layer("name_input","push")

                }
                else{
                    if(multiplayer_allod){
                        
            engin.change_selected_layer(["online_options"],"set")

                    }
                    else{
                        music.pause()
                

                        engin.set_game_state(world)

                        if(multiplayer){
        
                            emit("name",player.name)
                        }
        
                    }
                }   
                }
                catch(err){
                    alert(err)
                }
                  
                     
            },
            "image":start_button,
            "align":"center",
            "hover_brightness":1.5
        }),
        //CREDITS BUTTON

        new button({
            "x":(innerWidth/2)-((31*15)/2),
            "y":(innerHeight/2)+125,
            "size_x":31*15,
            "size_y":10*15,
            "on_clicked":function(){
                
            engin.change_selected_layer(["credits"],"set")

                
            },
            "image":credits_button,
            "hover_brightness":1.5
        }),

        
        //Icon and name
        display_icon,
        display_name,

        //version display
        new text({"x": 10 ,"y": innerHeight ,"text": version ,"size":48,"color":"rgb(255,255,255)","align":"start"})
        
        ]
        ,groups:["ui"]


    })]
    


    
    


        
    





    // ,groups:["ui"]
    

    
    



    












    for(let i=0;i<200;i++){
        stars.push([

            Math.random()*innerWidth,Math.random()*innerHeight,Math.random(),"dark",0

        ])
    }



    function draw(){
        clear_screen("0,0,0")
    
        stars.forEach(star => {
            // [star_x,star_y,start_time,end_time]=star
            
            // if(cyle=="bright"){
            //     screen.fillStyle = "rgb(255,255,255,"+(  (((end_time-engin.time_in_loop)/(end_time-start_time))/2)+.5  )+")" 
            // }
            // if(cyle=="dark"){
            //     screen.fillStyle = "rgb(255,255,255,"+(  1-((((end_time-engin.time_in_loop)/(end_time-start_time))/2)+.5 ) )+")" 
            // }
            
            // if(Math.random()<.1){
                // console.log((end_time-engin.time_in_loop)/(end_time-start_time))
            // }


            [star_x,star_y,l]=star
            
            // if(cyle=="bright"){
            screen.fillStyle = "rgb(255,255,255,"+(  l )+")" 
            // }
            // if(cyle=="dark"){
            //     screen.fillStyle = "rgb(255,255,255,"+(  1-((((end_time-engin.time_in_loop)/(end_time-start_time))/2)+.5 ) )+")" 
            // }
            
            // if(Math.random()<.1){
            //     console.log((end_time-engin.time_in_loop)/(end_time-start_time))
            // }


            
    
            // screen.beginPath()
            // screen.arc(star_x, star_y, 3+((((end_time-engin.time_in_loop)/(end_time-start_time)))), 0, 2 * Math.PI)
            // screen.fill()

                        screen.beginPath()
            screen.arc(star_x, star_y, 3+(l*2), 0, 2 * Math.PI)
            screen.fill()
        });
    
    }

    function update(){
      
        // console.log(engin.time_in_loop)
        for(let i=0;i<stars.length;i++){
            if(stars[i][3]=="dark"){

                stars[i][2]+=.01
            }
            if(stars[i][3]=="light"){

                stars[i][2]-=.045
            }






            if(stars[i][2]>1){
                stars[i][2]=1
                stars[i][3]="light"
            }
            else if(stars[i][2]<.1){


                stars[i][2]=.1

                stars[i][3]="wait"
            
            }

            if(Math.random()<.0001){
                // alert([engin.time_in_loop,stars[i][4],"3"])
            }
            
            if(stars[i][3]=="wait" && stars[i][4]<=engin.time_in_loop){
                stars[i][4]=engin.time_in_loop+((500+(Math.random()*3000))*4)
                stars[i][3]="dark"
                // alert("d")



            }
            // else if(stars[i][2]<=.3){
            //     // stars[i][2]=0

            //     stars[i][3]="down"
            // }
            
            // stars[i][2]+=.01
            // if(stars[i][0]>innerWidth+3){
            //     stars[i][0]=-3
                
            // }
            // if(engin.time_in_loop>stars[i][3]){
                
            //     // stars[i][2]=engin.time_in_loop
            //     // stars[i][3]=engin.time_in_loop+3500+(Math.random()*4500)



                

            // }
        }
    
    }

    start_screen_setup= {
        "draw":draw,
        "update":update,

        "layers":[
            {"name":"default","elements":start_screen_elements},
            {"name":"credits","elements":credits_elements},
            {"name":"name_input","elements":name_input_elements},
            {"name":"server_ips_elements","elements":server_ips_elements},
            {"name":"online_options","elements":online_options_elements},
            {"name":"pick_world","elements":pick_world_elements},
            {"name":"mod_selector","elements":mod_selector_elements},
            {"name":"open_mod_directory","elements":open_mod_directory_elements}

        ],

        
        "selected_layers":[]

    }


// }
