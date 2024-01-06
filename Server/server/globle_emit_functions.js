emit_self_data = function(function_name,parameters){
    if(is_server){
        players.forEach(player => {
            // console.log("sent block cheng")
            let new_arguments=[]

            for(let parameter_index=0;parameter_index<parameters.length;parameter_index++){
                let parameter=parameters[parameter_index]
                if(typeof parameter=='string'){
                    new_arguments.push(parameter)
                }
                else{
                    new_arguments.push(JSON.stringify(parameter))

                }
            }


            if(typeof reseve_from!="undefined"){
            console.log(reseve_from)
            }
            
            if((typeof reseve_from=="undefined") || (reseve_from.id!=player.socket.id)){


                player.socket.emit("data",[function_name,JSON.stringify(new_arguments)])
            }
        });  
    }
    else if(!reseve && multiplayer){
            // socket.emit("data",["change_block",JSON.stringify([x,y,""+block_name+"",break_block])])


            let new_arguments=[]
                
            for(let parameter_index=0;parameter_index<parameters.length;parameter_index++){
            // arguments.forEach(argument => {
                let parameter=parameters[parameter_index]



                if(typeof parameter=='string'){
                    new_arguments.push(parameter)
                }
                else{
                    new_arguments.push(JSON.stringify(parameter))

                }
                
            // });
            }

            socket.emit("data",[function_name,JSON.stringify(new_arguments)])







    }        
}

disconect_player = function(id){
    console.log("DIS")

    // id=JSON.stringify(id_raw)
    for(let i=0;i<players.length;i++){
        if(id==players[i].id){
            if(is_server){
                console.log(players[i].name+" has disconected. Players: "+(players.length-1))
            }
            else{
                console.log(" has disconected.")
                chat.push({
                    "end_time":engin.current_time+4000,
                    "text":(players[i].name+" has left."),
                    "color":"243, 255, 15"
                })
            }
            

            
            players.splice(i,1)

            
            
        }
    }

    emit_self_data("disconect_player",arguments)







}


if(is_server){
    module.exports={emit_self_data,disconect_player}
}