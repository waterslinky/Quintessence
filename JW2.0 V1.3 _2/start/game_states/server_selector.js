name_1 = new text_controller({
    "text": localStorage.getItem("name_1") ? localStorage.getItem("name_1") : "",


    "text_class":{
        "color":"rgb(255,255,255)",
        "selected_effects_length":1000,
        "image_bar":accended_text_selected_image,
        "text_y_offset":-5,
        "border_image":feather_bar_stretch_image,
        "selected_effects":[["brightness",25,"%",75],["blur",4,"px"]]

    },
    "default_text_class":{

        "color": "rgb(200,200,200,.5)",
        "text":"Server Name",
        "selected_effects_length":1000,
        "border_image":dark_purple_bar_stretch_image,
        "text_y_offset":25



    },

    "shared_traits":{
        "x": innerWidth*0.5,
        "y":((innerHeight/3)*0)+165,    
        "size": 65,    
        "align":"center",
        "base_line":"middle",
        
        
        
        "border_size_multiplier":1.25,
        "border_x_offset":110,
        "border_align":"center",
    

        "make_text_button":true,
        "can_input_text":true,
        "on_unselected":function(){
            save_server_selector()
        },
        "on_entered":function(){
            save_server_selector()
        }
        

    }
})



address_1=new text_controller({

    "text": localStorage.getItem("address_1") ? localStorage.getItem("address_1") : "",

    "text_class":{
        "color":"rgb(255,255,255)",
        "image_bar":accended_text_selected_image
    },

    "default_text_class":{

        "color":"rgb(200,200,200,.5)",
        "text":"Server IP"

    },

    "shared_traits":{
        "x": innerWidth*0.225,
        "y":((innerHeight/3)*0)+280,
            "make_text_button":true,
        "can_input_text":true,
        "size": 65,

        "align": "left",
        "border_image":white_bar_stretch_image,
        "border_size_multiplier":1.25,
        "on_unselected":function(){
            save_server_selector()
        },
        "border_x_offset":110,
        "width":(innerWidth*.55)-250 ,
        "base_line":"middle",
        
        
        
        "after_addletter":function(){
            let index=0

            let address=""
            let port=""

            for(index;index<=address_1.text.length-1 && address_1.text[index]!=":";index++){
                if(address_1.text[index]!=" "){
                    address+=address_1.text[index]
                }
                
            }

            index++

            for(index;index<=address_1.text.length-1;index++){
                if(address_1.text[index]!=" "){
                    port+=address_1.text[index] 
                }
            }

            address_1.text=address
            if(port!=""){
                port_1.text=port
                address_1.text_button.last_button_clicked=false
                port_1.text_button.last_button_clicked=true
            }
            

            // console.log(address)
            // console.log(port)


            // address_1.text.forEach(letter => {
                
            // });

            // address_1.text_button.last_button_clicked=false
            // port_1.text_button.last_button_clicked=true
        }
    }

})


port_1 = new text_controller({


    "text": localStorage.getItem("port_1") ? localStorage.getItem("port_1") : "" ,

    "text_class":{
        "color":"rgb(255,255,255)" 
    },
    "default_text_class":{
        "text":"Port",
        "color":"rgb(200,200,200,.5)"
    },
    "shared_traits":{

        "x": (innerWidth*0.225)+((innerWidth*.55)-225),
        "y":((innerHeight/3)*0)+280,
        "size": 65,
        "align": "left",
        "border_image":dark_purple_bar_fade_stretch_image,
        "border_size_multiplier":1.25,
        "border_x_offset":110,
        "width":225,
        "base_line":"middle",
        "border_align":"left",
        "on_unselected":function(){
            save_server_selector()
        },
        "make_text_button":true,
        "can_input_text":true,
        "image_bar":accended_text_selected_image

    }

})








name_2 = new text_controller({
    "text": localStorage.getItem("name_2") ? localStorage.getItem("name_2") : "",


    "text_class":{
        "color":"rgb(255,255,255)",
        "selected_effects_length":1000,
        "image_bar":accended_text_selected_image,
        "text_y_offset":-5,
        "border_image":feather_bar_stretch_image,
        "selected_effects":[["brightness",25,"%",75],["blur",4,"px"]]

    },
    "default_text_class":{

        "color": "rgb(200,200,200,.5)",
        "text":"Server Name",
        "selected_effects_length":1000,
        "border_image":dark_purple_bar_stretch_image,
        "text_y_offset":25



    },

    "shared_traits":{
        "x": innerWidth/2,
        "y":((innerHeight/3)*1)+165,   
        "size": 65,    
        "align":"center",
        "base_line":"middle",
        
        
        
        "border_size_multiplier":1.25,
        "border_x_offset":110,
        "border_align":"center",
    

        "make_text_button":true,
        "can_input_text":true,
        "on_unselected":function(){
            save_server_selector()
        },
        "on_entered":function(){
            save_server_selector()
        }
        

    }
})



