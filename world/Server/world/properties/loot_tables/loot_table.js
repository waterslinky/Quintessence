function number_from(min,max,seed=undefined){    
    return function(){
        
        let random_num

        if(seed!=undefined){
            random_num = random(300,seed)
        }
        else{
            random_num = Math.random()
            
        }

        return min+Math.round((max-min)*random_num)
    }
}

function chance_table(table,val=undefined){
    let total_chance=0
    let items=0

    table.forEach(i => {
        total_chance+=i.chance
        items++
    })


    


    for(let v=0;v<table.length;v++){
        let new_total_chance=0
        if(val==undefined){
            val=number_from(0,total_chance)()
        }

        // parseInt(Math.random()*(total_chance-1))+1

        // console.log(val)
     

    
        for(let i=0;i<table.length;i++){
            let item=table[i]

            new_total_chance+=item.chance
            if(val<=new_total_chance){
                return item.name
                
                // i=table.length
            }

        }
    }



    





}

function random_a_b(value_a,value_b,percent_for_b){
    return function(){
        return Math.random()>=percent_for_b ? value_b : value_a
    }
}

class loot_table{
    constructor(items){
        this.items=items
    }
    roll(){
        let return_items=[]
        this.items.forEach(item => {
            let count

            if(typeof item.count=="number"){
                count=item.count
            }
            else{
                count=item.count()
            }
            
            if(count){
                return_items.push({
                    "name":item.name,
                    "count":count
                })
            }
            // console.log(item.count,return_items)
        });
        

        return return_items
    }

}