//V2.7

// const { block_list } = require("./setup_world")


reseve=false
change_block=function(x,y,block_name,break_block=false){

    if(break_block && !is_server){
        let current_block=block_list[x][y].image
        for(let i=0;i<5;i++){
            
            
            console.log(current_block)
            let color=false

            try{
                color=image_pixles(current_block)[Math.round((current_block.width-1)*Math.random()) ][Math.round((current_block.height-1)*Math.random())  ]  
            }
            catch{
                console.log("err")
            }
            
            

            if(color){
                // alert("color")
                particles.push(new par(x*block_size,y*block_size,engin.time_in_loop+700+(Math.random()*400),color ))

            }


            
        }    
    }


    



    block_list[x][y]=get_block(block_name)
 
 
    // if(!reseve && !is_server){
    //     console.log("CHANGE BLOCK")
        emit_self_data("change_block",arguments)
    // }

    
    

}







function convert_names_to_blocks(block_list_names){
    let block_list=[]
    for(let x=0;x<block_list_names.length;x++){
        let line=[]
        for(let y=0;y<block_list_names[0].length;y++){
            line.push(get_block(block_list_names[x][y]))
        }
        block_list.push(line)
    
    }

    
    return block_list
}

function convert_blocks_to_names(){
    let new_block_list=[]
    for(let x=0;x<block_list.length;x++){
        let line=[]
        for(let y=0;y<block_list[0].length;y++){
            line.push(block_list[x][y].name)
        }
        new_block_list.push(line)
    
    }

    
    return JSON.stringify(new_block_list)
}











function block_is(x,y,name){
    if(x<0){
        x=0
    }
    if(x>block_list.length-1){
        x=block_list.length-1
    }

    if(y<0){
        y=0
    }
    if(y>block_list.length-1){
        y=block_list.length-1
    }

    return block_list[x][y].name==name
}


function get_block(item){
    let block=""

    if(typeof item=="object"){
        block=new blocks[item.item]()
        block.type="block"  
        block.count=item.count
    }
    else{
        block=new blocks[item]()
        block.type="block"        
    }

    return block
}




function export_block_list(){

    let new_block_list=[]
    for(let x=0;x<block_list.length;x++){
        let line=[]
        for(let y=0;y<block_list[x].length;y++){
            line.push(block_list[x][y].name)
        }
        new_block_list.push(line)
    }

    return new_block_list
}

function reload_path(){

    class basic_block{
        constructor(){
            this.type="block"

            this.hand_size=.6


        }

    }

    class blank extends basic_block{
        constructor(){
            super()

            this.name="blank"
            this.hiden_in_accended=true


            if(!is_server){
                this.image=blank_image
            }


        }

    }

    class dirt extends basic_block{
        constructor(){
            
            


            super()
            this.category="nature"

            this.name="dirt"
            this.display_name="Dirt"

            this.destroy_time=2
            if(!is_server){
                this.image=dirt_image
            }
            




        }

    }

    // dirt = {
    //     "name":"dirt",
    //     "destroy_time":2,
    //     "image":dirt_image
    // }





    // t_pre=class t_pre{
    //     constructor(){
    //         this.name=3
    //     }
    // }

    // class t{
    //     constructor(){
    //         this.name=new t_pre()
    //     }
    // }


    // t_2=new t()


    // y={
    //     "y_test":t_2.name
    // }

    // t_2.name="HJNEFNEFJ"

    // alert(y.y_test.name.name)

















    class missing_block extends basic_block{
        constructor(){
            super()

            this.name="missing_block"
            this.display_name="Missing Block"

            this.destroy_time=0

            if(!is_server){
                this.image=missing_block_image
            }
        }

    }




    class air extends basic_block{
        constructor(){
            super()

            this.name="air"
            this.hiden_in_accended=true

            

            if(!is_server){
                this.image=air_image
            }
        }

    }


    class grass extends basic_block{
        constructor(){
            super()

            this.category="nature"
            this.name="grass"
            this.display_name="Grass"

            this.destroy_time=2

            if(!is_server){
                this.image=grass_image
            }

            this.random_tick={
                "event":function(x,y){
              
                    if(!block_is(x,y-1,"air")){
                        
                        change_block(x,y,"dirt")
                        // console.log("EVENT DO THOIING")
                    }
                    else{
                        if(block_is(x-1,y,"dirt") && block_is(x-1,y-1,"air")){
                            
                            change_block(x-1,y,"grass")
                        // console.log("EVENT DO THOIING")

                    

                        }
                        if(block_is(x+1,y,"dirt")  && block_is(x+1,y-1,"air")){
                            change_block(x+1,y,"grass")
                        // console.log("EVENT DO THOIING")

                        }
                    }



                    
                },
                "loop":true,
                "time":function(){
                    return (10000*Math.random())+14000
                }
            }

        }

    }


    class stone_brick extends basic_block{
        constructor(){
            super()

            this.display_name="Stone Brick"

            this.name="stone_brick"
            this.destroy_time=10

            if(!is_server){
                this.image=stone_brick_image
            }
        }

    }

    class magnifying_glass{
        constructor(){
            

            this.name="magnifying_glass"
            this.destroy_time=0
            this.hand_size=1

            if(!is_server){
                this.image=magnifying_glass_image
            }
            this.hiden_in_accended=true

        }

    }



    // magnifying_glass_image

  

    class cracked_block extends basic_block{
        constructor(){
            super()

            this.name="cracked_block"
            this.hiden_in_accended=true


            if(!is_server){
                this.image=cracked_block_image
            }
        }

    }

    class stone_statue extends basic_block{
        constructor(){
            super()

            this.hiden_in_accended=true
            this.name="stone_statue"

            if(!is_server){
                this.image=stone_statue_image
            }
        }

    }


    class stone extends basic_block{
        constructor(){
            super()

            // nature
            this.category="earth"

            this.name="stone"
            this.display_name="Stone"

            this.destroy_time=8

            if(!is_server){
                this.image=stone_image
            }
    
          
    
    
    
        }
    
    }
    
    
 


    
    
    blocks={"dirt":dirt,"stone":stone,"air":air,"grass":grass,"stone_brick":stone_brick,"stone_statue":stone_statue,"cracked_block":cracked_block,"missing_block":missing_block,"blank":blank ,"magnifying_glass":magnifying_glass }
}

reload_path()

if(is_server){
    module.exports={get_block,reload_path,change_block,block_is}
}
