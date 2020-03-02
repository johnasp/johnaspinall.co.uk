
module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_sass',
                cssDir: '_includes/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_includes/css',
                    ext: '.css'
                }]
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            site: {
                files:[
                    "_layouts/*.html",
                    "_includes/*.html",
                    "_posts/*.md",
                ]
            },
            sass: {
                files: ['_sass/**/*.scss'],
                tasks: ['sass', "shell:jekyllBuild"],
            },  

            css: {
                files:['_site/style.css'],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                  }, 
            },
       
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['_site/**/*'],
            },

        },

    });

     // Register the grunt serve task
     grunt.registerTask('serve', [
        'shell:jekyllServe',
    ]);
 
    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', ['sass', 'serve'   ]);
};