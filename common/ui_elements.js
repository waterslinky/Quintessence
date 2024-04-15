
            // class base_element{
//     constructor(info){
//         if(info.elements){
//             this.elements=info.elements
//         }
//     }
// }

// class base_element_class{
//     constructor(info){
//         if(info.partner){
//             this.partner=info.partner
//         }
        
//     }
// }

function getTextFromClipboard(done_function,other) {
    navigator.clipboard.reAUText()
        .then(text => {

            done_function(text,other)
            // alert(text)
            // return text
        })
        .catch(error => {
            console.error('Failed to read clipboard contents: ', error);
        });
}

// function displayText(text) {
    
//     const outputDiv = document.getElementById('output');
//     outputDiv.textContent = text;
    
// }



class element_base {
    constructor(info){
        this.find_pos=function(parent=false){

            if(this.orgin_x!=undefined){
                this.x=this.orgin_x
            }
            if(this.orgin_y!=undefined){
                this.y=this.orgin_y
            }

            let parent_x=0
            let parent_y=0
       




            


            if(this.parent){

                // this.y-=30

                if(this.parent.x){
                    parent_x=this.parent.x
                }
                else if(this.parent.orgin_x){
                    parent_x=this.parent.orgin_x
                }


                if(this.parent.y){
                    parent_y=this.parent.y
                }
                else if(this.parent.orgin_y){
                    parent_y=this.parent.orgin_y
                }
                // if(this.parent.align){
                //     parent_align = this.parent.align
                // }

                
                

            }    
            else if(parent){


                if(parent.x){
                    parent_x=parent.x
                }
                else if(parent.x){
                    parent_x=parent.x
                }

                if(parent.y){
                    parent_y=parent.y
                }
                else if(parent.y){
                    parent_y=parent.y
                }
                    
                    
                // if(parent.align){
                //     parent_align=parent.align
                // }


            }

      
            this.x+=parent_x
            this.y+=parent_y
           



            // if(!this.parent){
                if(this.align=="center"){
                        // console.log("center")
                        if(this.display_size_x && this.display_size_y){
                            this.x=this.x-(this.display_size_x/2)
                            this.y=this.y-(this.display_size_y/2)                            
                        }

                }
                else if(this.align=="center_size"){
                        // console.log("center_size")
                        if(this.size_x && this.size_y){
                            this.x=this.x-(this.size_x/2)
                            this.y=this.y-(this.size_y/2)
                        }
                }                   
            // }


            
            
                
                

    
        }

        this.x=info.x!=undefined ? info.x : innerWidth/2
        this.y=info.y!=undefined ? info.y : innerHeight/2

        this.orgin_x = this.x
        this.orgin_y = this.y



        
    }
}


class align {
    constructor(info){
        // super()
        if(info.on_removed){
            this.on_removed = info.on_removed
        }

                if(info.partner){
            this.partner=info.partner
        }
        this.align=info.align

        if(info.parent){
            this.parent=info.parent
        }




        if(info.draw){
           this.draw = info.draw
        }
            
        


        this.x=info.x ? info.x : 0
        this.y=info.y ? info.y : 0

        this.orgin_x=0
        this.orgin_y=0
        if(info.x){
            this.orgin_x=info.x  
        }

        if(info.y){
            this.orgin_y=info.y    
        }


         

        this.true_orgin_x=this.orgin_x
        this.true_orgin_y=this.orgin_y


        
        
        if(info.display_size_x){
            this.display_size_x=info.display_size_x
            this.display_size_y=info.display_size_y 
        }
        else if(info.size_x){
            // alert("NO DISPLAY"+info.size_y)
            this.display_size_x=info.size_x
            this.display_size_y=info.size_y 
        }
        else{
            this.display_size_x=0
            this.display_size_y=0
        }
     

        
        if(info.groups){
            this.groups=info.groups
        }   

        this.elements=[]
        if(info.elements){
        this.elements=info.elements
        }

        this.find_pos=function(parent=false){

            if(this.orgin_x!=undefined){
                this.x=this.orgin_x
            }
            if(this.orgin_y!=undefined){
                this.y=this.orgin_y
            }

            let parent_x=0
            let parent_y=0
       




            


            if(this.parent){

                // this.y-=30

                if(this.parent.x){
                    parent_x=this.parent.x
                }
                else if(this.parent.orgin_x){
                    parent_x=this.parent.orgin_x
                }


                if(this.parent.y){
                    parent_y=this.parent.y
                }
                else if(this.parent.orgin_y){
                    parent_y=this.parent.orgin_y
                }
                // if(this.parent.align){
                //     parent_align = this.parent.align
                // }

                
                

            }    
            else if(parent){


                if(parent.x){
                    parent_x=parent.x
                }
                else if(parent.x){
                    parent_x=parent.x
                }

                if(parent.y){
                    parent_y=parent.y
                }
                else if(parent.y){
                    parent_y=parent.y
                }
                    
                    
                // if(parent.align){
                //     parent_align=parent.align
                // }


            }

      
            this.x+=parent_x
            this.y+=parent_y
           



            // if(!this.parent){
                if(this.align=="center"){
                        // console.log("center")
                        this.x=this.x-(this.display_size_x/2)
                        this.y=this.y-(this.display_size_y/2)
                }
                else if(this.align=="center_size"){
                        // console.log("center_size")

                        this.x=this.x-(this.size_x/2)
                        this.y=this.y-(this.size_y/2)
                }                   
            // }


            
                
                

    
        }
        // this.find_pos()
    }
    
}

class image extends align{
    constructor(info){

        super(info)


        this.cap_size_x=info.cap_size_x!=undefined ? info.cap_size_x : 100
        this.cap_size_y=info.cap_size_y!=undefined ? info.cap_size_y : 100

        if(this.after_draw_func==undefined){[
            this.after_draw_func = info.after_draw_func 
        ]}

        
        
        
        this.show=true
     

        if(info.show!=undefined){
           
            this.show=info.show
            
        }
 
        
        this.stretch_image_rectangle = info.stretch_image_rectangle!=undefined ? info.stretch_image_rectangle : undefined

        // console.log(info.stretch_image_rectangle)

        if(info.image){
            this.image=info.image
        }


        if(info.px){
            this.px=info.px
     
        }
        




        //Color or Image
        if(info.image){
            this.image=info.image
        }

        if(info.color){
            this.color=info.color
        } 


        
        // this.find_pos()


    }
    draw(){
  

        // this.find_pos()

        // this.x=10
        // this.y=10
        // if(this.index){
        //     alert(this.image)
        //     alert(this.x)
        //     alert(this.y)

        //     alert(this.display_size_x)
        //     alert(this.display_size_y)




        // }
        
        // this.display_size_x=100
        // this.display_size_y=100

        // this.image=grass_image
     
        // alert("draw"+this.o)]
        // console.log(this.stretch_image_rectangle)
        if(this.show){
            if(this.image){

                    screen.save()
            
                    // if(this.blur_percent){
                    //     screen.filter="blur("+(9*this.blur_percent)+"px)"
                    // }

                    

                    screen.drawImage(this.image,0,0,this.image.width,this.image.height,this.x,this.y,this.display_size_x,this.display_size_y);
                    // screen.fillStyle = "rgb(0,0,0)";
                    // screen.fillRect(this.x,this.y,this.display_size_x,this.display_size_y);

                    screen.restore()

            }
            else if(typeof this.stretch_image_rectangle!="undefined"){

                this.stretch_image_rectangle.draw(this.x,this.y,this.cap_size_x,this.cap_size_y,this.display_size_x,this.display_size_y)




                // x,y,cap_size_x,cap_size_y,width,height



                // console.log("POPOPO")
            }
            else{
                if(this.color){
                    // screen.drawImage(this.image,0,0,this.image.width,this.image.height,this.x,this.y,this.size_x,this.size_y);

                    // alert(this.color)
                    screen.fillStyle = "rgb("+this.color+")";
                    screen.fillRect(this.x,this.y,this.size_x,this.size_y);
                    
                }
            }



            // screen.fillStyle = "rgb(100,0,0)";
            // // // console.log("AAA")
            // // // console.log(this)
            // // // console.log("AAA")

            
           
            // screen.fillRect(this.x,this.y,this.size_x,this.size_y);
            // // this.x=100

        }

        if(this.after_draw_func){
            this.after_draw_func()
        }
        

    }

}

