//V2.7

// const { block_list } = require("./setup_world")


reseve=false
change_block=function(x,y,block_name,break_block=false,this_block_list=undefined){
    // let new_block_list=[]
    if(this_block_list!=undefined){
        // new_block_list=block_list
        block_list=this_block_list
    }
    // if()
    // console.log()
    

    if(break_block && !is_server){
        let current_block=block_list[x][y].image
        for(let i=0;i<5;i++){
            
            
            // console.log(current_block)
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


    if(block_list[x][y].hit_box_index!=undefined){
        let start_x=x-block_list[x][y].hit_box_index[0]
        let start_y=y+((block_list[x][y].main_hit_box_size[1]-1)-block_list[x][y].hit_box_index[1])

        let width=block_list[x][y].main_hit_box_size[0]
        let hieght=block_list[x][y].main_hit_box_size[1]



        for(let x_i=0;x_i<width;x_i++){
            for(let y_i=0;y_i>hieght*-1;y_i--){
                let x=start_x+x_i
                let y=start_y+y_i

                // console.log(block_list[x][y].hit_box_index[1]+"  "+(y_i+(hieght/2)))
                if(typeof block_list[x][y].hit_box_index!="undefined" && block_list[x][y].hit_box_index[0]==x_i && block_list[x][y].hit_box_index[1]+"  "+(y_i+(hieght/2))){
                    block_list[x][y]=get_just_block("air",x,y)
                }
                
            }
        }

        
        // console.log(block_list[x][y].hit_box_index)
    }


    let new_block=get_just_block(block_name,x,y)


    if(new_block.hit_box!=undefined){

        for(let y_index=0;y_index<new_block.hit_box[1];y_index++){
            for(let x_index=0;x_index<new_block.hit_box[0];x_index++){
                    block_list[x+x_index][y-((new_block.hit_box[1]-1)-y_index)]=get_just_block(block_name,x+x_index,y-((new_block.hit_box[1]-1)-y_index))
                    block_list[x+x_index][y-((new_block.hit_box[1]-1)-y_index)].hit_box_index=[x_index,y_index]
                    block_list[x+x_index][y-((new_block.hit_box[1]-1)-y_index)].main_hit_box_size=new_block.hit_box
                    // console.log([x_index,y_index])
                
            }
        }
    }
    else{
        block_list[x][y]=new_block
    }

    
 
 
    // if(!reseve && !is_server){
    //     console.log("CHANGE BLOCK")
        emit_self_data("change_block",arguments)
    // }

    
    

}





blank_area=function(x,y,width,hieght){

    // console.log([x,y,width,hieght])
    let solid_found=false
    for(let x_i=x;x_i<x+width;x_i++){
        for(let y_i=y;y_i>y-hieght;y_i--){
            // console.log("f")
            if(block_list[x_i][y_i].name!="air"){
                solid_found=true
            // console.log("solid_found")

            }
        }
    }
    // console.log("f")

    return !solid_found
}

function get_block_from_index(x,y,all_blocks=block_list){
    if(x>=0 && x<all_blocks.length){
        if(y>=0 && y<all_blocks[x].length){
            return all_blocks[x][y]
        }
    }

    
}



// function convert_names_to_blocks(block_list_names){
//     let block_list=[]

//     alert("P")
//     console.log(block_list_names)
//     for(let x=0;x<block_list_names.length;x++){
//         let line=[]
//         for(let y=0;y<block_list_names[0].length;y++){
//             let block=block_list_names[x][y]

//             if(typeof block_list_names[x][y].name!="undefined"){
//                 block=block_list_names[x][y].name
//                 console.log("GRGRRGRGGRGRGR")

//                 console.log(block_list_names[x][y].data)
//             }

//             line.push(get_block(block))
//         }
//         block_list.push(line)
    
//     }

    
//     return block_list
// }

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



function number_from(min,max,seed=undefined){
    let random_num=seed!=undefined ? seed : Math.random()
    
    return function(){
        return min+Math.round((max-min)*random_num)
    }
}

function chance_table(table,val=undefined){
    let total_chance=0
    let items=0

    table.forEach(i => {
        total_chance+=i.chance
        items++
    })


    


    for(let v=0;v<table.length;v++){
        let new_total_chance=0
        if(val==undefined){
            val=number_from(0,total_chance)()
        }

        // parseInt(Math.random()*(total_chance-1))+1

        // console.log(val)
     

    
        for(let i=0;i<table.length;i++){
            let item=table[i]

            new_total_chance+=item.chance
            if(val<=new_total_chance){

                return item.name
                // console.log(item.name)
                // i=table.length
            }

        }
    }









}



class loot_table{
    constructor(items){
        this.items=items
    }
    roll(){
        let return_items=[]
        this.items.forEach(item => {
            let count

            if(typeof item.count=="number"){
                count=item.count
            }
            else{
                count=item.count()
            }
            
            if(count){
                return_items.push({
                    "name":item.name,
                    "count":count
                })
            }
            
        });


        return return_items
    }

}


test_table=new loot_table([
    {
        "name":"grass_seed",
        "count":number_from(0,2)
    }
])



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

function get_just_block(block_name,x=undefined,y=undefined){
    // console.log(x,y)
    let block=false

    if(typeof block_name=="object"){
        block=new blocks[block_name.name](x,y)
        block.type="block"  
        block.count=block_name.count
    }
    else{
        // try{
            // console.log(blocks[item]==undefined)
        if(blocks[block_name]!=undefined){
            block=new blocks[block_name](x,y)
            block.type="block"             
        }


        
               
    }


    return block
}

// function get_block(item_name){
//     let block=get_just_block(item_name)
//     let item=false

//     if(!block){
//         item=get_just_item(item_name)
//     }



//     // if(typeof block.hit_box!="undefined"){
//     //     block.type="block"        

//     // }

//     return block ? block : item
// }

function get_item(item_name){
    let block=get_just_block(item_name)
    let item=false

    if(!block){
        item=get_just_item(item_name)
    }



    
    if(item || block){

        return item ? item : block
    }
    else{
        return get_just_block("blank")
    }
    
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



class basic_block{
        constructor(x=undefined,y=undefined){

            this.x = x
            this.y = y


            this.hand_size=.6
            this.collision_box=true

            this.save_traits=[
                "main_hit_box_size",
                "hit_box_index",
                
                "dir",
                "extrude_min",
                "extrude_max",
                "extrude_distance",
                

                "structure_x",
                "structure_y",

                
                "extrude_block",
                "end_structure",
                "outline_boxs",
                "structure_name",

                "void",


                "offset_x",
                "offset_y",
                "structure_size_x",
                "structure_size_y"


            ]



        }

}



class blank extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.name="blank"
            this.hiden_in_accended=true


            if(!is_server){
                this.image=blank_image
            }


        }

}

function load_extrude_block_old(block,all_blocks = block_list){


    let end_structure_offset_x = 0
    let end_structure_offset_y = 0


    block.offset_x = 0
    block.offset_y = 0

    block.ghost_layers = []



    if(block.dir==0 || block.dir==2){
        let extrude_length = block.extrude_distance
        let line = []



        for(let i=0;i<extrude_length;i++){
            line.push(get_just_block(block.extrude_block))
        }


        let ghost_layer = {
            "layer" : [ line ]
        }

        
        if(block.dir==0){
            ghost_layer.offset_y = (extrude_length*-1) + 1




            end_structure_offset_y = ghost_layer.offset_y
        }   
        else{

                end_structure_offset_y = extrude_length + 1
                
        
            
        }


        
        

        
        block.ghost_layers.push(ghost_layer)    
        
    }
    else{
        end_structure_offset_y = 1

        let extrude_length = block.extrude_distance
        let layer = []

        for(let i=0;i<extrude_length;i++){
            layer.push([get_just_block(block.extrude_block)])
        }


        let ghost_layer = {
            "layer" : layer
        }

        // console.log(block.ghost_layer)
         


   
        
        if(block.dir==3){
            ghost_layer.offset_x = (extrude_length*-1)+1


            end_structure_offset_x = ghost_layer.offset_x-1
        }   
        else{

                end_structure_offset_x = extrude_length
                
        
            
        }


        block.ghost_layers.push(ghost_layer)   
    }




    end_structure_offset_x += (block.end_structure.offset_x)
    end_structure_offset_y += (block.end_structure.offset_y)

    // console.log(end_structure_offset_x)
    // console.log(block.end_structure.offset_y)


    let end_structure = structures[block.end_structure.name]
    if(typeof end_structure != "undefined"){

        let layer = []

        let structcher = convert_names_to_blocks(end_structure)

        // console.log(structcher)


        for(let x=0;x<end_structure.length;x++){

            let line = []

            for(let y=0;y<end_structure[0].length;y++){


                // // console.log(end_structure[x][y].data)

                // let block = get_just_block(end_structure[x][y].name)
         
                // if(block){

                //     let data = end_structure[x][y].data
                //     if(data!=undefined){
                //         console.log(data)
                //         block.data = data
                //     }

                //     line.push(block)
                // }
                // else{
                //     line.push(get_just_block("air"))

                // }

                // let block = structcher[x][y]

                // if(block){

                //     line.push(block)

                // }
                // else{
                    line.push(get_just_block("air"))
                    
                // }



                
            }
            layer.push(line)
        }

        // layer.

        load_structure(0,0,structcher,layer)


        
        // console.log(layer)


        block.ghost_layers.push({

            "layer":layer,
            "offset_x":end_structure_offset_x,
            "offset_y":end_structure_offset_y-end_structure[0].length
            
        }) 



    }

  


    if(block.extrude_distance==undefined){

        randomize_extrude_distance(block)

    }
        console.log("CHANGE" + block.extrude_distance)



    
    


    let offset_x=0

    if(end_structure_offset_x_text.text!=undefined){
        offset_x = JSON.parse(end_structure_offset_x_text.text)
    }


    let offset_y=0

    if(end_structure_offset_x_text.text!=undefined){
        offset_y = JSON.parse(end_structure_offset_y_text.text)
    }

    // alert(end_structure_text.text)
    // alert(offset_y)


    
    block.end_structure = {

        "name": end_structure_text.text,
        "offset_x": offset_x,
        "offset_y": offset_y

    }





    remake_etrude_structcher_ghosts(block)



}

function load_extrude_block(block,all_blocks = block_list){

    let end_structure_offset_x = 0
    let end_structure_offset_y = 0


    block.offset_x = block.offset_x || 0
    block.offset_y = block.offset_y || 0



    block.extrude_distance = 0

    if(typeof block.extrude_min=="number" && typeof block.extrude_min=="number"){
        block.extrude_distance = number_from(block.extrude_min,block.extrude_max)()
    }



    if(block.dir==0 || block.dir==2){
        let extrude_length = block.extrude_distance
        // let line = []


        // console.log(extrude_length)

        for(let i=0;i<extrude_length;i++){

            all_blocks[block.x][block.y-i] = get_just_block(block.extrude_block,block.x,block.y-i)
            // console.log("rrrr"+block.x)
        }


        
        if(block.dir==0){
            end_structure_offset_y = (extrude_length*-1) + 1




        }   
        else{

                end_structure_offset_y = extrude_length + 1
                
        
            
        }


        
        
  
        
    }
    else{
        end_structure_offset_y = 1

        let extrude_length = block.extrude_distance
        let layer = []

        for(let i=0;i<extrude_length;i++){
            layer.push([get_just_block(block.extrude_block)])
        }


        let ghost_layer = {
            "layer" : layer
        }

        // console.log(block.ghost_layer)
         


   
        
        if(block.dir==3){
            ghost_layer.offset_x = (extrude_length*-1)+1


            end_structure_offset_x = ghost_layer.offset_x-1
        }   
        else{

                end_structure_offset_x = extrude_length
                
        
            
        }


        block.ghost_layers.push(ghost_layer)   
    }



    end_structure_offset_x += (block.offset_x)
    end_structure_offset_y += (block.offset_y)

    
    // console.log(end_structure_offset_y)



    // console.log(end_structure_offset_x)
    // console.log(block.end_structure.offset_y)


    let end_structure = structures[block.end_structure]

    if(typeof end_structure != "undefined"){

        let structcher = convert_names_to_blocks(end_structure)

        // console.log(block.x+end_structure_offset_x)
        load_structure((block.x+end_structure_offset_x),(block.y+end_structure_offset_y)-(structcher.length-1),structcher,all_blocks)




    }

  


    // if(block.extrude_distance==undefined){

    //     randomize_extrude_distance(block)

    // }
    //     console.log("CHANGE" + block.extrude_distance)



    
    


    // let offset_x=0

    // if(end_structure_offset_x_text.text!=undefined){
    //     offset_x = JSON.parse(end_structure_offset_x_text.text)
    // }


    // let offset_y=0

    // if(end_structure_offset_x_text.text!=undefined){
    //     offset_y = JSON.parse(end_structure_offset_y_text.text)
    // }

    // // alert(end_structure_text.text)
    // // alert(offset_y)


    
    // block.end_structure = {

    //     "name": end_structure_text.text,
    //     "offset_x": offset_x,
    //     "offset_y": offset_y

    // }





    // remake_etrude_structcher_ghosts(block)



}



class extrude_block extends basic_block{
    constructor(x=undefined,y=undefined){
        super(x,y)




        this.name="extrude_block"
        this.display_name="Extrude Block"
        this.transparent=true

        this.kills_grass=false

        this.collision_box=false

        this.dir=0

        this.extrude_min = 0
        this.extrude_max = 0



        this.extrude_block=""

        this.offset_x = 0
        this.offset_y = 0



        this.on_right_clicked=function(){


            if(KeysDown["Control"]){
                this.dir++
                if(this.dir>3){
                    this.dir=0
                }                
                

            }
            else{
                selected_extrude_block=this
                
                select_extrude_direction_images()

                extrude_to_wall_min_text.text=""+(this.extrude_min)+""
                extrude_to_wall_max_text.text = ""+(this.extrude_max)+""

                extrude_block_name.text = this.extrude_block

                if(this.end_structure!=undefined){
                    end_structure_text.text = this.end_structure
                    end_structure_offset_x_text.text = ""+(this.offset_x)+""
                    end_structure_offset_y_text.text = ""+(this.offset_y) +""             
                }
                else{
                    end_structure_text.text = ""
                    end_structure_offset_x_text.text = ""
                    end_structure_offset_y_text.text = ""   
                }






                // this.extrude_min+="f"
                
                engin.change_selected_layer("extrude_block","push")
                
            }





            
        }




        

        
        if(!is_server){

            this.image=extrude_block_image

        }

    }

}





class laod_block extends basic_block{
    constructor(x=undefined,y=undefined){
        super(x,y)




        this.name="laod_block"
        this.display_name="Laod Block"
        this.transparent=true

        this.kills_grass=false

        this.collision_box=false

        this.structure_name=""
        this.structure_x=0
        this.structure_y=0

        this.structure_size_x=10
        this.structure_size_y=10




        // this.dir=0

        this.on_right_clicked=function(){
            // alert(this.x)
            if(this.structure_name==undefined){
                this.structure_name=""
            }
            load_structure_block = this


            load_structure_name.text=this.structure_name
            
            load_structure_size_x.text = ""+load_structure_block.structure_size_x+""
            load_structure_size_y.text = ""+load_structure_block.structure_size_y+""


            load_structure_x.text = ""+load_structure_block.structure_x+""
            load_structure_y.text = ""+load_structure_block.structure_y+""

            // load_structure_block.structure_y = JSON.parse(load_structure_y.text)




            engin.change_selected_layer("load_structure","push")
            
        }

        

        


        if(!is_server){

            this.image=load_block_image

        }

      



    }

}



class dirt extends basic_block{
    constructor(x=undefined,y=undefined){
            
            


            super(x,y)
            this.category="nature"

            this.name="dirt"
            this.display_name="Dirt"

            this.destroy_time=2
            if(!is_server){
                this.image=dirt_image.image(undefined,x,y)
            }
            




        }

}

class log extends basic_block{
    constructor(x=undefined,y=undefined){
        
        


        super(x,y)
        this.category="nature"

        this.name="log"
        this.display_name="Log"
        this.collision_box=false

        // this.loot_table=

        this.broken_with = [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",

                "loot_table" : new loot_table([
                    {
                        "name":"bark",
                        "count":1
                    }
                ]),
                "replace_with" : {
                    "name" : "slightly_striped_log"
                }
            }
        ]


        // this.on_destoyed = function(){
            
        //     if(this.path_stage==undefined || this.path_stage<3){
        //         block_list[this.x][this.y] = this
        //     }
        //     else{
        //         change_block(this.x,this.y,"striped_log",false)

        //         return
        //     }
            

        //     if(this.path==undefined){
        //         this.path = bark_chunk_paths[number_from(0,2)()]
        //         this.path_stage = 0
        //     }
        //     else if(this.path_stage<3){
        //         this.path_stage++
        //         // alert(this.path)
        //     }


            




        //     // change_block(this.x,this.y,"log",true)

        //     // console.log(this.path,this.path_stage)
        //     this.image = [log_image,this.path[this.path_stage]]

        // }

        this.destroy_time=2.5
        if(!is_server){
            this.image=log_image
        }
        




    }

}

