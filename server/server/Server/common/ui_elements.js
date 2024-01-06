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
    navigator.clipboard.readText()
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





class align {
    constructor(info){
        // super()

                if(info.partner){
            this.partner=info.partner
        }
        this.allin=info.allin

        if(info.child){
            this.child=info.child
        }
        if(info.parent){
            this.parent=info.parent
        }



        this.x=info.x
        this.y=info.y   

        this.orgin_x=0
        this.orgin_y=0
        if(info.x){
            this.orgin_x=info.x
            this.orgin_y=info.y            
        }

        
        
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
            // if(!this.is_child){
                if(parent){
                    this.x=this.orgin_x+parent.x
                    this.y=this.orgin_y+parent.y   
                    if(parent.allin){
                        this.allin=parent.allin
                    }
                }
                
                else if(this.parent){
                    this.x=this.orgin_x+this.parent.x
                    this.y=this.orgin_y+this.parent.y

                }
                else{
                    this.x=this.orgin_x
                    this.y=this.orgin_y        
                }

                if(this.allin=="center"){
                    this.x=this.x-(this.display_size_x/2)
                    this.y=this.y-(this.display_size_y/2)
                }
                else if(this.allin=="center_size"){
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
        if(info.allin=="center"){
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


        // if(info.on_clicked){
        this.on_clicked = info.on_clicked != undefined ? info.on_clicked : undefined
        // }

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
        // alert("r"+mouse_down)

        let hover=false
        if(this.size_y<0){
            this.y+=this.size_y
            this.size_y*=-1
        }
        if(this.size_x<0){
            this.x+=this.size_x
            this.size_x*=-1
        }

        

        // let clicked_in_box=false
        
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
                    // alert("r"+mouse_down)
                    // this.image=grass_image
                    // console.log("R")
                    this.on_clicked() 
                    // let click_sound=new Audio("sounds/click.mp3")
                    // click_sound.volume=1

                    // click_sound.play()

                    
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
    }
    // draw(){
    //     // alert("DRAW")
    //     if(this.image){
            
    //         screen.save()

    //             // screen.filter="brightness("+(1.2)+")"
    //             if(this.blur_percent){
    //                 screen.filter="blur("+(9*this.blur_percent)+"px)"
    //             }

                

    //             screen.drawImage(this.image,0,0,this.image.width,this.image.height,this.x,this.y,this.size_x,this.size_y);
    //             screen.restore()

    //         // }
            


    //         screen.save()
    //         // this.hover=true
    //         if(this.hover){
    //             screen.filter="brightness("+this.hover_brightness+")"
    //         }
            
    //         screen.drawImage(this.image,0,0,this.image.width,this.image.height,this.x,this.y,this.size_x,this.size_y);
    //         screen.restore()

    //     }
    //     else{

    //     // alert("DRAW"+this.x+"  "+this.y+" "+this.size_x+"  "+this.size_y)
    //         screen.fillStyle = "rgb("+this.color+")" ;
    //         screen.fillRect(this.x,this.y,this.size_x,this.size_y); 
    //     }

    // }
    hover_event(){
        if(this.hover){
            this.hover_func()
        }
    }

}



function copy(variable){
    return Object.assign({}, variable)
}


class inventory_group{
    constructor(info){

        
        this.columns=info.columns
        

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
     
    
                MakeInventoryRow(this.elements,this.inventory_image,this.start_off_set_x,this.start_off_set_y+(rows*this.margin_y),number,this.margin,16,this.elements.length,"infinite_output",{"inventory":this.inventory_parent})            
                rows++
            }            
        }

        this.organize()

        // this.update=function(){

            
            // this.organize()



            

            
        // }
        // this.update()


        

        // console.log("2UP")

  
        //Rows and or Collums 

        //margin(X and y) 
        
        //Inventory parent 

    }
}


