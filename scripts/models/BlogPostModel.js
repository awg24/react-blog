var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		title: null,
		text: null,
		category: null,
		userId: 1,
		createdAt: new Date()
	}
});