var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
var config = require('./config.json');

gulp.task('tinypng', function () {
    gulp.src(config.path.src + '.{'+config.extensions+'}')
        .pipe(tinypng({
            key: config.tingpng.key,
            sigFile: './.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest(config.path.dest));
});