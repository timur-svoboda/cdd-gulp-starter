import devTask from "./gulp/dev.js";
import prodTask from "./gulp/prod.js";
import publishTask from "./gulp/publish.js"

export default devTask;

export const dev = devTask;

export const prod = prodTask;

export const publish = publishTask;