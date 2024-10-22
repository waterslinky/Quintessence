function tool_template(item,data = {}){

    item.display_name = "fg"
    


    // console.log(data)
    let material_items = data.material_items

    let tool_parts = {}

    for(let part_type in get_property(item,"parts")){

        let tool_part
        
        
        if(material_items){
            
            for(let i=0;i<material_items.length;i++){

                let material_item = material_items[i]
                // console.log(material_items.length)
                if(get_property(material_item,"tool_part").part==part_type){

                    material_items.splice(i,1)

                    tool_part = material_item
                    i = material_items.length

                }
            }                
        }


        if(tool_part==undefined){
            tool_part = get_property(item,"parts")[part_type]
        }

        tool_parts[part_type] = create_item(tool_part)
        
    }

    let attributs={}

    for(let tool_part_name in tool_parts){

        let tool_part = tool_parts[tool_part_name]

        for(let attribut in get_property(tool_part,"tool_part").attributs){

            if(attributs[attribut]==undefined){

                attributs[attribut] = get_property(tool_part,"tool_part").attributs[attribut]

            }
            else{

                attributs[attribut] += get_property(tool_part,"tool_part").attributs[attribut]

            }

        }


    }   

    item.display_name = [{"name":capitalize_string(get_property(tool_parts[get_property(item,"main_part")],"tool_part").material) + " "+capitalize_string(get_property(item,"tool_type"))}]
    
       
    item.tool_type = [
            {
                "tool_type":get_property(item,"tool_type")
            }
    ]

    for(let attribut in attributs){
        item.tool_type[0][attribut] = attributs[attribut]

        item.display_name.push({
            "name":(attribut_names[attribut] || attribut)+": "+attributs[attribut],
            "color":"210, 210, 225"
        })
    }



    let image = []
    let image_offsets={}
    get_property(item,"part_order").forEach(part_name => {
        
    


        let part = tool_parts[part_name]
 
        if(get_property(part,"tool_part").transform_image){
            
            image.push(get_property(part,"tool_part").transform_image)
            
        }
            
        else{

            image.push(get_property(part,"image"))
        
        }


            

        let offset_x = 0
        let offset_y = 0

            
        if(get_property(part,"tool_part").offset_x){
            offset_x = get_property(part,"tool_part").offset_x 
        }

        if(get_property(part,"tool_part").offset_y){
            offset_y = get_property(part,"tool_part").offset_y
        }

        if(offset_x || offset_y){
            image_offsets[image.length-1] = ([offset_x,offset_y])
        }
    });

    item.image = image
    item.image_offsets = image_offsets

}

