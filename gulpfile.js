'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./gulp/configs/main.config');
const register = require(`./gulp/utils/register`);


register(gulp, plugins, config)([
  'build-js',
  'build-less',
  'copy',
  'serve',
  'watch',
  'deploy',
    'svgstore',
    'pngsprite',
    'html',
    'fontswoff',
    'fontswoff2'
]);

gulp.task('build',gulp.series('pngsprite','svgstore',gulp.parallel('build-js', 'build-less', 'copy','html','fontswoff','fontswoff2')));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
