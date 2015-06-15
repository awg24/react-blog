var React = require("react");
var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var CommentModel = require("../scripts/models/CommentModel.js")
var CommentCollection = require("../scripts/collections/CommentCollection.js");
var commentCollection = new CommentCollection();
var CommentList = require("./CommentForm.js")
module.exports = React.createClass({

	getInitialState: function(){
		console.log(commentCollection);
		return {
			list: commentCollection
		}
	},
	render:function(){
		return (
				<div>
					<form onSubmit={this.addComment}>
						<input ref="addedComment" type="text"/>
						<button>Add Comment</button>
					</form>
					{this.state.list.models.map(function(commentModel){
						return (
							<CommentList text={commentModel.text}/>
							);
					})}
				</div>
			);
	}, 
	addComment:function(event){
		event.preventDefault();
		var commentModel = new CommentModel({
			text:this.refs.addedComment.getDOMNode().value
		})
		commentCollection.add(commentModel);
		console.log(commentCollection);
	}
	
});