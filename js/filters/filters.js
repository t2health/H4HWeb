(function(global, $) {

  // App
  var app = global.h4hApp;

  // Filters
  app.filter('dayName', function() {
    return function(date) {
      var today = new Date();
      if(moment(date).isSame(today, 'day')) {
        return 'Today';
      } else {
        return moment(date).format('dddd');
      }
    };
  });
  app.filter('monthName', function() {
    return function(date) {
      return moment(date).format('MMM').toUpperCase();
    };
  });
  app.filter('dateOrdinal', function() {
    return function(date) {
      return moment(date).format('Do');
    };
  });

})(window, jQuery);