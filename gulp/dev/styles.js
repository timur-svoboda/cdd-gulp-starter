import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export default function styles() {
  return gulp.src("src/scss/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest("dev/css"));
}