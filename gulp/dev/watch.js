import gulp from "gulp";

import pages from "./pages.js";
import styles from "./styles.js";
import scripts from "./scripts.js";
import assets from "./assets.js";

export default function watch(cb) {
  gulp.watch("src/**/*.html", pages);
  gulp.watch("src/**/*.scss", styles);
  gulp.watch("src/**/*.js", scripts);
  gulp.watch("src/assets/**/*", assets);
  
  cb();
}
