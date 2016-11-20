let path = require('path'),
	dest = path.resolve(__dirname, '../dest'),
	src = path.resolve(__dirname, '../es6')
module.exports = function(grunt) {

	grunt.initConfig({
		
		babel : {
			options: {
                sourceMap: false,
                presets: ['../yii-gulp/node_modules/babel-preset-latest'],
                babelrc: true
            },
            dist: {
                expand: true,
                ext: '.js',
                cwd: src,
                src: ['**/*.js'],
                dest
            }
		}

	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.registerTask('default', ['babel']);
}