address_2=new text_controller({

    "text": localStorage.getItem("address_2") ? localStorage.getItem("address_2") : "",

    "text_class":{
        "color":"rgb(255,255,255)",
        "image_bar":accended_text_selected_image
    },

    "default_text_class":{

        "color":"rgb(200,200,200,.5)",
        "text":"Server IP"

    },

    "shared_traits":{
        "x": innerWidth*0.225,
        "y":((innerHeight/3)*1)+280,
            "make_text_button":true,
        "can_input_text":true,
        "size": 65,

        "align": "left",
        "border_image":white_bar_stretch_image,
        "border_size_multiplier":1.25,
        "on_unselected":function(){
            save_server_selector()
        },
        "border_x_offset":110,
        "width":(innerWidth*.55)-250 ,
        "base_line":"middle",
        
        
        
        "after_addletter":function(){
            let index=0

            let address=""
            let port=""

            for(index;index<=address_1.text.length-1 && address_1.text[index]!=":";index++){
                if(address_1.text[index]!=" "){
                    address+=address_1.text[index]
                }
                
            }

            index++

            for(index;index<=address_1.text.length-1;index++){
                if(address_1.text[index]!=" "){
                    port+=address_1.text[index] 
                }
            }

            address_1.text=address
            if(port!=""){
                port_1.text=port
                address_1.text_button.last_button_clicked=false
                port_1.text_button.last_button_clicked=true
            }
            

            // console.log(address)
            // console.log(port)


            // address_1.text.forEach(letter => {
                
            // });

            // address_1.text_button.last_button_clicked=false
            // port_1.text_button.last_button_clicked=true
        }
    }

})


port_2 = new text_controller({


    "text": localStorage.getItem("port_2") ? localStorage.getItem("port_2") : "" ,

    "text_class":{
        "color":"rgb(255,255,255)" 
    },
    "default_text_class":{
        "text":"Port",
        "color":"rgb(200,200,200,.5)"
    },
    "shared_traits":{

        "x": (innerWidth*0.225)+((innerWidth*.55)-225),
        "y": ((innerHeight/3)*1)+280,
        "size": 65,
        "align": "left",
        "border_image":dark_purple_bar_fade_stretch_image,
        "border_size_multiplier":1.25,
        "border_x_offset":110,
        "width":225,
        "base_line":"middle",
        "border_align":"left",
        "on_unselected":function(){
            save_server_selector()
        },
        "make_text_button":true,
        "can_input_text":true,
        "image_bar":accended_text_selected_image

    }

})








name_3 = new text_controller({
    "text": localStorage.getItem("name_3") ? localStorage.getItem("name_3") : "",


    "text_class":{
        "color":"rgb(255,255,255)",
        "selected_effects_length":1000,
        "image_bar":accended_text_selected_image,
        "text_y_offset":-5,
        "border_image":feather_bar_stretch_image,
        "selected_effects":[["brightness",25,"%",75],["blur",4,"px"]]

    },
    "default_text_class":{

        "color": "rgb(200,200,200,.5)",
        "text":"Server Name",
        "selected_effects_length":1000,
        "border_image":dark_purple_bar_stretch_image,
        "text_y_offset":25



    },

    "shared_traits":{
        "x": innerWidth/2,
        "y":((innerHeight/3)*2)+165,   
        "size": 65,    
        "align":"center",
        "base_line":"middle",
        
        
        
        "border_size_multiplier":1.25,
        "border_x_offset":110,
        "border_align":"center",
    

        "make_text_button":true,
        "can_input_text":true,
        "on_unselected":function(){
            save_server_selector()
        },
        "on_entered":function(){
            save_server_selector()
        }
        

    }
})



