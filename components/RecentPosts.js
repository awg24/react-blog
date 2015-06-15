var React = require("react");
var CommentCollection = require("../scripts/collections/CommentCollection.js");
var commentCollection = new CommentCollection();

module.exports = React.createClass({
	getInitalState: function(){
		return (
			commentCollection.length
			);
	},
	render: function(){
		return (
			<div>
				{this.state};
			</div>
		);
	}
});