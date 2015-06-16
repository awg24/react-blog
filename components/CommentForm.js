var React = require("react");
var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var CommentModel = require("../scripts/models/CommentModel.js")
var CommentCollection = require("../scripts/collections/CommentCollection.js");
var comments = new CommentCollection([{text: "rawr"},{text: "things"},{text:"more things"}]);
var CommentList = require("./CommentList.js")
var people = {}
module.exports = React.createClass({

	render:function(){
		console.log(comments)
		return (
				<div>
					<form onSubmit={this.addComment}>
						<input ref="addedComment" type="text"/>
						<button>Add Comment</button>
					</form>
					<CommentList allComments = {comments}/>
				</div>
			);
	}, 
	addComment:function(event){
		event.preventDefault();
		var commentModel = new CommentModel({
			text:this.refs.addedComment.getDOMNode().value
		})
		CommentCollection.add(commentModel);
	}
	
});

