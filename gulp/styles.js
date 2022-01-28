import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import cssnano from "gulp-cssnano";
import gulpIf from "gulp-if";

const production = process.argv.includes("--production")

export default function styles() {
  const dest = production ? "dist/css" : "dev/css";

  return gulp.src("src/scss/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulpIf(production, cssnano()))
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest(dest));
}