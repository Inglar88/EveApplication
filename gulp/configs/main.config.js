module.exports = {
  paths: {
    less: './src/less/**/*.less',
      lessblock: './src/blocks/**/*.less',
      styleless: './src/less/style.less',
    entry: './src/js/index.js',
    js: './src/js/**/*.js',
	jsx: './src/js/**/*.jsx',
    html: './src/**/*.html',
      index: './src/*.html',
    dist: './public',
    images: './src/images/**/*',
      svg: './src/images/svg/*',
      sprite: './src/images/sprite/*',
      fonts: './src/fonts/'
  },
  output: {
    js: 'js',
    css: 'css',
    images: 'images',

      svgsprite: 'images/svgsprite',
      less: './src/less/'
  },
  production: false
};
