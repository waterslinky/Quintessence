let trash_icon_1 = new button({
    "x":(innerWidth/2)+350,
    "y":(innerHeight/2)-225,
    "size_x":150,
    "size_y":150,
    "on_clicked":function(){

        localStorage.removeItem("slot1")
        reselect_worlds()
        // sessionStorage.setItem("name",display_name.text)

        // sessionStorage.setItem("slot",1)

        // window.location.href = "../world/index.html";

// engin.change_selected_layer(["server_ips_elements"],"set")

        // server_ips_elements

    },
    "image":gray_delete_world_image,
    "align":"center"
})


let trash_icon_2 = new button({
    "x":(innerWidth/2)+350,
    "y":(innerHeight/2),
    "size_x":150,
    "size_y":150,
    "on_clicked":function(){

        // sessionStorage.setItem("name",display_name.text)

        // sessionStorage.setItem("slot",1)
        localStorage.removeItem("slot2")
        reselect_worlds()

        // window.location.href = "../world/index.html";

// engin.change_selected_layer(["server_ips_elements"],"set")

        // server_ips_elements

    },
    "image":(localStorage.slot2=="true" && localStorage.slot2==true) ? delete_world_image : gray_delete_world_image,
    "align":"center"
})


let trash_icon_3 = new button({
    "x":(innerWidth/2)+350,
    "y":(innerHeight/2)+225,
    "size_x":150,
    "size_y":150,
    "on_clicked":function(){

        localStorage.removeItem("slot3")
        reselect_worlds()

    },
    "image":gray_delete_world_image,
    "align":"center"
})



let world_icon_1 = new button({
    "x":innerWidth/2,
    "y":(innerHeight/2)-225,
    "size_x":500,
    "size_y":200,
    "on_clicked":function(){

        sessionStorage.setItem("name",display_name.text)

        sessionStorage.setItem("slot",1)

        window.location.href = "../world/index.html";

// engin.change_selected_layer(["server_ips_elements"],"set")

        // server_ips_elements

    },
    "image":slot_1_button,
    "align":"center"
})





let world_icon_2 = new button({
    "x":innerWidth/2,
    "y":innerHeight/2,
    "size_x":500,
    "size_y":200,
    "on_clicked":function(){

        sessionStorage.setItem("name",display_name.text)

        sessionStorage.setItem("slot",2)


        window.location.href = "../world/index.html";
    },
    "image":slot_2_button,
    "align":"center"
})


let world_icon_3 = new button({
        "x":innerWidth/2,
        "y":(innerHeight/2)+225,
        "size_x":500,
        "size_y":200,
        "on_clicked":function(){

            sessionStorage.setItem("name",display_name.text)

            sessionStorage.setItem("slot",3)

            window.location.href = "../world/index.html";

        },

        "image":slot_3_button,
        "align":"center"
})


function on_mod_directory_opened(file_tree){

    mod_selector_list_elements.splice(0,mod_selector_list_elements.length)

    let default_info = {
        "size" : 50,
        "align":"left",
        "font" : "bold Tahoma",
        "x":30,
        "color" : "200,60,60",
        "base_line" : "top",
        "make_text_button" : true,
        "on_clicked" : function(){
            

            let index = 0
            
            mod_selector_list_elements.forEach(element => {
                
                if(element == this.partner.text){
                    // alert("G"+index)
         
                    // console.log(element.text,this.partner.text)
                    
                    if(this.partner.text.text_object.color=="200,60,60"){
                        this.partner.text.text_object.color = "60,200,60"

                        selected_mods.push(this.partner.text.text)

                    }
                    else{
                        this.partner.text.text_object.color = "200,60,60"

                        for(let i=0;i<selected_mods.length;i++){

                            if(selected_mods[i] == this.partner.text.text){
                                selected_mods.splice(i,1)
                                // alert(i)
                            }
                            
                        }

                    }

                }
                index++
            });



        }
    }

    let y = 30

    selected_mods = JSON.parse(localStorage.getItem("selected_mod_list_slot"+selected_world_index))

    if(selected_mods==null){
        selected_mods = []
    }

    alert(selected_mods)

    for(const mod in file_tree){
        let info = copy(default_info)

        info.partner = {text:mod}
        info.text = mod

        info.y = y

        
        


        if(selected_mods && selected_mods.includes(mod)){

            info.color = "60,200,60"

        }

        let p = new text(info)
        p.partner = {text:p}
        
        mod_selector_list_elements.push(p)

        y+=35

    }

    

    engin.change_selected_layer(["mod_selector"],"set")

}

let open_mod_directory_icon_1 = new button({
    "x":(innerWidth/2)-450,
    "y":(innerHeight/2)-225,
    "size_x":300,
    "size_y":300*(5/19),
    "on_clicked":function(){

        selected_world_index = 1
        engin.change_selected_layer(["open_mod_directory"],"set")
        pick_directory().then((file_tree) => {
            // mod_list = file_tree
            
            on_mod_directory_opened(file_tree)
            
        })
        

    },
    "image":edit_mods_image,
    "align":"center"
})

let open_mod_directory_icon_2 = new button({
    "x":(innerWidth/2)-450,
    "y":(innerHeight/2),
    "size_x":300,
    "size_y":300*(5/19),
    "on_clicked":function(){

        selected_world_index = 2
        engin.change_selected_layer(["open_mod_directory"],"set")
        pick_directory().then((file_tree) => {
            // mod_list = file_tree
            
            on_mod_directory_opened(file_tree)
            
        })


    },
    "image":edit_mods_image,
    "align":"center"
})

let open_mod_directory_icon_3 = new button({
    "x":(innerWidth/2)-450,
    "y":(innerHeight/2)+225,
    "size_x":300,
    "size_y":300*(5/19),
    "on_clicked":function(){

        selected_world_index = 3
        engin.change_selected_layer(["open_mod_directory"],"set")
        pick_directory().then((file_tree) => {
            
            on_mod_directory_opened(file_tree)
            
        })

    },
    "image":edit_mods_image,
    "align":"center"
})



let selected_world_index
let mod_list

let selected_mods = []



pick_world_elements=[
    new align({ 
        "elements":[
                
            new text({
                "x": innerWidth/2,
                "y": 60,
                "text": "Pick world",
                "size": 48,
                "color": "rgb(255,255,255)",
                "align": "center"
            }),

            //World
            world_icon_1,
            world_icon_2,
            world_icon_3,

            

            //Trash
            trash_icon_1,
            trash_icon_2,
            trash_icon_3,

            //Open Mod Directory
            open_mod_directory_icon_1,
            open_mod_directory_icon_2,
            open_mod_directory_icon_3


           
        ],
        "groups":["ui"]
    })
    


 
]


function reselect_worlds(){
    world_icon_1.image=(localStorage.slot1=="true" || localStorage.slot1==true) ? slot_1_button : gray_slot_1_button_image
    trash_icon_1.image=(localStorage.slot1=="true" || localStorage.slot1==true) ? delete_world_image : gray_delete_world_image

    world_icon_2.image=(localStorage.slot2=="true" || localStorage.slot2==true) ? slot_2_button : gray_slot_2_button_image
    trash_icon_2.image=(localStorage.slot2=="true" || localStorage.slot2==true) ? delete_world_image : gray_delete_world_image

    world_icon_3.image=(localStorage.slot3=="true" || localStorage.slot3==true) ? slot_3_button : gray_slot_3_button_image
    trash_icon_3.image=(localStorage.slot3=="true" || localStorage.slot3==true) ? delete_world_image : gray_delete_world_image
}
reselect_worlds()