/*
 * (c) Copyright 2016 STI技术小组
 * http://www.stixu.com
 */

const gulp = require('gulp'),
      babel = require('gulp-babel'),
      clean = require('gulp-clean'),
      path = require('path'),
      less = require('gulp-less');
//
const src = 'es6/',
      statics = [src + '**/*.html', src + '**/*.css'],
      jsPat = '**/*.js',
      lessPat = '**/*.less',
      cssPat = '**/*.css',
      srcEs6 = src + jsPat,
      srcLess = src + lessPat,
      dest = 'static/'
      destJs = dest + 'scripts/',
      destJsPat = destJs + jsPat,        
      destCss = dest + 'css/',
      destCssPat = destCss + cssPat;
//
gulp.task('babel', function () {
    return gulp.src(srcEs6)
               .pipe(babel({
                   presets: ['latest']
                }))
               .pipe(gulp.dest(destJs))   
});

//
gulp.task('clean', () => {
    gulp.src(destJsPat, {
                read: false
        })
    .pipe(clean());
    gulp.src(destCssPat, {
                read: false
        })
    .pipe(clean());    
});

//
gulp.task('copy', function() {
    gulp.src(src + '**/*.html')
        .pipe(gulp.dest(destJs));//输出
    gulp.src(src + '**/*.css')
        .pipe(gulp.dest(destJs));//输出    
});

//
gulp.task('less', () => {
    return gulp.src(srcLess)
                .pipe(less({
                    paths: [path.join(__dirname, 'less') ]
                }))
                .pipe(gulp.dest(destCss)) 
});


//
gulp.task('default', ['clean', 'babel', 'less', 'copy'], () => {
    //
    let watcherEs = gulp.watch([srcEs6], ['babel']);
    watcherEs.on('change', function(event) {
      console.log('ES File ' + event.path + ' was ' + event.type + ', running tasks babel.');
    });
    //
    let watcherStatic = gulp.watch(statics, ['copy']);
    watcherStatic.on('change', function(event) {
      console.log('Static File ' + event.path + ' was ' + event.type + ', running tasks babel.');
    });
    //
    let watcherLess = gulp.watch([srcLess], ['less']);
    watcherLess.on('change', function(event) {
      console.log('LESS File ' + event.path + ' was ' + event.type + ', running tasks less.');
    });  
})
