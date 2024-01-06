let old_temple=[
    [{"name":"air","data":{"void":true}},{"name":"air","data":{"void":true}},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_boulder"},{"name":"stone_boulder"},{"name":"stone_brick"}],
    [{"name":"air","data":{"void":true}},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"knowledge_tablet","data":{"main_hit_box_size":[2,2],"hit_box_index":[0,0]}},{"name":"knowledge_tablet","data":{"main_hit_box_size":[2,2],"hit_box_index":[0,1]}},{"name":"stone_brick_pedestal","data":{"main_hit_box_size":[2,1],"hit_box_index":[0,0]}},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"knowledge_tablet","data":{"main_hit_box_size":[2,2],"hit_box_index":[1,0]}},{"name":"knowledge_tablet","data":{"main_hit_box_size":[2,2],"hit_box_index":[1,1]}},{"name":"stone_brick_pedestal","data":{"main_hit_box_size":[2,1],"hit_box_index":[1,0]}},{"name":"stone_brick"}],
    [{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"air","data":{"void":true}},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"air"},{"name":"stone_brick"}],
    [{"name":"air","data":{"void":true}},{"name":"air","data":{"void":true}},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_brick"},{"name":"stone_boulder"},{"name":"stone_boulder"},{"name":"stone_brick"}]
]

let tree_top = [
    [{"name":"air","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}}],
    [{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}}],
    [{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"air","data":{"void":true}},{"name":"air","data":{"void":true}}],
    [{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}}],
    [{"name":"air","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}},{"name":"leaf","data":{"void":true}}]
]


let tree = [[
    {
        "name":"extrude_block",
        "data":{
            "dir":0,"extrude_min":3,
            "extrude_max":6,"extrude_block":"log",
            "end_structure":"tree_top",
            "offset_x":-2,
            "offset_y":2
        }
    }
]]

function add_custom_structure(structure_name,structure){

    let parsed_structure = export_world(structure)
    
    console.log(parsed_structure)

    custom_structures[structure_name]=parsed_structure
    structures[structure_name]=parsed_structure
}



default_structures={
    "old_temple":old_temple,
    "tree":tree,
    "tree_top":tree_top
}


structures={

}


for(default_structure in default_structures){
    structures[default_structure]=default_structures[default_structure]
}

// console.log(custom_structures)















