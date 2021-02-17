import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
        <Pokemon>
            <h3>{pokeman.name}</h3>
            {pokemon && <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>}
        </Pokemon>
    )
}

const Pokemon = styled.div`
    width: 50%;
    border: 1px solid black;
`