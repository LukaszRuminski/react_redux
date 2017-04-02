import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
const navElements = [
  {
    "text": "Home",
    "link": "home",
    "icon": "fa-home"
  },
  {
    "text": "O mnie",
    "link": "about",
    "icon": "fa-user"
  },
  {
    "text": "Oferta",
    "link": "offer",
    "icon": "fa-edit"
  },
  {
    "text": "Realizacje",
    "link": "portfolio",
    "icon": "fa-camera"
  },
  {
    "text": "Kontakt",
    "link": "contact",
    "icon": "fa-send"
  }
];

const LeftNav = () => {
  for ()
  return (
    // <nav>
    //   <IndexLink to="/" activeClassName="active">Home</IndexLink>
    //   {" | "}
    //   <Link to="/about" activeClassName="active">About</Link>
    //   {" | "}
    //   <Link to="/offer" activeClassName="active">Offer</Link>
    //   {" | "}
    //   <Link to="/portfolio" activeClassName="active">Portfolio</Link>
    //   {" | "}
    //   <Link to="/contact" activeClassName="active">Contact</Link>
    // </nav>

    <header className="dark">
      <div className="nav-container cbp-spmenu-left" id="ver-menu">
        <div className="inner">
          <a href="#" className="logo">
            <img src="./{{::nav.app.assets.gd_menu_logo}}"/>
          </a>
          <ul className="main-menu">
            for
            <li className="multi-level-menu">
              <a to="{{::navigation.link}}"><i className="fa {{::navigation.icon}}"></i>{{navigationtext}}</a>
              <ul className="sub-menu">
                <li>
                  <a href="{{::sub.link}}"><i className="fa {{::sub.icon}}"></i>{{subtext}}</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="push-area">
            <button id="showPushMenu"><i className="fa fa-bars"></i> </button>
          </div>
          <div id="mobile-menu" className="dl-menuwrapper">
            <button className="dl-trigger"><i className="fa fa-bars"></i></button>
            <ul className="dl-menu">
              <li>
                <a href="{{::navigation.link}}">{{navigationtext}}</a>
                <ul className="dl-submenu">
                  <li>
                    <a href="{{::sub.link}}">{{subtext}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <script src="../../assets/js/show-menu.js"></script>
    </header>
  );
};

export default LeftNav;
