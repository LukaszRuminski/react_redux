import React, {PropTypes} from 'react';
import LeftNav from './common/leftNav/LeftNav';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <LeftNav/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;


<body class="vertical-header grubson-design {{containerClass}}" >
<progess-bar></progess-bar>
<div class="wrapper">
  <navigation></navigation>
  <content ng-view></content>
  <script src="bundle.js" ></script>
</div>
</body>
