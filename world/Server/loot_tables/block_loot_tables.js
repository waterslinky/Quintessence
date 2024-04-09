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




