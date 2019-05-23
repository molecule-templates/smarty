const gulp = require('gulp')
const path = require('path')
const del = require('del')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tscompile.json')
const less = require('gulp-less')
const amd = require('gulp-amd-wrap').amdHook
const httpPush = require('gulp-deploy-http-push').httpPush
const toHtml = require('gulp-parse-to-html').parseToHtml

gulp.task('build:clean', function () {
  return del(['dist/**/*', '!dist/index.php'])
})

gulp.task('build:css', function () {
  return gulp.src(['src/**/*.less'])
    .pipe(less())
    .pipe(toHtml({
      type: 'style'
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('build:ts', function () {
  return gulp.src(['src/static/**/*.ts'], {
    base: './src'
  })
    .pipe(tsProject())
    .pipe(amd({
      baseUrl: path.resolve('./src/static/script/'),
      prefix: '@molecule/{{projectName}}',
      // 不参与amd-hook分析的文件
      exlude: ['/dist/**']
    }))
    .pipe(toHtml({
      type: 'script'
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('build:tpl', function () {
  return gulp.src(['src/**/*.tpl'])
    .pipe(gulp.dest('dist'))
})

gulp.task('deploy', function () {
  // 测试环境的url
  const HOST = require('./dev.config').receiver
  return gulp.src(['dist/**'])
    .pipe(httpPush([
      {
        host: HOST,
        match: '/**/*',
        to: '/home/work/odp/template/molecules/{{projectName}}'
      }
    ]))
})

gulp.task('watch', function () {
  gulp.watch('./src/**', gulp.series('default', 'deploy'))
})

gulp.task('default', gulp.series('build:clean', gulp.parallel('build:css', 'build:ts', 'build:tpl')))
