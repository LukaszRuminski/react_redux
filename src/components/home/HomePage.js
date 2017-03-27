/**
 * Created by grubson on 26.03.2017.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home page for react</h1>
        <p>React, React-Router, Redux, ES6</p>
        <Link to="about" className="btn btn-primary btn-lg">Click to go to AboutPage</Link>
      </div>
    );
  }
}

export default HomePage;
