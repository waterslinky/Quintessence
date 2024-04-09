const canvas = document.getElementById("win");

old_innerWidth=2574
old_innerHeight=1285

canvas.width =old_innerWidth;
canvas.height =old_innerHeight;

aspect=[16,8]

screen_scale=1

if((innerWidth*(aspect[1]/aspect[0]))>innerHeight){
    // console.log("canv B")

    canvas.style.height=`${innerHeight}px`
    screen_scale=old_innerHeight/innerHeight
}
else{
    // console.log("canv A")

    canvas.style.width =`${innerWidth}px`
    screen_scale=old_innerWidth/innerWidth
}


screen = canvas.getContext("2d");
or_screen = screen

innerWidth=2574
innerHeight=1285

screen.imageSmoothingEnabled = false;




let old_screen
function save_screen(){
    old_screen=screen
}

function restore_screen(){
    screen=old_screen
}








function image_pixles(image){
    if(typeof image.length=='undefined'){
        let list=[]
        try{
            // image.crossOrigin = "Anonymous";

            let canvas_2 = document.createElement('canvas');
            let screen_2 = canvas_2.getContext("2d");
        
        
            // alert(image.width+".width")
            var imgW = image.width;
            var imgH = image.height;
            canvas_2.width = imgW;
            canvas_2.height = imgH;
        
            // image.crossOrigin = "Anonymous";
        
        
            screen_2.drawImage(image,0,0)
        
            let data=screen_2.getImageData(0,0,imgW,imgH).data


            if(data){
                for(let x=0;x<imgW;x++){
                let line=[]
                for(let y=0;y<imgH;y++){
                    let pixle=[]
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))    ])
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))+1  ])
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))+2  ])
                    pixle.push(data[(((x*4)+(y*((imgW)*4))   ))+3  ])
                    line.push(pixle)
                }
                list.push(line)
                }
            
                return list
            }


        }

        catch(err){
            if(!AlertedScreenSecurityError){
                alert(err)
                alert("Because of this error special effects will not show up and lag may occur.")

                AlertedScreenSecurityError=true
            }
            
        }

    }



    // alert("RET FALSE")
    return false
}