class inventory_slot_ui extends button{
    constructor(info){
        info.size_x=slot_size
        info.size_y=slot_size
        info.size=1

        // info.hover_func=function(){
        //     console.log("Hover") //rgrgegrgegr

        //     screen.fillStyle = "rgb(0,0,0)";
        //     screen.textAlign = "center";
        //     screen.font = "40px Tahoma";

            
    
    
        //     screen.fillText("efef", mouse_x, mouse_y);
        // }

        
        
    

        super(info)






        // this.parent=info.parent

        this.item_size_mult=1


        this.allin=info.allin

        if(info.type){
            this.type=info.type
            
            if(this.type!="hand"){
                this.default_image=inventory_slot_image
                // this.allin="center"
                
                if(this.type=="bar_slot"){
                    // alert(info.column_index)
                    this.selected_index=info.column_index
                    
                }

                if(this.type=="infinite_output"){

                    
                }
            }
            else{
                this.default_image=blank_image
                this.item_size_mult=1.2

                this.allin="center_size"
                this.active=true


            }
            
        }

        if(info.slot_index){
            this.slot_index=info.slot_index
        }

        if(info.after_clicked){
            this.after_clicked=info.after_clicked
        }

        
        
        
  

        this.inventory_parent=info.inventory_parent
        if(info.index!=undefined){
            this.index=info.index
        }














        this.hover_func=function(){
            // console.log(this)
            
            if(this.inventory_parent[this.index].item.name!="blank"){
                item_name_display.active=true
            
                // console.log(this.type)
                if(this.inventory_parent[this.index].item.display_name && this.type!="bar_slot"){
                    item_name_display.text=this.inventory_parent[this.index].item.display_name
                }

                
                // console.log("P")
                
            }
            // console.log(this.type)
            if((this.inventory_parent[this.index].item.name=="blank" || !this.inventory_parent[this.index].item.display_name) || this.type=="bar_slot" || player.inventory_hand.item.name!="blank" ){
                    // item_name_display.text=this.inventory_parent[this.index].item.name
                    item_name_display.active=false

                }
            
        }



  
        

        if(this.inventory_parent[this.index]){

            this.display_size_x=(this.inventory_parent[this.index].item.hand_size*this.size_x)*this.item_size_mult
            this.display_size_y=(this.inventory_parent[this.index].item.hand_size*this.size_y)*this.item_size_mult

        }
        else{
            this.display_size_x=(this.inventory_parent.item.hand_size*this.size_x)*this.item_size_mult
            this.display_size_y=(this.inventory_parent.item.hand_size*this.size_y)*this.item_size_mult
        }
        // this.slot_index
        

        this.update=super.update
        this.draw=function(){
            // this.find_pos()


            // console.log("DRAW")
            screen.save()

            // if(this.parent){

            //     screen.translate(this.parent.x,this.parent.y)
            // }
            
             
    
            if(this.inventory_parent){
                
                    
                if(this.index!=undefined){

                    this.image=this.inventory_parent[this.index].item.image

                }
                else{

                    this.image=this.inventory_parent.item.image

                }
                
                if(this.image==undefined){
                    this.image=this.default_image
                }

                screen.save()

                // if(this.allin=="center"){
                //     screen.translate((this.size_x*-.5),(this.size_y*-.5)  )
                // }
                

                

                if(this.type=="bar_slot" && this.slot_index.index==this.selected_index){
                    // console.log(this.x,this.y)
                    screen.drawImage(selected_slot_image,0,0,this.default_image.width,this.default_image.height,this.x,this.y,this.size_x,this.size_y);

                }
                else{
                    screen.drawImage(this.default_image,0,0,this.default_image.width,this.default_image.height,this.x,this.y,this.size_x,this.size_y);
                }

                screen.drawImage(this.image,0,0,this.image.width,this.image.height,this.x+((this.size_x/2)-(this.display_size_x/2)),this.y+((this.size_y/2)-(this.display_size_y/2)),this.display_size_x,this.display_size_y);
                // console.log(this)


                        screen.fillStyle = "rgb(20, 150, 150)";
        
                screen.textAlign = "right";
                // console.log(this.display_size_y/2)
                screen.font = "bold "+this.display_size_y/1.7+"px serif";

                if(this.index!=undefined){
                    if(this.inventory_parent[this.index].count>1){
                        // console.log(this.inventory_parent[this.index].count)
                    
                        screen.fillText(this.inventory_parent[this.index].count, this.x+((this.size_x/2)+(this.display_size_x/1.6)),this.y+((this.size_y/2)+(this.display_size_y/2))+10);
                    }
                    
                }


                else{
                    if(this.inventory_parent.count>1){
                        // console.log(this.inventory_parent.count)
                        screen.fillText(this.inventory_parent.count, this.x+((this.size_x/2)+(this.display_size_x/1.6)),this.y+((this.size_y/2)+(this.display_size_y/2))+10);
                    }                    
                }        


    
                screen.restore()


             

            }
                    
            screen.restore()
            
        }


        this.on_clicked=function(){
            // this.find_pos()
    
            // alert("LLLL")
            if(this.type=="slot"){
                if(player.inventory_hand.item.name==this.inventory_parent[this.index].item.name && this.inventory_parent[this.index].item.name!="blank"){
                    // player.inventory_hand.item=get_block("blank")
                    // count+=
                    this.inventory_parent[this.index].give_count(player.inventory_hand.count,player.inventory_hand )
                    // player.inventory_hand.count=1
    
                    // set_count
    
                }
                else{
                    let old_player_inventory_hand=copy(player.inventory_hand)
                    let old_player_inventory_hand_count=player.inventory_hand.count
    
                    player.inventory_hand.item=copy(this.inventory_parent[this.index].item)
                    this.inventory_parent[this.index].item=old_player_inventory_hand.item
    
                    player.inventory_hand.count=this.inventory_parent[this.index].count
                    this.inventory_parent[this.index].count=old_player_inventory_hand.count                
                }
    
    
            }
    
            if(this.type=="infinite_output"){
                if(player.inventory_hand.item.name!="blank"){
                    player.inventory_hand.item=get_block("blank")
                    player.inventory_hand.set_count(0)
    
                    
    
                    // this.inventory_parent[this.index].count+=player.inventory_hand.count
                    // player.inventory_hand.count=1
    
                }
                else if(player.inventory_hand.item.name=="blank"){
                    // let old_player_inventory_hand=copy(player.inventory_hand)
                    // let old_player_inventory_hand_count=player.inventory_hand.count
    
                    player.inventory_hand.item=copy(this.inventory_parent[this.index].item)
                    // player.inventory_hand.count=64
                    player.inventory_hand.set_count(stack_size)
    
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


        this.find_pos()




    }
    set_item(item){
    

    }



    on_right_clicked(){

        if(this.type=="slot"){
            // if(this.inventory_parent[this.index].item.name=="blank" && player.inventory_hand.item.name!="blank"){
        
            //     this.inventory_parent[this.index].item=copy(player.inventory_hand.item)
            //     this.inventory_parent[this.index].set_count(Math.ceil(player.inventory_hand.count/2))
            //     player.inventory_hand.set_count(Math.floor(player.inventory_hand.count/2))

            // }

            if(this.inventory_parent[this.index].item.name!="blank"  && this.inventory_parent[this.index].item.name!=player.inventory_hand.item.name && player.inventory_hand.item.name=="blank"){
                // console.log(1)
                player.inventory_hand.item=copy(this.inventory_parent[this.index].item)
                player.inventory_hand.set_count(Math.ceil(this.inventory_parent[this.index].count/2))
                this.inventory_parent[this.index].set_count(Math.floor(this.inventory_parent[this.index].count/2))

            }
            else if(player.inventory_hand.item.name!="blank" && (this.inventory_parent[this.index].item.name==player.inventory_hand.item.name || this.inventory_parent[this.index].item.name=="blank") ){
                // console.log(2)
                if(this.inventory_parent[this.index].item.name=="blank" ){
                    this.inventory_parent[this.index].set_count(0)
                }
                this.inventory_parent[this.index].item=copy(player.inventory_hand.item)
                // player.inventory_hand.set_count(.count-1)
                
                this.inventory_parent[this.index].give_count(1,player.inventory_hand)
            }

            // alert("SPLIT")


        }

        if(this.type=="infinite_output"){
            // if(this.inventory_parent[this.index].item.name=="blank" && player.inventory_hand.item.name!="blank"){
        
            //     this.inventory_parent[this.index].item=copy(player.inventory_hand.item)
            //     this.inventory_parent[this.index].set_count(Math.ceil(player.inventory_hand.count/2))
            //     player.inventory_hand.set_count(Math.floor(player.inventory_hand.count/2))

            // }

            if(this.inventory_parent[this.index].item.name!="blank" && player.inventory_hand.item.name=="blank"){

                player.inventory_hand.item=copy(this.inventory_parent[this.index].item)
                player.inventory_hand.set_count(32)
                // this.inventory_parent[this.index].set_count(Math.floor(this.inventory_parent[this.index].count/2))

            }

            else if(player.inventory_hand.item.name!="blank"){

                // player.inventory_hand.item=copy(this.inventory_parent[this.index].item)
                player.inventory_hand.set_count(player.inventory_hand.count-1)
                // this.inventory_parent[this.index].set_count(Math.floor(this.inventory_parent[this.index].count/2))

            }
            // else if(this.inventory_parent[this.index].item.name==player.inventory_hand.item.name   ){
            //     player.inventory_hand.set_count(player.inventory_hand.count-1)
            //     this.inventory_parent[this.index].set_count(this.inventory_parent[this.index].count+1)
            // }

            // alert("SPLIT")


        }




            
            

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
   // x,y,text,size,color,align="center",on_clicked=undefined,border_image=undefined,text_input=false,image_bar=undefined,on_input_text_funtion=undefined,after_update_func=undefined,reactivate=true,font=undefined
class text {
    constructor(info){
        // this.elements=[]
        //Text
        this.text=info.text!=undefined ? info.text : undefined
        this.color=info.color!=undefined ? info.color : undefined
        this.align=info.align!=undefined ? info.align : undefined
        this.font=info.font!=undefined ? info.font : "Tahoma"  


        this.selected_effects = info.selected_effects ? info.selected_effects : undefined


        this.selected_effects_time = this.selected_effects!=undefined ? 0 : undefined

        this.selected_effects_length = (info.selected_effects_length!=undefined && this.selected_effects!=undefined) ? info.selected_effects_length : undefined


        // EFEF=[["blur",4,"px"]]


        // EFEF[i][0]+"("+EFEF[i][1]+EFEF[i][2]+")"
        // "blur("+4+"px)"
        this.base_line = info.base_line ? info.base_line : undefined

        this.after_addletter = info.after_addletter ? info.after_addletter : undefined

        this.default_border_y_offset = info.default_border_y_offset ? info.default_border_y_offset : undefined

        this.default_text = info.default_text ? info.default_text : undefined
        this.default_text_color = info.default_text_color ? info.default_text_color : undefined

        this.on_unselected = info.on_unselected ? info.on_unselected : undefined

        this.text_y_offset = info.text_y_offset ? info.text_y_offset : undefined


        this.on_entered = info.on_entered ? info.on_entered : undefined

        
        this.hit_box = info.hit_box ? info.hit_box : undefined


        this.border_align = info.border_align!=undefined ? info.border_align : undefined

  
        this.after_update_func=info.after_update_func!=undefined ? info.after_update_func : undefined
        // this.befor_update_func=info.befor_update_func!=undefined ? info.befor_update_func : undefined


        

        

        
        // if(font){
        //     this.font=font
        // }

        this.reactivate=info.reactivate!=undefined ? info.reactivate : undefined
        // }
        this.can_input_text = info.can_input_text!=undefined ? info.can_input_text : undefined

        this.input_index=this.can_input_text!=undefined ? 0 : undefined

        if(info.make_text_button){
            

            this.text_button=new button({"align":this.align ? this.align!=undefined : undefined,"partner":{"text":this},"on_clicked":info.on_clicked!=undefined ? info.on_clicked : undefined,
            "color":"255,10,10",
            "update_func":function(){

                if(!this.old_last_button_clicked && this.last_button_clicked){
                    if(this.partner.text.can_input_text){
                        this.partner.text.input_index=this.partner.text.text.length
                        // alert("T")
                    }
                }

                this.old_last_button_clicked = this.last_button_clicked
                if(this.last_button_clicked){
                    // 
                    // this.partner.search_selector.show=true
                    if(this.partner.text.can_input_text){
                        // console.log("UP")
                        this.partner.text.text_input=true
                    }
                    
                    // console.log(this.partner.text)
                }
                else{
     
                    // console.log("e")

                    // this.partner.search_selector.show=false
                    if(this.partner.text.can_input_text){
                        this.partner.text.text_input=false
                    }
    
    
                }
    
    
                
            }
        
        
            })

 
            
            this.partner={"button":this.text_button}


        }


        
        


        if(info.image_bar){
            this.image_bar=info.image_bar

            this.image_bar_timer=1000
            this.image_bar_last_time=0
        }







        // if(on_input_text_funtion){
        this.on_input_text_funtion = info.on_input_text_funtion!=undefined ? info.on_input_text_funtion : undefined  
        // }
        


        this.x=info.x!=undefined ? info.x : innerWidth/2
        this.y=info.y!=undefined ? info.y : innerHeight/2


        this.default_text_y_offset = info.default_text_y_offset!=undefined ? info.default_text_y_offset : undefined

        this.on_clicked=info.on_clicked!=undefined ? info.on_clicked : undefined
        
        // this.border_image_margin=15
        this.size=info.size!=undefined ? info.size : undefined

        this.border_image = info.border_image!=undefined ? info.border_image : undefined
        
        this.default_border_image = info.default_border_image!=undefined ? info.default_border_image : undefined
        this.default_border_image_width = info.default_border_image_width!=undefined ? info.default_border_image_width : 100


        this.border_size_multiplier = info.border_size_multiplier!=undefined && info.border_image!=undefined ? info.border_size_multiplier : 1.25

        this.border_size_height = info.border_size_height!=undefined? info.border_size_height : undefined

        this.width = info.width!=undefined ? info.width : undefined


        




        this.border_x_offset=info.border_x_offset!=undefined && info.border_image!=undefined ? info.border_x_offset : 30

        
    }
    draw(){
        // this.recenter()

        if(this.text_button){
        
            this.text_button.draw()


        }






        screen.fillStyle = this.color ;
        
        
        screen.font = this.size+"px "+this.font;
        screen.textAlign = this.align;
        screen.textBaseline = this.base_line

        // let offset=0
        // if(this.align=="center" ||this.align=="left" ){
            
        //     offset=(this.size/2.5)
        // }
        // gray_box_outline



        if(this.border_image && this.text!=""){
            let height = this.border_size_height!=undefined  ? this.border_size_height : this.size*this.border_size_multiplier
            let width = this.width!=undefined ? this.width : screen.measureText(this.text).width+this.border_x_offset


            let x=this.width!=undefined ? (this.border_align=="left" ? this.x : this.x-(this.width/2)) : this.x-((screen.measureText(this.text).width+this.border_x_offset)/2)
            let y=this.y + (this.border_y_offset ? this.border_y_offset : 0)-((height)/2)





            
 
            
            this.border_image.draw(x,y,width,height)
        }
        else if(this.text=="" && this.default_border_image){

            // console.log(this.align)

            let x=this.x
            let y=this.y

            let width = this.default_border_image_width
            let height = this.size*this.border_size_multiplier



            if(this.default_border_y_offset){
                y+=this.default_border_y_offset
            }

            if(this.align=="center"){
                x-=((this.default_border_image_width)/2)
            }


            this.default_border_image.draw(x,y-((height)/2),width,height)
        }

        if(this.text=="" && this.default_text){
            screen.fillStyle = this.default_text_color


            screen.fillText(this.default_text, this.x, this.y+(this.default_border_y_offset ? this.default_border_y_offset : 0)+(this.default_text_y_offset ? this.default_text_y_offset : 0));

        }
        else{
            screen.save()


            if(this.selected_effects!=undefined){
                let intencity = ((this.selected_effects_time-engin.time_in_loop)/this.selected_effects_length)

                // console.log(intencity)


                if(intencity>1){
                    intencity=1
                }





                if(this.text_input){
                    this.selected_effects.forEach(effect => {
                        // console.log( effect[0]+"("+(  ( effect[3] ? effect[3] : 0 )+Math.abs(effect[1]*(intencity-.5)))+effect[2]+")")
                        screen.filter = effect[0]+"("+(  ( effect[3] ? effect[3] : 0 )+Math.abs(effect[1]*(intencity-.5)))+effect[2]+")"

                    })   
                }

                if(this.selected_effects_time<engin.time_in_loop){
                
                    this.selected_effects_time=(engin.time_in_loop-(engin.time_in_loop-this.selected_effects_time))+this.selected_effects_length
                }
                
            }


            screen.fillText(this.text, this.x, this.y+(this.text_y_offset ? this.text_y_offset : 0));

            screen.restore()
        }

        
        if(this.image_bar && this.text_input && this.image_bar_last_time<=engin.current_time+(this.image_bar_timer/2)){

            let new_text=""
            if(this.input_index!=undefined){
                for(let i=0;i<this.input_index;i++){
                    new_text+=this.text[i]

                }               
            }
            else{
                new_text=this.text
            }

    //    console.log(new_text)

            screen.drawImage(this.image_bar,0,0,this.image_bar.width,this.image_bar.height,(this.x-(this.align=="center" ? (screen.measureText(this.text).width)/(this.align=="center" ? 2 : 1) : 0  ))+(  (screen.measureText(new_text).width)  ), (this.y+(this.default_border_y_offset ? this.default_border_y_offset : 0)+(this.default_text_y_offset ? this.default_text_y_offset : 0))-((this.size/-1)/2),(this.size/4),(this.size/-1));
    
        }



        

    }
    update(){



        // this.recenter()

        
        // if(this.befor_update_func){
        //     this.befor_update_func()
        // }


        if(this.text_button){

            screen.textAlign = this.align;
            screen.font = this.size+"px "+this.font;
            // let offset=0
            // if(this.align=="center" || this.align=="left" ){
                
            //     offset=(this.size/2.5)
            // }






            // let x=this.width!=undefined ? this.x-(this.width/2) : this.x-((screen.measureText(this.text).width+this.border_x_offset)/2)
            // let y=this.y



            this.text_button.size_x=this.width!=undefined ? this.width : screen.measureText(this.text).width
            this.text_button.size_y=this.border_size_height!=undefined  ? this.border_size_height : this.size
            
            // let x=this.width!=undefined ? (this.border_align=="left" ? this.x : this.x-(this.width/2)) : this.x-((screen.measureText(this.text).width+this.border_x_offset)/2)
            // let x=this.width!=undefined ? (this.border_align=="left" ? this.x : this.x-(this.width/2)) : this.x-((screen.measureText(this.text).width+this.border_x_offset)/2)
            this.text_button.x=this.width!=undefined ? (this.border_align=="left" ? this.x : this.x-(this.width/2)) : this.x-((screen.measureText(this.text).width)/2)
            this.text_button.y = this.border_size_height!=undefined ? this.y-(this.text_button.size_y/2) : this.y-(this.size/2)






            if(this.text=="" && this.default_border_image){
                this.text_button.size_x=this.default_border_image_width
                this.text_button.size_y=this.size*this.border_size_multiplier

                this.text_button.x=this.border_align=="left" ? this.x : this.x-((this.default_border_image_width)/2)
                this.text_button.y=this.y-((this.text_button.size_y)/2)+(this.default_border_y_offset ? this.default_border_y_offset : 0)
                
            }
            else if(this.hit_box=="default_border_image"){

                this.text_button.size_x=this.width!=undefined ? this.width : screen.measureText(this.text).width+this.border_x_offset
                this.text_button.size_y=this.border_size_height!=undefined  ? this.border_size_height : this.size*this.border_size_multiplier

                this.text_button.x=this.width!=undefined ? (this.border_align=="left" ? this.x : this.x-(this.width/2)) : this.x-((screen.measureText(this.text).width+this.border_x_offset)/2)
                this.text_button.y=this.y + (this.border_y_offset ? this.border_y_offset : 0)-((this.text_button.size_y)/2)
            }
            
            
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
        // console.log(this.input_index)
        if(letter!="Shift" && letter!="Tab" && letter!="Backspace" && letter!="Enter" && letter!="Control" && letter!="CapsLock" && letter!="Escape" && !KeysDown["Control"] && letter!="ArrowLeft" && letter!="ArrowRight"){
            

            let text=this.text
            this.text=""

                for(let i=0;i<this.input_index;i++){
                    this.text+=text[i]

                }
                this.text+=letter

                for(let i=this.input_index;i<text.length;i++){
                    this.text+=text[i]

                }

            
            // this.text=new_text

            this.input_index++
        }

        if(letter=="Backspace"){
            // "rffrf".slice(1)
        // console.log("RGGRRGRGGRGR  :::"+(this.text.length-1))

        // this.text=this.text.slice(0,this.text.length-1)


        let text=this.text
        this.text=""

            for(let i=0;i<this.input_index-1;i++){
                this.text+=text[i]

            }
            

            for(let i=this.input_index;i<text.length;i++){
                this.text+=text[i]

            }





        this.input_index--
            // console.log(this.text)
        }


        if(letter=="ArrowLeft"){
            this.input_index--
            console.log("LEFT")

        }

        if(letter=="ArrowRight"){
            this.input_index++
            console.log("RIGHT")


        }

        if((letter=="v" || letter=="V") && KeysDown["Control"]){
            getTextFromClipboard(
                function(text,other){
 
                    other[0].text+=text


                    // alert("P"+other[0].on_input_text_funtion)
                    // console.log(other[0].after_addletter)
                    if(other[0].after_addletter){
                        other[0].after_addletter()
                    // alert("I")

                    }
                    
                },
                [this]
            )



            this.input_index=this.text.length-1
            // navigator.clipboard.readText()
            // const permission = await navigator.permissions.query({
            //     name: "clipboard-read",
            // })

            // // f=navigator.clipboard.readText()
            // console.log()

        }

        if(letter=="Backspace" && KeysDown["Control"]){
            let start=0
            let text_started=false

            for(let i=this.text.length;i>=0;i--){
                // console.log(this.text[i])
                if(this.text[i]!=" " && this.text[i-1]==" "){
                        start=i
                        i=-1     
                    // text_started=true
                }
                // else{
                //     if(text_started){
                   
                //     }

                // }

            }
            // console.log(this.text.length-start)
            this.text=this.text.slice(0,start)

            this.input_index=this.text.length-1
            
        }


        if(letter=="Enter"){
            // "rffrf".slice(1)
            // console.log(this.partner.button)

            this.text_input=false
            this.partner.button.last_button_clicked=false

            if(this.on_entered){
                this.on_entered()
            }

            // console.log(this.text)
        }

        if(this.on_input_text_funtion){
            this.on_input_text_funtion()
        }

        // this.find_pos()


        if(this.input_index<0){
            this.input_index=0
        }


        if(this.input_index>this.text.length){
            this.input_index=this.text.length
        }

        this.after_addletter ? this.after_addletter() : function(){}()

        // letter!="Enter"




        
    }
  
}

class text_input{
    constructor(info){
        if(info.color){
            this.color=info.color
        }
        
        if(info.align){
            this.align=info.align
        }

        if(info.text || info.text==""){
            this.text_input=info.text

        }

        

        if(info.elements){
            this.elements=info.elements
        }

        if(info.x){
            this.x=info.x
        }

        if(info.y){
            this.y=info.y
        }


        if(info.func){
            this.func=info.func
        }

        if(info.on_entered_function){
            this.on_entered_function=info.on_entered_function
        }


        
        this.border_image_margin=15
        
        
        if(info.size){
            this.size=info.size
        }
        if(info.border_image){
            this.border_image=info.border_image
        
        }
        
        // this.find_pos()

        
    
    }
    draw(){
        screen.fillStyle = this.color ;
        
        screen.textAlign = this.align;
        screen.font = this.size+"px serif";
        let offset=0
        if(this.align=="center" ||this.align=="left" ){
            
            offset=(this.size/2.5)
        }
        // gray_box_outline

        if(this.border_image){
            screen.drawImage(this.border_image,0,0,this.border_image.width,this.border_image.height,this.x-(screen.measureText(this.text).width/2)-this.border_image_margin,this.y-(this.size/2)-this.border_image_margin,(screen.measureText(this.text).width)+(this.border_image_margin*2),this.size+(this.border_image_margin*2));

        }
        
        

        screen.fillText(this.text_input, this.x, this.y+offset);
        // console.log(this.text_input+this.x+"  "+this.y+offset)
        

    }
    update(){
        if(this.func){
            this.func()
        }
        
    }
    enter(){
        if(this.on_entered_function){

            this.on_entered_function()
        }
    }
  
}

class slidder{
    constructor(start_pos,end_pos,len=1){
        this.start_pos=start_pos
        this.end_pos=end_pos
        this.slider_width=25

        this.piont_len=len
        this.piont_pos=[start_pos[0],start_pos[1]]
        this.down=false


        // this.find_pos()


    }
    draw(){
        // console.log("WHY")
        screen.strokeStyle = 'dark_gray';
        screen.lineWidth = this.slider_width;
    
        // draw a red line
        screen.beginPath();
        screen.moveTo(this.start_pos[0], this.start_pos[1]);
        screen.lineTo(this.end_pos[0], this.end_pos[1]);
        screen.stroke();

        screen.fillStyle = 'rgb(220,220,220)';



        screen.beginPath();
        screen.arc(this.piont_pos[0],this.piont_pos[1], 30, 0, 2 * Math.PI);
        screen.fill();
        
    }
    update(){

        // this.down=false

        if(mouse_down){
            if(mouse_x>=this.piont_pos[0]-30){
                if(mouse_x<=this.piont_pos[0]+30){
                    if(mouse_y>=this.piont_pos[1]-30){
                        if(mouse_y<=this.piont_pos[1]+30){
                            this.down=true

                        }
                    }
                }
            }
            
        }
        if(mouse_released){
            this.down=false
      

        }

        if(this.down){
            this.piont_len=(mouse_x-this.start_pos[0])/(this.end_pos[0]-this.start_pos[0])
            if(this.piont_len>1){
                this.piont_len=1
            }
            if(this.piont_len<0){
                this.piont_len=0
            }

        }
        this.piont_pos=[this.start_pos[0]+((this.end_pos[0]-this.start_pos[0])*this.piont_len),this.start_pos[1]+((this.end_pos[1]-this.start_pos[1])*this.piont_len)]



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

