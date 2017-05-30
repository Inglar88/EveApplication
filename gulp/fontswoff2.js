/**
 * Created by Dzamba on 21.02.2017.
 */
'use strict';
const base64 = require('gulp-base64');
const replace = require('gulp-replace');

module.exports = (gulp, plugins, config) => () => {
    let fontCssPath = config.paths.fonts + 'font_opensans_woff2.css';
    return gulp.src(fontCssPath)
        .pipe(base64({                   // ищем в CSS файле подключения сторонних ресурсов, чтоб закодировать base64 и вставить прямо в файл
            // baseDir: '/',
            extensions: ['woff2'],         // только указанного тут формата ресурсов
            maxImageSize: 1024*1024,      // максимальный размер в байтах
            deleteAfterEncoding: false,   // не удаляем исходный ресурс после работы!
            // debug: true
        }))
        .pipe(replace('application/octet-stream;', 'application/font-woff2;'))
        .pipe(gulp.dest(`${config.paths.dist}/${config.output.css}`));
};
