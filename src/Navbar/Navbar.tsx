import React from 'react';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h4>
          <span>Wolt</span> Delivery
        </h4>
      </div>
      <div className="navbar__links">
        <a href="/">Home </a>
        <a href="/">Restaurants</a>
        <a href="/">Food</a>
        <a href="/">Search</a>

        <a style={{ marginLeft: '2rem' }} href="tel:054-760-20-25">
          {' '}
          054-760-20-25
        </a>
        <div className="link--login">
          <a href="/"> log In </a>
        </div>
      </div>
    </div>
  );
}
