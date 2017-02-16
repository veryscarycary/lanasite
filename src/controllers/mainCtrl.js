app.controller('mainCtrl', function($scope, dates, misc) {

  $scope.contactInfo = misc.contactInfo;
  // Date info
  $scope.lastUpdatedDate = dates.lastUpdatedDate.replace(/\//g, '.');
  $scope.formatMonthFirstDate = dates.formatMonthFirstDate;
  $scope.tomorrow = dates.tomorrow;
});
