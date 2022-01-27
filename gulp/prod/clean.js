import del from "del";

export default function clean(cb) {
  del.sync("dist");
  cb();
}