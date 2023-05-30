// Criar nova base de dados
use pokemon_project


// Create pokemon collection
db.createCollection('Pokemons', {
    capped: true,
    max: 20,
    size: 1000,
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "types", "name", "legendary", "hp", "attack", "defense", "speed", "generation", "special_powers", "regions"],
            properties: {
                _id: {
                    bsonType: "int"
                },
                types: {
                    bsonType: "array",
                    items: {
                        bsonType: "string"
                    }
                },
                name: {
                    bsonType: "string"
                },
                legendary: {
                    bsonType: "bool"
                },
                hp: {
                    bsonType: "int"
                },
                attack: {
                    bsonType: "int"
                },
                defense: {
                    bsonType: "int"
                },
                speed: {
                    bsonType: "int"
                },
                generation: {
                    bsonType: "int"
                },
                special_powers: {
                    bsonType: "object",
                    additionalProperties: {
                        bsonType: "int"
                    }
                },
                professor: {
                    bsonType: "int",
                },
                regions: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["id", "route"],
                        properties: {
                            id: {
                                bsonType: "int"
                            },
                            route: {
                                bsonType: "array"
                            }
                        }
                    }
                }
            }
        }
    }
})

// Create trainers
db.createCollection('Trainers', {
    capped: true,
    max: 20,
    size: 1000,
    validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["_id", "name", "age", "trainer_class", "pokedex"],
          properties: {
                _id: {
                    bsonType: "int"
                },
                name: {
                    bsonType: "string"
                },
                age: {
                    bsonType: "int",
                        minimum: 0
                },
                trainer_class: {
                    bsonType: "array",
                    items: {
                        enum: ["Normal_Class", "Great_Class", "Ultra_Class", "Master_Class", "Gym_leadear"]
                    }
                },
                pokedex: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["id", "pokeball", "gender", "route"],
                        properties: {
                            id: {
                                bsonType: "int"
                            },
                            pokeball: {
                                bsonType: "string"
                            },
                            gender: {
                                bsonType: "string",
                                enum: ["female", "male"]
                            },
                            route: {
                                bsonType: "int",
                            }
                        }
                    }
                },
                gymnasium: {
                    bsonType: "object",
                    required: ["id", "type"],
                    properties: {
                        id: {
                            bsonType: "int"
                        },
                        type: {
                            bsonType: "string"
                        }
                    }
                }
            }
        }
    }  
})

// Create Gymnasium
db.createCollection("Gymnasium", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "name", "region"],
            properties: {
                _id: {
                    bsonType: "int"
                },
                name: {
                    bsonType: "string"
                },
                region: {
                    bsonType: "object",
                    required: ["id", "city"],
                    properties: {
                        id: {
                            bsonType: "int"
                        },
                        city: {
                            bsonType: "string"
                        }
                    }
                },
                champions: {
                    bsonType: "array",
                    required: ["id", "type"],
                    properties: {
                        id: {
                            bsonType: "int"
                        },
                        type: {
                            bsonType: "string"
                        }
                    }
                }
            }
        }
    }
  })

// Create Regions
db.createCollection("Regions", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "name", "pokemon"],
            properties: {
                _id: {
                    bsonType: "int"
                },
                name: {
                    bsonType: "string"
                    },
                gymnasiums: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["id", "city"],
                        properties: {
                            id: {
                            bsonType: "int"
                            },
                            city: {
                            bsonType: "string"
                            }
                        }
                    }
                },
                pokemon: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["id", "route"],
                        properties: {
                            id: {
                                bsonType: "int"
                            },
                            route: {
                                bsonType: "array",
                                items: {
                                    bsonType: "int"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  })
    
    