class button extends image {
    constructor(info){
        // if(info.image || info.color){
            super(info)
        // }
        // else{
        // alert("1"+info.image)
        // alert("2"+info.color)


        // }
        // alert()
        

        this.draw=super.draw
        // this.o="HELLO2"

        // alert(this.draw)

        this.x=info.x
        this.y=info.y


        if(info.elements){
            this.elements=info.elements
        }
        
        //POS
        if(info.align=="center"){
            this.x=info.x-(info.size_x/2)
            this.y=info.y-(info.size_y/2)
        }
        // else{
        //     this.x=this.orgin_x
        //     this.y=this.orgin_y
        // }



        //SIZE
        this.size_x=info.size_x
        this.size_y=info.size_y


        // this.start_render_percent_x=.5
        // this.start_render_percent_y=.5

        // this.render_percent_x=.5
        // this.render_percent_y=.5


        if(info.display_size_x && info.display_size_y){
            this.display_size_x=info.display_size_x
            this.display_size_y=info.display_size_y
        }
        // this.draw=super.draw

       


        // this.filters={

        // }

        //DRAW


        

        // this.color=info.color

        // if(info.image){
        //     this.image=info.image
        // }

        this.hover=false



        //UPDATA

        if(info.update_func){
            this.update_func=info.update_func
        }


        if(info.on_clicked){
            this.on_clicked = info.on_clicked
        }

        this.last_button_clicked=false

        //Hover

        this.hover_func=function(){}

        if(info.hover_func){
            this.hover_func=info.hover_func
        }



        if(info.hover_brightness){
            this.hover_brightness=info.hover_brightness
        }
        this.blur_percent=0
        
        // this.find_pos()
        

    }

    update(){



        let start_render_percent_x=0
        let start_render_percent_y=0

        let render_percent_x=1
        let render_percent_y=1


        let render_box_changed=false
        if(this.render_box && this.y<this.render_box[1]){
            render_box_changed=true

            let h=(this.size_y-(this.render_box[1]-this.y))/this.size_y

            if(h<0){
                h=0
            }
            if(h>1){
                h=1
            }


            render_percent_y = h

            start_render_percent_y = 1-h


        }

        if(this.render_box && this.y+this.size_y>(this.render_box[1]+this.render_box[3])){
            // console.log("OVER")
            render_box_changed=true



            let h=(this.size_y-((this.y+this.size_y)-(this.render_box[1]+this.render_box[3])))/this.size_y

            if(h<0){
                h=0
            }
            if(h>1){
                h=1
            }

            render_percent_y = h

            start_render_percent_y = 0


        }



        if(render_percent_y!=0){
               


            this.original_x=this.x
            this.original_y=this.y

            this.original_size_x=this.size_x
            this.original_size_y=this.size_y  

            if(render_box_changed){
       
                
  




                if(start_render_percent_x!=undefined && start_render_percent_y!=undefined){
                    this.x+=this.size_x*start_render_percent_x
                    this.y+=this.size_y*start_render_percent_y            
                }

                if(render_percent_x!=undefined && render_percent_y!=undefined){
                    // console.log(render_percent_x)
                    this.size_x*=render_percent_x
                    this.size_y*=render_percent_y            
                }         
                
                
            }




    

            let hover=false
            if(this.size_y<0){
                this.y+=this.size_y
                this.size_y*=-1
            }
            if(this.size_x<0){
                
                this.x+=this.size_x
                this.size_x*=-1
            }

            // if(this.start_render_percent_x!=undefined && this.start_render_percent_y!=undefined){
            //     // this.x+=this.size_x*this.start_render_percent_x
            //     // console.log(this.size_x*this.start_render_percent_x)
            //     // this.y+=this.size_y*this.start_render_percent_y            
            // }




            // if(this.render_percent_x!=undefined && this.render_percent_y!=undefined){
            //     this.size_x*=1
            //     this.size_y*=1        
            // }



            // console.log(this.size_x+" TT "+this.original_size_x)


            

            // let clicked_in_box=false
            


            // 
                if(mouse_x>=this.x && mouse_x<=this.x+this.size_x && mouse_y>=this.y && mouse_y<=this.y+this.size_y){
                    hover=true
                    // alert("r"+mouse_down)
                    if(mouse_down || right_mouse_down){
                        this.last_button_clicked=true
                    // alert("r"+mouse_down)

                    }

                    // console.log("T"+this.on_clicked)

                    // clicked_in_box=true
               
                    

                    if(mouse_down && this.on_clicked){
                        this.on_clicked() 
   
                        mouse_down=false
                    }

                    if(right_mouse_down){
                        // alert("r"+mouse_down)
                        // this.image=grass_image

                        if(this.on_right_clicked){
                            this.on_right_clicked() 
                
                            
                            right_mouse_down=false
                        }

                    }

                }
                // else{
                //     if(this.on_clicked_off && mouse_down){
                //         this.on_clicked_off()
                //     }
                    
                // }
            // }

            if(this.hover==false && hover){
                // if(this.hover_func)
                //              SELCECT SOUND
    
                // let select_sound=new Audio("sounds/selcect.mp3")
                    
                // if(select_sound){

                //     select_sound.volume=0.7
                //     select_sound.play()

                // }
            
            }

            if(hover){
                if(this.hover){


                    if(this.blur_percent_add){
                        this.blur_percent+=this.blur_percent_add




                        if(this.blur_percent<=0){
                            this.blur_percent_add*=-1
                        }
                                        if(this.blur_percent>=1){
                            this.blur_percent_add*=-1
                        }
                    }

                
                }
                this.hover=true
            }
            else{
                this.hover=false

                if(this.blur_percent_add){
                    this.blur_percent=0
                }

            }

            if(this.update_func){
                this.update_func()

            }
            this.hover_event()

            this.x=this.original_x
            this.y=this.original_y

            this.size_x=this.original_size_x
            this.size_y=this.original_size_y


        }


    }

