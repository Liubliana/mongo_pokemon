// Insert de pokemons
db.Pokemons.insertMany([
    {
        _id: 1,
        types: [
            "Grass",
            "Poison"
        ],
        name: "Bulbasaur",
        legendary: false,
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        generation: 1,
        special_powers: {
            Seed_Bomb: 55,
            Sludge_Bomb: 80,
            Power_Whip: 90,
            Frustration_Shadow: 10
            
        },
        regions: [
            {
                id: 2,
                route: [2]
            }
        ]
    },
    {
        _id: 2,
        types: [
            "Grass",
            "Poison"
        ],
        name: "Ivysaur",
        legendary: false,
        hp: 60,
        attack: 62,
        defense: 63,
        speed: 60,
        generation: 1,
        special_powers: {
            Power_Whip: 90,
            Vine_Whip: 60
        },
        regions: [
            {
                id: 2,
                route: [22]
            }
        ]
    },
    {
        _id: 3,
        types: [
            "Grass",
            "Poison"
        ],
        name: "Venusaur",
        legendary: false,
        hp: 80,
        attack: 82,
        defense: 83,
        speed: 80,
        generation: 1,
        special_powers: {
            Petal_Blizzard: 110,
            Sludge_Bomb: 80,
            Solar_Beam: 180,
        },
        regions: [
            {
                id: 2,
                route: [22]
            }
        ]
    },
    {
        _id: 4,
        types: [
            "Grass",
            "Poison"
        ],
        name: "Mega Venusaur",
        legendary: false,
        hp: 80,
        attack: 100,
        defense: 123,
        speed: 80,
        generation: 1,
        special_powers: {
            Petal_Blizzard: 110,
            Sludge_Bomb: 80,
            Solar_Beam: 180,
        },
        regions: [
            {
                id: 2,
                route: [25]
            }
        ]
    },
    {
        _id: 5,
        types: [
            "Fire"
        ],
        name: "Charmander",
        legendary: false,
        hp: 39,
        attack: 52,
        defense: 43,
        speed: 65,
        generation: 1,
        special_powers: {
            Flamethrower: 70,
            Flame_charge: 80,
            Flame_Burst: 180,
            Frustration_Shadow: 10
        },
        regions: [
            {
                id: 2,
                route: [42, 44]
            }
        ]
    },
    {
        _id: 6,
        types: [
            "Bug"
        ],
        name: "Kricketot",
        legendary: false,
        hp: 37,
        attack: 25,
        defense: 41,
        speed: 25,
        generation: 4,
        special_powers: {
            Growl: 40,
            Bug_Bite: 20
        },
        regions: [
            {
                id: 7,
                route: [15, 27]
            }
        ]
    },
    {
        _id: 7,
        types: [
            "Fire",
            "Psychic"
        ],
        name: "Victini",
        legendary: false,
        hp: 100,
        attack: 100,
        defense: 100,
        speed: 100,
        generation: 1,
        special_powers: {
            Quick_Attack: 40,
            Flame_Charge: 50,
            Inferno: 100
        },
        regions: [
            {
                id: 5,
                route: [1, 5]
            }
        ]
    },
    {
        _id: 8,
        types: [
            "Water"
        ],
        name: "Mudkip",
        legendary: false,
        hp: 50,
        attack: 70,
        defense: 50,
        speed: 40,
        generation: 3,
        special_powers: {
            Tackle: 40,
            Water_Pulse: 60
        },
        regions: [
            {
                id: 6,
                route: [16, 36]
            }
        ]
    },
    {
        _id: 9,
        types: [
            "Fire",
            "Rock"
        ],
        name: "Growlithe",
        legendary: false,
        hp: 60,
        attack: 75,
        defense: 45,
        speed: 55,
        generation: 1,
        special_powers: {
            Intimidate: 60,
            Flash_Fire: 70
        },
        regions: [
            {
                id: 9,
                route: [57, 59]
            }
        ]
    },
    {
        _id: 10,
        types: [
            "Water"
        ],
        name: "Squirtle",
        legendary: false,
        hp: 44,
        attack: 48,
        defense: 65,
        speed: 43,
        generation: 1,
        special_powers: {
            Aqua_Jet: 45,
            Aqua_Tail: 50,
            Water_Pulse: 70
        },
        regions: [
            {
                id: 2,
                route: [6, 7]
            }
        ]
    },
    {
        _id: 11,
        types: [
            "Dark"
        ],
        name: "Poochyena",
        legendary: false,
        hp: 35,
        attack: 55,
        defense: 35,
        speed: 35,
        generation: 3,
        special_powers: {
            Roar: 20,
            Rain_Dance: 5
        },
        regions: [
            {
                id: 6,
                route: [18]
            }
        ]
    },
    {
        _id: 12,
        types: [
            "Fire",
            "Ice"
        ],
        name: "Vulpix",
        legendary: false,
        hp: 38,
        attack: 41,
        defense: 40,
        speed: 65,
        generation: 1,
        special_powers: {
            String_Shot: 0,
            Tackle: 40,
            Bug_Bite: 60
        },
        regions: [
            {
                id: 2,
                route: [27, 38, 3]
            },
            {
                id: 3,
                route: [25]
            }
        ]
    },
    {
        _id: 13,
        types: [
            "Normal"
        ],
        name: "Bunnelby",
        legendary: false,
        hp: 38,
        attack: 36,
        defense: 38,
        speed: 57,
        generation: 6,
        special_powers: {
            Tackle: 40,
            Mud_Shot: 55,
            Dig: 80
        },
        regions: [
            {
                id: 4,
                route: [2, 3, 5, 22]
            }
        ]
    },
    {
        _id: 14,
        types: [
            "Grass"
        ],
        name: "Chikorita",
        legendary: false,
        hp: 45,
        attack: 49,
        defense: 65,
        speed: 49,
        generation: 2,
        special_powers: {
            Razor_Leaf: 55,
            Magic_Leaf: 60
        },
        regions: [
            {
                id: 1,
                route: [16, 32]
            }
        ]
    },
    {
        _id: 15,
        types: [
            "Psychic"
        ],
        name: "Mewtwo",
        legendary: true,
        hp: 35,
        attack: 60,
        defense: 44,
        speed: 55,
        generation: 1,
        special_powers: {
            Razor_Leaf: 55,
            Magic_Leaf: 60
        },
        regions: [
            {
                id: 2,
                route: [1]
            }
        ]
    },
    {
        _id: 16,
        types: [
            "Ice",
            "Flying",
            "Psychic"
        ],
        name: "Articuno",
        legendary: true,
        hp: 106,
        attack: 110,
        defense: 90,
        speed: 130,
        generation: 1, 
        special_powers: {
            Confusion: 50,
            Psystrike: 100
        },
        regions: [
            {
                id: 2,
                route: [3]
            },
            {
                id: 8,
                route: [4]
            }
        ]
    },
    {
        _id: 17,
        types: [
            "Ghost",
            "Dragon"
        ],
        name: "Giratina",
        legendary: true,
        hp: 150,
        attack: 100,
        defense: 120,
        speed: 90,
        generation: 4,
        special_powers: {
            Confusion: 50,
            Psystrike: 100
        },
        regions: [
            {
                id: 7,
                route: [0]
            }
        ]

    },
    {
        _id: 18,
        types: [
            "Ghost",
            "Dragon"
        ],
        name: "Lugia",
        legendary: true,
        hp: 106,
        attack: 90,
        defense: 130,
        speed: 110,
        generation: 2,
        special_powers: {
            Dragon_Rush: 100,
            Hydro_Pump: 110,
            Sky_Attack:140
        },
        regions: [
            {
                id: 1,
                route: [41]
            }
        ]
    },
    {
        _id: 19,
        types: [
            "Electric",
        ],
        name: "Pichu",
        legendary: false,
        hp: 20,
        attack: 40,
        defense: 15,
        speed: 60,
        generation: 2,
        special_powers: {
            Nuzzle: 20,
            Thunder_Shock: 40
        },
        regions: [
            {
                id: 1,
                route: [34]
            },
            {
                id: 3,
                route: [41]
            }
        ]
    },
    {
        _id: 20,
        types: [
            "Fire",
            "Psychic",
        ],
        name: "Ponyta",
        legendary: false,
        hp: 50,
        attack: 85,
        defense: 55,
        speed: 90,
        generation: 1,
        special_powers: {
            Ember: 40,
            Flame_Wheeel: 60,
            Tackle: 40
        },
        regions: [
            {
                id: 2,
                route: [17, 22]
            },
            {
                id: 8,
                route: [112]
            }
        ]
    }
])


