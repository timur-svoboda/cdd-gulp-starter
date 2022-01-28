import gulp from "gulp";
import fileinclude from "gulp-file-include";

const production = process.argv.includes("--production")

export default function pages() {
  const dest = production ? "dist" : "dev";

  return gulp.src("src/*.html")
  .pipe(fileinclude())
  .pipe(gulp.dest(dest));
}