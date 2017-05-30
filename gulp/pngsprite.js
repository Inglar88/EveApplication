/**
 * Created by Dzamba on 21.02.2017.
 */
'use strict';
const plumber = require('gulp-plumber');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const imagemin = require('gulp-imagemin');
const buffer = require('vinyl-buffer');

module.exports = (gulp, plugins, config) => () => {
    let fileName = 'sprite-' + Math.random().toString().replace(/[^0-9]/g, '') + '.png';
    let spriteData = gulp.src(`${config.paths.sprite}.png`)
    .pipe(spritesmith({
        imgName: fileName,
        cssName: 'sprite.less',
        cssFormat: 'less',
        padding: 4,
        imgPath: config.output.images + '/' + fileName
    }));
    let imgStream = spriteData.img
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest(`${config.paths.dist}/${config.output.images}`));
    let cssStream = spriteData.css
        .pipe(gulp.dest(config.output.less));
    return merge(imgStream, cssStream);
};
