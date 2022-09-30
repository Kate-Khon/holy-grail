import React, { useState } from 'react';
import './App.css';
import cat from './images/cats.jpg';
import chubaka from './images/chubaka.jpg';
import planets from'./images/planets.jpg';
import dogs from './images/dogs.jpg';
import dyno from './images/dyno.jpg';


const pictures = [
  cat,
  chubaka,
  planets,
  dogs,
  dyno,
];

const buttonColors = ['yellow', 'red', 'blue', 'green'];

const mixPictures = (): string[] => {
  const numbers = [0, 1, 2, 3, 4];
  let newPictures = [];

  for (let i = 0; i < 5; i++) {
    const randIndex = Math.floor(Math.random() * numbers.length);

    newPictures.push(pictures[numbers.splice(randIndex, 1)[0]]);
  }

  return newPictures;
}

function App() {
  const [currentPictures, setCurrentPictures] = useState<string[]>(pictures);
  const [buttonColor, setButtonColor] = useState<string>('green');

  const changePicture = (): void => {
    let newButtonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

    while (newButtonColor === buttonColor) {
      newButtonColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];
    }
    
    setCurrentPictures(mixPictures);
    setButtonColor(newButtonColor);
  }

  document.documentElement.style
    .setProperty('--header', pictures[0]);

  return (
    <div className="page">
      <>
      <header className='header' style={{ backgroundImage: `url(${currentPictures[0]})`}}>
      </header>
      <main className='main'>
        <aside className='asideLeft' style={{ backgroundImage: `url(${currentPictures[1]})`}}></aside>
        <div className='mainBody' style={{ backgroundImage: `url(${currentPictures[2]})`}}></div>
        <aside className='asideRight' style={{ backgroundImage: `url(${currentPictures[3]})`}}></aside>
        <button 
          className='button' 
          onClick={changePicture}
          style={{ backgroundColor: buttonColor }}
        >
          Change pictures
        </button>
      </main>
      <footer className='footer' style={{ backgroundImage: `url(${currentPictures[4]})`}}></footer>
      </>
    </div>
  );
}

export default App;
