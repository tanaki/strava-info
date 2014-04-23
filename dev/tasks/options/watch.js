
module.exports = { 
	gruntfile: {
		files: '<%= jshint.gruntfile.src %>',
		tasks: ['jshint:gruntfile']
	},
	test: {
		files: ['build/js/**/*.js', 'dev/sass/**/*.scss'],
		tasks: 'default'
	}
}