import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pokecard(props){
    const [pokemon, setPokemon] = useState(null);

    const {pokeman} = props;

    useEffect(() => {
        axios.get(`${pokeman.url}`)
            .then(res => {
                setPokemon(res.data)
            })
    }, [])

    
    return(
        <div>
            <h3>{pokeman.name}</h3>
            {pokemon && <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>}
        </div>
    )
}