//V2.7

if(is_server){
    var {get_block,reload_path} = require("../../block")
    var {noise} = require("../../../../common/noise")

}



// function generate_elevation_list(noise_settings){

    
//     let elevation_list=[]
//     for(let x=0;x<world_size[0];x++){
//         elevation_list.push(parseInt((noise(200,x*3,1,noise_settings)*10)+20))
//         // elevation_list.push(20)

//     }
//     return elevation_list
    
// }





// function export_world_OLD(all_blocks=block_list){
//     let new_block_list=[]
//     for(let x=0;x<all_blocks.length;x++){
//         let line=[]
//         for(let y=0;y<all_blocks[0].length;y++){
          

//             let block_data={}
//             let has_keys=false

//             all_blocks[x][y].save_traits.forEach(trait => {
//                 if(all_blocks[x][y][trait]!=undefined){
//                     block_data[trait]=all_blocks[x][y][trait]
//                     has_keys=true                    
//                 }
//             });

//             // if(block_data.length){
//             // console.log(has_keys)
//             // }
            
//             // block_data={}
            

//             line.push({"name":all_blocks[x][y].name,"data":has_keys ? block_data : undefined})

            
//         }
//         new_block_list.push(line)
            
//     }

//     // console.log(new_block_list)
//     return new_block_list
// }

// let disregard_traits = ["image","x","y"]

// function export_item(item){
//     let new_item = {}

//     for(let trait in item){
//         if(disregard_traits.includes(trait)==false){
//             new_item[trait] = item[trait]
//         }
//     }

//     return new_item

// }

// function export_world(all_blocks=block_list){
//     alert("FIX")
//     let new_block_list=[]
//     for(let x=0;x<all_blocks.length;x++){
//         let line=[]
//         for(let y=0;y<all_blocks[0].length;y++){
           
//             line.push(export_item(all_blocks[x][y]))

//         }
//         new_block_list.push(line)
            
//     }

//     // console.log(new_block_list)
//     return new_block_list
// }   
// function convert_names_to_blocks(block_list_names){
//     let block_list=[]
//     alert("FIX")
//     // alert("T")

//     for(let x=0;x<block_list_names.length;x++){
//         let line=[]
//         for(let y=0;y<block_list_names[0].length;y++){
//             let this_block=block_list_names[x][y]

//             if(typeof this_block.name!="undefined"){
//                 block=this_block.name
            

//                 // console.log(block_list_names[x][y].data)
//             }
            
//             let add_block=create_item(block,{x,y})

//             // console.log(block.data)
//             if(typeof this_block.data!="undefined"){
//                 // console.log("DATA"+block.data)
//                 for (element in this_block.data) {
//                     add_block[element]=this_block.data[element]
//                 }
//                 // this_block.data.forEach(element => {
//                 //     =element.data
//                 // });

//             }


            

//             line.push(add_block)

//             // if(typeof block_list_names[x][y].name!="undefined"){
            
//             // }
//         }
//         block_list.push(line)
    
//     }

    
//     return block_list
// }



function save_structure(start_x,start_y,size_x,size_y){
    let structure=[]
    for(let x=start_x;x<start_x+size_x;x++){
        let line=[]

        for(let y=start_y;y<start_y+size_y;y++){
            line.push(block_list[x][y])
        }

        structure.push(line)
    }




    return JSON.stringify(export_world(structure))
    



    
}

function load_block(structure_block,x,y,all_blocks = block_list){

    let replace_block=copy(structure_block)

    replace_block.x=x
    replace_block.y=y

    // console.log("efwefwefwwef")
    // console.log(structure_block)


    if(replace_block.name == "laod_block"){

    }
    else if(replace_block.name == "extrude_block"){
        // console.log("worlk")
        load_extrude_block(replace_block,all_blocks)
    }
    else{
        if((replace_block.void==undefined || replace_block.void==false) || (replace_block.void==true && all_blocks[x][y].name=="air")){
            replace_block.void=false
            all_blocks[x][y] = replace_block

            if(replace_block.data!=undefined){

                for(data in replace_block.data){
                    // console.log(data)
                    all_blocks[x][y][data] = replace_block.data[data]
                }

            }  
        }        
    }



}

// inferin=[]
function load_structure(start_x,start_y,structure,all_blocks=block_list){
    // inferin=block_list
    let extrudes=[]

    // alert("g")

    if(typeof start_x=="string"){
        start_x=JSON.parse(start_x)
    }

    if(typeof start_y=="string"){
        start_y=JSON.parse(start_y)
    }


    
    for(let x=0;x<structure.length;x++){
        // let line=[]

        for(let y=0;y<structure[0].length;y++){
            // console.log(structure[x][y].data)

            if(x+start_x<all_blocks.length && x+start_x>=0){
                // console.log(all_blocks)
                if(y+start_y<all_blocks[x].length && y+start_y>=0){
                    let structure_block = structure[x][y]
                    
                    

                    // if(replace_block!=undefined && replace_block.void!=true){
                        // if(replace_block.name=="extrude_block"){
                        //     extrudes.push([x+start_x,y+start_y])
                        // }

                        // console.log(x+start_x,y+start_y)
                  
                        // console.log(structure_block)
                    load_block(structure_block,x+start_x,y+start_y,all_blocks)
                    // }



                    

                         

                    


                    
                    

                 
                }
            }
            


        }

        // structure.push(line)
    }


    // extrudes.forEach(extrude => {
    //     let [x,y] = extrude
    //     console.log(x,y)
    //     for(let x_extrude=0;x_extrude!=8;x_extrude++){
    //         for(let y_extrude=0;y_extrude!=1;y_extrude++){
    //             if(all_blocks.length>x+x_extrude && x+x_extrude>=0){
    //                 if(all_blocks[0].length>x+y_extrude && x+y_extrude>=0){
    //                     // console.log("all",all_blocks.length,all_blocks[0].length)
    //                     // console.log("all",all_blocks.length,all_blocks[0].length)
    //                     // if(structure[x][y].name=="air"){

    //                     all_blocks[x+x_extrude][y+y_extrude]=get_just_block("grass")
    //                 }
    //             }
                

    //         }
    //     }
    //     // all_blocks[x][y]=get_just_block("grass")
        
    // });




    // return JSON.stringify(structure)



}

function convert_blocks_to_names(blocks = block_list){

    alert("FIX")

    let new_block_list=[]
    for(let x=0;x<blocks.length;x++){
        let line=[]
        for(let y=0;y<blocks[0].length;y++){
            line.push(blocks[x][y].name)
        }
        new_block_list.push(line)
    
    }

    
    return JSON.stringify(new_block_list)
}








if(is_server){
    module.exports={blank_world,generate_elevation_list,convert_names_to_blocks,convert_blocks_to_names,get_block,reload_path,noise}
}
