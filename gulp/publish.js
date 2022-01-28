import gulp from "gulp";

import prod from "./prod.js";
import deploy from "./deploy.js";

export default gulp.series(prod, deploy);