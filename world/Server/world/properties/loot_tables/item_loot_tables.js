
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

item_loot_tables = {
    bark_knife: new loot_table([
        {
            "name":"bark",
            "count":1
        }
    ])
}

if (typeof window == 'undefined') {
    module.exports = {
        item_loot_tables
    };
}