class slightly_striped_log extends basic_block{
    constructor(x=undefined,y=undefined){
        
        


        super(x,y)
        this.category="nature"

        this.name="slightly_striped_log"
        this.display_name="Slightly Striped Log"
        this.collision_box=false

        // this.loot_table=

        this.broken_with = [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",
                "minning_speed" : 0.75,
                "loot_table" : new loot_table([
                    {
                        "name":"bark",
                        "count":1
                    }
                ]),
                "replace_with" : {
                    "name" : "moderately_striped_log"
                }
            }
        ]


        // this.on_destoyed = function(){
            
        //     if(this.path_stage==undefined || this.path_stage<3){
        //         block_list[this.x][this.y] = this
        //     }
        //     else{
        //         change_block(this.x,this.y,"striped_log",false)

        //         return
        //     }
            

        //     if(this.path==undefined){
        //         this.path = bark_chunk_paths[number_from(0,2)()]
        //         this.path_stage = 0
        //     }
        //     else if(this.path_stage<3){
        //         this.path_stage++
        //         // alert(this.path)
        //     }


            




        //     // change_block(this.x,this.y,"log",true)

        //     // console.log(this.path,this.path_stage)
        //     this.image = [log_image,this.path[this.path_stage]]

        // }

        this.destroy_time=2.5
        if(!is_server){
            this.image=slightly_striped_log_image.image(undefined,this.x,this.y)
        }
        




    }

}

