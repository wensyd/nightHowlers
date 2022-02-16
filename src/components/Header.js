import React from "react";
import Loader from "./Loader";

const Header = () => {
  return (
    <>
      <Loader />
      <header className="fixed-top header-fullpage bordered-nav wow fadeInDown">

        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container text-nowrap bdr-nav px-0">
            <div className="d-flex mr-auto">
              <a
                className="navbar-brand rounded-bottom light-bg"
                href="home"
              >
                <img src="images/nh_logo3.png" alt="" />
              </a>
            </div>
           
            <button
              className="navbar-toggler x collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarCollapse"
              data-hover="dropdown"
              data-animations="slideInUp slideInUp slideInUp slideInUp"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="home">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="about">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="bloggrid"
                  >Blog
                    
                  </a>

                </li>
                <li className="nav-item">
                  <a
                    className="nav-link" target="_blank"
                    href="https://form.jotform.com/220336253835150"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
