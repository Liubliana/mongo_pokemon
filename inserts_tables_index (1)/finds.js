// 01.Todos os dados
db.Pokemons.find()
db.Trainers.find()

// 02.Quantidade total de documentos
db.Pokemons.countDocuments()
db.Trainers.countDocuments()
db.Regions.countDocuments()
db.Gymnasium.countDocuments()

// 03. Ordenados
db.Gymnasium.find().sort({name: 1}) // ginasios por nome
db.Regions.find({}, {name: 1}).sort({name: 1}) // regioes por nome
db.Pokemons.find({}, {name: 1, attack: 1}).sort({attack: -1}).limit(5) //top 5 pokemons

// 04. Or
db.Pokemons.find({$or: [{legendary: true}, {attack: {$gt: 60}}]}, {_id: 0, name: 1, attack: 1, legendary: 1}) // como ordenar
db.Trainers.find({$or: [{trainer_class: {$in: ["Master_Class", "Ultra_Class"]}}, {gymnasium: { $exists: true }}]}, {name: 1})
db.Pokemons.find({$or: [{"special_powers.Razor_Leaf": {$exists: true}}, {"special_powers.Tackle": {$exists: true}}]}, {name: 1, special_powers: 1})

// 05. Minor than
db.Pokemons.find({speed: {$lt: 40}}, {name: 1, speed: 1})
db.Pokemons.count({speed: {$lt: 40}})

// 06. AND
db.Pokemons.find({$and: [{hp: {$gt: 40}}, {hp: {$lt: 60}}]})
db.Pokemons.count({$and: [{hp: {$gt: 40}}, {hp: {$lt: 60}}]})

// 07. Índice + In
db.Pokemons.find({types: {$in: ["Normal", "Fire"]}}, {name: 1, types: 1}).hint({types:1})

// 08. ALL
db.Pokemons.find({types: {$all: ["Grass", "Poison"]}}, {_id: 0, name: 1, types: 1}).hint({types:1})

// 9. Procura String
db.Pokemons.find({name: /saur/}, {_id: 0, name: 1})
db.Gymnasium.find({"champions.type" : "Ice"}, {name: 1, champions:1})

// 10. Size
db.Gymnasium.find({champions : {$size:1}}, {name: 1, champions:1})
db.Regions.find({pokemon : {$size:2}}, {name: 1})
db.Regions.find({gymnasiums : {$size:2}}, {name: 1})
db.Regions.find({gymnasiums : {$exists: false}}, {name: 1})

// Updates
db.Trainers.updateOne({_id: 1}, {$set: {attack: 50}})

db.poke.updateMany({name: {$in: ['Bulbasaur', 'Charmander', 'Squirtle']}}, {$set: {inicial: true}})
fb.poke.find({inicial: true})

db.poke.updateMany({name: {$in: ['Bulbasaur', 'Charmander', 'Squirtle']}}, {$unset: {inicial: true}})

db.poke.updateMany({speed: {$gt: 60}}, {$inc: {defense: 2} })

db.poke.updateOne({name: "Eevee"}, {$set: {attack: 55}, $setOnInsert: {types: ['Fire']}}, {upsert:true})

db.poke.updateOne({name: "Eevee" , types: "Fire"}, {$set: {"types.$": "Normal"}})

db.poke.updateOne({name: "Eevee"}, {$push: {types: {$each: ["Fire", "Fairy", "Electric", "Dark", "Water", "Ice", "Grass"]}}})