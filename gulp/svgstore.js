/**
 * Created by Dzamba on 21.02.2017.
 */
'use strict';
const cheerio = require('gulp-cheerio');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');

module.exports = (gulp, plugins, config) => () => {
  return  gulp.src(config.paths.svg + '.svg')
        .pipe(svgmin(function (file) {
            return {
                plugins: [{
                    cleanupIDs: {
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(cheerio(function ($) {
            $('svg').attr('style',  'display:none');
        }))
        .pipe(rename('sprite-svg.svg'))
        .pipe(gulp.dest('./src/svgsprite/'));

};
