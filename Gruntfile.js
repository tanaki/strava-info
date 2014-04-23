'use strict';

function loadConfig(path) {
  var glob = require('glob');
  var object = {};
  var key;
 
  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });
 
  return object;
}

module.exports = function(grunt) {

  var configOptions = {};
  configOptions.pkg = grunt.file.readJSON('package.json');

  grunt.util._.extend(configOptions, loadConfig('./dev/tasks/options/'));
  grunt.initConfig(configOptions);

  grunt.loadTasks('dev/tasks');
  grunt.registerTask('default', ['sass:dev']);
  //grunt.registerTask('default', ['sass:dev', 'jshint', 'concat']);
  grunt.registerTask('deploy', ['sass:deploy', 'jshint', 'concat', 'uglify']);

  require('load-grunt-tasks')(grunt);
};
