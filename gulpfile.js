const gulp = require('gulp');
const path = require('path');
const del = require('del');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tscompile.json');
const less = require('gulp-less');
const amd = require('gulp-amd-wrap').amdHook;
const httpPush = require('gulp-deploy-http-push').httpPush;
const uglify = require('gulp-uglify');
const escapeString = require('gulp-html-inline-escape').escapeString;
const ts2php = require('gulp-ts2php').ts2php;
const ts2phpConfig = require('./ts2phprc');

gulp.task('build:clean', function () {
    return del(['dist/**/*']);
});

gulp.task('build:css', function () {
    return gulp.src(['src/**/*.less'])
        .pipe(less())
        .pipe(escapeString('style'))
        .pipe(gulp.dest('dist'));
});

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
        .pipe(abs({
            '@molecule/toptip/main': '@molecule/toptip'
        }))
        .pipe(uglify())
        .pipe(escapeString('script'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build:tpl', function () {
    return gulp.src(['src/**/*.tpl'])
        .pipe(gulp.dest('dist'));
});

gulp.task('build:php', function () {
    return gulp.src(['src/index.ts'])
        .pipe(ts2php(ts2phpConfig))
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function () {
    // 测试环境的url
    const HOST = require('./dev.config').receiver;
    return gulp.src(['dist/**'])
        .pipe(httpPush([
            {
                host: HOST,
                match: '/**/*',
                to: '/home/work/search/view-ui/template/molecules/{{projectName}}'
            }
        ]));
});

gulp.task('watch', function () {
    gulp.watch('./src/**', gulp.series('default', 'deploy'));
});

gulp.task('default', gulp.series('build:clean', gulp.parallel('build:css', 'build:ts', 'build:tpl', 'build:php')));
