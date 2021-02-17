import { connect } from 'react-redux';
import Pokedex from './components/Pokedex';
import { getPokemans } from './actions';

import styled from 'styled-components';

function App(props) {

  const catchPokemon = e => {
    e.preventDefault();
    props.getPokemans();
  }

  return (
    <StyledApp>
      <div className='header'>
        <h2>Welcome to the React/Redux Pokedex!</h2>
        <button onClick={catchPokemon}>Get Some Pokemon!</button>
      </div>
      {props.pokemans && <Pokedex pokemans={props.pokemans} />}
    </StyledApp>
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


const StyledApp = styled.div`
  width: 100%;
  margin-top: 7.5rem;
  background: rgb(238,21,21);

  .header{
    width: 100%;
    height: 7.5rem;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #3B4CCA;
    color: #FFFFFF;
    box-shadow: 1px 3px 2px rgba(33, 33, 33, 0.5);
  }
  
  .header h2{
    font-size: 2.4rem;
  }

  .header button{
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 25px;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(33, 33, 33, 0.5);
    transition: .3s;

    &:hover{
      background: rgb(238,21,21);
      color: #FFFFFF;
    }

    &:active{
      box-shadow: none;
    }
  }

`