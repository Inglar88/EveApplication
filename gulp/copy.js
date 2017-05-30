/**
 * Created by Dzamba on 21.02.2017.
 */
'use strict';
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

module.exports = (gulp, plugins, config) => () => {
   return gulp.src(config.paths.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(`${config.paths.dist}/${config.output.images}`));
};
