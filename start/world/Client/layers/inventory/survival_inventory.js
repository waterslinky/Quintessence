
// survival_inventory_layer={
//     "name":"inventory",
//     "draw":function(){
//         // inventory_elements.elements[0].image=grass_image
//         // for(let i=0;i<inventory_elements.elements.length;i++){
//         //     element=inventory_elements.elements[i]

//         //     element.image=player.inventory[0].image
//         // }
//         // inventory_main_elements.elements[0].image=grass_image

//     },
//     "update":function(){},
//     "keys_down":function(){},
//     "elements":[
//         new align({
//             "x":innerWidth/2,
//             "y":innerHeight/2,
//             "align":"center",
//             // "child":inventory_main_elements,
//             "groups":["ui"],
        
//             "elements":[
//                 // inventory_main_elements,
            
        
        
//                 small_crafting_table_main_elements,
//                 new align({
//                     "elements":[inventory_main_elements],
//                     "x":0,
//                     "y":300,
//                     "align":"center",
//                     "child":inventory_main_elements
//                 })
        
        
//             ]
//         })
//     ],
//     "on_added":function(){
//         player.show_inventory_hand=true

//     },
//     "on_removed":function(){
//         player.show_inventory_hand=false

        
//     }
// }

survival_inventory_layer={
    "name":"inventory",
    "groups":["ui"],
    "draw":function(){

    },
    "update":function(){},
    "keys_down":function(){},
    "elements":[

        new align({
            "elements":[inventory_main_elements],
            "x":innerWidth-1100,
            "y":(innerHeight/2)+75

            // "child":inventory_main_elements
        }),
        new align({
            "elements":[small_crafting_table_main_elements],
            "x":(innerWidth/2)+675,
            "y":185,
        })



    ],
    "on_added":function(){
        player.show_inventory_hand=true

    },
    "on_removed":function(){
        player.show_inventory_hand=false

        
        

        
    }
}