address_3 = new text_controller({

    "text": localStorage.getItem("address_3") ? localStorage.getItem("address_3") : "",

    "text_class":{
        "color":"rgb(255,255,255)",
        "image_bar":accended_text_selected_image
    },

    "default_text_class":{

        "color":"rgb(200,200,200,.5)",
        "text":"Server IP"

    },

    "shared_traits":{
        "x": innerWidth*0.225,
        "y":((innerHeight/3)*2)+280,
            "make_text_button":true,
        "can_input_text":true,
        "size": 65,

        "align": "left",
        "border_image":white_bar_stretch_image,
        "border_size_multiplier":1.25,
        "on_unselected":function(){
            save_server_selector()
        },
        "border_x_offset":110,
        "width":(innerWidth*.55)-250 ,
        "base_line":"middle",
        
        
        
        "after_addletter":function(){
            let index=0

            let address=""
            let port=""

            for(index;index<=address_1.text.length-1 && address_1.text[index]!=":";index++){
                if(address_1.text[index]!=" "){
                    address+=address_1.text[index]
                }
                
            }

            index++

            for(index;index<=address_1.text.length-1;index++){
                if(address_1.text[index]!=" "){
                    port+=address_1.text[index] 
                }
            }

            address_1.text=address
            if(port!=""){
                port_1.text=port
                address_1.text_button.last_button_clicked=false
                port_1.text_button.last_button_clicked=true
            }
            

            // console.log(address)
            // console.log(port)


            // address_1.text.forEach(letter => {
                
            // });

            // address_1.text_button.last_button_clicked=false
            // port_1.text_button.last_button_clicked=true
        }
    }

})


port_3 = new text_controller({


    "text": localStorage.getItem("port_3") ? localStorage.getItem("port_3") : "" ,

    "text_class":{
        "color":"rgb(255,255,255)" 
    },
    "default_text_class":{
        "text":"Port",
        "color":"rgb(200,200,200,.5)"
    },
    "shared_traits":{

        "x": (innerWidth*0.225)+((innerWidth*.55)-225),
        "y": ((innerHeight/3)*2)+280,
        "size": 65,
        "align": "left",
        "border_image":dark_purple_bar_fade_stretch_image,
        "border_size_multiplier":1.25,
        "border_x_offset":110,
        "width":225,
        "base_line":"middle",
        "border_align":"left",
        "on_unselected":function(){
            save_server_selector()
        },
        "make_text_button":true,
        "can_input_text":true,
        "image_bar":accended_text_selected_image

    }

})



