import del from "del";

const production = process.argv.includes("--production")

export default function clean(cb) {

  const dir = production ? "dist" : "dev";

  del.sync(dir);
  
  cb();

}