// Insert trainers
db.Trainers.insertMany([
    {
        _id: 1,
        name: "Ash",
        age: 10,
        trainer_class: ["Normal_Class"],
        pokedex: [
            {
                id: 2,
                pokeball: "Normal",
                gender: "female",
                route: 22
            },
            {
                id: 5,
                pokeball: "Normal",
                gender: "male",
                route: 44
            },
            {
                id: 12,
                pokeball: "Greatball",
                gender: "male",
                route: 25
            },
            {
                id: 12,
                pokeball: "Normal",
                gender: "female",
                route: 38
            },
            {
                id: 12,
                pokeball: "Masterball",
                gender: "male",
                route: 38
            },
            {
                id: 19,
                pokeball: "Normal",
                gender: "male",
                route: 34
            }
        ]
    },
    {
        _id: 2,
        name: "Falkner",
        age: 12,
        trainer_class: ["Gym_leadear", "Ultra_Class"],
        pokedex: [
            {
                id: 1,
                pokeball: "Normal",
                gender: "female",
                route: 2
            },
            {
                id: 2,
                pokeball: "Normal",
                gender: "female",
                route: 22
            },
            {
                id: 4,
                pokeball: "Greatball",
                gender: "male",
                route: 25
            },
            {
                id: 16,
                pokeball: "Ultraball",
                gender: "female",
                route: 3
            }
        ],
        gymnasium: {
            id: 1,
            type: "Fying",
        },
        professor: 7
    },
    {
        _id: 3,
        name: "Lt. Surge Visquez",
        age: 22,
        trainer_class: ["Gym_leadear", "Ultra_Class"],
        pokedex: [
            {
                id: 6,
                pokeball: "Normal",
                gender: "male",
                route: 15
            },
            {
                id: 14,
                pokeball: "Normal",
                gender: "female",
                route: 16
            },
            {
                id: 20,
                pokeball: "Greatball",
                gender: "male",
                route: 112
            },
            {
                id: 18,
                pokeball: "Ultraball",
                gender: "female",
                route: 41
            }
        ],
        gymnasium: {
            id: 2,
            type: "Ghost",
        },
        professor: 7
    },
    {
        _id: 4,
        name: "Pryce",
        age: 42,
        trainer_class: ["Gym_leadear", "Ultra_Class"],
        pokedex: [
            {
                id: 7,
                pokeball: "Normal",
                gender: "male",
                route: 36
            },
            {
                id: 8,
                pokeball: "Normal",
                gender: "female",
                route: 16
            },
            {
                id: 9,
                pokeball: "Greatball",
                gender: "male",
                route: 59
            },
            {
                id: 10,
                pokeball: "Normal",
                gender: "female",
                route: 6
            },
            {
                id: 9,
                pokeball: "Greatball",
                gender: "male",
                route: 57
            },
            {
                id: 10,
                pokeball: "Greatball",
                gender: "male",
                route: 7
            }
        ],
        gymnasium: {
            id: 3,
            type: "Ice",
        }
    },
    {
        _id: 5,
        name: "Viola",
        age: 15,
        trainer_class: ["Gym_leadear", "Great_Class"],
        pokedex: [
            {
                id: 9,
                pokeball: "Normal",
                gender: "male",
                route: 57
            },
            {
                id: 10,
                pokeball: "Normal",
                gender: "male",
                route: 7
            }
        ],
        gymnasium: {
            id: 4,
            type: "Bug",
        }
    },
    {
        _id: 6,
        name: "Hilda",
        age: 14,
        trainer_class: ["Normal_Class"],
        pokedex: [
            {
                id: 19,
                pokeball: "Normal",
                gender: "female",
                region: 34
            },
            {
                id: 19,
                pokeball: "Greatball",
                gender: "male",
                region: 34
            },
            {
                id: 19,
                pokeball: "Normal",
                gender: "female",
                region: 41
            },
            {
                id: 19,
                pokeball: "Ultraball",
                gender: "female",
                region: 41
            }
        ],
        professor: 10
    },
    {
        _id: 7,
        name: "Mestre Waldo",
        age: 14,
        trainer_class: ["Master_Class"],
        pokedex: [
            {
                id: 15,
                pokeball: "Masterball",
                gender: "male",
                route: 1
            }
        ]
    },
    {
        _id: 8,
        name: "Misty",
        age: 14,
        trainer_class: ["Normal_Class"],
        pokedex: [
            {
                id: 14,
                pokeball: "Normal",
                gender: "male",
                route: 16
            },
            {
                id: 13,
                pokeball: "Normal",
                gender: "male",
                route: 2
            },
            {
                id: 12,
                pokeball: "Normal",
                gender: "female",
                route: 3
            }
        ],
        professor: 10
    },
    {
        _id: 9,
        name: "Johnny",
        age: 14,
        trainer_class: ["Normal_Class"],
        pokedex: [
            {
                id: 3,
                pokeball: "Normal",
                gender: "male",
                route: 22
            },
            {
                id: 7,
                pokeball: "Normal",
                gender: "female",
                route: 5
            },
            {
                id: 19,
                pokeball: "Normal",
                gender: "female",
                route: 41
            },
            {
                id: 5,
                pokeball: "Normal",
                gender: "female",
                route: 44
            }
        ]
    },
    {
        _id: 10,
        name: "Irina",
        age: 14,
        trainer_class: ["Master_Class"],
        pokedex: [
            {
                id: 14,
                pokeball: "Normal",
                gender: "male",
                route: 16
            },
            {
                id: 13,
                pokeball: "Normal",
                gender: "male",
                route: 2
            },
            {
                id: 12,
                pokeball: "Normal",
                gender: "female",
                route: 3
            },
            {
                id: 17,
                pokeball: "Ultraball",
                gender: "female",
                route: 0
            }
        ]
    }
])

