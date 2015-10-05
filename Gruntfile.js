/**
 *
 * WordPress Starter Theme + Simple Grunt Workflow small front-end projects with WordPress
 * repo: https://github.com/ginirsss/WordPress-Starter-Theme-Simple-Grunt-Workflow
 * © 2015 @ginirsss
 *
 */
module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        beautify: true
      },
      my_target: {
        files: {
          'js/functions.min.js': ['src/js/functions.js'],
          'js/functions-index.min.js': ['src/js/functions-index.js'],
        }
      }
    },
    jshint: {
      files: ['src/js/functions.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'src/images/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/'
        }]
      }
    },
    less: {
      dist: {
        options: {
            compress: true
        },
        files: {
            'style.css': 'src/less/style.less'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['newer:uglify'],
        options: {
            spawn: false
        }
      },
      css: {
        files: ['src/less/*.less'],
        tasks: ['newer:less'],
        options: {
          spawn: false
        }
      },
      another: {
        files: ['src/images/*.*'],
        tasks: ['newer:imagemin'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', ['newer:uglify','newer:less','newer:imagemin','watch']);
  grunt.registerTask('testjs', ['jshint']);
};