class moderately_striped_log extends basic_block{
    constructor(x=undefined,y=undefined){
        
        


        super(x,y)
        this.category="nature"

        this.name="moderately_striped_log"
        this.display_name="Moderately Striped Log"
        this.collision_box=false

        // this.loot_table=

        this.broken_with = [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",
                "minning_speed" : 0.75,
                "loot_table" : new loot_table([
                    {
                        "name":"bark",
                        "count":1
                    }
                ]),
                "replace_with" : {
                    "name" : "mostly_striped_log"
                }
            }
        ]


        // this.on_destoyed = function(){
            
        //     if(this.path_stage==undefined || this.path_stage<3){
        //         block_list[this.x][this.y] = this
        //     }
        //     else{
        //         change_block(this.x,this.y,"striped_log",false)

        //         return
        //     }
            

        //     if(this.path==undefined){
        //         this.path = bark_chunk_paths[number_from(0,2)()]
        //         this.path_stage = 0
        //     }
        //     else if(this.path_stage<3){
        //         this.path_stage++
        //         // alert(this.path)
        //     }


            




        //     // change_block(this.x,this.y,"log",true)

        //     // console.log(this.path,this.path_stage)
        //     this.image = [log_image,this.path[this.path_stage]]

        // }

        this.destroy_time=2.5
        if(!is_server){
            this.image=moderately_striped_log_image.image(undefined,this.x,this.y)

        }
        




    }

}

