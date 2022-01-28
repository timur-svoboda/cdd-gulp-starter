import gulp from "gulp";

const production = process.argv.includes("--production")

export default function assets() {

  const dest = production ? "dist/assets" : "dev/assets";

  return gulp.src("src/assets/**/*")
    .pipe(gulp.dest(dest));

}