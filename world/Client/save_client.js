function save_client(){
    save_local("slot"+selected_slot,true)

    save_local("player_slot"+selected_slot,get_player_traits(player,player.save_traits))
    
}

function import_saved_client(){
    var player_invenroy=null



    if(get_local("slot"+selected_slot)!=undefined){
        player_invenroy=get_local("player_slot"+selected_slot)
    }

    
    if(player_invenroy){

        player.save_traits.forEach(trait => {

            player[trait]=player_invenroy[trait]
            
        })

        console.log(player_invenroy)
        


        
    }
    console.error("g")
    player.reset_inventory()
}