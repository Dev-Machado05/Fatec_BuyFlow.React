import { useState, useEffect } from "react";
import './style.css';

export default function TestePoke() {
    const [pokemon, setpokemon] = useState([]);

    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => {
            let results = data.results;
            let promises = results.map(result => {
                return fetch(result.url).then(response => response.json());
            });
            return Promise.all(promises);
        })
        .then(pokemonData => {
            setpokemon(pokemonData);
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
    }, []);

    return (
        <div className="Poke-content">
            {pokemon.map((poke, index) => (
                <div key={index} className="poke-container">
                    <h2>{poke.name}</h2>
                    <div className="images-container">
                        <img src={poke.sprites.front_default} alt={poke.name} />
                        <img src={poke.sprites.front_shiny} alt={poke.name} />
                    </div>
                    <p>{poke.types[0].type.name}</p>
                    {/* <img src={poke.type[0].type.url} alt="pokemon type" /> */}
                </div>
            ))}
        </div>
    );
}
