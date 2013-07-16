(function(global, $) {

  // App
  var app = global.h4hApp;

  // Main router config
  app.config(function($routeProvider) {
  	$routeProvider
  	.when('/', {
  		redirectTo: function() {
  			return '/habits';
  		}
  	})
  	.when('/about', {
  		templateUrl: 'templates/about.html'
  	})
  	.when('/groups', {
  		templateUrl: 'templates/groups.html'
  	})
  	.when('/habits', {
  		templateUrl: 'templates/habits.html',
  		controller: app.HabitsController
  	})
  	.when('/invites', {
  		templateUrl: 'templates/invites.html'
  	})
  	.when('/reminders', {
  		templateUrl: 'templates/reminders.html'
  	})
  	.when('/settings', {
  		templateUrl: 'templates/settings.html'
  	})
  	.when('/thumbs', {
  		templateUrl: 'templates/thumbs.html'
  	})
  	.when('/updates', {
  		templateUrl: 'templates/updates.html'
  	})
  	.otherwise({
  		templateUrl: 'templates/404.html'
  	});
  });

})(window, jQuery);