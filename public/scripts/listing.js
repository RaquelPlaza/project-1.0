define(['jquery', 'underscore', 'backbone'],function ($, _, Backbone) {

//Backbone Model
var Blog = Backbone.Model.extend({
	defaults: {
		author: '',
		title: '',
		url: ''
	}
})
//Backbone Collection
var Blogs = Backbone.Collection.extend({});

// instantiate two Blogs

var blog1 = new Blog({
	author: 'Michael',
	title: 'Michael\'s blog',
	url: 'http://michaelsblog.com'
});

var blog2 = new Blog({
	author: 'John',
	title : 'John\'s blog',
	url: 'http://johnsblog.com'
});

	    // {{#if data}}

	    // {{/if}}
});