    hover_event(){
        if(this.hover){
            this.hover_func()
        }
    }

}

class tabs{
    constructor(info){

        this.tabs = info.tabs || {}

        
        this.selected_tab = {"elements":[]}
        this.elements = [this.selected_tab]

        this.on_tab_selected = info.on_tab_selected || function(){}
        this.on_tab_unselected = info.on_tab_unselected || function(){}
        


        if(info.buttons){
            this.buttons = info.buttons
            for(let button_name in this.buttons){
                // alert(button_name)


                let button = this.buttons[button_name]
                if(info.starting_tab==button_name){
                    this.on_tab_selected(button)
                }
                let old_clicked = button.on_clicked

                button.parent = this
                
                

                button.on_clicked = function(){
                    for(let button_name in this.parent.buttons){
                        let button = this.parent.buttons[button_name]

                        if(button.selected_tab){
                            button.selected_tab = false
                            this.parent.on_tab_unselected(button)
                        }
                    }

                    this.selected_tab = true
                    this.parent.on_tab_selected(button)

                    for(let button_name in this.parent.buttons){
                        if(this.parent.buttons[button_name]===button){
                            this.parent.set_tab(button_name)
                        }
                    }

                    

                    if(old_clicked){
                        old_clicked()
                    }
                }
                

                this.elements.push(button)
            }
        }

        
        this.set_tab(info.starting_tab)

        
    }
    set_tab(tab_name){

        if(this.tabs[tab_name]){

            replace_list_object(this.selected_tab.elements,[this.tabs[tab_name]])

        }

    }
}



function copy(variable){
    return Object.assign({}, variable)
}


class inventory_group{
    constructor(info){

        
        this.columns=info.columns



        this.y_offset_val=info.y_offset_val!=undefined ? info.y_offset_val : undefined
        this.child_render_box=info.child_render_box!=undefined ? info.child_render_box : undefined
        // console.log(this.child_render_box)


        

        this.marmin=info.marmin

        this.margin_y=info.margin_y

        this.start_off_set_x=info.start_off_set_x
        this.start_off_set_y=info.start_off_set_y
        


        // if(info.inventory_parent){
        this.inventory_parent=info.inventory_parent

        this.inventory_image=info.inventory_image
        // }

        

        



        this.organize=function(){

            
            this.elements=[]

            let rows=0
            for(let i=0;i<this.inventory_parent.length;i+=this.columns){

                let number=this.columns
                if(number>this.inventory_parent.length-i-1){
                    
                    number=this.inventory_parent.length-i

                }
     
    
                MakeInventoryRow(this.elements,this.inventory_image,this.start_off_set_x,this.start_off_set_y+(rows*this.margin_y),number,this.margin,16,this.elements.length,"infinite_output",{"inventory":this.inventory_parent,"render_box":this.child_render_box!=undefined ? this.child_render_box : undefined})            
                rows++
            }            
        }

        this.organize()

        // this.update=function(){

            
            // this.organize()


        this.update=function(){

            this.y_offset=this.y_offset_val()
            if(this.y_offset!=this.old_point_len){
                // this.organize()
                // console.log("T")
                this.elements.forEach(element => {
                    element.orgin_y=element.true_orgin_y-(this.y_offset)
      
                });
            }

            this.old_point_len=this.y_offset
        }
            

            
        // }
        // this.update()


        

        // console.log("2UP")

  
        //Rows and or Collums 

        //margin(X and y) 
        
        //Inventory parent 

    }
}

// function replace_diconary(base_diconary,diconary){

//     for(let index in base_diconary){
//         delete base_diconary[index]
//     }


//     Object.assign(base_diconary, diconary)

// }

function make_container(contents){
    return {
        "contents":contents
    }
}


