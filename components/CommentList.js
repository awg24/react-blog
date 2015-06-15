var React = require("react");
var CommentCollection = require("../scripts/collections/CommentCollection.js");
var commentCollection = new CommentCollection();

module.exports = React.createClass({
	
	render: function(){
		return (
			<div>{this.props.text}</div>
			);
	}
});