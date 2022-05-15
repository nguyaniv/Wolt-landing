import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <h4>
          <span>Wolt</span> Delivery
        </h4>
      </div>

      <li>© All rights reserved by Wolt</li>
      <li>054-760-20-25</li>
      <li>
        <a href="#">
          <img src="/images/icons8-свернуть-32.png" alt="top" />
        </a>
      </li>
    </footer>
  );
}
