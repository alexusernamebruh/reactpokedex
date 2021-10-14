import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const imagePrefix = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

export default function DetailsPage() {
  const [pokemon, setPokemon] = useState(null);
  const history = useHistory();
  const name = history.location.pathname.split('/')[2]; // /pokemon/pikachu

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      });
  }, [name]);

  const zeroFilled = pokemon && ('0000' + pokemon.id).slice(-3);

  return (
    <div className='pokemon-page'>
<div className='sprite-container'>
    <div className='circle'>
        <img className='sprite' src={`${imagePrefix}${zeroFilled}.png`} alt='why no load' height='500'>

        </img>
        <div className='title-container'>
            <span className="pokemon-id">#{zeroFilled}</span>
            <h1>{name}</h1>
            <p className='type'>Type:{' '}{pokemon.types.map((v,1)=>(
                {pokemon.types.length -1 ? null: ', '}</p>
        </div>
    </div>
</div>


    </div>
  );
}