class Item_display extends button{
    constructor(info){
        super(info)

        this.slot = info.item || undefined


        this.render_box=info.render_box || undefined


        this.item_size_mult = info.item_size_mult || 1
        

        if(info.after_clicked){
            this.after_clicked=info.after_clicked
        }




        this.hover_func = function(){
            let item = this.slot.item

    
            if(item.name!="blank" && engin.cursor.image==undefined){

                item_name_display.active=true
                  
                if(get_property(item,"display_name") && this.type!="bar_slot"){
                    
                    if(typeof get_property(item,"display_name")=="object"){
                        item_name_display.text = get_property(item,"display_name")
                    }
                    else{
                        // console.log(get_property(item,"display_name"))
                        item_name_display.text = [get_property(item,"display_name")]
                    }

                    
                    // console.log(item_name_display.text)
                    
                    if(get_property(item,"has_knowledge")){
                        item_name_display.text.push({"name":"Knowledge:","color":"219, 209, 7"})
                        
    
                        let knowledge_found=false
                     
    
                        player.knowledge.forEach(knowledge => {
                            if(knowledge.name==item.name){
                                knowledge_found=true
                                item_name_display.text.push({"name":knowledge.text,"color":"171, 164, 15"})
                            }
                            
                        });
                        if(!knowledge_found){
                            item_name_display.text.push({"name":"???????","color":"128, 15, 5"})
                        }
                        
                        
    
    
                    }
                    
                    
                }
                
            }
            
            if((item.name=="blank" || !get_property(item,"display_name")) || this.type=="bar_slot" || player.inventory_hand.item.name!="blank" ){
                    item_name_display.active=false
    
            }
            
        }
    
        this.on_clicked = function(){
    
            let item = this.slot.item
    
    
            // alert("LLLL")
            if(this.type=="slot"){
     
                if(player.inventory_hand.item.name==item.name){

                    
                    player.inventory_hand.set_count(Entity_class.give_item(player.inventory_hand.item,[this.slot]))
    
                }
                else{
                    let old_player_inventory_hand=copy(player.inventory_hand.item)
    
                    player.inventory_hand.item = item
                    this.slot.item = old_player_inventory_hand
               
                }
    
    
            }
    
            if(this.type=="infinite_output"){
                
                if(player.inventory_hand.item.name!="blank"){
                    player.inventory_hand.item = create_item("blank")
                 
    
                }
                else if(player.inventory_hand.item.name=="blank"){
                    let item = this.inventory_parent[this.index].item

    
                    player.inventory_hand.item = copy(item)
                    // player.inventory_hand.count=64
          
                    player.inventory_hand.set_count(get_property(item,"stack_size"))
    
                    // this.inventory_parent[this.index].item=old_player_inventory_hand.item
    
                    // player.inventory_hand.count=this.inventory_parent[this.index].count
                    // this.inventory_parent[this.index].count=old_player_inventory_hand.count                
                }
    
    
            }
    
            if(this.type=="bar_slot"){
                this.slot_index.index=this.selected_index
            }
    
    
    
    
            if(this.after_clicked){
               this.after_clicked() 
            } 
            
    
        }
    
        this.on_right_clicked = function(){
            let slot = this.slot
            let item = slot.item
    
    
            if(this.type=="slot"){
    
    
                if(player.inventory_hand.item.name=="blank"  && item.name!=player.inventory_hand.item.name){

                    let count = item.count
                    console.log(1)
                    player.inventory_hand.item=create_item(slot.item)
                    player.inventory_hand.set_count(Math.ceil(count/2))
                    slot.set_count(Math.floor(count/2))

    
                }
                else if((item.name==player.inventory_hand.item.name || item.name=="blank") ){
                    
                    if(item.name=="blank" ){

                        slot.item = create_item(player.inventory_hand.item)
                        slot.set_count(0)
                        
                    }
                    // else{
 this.slot.give_count(1,player.inventory_hand)
                    // }

                 
                    
                   
    
                }
    
                // alert("SPLIT")
    
    
            }
    
            if(this.type=="infinite_output"){
       
                if(item.name!="blank" && player.inventory_hand.item.name=="blank"){
 
                    player.inventory_hand.item=create_item(item)
                    player.inventory_hand.set_count(Math.ceil(get_property(item,"stack_size")/2))
                   
    
                }
    
                else if(player.inventory_hand.item.name!="blank"){
    
                    player.inventory_hand.set_count(player.inventory_hand.count-1)
    
                }
            }
    
    

                
    
        }
    
        this.calculate_size = function(){

            let item = this.slot.item
            
    

            this.display_size_x=(get_property(item,"hand_size")*this.size_x)*this.item_size_mult
            this.display_size_y=(get_property(item,"hand_size")*this.size_y)*this.item_size_mult
            
            // console.log(this.size_x,this.size_y)

        



        // console.log("DRAW")
     

        // if(this.parent){

        //     screen.translate(this.parent.x,this.parent.y)
        // }
        
         

        // if(this.inventory_parent){
            
                

            

            this.image=get_property(item,"image")


            
            
            if(this.image==undefined){
                this.image=this.default_image
            }

          

            // if(this.align=="center"){
            //     screen.translate((this.size_x*-.5),(this.size_y*-.5)  )
            // }
            

            

            let image = this.image

            let y_raio=1
            let x_raio=1



            if(typeof this.image.cell_width!="undefined"){
                image = this.image.image
            }
            else{
                if(typeof image.length!="undefined"){
                    y_raio=image[0].height/image[0].width
                }
                else{
                    y_raio=image.height/image.width
                    if(y_raio>1){
                        y_raio=1
                        x_raio=image.width/image.height

                    }
                }            
            }
            
            let size_x=(this.display_size_x*x_raio)
            let size_y=(this.display_size_y*y_raio)   

            return [size_x , size_y]
        }


        this.draw = function(draw_screen){
            
            
    
            let [size_x,size_y] = this.calculate_size()
            // console.log(size_x)
            // console.log(this.item.item)
            // if(this.item.item.offset_x){
            //     console.log((this.item.item(this.item.item.offset_x/16))
            // }


  
            if(typeof this.image.length!="undefined"){
                for(let i=0;i<this.image.length;i++){
                    let image = this.image[i]

                    let x = this.x
                    let y = this.y

                    if(this.slot.item.image_offsets && this.slot.item.image_offsets[i]){
                        x += (this.slot.item.image_offsets[i][0]*0.0625)*size_x
                        y += (this.slot.item.image_offsets[i][1]*0.0625)*size_y
                    }

                    
                    Item_display.draw_display_item(
                        image,
    
                        Math.round(x+((this.size_x/2)-((size_x)/2))),
                        Math.round(y+((this.size_y/2)-((size_y)/2))),
                        
                        size_x,size_y,
                        
                        this.render_box,
                        this.x,
                        this.y,
                        this.size_x,
                        this.size_y,
                        
                        this.slot.item.count,
                        draw_screen
                    )
                }                
            }
            else{
          
                Item_display.draw_display_item(
                    this.image,

                    this.x+((this.size_x/2)-((size_x)/2)),
                    this.y+((this.size_y/2)-((size_y)/2)),
                    
                    size_x,size_y,
                    
                    this.render_box,
                    this.x,
                    this.y,
                    this.size_x,
                    this.size_y,
                    
                    this.slot.item.count,
                    draw_screen
                )
            }


                    
                          
        


    
            
        }


    
        // this.update = super.update
        






        this.find_pos()
        if(this.slot){
            this.calculate_size()
        }
        



    }


    static draw_display_item(image,x,y,size_x,size_y,render_box,slote_x,slote_y,slote_size_x,slote_size_y,count,draw_screen=screen){
        draw_image(image,0,0,undefined,undefined,parseInt(x),parseInt(y),size_x,size_y,render_box,draw_screen);



                
    
        draw_screen.fillStyle = "rgb(20, 150, 150)";

        draw_screen.textAlign = "right";
        draw_screen.textBaseline="alphabetic"
        // screen.font = "bold "+this.display_size_y/1.7+"px serif";
        // console.log(this.display_size_y/1.7)
        draw_screen.font = "bold "+(50)+"px serif";


    
            if(count>1){
                
                draw_screen.fillText(count, slote_x+((slote_size_x*.9)),slote_y+((slote_size_y*.9)));

            }

    }




}

class inventory_slot_ui extends Item_display{
    constructor(info){
        info.size_x=slot_size
        info.size_y=slot_size
        info.size=1

        
    

        super(info)

        this.Item_display_draw = this.draw

        this.draw = function(draw_screen = screen){

            

            // if(player.inventory_hand==this.inventory_parent){
            //     console.log(this.inventory_parent)
            // }
            if(this.type=="bar_slot" && this.slot_index.index==this.selected_index){
                
                draw_image(images.selected_slot,0,0,undefined,undefined,this.x,this.y,this.size_x,this.size_y,this.render_box,draw_screen)
            }
            else{
                draw_image(this.default_image,0,0,undefined,undefined,this.x,this.y,this.size_x,this.size_y,this.render_box,draw_screen);
            }

     
            this.Item_display_draw(draw_screen)

           
        }

        // alert(super.hover_func)




        if(info.type){
            this.type=info.type
            
            if(this.type!="hand"){
                this.default_image=images.inventory_slot
                // this.align="center"
                
                if(this.type=="bar_slot"){
                    // alert(info.column_index)
                    this.selected_index=info.column_index
                    
                }

                if(this.type=="infinite_output"){

                    
                }
            }
            else{
                // alert("g")
                this.default_image=images.blank
                // this.item_size_mult=1.2

                this.align="center_size"
                this.active=true


            }
            
        }

        if(info.slot_index){
            this.slot_index=info.slot_index
        }


        this.inventory_parent=info.inventory_parent
        if(info.index!=undefined){
            this.index=info.index
        }
// this.draw=function(){
//     console.log('h')
// }

        if(typeof this.inventory_parent.length=="undefined"){
            this.slot = this.inventory_parent
        }
        else{
            this.slot = this.inventory_parent[this.index]
        }


        // console.log(this.item.count)
       




    }




}


// alert("R")
class group{
    constructor(info={}){

        if(info.elements){
            this.elements=info.elements
        }
        else{
            this.elements=[]

        }

        // this.find_pos()

    }
    draw(){
     
    }
    update(){
      
    }


}






