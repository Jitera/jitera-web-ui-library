const gulp = require('gulp')
const less = require('gulp-less')
const cleanCSS = require('gulp-clean-css')
const NpmImportPlugin = require('less-plugin-npm-import')

gulp.task('style', function () {
  return gulp
    .src('src/styles/less/*.less')
    .pipe(
      less({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({ prefix: '~' })]
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'))
})
