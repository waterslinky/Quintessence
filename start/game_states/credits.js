credits_elements=[new align({ 
    "elements":[


        new text({"x": innerWidth/2 ,"y": 50,"text": "Quintessence:" ,"size":70,"color":"rgb(66, 242, 245)","align":"center"}),
        new text({"x":innerWidth/2  ,"y":230 ,"text": "By: @QuintessenceGame" ,   "size": 50  ,"color":"rgb(255,255,255)"   ,"align":  "center" }),
        new text( {"x":innerWidth/2  ,"y":320 ,"text": "Pack B: @Calamity1956" ,   "size": 50  ,"color": "rgb(255,255,255)"  ,"align":  "center" } ),
        new button({
            "image":youtube_button_image,
            "x":innerWidth/2,
            "y":innerHeight/2,
            "size_x":700,
            "size_y":700*(48/63),
            "align":"center",
            "on_clicked":function(){
                window.open(
                    "https://www.youtube.com/channel/UC0C6KjMVCl1iE4ZtlACf4Ug", "_blank");
            }


        })
    ],
    "groups":["ui"]
})]