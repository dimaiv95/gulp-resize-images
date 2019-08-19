const gulp			= require("gulp");
const imageResize	= require("gulp-image-resize");
const imagemin		= require("gulp-imagemin");
const del			= require("del");

const pattern = ["input/**/*.jpg", "input/**/*.png", "input/**/*.gif", "input/**/*.jpeg"];

gulp.task("delete", function(){
	return del("output");
});

gulp.task("resize", function(){
	return gulp.src(pattern)
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(imageResize({
			width: 900,
			height: 900
		}))
		.pipe(gulp.dest("output"))
});

gulp.task("default", gulp.series("delete", "resize"));