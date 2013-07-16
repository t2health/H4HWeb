<?php
// Slim
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

// App instance
$app = new \Slim\Slim();

// Configure
$app->config(array(
	'templates.path' => './templates'
));

// Routes
$app->get('/', function () {
  echo "<h1>Hello World!</h1>";
});

$app->get('/about', function () use($app) {
	$data = array(
  	'heading' => 'Tim\'s About page',
    'message' => 'This page is an example of static route, rendering a php file.'
  );
  $app->render('about.php',$data);
});

$app->get('/hello/:name', function ($name) {
  echo "Hello, $name";
});

// Start app
$app->run();