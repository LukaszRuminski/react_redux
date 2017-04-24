import React, {PropTypes} from 'react';
import LeftNav from './common/leftNav/LeftNav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: {value: false, activeClass: ''}
    };

  }
  // callBackParent(toggled){
  //   this.onToggleMenu(toggled);
  // }
  onToggleMenu (newState) {
    this.setState({toggled: newState});
  }
  render() {
    console.log(this.state.toggled);
    return (
      <div id="wrapper" className={this.state.toggled.activeClass}>
        <LeftNav
          toggleState={this.state.toggled}
          callBackParent={this.onToggleMenu}/>
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