class text_object{
    constructor(info){

        this.text=info.text!=undefined ? info.text : undefined
        this.color=info.color!=undefined ? info.color : undefined
        this.align=info.align!=undefined ? info.align : undefined
        this.font=info.font!=undefined ? info.font : "Tahoma"  
        this.base_line = info.base_line ? info.base_line : "bottom"

        this.x = info.x!=undefined ? info.x : 0
        this.y = info.y!=undefined ? info.y : 0


        this.size = info.size ? info.size : undefined

        this.parent = typeof info.parent!="undefined" ? info.parent : undefined

        

    }
    draw(x,y){

        if(x!=undefined){
            this.x=x
        }
        if(y!=undefined){
            this.y=y
        }

        if(typeof this.parent!="undefined"){
            this.text=this.parent.text
        }
        if(typeof this.parent!="undefined"){
            this.size=this.parent.size
        }

        screen.fillStyle = this.color
        screen.font = this.size+"px "+this.font

        screen.textAlign = this.align
        screen.textBaseline = this.base_line


        if(typeof this.text=="string"){

            screen.fillStyle = "rgb("+this.color+")"

            screen.fillText(this.text, this.x, this.y);


            
        }
        else{
            // console.log("f")

            for(let i=0;i<this.text.length;i++){
                // console.log("T")
                if(typeof this.text[i]=="string"){
                    screen.fillStyle = "rgb("+this.text[i].color+")"

                    screen.fillText(this.text[i], this.x, this.y+((this.size*.8)*i)-(((this.text.length-1)*(this.size*.8))*.5));

                }
                else{
                    screen.fillStyle = "rgb("+this.text[i].color+")"

                    screen.fillText(this.text[i].name, this.x, this.y+((this.size*.8)*i)-(((this.text.length-1)*(this.size*.8))*.5));

                    

                }


            }
        }

    }
    has_text(){
        let val=false
        if(typeof this.parent!="undefined"){
            this.text=this.parent.text
            // console.log( this.text)
        }
        

        if(typeof this.text=="string"){
            // console.log(this.text!="")
            if(this.text!=""){
                val = true
            }
           
        }
        else{
            if(this.text.length!=0){
                val = true
            }
        }
        return val
    }


    measureText(text=""){

        if(typeof this.parent!="undefined"){
            this.text=this.parent.text
        }
        if(typeof this.parent!="undefined"){
            this.size=this.parent.size
        }

        screen.fillStyle = this.color
        screen.font = this.size+"px "+this.font

        screen.textAlign = this.align
        screen.textBaseline = this.base_line

        return {
            "width":screen.measureText(text!="" ? text : this.text).width,
            "hight":this.size/2
        }
    }
}


function reset_slidder(){
    
    


    if(typeof accended_tabs_ui!="undefined"){
        accended_tabs_ui.organize()
        

        accended_inventory_slidder.point_height=Math.ceil(accended_tabs_ui.elements.length/3)>=3 ? (((accended_inventory_elements.px*52)  /(((slot_size+accended_inventory_elements.px)*(Math.ceil(accended_tabs_ui.elements.length/3)))))*(accended_inventory_elements.px*52)) : (accended_inventory_elements.px*52)
     
    }
}



class text extends element_base{
    constructor(info){
        super(info)



        // ADD A ONLY NUMBER AND NO SPACE TRAIT OF THE LOAD STRUCTERS INPUTS


        this.text_type=info.text_type!=undefined ? info.text_type : "all"

   

        //Text
        this.text=info.text!=undefined ? info.text : ""

        let new_info=copy(info)
        new_info.parent=this
        new_info.align="left"
        new_info.base_line="top"

 

        this.text_object=new text_object(new_info)
        this.selected_effects = info.selected_effects ? info.selected_effects : undefined




        

        
        
        this.text_y_offset = info.text_y_offset ? info.text_y_offset : undefined


        this.align = info.align!=undefined ? info.align : undefined
        this.base_line=info.base_line ? info.base_line : "bottom"
        
        this.size=info.size!=undefined ? info.size : undefined

        //Border
        this.border_image = info.border_image!=undefined ? info.border_image : undefined
        this.border_size_multiplier = info.border_size_multiplier!=undefined && info.border_image!=undefined ? info.border_size_multiplier : 1
        this.border_size_height = info.border_size_height!=undefined? info.border_size_height : undefined
        this.border_align = info.border_align!=undefined ? info.border_align : undefined

        this.width = info.width!=undefined ? info.width : undefined
        this.border_x_offset=info.border_x_offset!=undefined && info.border_image!=undefined ? info.border_x_offset : 0


        //Relationships
        this.link_partner_text = info.link_partner_text!=undefined ? info.link_partner_text : undefined
        this.partner = info.partner!=undefined ? info.partner : {}

        //
        

        this.selected_effects_time = this.selected_effects!=undefined ? 0 : undefined

        this.selected_effects_length = (info.selected_effects_length!=undefined && this.selected_effects!=undefined) ? info.selected_effects_length : undefined


        //Functions
        this.on_clicked=info.on_clicked!=undefined ? info.on_clicked : undefined

        this.after_addletter = info.after_addletter ? info.after_addletter : undefined
        this.on_input_text_funtion = info.on_input_text_funtion!=undefined ? info.on_input_text_funtion : undefined

        // console.log(info.on_input_text_funtion)

        this.on_unselected = info.on_unselected ? info.on_unselected : undefined
        this.on_entered = info.on_entered ? info.on_entered : undefined


        this.after_update_func=info.after_update_func!=undefined ? info.after_update_func : undefined
        
          
        
        
        
        this.reactivate=info.reactivate!=undefined ? info.reactivate : undefined
        this.reactivate_disabled=info.reactivate_disabled!=undefined ? info.reactivate_disabled : undefined



        


  
        
        //Input Text and Text button
        this.can_input_text = info.can_input_text!=undefined ? info.can_input_text : undefined
        this.input_index=this.can_input_text!=undefined ? 0 : undefined

        if(info.make_text_button){
            

            this.text_button=new button({

                "align":this.align ? this.align!=undefined : undefined,
                "partner":{"text":this},
                "on_clicked":function(){
                    if(this.partner.text.on_clicked){
                        this.partner.text.on_clicked()
                    }
                },
                // "color":"255,10,10",
                "update_func":function(){

                    // console.log(this.partner.text.text)

                    if(!this.old_last_button_clicked && this.last_button_clicked){
                        if(this.partner.text.can_input_text){

                            this.partner.text.partner.text_controller.input_index=this.partner.text.text.length
                            
                        }
                    }

                    this.old_last_button_clicked = this.last_button_clicked
                    if(this.last_button_clicked){

                        if(this.partner.text.can_input_text){

                            this.partner.text.text_input=true

                        }
                        
                    }
                    else{
        
                        // console.log("e")

                        // this.partner.search_selector.show=false
                        if(this.partner.text.can_input_text){
                            // if(this.partner.text.text_input){
                            //     alert("Falso")
                            // }
                            
                            this.partner.text.text_input=false
                        }
        
        
                    }
        
        
                    
                }
                
            })

 
            
            this.partner["button"]=this.text_button


        }


        
        


        if(info.image_bar){
            this.image_bar=info.image_bar

            this.image_bar_timer=1000
            this.image_bar_last_time=0
        }




        this.hit_box = info.hit_box ? info.hit_box : undefined
        
    }
    calculate_text_width(){
        let text_width = 0
        // let text_lines=0

        if(typeof this.text=="string"){
            text_width = this.text_object.measureText().width
        }
        else{
            this.text.forEach(line => {
                // text_lines++
                if(this.text_object.measureText(typeof line.name!="undefined" ? line.name : line).width>text_width){
                    
                    text_width=this.text_object.measureText(typeof line.name!="undefined" ? line.name : line).width
                }
            })
        }

        return text_width

    }
    calculate_text_pos(text_width=undefined){

        if(text_width==undefined){
            text_width=this.calculate_text_width()
        }
        let text_x=this.x
        let text_y=this.y    


        //Centers border x
        if(this.align=="center"){
            text_x-=text_width/2

        }

        //Centers border y
        if(this.base_line=="middle"){
            text_y-=this.size/2
        }
        if(this.base_line=="bottom"){
            text_y-=this.size
        }
        
        
        return [text_x,text_y]
    }

