
module.exports = { 
  dist: {
    src: '<%= concat.dist.dest %>',
    dest: 'build/js/<%= pkg.namespace %>.min.js'
  }
}