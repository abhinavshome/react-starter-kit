var React = require('react');
var ReactDOM = require('react-dom');

var Welcome = React.createClass({
  render: function () {
    return <h1>Hello World</h1>
  }  
});

ReactDOM.render(<Welcome/>, document.getElementById('root'));