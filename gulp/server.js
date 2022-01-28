import BrowserSync from "browser-sync";

export default function server(cb) {
  const bs = BrowserSync.create();

  bs.init({
    server: "dev"
  });

  bs.watch(["dev/**/*", "!dev/**/*.css", "!dev/**/*.css.map"]).on("change", bs.reload)
  bs.watch("dev/**/*.css").on("change", function() {
    bs.reload("*.css");
  });

  cb();
}