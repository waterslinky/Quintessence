
recipes = [
    //Log
    {

        "ingredients" : [
            {
                "x" : 0,
                "y" : 0,
                "item" : {
                    "name" : "log"
                },
                "center" : true
            }
        ],

        "result" : [
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : -0.325,
                "y" : 0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : 0.325,
                "y" : 0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : -0.325,
                "y" : -0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : 0.325,
                "y" : -0.325
            }
        ]
        
    },

    //slightly_striped_log
    {

        "ingredients" : [
            {
                "x" : 0,
                "y" : 0,
                "item" : {
                    "name" : "slightly_striped_log"
                },
                "center" : true
            }
        ],

        "result" : [
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : -0.325,
                "y" : 0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : 0.325,
                "y" : 0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : -0.325,
                "y" : -0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : 0.325,
                "y" : -0.325
            }
        ]
        
    },

    //moderately_striped_log
    {

        "ingredients" : [
            {
                "x" : 0,
                "y" : 0,
                "item" : {
                    "name" : "moderately_striped_log"
                },
                "center" : true
            }
        ],

        "result" : [
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : -0.325,
                "y" : 0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : 0.325,
                "y" : 0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : -0.325,
                "y" : -0.325
            },
            {
                "item" : {
                    "name" : "plank"
                },
                "x" : 0.325,
                "y" : -0.325
            }
        ]
        
    },

    //mostly_striped_log
    {

            "ingredients" : [
                {
                    "x" : 0,
                    "y" : 0,
                    "item" : {
                        "name" : "mostly_striped_log"
                    },
                    "center" : true
                }
            ],
    
            "result" : [
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : -0.325,
                    "y" : 0.325
                },
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : 0.325,
                    "y" : 0.325
                },
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : -0.325,
                    "y" : -0.325
                },
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : 0.325,
                    "y" : -0.325
                }
            ]
            
    },

    //striped_log
    {

            "ingredients" : [
                {
                    "x" : 0,
                    "y" : 0,
                    "item" : {
                        "name" : "striped_log"
                    },
                    "center" : true
                }
            ],
    
            "result" : [
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : -0.325,
                    "y" : 0.325
                },
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : 0.325,
                    "y" : 0.325
                },
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : -0.325,
                    "y" : -0.325
                },
                {
                    "item" : {
                        "name" : "plank"
                    },
                    "x" : 0.325,
                    "y" : -0.325
                }
            ]
            
    },

    //dough
    {

            "ingredients" : [
                {
                    "x" : 0,
                    "y" : 0,
                    "item" : {
                        "name" : "wheat"
                    },
                    "center" : true
                }
            ],
    
            "result" : [
                {
                    "item" : {
                        "name" : "dough"
                    },
                    "x" : 0,
                    "y" : 0
                }
            ]
            
    },

    //bread
    {
        "requires" : ["camp_fire"],
        "ingredients" : [
            {
                "x" : 0,
                "y" : 0,
                "item" : {
                    "name" : "dough"
                },
                "center" : true
            }
        ],
        "cook_time":7500,
        "result" : [
            {
                "item" : {
                    "name" : "bread"
                },
                "x" : 0,
                "y" : 0
            }
        ]
    },

        //camp_fire
        {
            "ingredients" : [
                {
                    "x" : 0,
                    "y" : 0,
                    "item" : {
                        "name" : "log"
                    },
                    "center" : true
                },
                {
                    "x" : 0.5,
                    "y" : 0,
                    "item" : {
                        "name" : "log"
                    }
                }
            ],

            "result" : [
                {
                    "item" : {
                        "name" : "camp_fire"
                    },
                    "x" : 0.25,
                    "y" : 0
                }
            ]
        },

 

    //Bark Axe Head
    // {

    //     "ingredients" : [
            
    //         {
    //             "x" : 0.25,
    //             "y" : 0.25,
    //             "depth":0,
                

    //             "item" : {
    //                 "name" : "bark"
    //             }
    //         },
    //         {
    //             "x" : 0,
    //             "y" : 0,
    //             "depth":1,
    //             "item" : {
    //                 "name" : "bark"
    //             },
    //             "center" : true
    //         },
    //         {
    //             "x" : -0.25,
    //             "y" : -0.25,
    //             "depth":2,

    //             "item" : {
    //                 "name" : "bark"
    //             }
    //         }
    //     ],

    //     "result" : [
    //         {
    //             "item" : {
    //                 "name" : "bark_axe_head"
    //             },
    //             "x" : 0,
    //             "y" : 0
    //         }
    //     ]
        
    // },

    {

        "ingredients" : [
            
            {
                "x" : 0,
                "y" : 0,
                "depth":0,
                "center" : true,
                "item" : {
                    "name" : "stick"
                }
            }
        ],

        "result" : [
            {
                "item" : {
                    "name" : "half_stick"
                },
                "x" : -0.2,
                "y" : 0.2
            },
            {
                "item" : {
                    "name" : "half_stick"
                },
                "x" : 0.2,
                "y" : -0.2
            }
        ]
        
    },


    //Bark Knife Head
    {

        "ingredients" : [
            
            {
                "x" : 0,
                "y" : 0,
                "depth":0,
                "center" : true,                
                "item" : {
                    "name" : "bark"
                }
            },
            {
                "x" : .25,
                "y" : -.25,
                "depth":0,

                "item" : {
                    "name" : "bark"
                }
            }

        ],

        "result" : [
            {
                "item" : {
                    "name" : "bark_knife_head"
                },
                "x" : 0,
                "y" : 0
            }
        ]
        
    },

        //Bark Hoe Head
        {

            "ingredients" : [
                
                {
                    "x" : 0,
                    "y" : 0,
                    "depth":0,
                    "center" : true,                
                    "item" : {
                        "name" : "bark"
                    }
                },
                {
                    "x" : .25,
                    "y" : -.25,
                    "depth":1,
    
                    "item" : {
                        "name" : "bark"
                    }
                },
                {
                    "x" : .25,
                    "y" : -.5,
                    "depth":2,
    
                    "item" : {
                        "name" : "bark"
                    }
                }
    
            ],
    
            "result" : [
                {
                    "item" : {
                        "name" : "bark_axe_head"
                    },
                    "x" : 0,
                    "y" : 0
                }
            ]
            
        },


    //Bark Pickaxe Head
    {

            "ingredients" : [
                {
                    "x" : -.15,
                    "y" : -.15,
                    "depth":0,
    
                    "item" : {
                        "name" : "bark"
                    }
                },
                {
                    "x" : 0,
                    "y" : 0,
                    "depth":0,
                    "center" : true,                
                    "item" : {
                        "name" : "bark"
                    }
                },
                {
                    "x" : .15,
                    "y" : .15,
                    "depth":0,
    
                    "item" : {
                        "name" : "bark"
                    }
                }
    
            ],
    
            "result" : [
                {
                    "item" : {
                        "name" : "bark_pickaxe_head"
                    },
                    "x" : 0,
                    "y" : 0
                }
            ]
            
    },

    //Bark Axe Head
    {

            "ingredients" : [
                {
                    "x" : -.15,
                    "y" : -.15,
                    "depth":0,
    
                    "item" : {
                        "name" : "bark"
                    }
                },
                {
                    "x" : 0,
                    "y" : 0,
                    "depth":0,
                    "center" : true,                
                    "item" : {
                        "name" : "bark"
                    }
                }
    
            ],
    
            "result" : [
                {
                    "item" : {
                        "name" : "bark_hoe_head"
                    },
                    "x" : 0,
                    "y" : 0
                }
            ]
            
    },


    //Knife
    {
            "requires" : ["crafting_table"],
            "ingredients" : [
                    
                    {
                        "x" : 0,
                        "y" : 0,
                        "depth":0,
                        "center" : true,
                        "part_type" : "scales"
                    },
                    {
                        "x" : .25,
                        "y" : -.25,
                        "depth":1,
                        "part_type" : "knife_head"
                    }
        
            ],
        
            "result" : [
                    {
                        "tool" : "knife",

                        "x" : .20,
                        "y" : -.20
                        
                    }
            ]
                
    },

    //Axe
    {
            "requires" : ["crafting_table"],
            "ingredients" : [
                    
                    {
                        "x" : 0,
                        "y" : 0,
                        "depth":0,
                        "center" : true,
                        "part_type" : "handle"
                    },
                    {
                        "x" : .20,
                        "y" : -.20,
                        "depth":1,
                        "part_type" : "axe_head"
                    }
        
            ],
        
            "result" : [
                    {
                        "tool" : "axe",

                        "x" : 0,
                        "y" : 0
                        
                    }
            ]
                
    },

    //Pickaxe
    {
            "requires" : ["crafting_table"],
            "ingredients" : [
                    
                    {
                        "x" : 0,
                        "y" : 0,
                        "depth":0,
                        "center" : true,
                        "part_type" : "handle"
                    },
                    {
                        "x" : .20,
                        "y" : -.20,
                        "depth":1,
                        "part_type" : "pickaxe_head"
                    }
        
            ],
        
            "result" : [
                    {
                        "tool" : "pickaxe",

                        "x" : 0,
                        "y" : 0
                        
                    }
            ]
                
    },

    //Hoe
    {
            "requires" : ["crafting_table"],
            "ingredients" : [
                    
                    {
                        "x" : 0,
                        "y" : 0,
                        "depth":0,
                        "center" : true,
                        "part_type" : "handle"
                    },
                    {
                        "x" : .20,
                        "y" : -.20,
                        "depth":1,
                        "part_type" : "hoe_head"
                    }
        
            ],
        
            "result" : [
                    {
                        "tool" : "hoe",

                        "x" : 0,
                        "y" : 0
                        
                    }
            ]
                
    },


    //Crafting Table
    {

            "ingredients" : [
                
                {
                    "x" : 0,
                    "y" : 0,
                    "depth":0,
                    "center" : true,
                    "item" : {
                        "name" : "half_stick"
                    }
                },
                {
                    "x" : 0.2,
                    "y" : 0,
                    "depth":1,

                    "item" : {
                        "name" : "half_stick"
                    }
                },
                {
                    "x" : 0,
                    "y" : -.2,
                    "depth":2,

                    "item" : {
                        "name" : "bark"
                    }
                },
                {
                    "x" : .2,
                    "y" : -.2,
                    "depth":3,
                    
                    "item" : {
                        "name" : "bark"
                    }
                }
    
            ],
    
            "result" : [
                {
                    "item" : {
                        "name" : "crafting_table"
                    },
                    "x" : 0.125,
                    "y" : -0.125
                }
            ]
            
    }
]