class mostly_striped_log extends basic_block{
    constructor(x=undefined,y=undefined){
        
        


        super(x,y)
        this.category="nature"

        this.name="mostly_striped_log"
        this.display_name="Mostly Striped Log"
        this.collision_box=false

        // this.loot_table=

        this.broken_with = [
            {
                "tool_type" : "axe" 
            },
            {
                "tool_type" : "knife",
                "minning_speed" : 5,
                "loot_table" : new loot_table([
                    {
                        "name":"bark",
                        "count":1
                    }
                ]),
                "replace_with" : {
                    "name" : "striped_log"
                }
            }
        ]


        // this.on_destoyed = function(){
            
        //     if(this.path_stage==undefined || this.path_stage<3){
        //         block_list[this.x][this.y] = this
        //     }
        //     else{
        //         change_block(this.x,this.y,"striped_log",false)

        //         return
        //     }
            

        //     if(this.path==undefined){
        //         this.path = bark_chunk_paths[number_from(0,2)()]
        //         this.path_stage = 0
        //     }
        //     else if(this.path_stage<3){
        //         this.path_stage++
        //         // alert(this.path)
        //     }


            




        //     // change_block(this.x,this.y,"log",true)

        //     // console.log(this.path,this.path_stage)
        //     this.image = [log_image,this.path[this.path_stage]]

        // }

        this.destroy_time=2.5
        if(!is_server){
            
            this.image=mostly_striped_log_image.image(undefined,this.x,this.y)

        }
        




    }

}

