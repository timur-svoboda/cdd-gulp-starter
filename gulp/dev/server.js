import BrowserSync from "browser-sync";

export default function server(cb) {
  const bs = BrowserSync.create();

  bs.init({
    server: "dev"
  });

  bs.watch("dev/**/*").on("change", bs.reload)

  cb();
}