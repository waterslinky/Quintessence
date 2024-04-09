let old_temple=[
    [{"name":"air","void":true},{"name":"air","void":true},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_boulder"},{"name":"stone_boulder"},{"name":"stone_brick"}],
    [{"name":"air","void":true},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"knowledge_tablet","hit_box_index":[0,0]},{"name":"knowledge_tablet","hit_box_index":[0,1]},{"name":"stone_brick_pedestal","hit_box_index":[0,0]},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"knowledge_tablet","hit_box_index":[1,0]},{"name":"knowledge_tablet","hit_box_index":[1,1]},{"name":"stone_brick_pedestal","hit_box_index":[1,0]},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"air","void":true},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"air","void":true},{"name":"air","void":true},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_boulder"},{"name":"stone_boulder"},{"name":"stone_brick"}]
]

let tree_top = [
    [{"name":"air","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true}],
    [{"name":"leaf","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true}],
    [{"name":"leaf","void":true},{"name":"leaf","void":true},{"name":"air","void":true},{"name":"air","void":true}],
    [{"name":"leaf","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true}],
    [{"name":"air","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true},{"name":"leaf","void":true}]
]


let tree = [[
    {
        "name":"extrude_block",
        "dir":0,
        "extrude_min":3,
        "extrude_max":6,
        "extrude_block":"log",
        "end_structure":"tree_top",
        "offset_x":-2,
        "offset_y":2
    }
]]

let short_grass = [[
    {
        "name":"grass_block"
    }
]]

let tall_grass = [[
    {
        "name":"tall_grass_block",
        "hit_box_index":[0,0]

    },
    {
        "name":"tall_grass_block",
        "hit_box_index":[0,1]

    }
]]




default_structures={
    "old_temple":old_temple,
    "tree":tree,
    "tree_top":tree_top,
    "short_grass":short_grass,
    "tall_grass":tall_grass
}


structures={

}


for(default_structure in default_structures){
    structures[default_structure]=default_structures[default_structure]
}

// console.log(custom_structures)















