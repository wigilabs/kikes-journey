import React from 'react';
import logo from './logo.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import './App.css';

function App() {
  return (
    <div class="App">
      <header class="header">
        <div class="header-inner">
          <img src={logo} class="logo"/>
          <h1>El camino del huevo</h1>
        </div>
      </header>
      <section class="gray">
      </section>

      <section class="content">

        <div class="table">
          <div class="column"></div>
          <div class="column">
            <p class="text color">Todos los depósitos</p>
          </div>
          <div class="column">
            <p class="text">Bogotá</p>
          </div>
          <div class="column">
            <p class="text">Medellín</p>
          </div>
        </div>

        <div class="table">
          <div class="column">
            <img src={image1} class="image"/>
            <img src={image2} class="image"/>
            <img src={image3} class="image"/>
            <img src={image4} class="image"/>
          </div>
          <div class="column">
            <div class="box">
              hello
            </div>
            <div class="box">
              hello
            </div>
            <div class="box">
              hello
            </div>
            <div class="box">
              hello
            </div>
          </div>
          <div class="column">
            <div class="box">
              hello
            </div>
          </div>
          <div class="column">
            <div class="box">
              hello
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
