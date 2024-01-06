let crafting_table_item_size = slot_size*1.2

let crafting_table_item_collision_size = 50


let crafting_table_recipe_space = 50

// let crafting_points = []

function check_recipe(table,x,y,recipe){
    

    let items_in_recipe = []

    let recipe_failed = false

    for(let i=0;i<table.items.length;i++){
        let item = table.items[i]

        item.in_recipe = false

        // if(item.parent_reciple==undefined){
        //     item.in_recipe = false
        // }
        // else{
        //     item.in_recipe = true

        // }
        
    }


    recipe.ingredients.forEach(ingredient => {

        let x_2 = (ingredient.x*crafting_table_item_size) + x
        let y_2 = (ingredient.y*crafting_table_item_size) + y

        // crafting_points.push([x_2,y_2])


        // let item_found = false
        let possible_items = []
        for(let i=0;i<table.items.length;i++){
            

                let item = table.items[i]
                
                if((ingredient.item && item.item.item.name == ingredient.item.name) || (item.item.item.tool_part && item.item.item.tool_part.part==ingredient.part_type)){
                    let item_x = item.x + (item.size_x/2)
                    let item_y = item.y + (item.size_y/2)


                    if(x_2-(crafting_table_recipe_space/2)<item_x &&  x_2+(crafting_table_recipe_space/2)>item_x ){
                        if(y_2-(crafting_table_recipe_space/2)<item_y &&  y_2+(crafting_table_recipe_space/2)>item_y ){
                            
                                //GET CLOSES ITEM

                                if(items_in_recipe.includes(item)==false  && item.in_recipe==false){
                                    possible_items.push(item)
                                    
                                    // item_found=true
                                }
                                
                            
                        }
                    }                    
                }


            }

            if(possible_items.length==0){
                recipe_failed=true
            }
            else{
                let closest_item = possible_items[0]
                let closest_item_distance = 0

                for(let i=1;i<possible_items.length;i++){
                    let possible_item = possible_items[i]
                    let distance = Math.hypot(x_2-(possible_item.x + (possible_item.size_x/2)),y_2-(possible_item.y + (possible_item.size_y/2)))

                    if(distance<=closest_item_distance){
                        closest_item = possible_item
                        closest_item_distance = distance
                    }
                }
                
                items_in_recipe.push(closest_item)
                closest_item.in_recipe=true     

            }
         


    })

    // crafting_points.push([x,y])

 

    if(recipe_failed==false){

        return {
            "items_in_recipe" : items_in_recipe,
            "selected":false,
            "recipe":recipe
        }






    }




}

