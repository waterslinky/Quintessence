function player_connected(player){
    if(players.length==0){
        return false
    }

    let player_found=false
    
    players.forEach(plaeyr_2 => {

        if(player.id==plaeyr_2.id){
            player_found=true
        }
    });
    return player_found
}


function filter_player_traits(player){
    let new_player={}
    for(let i=0;i<player.send_trait.length;i++){
        element=player.send_trait[i]
        // eval(("new_player."+element+"=player."+element))
        new_player[element]=player[element]
    };
    return new_player
}



//-----------------------------------------------------------


function run_on_packet_callback(self){

    for(let group_index=0;group_index<self.verification_list_group.length;group_index++){
            if(self.verification_list_group[group_index].name=="load"){
            
                if(self.verification_list_group[group_index].list.length==0 && self.prepared_all_sends){
                    
                    
                    self.socket.emit("done_loadding","g")
                }
            }
    }
}


function new_setTimeout(self,emit_name,data,index,group,loop_index=0){


    if(player_connected(self)){

        self.socket.emit(emit_name,data,function(){

            for(let i=0;i<self.verification_list_group.length;i++){
                for(let i_2=0;i_2<self.verification_list_group[i].list.length;i_2++){
                
                    if(self.verification_list_group[i].list[i_2]==index){

                        self.verification_list_group[i].list.splice(i_2,1)

                        if(loop_index>=10){
                            console.log("NOT RUNING THIS LOOP")
                        }


                        run_on_packet_callback(self)
                    }
                }


            }

        })

            // console.log("LOOOPPPPP",loop_index)


        if(loop_index>=10){
            console.log("Tryed 10 times and clint did not call back.")
            disconect_player(self.id)
        }


        

        loop_index++


        return  setTimeout(() => {
         
            let found_item=false

            self.verification_list_group.forEach(group => {
                group.list.forEach(group_index => {
                    if(group_index==index){

                        new_setTimeout(self,emit_name,data,index,group,loop_index)
                        found_item=true

                    }
                });
            });
        }, time_before_resending)
    }
}


function emit_packet(emit_name,data,emit_group="default",self=undefined,type="emit"){
    if(type=="verify"){
            


            let group_found=false
            while(!group_found){
                for(let i=0;i<self.verification_list_group.length;i++){
 
                    group=self.verification_list_group[i]
               

                    if(group.name==emit_group){
                        group_found=true
                        new_setTimeout(self,emit_name,data,group.index,group)
                        self.verification_list_group[i].list.push(
                        
                
                        self.verification_list_group[i].index

                        
                    )
                    self.verification_list_group[i].index++

                    }
                    
                }
                if(!group_found){
               
                    self.verification_list_group.push({
                        
                        "name":emit_group,
                        "index":0,
                        "list":[]
                
                })
                }
            }


           
    }
    if(type=="emit"){
        self.socket.emit(emit_name,data,function(){})

    }



    

}


function send_to_all_except(emit_name,data,emit_group="default",id,type="emit"){
    players.forEach(player => {
        if(player.id!=id){
            emit_packet(emit_name,data,emit_group,player,type)

        }
    });
}


if(is_server){
    module.exports={run_on_packet_callback,new_setTimeout,emit_packet,send_to_all_except,player_connected,filter_player_traits}

}