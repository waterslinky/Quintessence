if (typeof window == 'undefined') {
    var { number_from, random_a_b } = require('./loot_table');
}

loot_table = class{
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

block_loot_tables = {
    leaf:new loot_table([
        {
            "name":"stick",
            "count":number_from(0,1)
        }
    ]),
    grass_block:new loot_table([
        {
            "name":"wheat_seed",
            "count":number_from(0,1)
        }
    ]),
    wheat_crop:new loot_table([
        {
            "name":"wheat",
            "count":number_from(1,2)
        },
        {
            "name":"wheat_seed",
            "count":random_a_b(1,2,0.8)
        }
    ]),
    wheat_seed:new loot_table([
        {
            "name":"wheat_seed",
            "count":1
        }
    ])
}

if (typeof window == 'undefined') {
    module.exports = {
        block_loot_tables
    };
}