class crafting_table_ui extends button{
    constructor(info){

        super(info)

        this.items=[]

        this.completed_recipes = []

        this.was_hoverd = undefined

        this.closest_item = undefined

        this.table_types = info.table_types


        this.on_removed=function(){
            this.items.forEach(item => {

                player.give_item({"item":item.item.item})
    
            })
    
            this.items=[]


            
            engin.cursor.set_cursor("default")
        }

        this.after_draw_func=function(){
    

            this.items.forEach(item => {
                if(item.parent_reciple){
                    item.parent_reciple.selected=false
                }

            })
            

            // this.items.forEach(item => {

                // // console.log(item.hand_size)
                
                // let size_x=crafting_table_item_size*item.item.hand_size
                // let size_y=crafting_table_item_size*item.item.hand_size

         
                // draw_image(item.item.image,0,0,undefined,undefined,this.x+item.offset_x-(size_x/2),this.y+item.offset_y-(size_y/2),size_x,size_y)

                // console.log(item.draw)
                // console.log(this.closest_item)
                if(engin.cursor.image==hammer_cursor_image && this.closest_item!=undefined && this.closest_item.item.parent_reciple && this.closest_item.item.parent_reciple.selected==false){

                    // let [size_x,size_y] = item.calculate_size()
   

                    // if(mouse_x>item.x && mouse_x<item.x+size_x){
                    if(this.closest_item.item.hover){
                    
                        this.closest_item.item.parent_reciple.selected = true
                        

                        this.items.forEach(item_2 => {
                            if(this.closest_item.item.parent_reciple == item_2.parent_reciple){
                                let old_image = item_2.item.item.image
                                let old_hand_size = item_2.item.item.hand_size
            
            
                                // item.item.item.hand_size+=0.1
                                item_2.item.item.image=colorscale(item_2.item.item.image,"255,255,255")
            
                                
            
                                let old_x = item_2.x
                                let old_y = item_2.y
            
                                item_2.x-=4
                                item_2.draw()
                                item_2.x = old_x
            
                               
                                item_2.x+=4
                                item_2.draw()
                                item_2.x = old_x
            
            
                                item_2.y-=4
                                item_2.draw()
                                item_2.y = old_y
            
                                item_2.y+=4
                                item_2.draw()
                                item_2.y = old_y
            
            
            
                                //Top Left
            
                                item_2.y-=4
                                item_2.draw()
                                item_2.y = old_y
            
                                item_2.x-=4
                                item_2.draw()
                                item_2.x = old_x
            
            
                                //Top Right
            
                                item_2.y-=4
                                item_2.draw()
                                item_2.y = old_y
            
                                item_2.x+=4
                                item_2.draw()
                                item_2.x = old_x
            
                                //bottom Left
            
                                item_2.y+=4
                                item_2.draw()
                                item_2.y = old_y
            
                                item_2.x-=4
                                item_2.draw()
                                item_2.x = old_x
            
            
                                //bottom Right
            
                                item_2.y+=4
                                item_2.draw()
                                item_2.y = old_y
            
                                item_2.x+=4
                                item_2.draw()
                                item_2.x = old_x
            
            
            
            
                                item_2.item.item.image = old_image
                                item_2.item.item.hand_size = old_hand_size
                            }
                        });
                    }


                    
                    


                }
                
                

            // });

            this.items.forEach(item => {
      

                // let size_x=crafting_table_item_size*item.item.hand_size
     
                    item.draw()
                // }
                

            });

//             screen.save()

            
//             // screen.beginPath()
// screen.fillRect(this.x, this.y, this.size_x, this.size_y);            
            

//             // screen.clip()
//             screen.globalCompositeOperation = 'destination-in'
            // draw_image(colorscale(marble_image,"0,200,0"),0,0,undefined,undefined,mouse_x,mouse_y,100,100)

            // let size_x = inventory_hand.size_x * inventory_hand.item_size_mult * inventory_hand.item.item.hand_size

            let temp_canvas = document.createElement('canvas');
            let inventory_hand_layer = temp_canvas.getContext("2d");

            temp_canvas.width = innerWidth;
            temp_canvas.height = innerHeight;

            inventory_hand_layer.imageSmoothingEnabled = false;


            save_screen()

            screen = inventory_hand_layer
        
            // console.log(inventory_hand)
            let old_count = inventory_hand.slot.count
            inventory_hand.slot.count=0

            inventory_hand.draw()
            inventory_hand.slot.count=old_count


            restore_screen()
            

            let clip_layer = setup_clip()

            clip_layer.screen.fillStyle = "rgb(70,70,70,0.5)";
            clip_layer.screen.fillRect(this.x, this.y, this.size_x, this.size_y)
            
            

            clip(clip_layer)

            screen.save()

            clip_layer.screen.translate(10,10)

            clip_layer.screen.drawImage(temp_canvas,0,0);
            screen.restore()
            
            
            

            // screen.save()

            // screen.translate(100,0)

            // screen.fillStyle = "rgb(0,0,0)";
            // screen.fillRect(this.x, this.y, this.size_x/2, this.size_y/2)

            // screen.restore()


            

            // draw_image(player.inventory_hand.item.image,0,0,undefined,undefined,(mouse_x-(size_x/2))+20,(mouse_y-(size_x/2))+10,200,200,undefined);

            // draw_image(player.inventory_hand.item.image,0,0,player.inventory_hand.item.image.width,player.inventory_hand.item.image.height,(mouse_x-(size_x/2))+20,(mouse_y-(size_x/2))+10,300,300)
            
         
            
            
            


            screen.drawImage(clip_layer.canvas,0,0)


            
            


        //     clip_images(,
        //     player.inventory_hand.item.image,
        //     (mouse_x-(size_x/2))+20,
        //     (mouse_y-(size_x/2))+10,
        //     size_x,
        //     size_x
        // )


            // screen.drawImage(
            //     colorscale(img,"70,70,70,0.5"),
            //     0,
            //     0
            // );
       

            // // colorscale(marble_image,color="200,200,0")

            // screen.restore()


        }
        
        this.update_func=function(){
    

            this.items.forEach(item => {

                item.update()

            });


            if(this.hover && KeysDown["Shift"] && inventory_hand.item.item.name=="blank"){
                engin.cursor.set_cursor(hammer_cursor_image)
            }
            else if(hammer_cursor_image==engin.cursor.image){
                
                engin.cursor.set_cursor("")

            }


            let hand_x=mouse_x
            let hand_y=mouse_y


            this.closest_item = undefined


            for(let i=this.items.length-1;i>=0;i--){

                let item = this.items[i]

                if(item.x<hand_x && item.x+(crafting_table_item_size)>hand_x){
                    if(item.y<hand_y && item.y+(crafting_table_item_size)>hand_y){

                        let distance = Math.hypot((item.x+(crafting_table_item_size/2))-hand_x,(item.y+(crafting_table_item_size/2))-hand_y)

                        if(this.closest_item!=undefined){
                            
                            

                            if(distance<this.closest_item.distance){
                                this.closest_item={
                                    "item" : item,
                                    "distance" : distance,
                                    "index":i
                                }           
                            }

                        }
                        else{
                            this.closest_item={
                                "item" : item,
                                "distance" : distance,
                                "index":i
                            }

                        }







                    }
                }



            }






        }


        this.add_item = function(item,x,y){

            
            
            console.log(item)
            let item_display = new Item_display({
                "x":x,
                "y":y,
                "align":"center",
                "size_x":crafting_table_item_size,
                "size_y":crafting_table_item_size,
                "item" : new inventory_slot(item)
            })
            
            // console.log(item_display.x+(crafting_table_item_size.size_x/2),mouse_x)

            this.items.push(item_display)



            //Check recipes
            // crafting_points=[]

            let completed_recipes = []
            recipes.forEach(recipe => {

                let correct_table = false
                
                if(recipe.requires==undefined){
                    correct_table=true
                    // alert("G")
                }
                else if(this.table_types!=undefined){
                    recipe.requires.forEach(required_table => {
                        this.table_types.forEach(this_table_type => {
                            if(required_table == this_table_type){
                                correct_table=true
                            }
                        })
                    })
                }

                if(correct_table){
                    recipe.ingredients.forEach(ingredient => {

                        
                    if((ingredient.item && ingredient.item.name==item.name) || (get_property(item,"tool_part") && get_property(item,"tool_part").part==ingredient.part_type)){
                        let completed_recipe = check_recipe(this,x-(ingredient.x*crafting_table_item_size),y-(ingredient.y*crafting_table_item_size),recipe)
                        
                        if(completed_recipe){
                            completed_recipes.push(completed_recipe)
                        }
                        
                        


                        
                    }
                    })
                }
                
                

                // recipe.ingredients.forEach(ingredient => {
                    
                //     if(ingredient.item.name==item.item.name){

                //         let recipe_failed=false

                //         recipe.ingredients.forEach(ingredient => {
                //             let x = (ingredient.x*crafting_table_item_size) + item_display.x
                //             let y = (ingredient.y*crafting_table_item_size) + item_display.y

                //             let item_found = false
                //             this.items.forEach(item => {
                //                 if(item.x-(crafting_table_recipe_space/2)<x &&  item.x+(crafting_table_recipe_space/2)>x ){
                //                     if(item.y-(crafting_table_recipe_space/2)<y &&  item.y+(crafting_table_recipe_space/2)>y ){
                //                         item_found=true
                //                     }
                //                 }
                //             });

                //             if(item_found==false){
                //                 recipe_failed=true
                //             }
                            

                //         })


                //         if(recipe_failed==false){
                //             console.log(recipe.result[0].item.name)
                //         }
                        
                //     }
                // });
                
            });

            let biggest_completed_recipe
            if(completed_recipes.length){
                
                biggest_completed_recipe = completed_recipes[0]

                for(let i=1;i<completed_recipes.length;i++){
                    let completed_recipe = completed_recipes[i]

                    if(completed_recipe.items_in_recipe.length>biggest_completed_recipe.items_in_recipe.length){
                        biggest_completed_recipe = completed_recipe
                    }
    
    
    
                }
            }
            
            // for(let i=1;i<completed_recipes.length;i++){
            //     let completed_recipe = completed_recipes[i]



            // }
    

            if(biggest_completed_recipe){
                this.completed_recipes.push(biggest_completed_recipe)
        
                // items_in_recipe.forEach(item => {
                for(let i=0;i<biggest_completed_recipe.items_in_recipe.length;i++){
                    let item = biggest_completed_recipe.items_in_recipe[i]
        
                    if(item.parent_reciple!=undefined){
                        for(let i=0;i<this.completed_recipes.length;i++){
                            let completed_recipe = this.completed_recipes[i]
        
                            if(item.parent_reciple==completed_recipe){
        
        
                                for(let i=0;i<this.items.length;i++){
        
                                    if(this.items[i].parent_reciple == completed_recipe){
                                        this.items[i].parent_reciple=undefined
                                        // console.log("G_")
                                    }
                            
                                    
                                }
                                
                                this.completed_recipes.splice(i,1)
                            
                            }
                            
                        }
                    }
                    
                    // console.log("SET")
                    item.parent_reciple = biggest_completed_recipe
                    item.recipe_index = i
                }
            }


        }

        this.remove_item = function(index){

            let removed_item = this.items[index]
            this.items.splice(index,1)

            

            
            for(let i=0;i<this.completed_recipes.length;i++){
                
                if(this.completed_recipes[i] == removed_item.parent_reciple){

                    this.completed_recipes.splice(i,1)
                }
                
            }

            this.items.forEach(item => {
                if(item.parent_reciple == removed_item.parent_reciple){
                    item.parent_reciple = undefined
                }
            });

        }

        let drop_item_on_table=function(table_ui=this,count=1){
            

            let can_place = true

            this.items.forEach(item => {

                let center_x = item.x+(crafting_table_item_size/2)
                let center_y = item.y+(crafting_table_item_size/2)

                if(center_x-(crafting_table_item_collision_size/2)<mouse_x && center_x+(crafting_table_item_collision_size/2)>mouse_x){
                    if(center_y-(crafting_table_item_collision_size/2)<mouse_y && center_y+(crafting_table_item_collision_size/2)>mouse_y){
                        can_place=false
                    }
                }
                
            });
            
            if(player.inventory_hand.item.name!="blank" && can_place){

                

                let in_on_top_of_item = false

                let hand_x=mouse_x-table_ui.x
                let hand_y=mouse_y-table_ui.y

                for(let i=table_ui.items.length-1;i>=0 && in_on_top_of_item==false;i--){

                    let item = table_ui.items[i]

                    let item_size = crafting_table_item_collision_size


                    if(item.offset_x-(item_size/2)<hand_x && item.offset_x+(item_size/2)>hand_x){
                        if(item.offset_y-(item_size/2)<hand_y && item.offset_y+(item_size/2)>hand_y){

                            // this.items.splice(i,1)
                            in_on_top_of_item = true
                        }
                    }



                }


                if(in_on_top_of_item==false){
                    let item = copy(player.inventory_hand.item)
                    
                    item.count=count


           

                    // item.offset_x=mouse_x-table_ui.x
                    // item.offset_y=mouse_y-table_ui.y


                    
  

                    
                    table_ui.add_item(item,mouse_x,mouse_y)


                    
                    player.inventory_hand.set_count(player.inventory_hand.count-1)
                }


                


                
            }



           


        }

        this.on_clicked=function(){
            // if((player.inventory_hand.item.name=="blank" || player.inventory_hand.item.name==this.items[i].item.name)){

            // console.log(this.items)
                // let picked_up_item = false

            if(engin.cursor.image==undefined){
                if(this.closest_item!=undefined){
                    
            
                    if(this.closest_item.item.item.item.name==player.inventory_hand.item.name){

                        this.remove_item(this.closest_item.index)
                        Entity_class.give_item(this.closest_item.item.item,[player.inventory_hand],1)

                    }
                    else if(player.inventory_hand.item.name=="blank"){

                        this.remove_item(this.closest_item.index)

                        player.inventory_hand.item = this.closest_item.item.item.item
                        player.inventory_hand.count = 1


                    }

                }                
            }
            else if(engin.cursor.image==hammer_cursor_image){
                
                if(this.closest_item.item.parent_reciple){
                    if(this.closest_item.item.parent_reciple.hits==undefined){
                        this.closest_item.item.parent_reciple.hits = 0
                    }

                    this.closest_item.item.parent_reciple.hits++

                    let hits = this.closest_item.item.parent_reciple.hits

                    let items_removed = []

                    this.closest_item.item.parent_reciple.items_in_recipe.forEach(recipe_item => {
                        for(let i=0;i<this.items.length;i++){
                            let item = this.items[i]

                            if(item == recipe_item){


                                if(hits==1 || 2){
                                    // items_removed.push(this.items.splice(i,1)[0]) 
                                }

                                if(hits==3){
                                    
                                }



                                if(hits==4){
                                    this.items.splice(i,1)    


                                }

                            }
                        }                    
                    });

                    if(hits==1){
                        
                        let removed_items = []
                        // for(let i=0;i<this.closest_item.item.parent_reciple.items_in_recipe.length;i++){
                        this.closest_item.item.parent_reciple.items_in_recipe.forEach(item_in_recipe => {
                            


                            // let item_in_recipe = this.closest_item.item.parent_reciple.items_in_recipe
                        
                            for(let i=0;i<this.items.length;i++){

                                let item = this.items[i]
                    
                                if(item_in_recipe == item){
                                    removed_items.push(this.items.splice(i,1)[0])
                                }
                                

                            }

                

                            

                            // for(let i=0;i<this.closest_item.item.parent_reciple.recipe.ingredients.length){
                                
                            // }
                            
                        });

                        for(let ingredient_i=0;ingredient_i<this.closest_item.item.parent_reciple.recipe.ingredients.length;ingredient_i++){

                            for(let i=0;i<removed_items.length;i++){
                                let removed_item = removed_items[i]
        
           
                                let depth = this.closest_item.item.parent_reciple.recipe.ingredients[removed_item.recipe_index].depth

                                if(depth==undefined){
                                    depth=0
                                }

                                if(depth==ingredient_i){

                                    this.items.push(removed_item)

                                    removed_items.splice(i,1)

                                }
                                
                            }                     
                        }

                        removed_items.forEach(removed_item => {
                            console.error("Crafting table recipe depth error!")
                            this.items.push(removed_item)
                            
                        });



                        
                        
                        // // items_removed
                    }

                    if(hits==4){
                        


                        let result_x
                        let result_y

                        let center_item_index

                        for(let i=0;i<this.closest_item.item.parent_reciple.recipe.ingredients.length;i++){
                        // this.closest_item.item.parent_reciple.recipe.ingredients.forEach(ingredient_item => {
                            let ingredient_item = this.closest_item.item.parent_reciple.recipe.ingredients[i]
                            if(ingredient_item.center==true){
                                center_item_index = i
                            }
                        }

                        this.closest_item.item.parent_reciple.items_in_recipe.forEach(recipe_item => {
                  
                            if(center_item_index==recipe_item.recipe_index){

                                let [size_x,size_y] = recipe_item.calculate_size()

                                result_x = recipe_item.x+crafting_table_item_size/2
                                result_y = recipe_item.y+crafting_table_item_size/2

                            }
                        });

                        
                        this.closest_item.item.parent_reciple.recipe.result.forEach(result_item => {
                            // console.log(result_item)

                            if(result_item.tool){
                                let parts = {}


                                this.closest_item.item.parent_reciple.items_in_recipe.forEach(recipe_item2 => {
                                    parts[recipe_item2.item.item.tool_part.part] = recipe_item2.item.item
                                });

                 
                                this.add_item(
                                    {
                                        "item":create_item(result_item.tool,{"parts":parts}),
                                        "count":1
                                    },
                                
                                
                                
                                result_x+(result_item.x*crafting_table_item_size),result_y+(result_item.y*crafting_table_item_size))   

                            }
                            else{
                                this.add_item({
                                    "item":create_item(result_item.item.name),
                                    "count":1
                                },
                                
                                
                                
                                result_x+(result_item.x*crafting_table_item_size),result_y+(result_item.y*crafting_table_item_size))   
                            }


                            // this.add_item({
                            //     "item":(get_item(result_item.item.name,result_item)),
                            //     "count":1
                            // },
                            
                            
                            
                            // result_x+(result_item.x*crafting_table_item_size),result_y+(result_item.y*crafting_table_item_size))         

                            
                            // console.log(result_item.item.name)
                        });

                    }                    
                }



                // console.log(this.closest_item.item.parent_reciple)
            }






                // if(picked_up_item==false){
                    
                //         drop_item_on_table(this,10)
                    
                // }

            // }
            // else{
            //     drop_item_on_table(this)
            // }

            
        }
        this.on_right_clicked=drop_item_on_table

        




    }
}


