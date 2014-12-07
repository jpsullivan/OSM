var gulp        = require('gulp');
var bytediff    = require('gulp-bytediff');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var handlebars  = require('gulp-handlebars');
var declare     = require('gulp-declare');
var wrap        = require('gulp-wrap');

var paths = {
  templates:  ['../../static/templates/**/*.hbs'],
  jsCompiled: '../../compiled/js',
};

// JST's (should always be minified)
gulp.task('templates', function () {
  return gulp.src(paths.templates)
  .pipe(handlebars({
    // outputType: 'bare',
    // wrapped: true,
    compilerOptions: {}
  }))
  // Wrap each template function in a call to Handlebars.template
  .pipe(wrap('Handlebars.template(<%= contents %>)'))
  .pipe(declare({
    namespace: 'JST',
    processName: function (filePath) {
      var lookup = 'QuoteFlow\\';
      filePath = filePath.substring((filePath.indexOf(lookup) + lookup.length), filePath.length)
      filePath = filePath.replace(/\\/g, "/"); // convert fwd-slash to backslash
      filePath = filePath.replace('QuoteFlow/Content/views/', '');
      filePath = filePath.replace('.js', '');
      return filePath;
    }
  }))
  .pipe(concat('templates.min.js'))
  .pipe(bytediff.start())
  .pipe(uglify())
  .pipe(bytediff.stop())
  .pipe(gulp.dest(paths.jsCompiled))
});
