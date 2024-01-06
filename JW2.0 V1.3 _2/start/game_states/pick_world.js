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
    }),




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
            trash_icon_3


           
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