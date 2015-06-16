var React = require("react");
var CommentForm = require("../components/CommentForm.js");
var BlogPost = require("../components/BlogPost.js");


React.render(
			<div>
				<CommentForm /> 
				<BlogPost />
			</div>, 
			document.getElementById("container"));
