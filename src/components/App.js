import React, {PropTypes} from 'react';
import LeftNav from './common/leftNav/LeftNav';

class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <LeftNav/>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