    calculate(){
        let text_width=this.calculate_text_width()
        let [text_x,text_y] = this.calculate_text_pos(text_width)
        //Gets text width
        
        


        







        
        

        
        let border_size_x=0
        let border_size_y=0


        //Gets border x size
        border_size_x = text_width+(this.border_x_offset)
        if(this.width!=undefined){
            border_size_x=this.width
        }
        


        
        
        //Gets border y size
        border_size_y=0



        if(this.border_size_height!=undefined){
            border_size_y=this.border_size_height
        }

        else{
            border_size_y=((this.text_object.size)*(this.border_size_multiplier))+(this.text_object.size* ((typeof this.text!="string") ? this.text.length-1 : 0))
        }
        

        // let border_size_multiplier=this.border_size_multiplier
        // if(border_size_multiplier!=undefined){
        //     border_size_y*=border_size_multiplier
        // }
        


        

        // if(typeof this.text!="string"){
        //     text_y-=border_size_y/2
        // }
        

        let border_x=this.x
        let border_y=this.y

        //Centers border x
        if(this.border_align=="center"){
            border_x-=(border_size_x/2)
        }

        //Centers border y
        if(this.base_line=="middle"){
            // border_y+=this.size/2
            border_y+=(border_size_y/2)
        }
        if(this.base_line=="top"){
            border_y+=((this.size+border_size_y)/2)
        }
        if(this.base_line=="bottom"){
            border_y+=this.size
        }
        
        border_y+=(this.text_y_offset ? this.text_y_offset : 0)-(border_size_y)
        


        // console.log(text_x,text_y,border_x,border_y,border_size_x,border_size_y)
        return [text_x,text_y,border_x,border_y,border_size_x,border_size_y]
    }
    draw(){
        if(this.partner && this.partner.text_controller && (this.link_partner_text==undefined || this.link_partner_text)){
             
            if(this.partner.text_controller.text){
                this.text=this.partner.text_controller.text
            }
            if(this.partner.text_controller.input_index!=undefined){
                this.input_index=this.partner.text_controller.input_index
            }            
            
        }

        let [text_x,text_y,border_x,border_y,border_size_x,border_size_y] = this.calculate()




        



        if(this.width!=undefined){
            // border_size_x=this.width
            // this.x+=this.size_x/2
        }
        





        if(this.text_button){
        
            this.text_button.draw()

        }





        if(this.border_image && this.text_object.has_text()){
            let x = border_x

            if(border_size_x<border_size_y*(this.border_image.cap_size_x_px/this.border_image.image.height)*2 && this.border_align=="center"){
                x-=((border_size_y*(this.border_image.cap_size_x_px/this.border_image.image.height)*2)-border_size_x)/2
            }
            this.border_image.draw(x,border_y,border_size_x,border_size_y)

        }
    

     
        
        screen.save()

        

        //Add render effects
        if(this.selected_effects!=undefined){
            
                let intencity = ((this.selected_effects_time-engin.time_in_loop)/this.selected_effects_length)



                if(intencity>1){
                    intencity=1
                }





                if(this.text_input){
                    this.selected_effects.forEach(effect => {

                        screen.filter = effect[0]+"("+(  ( effect[3] ? effect[3] : 0 )+Math.abs(effect[1]*(intencity-.5)))+effect[2]+")"

                    })   
                }

                if(this.selected_effects_time<engin.time_in_loop){
                
                    this.selected_effects_time=(engin.time_in_loop-(engin.time_in_loop-this.selected_effects_time))+this.selected_effects_length
                }
                
        }

        if(this.align=="center"){   
            let old_align=this.text_object.align


            this.text_object.align="center"
            this.text_object.draw(text_x+(this.calculate_text_width()/2), text_y)


            this.text_object.align=old_align



        }
        else{
            this.text_object.draw(text_x, text_y)
        }

        

        screen.restore()
            



        if(this.image_bar && this.text_input && this.image_bar_last_time<=engin.current_time+(this.image_bar_timer/2)){
            let new_text=""
            if(this.input_index!=undefined){
                for(let i=0;i<this.input_index;i++){
                    new_text+=this.text[i]
                    

                }               
            }

            screen.drawImage(
                this.image_bar,

                0,0,this.image_bar.width,this.image_bar.height,
                
                text_x + ((new_text=="" ? 0 : this.text_object.measureText(new_text).width)),
                text_y,

                // this.size/4,
                5,
                this.size
            )
    
        }




    }
    update(){
        if(this.partner && this.partner.text_controller && (this.link_partner_text==undefined || this.link_partner_text)){
             
            if(this.partner.text_controller.text){
                this.text=this.partner.text_controller.text
            }
            if(this.partner.text_controller.input_index!=undefined){
                this.input_index=this.partner.text_controller.input_index
            }            
            
        }

        let [text_x,text_y,border_x,border_y,border_size_x,border_size_y] = this.calculate()




        if(this.text_button){


            this.text_button.size_x=border_size_x
            this.text_button.size_y=border_size_y
            
            this.text_button.x = border_x
            this.text_button.y = border_y


            this.text_button.update()


        }
        

        if(this.image_bar && this.text_input && this.image_bar_last_time<=engin.current_time){
            this.image_bar_last_time=engin.current_time+(this.image_bar_timer)
        }




        



        if(this.after_update_func){
            this.after_update_func()
        }
        
        
    }
    addletter(letter){
        let add_to_object=this

        let text_controller=this.partner.text_controller
        if(this.partner.text_controller){
            add_to_object=text_controller
        }



        if(letter!="Shift" && letter!="Tab" && letter!="Backspace" && letter!="Enter" && letter!="Control" && letter!="CapsLock" && letter!="Escape" && !KeysDown["Control"] && letter!="ArrowLeft" && letter!="ArrowRight"){
            let add_text=false

            

            if((this.text_type=="all")){
                add_text=true
            }
            else if(this.text_type=="no_spaces" && letter!=" "){
                add_text=true
            }
            else if(this.text_type=="number" || this.text_type=="positive_number"){
                console.log(letter)
                if(letter=="-" && add_to_object.text=="" && this.text_type!="positive_number"){
                    add_text=true
                }
                else{
                    try{

                            let parsed_letter=JSON.parse(letter)
    
                            if(typeof parsed_letter=="number"){
                                add_text=true
                            }                        
                        
    
                    }
                    catch{
                        
                    }

                }


            }
    
            if(add_text){
                
                let text=add_to_object.text
                add_to_object.text=""

                if(text==undefined){
                    text=""
                }

                for(let i=0;i<add_to_object.input_index;i++){
                        // console.log(text)
                        if(text[i]!=undefined){
                            add_to_object.text+=text[i]
                        }

                }
                add_to_object.text+=letter

                for(let i=add_to_object.input_index;i<text.length;i++){
                    if(text[i]!=undefined){
                        add_to_object.text+=text[i]
                    }
                }

                
                // this.text=new_text

                add_to_object.input_index++
            }
            




        }

        if(letter=="Backspace"){
            // "rffrf".slice(1)

        // this.text=this.text.slice(0,this.text.length-1)


        let text=add_to_object.text
        add_to_object.text=""

            for(let i=0;i<add_to_object.input_index-1;i++){


                if(text[i]!=undefined){
                    add_to_object.text+=text[i]
                }

            }
            

            for(let i=add_to_object.input_index;i<text.length;i++){
                // alert("t")
                if(text[i]!=undefined){
                    add_to_object.text+=text[i]
                }
                


            }





            
            add_to_object.input_index--


        }


        if(letter=="ArrowLeft"){
            add_to_object.input_index--
            
        }

        if(letter=="ArrowRight"){
            add_to_object.input_index++
        }

        if((letter=="v" || letter=="V") && KeysDown["Control"]){
            getTextFromClipboard(
                function(text,other){
 
                    other[0].text+=text


                    if(other[0].after_addletter){
                        other[0].after_addletter()
                    // alert("I")

                    }
                    
                },
                [add_to_object]
            )



            add_to_object.input_index=add_to_object.text.length-1
            // navigator.clipboard.reAUText()
            // const permission = await navigator.permissions.query({
            //     name: "clipboard-read",
            // })

            // // f=navigator.clipboard.reAUText()


        }

        if(letter=="Backspace" && KeysDown["Control"]){
            let start=0
            let text_started=false

            for(let i=add_to_object.text.length;i>=0;i--){
                if(add_to_object.text[i]!=" " && add_to_object.text[i-1]==" "){
                        start=i
                        i=-1     
                    // text_started=true
                }
                // else{
                //     if(text_started){
                   
                //     }

                // }

            }

            add_to_object.text=add_to_object.text.slice(0,start)

            add_to_object.input_index=add_to_object.text.length-1
            
        }


        if(letter=="Enter"){

            // "rffrf".slice(1)
            // console.log(this.partner.button)

            add_to_object.text_input=false
            this.text_button.last_button_clicked=false

            // console.log(this)
            if(this.on_entered){
                this.on_entered()
            }

            // console.log(this.text)
        }


        if(this.on_input_text_funtion!=undefined){

            this.on_input_text_funtion(this)

        }

        // this.find_pos()


        if(add_to_object.input_index<0){
            add_to_object.input_index=0
        }


        // console.log(add_to_object.text)
        if(add_to_object.text!=undefined && add_to_object.input_index>add_to_object.text.length){
            add_to_object.input_index=add_to_object.text.length
        }

        add_to_object.after_addletter ? add_to_object.after_addletter() : function(){}()

        // letter!="Enter"




        
    }
  
}


