var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var webpack = require('webpack-stream');

gulp.task("js6", function () {
	return gulp.src("./app/**/*.js")
	.pipe(sourcemaps.init())
	.pipe(webpack({
		output: {
			library: 'Library',
			filename: 'library.js',
			libraryTarget: 'umd'
		},
		module: {
			loaders: [{
				loader: 'babel-loader'
			}]
		}
	}))
	.pipe(concat("bundle.js"))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("dist"));
});

gulp.task('watch',function() {
	gulp.watch(['./app/**/*.js'],['js6'])
});

gulp.task('default', ['js6','watch']);