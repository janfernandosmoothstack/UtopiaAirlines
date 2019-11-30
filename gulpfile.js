"use strict";

//impoting modules
var gulp = require('gulp');
var connect = require('gulp-connect'); //connecting to a local server and takes all the local aspects of this project and deploys them
var open = require('gulp-open'); //opens the browser and routes to your application
var browserify = require('browserify'); //helps the browser understand
var babelify = require("babelify"); //helps transalte jsx-js
var source = require('vinyl-source-stream'); //read from a file, create a stream and copy it
var concat = require('gulp-concat'); //allows you to concatenate file
var lint = require('gulp-eslint'); //allows you to perform linting

//object defining properties
//in a real life application this should be in its own module
var config = {
	port: 9090, //need a port because you are launching a new server
	devBaseUrl: 'http://localhost',
	
	//path to inside your application
	paths: {
		html: './public/*.html', //wherever you have your html files
		js: './src/**/*.js', //wherever you have your js files
		images: './src/images/*', //wherever you have your images
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'./src/*.css',
			'./src/component/**/*.css'  
    	],
		dist: './dist', //distribution folder
		mainJs: './src/index.js' //set the entry point
	}
}

//Start a local development server
//each task has a name and a function
gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true //whenever you change something you can hot reload it
	});
});

//connect is the dependency. You have to wait for the connection to be up
//pipe is producer-consumer model
gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

//copy all html and put it in that distribution folder in that path
gulp.task('html', function() {
	gulp.src(config.paths.html) //find the html file
		.pipe(gulp.dest(config.paths.dist)) //pipe it to distribution folder
		.pipe(connect.reload()); //reload connection
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(babelify, {presets: ["es2015", "react"]})
		.bundle() //bundle js file together (minify)
		.on('error', console.error.bind(console)) 
		.pipe(source('bundle.js')) //put whatever is bundled and store it in the file
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function() {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + "/images"))
		.pipe(connect.reload());
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js) //finds the js file
		.pipe(lint()) //pipe the file through the lint function
		.pipe(lint.format()); //format the file based on the lint rules set
});

//watches for any changes, updates the files and runs them
gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
});

//defines the tasks and run them in this order
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);