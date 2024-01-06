function get_just_item(item_name,info){
    let item=false

    if(typeof item_name=="object"){
        console.log(item_name.name)
        item=new items[item_name.name](info)
        item.type="item"  
        item.count=item.count
    }
    else{
        if(items[item_name]!=undefined){
            item=new items[item_name](info)
            item.type="item"             
        }
    }

    return item

}

function capitalize_string(string){

    return string[0].toUpperCase() + string.slice(1)

}

class basic_item{
    constructor(){



        this.hand_size=.75

    }

}



class basic_tool extends basic_item{
    constructor(info){
        super(info)

      

        let attributs={}

        for(let part_type in info.parts){
                let part = info.parts[part_type]
                info.has_attributs.forEach(tool_attribut => {
                    let attribut = part.tool_part.attributs[tool_attribut.name]
                    if(attribut){
                        if(attributs[tool_attribut.name]!=undefined){
                            attributs[tool_attribut.name] += attribut
                        }
                        else{
                            attributs[tool_attribut.name] = attribut
                        }
                        
                    }
                });
        }
            

        this.name = info.tool_type
        this.display_name = [{"name":capitalize_string(info.parts[info.main_part].tool_part.material) + " "+capitalize_string(info.tool_type)}]
            
        info.has_attributs.forEach(tool_attribut => {
                
                if(attributs[tool_attribut.name]!=undefined){
                    this.display_name.push({
                        "name":tool_attribut.display_name+": "+attributs[tool_attribut.name],
                        "color":"210, 210, 225"
                    })
                }

                
        });

            

        this.tool_type = [
                {
                    "tool_type":info.tool_type,
                    "minning_speed" : attributs.minning_speed!=undefined ? attributs.minning_speed : 0
                }
        ]

        this.image = []
        this.image_offsets={}
        info.part_order.forEach(part => {
                
                // console.log(info.parts,part)
                if(info.parts[part].tool_part.transform_image){
                    this.image.push(info.parts[part].tool_part.transform_image)
                }
                else{
                    this.image.push(info.parts[part].image)
                }


                

                let offset_x = 0
                let offset_y = 0

                
                if(info.parts[part].tool_part.offset_x){
                    offset_x = info.parts[part].tool_part.offset_x 
                }

                if(info.parts[part].tool_part.offset_y){
                    offset_y = info.parts[part].tool_part.offset_y
                }

                if(offset_x || offset_y){
                    this.image_offsets[this.image.length-1] = ([offset_x,offset_y])
                }


                

                // console.log(this.image[this.image.length-1].offset_x)

                

        });

        if(Object.keys(this.image_offsets).length==0){
                delete this.image_offsets
                // alert("G")
        }
        // console.log(this.image_offsets)


        
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
            this.image=grass_seed_image
        }

    }
}


class bark extends basic_item{
    constructor(){
        super()


        this.name="bark"
        this.display_name="Bark"



        if(!is_server){
            this.image=bark_image
        }

    }
}


class stick extends basic_item{
    constructor(){
        super()


        this.name="stick"
        this.display_name = "Stick"


        this.tool_type = [
            {
                "tool_type":"knife",
                "minning_speed" : 1
            }
        ]
        
        this.tool_part = {
            material:"wooden",
            part:"handle",
            minning_speed:1,
            transform_image:axe_stick_image,
            attributs:{
                "minning_speed":1
            }
        }

        


        this.hand_size=1



        if(!is_server){
            this.image=stick_image
        }

    }
}




class half_stick extends basic_item{
    constructor(){
        super()


        this.name="half_stick"
        
        this.display_name="Half Stick"



        this.tool_type = ["knife"]

        this.tool_part = {
            material:"wooden",
            part:"scales",
            offset_x:-3,
            offset_y:3,
            attributs:{
                "minning_speed":1
            }
        }

        this.hand_size=1



        if(!is_server){
            this.image = half_stick_image
        }

    }
}

