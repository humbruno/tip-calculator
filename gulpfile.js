// npm install --save-dev gulp gulp-sass sass gulp-postcss autoprefixer cssnano

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

function buildStyles() {
  return src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest("css"));
}

function watchTask() {
  watch(["app/scss/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
