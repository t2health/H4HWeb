(function(global, $) {

  // App
  global.h4hApp = global.h4hApp || {};
  var app = global.h4hApp;
  app.models = app.models || {};

  // Models
  app.models.Habit = function(text, done) {
    this.text = text;
    this.done = done;
    this.classExt = function() {
      return this.done ? '' : '-empty';
    };
  };

})(window, jQuery);