class text_controller extends align{
    constructor(info){
        let traits=info.shared_traits!=undefined ? info.shared_traits : []


        for(let trait in traits){

            info.text_class[trait]=traits[trait]
            info.default_text_class[trait]=traits[trait]

            // console.log(trait=="on_input_text_funtion")

        }

        info.elements=[
            new text( info.text_class!=undefined ? info.text_class : undefined ),
            new text( info.default_text_class!=undefined ? info.default_text_class : undefined )
        ]
        
        super(info)

        this.elements[0].reactivate_disabled=true


        if(this.elements[0]!=undefined){
            this.elements[0].partner={"text_controller":this}
        }
        
        if(this.elements[1]!=undefined){
            this.elements[1].link_partner_text=false
            this.elements[1].partner={"text_controller":this}
        }
      

        

        this.text=info.text!=undefined ? info.text : undefined
        if(this.text!=undefined){


            this.input_index=this.text.length
        }

        // this.on_input_text_funtion = info.on_input_text_funtion!=undefined ? info.on_input_text_funtion : undefined

        

    }
    update(){

        if(this.text!=undefined){
            if(this.text==""){
                if(this.elements[1]!=undefined){
                    if(this.elements[0].active && this.elements[0].text_button.last_button_clicked){
                        // console.log(this.elements[1].active)
                        // this.elements[1].active=false
                        this.elements[1].text_button.last_button_clicked=true
                        this.elements[0].text_button.last_button_clicked=false

                    }
                    this.elements[1].active=true
                }            

                if(this.elements[0]!=undefined){
                    this.elements[0].active=false
                }
                

            
            }
            else{

                if(this.elements[0]!=undefined){

                    if(this.elements[1].active && this.elements[1].text_button.last_button_clicked){

                        this.elements[0].text_button.last_button_clicked=true
                        this.elements[1].text_button.last_button_clicked=false

                    }
                    this.elements[0].active=true
                }
                if(this.elements[1]!=undefined){
                    this.elements[1].active=false
                }                


            }            
        }

        // console.log("TESTTSTTSSTTS")
    }
}


// class text_input{
//     constructor(info){
//         if(info.color){
//             this.color=info.color
//         }
        
//         if(info.align){
//             this.align=info.align
//         }

//         if(info.text || info.text==""){
//             this.text_input=info.text

//         }

        

//         if(info.elements){
//             this.elements=info.elements
//         }

//         if(info.x!=undefined){
//             this.x=info.x
//         }

//         if(info.y!=undefined){
//             this.y=info.y
//         }


//         if(info.func){
//             this.func=info.func
//         }

//         if(info.on_entered_function){
//             this.on_entered_function=info.on_entered_function
//         }


        
//         this.border_image_margin=15
        
        
//         if(info.size){
//             this.size=info.size
//         }
//         if(info.border_image){
//             this.border_image=info.border_image
        
//         }
        
//         // this.find_pos()

        
    
//     }
//     draw(){
//         screen.fillStyle = this.color ;
        
//         screen.textAlign = this.align;
//         screen.font = this.size+"px serif";
//         let offset=0
//         if(this.align=="center" ||this.align=="left" ){
            
//             offset=(this.size/2.5)
//         }
//         // gray_box_outline

//         if(this.border_image){
//             screen.drawImage(this.border_image,0,0,this.border_image.width,this.border_image.height,this.x-(this.text_object.measureText().width/2)-this.border_image_margin,this.y-(this.size/2)-this.border_image_margin,(this.text_object.measureText().width)+(this.border_image_margin*2),this.size+(this.border_image_margin*2));

//         }
        
        

