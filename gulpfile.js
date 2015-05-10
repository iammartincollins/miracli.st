var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less')
        // .copy('vendor/bower_components/angular/angular.js', 'resources/assets/js/vendor/angular.js')
        // .copy('resources/assets/js/**/*.tpl.html', 'public/templates/*.tpl.html')
        .scripts([
            '../vendor/bower_components/angular/angular.js',
            '../vendor/bower_components/angular-ui-router/release/angular-ui-router.min.js',
            'assets/js/**/*.js'
        ], 'public/js/app.min.js', 'resources');
});
