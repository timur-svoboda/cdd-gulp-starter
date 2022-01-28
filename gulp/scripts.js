import gulp from "gulp";
import named from "vinyl-named";
import webpack from "webpack";
import webpackStream from "webpack-stream";

const production = process.argv.includes("--production")

export default function scripts() {

  const dest = production ? "dist/js" : "dev/js";
  const mode = production ? "production" : "development";

  return gulp.src("src/js/*.js")
  .pipe(named())
  .pipe(webpackStream({
    mode,
    devtool: "source-map"
  }))
  .pipe(gulp.dest(dest));
}