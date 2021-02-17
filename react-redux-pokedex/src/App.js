import './App.css';
import { connect } from 'react-redux';
import Pokedex from './components/Pokedex';
import { getPokemans } from './actions';

function App(props) {

  const catchPokemon = e => {
    e.preventDefault();
    props.getPokemans();
  }

  return (
    <div className="App">
      <div className='header'>
        <h2>Welcome to the React/Redux Pokedex!</h2>
        <button onClick={catchPokemon}>Get Some Pokemon!</button>
      </div>
      {props.pokemans && <Pokedex pokemans={props.pokemans} />}
    </div>
  );
}

const mapStateToProps = state => {
  return{
    pokemans: state.pokemans,
    pokeman: state.pokeman,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { getPokemans })(App);
