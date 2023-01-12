import { relative } from "path";
import React from "react";
import Navbar from "../Navbar/Navbar";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="header">
      <div className="header__container">
        <Navbar />
        <div className="header__context">
          <div className="header__left">
            <div className="text">
              <h2>Food delivery in 50 min around the city!</h2>

              <p>
                Fast delivery from your favorite restaurants. Order food through
                the Wolt and enjoy the best deals of the month haha121!
              </p>

              <button>Get started</button>
            </div>
          </div>
          <div className="header__right">
            <div className="full-circle">
              <div className="full-circle-inner"></div>
            </div>
            <div className="empty-circle">
              <img
                className="burger"
                src={process.env.PUBLIC_URL + "/images/Burger1.png"}
                width="580"
                height={"480"}
                alt="burger"
              />
              <img
                className="cola"
                src={process.env.PUBLIC_URL + "/images/Cola.png"}
                width={93}
                height={93}
                alt="cola"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
