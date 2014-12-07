/*
  gulp/tasks/browserify.js handles js recompiling with watchify
*/

var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('watch', ['setWatch', 'build'], function () {
  if(global.isWatching) {
    gulp.watch('../../static/templates/**/*.{handlebars, hbs}', ['templates', server.notify]);
  }
});
