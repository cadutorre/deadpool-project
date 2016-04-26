var gulp = require('gulp'),
    del = require('del'),
    runSeq = require('run-sequence');

gulp.task('clean', function(){
    return del('dist/frontend/**/*', {force:true});
});

gulp.task('copy:vendor', function(){
    return gulp.src([
            "node_modules/es6-shim/es6-shim.min.js",
            "node_modules/systemjs/dist/system-polyfills.js",
            "node_modules/angular2/bundles/angular2-polyfills.js",
            "node_modules/systemjs/dist/system.src.js",
            "node_modules/rxjs/bundles/Rx.js",
            "node_modules/angular2/bundles/angular2.dev.js"
        ])
        .pipe(gulp.dest('./dist/frontend/scripts/vendor'))
})

gulp.task('copy:index', function(){
    return gulp.src('./src/frontend/index.html')
        .pipe(gulp.dest('./dist/frontend'));
});

gulp.task('frontend', function(done){
    return runSeq('clean', ['copy:vendor', 'copy:index'], done);
})
