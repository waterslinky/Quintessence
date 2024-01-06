function draw_exit(){
    screen.fillStyle = "rgb(100,100,100)" ;
    screen.fillRect(innerWidth*.09,(innerHeight*.5)-80,innerWidth*.82,160); 
}

// exit_elements=[

//     //Exit and save
//     new button({
//         "x":(innerWidth*.09)+15,
//         "y":(innerHeight*.5)+65,
//         "size_x":(((innerWidth*.82)-(45))/2),
//         "size_y":-130,
//         "on_clicked":function(){
//             // let block_list_name=[]
//             alert("SAVE")

//             let new_block_list=[]
//             for(let x=0;x<block_list.length;x++){
//                 let line=[]
//                 for(let y=0;y<block_list[0].length;y++){
//                     console.log(block_list[x][y].hit_box_index ? [{"name":"hit_box_index","data":block_list[x][y].hit_box_index}] : [])
//                     line.push({"name":block_list[x][y].name,"data":block_list[x][y].hit_box_index ? [{"name":"hit_box_index","data":block_list[x][y].hit_box_index}] : []})
//                 }
//                 new_block_list.push(line)
            
//             }

            
//             // console.log(new_block_list[0][0])
       

//             save(("slot"+selected_slot),{"world":new_block_list,"player":traits_to_new_player(player,player.save_traits)})


//             window.location.href = "../start/index.html";

        
//             engin.change_selected_layer(["exit"],"set")

        
//         },
//         "color":"60,60,60"
//     }),
//     new text( {"x": (innerWidth*.09)+15+(((innerWidth*.82)-(45))/4),"y":(innerHeight*.5)  ,"text":"Exit and save" ,   "size": 60  ,"color": "rgb(255,255,255)" ,"align": "center" } ),
    


//     //Exit with out saving
//     new button({
//         "x":(innerWidth*.09)+30+((((innerWidth*.82)-(45))/2)),
//         "y":(innerHeight*.5)+65,
//         "size_x":(((innerWidth*.82)-(45))/2),
//         "size_y":-130,
//         "on_clicked":function(){

//             // save(("slot"+selected_slot),{"world":new_block_list})
//             window.location.href = "../start/index.html";

    
//         },
//         "color":"60,60,60"
//     }),
//     new text({"x":(innerWidth*.09)+30+((((innerWidth*.82)-(45))/2))+(((innerWidth*.82)-(45))/4) ,"y": (innerHeight*.5) ,"text": "Exit with out saving" ,   "size": 60  ,"color": "rgb(255,255,255)"  ,"align": "center"  }),
    

   
  
    
// ]