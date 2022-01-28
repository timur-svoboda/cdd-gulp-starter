import gulp from "gulp";

import clean from "./clean.js";
import pages from "./pages.js";
import styles from "./styles.js";
import scripts from "./scripts.js";
import assets from "./assets.js";
import server from "./server.js";
import watch from "./watch.js";

export default gulp.series(
  clean,
  gulp.parallel(pages, styles, scripts, assets),
  gulp.parallel(server, watch)
);