class striped_log extends basic_block{
    constructor(x=undefined,y=undefined){
        
        


        super(x,y)
        this.category="nature"

        this.name = "striped_log"
        this.display_name="Striped Log"
        this.collision_box=false




        this.destroy_time=2.5
        if(!is_server){
            this.image=striped_log_image
        }
        




    }

}



class plank extends basic_block{
    constructor(x=undefined,y=undefined){
        
        


        super(x,y)
        this.category="nature"

        this.name="plank"
        this.display_name="Plank"
    


        this.destroy_time=1.5
        if(!is_server){
            this.image=plank_image
        }
        




    }

}





class leaf extends basic_block{
    constructor(x=undefined,y=undefined){
        
        


        super(x,y)
        this.category="nature"
        this.transparent=true
        this.collision_box=false

        this.loot_table=new loot_table([
            {
                "name":"stick",
                "count":number_from(0,1)
            }
        ])


        this.name="leaf"
        this.display_name="Leaf"

        this.destroy_time=0.75
        if(!is_server){

            this.side_image=leaf_side1_image
            this.image=leaf_image.image(undefined,this.x,this.y)
            
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
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.name="missing_block"
            this.display_name="Missing Block"

            this.destroy_time=0

            if(!is_server){
                this.image=missing_block_image
            }
        }

}

class knowledge_tablet extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.transparent=true