// Insert regions
db.Regions.insertMany([
    {
        _id: 1,
        name: "Johto",
        gymnasiums: [
            {
                id: 1,
                city: "Violet city"
            },
            {
                id: 3,
                city: "Mahogany city"
            }
        ],
        pokemon: [
            {
                id: 14,
                route: [16, 32]
            },
            {
                id: 18,
                route: [41]
            },
            {
                id: 19,
                route: [34]
            }
        ]    
    },
    {
        _id: 2,
        name: "Kanto",
        gymnasiums: [
            {
                id: 2,
                city: "Vermilion City"
            }
        ],
        pokemon: [
            {
                id: 1,
                route: [2, 3]
            },
            {
                id: 2,
                route: [22]
            },
            {
                id: 3,
                route: [22]
            },
            {
                id: 4,
                route: [25]
            },
            {
                id: 5,
                route: [42, 44]
            },
            {
                id: 10,
                route: [6, 7]
            },
            {
                id: 12,
                route: [27, 38, 3]
            },
            {
                id: 16,
                route: [3]
            }
        ]    
    },
    {
        _id: 3,
        name: "Alola",
        gymnasiums: [
            {
                id: 4,
                city: "Santalune City"
            }
        ],
        pokemon: [
            {
                id: 19,
                route: [41]
            },
            {
                id: 12,
                route: [25]
            }
        ]    
    },
    {
        _id: 4,
        name: "Kalos",
        gymnasiums: [
            {
                id: 4,
                city: "Santalune City"
            }
        ],
        pokemon: [
            {
                id: 13,
                route: [2, 3, 5, 22]
            }
        ]    
    },
    {
        _id: 5,
        name: "Unova",
        gymnasiums: [
        ],
        pokemon: [
            {
                id: 7,
                route: [1, 5]
            }
        ]    
    },
    {
        _id: 6,
        name: "Hoenn",
        gymnasiums: [
            {
                id: 4,
                city: "Santalune City"
            }
        ],
        pokemon: [
            {
                id: 8,
                route: [16, 36]
            },
            {
                id: 11,
                route: [18]
            }
        ]    
    },
    {
        _id: 7,
        name: "Sinnoh",
        gymnasiums: [
            {
                id: 4,
                city: "Santalune City"
            }
        ],
        pokemon: [
            {
                id: 6,
                route: [15, 27]
            },
            {
                id: 17,
                route: [0]
            }
        ]    
    },
    {
        _id: 8,
        name: "Galar",
        gymnasiums: [
            {
                id: 4,
                city: "Santalune City"
            }
        ],
        pokemon: [
            {
                id: 20,
                route: [112]
            },
            {
                id: 16,
                route: [4]
            }
        ]    
    },
    {
        _id: 9,
        name: "Hisui",
        gymnasiums: [
            {
                id: 4,
                city: "Santalune City"
            }
        ],
        pokemon: [
            {
                id: 9,
                route: [57, 59]
            }
        ]    
    }
])

