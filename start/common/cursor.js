
class Cursor{
    constructor(default_cursor="default"){
    // constructor(custom_cursor,custom_cursor_image,default_cursor="default"){


        // this.custom_cursor=custom_cursor
        // this.custom_cursor_image=custom_cursor_image

        // this.custom_cursor_image.setAttribute("draggable", false);


        // this.mouse_move_event_listener=document.addEventListener("mousemove",function(event){
            
        //     cursor.custom_cursor.style.left=event.x+"px"
        //     cursor.custom_cursor.style.top=event.y+"px"

        // })

        this.size_x=150
        this.size_y=150


        // this.default_cursors={
        //     "default":"default"
        // }

        // this.custom_cursors={
        //     "hammer":hammer_cursor_image.src
        // }

        this.image = undefined

        this.set_cursor(default_cursor)


    }
    set_cursor(cursor){

        // // this.custom_cursor_image.style.width=this.size_x+"px"
        // // this.custom_cursor_image.style.height=this.size_y+"px"


        // for(let cursor in this.default_cursors){
        //     if(cursor==cursor_name){
        //         document.body.style.cursor = cursor

        //     }
        // }

        // for(let cursor in this.custom_cursors){
        //     if(cursor==cursor_name){

        //         // this.custom_cursor_image.src = this.custom_cursors[cursor]

        //     }
        // }




        if(typeof cursor=="object"){
            document.body.style.cursor = "none"

            this.image = cursor

            


        }
        else{
            document.body.style.cursor = cursor
            
            this.image = undefined

        }

    }
}



// let cursor = new Cursor(document.getElementById("custom_cursor"),document.getElementById("custom_cursor_image"))

