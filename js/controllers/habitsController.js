(function(global, $) {

  // App
  var app = global.h4hApp;
  var models = app.models;

  // Controllers
  app.HabitsController = function($scope) {
    // Habits list
    $scope.habits = [
      new models.Habit('Drink Water', true),
      new models.Habit('Walk 5K', false),
      new models.Habit('Run', false),
      new models.Habit('Run from Dog', false)
    ];

    // Quote
    $scope.quote = randomQuote();

    // Current displayed date
    $scope.currentDate = new Date();
    $scope.currentDateClass = function() {
      if($scope.isTodaySelected()) {
        return 'currentDay'
      } else {
        return '';
      }
    };
   
    // Dates
    $scope.addDay = function() {
      $scope.currentDate = moment($scope.currentDate).add('d', 1);
    };
    $scope.subtractDay = function() {
      $scope.currentDate = moment($scope.currentDate).subtract('d', 1);
    };
    $scope.isTodaySelected = function() {
      var today = new Date();
      return moment($scope.currentDate).isSame(today, 'day');
    };

    // Habits
    $scope.selectedHabit = null;
    $scope.addHabit = function() {
      $scope.habits.push(new models.Habit($scope.habitText, false));
      $scope.habitText = '';
    };
    $scope.habitIsSelected = function(habit) {
      return (habit === $scope.selectedHabit);
    };
    $scope.selectHabit = function(habit) {
      // if already selected, unselect
      if ($scope.habitIsSelected(habit)) {
        $scope.selectedHabit = null;
        return;
      } else {
        $.each($scope.habits, function(index, currentHabit) {
          if (habit === currentHabit) {
            $scope.selectedHabit = currentHabit;
            return;
          };
        });        
      }
    };
    $scope.currentHabitClass = function(habit) {
      if ($scope.habitIsSelected(habit)) {
        return 'selected';
      } else {
        return '';
      }
    };
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.habits, function(habit) {
        count += habit.done ? 0 : 1;
      });
      return count;
    };
   
    $scope.archive = function() {
      var oldHabits = $scope.habits;
      $scope.habits = [];
      angular.forEach(oldHabits, function(habit) {
        if (!habit.done) $scope.habits.push(habit);
      });
    };
  };

})(window, jQuery);