            this.hit_box=[2,2]

            this.use_after_duration=1000
            this.on_used=function(){

                // for(let mushroom in mushrooms){
                    // if(mushrooms[mushroom].effect=="poison"){
                    player.add_knowledge({"name":all_mushrooms_colors[0],"text":all_mushrooms_effects[0].knowledge})
                    player.add_knowledge({"name":all_mushrooms_colors[1],"text":all_mushrooms_effects[1].knowledge})
                    player.add_knowledge({"name":all_mushrooms_colors[2],"text":all_mushrooms_effects[2].knowledge})


                    // window[all_mushrooms_effects[0].effect+"_mushroom"]

                    for(let mushroom_index=0;mushroom_index<all_mushrooms_effects.length;mushroom_index++){
                        let mushroom=all_mushrooms_effects[mushroom_index]
                    
                        if(mushroom.effect=="poison"){
                            chat.push({
                                "text":"Knowledge: "+get_just_block(all_mushrooms_colors[mushroom_index]).display_name+"s are poisonous.",
                                "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                            })                              
                        }
                        if(mushroom.effect=="regeneration"){
                            chat.push({
                                "text":"Knowledge: "+get_just_block(all_mushrooms_colors[mushroom_index]).display_name+"s heal you when eaten.",
                                "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                            })                                
                        }

                        if(mushroom.effect=="saturation"){
                            chat.push({
                                "text":"Knowledge: "+get_just_block(all_mushrooms_colors[mushroom_index]).display_name+"s are safe to eat.",
                                "end_time":engin.time_in_loop+5000,"color":"219, 209, 7"
                            })                               
                        }                    
                    
                        
                    }




                

                  

                    
                // }

            }

            // this.decrease_after_use=true


            this.name="knowledge_tablet"
            this.display_name="Knowledge Tablet"

            this.destroy_time=5

            if(!is_server){
                this.image=knowledge_tablet_image
            }
        }

}





class air extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.name="air"
            this.hiden_in_accended=true
            this.kills_grass=false

            this.collision_box=false

            this.transparent=true
            

            if(!is_server){

                this.image=air_image

            }
        }

}


class grass extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.category="nature"
            this.name="grass"
            this.display_name="Grass"

