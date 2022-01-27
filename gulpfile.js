import devTask from "./gulp/dev/dev.js";
import prodTask from "./gulp/prod/prod.js";

export default devTask;

export const dev = devTask;

export const prod = prodTask;