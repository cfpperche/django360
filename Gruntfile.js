// Generated on 2014-11-01 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= yeoman.test %>/spec/**/*.js'
// use this if you want to recursively match all subfolders:
// '<%= yeoman.test %>/spec/**/*.js'

module.exports = function(grunt) {

	// DEFINE CONFIG VARIABLES
	var LIVERELOAD_PORT = 35728, HOSTNAME = 'localhost', CONNECT_PORT = 9098, TEST_PORT = 9099;

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = {
		app : 'app',
		dist : 'dist',
		temp : '.temp',
		test : 'test',
		sassCache : '.sass-cache',
		bower : 'bower_components'
	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman : appConfig,

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint : {
			options : {
				jshintrc : '.jshintrc',
				reporter : require('jshint-stylish')
			},
			all : {
				src : [
					'Gruntfile.js',
					'<%= yeoman.app %>/scripts/**/*.js'
				]
			},
			test : {
				options : {
					jshintrc : '<%= yeoman.test %>/.jshintrc'
				},
				src : [
					'<%= yeoman.test %>/spec/**/*.js'
				]
			}
		},

		// Empties folders to start fresh
		clean : {
			dist : {
				files : [
					{
						dot : true,
						src : [
							'<%= yeoman.temp %>',
							'<%= yeoman.dist %>/**/*',
							'!<%= yeoman.dist %>/.git*',
						]
					}
				]
			},
			server : [
				'<%= yeoman.temp %>',
				'<%= yeoman.sassCache %>'
			]
		},

		// Include your sources into your HTML files automatically.
		includeSource : {
			options : {
				basePath : '<%= yeoman.app %>',
				baseUrl : ''
			},
			server : {
				files : {
					'<%= yeoman.temp %>/index.html' : '<%= yeoman.app %>/index.html'
				}
			},
			dist : {
				files : {
					'<%= yeoman.app %>/index.html' : '<%= yeoman.app %>/index.html'
				}
			}
		},

		// Automatically inject Bower components into the app
		wiredep : {
			app : {
				src : [
					'<%= yeoman.app %>/index.html'
				],
				ignorePath : /\.\.\//
			},
			sass : {
				src : [
					'<%= yeoman.app %>/styles/**/*.{scss,sass}'
				],
				ignorePath : /(\.\.\/){1,2}bower_components\//
			}
		},

		// Compiles Sass to CSS and generates necessary files if requested
		compass : {
			options : {
				sassDir : '<%= yeoman.app %>/styles',
				cssDir : '<%= yeoman.temp %>/styles',
				generatedImagesDir : '<%= yeoman.temp %>/images/generated',
				imagesDir : '<%= yeoman.app %>/images',
				javascriptsDir : '<%= yeoman.app %>/scripts',
				fontsDir : '<%= yeoman.app %>/styles/fonts',
				importPath : './bower_components',
				httpImagesPath : '/images',
				httpGeneratedImagesPath : '/images/generated',
				httpFontsPath : '/styles/fonts',
				relativeAssets : false,
				assetCacheBuster : false,
				raw : 'Sass::Script::Number.precision = 10\n'
			},
			dist : {
				options : {
					generatedImagesDir : '<%= yeoman.dist %>/images/generated'
				}
			},
			server : {
				options : {
					debugInfo : true
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare : {
			html : '<%= yeoman.app %>/index.html',
			options : {
				dest : '<%= yeoman.dist %>',
				staging : '<%= yeoman.temp %>',
				flow : {
					html : {
						steps : {
							js : [
								'concat',
								'uglifyjs'
							],
							css : [
								'cssmin'
							]
						},
						post : {}
					}
				}
			}
		},

		// Performs rewrites based on filerev and the useminPrepare configuration
		usemin : {
			html : [
				'<%= yeoman.dist %>/**/*.html'
			],
			css : [
				'<%= yeoman.dist %>/styles/**/*.css'
			],
			options : {
				assetsDirs : [
					'<%= yeoman.dist %>',
					'<%= yeoman.dist %>/images'
				]
			}
		},

		imagemin : {
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.app %>/images',
						src : '**/*.{png,jpg,jpeg,gif,svg}',
						dest : '<%= yeoman.dist %>/images'
					}
				]
			}
		},

		svgmin : {
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.app %>/images',
						src : '**/*.svg',
						dest : '<%= yeoman.dist %>/images'
					}
				]
			}
		},

		htmlmin : {
			dist : {
				options : {
					collapseWhitespace : true,
					conservativeCollapse : true,
					collapseBooleanAttributes : true,
					removeCommentsFromCDATA : false,
					removeOptionalTags : false
				},
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.dist %>',
						src : [
							'*.html',
							'scripts/**/*.html'
						],
						dest : '<%= yeoman.dist %>'
					}
				]
			}
		},

		// ng-annotate tries to make the code safe for minification automatically
		// by using the Angular long form for dependency injection.
		ngAnnotate : {
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.temp %>/concat/scripts',
						src : [
							'*.js',
							'!oldieshim.js'
						],
						dest : '<%= yeoman.temp %>/concat/scripts'
					}
				]
			}
		},

		// Renames files for browser caching purposes
		filerev : {
			dist : {
				src : [
					'<%= yeoman.dist %>/scripts/**/*.js',
					'<%= yeoman.dist %>/styles/**/*.css',
					// '<%= yeoman.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
					'<%= yeoman.dist %>/styles/fonts/*'
				]
			}
		},

		// Replace Google CDN references
		cdnify : {
			dist : {
				html : [
					'<%= yeoman.dist %>/*.html'
				]
			}
		},

		// Add vendor prefixed styles
		autoprefixer : {
			options : {
				browsers : [
					'last 1 version'
				]
			},
			dist : {
				files : [
					{
						expand : true,
						cwd : '<%= yeoman.temp %>/styles/',
						src : '**/*.css',
						dest : '<%= yeoman.temp %>/styles/'
					}
				]
			}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent : {
			server : [
				'compass:server'
			],
			test : [
				'compass'
			],
			dist : [
				'compass:dist',
				'imagemin',
			// 'svgmin'
			]
		},

		// Copies remaining files to places other tasks can use
		copy : {
			dist : {
				files : [
					{
						expand : true,
						dot : true,
						cwd : '<%= yeoman.app %>',
						dest : '<%= yeoman.dist %>',
						src : [
							'*.{ico,txt,png,jpg,jpeg,gif,webp,svg}',
							'.htaccess',
							'*.html',
							'scripts/**/*.html',
							'images/**/*.{webp}',
							'fonts/*',
							'locales/**/*.json'
						]
					},
					{
						expand : true,
						cwd : '<%= yeoman.temp %>/images',
						dest : '<%= yeoman.dist %>/images',
						src : [
							'generated/*'
						]
					},
					{
						expand : true,
						flatten : true,
						filter : 'isFile',
						cwd : '.',
						src : 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/**',
						dest : '<%= yeoman.dist %>/fonts/bootstrap/'
					},
					{
						expand : true,
						flatten : true,
						filter : 'isFile',
						cwd : '.',
						src : 'bower_components/font-awesome/fonts/**',
						dest : '<%= yeoman.dist %>/fonts/'
					}
				]
			},
			styles : {
				expand : true,
				cwd : '<%= yeoman.app %>/styles',
				dest : '<%= yeoman.temp %>/styles/',
				src : '**/*.css'
			}
		},

		// Watches files for changes and runs tasks based on the changed files
		watch : {
			bower : {
				files : [
					'bower.json'
				],
				tasks : [
					'wiredep'
				]
			},
			js : {
				files : [
					'<%= yeoman.app %>/scripts/**/*.js'
				],
				tasks : [
					'includeSource:server',
					'newer:jshint:all'
				],
				options : {
					livereload : '<%= connect.options.livereload %>'
				}
			},
			jsTest : {
				files : [
					'<%= yeoman.test %>/spec/**/*.js'
				],
				tasks : [
					'newer:jshint:test',
					'karma'
				]
			},
			compass : {
				files : [
					'<%= yeoman.app %>/styles/**/*.{scss,sass}'
				],
				tasks : [
					'compass:server',
					'autoprefixer'
				]
			},
			gruntfile : {
				files : [
					'Gruntfile.js'
				]
			},
			includeSource : {
				files : [
					'<%= yeoman.app %>/**/*.html'
				],
				tasks : [
					'includeSource:server'
				]
			},
			livereload : {
				options : {
					livereload : '<%= connect.options.livereload %>'
				},
				files : [
					'<%= yeoman.app %>/**/*.html',
					'<%= yeoman.temp %>/styles/**/*.css',
					'<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		// The actual grunt server settings
		connect : {
			options : {
				port : CONNECT_PORT,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname : HOSTNAME,
				livereload : LIVERELOAD_PORT
			},
			livereload : {
				options : {
					open : true,
					middleware : function(connect) {
						return [
							connect.static('.temp'),
							connect().use('/bower_components', connect.static('./bower_components')),
							connect.static(appConfig.app)
						];
					}
				}
			},
			test : {
				options : {
					port : TEST_PORT,
					middleware : function(connect) {
						return [
							connect.static('.temp'),
							connect.static('test'),
							connect().use('/bower_components', connect.static('./bower_components')),
							connect.static(appConfig.app)
						];
					}
				}
			},
			dist : {
				options : {
					open : true,
					base : '<%= yeoman.dist %>'
				}
			}
		},

		// Test settings
		karma : {
			unit : {
				configFile : '<%= yeoman.test %>/karma.conf.js',
				singleRun : true
			}
		}
	});

	grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
		if (target === 'dist') {
			return grunt.task.run([
				'build',
				'connect:dist:keepalive'
			]);
		}

		grunt.task.run([
			'clean:server',
			'includeSource:server',
			'wiredep',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'karma'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'includeSource:dist',
		'wiredep',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'ngAnnotate',
		'copy:dist',
		'cdnify',
		'cssmin',
		'uglify',
		'filerev',
		'usemin'
	// 'htmlmin'
	]);

	grunt.registerTask('default', [
		'newer:jshint',
		'test',
		'build'
	]);
};
