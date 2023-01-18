const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";


const pokeList$$ = document.querySelector('.list') // Para pintar los pokemon en la seccion
const pokeInput$$ = document.querySelector('.BuscadorPokemon') // Para que active el buscador


const pokemonPintados = []; // Variable para guardar los Pokemon

// Bucle para seleccionar 151 pokemons

const init = async () => {
  for (i = 1; i < 152; i++) {
    const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const response = await pokeAPI.json();
    pokemonPintados.push(response);
  }

console.log(pokemonPintados);

// Mapeo para coger los datos de la API

  const pokeMap = pokemonPintados.map((pokemon) => ({
    pokeName: pokemon.name,
    pokeNumber: pokemon.id,
    pokeImage: pokemon.sprites.front_default,
    pokeType: pokemon.types.map((type) => type.type.name).join(', '),

  }));

  Print(pokeMap);

};

// Const para pintar los datos de esa array

const Print = (array) => {
  pokeList$$.innerHTML = ``
  for (i = 0; i < 151; i++) {
    const poke = array[i];

// Creando los elementos

        const fichapokemon$$ = document.createElement("div");
        const titulo$$ = document.createElement("h2");
        const numero$$ = document.createElement("p");
        const image$$ = document.createElement("img");
        const tipo$$ = document.createElement("p");


        //Info de los elementos

        titulo$$.textContent = poke.pokeName;
        numero$$.textContent = "Número " + poke.pokeNumber;
        image$$.src = poke.pokeImage;
        tipo$$.textContent = "Tipo: " + poke.pokeType;


        fichapokemon$$.appendChild(titulo$$);
        fichapokemon$$.appendChild(numero$$);
        fichapokemon$$.appendChild(image$$);
        fichapokemon$$.appendChild(tipo$$);

            

        // Añadiendo las clases

        titulo$$.setAttribute('id', 'poke__nombre')
        numero$$.setAttribute('id', 'poke__num')
        tipo$$.setAttribute('id', 'poke__tipo')
        pokeList$$.appendChild(fichapokemon$$)
        fichapokemon$$.classList.add('poke__div')
  }
};


// Lo que aparece en la busqueda de Pokemones

const pokePaint = (array) => {

//Mapeo de los atributos

const pokeMap = array.map((pokemon) => ({
      pokeName: pokemon.name,
      pokeNumber: pokemon.id,
      pokeType: pokemon.types.map((type) => type.type.name).join(', '),
      pokeImage: pokemon.sprites.front_default,
    }));
  
    pokeList$$.innerHTML = ``
  
    for (const poke of pokeMap) {

    // Crear los elementos

    const fichapokemon$$ = document.createElement("div");
    const titulo$$ = document.createElement("h2");
    const numero$$ = document.createElement("p");
    const image$$ = document.createElement("img");
    const tipo$$ = document.createElement("p");
  
  
    //Info de los elementos

    titulo$$.textContent = poke.pokeName;
    numero$$.textContent = "Número " + poke.pokeNumber;
    image$$.src = poke.pokeImage;
    tipo$$.textContent = "Tipo: " + poke.pokeType;

    fichapokemon$$.appendChild(titulo$$);
    fichapokemon$$.appendChild(numero$$);
    fichapokemon$$.appendChild(image$$);
    fichapokemon$$.appendChild(tipo$$);
    
    // Añadiendo las clases

    titulo$$.setAttribute('id', 'poke__nombre')
    numero$$.setAttribute('id', 'poke__num')
    tipo$$.setAttribute('id', 'poke__tipo')
    pokeList$$.appendChild(fichapokemon$$)
    fichapokemon$$.classList.add('poke__div')
  
    }
  };
    
// Buscador para filtrar los pokemon
  
  const buscar = () => {
    const pokeFilter = [];
    for (const ficha of pokemonPintados){
      if (ficha.name.toLowerCase().includes(pokeInput$$.value.toLowerCase().trim())) {
        pokeFilter.push(ficha)
      }
      
    }
    pokePaint(pokeFilter)
    }
  
  init();
  
    pokeInput$$.addEventListener('input', () => buscar());