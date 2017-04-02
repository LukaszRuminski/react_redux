import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
const MenuItems = () => {
  const navElements = [
    {
      "id": 0,
      "text": "Home",
      "link": "home",
      "icon": "fa-home"
    },
    {
      "id": 1,
      "text": "O mnie",
      "link": "about",
      "icon": "fa-user"
    },
    {
      "id": 2,
      "text": "Oferta",
      "link": "offer",
      "icon": "fa-edit"
    },
    {
      "id": 3,
      "text": "Realizacje",
      "link": "portfolio",
      "icon": "fa-camera"
    },
    {
      "id": 4,
      "text": "Kontakt",
      "link": "contact",
      "icon": "fa-send"
    }
  ];
  function renderMenuItems(items) {
    if (items.length > 0) {
      return items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ));
    }
    else return [];
  }

  const MenuItem = ({item}) => {
    return (
      <li className="multi-level-menu">
      <item key={item.id}>
        <a href={item.link}>{item.title}</a>
        <p>{item.description}</p>
      </item>
    );
  };

  const menuItems = renderMenuItems(navElements);

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
              {menuItems}
              {/*<a to="{{::navigation.link}}"><i className="fa {{::navigation.icon}}"></i>{{navigationtext}}</a>*/}
              {/*<ul className="sub-menu">*/}
                {/*<li>*/}
                  {/*<a href="{{::sub.link}}"><i className="fa {{::sub.icon}}"></i>{{subtext}}</a>*/}
                {/*</li>*/}
              {/*</ul>*/}
          </ul>
          <div className="push-area">
            <button id="showPushMenu"><i className="fa fa-bars"></i></button>
          </div>
          <div id="mobile-menu" className="dl-menuwrapper">
            <button className="dl-trigger"><i className="fa fa-bars"></i></button>
            <ul className="dl-menu">
              <li>
                <a href="{{::navigation.link}}">navigationtext</a>
                <ul className="dl-submenu">
                  <li>
                    <a href="{{::sub.link}}">subtext</a>
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


export default MenuItems;
