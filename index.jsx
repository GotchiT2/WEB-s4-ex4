import React, { useEffect, useState } from 'react';
import './ex4.css';
import Superhero from './Superhero';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  const sh = superheroes
    .filter((s) => s.biography.publisher === 'Marvel Comics')
    .filter((s) => s.powerstats.power > 99)
    .filter((s) => s.appearance.hairColor === 'No Hair');

  function mapping(selection) {
    // eslint-disable-next-line max-len
    const r = selection.map((s) => <Superhero id={s.id} name={s.name} publisher={s.biography.publisher} img={s.images.xs} />);
    return r;
  }
  return (
    <table>
      <tbody>{mapping(sh)}</tbody>
    </table>
  );
};
