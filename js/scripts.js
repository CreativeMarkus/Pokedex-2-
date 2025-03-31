fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(pokemon => {
      pokemonRepository.add({
        name: pokemon.name,
        height: 0,
        types: [] 
      });
    });
    pokemonRepository.displayPokemons(); 
  })
  .catch(error => console.error('Error fetching Pokémon:', error));
let pokemonRepository = (function () {
  let pokemonList = [ 
    { 
      name: "Bulbasaur",
      height: 7,
      types: ["grass", "poison"]
    },
    {
      name: "Charmander",
      height: 8,
      types: ["fire"]
    },
    {
      name: "Squirtle",
      height: 5,
      types: ["water"]
    },
    {
      name: "Jigglypuff",
      height: 0.5,
      types: ["Fairy"]
    },
    {
      name: "Mewtwo",
      height: 2.0,
      types: ["Psychic"]
    },
  ];

  function getAll() {
    return pokemonList; 
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon &&
      Array.isArray(pokemon.types) 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.error("Invalid Pokémon data"); 
    }
  }

  
  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');
    
    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokemon.name; 
    
    button.classList.add('pokemon-button');
    
    listItem.appendChild(button);

    pokemonListElement.appendChild(listItem);

    addEventListenerToButton(button, pokemon);
  }

  
  function addEventListenerToButton(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon); 
    });
  }

  
  function showDetails(pokemon) {
    console.log(pokemon); 
  }

 
  function displayPokemons() {
    getAll().forEach(function (pokemon) {
      addListItem(pokemon); 
    });
  }

  
  return {
    getAll: getAll,
    add: add,
    displayPokemons: displayPokemons,
    addListItem: addListItem, 
    showDetails: showDetails 
  };

})(); 

pokemonRepository.displayPokemons();