// Insert Gyms
db.Gymnasium.insertMany([
    {
        _id: 1,
        name: "Violet Gym",
        champions: [
            {
                id: 2,
                type: "Flying"
            }
        ],
        region: {
            id: 1,
            city: "Violet city"
        }
    }, 
    {
        _id: 2,
        name: "Vermilion Gym",
        champions: [{
            id: 3,
            type: "Ghost"
        }],
        region: {
            id: 2,
            city: "Vermilion city"
        }
    },
    {
        _id: 3,
        name: "Mahogany Gym",
        champions: [{
            id: 4,
            type: "Ice"
        }],
        region: {
            id: 1,
            city: "Mahogany city"
        }
    },
    {
        _id: 4,
        name: "Santalune Gym",
        champions: [{
            id: 5,
            type: "Bug"
        }],
        region: {
            id: 1,
            city: "Santalune city"
        }
    },
    {
        _id: 5,
        name: "Moonstone Gym",
        region: {
            id: 4,
            city: "Moonstone city"
        }
    },
    {
        _id: 6,
        name: "Earth Gym",
        champions: [
            {
                id: 10,
                type: "Ghost"
            },
            {
                id: 8,
                type: "Normal"
            }
        ],
        region: {
            id: 4,
            city: "Higher Earth city"
        }
    },
    {
        _id: 7,
        name: "Rock Gym",
        region: {
            id: 4,
            city: "Higher Earth city"
        }
    },
    {
        _id: 8,
        name: "Nice Gym",
        champions: [
            {
                id: 7,
                type: "Psychic"
            }
        ],
        region: {
            id: 6,
            city: "Happyland city"
        }
    },
    {
        _id: 9,
        name: "Ocelot Gym",
        region: {
            id: 9,
            city: "Amazon city"
        }
    },
    {
        _id: 10,
        name: "Optimum Gym",
        region: {
            id: 8,
            city: "Prime city"
        }
    }
    
])