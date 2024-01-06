// const { emit_self_data } = require("../../Server_reformed/Server/server/globle_emit_functions")

// const { entities } = require("../../Server_reformed/Server/server/setup_world")

// const { filter_player_traits } = require("../../Server_reformed/Server/server/emit_functions")



function pass_by_server(function_name,parameters){

    if(!reseve && multiplayer){
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

            socket.emit("pass_by_data",[function_name,JSON.stringify(new_arguments)])







    }  
     
}

get_entitie_pos=function(entitie){
    if(entitie.x){
        return {"x":entitie.x,"y":entitie.y}
    }
    else{
        return {"x":entitie.pos_buffer[1][0],"y":entitie.pos_buffer[1][1]}
        
    }
    
}


start_flying = function (identifier,x=undefined,y=undefined){

    // console.log("all: "+identifier)
    let this_player=true
    if(typeof identifier=="string"){
        players.forEach(i_player => {
            // console.log(i_player.id+"  "+identifier)
            if(i_player.id==identifier){
                this_player=i_player
                // console.log("Match")

                // if(x==undefined || y==undefined){
                //     x=this_player.pos_buffer[1]
                //     y=this_player.pos_buffer[1]
                // }      
        
            }
        })
        
    }
    else{
        this_player=identifier

   

    }


        if(x==undefined || y==undefined){
            x=get_entitie_pos(this_player).x
            y=get_entitie_pos(this_player).y
        }   

        if(typeof is_server=="undefined" || !is_server){
            // console.log("T")
                if(typeof this_player.flying_emitter=="undefined"){
                    this_player.flying_emitter={}
                }

                this_player.flying_emitter.particle=new particle_emitter({"parent":this_player,"particle":fly_par}) 
                particles.push(new particle_link({"link": this_player.flying_emitter }))            
            





            // if(!is_server){
            // console.log("--"+x)

            // console.log(this_player)
            // console.log("--")
            this_player.flying=true
                            
            for(let i=0;i<10;i++){
                particles.push(new fly_par(this_player.x+(this_player.size_x/2),this_player.y+(this_player.size_y/2),engin.time_in_loop+700+(Math.random()*400),"181, 255, 250 ",(Math.PI*(Math.random()*2)) ))
            }        
            // }
        }

    // console.log({"id":this_player.id})
    if(!reseve){
        pass_by_server("start_flying",[this_player.id])
    }
    
}

stop_flying = function (identifier){

    // console.log("all: "+identifier)
    let this_player=true
    if(typeof identifier=="string"){
        players.forEach(i_player => {
            // console.log(i_player.id+"  "+identifier)
            if(i_player.id==identifier){
                this_player=i_player
                // console.log("Match")

                // if(x==undefined || y==undefined){
                //     x=this_player.pos_buffer[1]
                //     y=this_player.pos_buffer[1]
                // }      
        
            }
        })
        
    }
    else{
        this_player=identifier

   

    }


        // if(x==undefined || y==undefined){
        //     x=get_entitie_pos(this_player).x
        //     y=get_entitie_pos(this_player).y
        // }   

        this_player.flying_emitter.particle=undefined
        // particles.push(new particle_link({"link": this_player.flying_emitter }))




    // if(!is_server){
    // console.log("--"+x)

    // console.log(this_player)
    // console.log("--")
    // this_player.flying=true
                    
    // for(let i=0;i<10;i++){
    //     particles.push(new fly_par(this_player.x+(this_player.size_x/2),this_player.y+(this_player.size_y/2),engin.time_in_loop+700+(Math.random()*400),"181, 255, 250 ",(Math.PI*(Math.random()*2)) ))
    // }        
    // }


    // console.log({"id":this_player.id})
    // emit_self_data("stop_flying",[this_player.id])

    if(!reseve){
        pass_by_server("stop_flying",[this_player.id])
    }
}



