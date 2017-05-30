/**
 * Created by Dzamba on 21.02.2017.
 */
'use strict';
const fileinclude = require('gulp-file-include');
const replace = require('gulp-replace');

module.exports = (gulp, plugins, config) => () => {
   return gulp.src(config.paths.index)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true,
        }))
       .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
        .pipe(gulp.dest(`${config.paths.dist}/`));
};
