var React = require("react");
var BlogModel = require("../models/BlogModel.js")

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<form onSubmit={this.submitPost}>
					<input ref="blogTitle" type="text" placeholder="Enter a title"/><br/>
					<textarea ref="blogBody"placeholder="Enter Text"></textarea><br/>
					<select ref="categorySelected">Category
						<option>thing1</option>
						<option>thing2</option>
					</select><br/>
					<button>Post</button>
				</form>
			</div>
		);
	},
	submitPost: function(event){
		event.preventDefault();
		var blog = new BlogModel({
			title: this.refs.blogTitle.getDOMNode().value,
			text: this.refs.blogBody.getDOMNode().value,
			category: this.refs.categorySelected.getDOMNode().value,
			userId: 1,
			createdAt: new Date()
		});
		console.log(blog);
	}
});