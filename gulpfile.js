const gulp = require('gulp')
const less = require('gulp-less')
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
    .pipe(gulp.dest('./dist'))
})
