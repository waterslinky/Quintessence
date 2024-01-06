// //V2.7
// if(is_server){
//     var {over_world} = require("./dimensions/over_wold")
// }

// //World
// AirDrag=.4
// friction=1.1

// gravity=1
// max_terminal_val=18



// //Funtion that Both the Server and Clint can access
// function run_function(function_name,parameters){
//     let new_function=typeof window != 'undefined' ? window : global

//     new_function[function_name].apply(null,parameters)
// }






// //Save data
// make_new_world=false

// if(!is_server){
//     if(selected_status=="offline"){

//         if(selected_slot){
//             // selected_world=eval("get("+JSON.stringify("slot"+selected_slot)+  ")" )
//             selected_world=get("slot"+selected_slot)
//             if(!selected_world){
//                 make_new_world=true
//             }
//         }
//     }

// }
// else{
    
//     make_new_world=true

// }




// // console.log("3")

// if(!make_new_world){
//     // console.log("BAD")

//     if(!is_server){
//         block_list=convert_names_to_blocks(selected_world.world)


//         if(!multiplayer){
//             player.save_traits.forEach(trait => {
//                 // eval("player."+trait+"="+"selected_world.player."+trait)
//                 player[trait]=selected_world.player[trait]
//             });
//         }




//     }
//     else{

//     }

// }
// else{
//     world_size=[200,100]
//     seed=parseInt(Math.random()*1000)
    
//     block_list=over_world({
//         "seed":seed,
//         "oct":3
//     })

// }











// if(is_server){
//     module.exports={block_list,run_function}
// }