server_ips_elements=[
        
    new align({ 
    "elements":[
        
        //Text Server Selector
        new text(  {"x": innerWidth/2 ,"y":55 ,"text": "Server Selector" ,   "size": 48  ,"color":"rgb(255,255,255)"   ,"align": "center"  } ),

        new text({
            "base_line":"middle",
            "x": 10,
            "y": ((innerHeight))-(50/2),
            "text": "DownLoad Server",
            "size": 50,
            "color": "rgb(255,255,255)",
            "align": "left",

            "make_text_button":true,
          
            "on_clicked":function(){

                download("../server.zip","server")
                
                alert("Using node js run server.js in the terminal with the fallowing command: Server/server/server.js. The Server will run on port 3898.")

            }
    
        }),

        
        name_1,
        address_1,
        port_1,


        //Colon 1
        new image({
            // "x":innerWidth/2,
            // "y":((innerHeight/3)*2),
            "x":(innerWidth*0.225)+((innerWidth*.55)-250)+((25)/2),
            "y":(((innerHeight/3)*0)+275),
            "size_x":(20),
            "size_y":(20)*(21/5),
            "image":white_colon_image,
            "align":"center"
        }),  
        
        
        //Connect 1
        new text({
            "x": innerWidth*0.85,
            "y": ((innerHeight/3)*0)+280,
            "text": "Connect",

            "size": 65,
            "color": "rgb(255,255,255)",

            "border_image": cyan_bar_stretch_image,
            "align": "center", 
            "base_line":"top",
            "border_align": "center",

            "hit_box":"default_border_image",
            "border_size_multiplier":1.5,"border_x_offset":60,"make_text_button":true ,
            "on_clicked":function(){
            alert("I have ben Clicked 1")

            sessionStorage.setItem("address", address_1.text)
            sessionStorage.setItem("port", port_1.text)

                            // console.log("ONLINE")

            // //PUT THIS IN A PLACE WHERE IS NOT CONASTENLY CHECKING
            // if(mouse_down && mouse_x>=this.x && mouse_x<=this.x+this.size_x && mouse_y>=this.y && mouse_y<=this.y+this.size_y){
                
          
                
                // music.pause()
              
                // selected_layers=["waiting_on_connection"]

                // connect_to_server()
    
                // emit("name",player.name)
                       
              
            // }
            // alert("T")

            // sessionStorage.setItem("name",account.name)

            sessionStorage.setItem("status","online")
            window.location.href = "../world/index.html";

            
            }
    
        }),



        //Top Divider
        new image({
            "x":innerWidth/2,
            "y":((innerHeight/3)),
            "size_x":(innerWidth*0.9),
            "size_y":(innerWidth*0.9)*(49/283),
            "image":ui_divider_image,
            "align":"center"
        }),


        name_2,
        address_2,
        port_2,



        
        //Bottom Divider
        new image({
            "x":innerWidth/2,
            "y":((innerHeight/3)*2),
            "size_x":(innerWidth*0.9),
            "size_y":(innerWidth*0.9)*(49/283),
            "image":ui_divider_image,
            "align":"center"
        }),            
        
        
        
        //Colon 2
        new image({
            "x":(innerWidth*0.225)+((innerWidth*.55)-250)+((25)/2),
            "y":(((innerHeight/3)*1)+275),
            "size_x":(20),
            "size_y":(20)*(21/5),
            "image":white_colon_image,
            "align":"center"
        }),

        //Connect 2
        new text({
            "x": innerWidth*0.85,
            "y": ((innerHeight/3)*1)+280,
            "text": "Connect",

            "size": 65,
            "color": "rgb(255,255,255)",

            "border_image": cyan_bar_stretch_image,
            "align": "center", 
            "base_line":"top",
            "border_align": "center",

            "hit_box":"default_border_image",
            "border_size_multiplier":1.5,"border_x_offset":60,"make_text_button":true ,
            "on_clicked":function(){
            // alert("I have ben Clicked 2")

            sessionStorage.setItem("address", address_2.text)
            sessionStorage.setItem("port", port_2.text)

                            
            sessionStorage.setItem("status","online")
            window.location.href = "../world/index.html";

            
            }
    
        }),
        
        name_3,
        address_3,
        port_3,

        //Colon 3
        new image({
            "x":(innerWidth*0.225)+((innerWidth*.55)-250)+((25)/2),
            "y":(((innerHeight/3)*2)+275),
            "size_x":(20),
            "size_y":(20)*(21/5),
            "image":white_colon_image,
            "align":"center"
        }),

        //Connect 3
        new text({
            "x": innerWidth*0.85,
            "y": ((innerHeight/3)*2)+280,
            "text": "Connect",

            "size": 65,
            "color": "rgb(255,255,255)",

            "border_image": cyan_bar_stretch_image,
            "align": "center", 
            "base_line":"top",
            "border_align": "center",

            "hit_box":"default_border_image",
            "border_size_multiplier":1.5,
            "border_x_offset":60,
            "make_text_button":true ,
            "on_clicked":function(){

                sessionStorage.setItem("address", address_3text)
                sessionStorage.setItem("port", port_3.text)

                                
                sessionStorage.setItem("status","online")
                window.location.href = "../world/index.html";

            
            }
    
        }),





//     // new button({
//     //     "x":(innerWidth/2)+325,
//     //     "y":(innerHeight/2)-225,
//     //     "size_x":125,
//     //     "size_y":125,
//     //     "on_clicked":function(){
//     //         sessionStorage.setItem("slot",1)

//     //         window.location.href = "../world/index.html";

//     //     },
//     //     "image":seed_icon,
//     //     "align":"center"
//     // }),






//     new button({
//         "x":innerWidth/2,
//         "y":innerHeight/2,
//         "size_x":500,
//         "size_y":200,
//         "on_clicked":function(){

//             sessionStorage.setItem("name",display_name.text)

//             sessionStorage.setItem("slot",2)


//             window.location.href = "../world/index.html";
//         },
//         "image":slot_2_button,
//         "align":"center"
//     }),
//     new button({
    //     "x":innerWidth/2,
    //     "y":(innerHeight/2)+225,
    //     "size_x":500,
    //     "size_y":200,
    //     "on_clicked":function(){

    //         sessionStorage.setItem("name",display_name.text)

    //         sessionStorage.setItem("slot",3)

    //         window.location.href = "../world/index.html";

    //     },

    //     "image":slot_3_button,
    //     "align":"center"
    // })                
        ],
        "groups":["ui"]
    })
    
]


