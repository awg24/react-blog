var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<form onSubmit={this.login}>
					Username: <input ref="username"type="text"/><br/>
					Password: <input ref="password" type="text"/><br/>
					<button>Log In</button>
				</form>
			</div>
		);
	},
	login: function(event){
		event.preventDefault();
		if(!this.refs.username.getDOMNode().value || !this.refs.password.getDOMNode().value){
			console.log("it's empty..")
		} else {
			console.log("worked")
		}
	}
});