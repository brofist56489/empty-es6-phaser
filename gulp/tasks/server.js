var gulp = require('gulp'),
    browserSync = require('browser-sync');


gulp.task('server', function () {
    browserSync({
        port: process.env.PORT,
        host: process.env.IP,
        server: {
            baseDir: [
                '',
                paths['temp']
            ]
        }
    });
});