//         screen.fillText(this.text_input, this.x, this.y+offset);
//         // console.log(this.text_input+this.x+"  "+this.y+offset)
        

//     }
//     update(){
//         if(this.func){
//             this.func()
//         }
        
//     }
//     enter(){
//         if(this.on_entered_function){

//             this.on_entered_function()
//         }
//     }
  
// }

class slidder{
    constructor(start_pos,end_pos,len=1,stretch_image_rectangle,exta={}){
        this.start_pos=start_pos
        this.end_pos=end_pos
        this.slider_width=typeof accended_inventory_elements!="undefined" ? accended_inventory_elements.px*3 : exta.lineWidth


        this.stretch_image_rectangle=stretch_image_rectangle!=undefined ? stretch_image_rectangle : undefined

        // this.clicked_y=0

        this.point_len=len
        this.point_pos=[start_pos[0],start_pos[1]]
        this.down=false

        if(typeof accended_inventory_elements!="undefined"){
            
            this.point_height=(((accended_inventory_elements.px*52)  /(((slot_size+accended_inventory_elements.px)*(Math.ceil(accended_tabs_ui.elements.length/3)))))*(accended_inventory_elements.px*52))
        }
        this.point_height=typeof this.point_height!="undefined" ?  this.point_height : exta.point_height

        this.line_width = typeof exta.line_width!="undefined" ?  exta.line_width : 0

        

        this.point_size = typeof exta.point_size!="undefined" ? exta.point_size : undefined

        // console.log(this.point_height)

        // this.find_pos()


    }
    draw(){
        // console.log("WHY")
        
        if(this.line_width){
            screen.strokeStyle = 'dark_gray'
            screen.lineWidth = this.line_width
            
            screen.beginPath()
            screen.moveTo(this.start_pos[0], this.start_pos[1])
            screen.lineTo(this.end_pos[0], this.end_pos[1]-(this.point_height!=undefined ? this.point_height : 0))
            screen.stroke()
        }


        screen.fillStyle = 'rgb(220,220,220)';






        if(this.point_height){
            screen.fillRect(this.point_pos[0]-10,this.point_pos[1],this.point_size,this.point_height)

            if(this.stretch_image_rectangle){
                vertical_stretch_image_rectangle(this.stretch_image_rectangle,6,this.point_pos[0]-(this.slider_width/2),this.point_pos[1],this.slider_width,this.point_height)
                // console.log("T")
            }
            
            
        }
        else{
            screen.beginPath();
            screen.arc(this.point_pos[0],this.point_pos[1], 25, 0, 2 * Math.PI);
            screen.fill();         
        }
   
    }
    update(){
        if(mouse_down){


            let hit_box_size_x=( (typeof this.slider_width!="undefined" ? this.slider_width : this.point_size*2)     )
            let hit_box_size_y=( (typeof this.point_height!="undefined" ? this.point_height : (this.point_size*2))     )


            let hit_box_x=this.point_pos[0]+( (typeof this.slider_width!="undefined" ? this.slider_width/2 : this.point_size)     )
          
            let hit_box_y=this.point_pos[1]+( (typeof this.point_height!="undefined" ? this.point_height*1 : this.point_size)     )

            if(mouse_x<=hit_box_x){
                

                if(mouse_x>=this.point_pos[0]-(hit_box_size_x/2)){

   
                    if(mouse_y<=hit_box_y){

                     
                        if(mouse_y>=this.point_pos[1]-(hit_box_size_y/2)){

                            if(!this.down){
                                mouse_down = false
           
                                this.down=true
                                this.clicked_y=mouse_y-this.point_pos[1]
                            }


                        }
                    }
                }
            }
            
        }
        if(mouse_released){
            this.down=false
      

        }

        if(this.down){
            this.point_len=(((mouse_x-this.start_pos[0])/(this.end_pos[0]-this.start_pos[0])))

            if(this.point_len<0 || this.point_len==-Infinity || this.point_len==Infinity){
                this.point_len=0
            }

            else if(this.point_len>1){
                this.point_len=1
            }

            
            
            
            

            let y_point_len=((((mouse_y-this.clicked_y)-this.start_pos[1])/((this.end_pos[1]-(this.point_height!=undefined ? this.point_height : 0))-this.start_pos[1])))
            
            
        
            if(y_point_len<0 || y_point_len==-Infinity || y_point_len==Infinity){
                y_point_len=0
            }

            else if(y_point_len>1){
                y_point_len=1
            }

            if(isNaN(y_point_len)){
                y_point_len=0
            }



            this.point_len+=y_point_len
            

            if(isNaN(this.point_len))

            if(this.point_len>1){
                this.point_len=1
            }
            if(this.point_len<0 || isNaN(this.point_len)){
                this.point_len=0
            }

            

            // console.log(this.point_len)

        }
        this.point_pos=[
            this.start_pos[0]+((this.end_pos[0]-this.start_pos[0])*this.point_len),
            this.start_pos[1]+(((this.end_pos[1]-(this.point_height!=undefined ? this.point_height : 0))-this.start_pos[1])*this.point_len)
        ]



    }
  
}

function draw_ui_elements(){
    // let layer_found=false
            
    // engin.layers.forEach(element => {
    //     if(element.elements || element.draw){
            
        
    //         engin.selected_layers.forEach(selected_layer => {
    //         if(element.name==selected_layer){
    //             layer_found=true

    //             if(element.draw){
    //                 element.draw()
    //                 console.log("DRAW")
    //             }

    //             if(element.elements){
    //                 element.elements.forEach(selected_layer => {
    //                     selected_layer.draw()    
    //                 });
    //             }
                


    //         }
    //     });
    //     }
    // });


    // if(!layer_found){
    //     engin.layers.forEach(layer => {
    

    //         if(layer.elements || layer.draw){
            




            
    //         // selected_layers.forEach(element_2 => {
    //             if(layer.name=="default"){
    //                 // element.function()
    //                 // console.log("G")
    //                 layer.elements.forEach(element_2 => {
    //                     element_2.draw()
                            
                            
    //                 });

    //             }
    //         // });
    //         }
    //     });
    // }
}

function update_ui_elements(){
    // let layer_found=false
            
    // engin.layers.forEach(layer => {
    //     if(layer.elements || layer.update){
            
        
    //         engin.selected_layers.forEach(selected_layer => {
    //         if(layer.name==selected_layer){
    //             layer_found=true

    //             if(layer.update){
    //                 layer.update()
                   
    //             }

    //             if(layer.elements){
    //                 layer.elements.forEach(selected_layer => {
    //                     // console.log(selected_layer)
    //                     selected_layer.update()    
    //                 });
    //             }
                


    //         }
    //     });
    //     }
    // });


    // if(!layer_found){
    //     engin.layers.forEach(layer => {
    

    //         if(layer.elements || layer.update){
            




            
    //         // selected_layers.forEach(element_2 => {
    //             if(layer.name=="default"){
    //                 // element.function()
    //                 // console.log("G")
    //                 layer.elements.forEach(element_2 => {
    //                     element_2.update()
                            
                            
    //                 });

    //             }
    //         // });
    //         }
    //     });
    // }
}

