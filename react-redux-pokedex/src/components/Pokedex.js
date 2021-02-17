import Pokecard from './Pokecard';

function Pokedex(props){


    return(
        <div>
            {props.pokemans.map(pokeman => {
                return <Pokecard key={pokeman.name} pokeman={pokeman} />
            })}
        </div>
    );
};

export default Pokedex;