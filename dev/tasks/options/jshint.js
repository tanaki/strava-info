
module.exports = { 
	gruntfile: {
		options: {
			jshintrc: '.jshintrc'
		},
		src: 'Gruntfile.js'
	},
	src: {
		options: {
			jshintrc: '.jshintrc'
		},
		src: ['dev/src/**/*.js']
	}
}