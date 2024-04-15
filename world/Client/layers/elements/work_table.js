let crafting_table_item_size = slot_size*1.2

let crafting_table_item_collision_size = 50

let crafting_table_recipe_space = 50


function check_recipe(table,x,y,recipe){
    

    let items_in_recipe = []

    let recipe_failed = false

    for(let i=0;i<table.items.length;i++){
        let item = table.items[i]

        item.slot.item.in_recipe = false

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
            

                let item = table.items[i].slot.item

                
                
                if((ingredient.item && item.name == ingredient.item.name) || (get_property(item,"tool_part") && get_property(item,"tool_part").part==ingredient.part_type)){


                    let item_x = table.items[i].x + (table.items[i].size_x/2)
                    let item_y = table.items[i].y + (table.items[i].size_y/2)


                    if(x_2-(crafting_table_recipe_space/2)<item_x &&  x_2+(crafting_table_recipe_space/2)>item_x ){
                        if(y_2-(crafting_table_recipe_space/2)<item_y &&  y_2+(crafting_table_recipe_space/2)>item_y ){
                            
                                //GET CLOSES ITEM

                                if(items_in_recipe.includes(item)==false  && item.in_recipe==false){
                                    possible_items.push(item)
                                    // console.log("A")
                                    // item_found=true
                                }
                                
                            
                        }
                    }                    
                }


            }

            if(possible_items.length==0){
                recipe_failed=true
                // console.log(possible_items)
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

const temp_canvas = document.createElement('canvas');
const temp_screen = temp_canvas.getContext("2d");

function get_temp_screen(width = innerWidth,height = innerHeight,imageSmoothingEnabled = false){

    temp_canvas.width = width;
    temp_canvas.height = height;

    temp_screen.imageSmoothingEnabled = false;

    return [temp_canvas,temp_screen]
}


class table_ui extends button{
    constructor(info){

        super(info)

        this.items=[]

        this.closest_item = undefined

        this.shadow_1_canvas = document.createElement('canvas')
        this.shadow_1_screen = this.shadow_1_canvas.getContext("2d")


        this.shadow_2_canvas = document.createElement('canvas')
        this.shadow_2_screen = this.shadow_2_canvas.getContext("2d")


        this.on_removed=function(){
            this.items.forEach(item => {

                player.give_item({"item":item.item.item})
    
            })
    
            this.items=[]


            
            engin.cursor.set_cursor("default")
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


                    
                    player.inventory_hand.set_count(player.inventory_hand.item.count-1)
                }


                


                
            }



           


        }

        this.on_right_clicked=drop_item_on_table

       
    }

    on_clicked(){

        if(engin.cursor.image==undefined){
            if(this.closest_item!=undefined){
                
                let item = this.closest_item.item

                if(item.name==player.inventory_hand.item.name){

                    this.remove_item(this.closest_item.index)
                    Entity_class.give_item(item,[player.inventory_hand],1)

                }
                else if(player.inventory_hand.item.name=="blank"){

                    this.remove_item(this.closest_item.index)

                    player.inventory_hand.item = item
                    player.inventory_hand.item.count = 1


                }

            }                
        }

    }

    add_item(item,x,y){

        let item_display = new Item_display({
            "x":x,
            "y":y,
            "align":"center",
            "size_x":crafting_table_item_size,
            "size_y":crafting_table_item_size,
            "item" : new inventory_slot(item)
        })
        
        this.items.push(item_display)


        let completed_recipes = []
        recipes.forEach(recipe => {

            let correct_table = false
            
           
            if(recipe.requires==undefined){
                correct_table = true
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

        // console.log(biggest_completed_recipe)

        if(biggest_completed_recipe){
            this.completed_recipes.push(biggest_completed_recipe)
            
            
            
            // items_in_recipe.forEach(item => {
            for(let i=0;i<biggest_completed_recipe.items_in_recipe.length;i++){
                

                let item = biggest_completed_recipe.items_in_recipe[i]


                let item_display

                this.items.forEach(element => {
                    if(element.slot.item===item){
                        item_display = element
                    }
                });
                
                
    
                if(item_display.parent_reciple!=undefined){
                    for(let i=0;i<this.completed_recipes.length;i++){
                        let completed_recipe = this.completed_recipes[i]
    
                        if(item_display.parent_reciple==completed_recipe){
    
    
                            for(let i=0;i<this.items.length;i++){
    
                                if(this.items[i].parent_reciple == completed_recipe){
                                    // alert("T")
                                    this.items[i].parent_reciple = undefined

                                }
                        
                                
                            }
                            
                            this.completed_recipes.splice(i,1)
                        
                        }
                        
                    }
                }
                
                // console.log(item_display)
                item_display.parent_reciple = biggest_completed_recipe


                item_display.recipe_index = i
             
                

            }
        }
        
        return item_display
    }

    get_closest_item(){
        let hand_x=mouse_x
        let hand_y=mouse_y

        
        this.closest_item = undefined


        for(let i=this.items.length-1;i>=0;i--){

            let display_item = this.items[i]


            if(display_item.x<hand_x && display_item.x+(crafting_table_item_size)>hand_x){
                if(display_item.y<hand_y && display_item.y+(crafting_table_item_size)>hand_y){

                    let distance = Math.hypot((display_item.x+(crafting_table_item_size/2))-hand_x,(display_item.y+(crafting_table_item_size/2))-hand_y)
                    
                    if(this.closest_item!=undefined){
                        
                        // console.log(distance,this.closest_item.distance)
  

                        if(distance<this.closest_item.distance){

                            this.closest_item={
                                "item" : display_item.slot.item,
                                "distance" : distance,
                                "index":i
                            }  
                        }

                    }
                    else{
                        this.closest_item={
                            "item" : display_item.slot.item,
                            "distance" : distance,
                            "index":i
                        }

                    }

                }
            }



        }
    }



    after_draw_func(){
    
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
            // try{
            //     // console.log(this.closest_item.item.hover)
            // }
            // catch(err){

            // }

            
            
            if(engin.cursor.image==images.hammer_cursor && this.closest_item!=undefined){

                let closest_display_item = this.items[this.closest_item.index]

                

                if(closest_display_item.hover){
                    
                    
                    // this.closest_item.item.parent_reciple.selected = true
                    

                    this.items.forEach(display_item => {

                        let item = display_item.slot.item
                        let old_item = copy(item)


                        if(this.items[this.closest_item.index].parent_reciple && this.items[this.closest_item.index].parent_reciple == display_item.parent_reciple){

        
                            item.image = colorscale(get_property(item,"image"),"255,255,255")
        
                            
        
                            let old_x = display_item.x
                            let old_y = display_item.y
        
                            display_item.x-=4
                            display_item.draw()
                            display_item.x = old_x
        
                           
                            display_item.x+=4
                            display_item.draw()
                            display_item.x = old_x
        
        
                            display_item.y-=4
                            display_item.draw()
                            display_item.y = old_y
        
                            display_item.y+=4
                            display_item.draw()
                            display_item.y = old_y
        
        
        
                            //Top Left
        
                            display_item.y-=4
                            display_item.draw()
                            display_item.y = old_y
        
                            display_item.x-=4
                            display_item.draw()
                            display_item.x = old_x
        
        
                            //Top Right
        
                            display_item.y-=4
                            display_item.draw()
                            display_item.y = old_y
        
                            display_item.x+=4
                            display_item.draw()
                            display_item.x = old_x
        
                            //bottom Left
        
                            display_item.y+=4
                            display_item.draw()
                            display_item.y = old_y
        
                            display_item.x-=4
                            display_item.draw()
                            display_item.x = old_x
        
        
                            //bottom Right
        
                            display_item.y+=4
                            display_item.draw()
                            display_item.y = old_y
        
                            display_item.x+=4
                            display_item.draw()
                            display_item.x = old_x


                            //Reseting X and Y
                            display_item.x = old_x
                            display_item.y = old_y

        
                            
                        }

                        display_item.slot.item = old_item
                        
                    });
                }


                
                


            }
            
            

        // });

        this.items.forEach(item => {
  

                item.draw()
           

        });

            // screen.save()

        
            // screen.beginPath()
// screen.fillRect(this.x, this.y, this.size_x, this.size_y);            
        

//             // screen.clip()
//             screen.globalCompositeOperation = 'destination-in'
//         draw_image(colorscale(marble_image,"0,200,0"),0,0,undefined,undefined,mouse_x,mouse_y,100,100)

//         let size_x = inventory_hand.size_x * inventory_hand.item_size_mult * inventory_hand.item.item.hand_size




        // save_screen()

        // screen = inventory_hand_layer
    
        // console.log(inventory_hand)

        // let abc2 = get_temp_screen()


        // let temp_canvas=(abc2[0])
        // let temp_screen=(abc2[1])

        this.shadow_1_canvas.width = innerWidth
        this.shadow_1_canvas.height = innerHeight
        this.shadow_1_screen.clearRect(0, 0, this.shadow_1_canvas.width, this.shadow_1_canvas.height);


        this.shadow_1_screen.save()

        this.shadow_1_screen.translate((this.x*-1)+10,(this.y*-1)+10)


        let old_count = inventory_hand.slot.item.count
        inventory_hand.slot.item.count=0
        
        inventory_hand.draw(this.shadow_1_screen)
        inventory_hand.slot.item.count=old_count

        this.shadow_1_screen.restore()

        // restore_screen()
        

        // let this.shadow_2_screen\ = setup_clip()

        // let abc = get_temp_screen()

        // let this.shadow_2_screen = {canvas:abc[0],screen:abc[1]}

        this.shadow_2_canvas.width = innerWidth
        this.shadow_2_canvas.height = innerHeight
        this.shadow_2_screen.clearRect(0, 0, this.shadow_2_canvas.width, this.shadow_2_canvas.height);

        this.shadow_2_screen.fillStyle = "rgb(70,70,70,0.5)";
        this.shadow_2_screen.fillRect(0, 0, this.size_x, this.size_y)
        
        

        clip(this.shadow_2_screen)

        this.shadow_2_screen.save()

        this.shadow_2_screen.drawImage(this.shadow_1_canvas,0,0);
        
        this.shadow_2_screen.restore()
        
        

        screen.drawImage(this.shadow_2_canvas,this.x,this.y)


        
        


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


    remove_item(index){

        let removed_item = this.items[index]
        this.items.splice(index,1)


        return removed_item

    }
    
    update_func(){
    
        this.items.forEach(item => {

            item.update()

        });

        this.get_closest_item()

    }

}

class work_table_ui extends table_ui{
    constructor(info){

        super(info)

        this.completed_recipes = []

        this.table_types = info.table_types

        this.on_removed=function(){
            this.items.forEach(item => {

                player.give_item({"item":item.item.item})
    
            })
    
            this.items=[]


            
            engin.cursor.set_cursor("default")
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


                    
                    player.inventory_hand.set_count(player.inventory_hand.item.count-1)
                }


                


                
            }



           


        }

        this.on_right_clicked=drop_item_on_table

       
    }

    craft_item(parent_reciple){
        
        let result_x
        let result_y

        let center_item_index

        for(let i=0;i<parent_reciple.recipe.ingredients.length;i++){

            let ingredient_item = parent_reciple.recipe.ingredients[i]

            if(ingredient_item.center==true){
                center_item_index = i
            }

        }
    

        this.items.forEach(display_item => {
            
                if(display_item.parent_reciple && display_item.parent_reciple==parent_reciple){

                        result_x = display_item.x+crafting_table_item_size/2
                        result_y = display_item.y+crafting_table_item_size/2


                }
        });
            

        
        parent_reciple.recipe.result.forEach(result_item => {
            

            // console.log(result_item)
            if(result_item.tool){
                let parts = {}


                parent_reciple.items_in_recipe.forEach(recipe_item2 => {
                    // console.log(recipe_item2)
                    parts[get_property(recipe_item2,"tool_part").part] = recipe_item2
                });


                this.add_item(
                    create_item(result_item.tool,{"parts":parts}),
                    result_x+(result_item.x*crafting_table_item_size),result_y+(result_item.y*crafting_table_item_size)
                )   

            }
            else{
                // console.log(result_item.item.name)
                this.add_item(
                    create_item(result_item.item.name),
                    result_x+(result_item.x*crafting_table_item_size),result_y+(result_item.y*crafting_table_item_size)
                )   
            }
        });
// alert("T")
//         console.log("item_display.parent_reciple,parent_reciple")

        for(let i=this.items.length-1;i>=0;i--){
            let item_display = this.items[i]

            if(item_display.parent_reciple == parent_reciple){



                this.items.splice(i,1)



            }
        }
        
    }

    parent_remove_item=super.remove_item

    remove_item(index){
        // console.log(this.completed_recipes)
        let removed_item = this.parent_remove_item(index)
        
        for(let i=0;i<this.completed_recipes.length;i++){
            
            if(this.completed_recipes[i] == removed_item.parent_reciple){
                // alert("R")
                this.completed_recipes.splice(i,1)

            }
            
        }
        
        

        this.items.forEach(item => {
            if(item.parent_reciple == removed_item.parent_reciple){
                
                item.parent_reciple=undefined

            }
        });

        delete removed_item.parent_reciple
        delete removed_item.in_recipe
        
        

    }

    parent_remove_item = super.remove_item

}

class crafting_table_ui extends work_table_ui{
    constructor(info){

        info.table_types = info.table_types

        super(info)

    }

    parent_update_func = super.update_func

    parent_on_clicked = super.on_clicked

    on_clicked(){

        this.parent_on_clicked()

        if(engin.cursor.image==images.hammer_cursor && this.closest_item!=undefined){


            let parent_reciple = this.items[this.closest_item.index].parent_reciple

            
            if(parent_reciple){
                if(parent_reciple.hits==undefined){
                    parent_reciple.hits = 0
                }

                parent_reciple.hits++

                let hits = parent_reciple.hits

                let items_removed = []

                // parent_reciple.items_in_recipe.forEach(recipe_item => {
        
                // });

                if(hits==1){
                    
                    let removed_items = []
                    // for(let i=0;i<this.closest_item.item.parent_reciple.items_in_recipe.length;i++){
                  
                        


                        // let item_in_recipe = this.closest_item.item.parent_reciple.items_in_recipe
                    
                        for(let i=0;i<this.items.length;i++){

                            let item_display = this.items[i]

                            if(parent_reciple == item_display.parent_reciple){
              
                                
                                removed_items.push(this.items.splice(i,1)[0])
                            }
                            

                        }

            

                        

                        // for(let i=0;i<this.closest_item.item.parent_reciple.recipe.ingredients.length){
                            
                        // }
                       

                    for(let ingredient_i=0;ingredient_i<parent_reciple.recipe.ingredients.length;ingredient_i++){

                        for(let i=0;i<removed_items.length;i++){
                            
                            let removed_item = removed_items[i]
    
       
                            
                            let depth = parent_reciple.recipe.ingredients[removed_item.recipe_index].depth

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


                    this.craft_item(parent_reciple)
                    
                }                    
            }
        }
        
    }

    update_func(){


        if(this.hover && KeysDown["Shift"] && player.inventory_hand.item.name=="blank"){
            engin.cursor.set_cursor(images.hammer_cursor)
        }
        else if(images.hammer_cursor==engin.cursor.image){
            
            engin.cursor.set_cursor("default")

        }

        this.parent_update_func()

        
    }



}

class camp_fire_ui extends work_table_ui{
    constructor(info){

        info.table_types = ["camp_fire"]

        super(info)

        
        this.flame_particles = []

    }

    parent_update_func = super.update_func

    parent_after_draw_func = super.after_draw_func

    parent_add_item = super.add_item

    add_item(item,x,y){
        // alert("T")
        let item_display = this.parent_add_item(item,x,y)
// console.log(item.parent_reciple)

        // item.started_cooking = engin.current_time
        // console.log(item_display)
        if(item_display.parent_reciple){
            item_display.ended_cooking = engin.current_time+item_display.parent_reciple.recipe.cook_time
            item_display.percent_cooked = 0
            item_display.next_flame_time = engin.current_time+900            
        }

        

        // this.flame_particles.push({"x":x,
        //     "y":y,
        //     "size":crafting_table_item_size,
        //     "image":colorscale(wheat_seed_image,"227,82,9,0.75"),
        //     "alpha" : 1
        // })
    }

    update_func(){
        this.parent_update_func()


        // console.log(this.draw_items)

        // this.after_draw_func()

        for(let i=0;i<this.items.length;i++){
            let item_display = this.items[i]

            if(item_display.percent_cooked!=undefined){
                item_display.percent_cooked = 1-((item_display.ended_cooking-engin.current_time)/item_display.parent_reciple.recipe.cook_time)
            
            // console.log(item_display.percent_cooked)
            // console.log(item)
            
            if(item_display.next_flame_time<engin.current_time){
                item_display.next_flame_time = engin.current_time+(800*(1-item_display.percent_cooked))+300

                this.flame_particles.push({
                    "x":item_display.orgin_x,
                    "y":item_display.orgin_y,
                    "size":item_display.display_size_x,
                    "image":colorscale(get_property(item_display.slot.item,"image"),"227,82,9,0.75"),
                    "alpha" : 1
                })
            }
            }

            
        }

        for(let i=0;i<this.flame_particles.length;i++){

            let flame = this.flame_particles[i]

            flame.size*=1.015
            flame.alpha-=0.04

            if(flame.alpha<=0){
                this.flame_particles.splice(i,1)
            }


        }
       

        
    }

    after_draw_func(){

        
        this.flame_particles.forEach(flame => {

            screen.save()

            screen.globalAlpha = flame.alpha
            screen.drawImage(flame.image,flame.x-(flame.size/2),flame.y-(flame.size/2),flame.size,flame.size);

            screen.restore()


            
        });

        for(let item_display of this.items){

            if(item_display.percent_cooked!=undefined){

                screen.save()

                screen.globalAlpha = (item_display.percent_cooked*0.85)+0.15
                if(item_display.percent_cooked<1){
                    screen.drawImage(colorscale(get_property(item_display.slot.item,"image"),"247, 11, 7"),(item_display.orgin_x-10)-(item_display.display_size_x/2),(item_display.orgin_y-10)-(item_display.display_size_y/2),item_display.display_size_x+20,item_display.display_size_y+20);
                }
                else{
                    // console.log(item_display.parent_reciple)
                    this.craft_item(item_display.parent_reciple)
                }
                
                screen.restore()

            }
        }
        
        this.parent_after_draw_func()

        for(let item_display of this.items){

            if(item_display.percent_cooked!=undefined){

                screen.save()

                screen.globalAlpha = (item_display.percent_cooked*0.6)

                screen.drawImage(colorscale(get_property(item_display.slot.item,"image"),"255, 128, 0"),(item_display.orgin_x)-(item_display.display_size_x/2),(item_display.orgin_y)-(item_display.display_size_y/2),item_display.display_size_x,item_display.display_size_y);
                
               
                
                screen.restore()

            }
        }

    }

    on_clicked = super.on_clicked

}







