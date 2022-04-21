// POKEDEX PROJECT

const pokeContainer = document.querySelector('#container')
const numOfPokemon = 150

function createPokeCard(pokemon) {
  const pokeCard = document.createElement("section");
  pokeCard.classList.add ('pokemon')
  pokeContainer.append(pokeCard);

  pokeCard.innerHTML = `
  <div class="img-container">
    <img src=" ${pokemon.data.sprites.front_default}' alt="${pokemon.data.name}">
</div>
<h3 class="name">${pokemon.data.name.toUppercase()}</h3>`
}

async function getPokemonData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonData = await axios.get(url);
  createPokeCard(pokemonData);
}

async function getPokemon() {
  for( i =1; 1<= numOfPokemon; i++) {
    await getPokemonData(i);
  }
}
getPokemon();