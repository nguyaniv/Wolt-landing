import React from 'react';

type Props = {};

export default function OrderOnMobile({}: Props) {
  return (
    <div className="order-on-mobile">
      <div className="order-on-mobile__container">
        <div className="order-on-mobile--left">
          <h2>Make an order in the mobile app</h2>

          <ul className="order-on-mobile--list">
            <li>
              <img src="/images/icons8-иллюстратор-32.png" alt="paint" />{' '}
              Intuitive app with beautiful design
            </li>
            <li>
              {' '}
              <img src="/images/icons8-маркер-32.png" alt="paint" /> Track
              courier movement
            </li>
            <li>
              {' '}
              <img src="/images/icons8-подарок-32.png" alt="paint" />
              Accumulate bonus from each order
            </li>
            <li>
              {' '}
              <img src="/images/icons8-популярная-тема-32.png" alt="paint" />
              Leave reviews
            </li>
          </ul>

          <button>Read more</button>
        </div>
        <div className="order-on-mobile--right">
          <img src="/images/20-layers.png" alt="variants" />
        </div>
      </div>
    </div>
  );
}
