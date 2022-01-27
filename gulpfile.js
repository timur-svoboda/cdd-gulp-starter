import devTask from "./gulp/dev/dev.js";
import prodTask from "./gulp/prod/prod.js";
import publishTask from "./gulp/publish/publish.js"

export default devTask;

export const dev = devTask;

export const prod = prodTask;

export const publish = publishTask;