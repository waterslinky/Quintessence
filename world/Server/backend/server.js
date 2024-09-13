//V2.7

is_server=true

var express =require("express");
var fs = require("fs");
var app=express()
cors=require("cors");
app.use(cors)
var http = require("http").createServer(app);

var socketIO= require("socket.io") (http, {
    cors: {
        origin: "*"
    }
});

const {emit_self_data,disconect_player} = require("../../network/globle_emit_functions.js")

const {engin_class} = require("../../../common/engin.js")



var {players,entities,block_list} = require("../world/setup/setup_world.js")

// console.log(players)




var {over_world,seed,new_block_list} = require("../world/generation/over_wold.js")
var {} = require("../../network/valids")



console.log(emit_self_data)

var  {change_block,block_is,server_engin_update,get_block,reload_path} = require("../engin_server/engin_server.js");

const {run_on_packet_callback,new_setTimeout,emit_packet,send_to_all_except,player_connected,filter_player_traits}= require("../../network/emit_functions.js")


users=JSON.parse( fs.readFileSync("/workspaces/Quintessence/world/Server/save/acouts.json"))

var {block_list} = require("../world/setup/setup_world.js");













time_before_resending=1.5*1000

rggrgrrg=function (){
    return 24444
}

// console.log(block_list[0][0])














