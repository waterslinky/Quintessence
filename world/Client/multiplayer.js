multiplayer_allod=true
can_callback=true

if(selected_status=="online"){
    multiplayer=true
}
else{
    multiplayer=false
}

connected=false

ticks_per_ping=2
ticks_ping=0




function emit(socket,name,data,type){


    if(!connected){
        emit_list.push([name,data])
        // console.log("ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")
    }
    else{
        socket.emit(name,data)

    }
    
}



function connect_to_server(address,port=undefined){
alert("K")
    multiplayer=true
    loaded=false

    timed_out_setInterval=setTimeout(
        function(){
            if(!connected){
                engin.message("Connection Timed out. Server not found.")
                
                window.location.href = "../start/index.html"
            }
        },
        1000*(30)
    )

        
    
    console.log("Connecting to: "+'http://'+address+(port ? ":":"")+(port ? port:""))
  
            socket = io.connect('http://'+address+(port ? ":":"")+(port ? port:""),{


    extraHeaders: {
       
        origin: "*"
    }
    });
 
    socket_erroe_alerted=false
    socket.on('connect_error', (error) => {
        if(!socket_erroe_alerted){
            if(!navigator.onLine){
                alert("No internet Connection!")
            }
            else{

                alert('Socket.io connection error occurred. Please check your if Insecure content in site settings is set to Allow and reload page.')

            }            
        }
        socket_erroe_alerted=true


      });


    socket.on("connect", function () {
        player.id=socket.id
        console.log("I CONNECTED TO A SERVER")
        connected=true

        

        socket.emit("verity_user",send_traits_to_new_player(player))
    })



    socket.on("world", function (data,callback) {
        loaded=true
        new_block_list=[]
        data.forEach(block_line => {
    
            line=[]
            block_line.forEach(block => {
                line.push(get_block(block.name))
            });
            new_block_list.push(line)
                
        });

        alert("FIX")

        // block_list=new_block_list
    
        callback("q")

        spawn_point=(block_list.length*block_size)/2

        player.spawn_point()
    })








    socket.on("new_player", function (data,callback) {
        

        data.pos_buffer_index=0

        console.log("new player",data)

   
        let player_already_exists=false
        players.forEach(other_player => {
            if(other_player.id==data.id){
                player_already_exists=true
            }
        });
        
        if(!player_already_exists){
            players.push(data)
            chat.push({
                "end_time":engin.current_time+4000,
                "text":(data.name+" has joined."),
                "color":"243, 255, 15"
            })
        }
        
       
        callback("q")
    })


    



    
    socket.on("data", function ([function_name,data_2],callback) {
        
        // console.log(function_name)

        // console.log(data_2)
        reseve=true


        // console.log("data")


        run_function(function_name,JSON.parse(data_2))

        
     
    

        reseve=false

        // console.log(function_name)

        if(callback && can_callback){
            // console.log(callback)

            callback()
        }
        // callback()
    })



    

    socket.on("pass_by_data", function ([function_name,data_2],callback) {
        

        console.log("data")

        reseve=true


        // run_function(function_name,JSON.parse(data_2))

        let new_function=typeof window != 'undefined' ? window : global

        new_function[function_name].apply(null,JSON.parse(data_2))

        reseve=false

        
     
        if(callback){
            callback()
        }
        // callback()
    })








    socket.on("new_player_trait", function(data,callback){
        let element=data[1]


        players.forEach(other_player => {
            if(other_player.id==data[0]){
                

   
                    let r="g"+element[0]+element
             
                
                
                // run_function(function_name,JSON.parse(data_2))
                

                other_player[element[0]]=element[1]
              


                // console.log(other_player[element[0]])
                // window[]




                // console.log("other_player."+element[0]+"="+JSON.stringify(element[1]),"      EVv")

                // console.log("posv",element[0])

                if(element[0]=="pos_buffer"){
                   

                    other_player.pos_buffer_index=0
                    // entitie.pos_buffer_index
                    // console.log("pos_buffeR IS NOW 0",other_player.pos_buffer_index)
                }

                // other_player
            }
            
        });
        if(callback){
            callback("q")
        }
        


    })






    socket.on("disconnect", function(){
    
        window.location.href = "../index.html";



    })

    socket.on("kick", function(){
        window.location.href = "../index.html";


  
    })





    // socket.on("accepted", function () {

    //     socket.emit("add_new_player",send_traits_to_new_player(player))

    //     socket.emit("load")
    // })




    // socket.on("break_block", function (data,callback) {
    //     callback()
    //     block_list[data[1][0]][data[1][1]]=get_block(data[0])
    // })



    // socket.on("disconnect", function () {
    //     console.log("I HAVE DISCONTEd")
    //     engin.set_game_state(start_screen)

    //     connected=false

    // })

    // socket.on("world", function (data, callback) {
    //     callback()
    //     block_list=convert_names_to_blcoks(data)
    // })



    



    // socket.on("done_loadding", function () {

    //     engin.set_game_state(world)
    
    // engin.change_selected_layer([],"set")



    // })





    // socket.on("abc", function () {
    //     console.log("abc")
   

    // })

    // socket.on("new_player", function(data, callback){
    //     data.pos_buffer_index=0
    //     // console.log(data);
    //                         chat.push(
    //                     {
    //                         "end_time":engin.current_time+4000,
    //                         "text":(data.name+" has joined."),
    //                         "color":"243, 255, 15"
    //                     }
    //                     )
    // //                 )
    //     callback('f');
    //     players.push(data)
    // })

    // socket.on("player_disconected", function(data, callback){
    //     callback('f');
    //     for(let i=0;i<players.length;i++){
    //         if(players[i].id==data){

    //             chat.push(
    //                 {
    //                     "end_time":engin.current_time+4000,
    //                     "text":(players[i].name+" has left."),
    //                     "color":"243, 255, 15"
    //                 }
    //                 )
    //             players.splice(i,1)





    //             // console.log("KILL DONCTE PLAYER")
    //         }
    //     }
        
        
    // })

    // socket.on("new_player_trait", function(data){
    //     let element=data[1]
    //     // if(data[0]==)

    //     // console.log("new_player_trait",data);
    //     players.forEach(other_player => {
    //         if(other_player.id==data[0]){
    //             // console.log("FOUND PLAYEREER")

    //             // console.log(element[0],"pos_buffer")
    //             if(element[0]=="pos_buffer"){
    //                 other_player.pos_buffer_index=0
    //                 // console.log("pos_buffeR IS NOW 0")
    //             }

    //             // other_player
    //         }
            
    //     });
    //     // callback('f');
    //     // players.push(data)
    // })

    


}