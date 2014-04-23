
module.exports = { 
	dist: {
		src: [
			'build/js/App.js',
			'build/js/controller/**/*.js',
			'build/js/**/*.js'
		],
		dest: 'build/js/<%= pkg.namespace %>.js'
	}
}