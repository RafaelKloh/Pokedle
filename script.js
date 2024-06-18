const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302")
const pokemonsJson = await pokemons.json()
console.log(pokemonsJson)

let min = 0;
let max = 1302;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

const pokemonSorteado = pokemonsJson.results[numeroAleatorio].name
console.log(pokemonSorteado)

function renderList(list = []) {
    list.forEach(async (pokemon) => {
        const pokemonInfos = await fetch(pokemon.url)
        const infosJson = await pokemonInfos.json()
        console.log(infosJson)
        console.log(pokemon.url)
        console.log("jjj")
    })
}
renderList()