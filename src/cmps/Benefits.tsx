import React from 'react';

type Props = {};

export default function Benefits({}: Props) {
  return (
    <div className="benefits">
      <div className="benefits__container">
        <h2>Benefits of Wolt Delivery</h2>
        <div className="benefits--items">
          <div className="benefits--item">
            <img
              src={process.env.PUBLIC_URL + '/images/icons8-car-64.png'}
              width={60}
              height={50}
              alt="car"
            />
            <h4>Fast delivery</h4>
            <p>
              If delivery takes more than 50 min, you do not need to pay for the
              order.
            </p>
          </div>
          <div className="benefits--item">
            <img
              src={process.env.PUBLIC_URL + '/images/icons8-скидка-64.png'}
              width={52}
              height={50}
              alt="weel"
            />
            <h4>Discounts</h4>
            <p>
              Regular bonuses and discounts from 25% to 50% for regular
              customers.
            </p>
          </div>
          <div className="benefits--item">
            <img
              src={process.env.PUBLIC_URL + '/images/icons8-сердце-64.png'}
              width={52}
              height={50}
              alt="weel"
            />{' '}
            <h4>Friendly service</h4>
            <p>
              Our employees are kind people with whom it is pleasant to
              communicate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