            this.destroy_time=2

            if(!is_server){
                
                this.image=grass_image.image()
                
            }

            this.random_tick={
                "event":function(x,y){
              
                    if(typeof block_list[x][y-1].kills_grass=="undefined" || block_list[x][y-1].kills_grass){
                        
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

class stone_brick_pedestal extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.category="earth"
            this.name="stone_brick_pedestal"
            this.display_name="Stone Brick Pedestal"

            this.hit_box=[2,1]
            this.transparent=true

            this.kills_grass=false

            this.destroy_time=3

            if(!is_server){
                this.image=stone_brick_pedestal_image
            }

            // this.random_tick={
            //     "event":function(x,y){
              
            //         if(typeof block_list[x][y-1].kills_grass=="undefined" || block_list[x][y-1].kills_grass){
                        
            //             change_block(x,y,"dirt")
            //             // console.log("EVENT DO THOIING")
            //         }
            //         else{
            //             if(block_is(x-1,y,"dirt") && block_is(x-1,y-1,"air")){
                            
            //                 change_block(x-1,y,"grass")
            //             // console.log("EVENT DO THOIING")

                    

            //             }
            //             if(block_is(x+1,y,"dirt")  && block_is(x+1,y-1,"air")){
            //                 change_block(x+1,y,"grass")
            //             // console.log("EVENT DO THOIING")

            //             }
            //         }



                    
            //     },
            //     "loop":true,
            //     "time":function(){
            //         return (10000*Math.random())+14000
            //     }
            // }

        }

}

    

class stone_brick extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.display_name="Stone Brick"

            this.name="stone_brick"
            // this.destroy_time=10

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



   

  

class cracked_block extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            this.name="cracked_block"
            this.hiden_in_accended=true


            if(!is_server){
                this.image=cracked_block_image
            }
        }

}




class stone extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="earth"

            this.name="stone"
            this.display_name="Stone"

            // this.destroy_time=8

            this.destroy_time=3


            if(!is_server){

                this.image=stone_image.image()
                
            }
    
          
    
    
    
        }
    
}



function add_void(block){
    if(!block.void){
        block.void=true

        // if(block.image.length==undefined){
        //     let old_image=block.image
        //     block.image=[old_image]            
        // }
        
        // block.image.push(void_block_image)
    }
}

function remove_void(block){
    if(block.void){
        block.void=false

        // if(block.image.length!=undefined){
        //     // let old_image=block.image
        //     // block.image=[old_image]   
            
        //     for(let i=block.image.length-1;i>=0;i--){
        //         if(block.image[i].src==void_block_image.src){
        //             block.image.splice(i,1)
        //         }
        //     }
            
        //     // block.image.push(void_block_image)    
        // }
        
        
    }
}


// class void_block extends basic_block{
//     constructor(x=undefined,y=undefined){
//         super(x,y)



//         this.name="void_block"
//         this.display_name="Void Block"

//         this.void=true

//         this.transparent=true

//         this.kills_grass=false

//         this.collision_box=false

//         this.destroy_time=8

        


//         if(!is_server){

//             this.image=void_block_image
//         }

      



//     }

// }

    
class marble extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="earth"

            this.name="marble"
            this.display_name="Marble"

            // this.destroy_time=8

            this.destroy_time=3


            if(!is_server){
                this.image=marble_image
            }
    
          
    
    
    
        }
    
}

class slate extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="earth"

            this.name="slate"
            this.display_name="Slate"

            // this.destroy_time=8

            this.destroy_time=3


            if(!is_server){
                this.image=slate_image
            }
    
          
    
    
    
        }
    
}





class blue_mushroom extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="nature"

            this.on_used=function(){
                blue_mushroom_function()
            }
            
            this.has_knowledge=true


            this.decrease_after_use=1
            this.use_after_duration=1200

            this.transparent=true
            this.kills_grass=false



            this.collision_box=false

            this.name="blue_mushroom"
            this.display_name="Blue Mushroom"

            // this.destroy_time=8

            this.destroy_time=0


            if(!is_server){
                this.image=blue_mushroom_image
            }
    
          
    
    
    
        }
    
}

