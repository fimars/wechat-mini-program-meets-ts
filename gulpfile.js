const gulp = require('gulp');
const changed = require('gulp-changed');
const ts = require('gulp-typescript');
const alias = require('path-alias-resolver/gulp');

const DEST = 'dest/';
const resolveSRC = (path) => 'src/' + path

const extToGlob = ext => resolveSRC(`**/*.${ext}`)
const staticExt = ['wxss', 'wxml', 'json', 'jpg', 'png']
const staticSourceFiles = staticExt.map(extToGlob)

gulp.task('ts', function () {
  const tsProject = ts.createProject('tsconfig.json');
  return tsProject.src()
    .pipe(changed(DEST))
    .pipe(tsProject())
    .js
    .pipe(alias('.', { '@': '.' }))
    .pipe(gulp.dest(DEST))
});

gulp.task('static', function () {
  return gulp
    .src(staticSourceFiles)
    .pipe(changed(DEST))
    .pipe(gulp.dest(DEST))
});

gulp.task('watch', ['ts', 'static'], function () {
  gulp.watch(staticSourceFiles, ['static'])
  gulp.watch(extToGlob('ts'), ['ts'])
})
