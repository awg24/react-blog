var React = require("react");
var CommentCollection = require("../scripts/collections/CommentCollection.js");

module.exports = React.createClass({
	
	render: function(){
		var commentElements = this.props.allComments.map(function(commentModel) { 
			return  <div key={commentModel.cid}> {commentModel.get('text')} </div>		
		});

		return (<div> {commentElements} </div>);
					
	}
});