class red_mushroom extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="nature"

            this.has_knowledge=true

            this.collision_box=false
            

            this.transparent=true
            this.kills_grass=false
            
            this.decrease_after_use=1
            this.use_after_duration=1200
            this.on_used=function(){
                red_mushroom_function()
            }


            this.name="red_mushroom"
            this.display_name="Red Mushroom"

            // this.destroy_time=8

            this.destroy_time=0


            if(!is_server){
                this.image=red_mushroom_image
            }
    
          
    
    
    
        }
    
}

    
class green_mushroom extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="nature"
            this.collision_box=false


            this.has_knowledge=true




            this.decrease_after_use=1
            this.use_after_duration=1200
            this.on_used=function(){
                green_mushroom_function()
            }




            this.transparent=true

            this.kills_grass=false
            this.name="green_mushroom"
            this.display_name="Green Mushroom"

            // this.destroy_time=8

            this.destroy_time=0


            if(!is_server){
                this.image=green_mushroom_image
            }
    
          
    
    
    
        }
    
}


class stone_boulder extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="earth"
            this.collision_box=false


       


            this.transparent=false

            
            this.name="stone_boulder"
            this.display_name="Stone Boulder"

            // this.destroy_time=8

            this.destroy_time=1.25


            if(!is_server){
                this.image=stone_boulder_image
            }
    
          
    
    
    
        }
    
}

class grass_block extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
            this.category="nature"
            this.collision_box=false


       
            this.collision_box=false
            

            this.transparent=true
            this.kills_grass=false


            this.loot_table=new loot_table([
                {
                    "name":"grass_seed",
                    "count":number_from(0,2)
                }
            ])

            

            
            this.name="grass_block"
            this.display_name="Grass Block"

            // this.destroy_time=8

            this.destroy_time=0


            if(!is_server){
                this.image=grass_block_image
                // this.image=
            }
    
          
    
    
    
        }
    
}

class tall_grass_block extends basic_block{
    constructor(x=undefined,y=undefined){
            super(x,y)

            // nature
          
            this.category="nature"
            this.collision_box=false

            this.loot_table=new loot_table([
                {
                    "name":"grass_seed",
                    "count":number_from(0,4)
                }
            ])



       
            this.collision_box=false
            

            this.transparent=true
            this.kills_grass=false

            this.hit_box=[1,2]

            

            
            this.name="tall_grass_block"
            this.display_name="Tall Grass Block"

            // this.destroy_time=8

            this.destroy_time=0


            if(!is_server){
                this.image=tall_grass_block_image
            }
    
          
    
    
    
        }
    
}

class bedrock extends basic_block{
    constructor(x=undefined,y=undefined){
        super(x,y)

        // nature
      
        this.category="earth"



        

        
        this.name="bedrock"
        this.display_name="Bed Rock"

        // this.destroy_time=8


        if(!is_server){
            let variated_images=[bedrock_image,bedrock_image2]

            this.image=variated_images[number_from(0,variated_images.length-1)()]
        }

      



    }

}


    
    
blocks={
        "dirt":dirt,
        "stone":stone,
        "air":air,
        "grass":grass,
        "stone_brick":stone_brick,
        "cracked_block":cracked_block,
        "missing_block":missing_block,
        "blank":blank,
        "magnifying_glass":magnifying_glass,
        "blue_mushroom":blue_mushroom,
        "green_mushroom":green_mushroom,
        "red_mushroom":red_mushroom,
        "knowledge_tablet":knowledge_tablet,
        "stone_brick_pedestal":stone_brick_pedestal,
        "marble":marble,
        "stone_boulder":stone_boulder,
        "grass_block":grass_block,
        "tall_grass_block":tall_grass_block,
        "log":log,
        "leaf":leaf,
        "slate":slate,
        // "void_block":void_block,
        "extrude_block":extrude_block,
        "laod_block":laod_block,
        "bedrock":bedrock,

        "plank":plank,
        "slightly_striped_log":slightly_striped_log,
        "moderately_striped_log":moderately_striped_log,
        "mostly_striped_log":mostly_striped_log,
        "striped_log":striped_log


}



if(is_server){
    module.exports={get_item,get_just_block,change_block,block_is}
}
