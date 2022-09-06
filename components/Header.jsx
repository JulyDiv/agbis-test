import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-info">
              <span className="header-phone">+(373) 22 83-87-87</span>
              <div className="header-icon">
                <Link href="#">
                  <img className="icon" alt="instagram" src="img/insta.svg" />
                </Link>
                <Link href="#">
                  <img className="icon" alt="facebook" src="img/fb.svg" />
                </Link>
                <Link href="#">
                  <img className="icon" alt="viber" src="img/vb.svg" />
                </Link>
                <Link href="#">
                  <img className="icon" alt="whats app" src="img/wa.svg" />
                </Link>
              </div>
            </div>
            <div className="header-lang">
              <span className="lang">RU</span>
              <button>
                <img alt="arrow-down" src="img/arrow-down.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container">
          <div className="navbar-wrapper">
            <button className="navbar-button">
              <div className="navbar-button-line"></div>
              <div className="navbar-button-line"></div>
            </button>
            <div className="navbar-logo">
              <span className="logo">YOUR LOGO</span>
              <span className="logo-span">ADDITIONAL TEXT</span>
            </div>
            <button className="navbar-search">
              <img alt="search" src="img/search.svg" />
              Прайс-лист
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