class inventory_slot{
    constructor(item,count=1){
        this.item=item
        if(item.count){
         
            this.count=item.count
            delete item.count
        }
        else{
            this.count=count
        }
        

    }

    set_count(count){
        let extra=false
        if(count>stack_size){
            extra=count-stack_size
            this.count=stack_size
            // if(from){
            //     from.set_count(count-stack_size)
            //     // console.log(count-stack_size)

            // }
            
   
        }
        else{
            this.count=count
            // extra=count
        }
 
        

        if(this.count<=0){
            this.item=get_block("blank")
        }

        return extra
    }

    give_count(count,from=undefined){

        let extra=this.set_count(this.count+count)
        if(extra){
            from.set_count(extra)
        }
        else{
            from.set_count(from.count-count)
        }
        

        // if(this.count<=0){
        //     this.item=get_block("blank")
        // }

    }
}

function GreaterMoreThenZero(num){
    if(num!=0){
        if(num>0){
            return "<"
        }
        else{
            return ">"

        }
    }
}

function ApplyVelocityWhenNotMax(entitie,val){
    if(val[0]!=0){

        // if(eval("entitie.x_val"+GreaterMoreThenZero(val[0])+val[0])){
        //     entitie.x_val+=val[0]
        //         if(eval("entitie.x_val"+GreaterMoreThenZero(val[0]*-1)+val[0])){
        //             entitie.x_val=val[0]
    
        //         }
    
    
        // }


        if(entitie.x_val<val[0]){
            entitie.x_val+=val[0]
                if(entitie.x_val>val[0]){
                    entitie.x_val=val[0]
    
                }
    
    
        }
        if(entitie.x_val>val[0]){
            entitie.x_val+=val[0]
                if(entitie.x_val<val[0]){
                    entitie.x_val=val[0]
    
                }
    
    
        }


    }


    if(val[1]!=0){
        
        // if(eval("entitie.y_val"+GreaterMoreThenZero(val[1])+val[1])){
        //     entitie.y_val+=val[1]
        //         if(eval("entitie.y_val"+GreaterMoreThenZero(val[1]*-1)+val[1])){
        //             entitie.y_val=val[1]
    
        //         }
    
    
        // }


        // console.log("G")
        if(entitie.y_val<val[1]){
            entitie.y_val+=val[1]
                if(entitie.y_val>val[1]){
                    entitie.y_val=val[1]
    
                }
    
    
        }



        if(entitie.y_val>val[1]){
            entitie.y_val+=val[1]
                if(entitie.y_val<val[1]){
                    entitie.y_val=val[1]
    
                }
    
    
        }
    }

}


class player_class{
    constructor(){




        this.set_defalt=function(){
            this.flying=false
            
            if(this.flying_emitter){
                this.flying_emitter.particle=undefined
            }
            
            
            // console.log(this.flying_emitter)

        }


        // this.inventory_hand=

        this.FlySprintMultiplier=1.3
        this.AirWalkMultiplier=1


        this.speed=9


        this.cam=[0,0]
        

   

        this.name=""


        if(sessionStorage.getItem("name")){
            this.name=sessionStorage.getItem("name")
            console.log(sessionStorage.getItem("name"))
        }

        this.dont_send=true

        this.color="100,10,0"
        
        this.inital_x=0
        this.inital_y=0        

        this.old_x=0
        this.old_y=0

        this.selected_slot_index={"index":0}
        this.show_hot_bar=true
        this.show_inventory_hand=false
        this.inventory_hand=undefined
        this.inventory=[

        ]


        


        this.old_x=0
        this.old_y=0

        this.size_x=32
        this.size_y=32
        
        this.x=0
        this.y=0

        this.y=0

        this.grouded=false

        this.x_val=0
        this.y_val=0



        //Server 
        this.pos_buffer=[[0,0],[0,0]]

        this.id=undefined

        this.send_trait=["name","pos_buffer","send_trait","id","color","size_x","size_y","game_mode"]
        this.save_traits=["color","x","y","cam","inventory","game_mode"]

        
        this.block_brocking=false

        this.game_mode="Servival"





    }

