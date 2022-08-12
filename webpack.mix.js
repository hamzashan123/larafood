const mix = require('laravel-mix');
let src_path = 'resources/js/';
const path = require('path');



/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
        alias: {
            '@': path.resolve(__dirname, src_path),
            '@store': path.resolve(__dirname, src_path + 'store/'),
            '@views': path.resolve(__dirname, src_path + 'views/'),
            '@comp': path.resolve(__dirname, src_path + 'components/'),
        }
        }
    })
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