const item_json = [
    {
    
        //Tool temp
        template_function:[tool_template],
    
        "parts":{
            "axe_head":"bark_axe_head",
            "handle":"stick"
        },
    
        name:"axe",
    
        stack_size:1,
    
        part_order:["handle","axe_head"],
    
        tool_type:"axe",
    
        main_part:"axe_head"
    },
    {
        
        //Tool temp
        template_function:[tool_template],
    
        "parts":{
            "knife_head":"bark_knife_head",
            "scales":"half_stick"
        },
    
        name:"knife",
    
        stack_size:1,
    
        part_order:["scales","knife_head"],
    
        tool_type:"knife",
    
        main_part:"knife_head"
    },
    {
        
        //Tool temp
        template_function:[tool_template],
    
        "parts":{
            "pickaxe_head":"bark_pickaxe_head",
            "handle":"stick"
        },
    
        name:"pickaxe",
    
        stack_size:1,
    
        part_order:["handle","pickaxe_head"],
    
        tool_type:"pickaxe",
    
        main_part:"pickaxe_head"
    },
    {
        
        //Tool temp
        template_function:[tool_template],
    
        "parts":{
            "hoe_head":"bark_hoe_head",
            "handle":"stick"
        },
    
        name:"hoe",
    
        stack_size:1,
    
        part_order:["handle","hoe_head"],
    
        tool_type:"hoe",
    
        main_part:"hoe_head"
    },
    {
        
        name:"void_adder",
    
        display_name:"Void Adder",
    
        hand_size:.6,
    
        use_after_duration:0,
            
        on_used:function(){
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
                
                
    
        },
    
        image:"void_block"
     
    },
    {

        name:"bark_axe_head",
    
        display_name:"Bark Axe Head",
            
        tool_part : {
                material:"bark",
                part:"axe_head",
                offset_x:4,
                offset_y:-2,
                attributs:{
                    "minning_speed" : 1
                }
        },
    
        hand_size:1,
            
        image:"bark_axe_head"
    
    },
    {
     
        name:"bark_knife_head",
    
        tool_part : {
            material:"bark",
            part:"knife_head",
            offset_x:2,
            offset_y:-3,
            attributs:{
                "minning_speed":1.25
            }
        },
            
        display_name:"Bark Knife Head",
    
        hand_size:1,
            
        image:"bark_knife_head"
    
    },
    {
    
        name:"bark_pickaxe_head",
    
        tool_part : {
                material:"bark",
                part:"pickaxe_head",
                offset_x:4,
                offset_y:-3,
                attributs:{
                    "minning_speed":1.25
                }
        },
            
        display_name:"Bark Pickaxe Head",
    
        hand_size:1,
            
        image:"bark_pickaxe_head"
    
    },
    {
    
        name:"bark_hoe_head",
    
        tool_part : {
                material:"bark",
                part:"hoe_head",
                offset_x:4,
                offset_y:0,
                attributs:{
                    "minning_speed":1.25
                }
        },
            
        display_name:"Bark Hoe Head",
    
        hand_size:1,
            
        image:"bark_hoe_head"
    
    },
    {
    
        name:"wheat",
    
        display_name:"Wheat",
    
        hand_size:0.6,
            
        image:"wheat"
    
    },
    {

        name:"dough",
    
        display_name:"Dough",
    
        hand_size:0.6,
            
        image:"dough"
    
    },
    {
    
        name:"bread",
    
        display_name:"Bread",
    
        hand_size:0.6,
            
        image:"bread",
    
        use_after_duration:1000,
    
        on_used:function(){
    
            player.give_hunger(10)
    
            return true
    
        },
    
    },
    {
    
        name:"wheat_seed",
    
        display_name:"Wheat Seed",
    
        hand_size:1,
    
        on_used:function(){
            let block_clicked = get_block_from_index(world_mouse_x,world_mouse_y)
    
            if(block_clicked.name=="air" && get_block_from_index(world_mouse_x,world_mouse_y+1).name=="soil"){
                change_block(world_mouse_x,world_mouse_y,"wheat_crop")
    
                return true
    
            }
    
            return false
        },
            
        image:"wheat_seed"
    
    },
    {

        name:"bark",
    
        display_name:"Bark",
    
        image:"bark"
    
    },
    {
    
        name:"stick",
    
        display_name : "Stick",
    
        tool_type : [
            {
                "tool_type":"knife",
                "minning_speed" : 1
            }
        ],
            
        tool_part : {
                material:"wooden",
                part:"handle",
                minning_speed:1,
                transform_image:images.axe_stick,
                attributs:{
                    "minning_speed":1
                }
        },
    
        hand_size:1,
            
        image:"stick"
          
    },
    {
    
        name:"half_stick",
            
        display_name:"Half Stick",
    
        tool_type : ["knife"],
    
        tool_part : {
                material:"wooden",
                part:"scales",
                offset_x:-3,
                offset_y:3,
                attributs:{
                    "minning_speed":1
                }
        },
    
        hand_size:1,
    
        image : "half_stick"
           
    },
    {

        name:"grass_seed",
    
        display_name:"Grass Seed",
    
        category:"nature",
    
        use_after_duration:0,
    
        "hand_size":0.6,
    
        decrease_after_use:1,
    
        on_used:function(){
    
                if(get_block_from_index(world_mouse_x,world_mouse_y).name=="dirt"){
                    change_block(world_mouse_x,world_mouse_y,"grass")
                    return true
                }
                
                return false
    
        },
    
        image:"grass_seed"
        
    }
]

if(typeof window == "undefined"){
    module.exports = item_json
}