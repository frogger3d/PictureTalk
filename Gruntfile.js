/// <binding AfterBuild='bowercopy' />
var grunt = require('grunt');

grunt.initConfig({

    // configure nodemon
    nodemon: {
        dev: {
            script: './app.js'
        }
    },

    bowercopy: {
        options: {
            // Task-specific options go here
        },
        libs: {
            options: {
                destPrefix: 'public/js/libs'
            },
            files: {
                'jquery.js': 'jquery/dist/jquery.js',
                'bootstrap.js': 'bootstrap/dist/js/bootstrap.js'
            },
        },
        css: {
            options: {
                destPrefix: 'public/css/libs'
            },
            files: {
                'bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                'bootstrap-theme.css': 'bootstrap/dist/css/bootstrap-theme.css'
            }
        }
    }

});

grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-bowercopy');

// register the nodemon task when we run grunt
grunt.registerTask('default', ['nodemon']);
