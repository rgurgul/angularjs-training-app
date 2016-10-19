var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlreplace = require('gulp-html-replace'),
    inject = require('gulp-inject');

gulp
    .task('minify', function () {
        gulp.src([
                'app/src/names.js',
                'app/src/**/*.js',
                '!app/**/*spec.js'
            ])
            .pipe(uglify({mangle: false}))
            .pipe(concat('app.js'))
            .pipe(gulp.dest('app/build'))
    });

gulp
    .task('index', function () {
        gulp.src('app/index.html')
            .pipe(htmlreplace({
                'js': 'build/app.js?' + +new Date()
            }))
            .pipe(gulp.dest('app'));
    });

gulp
    .task('inject', function () {
        var target = gulp.src('app/index.html');
        // It's not necessary to read the files (will speed up things), we're only after their paths:
        var sources = gulp.src([
            'app/src/**/*.js',
            '!app/**/*spec.js'], {read: false});

        return target.pipe(inject(sources))
            .pipe(gulp.dest('app'));
    });

gulp
    .task('watch-files', function () {
        gulp.watch(['app/src/**/*.js'], function (evt) {
            if (/(added|deleted)/.test(evt.type)) {
                console.log(evt.type);
                gulp.run('inject');
            }
        })
    });
