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

                this_player.flying_emitter.particle=new particle_emitter({
                    "parent":this_player,
                    "parent_location":{"base":this_player.flying_emitter,"property":"particle"},



                    "particle":fly_par
                }) 
                particles.push(this_player.flying_emitter.particle)            
            





            // if(!is_server){
            // console.log("--"+x)

            // console.log(this_player)
            // console.log("--")
            this_player.flying=true
                            
            for(let i=0;i<10;i++){
                particles.push(new fly_par({"x":this_player.x+(this_player.size_x/2),"y":this_player.y+(this_player.size_y/2),"color":"181, 255, 250 ","angle":(Math.PI*(Math.random()*2)) }))
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







effects=[
    {
        "name":"regeneration",
        "function_effect":function(){
            heal_heart(1)
        },
        "time_interval":3000
    },
    {
        "name":"poison",
        "function_effect":function(){
            damage_heart(1)
        },
        "time_interval":750
    }
]





















class Entity_class{
    constructor(){

    }
    // static give_item_to_match(item,inventory,count=1){
    //     for(let i=0;i<inventory.length && count>0;i++){
    //         let inventory_slot = inventory[i]

    //         if(inventory_slot.name==item.name){
    //             // if(inventory_slot.)
    //         }
    //     }

    //     return count
    // }

    static give_item_to_match(item,inventory,count=undefined){

        if(typeof item=="string"){
            item = {"item":create_item(item)}
        }

        if(count==undefined){
            
            if(item.count){
                count = item.count
            }
            else{
                count = 0
            }
        }

        

        // let stack_found=false
        
        // for(let i=0;i<inventory.length;i++){
        //     slot_stack_size = stack_size
        //     if(!stack_found){
             
        //         if(inventory[i].item.name==item.name){
        //             let pass=true



        //             if(inventory[i].count==undefined){
        //                 inventory[i].count = 0
        //             }
                    
        //             if(inventory[i].count+count>slot_stack_size){
                            
        //                     count-=(slot_stack_size-inventory[i].count)
        //                     inventory[i].count=slot_stack_size
                            
        //                     pass=false
        //             }
        //             else{
        //                 // if(count)
        //                 // 
        //                inventory[i].count+=count 
        //                count = 0
        //             //    pass=false

        //             }
                 
                
        //             if(pass){
        //                 i=9
        //                 stack_found=true                        
        //             }

        //         }                
        //     }



            
        // }

        // if(!stack_found){
        //     for(let i=0;i<inventory.length && stack_found==false;i++){
        //         if(inventory[i].item.name=="blank"){
        //             inventory[i].item=item
        //             inventory[i].count=count
                
        //             stack_found=true
        //         }                
        //     }            
        // }


        // return stack_found


        let slot_stack_size
        for(let i=0;i<inventory.length && count>0;i++){
            
            slot_stack_size = get_property(inventory[i].item,"stack_size")     
            
            if(inventory[i].item.name==item.item.name){
       
                


                    
                    
                    
                    if(inventory[i].item.count+count>slot_stack_size){
                     
                            count-=(slot_stack_size-inventory[i].item.count)

                            inventory[i].count=slot_stack_size
                            
                    }
                    else{

                       inventory[i].item.count+=count 
                       count = 0

                    }
                 
                
                    

            }                   
        }

        return count
    }

    static give_item(item,inventory,count=undefined){

        if(typeof item=="string"){
            item = create_item(item)
        }

        if(count==undefined){
            
            if(item.count){
                count = item.count
            }
            else{
                count = 0
            }
        }


        let slot_stack_size
        for(let i=0;i<inventory.length && count!=0;i++){
            
         
            if(inventory[i].item.name=="blank"){
                inventory[i].item = item
                inventory[i].item.count = 0

            }       
            
            slot_stack_size = get_property(inventory[i].item,"stack_size")  
            
            
            if(inventory[i].item.name==item.name){
       
                


                    
                    
                    
                    if(inventory[i].item.count+count>slot_stack_size){
                    //  alert(inventory[i].item.count+count)
                            count-=(slot_stack_size-inventory[i].item.count)

                            inventory[i].item.count=slot_stack_size

                            
                            
                    }
                    else{

                       inventory[i].item.count+=count 
                       count = 0

                    }
                 
                
                    

            }                   
        }

        // alert(count)
        return count
    }
}









class player_class{
    constructor(){

        this.give_item = function(item,count=1){
            let new_inventory = []

            for(let i=9;i<this.inventory.length;i++){
                new_inventory.push(this.inventory[i])
            }

            let remaining_count = Entity_class.give_item_to_match(item,new_inventory,count)

            if(remaining_count!=0){
                Entity_class.give_item(item,this.inventory,count)
            }
            
        }

        this.hunger=19
        this.max_hunger=20
        



        this.set_defalt=function(){
            this.flying=false
            
            if(this.flying_emitter){
                this.flying_emitter.particle=undefined
            }
            
            
            // console.log(this.flying_emitter)

        }



        this.knowledge=[
            // {"name":"red_mushroom","text":"Kills You When Eaten"}
        ]


        

        // this.inventory_hand=

        this.FlySprintMultiplier=1.3
        this.AirWalkMultiplier=1

        this.effects=[]


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

        this.break_with_slot = {"index":this.selected_slot_index.index}

        this.show_hot_bar=true
        this.show_inventory_hand=false

        this.inventory_hand=undefined
 

        this.inventory=[

        ]

        // this.inventory_ui=[]


        


        this.old_x=0
        this.old_y=0

        // this.size_x=25
        // this.size_y=56

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
        this.save_traits=["color","x","y","cam","inventory","game_mode","knowledge"]

        
        this.block_brocking=false

        this.game_mode="Servival"





    }

    take_hunger(hunger_pionts){

        this.hunger-=hunger_pionts

        if(this.hunger<0){

            this.hunger=0

            damage_heart(1)

        }
       
    }
    
    give_hunger(hunger_pionts){

        this.hunger+=hunger_pionts

        if(this.hunger>this.max_hunger){

            this.hunger=this.max_hunger
            

        }
       
    }


    add_knowledge(added_knowledge){
        let knowledge_found=false
        this.knowledge.forEach(knowledge => {
            if(knowledge.name==added_knowledge.name){
                knowledge_found=true
            }
        });
        if(!knowledge_found){
            this.knowledge.push(added_knowledge)
        }
        
        
        return !knowledge_found
    }


    add_effect(name,duration=1000){
        let effect_found=false
        this.effects.forEach(effect => {
            if(effect.name==name){
                effect_found=true

                if(effect.duration<duration){
                    effect.duration=duration
                    // console.log(effect.duration)
                }
                
            }
        });
        if(!effect_found){
            this.effects.push({"name":name,"duration":duration})
        }
        
    }

    check_boaundy(){
        if(player.x<0){
            player.x=0
            // console.log("SET 0")
        }
        if(player.y<0){
            player.y=0
        }
 
        if(world_setting.world_size && player.x+player.size_x>=(world_setting.world_size[0]*chuck_size)*block_size){

            player.x=((world_setting.world_size[0]*chuck_size)*block_size)-player.size_x

        }
        if(world_setting.world_size && player.y+player.size_y>=(world_setting.world_size[1]*chuck_size)*block_size){
            player.y=((world_setting.world_size[1]*chuck_size)*block_size)-player.size_y
        }
    
    }



    reset_inventory(){

        this.inventory.splice(0,this.inventory.length)

        for(let i=0;i<4*9;i++){

            // this.inventory.push(create_item("blank"))
            this.inventory.push(new inventory_slot(create_item("blank")))
          
        }

        // for(let i=0;i<4*9;i++){



            
        //     // try{
                
        //     //     let old_item=this.inventory[i].item
                
        //     //     this.inventory[i]=new inventory_slot(create_item("blank"))

        //     //     this.inventory[i].item = old_item
        //     //     this.inventory[i].item.count=old_item.count
                
        //     // }
        //     // catch{
        //     this.inventory_ui.push(new inventory_slot(create_item("blank")))
        //     // }

            
        
        // }
        
        

        // this.inventory_hand=create_item("blank")
        this.inventory_hand=new inventory_slot(create_item("blank"))

        // console.log(this.inventory_hand)
        // console.log(this.inventory)



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
                    

                    let collision_boxs
                    if(get_block_from_index(x,y)!=undefined){
                        collision_boxs = get_property(get_block_from_index(x,y),"collision_box")
                    }

                    let collision_boxs_top
                    if(get_block_from_index(x,y-1)!=undefined){
                        collision_boxs_top = get_property(get_block_from_index(x,y-1),"collision_box")
                    }

                    let collision_boxs_top_left
                    if(get_block_from_index(x-1,y-1)!=undefined){
                        collision_boxs_top_left = get_property(get_block_from_index(x-1,y-1),"collision_box")
                    }

                    let collision_boxs_top_right
                    if(get_block_from_index(x+1,y-1)!=undefined){
                        collision_boxs_top_right = get_property(get_block_from_index(x+1,y-1),"collision_box")
                    }
                    
            
                    if(typeof collision_boxs=="object"){
                        collision_boxs.forEach(collision_box => {


                            if(this.x+this.size_x>(x*block_size)+collision_box.x && this.old_x+this.size_x<=(x*block_size)+collision_box.x){

                                if((collision_boxs_top_left==false) && (collision_boxs_top==false) && this.grouded){
    
                                    this.y=((y-1)*block_size)+collision_box.y
                                    
                                }
                                else{
    
                                    this.x=((x*block_size)+collision_box.x)-this.size_x
                                    this.x_val=0
    
                                }
    
                            }
    
    
                            if(this.x<(x*block_size)+(collision_box.x+collision_box.size_x) && this.old_x>=(x*block_size)+(collision_box.x+collision_box.size_x)){
                                
                                if((collision_boxs_top_right==false) && (collision_boxs_top==false) && this.grouded){
                                    this.y=((y-1)*block_size)+collision_box.y
                                }
                                else{
    
                                    this.x=(x*block_size)+(collision_box.x+collision_box.size_x)
                                    this.x_val=0
    
    
                                }
    
                            }
                        });

                    }
                    else if(collision_boxs!=false){

                        if(this.x+this.size_x>(x)*block_size && this.old_x+this.size_x<=(x)*block_size){

                            if((collision_boxs_top_left==false) && (collision_boxs_top==false) && this.grouded){

                                this.y=(y-1)*block_size
                                
                            }
                            else{

                                this.x=((x)*block_size)-this.size_x
                                this.x_val=0

                            }

                        }


                        if(this.x<(x+1)*block_size && this.old_x>=(x+1)*block_size){
                            
                            if((collision_boxs_top_right==false) && (collision_boxs_top==false) && this.grouded){
                                this.y=(y-1)*block_size
                            }
                            else{

                                this.x=((x+1)*block_size)
                                this.x_val=0


                            }

                        }
                
                    }

                }
            }
        }

    }

    spawn_point(){

        this.x=spawn_point-(this.size_x/2)
        this.y=0

        this.effects=[]

    }


    test_collide_y(){

        this.check_boaundy()


        if(this.game_mode!="AscendedGost"){
            for(let x=Math.floor(this.x/block_size);x<Math.ceil((this.x+this.size_x)/block_size);x++){
                for(let y=Math.floor(this.y/block_size);y<Math.ceil((this.y+this.size_y)/block_size);y++){

                    let collision_boxs
                    if(get_block_from_index(x,y).name!=undefined){
                        collision_boxs = get_property(get_block_from_index(x,y),"collision_box")
                    }
                    
            
                    if(typeof collision_boxs=="object"){


                        collision_boxs.forEach(collision_box => {

                            if(this.x+this.size_x>(x*block_size)+collision_box.x && this.x<(x*block_size)+(collision_box.x+collision_box.size_x)){
                                if(this.y+this.size_y>(y*block_size)+collision_box.y && this.old_y+this.size_y<=(y*block_size)+collision_box.y){
                                    this.y=((y*block_size)+collision_box.y)-this.size_y
        
                                    this.y_val=0
                                    this.grouded=true
        
                                                
                                }


                                if(this.y<((y)*block_size)+(collision_box.y+collision_box.size_y) && this.old_y>=(y*block_size)+(collision_box.y+collision_box.size_y)){

                                    this.y=((y)*block_size)+(collision_box.y+collision_box.size_y)
        
                                    this.y_val=0
                        
                                }                                
                            }



                        });
                        

                    }
                    else  if(collision_boxs!=false){

                        if(this.y+this.size_y>(y)*block_size && this.old_y+this.size_y<=(y)*block_size){
                            this.y=((y)*block_size)-this.size_y

                            this.y_val=0
                            this.grouded=true

                                        
                        }

                        if(this.y<((y)*block_size)+block_size && this.old_y>=((y)*block_size)+block_size){

                            this.y=((y)*block_size)+block_size 

                            this.y_val=0
                
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


function get_player_traits(player,trait_list){
    let player_traits={}

    for(let i=0;i<trait_list.length;i++){
        trait=trait_list[i]

        if(trait=="inventory"){
            let new_inventory=[]
            player["inventory"].forEach(item => {

                let item_name = typeof item.name!="undefined" ? item.name : "blank"
                let item_count = typeof item.count!="undefined" ? item.count : 1

                // console.log(item_name)
                // console.log(item_count)


                new_inventory.push({"item": item_name,"count":item_count})
            });

            // console.log(new_inventory)

            player_traits["inventory"]=new_inventory

        }
        else{
            player_traits[trait]=player[trait]
        }
        
    };

    return player_traits
}
// function set_player_traits(player,trait_list){
//     let player_traits={}

//     for(let i=0;i<trait_list.length;i++){
//         trait=trait_list[i]

//         if(trait=="inventory"){
//             // let new_inventory=[]
//             // player["inventory"].forEach(item => {
//             for(let i=0;i<player["inventory"].length:i++){

//                 player["inventory"][i]=
//             }

//             // console.log(new_inventory)

//             player_traits["inventory"]=new_inventory

//         }
//         else{
//             player_traits[trait]=player[trait]
//         }
        
//     };

//     return player_traits
// }




if(is_server){
    module.exports={start_flying}
}