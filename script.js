// const pokemonArr = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"]
let pokemonNum = (Math.floor(Math.random() * 151) + 1)
console.log(pokemonNum)

let capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let addDecimal = (num) => {
  return (num / 10).toFixed(1);
}

document.getElementById('start-button').addEventListener('click', event => {
  event.preventDefault()


  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
    .then(res => {
      const pokemon = res.data
      console.log(pokemon)

      if (pokemon.types[0].type.name) {
        document.getElementById('pokemon').
          innerHTML = `
        <h1>Pokemon Name: ${capitalize(pokemon.species.name)}</h1>
        <h2>Type: ${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}</h2 >
        <h5>Height: ${addDecimal(pokemon.height)} m</h5>
        <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
        <img src = "${pokemon.sprites.front_default}" alt="${pokemon.species.name}">
      `
      } else {
      document.getElementById('pokemon').
      innerHTML = `
        <h1>Pokemon Name: ${capitalize(pokemon.species.name)}</h1>
        <h2>Type: ${capitalize(pokemon.types[0].type.name) }</h2 >
        <h5>Height: ${addDecimal(pokemon.height)} m</h5>
        <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
        <img src = "${pokemon.sprites.front_default}" alt="${pokemon.species.name}">
      `
      }
    
    })
    .catch(err => console.log(err))
})








// document.getElementById('start-button').addEventListener('click', event => {
//   event.preventDefault()


//   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNum}`)
//     .then(res => {
//       const pokemon = res.data
//       console.log(pokemon)
//       if (pokemon.types[0].type.name) {

//       }
//       document.getElementById('pokemon').
//         innerHTML = `
//     <h1>Pokemon Name: ${capitalize(pokemon.species.name)}</h1>
//     <h2>Type: ${capitalize(pokemon.types[0].type.name)}, ${capitalize(pokemon.types[1].type.name)}</h2 >
//     <h5>Height: ${addDecimal(pokemon.height)} m</h5>
//     <h5>Weight: ${addDecimal(pokemon.weight)} kg</h5>
//     <img src = "${pokemon.sprites.front_default}" alt="${pokemon.species.name}">
//     `
//       console.log(pokemon.sprites.front_default)
//     })
//     .catch(err => console.log(err))
// })