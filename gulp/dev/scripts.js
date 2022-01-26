import gulp from "gulp";
import named from "vinyl-named";
import webpack from "webpack";
import webpackStream from "webpack-stream";

export default function scripts() {
  return gulp.src("src/js/*.js")
  .pipe(named())
  .pipe(webpackStream({
    mode: "development",
    devtool: "source-map"
  }))
  .pipe(gulp.dest("dev/js"));
}