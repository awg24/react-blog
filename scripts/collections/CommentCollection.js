var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

var commentModel = require("../models/CommentModel.js")

module.exports = Backbone.Collection.extend({
	model: commentModel
});