function get_just_item(item_name){
    let item=false

    if(typeof item_name=="object"){
        item=new items[item_name.item]()
        item.type="item"  
        item.count=item.count
    }
    else{
        if(items[item_name]!=undefined){
            item=new items[item_name]()
            item.type="item"             
        }
    }

    return item

}

class basic_item{
    constructor(){



        this.hand_size=.75

    }

}


class grass_seed extends basic_item{
    constructor(){
        super()


        this.name="grass_seed"
        this.display_name="Grass Seed"

        this.category="nature"

        this.use_after_duration=0
        this.decrease_after_use=1

        this.on_used=function(){

            if(block_list[world_mouse_x][world_mouse_y].name=="dirt"){
                change_block(world_mouse_x,world_mouse_y,"grass")
                return true
            }
            
            return false

        }

        if(!is_server){
            this.image="grass_seed_image"
        }

    }
}


class bark extends basic_item{
    constructor(){
        super()


        this.name="bark"
        this.display_name="Bark"

        this.category="nature"


        if(!is_server){
            this.image="bark_image"
        }

    }
}


class stick extends basic_item{
    constructor(){
        super()


        this.name="stick"
        this.display_name="Stick"


        this.tool_type = [
            {
                "tool_type":"knife",
                "minning_speed" : 1
            }
        ]
        


        this.hand_size=1

        this.category="nature"


        if(!is_server){
            this.image="stick_image"
        }

    }
}

class half_stick extends basic_item{
    constructor(){
        super()


        this.name="half_stick"
        this.display_name="Half Stick"


        this.tool_type = ["knife"]


        this.hand_size=1

        this.category="nature"


        if(!is_server){
            this.image = "half_stick_image"
        }

    }
}

class bark_axe_head extends basic_item{
    constructor(){
        super()


        this.name="bark_axe_head"
        this.display_name="Bark Axe Head"

        this.category="nature"

        this.hand_size=1
        


        if(!is_server){
            this.image="bark_axe_head_image"
        }

    }
}

class bark_knife_head extends basic_item{
    constructor(){
        super()


        this.name="bark_knife_head"
        this.display_name="Bark Knife Head"

        this.category="nature"

        this.hand_size=1
        


        if(!is_server){
            this.image="bark_knife_head_image"
        }

    }
}

class bark_knife extends basic_item{
    constructor(){
        super()


        this.name="bark_knife"
        this.display_name="Bark Knife Head"

        this.category="nature"

        this.tool_type = [
            {
                "tool_type":"knife",
                "minning_speed" : 2.25
            }
        ]
        

        this.hand_size=1
        


        if(!is_server){
            this.image="bark_knife_image"
        }

    }
}






class void_adder extends basic_item{
    constructor(){
        super()
        this.name="void_adder"
        this.display_name="Void Adder"

        this.hand_size=.6


        

        this.use_after_duration=0
        // this.decrease_after_use=1

        this.on_used=function(){
            let block_clicked=get_block_from_index(world_mouse_x,world_mouse_y)
            if(block_clicked.void==undefined || !block_clicked.void){
                add_void(block_clicked)
                is_placing=false

            }
            else{
                remove_void(block_clicked)
                is_placing=false

            }
            
            return true
            // }
            
            

        }

        if(!is_server){
            this.image="void_block_image"
        }

    }
}

// class edit_tool extends basic_item{
//     constructor(){
//         super()


//         this.name="edit_tool"
//         this.display_name="Edit Tool"
//         this.hand_size=.9

        

//         this.use_after_duration=0
//         this.decrease_after_use=1

//         // this.on_used=function(){

//         //     if(block_list[world_mouse_x][world_mouse_y].name=="dirt"){
//         //         change_block(world_mouse_x,world_mouse_y,"grass")
//         //         return true
//         //     }
            
//         //     return false

//         // }

//         if(!is_server){
//             this.image=edit_tool_image
//         }

//     }
// }





items={
    "grass_seed":grass_seed,
    "void_adder":void_adder,
    "bark":bark,
    "stick":stick,
    // "bark_axe_head":bark_axe_head,
    "half_stick":half_stick,
    "bark_knife_head":bark_knife_head,
    "bark_knife":bark_knife
}


