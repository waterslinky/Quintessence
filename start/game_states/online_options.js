//ONLINE
online_options_elements=[new align({ 
        "elements":[
        // display_icon,
        // display_name,

        new button({
            "x":innerWidth/2,
            "y":(innerHeight/2)-125,
            "size_x":35*20,
            "size_y":10*20,
            "on_clicked":function(){

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

                // sessionStorage.setItem("status","online")
                // window.location.href = "../world/index.html";



                engin.change_selected_layer(["server_ips_elements"],"set")


    
                    
            },
            "image":play_online_button,
            "align":"center"
        }),
        new button({
            "x":innerWidth/2,
            "y":(innerHeight/2)+125,
            "size_x":35*20,
            "size_y":10*20,
            "on_clicked":function(){

                
                sessionStorage.setItem("status","offline")

            
    engin.change_selected_layer(["pick_world"],"set")

            },
            "image":play_offline_button,
            "align":"center"
        })

        





    
    
    
        ],
        groups:["ui"]
})]