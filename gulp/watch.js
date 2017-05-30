'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.watch(config.paths.less, gulp.series('build-less'));
    gulp.watch(config.paths.lessblock, gulp.series('build-less'));
  gulp.watch(config.paths.js, gulp.series('build-js'));
  gulp.watch(config.paths.jsx, gulp.series('build-js'));
    gulp.watch(config.paths.html, gulp.series('html'));
};
