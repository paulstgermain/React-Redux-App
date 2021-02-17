import Pokecard from './Pokecard';

function Pokedex(props){


    return(
        <div>
            <h1>Hello from Pokedex.js</h1>
            {props.pokemans.map(pokeman => {
                return <Pokecard key={pokeman.name} pokeman={pokeman} />
            })}
        </div>
    );
};

export default Pokedex;