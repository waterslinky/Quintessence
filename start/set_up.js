version="Alpha 1.4 SnapShot"

music=new Audio("music/ascend_song.mp3") 
music.volume=0.05



FOV=localStorage.getItem("FOV") ? localStorage.getItem("FOV") : 1.25

block_size=28*FOV

// account_name="f"



account={
    "name":"",
    "password":""
}
let save_name=JSON.parse(localStorage.getItem("name"))
if(save_name){
    account.name=save_name
}



multiplayer_allod=true