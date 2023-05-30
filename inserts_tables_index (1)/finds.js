// 01.Todos os dados
db.Pokemons.find()
db.Trainers.find()

// 02.Quantidade total de documentos
db.Pokemons.count()
db.Trainers.count()
db.Regions.count()
db.Gymnasium.count()

// 03. Ordenados
db.Gymnasium.find().sort({name: 1}) // ginasios por nome
db.Regions.find({}, {name: 1}).sort({name: 1}) // regioes por nome
db.Pokemons.find({}, {name: 1}).sort({attack: -1}) //pokemons por ataque --> TREINADORES
//

// 04. Or
db.Pokemons.find({$or: [{legendary: true}, {attack: {$gt: 60}}]}) // como ordenar
db.Trainers.find({$or: [{trainer_class: {$in: ["Master_Class", "Ultra_Class"]}}, {gymnasium: { $exists: true }}]})

// 05. Minor than
db.Pokemons.find({speed: {$lt: 40}})
db.Pokemons.count({speed: {$lt: 40}})

// 06. AND
db.poke.find({$and: [{hp: {$gt: 40}}, {hp: {$lt: 60}}]})
db.poke.count({$and: [{hp: {$gt: 40}}, {hp: {$lt: 60}}]})

// 08.Retorne o id e os nomes dos pokémons que forem do tipo Fire OU Normal
db.poke.find({types: {$in: ["Normal", "Fire"]}}, {name: 1})

// 09.Retorne os nomes dos pokémons que forem do tipo Bug E Poison
db.poke.find({types: {$all: ["Bug", "Poison"]}}, {_id: 0, name: 1})

// 10.Retorne os pokémons que em seu nome tenham “pi”
db.poke.find({$or: [{name: /pi/}, {name:/Pi/}]}, {_id: 0, name: 1})
db.poke.find({name: /pi/i}, {_id: 0, name: 1})

// 11. Retorne os pokémons em que seu nome termine com letra “r”
db.poke.find({name: /r$/i}, {_id: 0, name: 1})

// 12.Faça uma consulta que limite o resultado em um retorno para apenas 5 documentos
db.poke.find({}, {name: 1}).sort({name: 1}).limit(5)

// 13.Retorne os pokémons que sejam de apenas um tipo
db.poke.find({types : {$size:1}}, {name: 1, types: 1})

// Updates
db.poke.updateOne({_id: 1}, {$set: {attack: 50}})

db.poke.updateMany({name: {$in: ['Bulbasaur', 'Charmander', 'Squirtle']}}, {$set: {inicial: true}})
fb.poke.find({inicial: true})

db.poke.updateMany({name: {$in: ['Bulbasaur', 'Charmander', 'Squirtle']}}, {$unset: {inicial: true}})

db.poke.updateMany({speed: {$gt: 60}}, {$inc: {defense: 2} })

db.poke.updateOne({name: "Eevee"}, {$set: {attack: 55}, $setOnInsert: {types: ['Fire']}}, {upsert:true})

db.poke.updateOne({name: "Eevee" , types: "Fire"}, {$set: {"types.$": "Normal"}})

db.poke.updateOne({name: "Eevee"}, {$push: {types: {$each: ["Fire", "Fairy", "Electric", "Dark", "Water", "Ice", "Grass"]}}})