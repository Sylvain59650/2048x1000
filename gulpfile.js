const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const watch = require("gulp-watch");
let cleanCSS = require("gulp-clean-css");

const chemins = {
  sources: "./src/",
  demo: "./docs/"
};



gulp.task("2048x1000.min.js", () => {
  return gulp.src([
      "src/js/**/*.js"
    ])
    .pipe(concat("2048x1000.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      comments: false,
      minified: true
    }))
    .pipe(gulp.dest(chemins.demo))
});



gulp.task("watch:2048x1000.min.js", function() {
  watch("./src/js/**.js", function() {
    gulp.run("2048x1000.min.js");
  });
});



gulp.task("html", () => {
  return gulp.src(["src/index.html", "meta/*/*", "favicon.png"])
    .pipe(gulp.dest(chemins.demo));
});

gulp.task("watch:html", function() {
  watch("./src/**.html", function() {
    gulp.run("html");
  });
});

gulp.task("2048x1000.min.css", () => {
  return gulp.src([
      "./style/*.css"
    ])
    .pipe(concat("2048x1000.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest(chemins.demo));
});

gulp.task("watch:html", function() {
  watch("./src/**.html", function() {
    gulp.run("html");
  });
});

gulp.task("watch:2048x1000.min.css", function() {
  watch("./src/**.css", function() {
    gulp.run("2048x1000.min.css");
  });
});


gulp.task("default", ["2048x1000.min.js", "html", "2048x1000.min.css"]);

gulp.task("watch", ["watch:2048x1000.min.js", "watch:html", "watch:2048x1000.min.css"]);