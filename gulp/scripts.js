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
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  }))
  .pipe(gulp.dest(dest));
}