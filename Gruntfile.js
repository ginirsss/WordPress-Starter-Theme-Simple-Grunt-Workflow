/**
 *
 * WordPress Starter Theme + Simple Grunt Workflow small front-end projects with wordpress
 * repo: https://github.com/ginirsss/WordPress-Starter-Theme-Simple-Grunt-Workflow
 * @ginirsss / ©2015
 *
 */
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ["dist/assets/js/libs/*.js"],
        dest: "dist/assets/js/libs.js"
      }
    },
    uglify: {
      options: {
        beautify: true
      },
      my_target: {
        files: {
          'dist/assets/js/functions.min.js': ['src/js/functions.js'],
          'dist/assets/js/functions-index.min.js': ['src/js/functions-index.js'],
        }
      }
    },
    jshint: {
      files: ["src/js/functions.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'src/images/',
            src: ['*.{png,jpg,gif}'],
            dest: 'dist/assets/images/'
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
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['newer:uglify','newer:less','newer:imagemin','watch']);
  grunt.registerTask("testjs", ["jshint"]);
};
