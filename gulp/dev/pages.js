import gulp from "gulp";
import fileinclude from "gulp-file-include";

export default function pages() {
  return gulp.src("src/*.html")
  .pipe(fileinclude())
  .pipe(gulp.dest("dev"));
}