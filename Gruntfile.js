/// <binding AfterBuild='bowercopy' />
var grunt = require('grunt');

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concurrent: {
        watchers: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        }
    },

    // configure nodemon
    nodemon: {
        dev: {
            script: './app.js'
        }
    },

    watch: {
        scripts: {
            files: ["**/*.ts", '!node_modules/**/*.ts'], // the watched files
            //tasks: ["newer:tslint:all", "ts:build"], // the task to run
            tasks: ["ts:build"],
            options: {
                spawn: false // makes the watch task faster
            }
        }
    },

    ts: {
        build: {
            src: ["app.ts", "!node_modules/**/*.ts"], 
            // Avoid compiling TypeScript files in node_modules
            options: {
                module: 'commonjs', 
                // To compile TypeScript using external modules like NodeJS
                fast: 'never' 
                // You'll need to recompile all the files each time for NodeJS
            }
        }
    },

    tslint: {
        options: {
            configuration: grunt.file.readJSON("tslint.json")
        },
        all: {
            src: ["app.ts", "!node_modules/**/*.ts", "!obj/**/*.ts", "!typings/**/*.ts"] 
            // avoid linting typings files and node_modules files
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

grunt.loadNpmTasks("grunt-concurrent");
grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks('grunt-ts');
grunt.loadNpmTasks("grunt-newer");
grunt.loadNpmTasks('grunt-tslint');
grunt.loadNpmTasks('grunt-bowercopy');
grunt.loadNpmTasks('grunt-nodemon');

// register the nodemon task when we run grunt
grunt.registerTask("serve", ["concurrent:watchers"]);
grunt.registerTask("default", ["serve"]);
