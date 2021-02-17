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

    const name = pokeman.name;
    // eslint-disable-next-line no-unused-expressions
    const capName = name[0].toUpperCase() + name.substring(1);
    
    return(
        <Pokemon>
            <div>
                <h3>#{pokemon && pokemon.order} - {capName}</h3>
                {pokemon && <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>}
            </div>
            <div>
                <span>{
                    pokemon && pokemon.types.forEach(type => {
                        <p>{type.name}</p>
                    })
                }</span>
            </div>
        </Pokemon>
    )
}

const Pokemon = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
    border: 1px solid black;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* width: 50%; */
        border: 1px solid black;
        text-align: center;
    }

    h3{
        font-size: 1.4rem;
    }
`