    check_boaundy(){
        if(player.x<0){
            player.x=0
            // console.log("SET 0")
        }
        if(player.y<0){
            player.y=0
        }
    
        if(player.x+player.size_x>=(block_list.length)*block_size){
            // console.log("XXXXXXXXXXXXXXXXXXXXX")
            player.x=((block_list.length)*block_size)-player.size_x
            // console.log("SET 0")
        }
        if(player.y+player.size_y>=(block_list[0].length)*block_size){
            player.y=((block_list[0].length)*block_size)-player.size_y
        }
    
    }

    give_item(item,count=1){
        let stack_found=false
        for(let i=0;i<9;i++){
            if(!stack_found){
             
                if(player.inventory[i].item.name==get_block(item).name){
                    // player.inventory[i].item=get_block(item)
                    if(player.inventory[i].count){
                        player.inventory[i].count+=count
                    }
                    else{
                        player.inventory[i].count=count

                    }
                    
                
                    i=9
                    stack_found=true
                }                
            }



            
        }

        if(!stack_found){
        for(let i=0;i<9;i++){
            if(player.inventory[i].item.name=="blank"){
                player.inventory[i].item=get_block(item)
                player.inventory[i].count=count
            
                i=9
            }                
        }            
        }

    }

    reset_inventory(){
        for(let i=0;i<4*9;i++){


        //     let block=""


        //     catch{
        //         block = "blank"
        //     }
        // console.log(block)
        //     this.inventory.push(new inventory_slot(get_block("blank")))
        
        
        
        try{

            this.inventory[i]=new inventory_slot(get_block(this.inventory[i]  ))
        }
        catch{
            this.inventory.push(new inventory_slot(get_block("blank")))
        }

            
        
        }

        this.inventory_hand=new inventory_slot(get_block("blank"))

        // alert(this.inventory_hand[0].image)
     

    }


    top(){

    }


