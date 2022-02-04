import React from 'react';
import 'open-props/style';
import 'open-props/normalize';
import './style.css';

export default function App() {
  return (
    <div>
      <header>
        <section class="hero">
          <h1 class="hero-message">
            <div>Hero layout with</div>
            <div>Open Props</div>
          </h1>
          <p class="under-hero">
            Lorem ipsum dolor sit amet consectetu adipisicing elit. Nemo in
            doloremque quam, voluptatibus eum voluptatum.
          </p>
          <div class="button-list">
            <button class="primary">Get started</button>
            <button>Live demo</button>
          </div>
        </section>
        <picture class="promo-art">
          <img
            src="https://doodleipsum.com/700x700/outline?bg=3b5bdb"
            height="800"
            width="800"
            alt="a random doodle"
          />
        </picture>
      </header>
    </div>
  );
}
