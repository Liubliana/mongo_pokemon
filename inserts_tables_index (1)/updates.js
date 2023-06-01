// Update One
db.Trainers.updateOne({_id: 1}, {$set: {age: 11}})

// Update Many + push
db.Trainers.updateMany({gymnasium: {$exists: true}}, {$push: {trainer_class: {$each: ['Gym_leadear']}}})

// Set
db.Pokemons.updateOne({name: 'Mega Venusaur'}, {$set: {legendary: true}})

// Upsert + set on insert
db.Pokemons.updateOne({name: "Eevee"}, {$set: {_id: 21}, $setOnInsert: {
    types: ['Fire'], 
    legendary: false,
    hp: 20,
    attack: 40,
    defense: 15,
    speed: 60,
    generation: 1,
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
]}}, {upsert:true})

// Add to set
db.Regions.updateOne({_id: 1}, {$addToSet: {pokemon: {id: 21, route: [34]}}})
db.Regions.updateOne({_id: 3}, {$addToSet: {pokemon: {id: 21, route: [41]}}})

// Push
db.Pokemons.updateOne({name: "Eevee"}, {$push: {types: {$each: ["Fire", "Fairy", "Electric", "Dark", "Water", "Ice", "Grass"]}}})

// Inc
db.Trainers.updateMany({}, {$inc: {age: 1}})
