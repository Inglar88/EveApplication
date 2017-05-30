'use strict';

module.exports = (gulp, plugins, config) => () => {
  return gulp.src(config.paths.styleless)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less())
    .pipe(plugins.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
		.pipe(plugins.minifyCss())
    .pipe(plugins.sourcemaps.write())
		.pipe(plugins.rename({ suffix: '.min' }))
    .pipe(gulp.dest(`${config.paths.dist}/css`));
};
