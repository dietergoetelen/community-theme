var gulp = require('gulp'),
	less = require('gulp-less'),
	watch = require('gulp-watch');

var files = ['*.less', '*/*.less'];

gulp.task('less', function () {
	
	gulp.src('*.less')
		.pipe(less())
		.pipe(gulp.dest(''));
	
});

gulp.task('default', function () {
	watch(files, function () {
		gulp.run('less');
	});
});