class bark_axe_head extends basic_item{
    constructor(){
        super()


        this.name="bark_axe_head"
        this.display_name="Bark Axe Head"
        

        this.tool_part = {
            material:"bark",
            part:"axe_head",
            offset_x:4,
            offset_y:-2,
            attributs:{
                "minning_speed" : 1
            }
        }


        this.hand_size=1
        


        if(!is_server){
            this.image=bark_axe_head_image
        }

    }
}

class bark_knife_head extends basic_item{
    constructor(){
        super()


        this.name="bark_knife_head"

        this.tool_part = {
            material:"bark",
            part:"knife_head",
            offset_x:2,
            offset_y:-3,
            attributs:{
                "minning_speed":1.25
            }
        }
        
        
        this.display_name="Bark Knife Head"

        this.hand_size=1
        


        if(!is_server){
            this.image=bark_knife_head_image
        }

    }
}

class bark_pickaxe_head extends basic_item{
    constructor(){
        super()


        this.name="bark_pickaxe_head"

        this.tool_part = {
            material:"bark",
            part:"pickaxe_head",
            offset_x:4,
            offset_y:-3,
            attributs:{
                "minning_speed":1.25
            }
        }
        
        
        this.display_name="Bark Pickaxe Head"

        this.hand_size=1
        


        if(!is_server){
            this.image=bark_pickaxe_head_image
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
            this.image=void_block_image
        }

    }
}

let defalt_item = {
    "stack_size":stack_size
}
//Make get just item and get just block property
function get_property(item,property){
    
    let item_data = item.data
    if(item_data!=undefined && item_data[property]!=undefined){
        return item_data[property]
    }

    //This need to search not get a new item

    let item_property = item.item[property]
    if(item_property!=undefined){
    
        return item_property

    }

    return defalt_item[property]
    
}


// Tools
class axe extends basic_tool{
    constructor(info={
        "parts":{
            "axe_head":new bark_axe_head(),
            "handle":new stick(),
        }}){

        info.part_order = ["handle","axe_head"] 
        info.tool_type = "axe"
        info.main_part = "axe_head"


        info.has_attributs=[
            {
                "name" : "minning_speed",
                "display_name":"Minning Speed"
            }
        ]
            

        super(info)




        

        this.stack_size = 1

        this.hand_size=1

        


    }
}

class pickaxe extends basic_tool{
    constructor(info={
        "parts":{
            "pickaxe_head":new bark_pickaxe_head(),
            "handle":new stick(),
        }}){

        info.part_order = ["handle","pickaxe_head"] 
        info.tool_type = "pickaxe"
        info.main_part = "pickaxe_head"


        info.has_attributs=[
            {
                "name" : "minning_speed",
                "display_name":"Minning Speed"
            }
        ]
            

        super(info)




        

        this.stack_size = 1

        this.hand_size=1

        


    }
}

class knife extends basic_tool{
    constructor(info={
        "parts":{
            "knife_head":new bark_knife_head(),
            "scales":new half_stick(),
        }}){

        info.part_order = ["scales","knife_head"] 
        info.tool_type = "knife"
        info.main_part = "knife_head"
    
        info.has_attributs=[
            {
                "name" : "minning_speed",
                "display_name":"Minning Speed"
            }
        ]


        super(info)



        this.hand_size=1
        this.stack_size = 1
        


    }
}





items={
    "grass_seed":grass_seed,
    "void_adder":void_adder,
    "bark":bark,
    "stick":stick,
    "bark_axe_head":bark_axe_head,
    "half_stick":half_stick,
    "bark_knife_head":bark_knife_head,

    "axe":axe,
    "knife":knife,
    "bark_pickaxe_head":bark_pickaxe_head,
    "pickaxe":pickaxe
}


blocks_and_items=copy(blocks)
for(item in items){
    
    blocks_and_items[item]=items[item]
}