    update(){

        //Only need for multiplayer
        if(!this.flying && this.flying_emitter && this.flying_emitter.particle!=undefined){
            this.flying_emitter.particle=undefined
        }

        this.inital_x=this.x
        this.inital_y=this.y


        


        if(max_terminal_val>this.y_val){
        // alert("gffg")
            let before_y_val=this.y_val
            if(this.flying && this.y_val<0){
                this.y_val+=gravity

                if(this.y_val>0){
                    this.y_val=0
                    // alert("FAIL")
                    
                }
                
            }
            else{
                if(!this.flying){

                    this.y_val+=gravity
                }
            }
            

           

            // else{
            //     if(this.y_val<0){

            //     }
            // }
            // this.y_val+=gravity
        // alert("gffg"+this.y_val)

            if(max_terminal_val<this.y_val){
                this.y_val=max_terminal_val

            }

        }

        //AirDrag
        
        if(this.x_val>0){
            this.x_val-=AirDrag
            if(this.x_val<0){
                this.x_val=0
            }
        }

        if(this.x_val<0){
            this.x_val+=AirDrag
            if(this.x_val>0){
                this.x_val=0
            }
        }






        if(this.y_val>0){
            this.y_val-=AirDrag
            if(this.y_val<0){
                this.y_val=0
            }
        }

        if(this.y_val<0){
            this.y_val+=AirDrag
            if(this.y_val>0){
                this.y_val=0
            }
        }






        if(this.grouded){
            if(this.x_val>0){
                this.x_val-=friction
                if(this.x_val<0){
                    this.x_val=0
                }
            }
    
            if(this.x_val<0){
                this.x_val+=friction
                if(this.x_val>0){
                    this.x_val=0
                }
            }
        }








        this.grouded=false



        let y_dir=1

        if(this.y_val<0){
            y_dir=-1
            // this.y_val*=-1

        }
        else{
            y_dir=1

        }

        this.y_val*=y_dir


        let segents_y=Math.floor(this.y_val/this.size_y)
        let r_y=(this.y_val%block_size)

        if(r_y){
            segents_y++
        }



        this.y_val*=y_dir


        




        let x_dir=1

        if(this.x_val<0){
            x_dir=-1
            // this.y_val*=-1

        }
        else{
            x_dir=1

        }

        this.x_val*=x_dir


        let segents_x=Math.floor(this.x_val/this.size_x)
        let r_x=(this.x_val%block_size)

        if(r_x){
            segents_x++
        }

        this.x_val*=x_dir


        let segents=0

        if(segents_x>=segents_y){
            segents=segents_x
        }
        else{
            segents=segents_y

        }

        


        
        for(let segent=0;segent<segents_y;segent++){
            this.set_old_pos()

            if(segent<=segents_y-1){
                if(segent==segents_y-1){
                    
                    this.y+=r_y*y_dir
            
                }
                else{

                    this.y+=this.size_y*y_dir
        
                }
            }


            
            
            this.test_collide_y()
         
        }

















    



        



        // let r_times=0
        
        for(let segent=0;segent<segents_x;segent++){
            this.set_old_pos()
            if(segent==segents_x-1){
                this.x+=r_x*x_dir
                // r_times++
            }
            else{
                this.x+=this.size_x*x_dir
                // r_times++

            }

            

            this.test_collide_x()


            // if(block_list[parseInt((this.x+block_size)/block_size)][parseInt((this.y+block_size)/block_size)].name!="air"){
            //     this.y=parseInt((this.y)/block_size)*block_size
         
    
            // }
    
            
    
            // if(block_list[parseInt((this.x)/block_size)][parseInt((this.y+block_size)/block_size)].name!="air"){
            //     this.y=parseInt((this.y)/block_size)*block_size
         
    
            // }
    

        }





        if(this.flying){
            this.x_val*=.7
            if(Math.abs(this.x_val)<.01){
                this.x_val=0
            }
            this.y_val*=.7
            if(Math.abs(this.y_val)<.01){
                this.y_val=0
            }

        }






        // if(Math.random()<0.003){
        //     alert(r_times)
        // }
        
        




        // return "HIIIIIIIIIII"
    

    }


    test_collide_x(){


        this.check_boaundy()

        if(this.game_mode!="AscendedGost"){        
            for(let x=Math.floor(this.x/block_size);x<Math.ceil((this.x+this.size_x)/block_size);x++){
                for(let y=Math.floor(this.y/block_size);y<Math.ceil((this.y+this.size_y)/block_size);y++){
                    // change_block(x,y,"stone")
                    // if()
                    // if(Math.random()<.004){
                    //     alert("F")
                    //     alert(old_player.x)

                    // }

                    if(block_list[x][y].name!="air"){



                        if(this.x+this.size_x>(x)*block_size && this.old_x+this.size_x<=(x)*block_size){
                            // this.x=((x)*block_size)-this.size_x
                            if(block_list[x-1][y-1].name=="air" && block_list[x][y-1].name=="air" && this.grouded){
                                this.y=(y-1)*block_size
                                
                            }
                            else{

                                this.x=((x)*block_size)-this.size_x

                                
                                // //If you hit a wall Val is splite in half
                                // this.x_val/=2
                                // if(this.x_val<1){
                                //     this.x_val=0
                                // }

                                this.x_val=0


                            }

                        }
                        if(this.x<(x+1)*block_size && this.old_x>=(x+1)*block_size){
                            
                            if(block_list[x+1][y-1].name=="air" && block_list[x][y-1].name=="air" && this.grouded){
                                this.y=(y-1)*block_size
                            }
                            else{

                                this.x=((x+1)*block_size)


                                // //If you hit a wall Val is splite in half
                                // this.x_val/=2
                                // if(this.x_val>-1){
                                //     this.x_val=0
                                // }
                                this.x_val=0



                            }

                            // alert("G")
                        }

                    }
                    
                }

            }
        }
    }

