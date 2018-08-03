"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-cssmin");
var imagemin = require("gulp-imagemin");
var jsmin = require("gulp-jsmin");
var htmlmin = require("gulp-htmlmin");
var webp = require("gulp-webp");
var run = require("run-sequence");
var rename = require("gulp-rename");
var del = require("del");
var server = require("browser-sync").create();
var ghpages = require("gh-pages");

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/favicon/**",
      "source/js/**",
      "source/slick/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});


gulp.task("style", function() {
  gulp.src("source/css/style.css")
    .pipe(plumber())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img/webp"));
});

gulp.task("js", function () {
  gulp.src("source/js/script.js")
    .pipe(jsmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/js"))
    .pipe(server.stream());
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "images",
    "webp",
    "html",
    "js",
    done
  );
});

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/css/**/*.css", ["style"]);
  gulp.watch("source/*.html", ["html"]);
  gulp.watch("source/js/**/*.js", ["js"]);
});

ghpages.publish("build");
