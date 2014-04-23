
module.exports = { 
	dev: {
		src: 'dev/sass/style.scss',
		dest: 'build/css/style.css',
		options: {
			style: 'expand',
			compass: true
		}
	},
	deploy: {
		src: 'dev/sass/style.scss',
		dest: 'build/css/style.css',
		options: {
			compass: true
		}
	}
}