    spawn_point(){
        this.x=spawn_point-(this.size_x/2)
    }


    test_collide_y(){

        this.check_boaundy()


        if(this.game_mode!="AscendedGost"){
            for(let x=Math.floor(this.x/block_size);x<Math.ceil((this.x+this.size_x)/block_size);x++){
                            for(let y=Math.floor(this.y/block_size);y<Math.ceil((this.y+this.size_y)/block_size);y++){
                                // change_block(x,y,"stone")
                                // if()
                                // if(Math.random()<.004){
                                //     alert("F")
                                //     alert(old_player.x)
                                // }

                                if(block_list[x][y].name!="air"){
                                    if(this.y+this.size_y>(y)*block_size && this.old_y+this.size_y<=(y)*block_size){
                                        this.y=((y)*block_size)-this.size_y

                                        this.y_val=0
                                        this.grouded=true

                                        
                                    }

                                    if(this.y<((y)*block_size)+block_size && this.old_y>=((y)*block_size)+block_size){
                                        this.y=((y)*block_size)+block_size 

                                        this.y_val=0
                                        // this.grouded=true

                                        

                                    }



                                }
                                
                            }
            }
         }

    }
    set_old_pos(){
        this.old_x=this.x
        this.old_y=this.y

    }

    set_game_mode(game_mode,defalt=true,keep_the_same_list=[]){

        let keep_traits=[]

        if(defalt){
            keep_the_same_list.forEach(trait => {

                if(typeof trait!="string"){
                    // console.log("BBB")

                    if(this[trait[0]]){
                        keep_traits.push({"object":this[trait[0]][trait[1]],"path":trait})
                        // console.log("AAA")
                        // console.log(this[trait[0]])

                    }
                         
              

                }
                else{
                    keep_traits.push({"name":trait,"object":this[trait]})
                }
                // keep_traits.push({"name":trait,"object":this[trait]})
               
                
            });
            this.set_defalt()

            keep_traits.forEach(trait => {
                if(trait.path!=undefined){
                    // console.log(trait.path[0]+"  "+trait.path[1])

                    // console.log(this[trait.path[0]][trait.path[1]])

                    // console.log("OBJ")
                    // console.log(trait.object)
                    this[trait.path[0]][trait.path[1]]=trait.object
                }
                else{
                    this[trait.name]=trait.object
                }
  
                
            });
        }

        player.game_mode=game_mode




    }

    draw(){

        // if(Math.random()<.1){
        //     particles.push(new par(player.x,player.y,engin.time_in_loop+700+(Math.random()*400),"245,245,255" ))
        //     // alert(" PART")

        // }

        // screen.fillStyle = "rgb("+this.color+")" ;

        // screen.fillRect((this.x*FOV)-player.cam[0],(this.y*FOV)-player.cam[1], this.size_x*FOV,this.size_y*FOV); 
    }
}         








function send_traits_to_new_player(player){
    let new_player={}

    for(let i=0;i<player.send_trait.length;i++){
        element=player.send_trait[i]
        // eval(("new_player."+element+"=player."+element))
        new_player[element]=player[element]
    };

    return new_player
}


function traits_to_new_player(player,trait_list){
    let new_player={}

    for(let i=0;i<trait_list.length;i++){
        element=trait_list[i]
        // eval(("new_player."+element+"=player."+element))
        if(element=="inventory"){
            let new_inventory=[]
            player["inventory"].forEach(item => {
                new_inventory.push({"item":item.item.name,"count":item.count})
            });

            // console.log(new_inventory)

            new_player["inventory"]=new_inventory

        }
        else{
            new_player[element]=player[element]
        }
        
    };

    return new_player
}




if(is_server){
    module.exports={start_flying}
}