const { getPokemon } = require("./dist/app/methods/get-pokemon");
const { getPokemonSpecie } = require("./dist/app/methods/get-specie-pokemon");
const { getPokemonList } = require("./dist/app/methods/get-pokemon-list");

exports.getPokemon = getPokemon;
exports.getPokemonSpecie = getPokemonSpecie;
exports.getPokemonList = getPokemonList;