setInterval(function () {
    fs.writeFile('/workspaces/Quintessence/world/Server/backend/server.js', "g", err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      })

}, 1000)

    
http.listen (3899, function () {
    console.log("Server 2 started...");
    console.log()
    socketIO.on("connection", function (socket) {
        console.log("CONNECT")
    
        socket.setMaxListeners(0)
        
        
        socket.on("verity_user", function (data,callback) {
            

            // players.forEach(player => {
            //     player.socket.emit("new_player",data)
            // });


            
            data.socket=socket
            data.id=socket.id
            data.verification_list_group=[]


            players.push(data)


            send_to_all_except("new_player",filter_player_traits(data),"default",data.id,"verify")
            console.log(data.name+" has connected."+" Players: "+players.length)
            console.log()


            


            new_block_list=[]
            block_list.forEach(block_line => {

                line=[]
                block_line.forEach(block => {
                    line.push(block)
                });
                new_block_list.push(line)
                
            });
            emit_packet("world",new_block_list,"load",data,"verify")

            
            players.forEach(player => {
                if(player.id!=data.id){
                    emit_packet("new_player",filter_player_traits(player),"load",data,"verify")
                }
                
            });




            
    
        })









        socket.on("data", function ([function_name,data_2]) {
           
            // console.log("Data inc")
            // console.log(function_name)
            // console.log(data_2)



            reseve_from=socket
            reseve=true

            new_perams=""
            for(let i=1;i<data_2.length-1;i++){
                // console.log("GLOBLE"+global[data_2[i]])
                new_perams+=data_2[i]
            }

 
            // eval(function_name+"("+new_perams+")")
            global[function_name].apply(null,JSON.parse(data_2))



            

            

            reseve_from=false
            reseve=false
    
        })

        socket.on("pass_by_data", function ([function_name,data_2]) {
            // console.log("Data inc")
            // console.log(function_name)
            // console.log(data_2)





            reseve_from=socket
            // reseve=true

 
            
            // global[function_name].apply(null,JSON.parse(data_2))
            // emit_self_data(function_name,data_2)

            send_to_all_except("pass_by_data",[function_name,data_2],"default",socket.id,"verify")

            

            // reseve_from=false
            // reseve=false
    
        })

        

        // socket.on("player_pos", function (pos) {
        //     players.forEach(player => {
        //         if(player.socket.id==socket.id){
                 
        //             player.pos_buffer=pos
        //         }
        //         else{
        //             player.socket.emit("player_pos",[pos,socket.id])

        //         }
        //     });
           
    
        // })

        socket.on("ping", function (data,callback) {
            // ping_num++
            // console.log("PING",ping_num)

            // disconnect
            // emit_packet("disconnect","f","default",data,"emit")


            players.forEach(player => {
            // emit_packet("kick","f","default",player,"emit")

                if(player.id==data[0]){
                    data[1].forEach(element => {
                        
                        // eval("player."+element[0]+"="+JSON.stringify(element[1]))
                        player[element[0]]=element[1]

                        players.forEach(other_player => {
                            if(other_player.id!=player.id){

                                // console.log(data[0])

                                if(element[0]=="pos_buffer"){
                                    // console.log("EMIT")
                                    emit_packet("new_player_trait",[data[0],element],"default",other_player,"emit")
                                }
                                else{
                                    // console.log("VERIFY")

                                    emit_packet("new_player_trait",[data[0],element],"default",other_player,"verify")
                                }

                                
                            }
                        });
                        
                        
                    });

                }
                
            });



        })

        socket.on("disconnect", function (data) {
            disconect_player(socket.id)
        })

        socket.on("disconnect_self", function (data) {
            console.log("Socket Disconected: "+data)
            disconect_player(socket.id)
        })




        // disconect_player(id)






//             users.forEach(user => {
//                 if(user.name==user_name){
            
//                     if(user.password==user_password){
//                         if(white_listed_player(user_name)){
//                                 let found_2=false
//                                 players.forEach(player => {
//                                     if(player.name==user_name){
//                                         found_2=true
//                                     }
//                                 });
//                                 if(!found_2){
//                                     socket.emit("accepted","v")
//                                     console.log(user.name,"LOGED IN")             
//                                 }
//                         }
//                         else{
//                             console.log("NOT ON WHITE LIST")

//                         }
//                     }
//                     else{
//                         console.log("FALSE PASSWORD")
//                     }
                    
//                 }

                
//             });
           
//         })

//         socket.on("add_new_player", function (data) {

//             data.id=socket.id

//             if(data.name=="Benjamin"){
//                 // console.log()
//                 data.name="Benjámin"
//             }
//             send_to_all("new_player",data,"default","verify")

            
//             data.socket=socket
            

//             data.prepared_all_sends=false


//             data.verification_list_group=[{"name":"default","index":0,"list":[]}]
      

//             data.load_verification_list=[]
//             data.load_verification_index=0

//             players.forEach(player => {
//                 if(player.id==socket.id){
//                     console.log("PLAYER SOULD HAVE DISCOCTED" )
//                     player_disconect(player.id)
                    
                   
//                 }
//             });

//             // if()

//             console.log(data.name.length)
//             if(data.name.length>20){
//                 // console.log()
//                 data.name="Im A Idot"
//             }
           
//                    players.push(data)



 

   


// data.name
//         })

//         socket.on("ping", function (data,callback) {
//             ping_num++
//             // console.log("PING",ping_num)


//             players.forEach(player => {
//                 if(player.id==data[0]){
//                     data[1].forEach(element => {
                        
//                         eval("player."+element[0]+"="+JSON.stringify(element[1]))
//                         players.forEach(other_player => {
//                             if(other_player.id!=player.id){
//                                 emit_packet("new_player_trait",[data[0],element],"default",other_player,"emit")
//                             }
//                         });
                        
                        
//                     });

//                 }
                
//             });



//         })


        

//         socket.on("disconnect", function (data) {
        
//             player_disconect(socket.id)


//         })

//         socket.on("load", function (data) {
            

//             let this_player=false

//             players.forEach(player => {
//                 if(player.socket.id==socket.id){
//                     this_player=player
//                 }
                
//             });

//             console.log(this_player.name,"HAS CONNECTED \nPLAYERS:",players.length)
//             console.log()

//             // players
//             players.forEach(player => {

//                 if(player.id!=socket.id){
                

                    
//                     emit_packet("new_player",filter_player_traits(player),"load",this_player,"verify")
                    
//                 }
                
//             });

//             // this_player.socket.emit("world",block_list)
//             emit_packet("world",block_list,"load",this_player,"verify")


//             this_player.prepared_all_sends=true

//         })

//         socket.on("break_block", function (data) {
//             [block,index]=data

//             set_block(block,index)
        
//             // block_list[index[0]][index[1]]=
           
//             send_to_all_except("break_block",data,"default",socket.id,"verify")
            


//         })


        


        

        

    })
})
    
    
    
    
    
    
    
    







































server={
    
    "draw":  function(){},
    "update":server_engin_update,
    layers:[
    ]
}





















if (is_server) {
   EnginClass  = require('../../../common/engin.js');
}
const engin = new EnginClass();