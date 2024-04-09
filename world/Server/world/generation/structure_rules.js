let generation_structures_rules = [
    {

        "type" : "surface",
        "blocks" : structures["short_grass"],
        "only_noise_x" : true,
        "multiplier_x" : 8,
        "multiplier_y" : 8,
        "noise_setting" : {
            "seed_multiplier":5,
            "oct":1
        },
        "max_chucks" : [1,1],
        "offset_x" : 0,
        "offset_y" : 1,

        // "in_range" : [0.6,0.8]
        "noise_range" : [0.5,0.72],

        "random_number_seed_multiplier" : 25,
        "random_number_range" : [0.2,1]



    },
    {

        "type" : "surface",
        "blocks" : structures["tall_grass"],
        "only_noise_x" : true,
        "multiplier_x" : 8,
        "multiplier_y" : 8,
        "noise_setting" : {
            "seed_multiplier":5,
            "oct":1
        },
        "max_chucks" : [1,2],
        "offset_x" : 0,
        "offset_y" : 1,

        // "in_range" : [0.6,0.8]
        "noise_range" : [0.72,1],

        "random_number_seed_multiplier" : 25,
        "random_number_range" : [0.2,1]



    },
    {

        "type" : "surface",
        "blocks" : structures["tree"],
        "only_noise_x" : true,

        "multiplier_x" : 12,
        "noise_setting" : {
            "seed_multiplier":18,
            "oct":1
        },
        "max_chucks" : [2,2],
        "offset_x" : 0,
        "offset_y" : 1,
        "max_noise":true,



    },
    {

        "type" : "underground",
        "blocks" : structures["old_temple"],

        "multiplier_x" : 2,

        "multiplier_y" : 2,

        "noise_setting" : {
            "seed_multiplier":75,
            "oct":1
        },

        "elevation_range":[3,70],
        "max_chucks" : [2,2]

    },
]