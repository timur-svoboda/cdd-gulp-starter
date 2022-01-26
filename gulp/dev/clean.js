import del from "del";

export default function clean(cb) {
  del.sync("dev");
  cb();
}