var React = require('react');
var ReactDOM = require('react-dom');
var store = require('./store');
var TodoForm = require('./todo-form');
var TodoList = require('./todo-list');

var TodoApp = React.createClass({
	render: function () {
		return <div>
			<TodoForm />
			<TodoList todos={this.props.todos} />
		</div>
	}
});

var render = function () {
	ReactDOM.render(<TodoApp todos={store.getState()}/>, document.getElementById('root'));
};
render();
store.subscribe(render);