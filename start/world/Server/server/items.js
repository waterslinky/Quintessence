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

// class basic_item{
//     constructor(){



//         hand_size=.75

//     }

// }



// class basic_tool extends basic_item{
//     constructor(info){
//         super(info)

      

//         let attributs={}

//         for(let part_type in info.parts){
//                 let part = info.parts[part_type]
//                 info.has_attributs.forEach(tool_attribut => {
//                     let attribut = part.tool_part.attributs[tool_attribut.name]
//                     if(attribut){
//                         if(attributs[tool_attribut.name]!=undefined){
//                             attributs[tool_attribut.name] += attribut
//                         }
//                         else{
//                             attributs[tool_attribut.name] = attribut
//                         }
                        
//                     }
//                 });
//         }
            

//         name = info.tool_type
//         display_name = [{"name":capitalize_string(info.parts[info.main_part].tool_part.material) + " "+capitalize_string(info.tool_type)}]
            
//         info.has_attributs.forEach(tool_attribut => {
                
//                 if(attributs[tool_attribut.name]!=undefined){
//                     this.display_name.push({
//                         "name":tool_attribut.display_name+": "+attributs[tool_attribut.name],
//                         "color":"210, 210, 225"
//                     })
//                 }

                
//         });

            

//         tool_type = [
//                 {
//                     "tool_type":info.tool_type,
//                     "minning_speed" : attributs.minning_speed!=undefined ? attributs.minning_speed : 0
//                 }
//         ]

//         image = []
//         image_offsets={}
//         info.part_order.forEach(part => {
                
//                 // console.log(info.parts,part)
//                 if(info.parts[part].tool_part.transform_image){
//                     image.push(info.parts[part].tool_part.transform_image)
//                 }
//                 else{
//                     image.push(info.parts[part].image)
//                 }


                

//                 let offset_x = 0
//                 let offset_y = 0

                
//                 if(info.parts[part].tool_part.offset_x){
//                     offset_x = info.parts[part].tool_part.offset_x 
//                 }

//                 if(info.parts[part].tool_part.offset_y){
//                     offset_y = info.parts[part].tool_part.offset_y
//                 }

//                 if(offset_x || offset_y){
//                     image_offsets[image.length-1] = ([offset_x,offset_y])
//                 }


                

//                 // console.log(image[image.length-1].offset_x)

                

//         });

//         if(Object.keys(image_offsets).length==0){
//                 delete image_offsets
//                 // alert("G")
//         }
//         // console.log(image_offsets)


        
//     }
// }


const grass_seed = {

    name:"grass_seed",

    display_name:"Grass Seed",

    category:"nature",

    use_after_duration:0,

    "hand_size":0.6,

    decrease_after_use:1,

    on_used:function(){

            if(block_list[world_mouse_x][world_mouse_y].name=="dirt"){
                change_block(world_mouse_x,world_mouse_y,"grass")
                return true
            }
            
            return false

    },

    image:grass_seed_image
    
}


const bark = {

    name:"bark",

    display_name:"Bark",

    image:bark_image

}


const stick = {

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
            transform_image:axe_stick_image,
            attributs:{
                "minning_speed":1
            }
    },

    hand_size:1,
        
    image:stick_image
      
}




const half_stick = {

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

    image : half_stick_image
       
}

const bark_axe_head = {

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
        
    image:bark_axe_head_image

}

const bark_knife_head = {
 
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
        
    image:bark_knife_head_image

}

const bark_pickaxe_head = {

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
        
    image:bark_pickaxe_head_image

}







const void_adder = {
    
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

    image:void_block_image
 
}

let defalt_item = {

    "stack_size":stack_size,

    "hand_size":1,

    "use_after_duration":0,

    "decrease_after_use":1,

    "type":"item",

    "image":missing_block_image

}

let defalt_block = {

    "stack_size":stack_size,
    "hand_size":0.6,
    "collision_box":true,
    "type":"block",
    "image":missing_block_image

}





//Make get just item and get just block property
function get_property(item,property){
    
    
    try{
        if(item[property]!=undefined){
            return item[property]
        }        
    }
    catch(err){
        console.error(item)
    }


    //This need to search not get a new item

    // console.log(item.name)

    // try{
    
    //         item_property = blocks_and_items[item.name][property]
 
    //     }
    //     catch(err){
    //         console.error(item)
    //     }
    

    // console.log(item.name)
    try{
        blocks_and_items[item.name][property]
    }
    catch(err){
        console.error(item)
    }
    let item_property = blocks_and_items[item.name][property]

    if(item_property!=undefined){
    
        return item_property

    }

    if(items[item.name]!=undefined){
        return defalt_item[property]
    }

    return defalt_block[property]
    
}



// Tools
// class axe extends basic_tool{
//     constructor(info={
//         "parts":{
//             "axe_head":new bark_axe_head(),
//             "handle":new stick(),
//         }}){

//         info.part_order = ["handle","axe_head"] 
//         info.tool_type = "axe"
//         info.main_part = "axe_head"


//         info.has_attributs=[
//             {
//                 "name" : "minning_speed",
//                 "display_name":"Minning Speed"
//             }
//         ]
            

//         super(info)




        

//         stack_size = 1

//         hand_size=1

        


//     }
// }

// class pickaxe extends basic_tool{
//     constructor(info={
//         "parts":{
//             "pickaxe_head":new bark_pickaxe_head(),
//             "handle":new stick(),
//         }}){

//         info.part_order = ["handle","pickaxe_head"] 
//         info.tool_type = "pickaxe"
//         info.main_part = "pickaxe_head"


//         info.has_attributs=[
//             {
//                 "name" : "minning_speed",
//                 "display_name":"Minning Speed"
//             }
//         ]
            

//         super(info)




        

//         stack_size = 1

//         hand_size=1

        


//     }
// }

// class knife extends basic_tool{
//     constructor(info={
//         "parts":{
//             "knife_head":new bark_knife_head(),
//             "scales":new half_stick(),
//         }}){

//         info.part_order = ["scales","knife_head"] 
//         info.tool_type = "knife"
//         info.main_part = "knife_head"
    
//         info.has_attributs=[
//             {
//                 "name" : "minning_speed",
//                 "display_name":"Minning Speed"
//             }
//         ]


//         super(info)



//         hand_size=1
//         stack_size = 1
        


//     }
// }


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


items={
    "grass_seed":grass_seed,
    "void_adder":void_adder,
    "bark":bark,
    "stick":stick,
    "bark_axe_head":bark_axe_head,
    "half_stick":half_stick,
    "bark_knife_head":bark_knife_head,

    // "axe":axe,
    // "knife":knife,
    // "bark_pickaxe_head":bark_pickaxe_head,
    // "pickaxe":pickaxe
}


blocks_and_items=copy(blocks)
for(item in items){
    
    blocks_and_items[item]=items[item]
}