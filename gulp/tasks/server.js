/**
 * Starts the expressjs server.
 */

var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
  server.run({
    file: 'app.js'
  });
});
