module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['gruntfile.js', 'lib/*.js', 'test/*.js'],
            options: {
                esversion: 6,
                '-W083':  true,
                laxbreak: true,
            }
        },

        watch: {
            test: {
                options: { spawn: true },
                files: ['gruntfile.js', 'lib/*.js', 'test/*.js'],
                tasks: ['test'],
            },
            build: {
                options: { spawn: true },
                files: ['gruntfile.js', 'lib/*.js', 'test/*.js'],
                tasks: ['build'],
            },
        },

        eslint: {
            target: ['lib'],
        },

        karma: {
            build: {
                options: {
                    files: [
                        'dist/video-jogwheel-es5.js',
                        'test/*.js',
                    ],
                    basePath:    '',
                    urlRoot:     '/',
                    frameworks:  ['jasmine'],
                    port:        9876,
                    colors:      true,
                    autoWatch:   false,
                    interval:    200,
                    singleRun:   true,
                    browsers:    ['ChromeHeadless'],
                    reporters:   ['spec'],
                    concurrency: Infinity,
                },
            },
            travis_ci: {
                options: {
                    files: [
                        'dist/video-jogwheel-es5.js',
                        'test/*.js',
                    ],
                    basePath:      '',
                    urlRoot:       '/',
                    frameworks:    ['jasmine'],
                    port:          9876,
                    colors:        true,
                    autoWatch:     false,
                    interval:      200,
                    singleRun:     true,
                    browsers:      ['ChromeHeadlessNoSandbox'],
                    reporters:     ['spec'],
                    concurrency:   Infinity,
                    customLaunchers: {
                        ChromeHeadlessNoSandbox: {
                            base:  'ChromeHeadless',
                            flags: ['--no-sandbox']
                        },
                    },
                },
            },
        },

        babel: {
            dist: {
                files: {
                    'dist/<%=pkg.name%>-es5.js': 'lib/<%=pkg.name%>.js',
                },
            },
        },

        clean: [
            'node_modules',
        ],

        gitstatus: {
            publish: {
                options: {
                    callback: function (r) {
                        if (r.length > 0)
                            throw new Error('git status unclean');
                    },
                },
            },
        },

    });

    grunt.registerTask('build', [
        'jshint',
        'eslint',
        'babel',
        'karma:build',
    ]);

    grunt.registerTask('travis_ci_build', [
        'jshint',
        'eslint',
        'babel',
        'karma:travis_ci',
    ]);

    grunt.registerTask('prepublish', [
        'clean',
        'gitstatus:publish',
    ]);

};
