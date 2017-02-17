app.controller('mainCtrl', function($scope, dates, misc, slideshow) {
  // Misc Info
  $scope.contactInfo = misc.contactInfo;

  // Slideshow info
  $scope.plusSlides = slideshow.plusSlides;
  $scope.currentSlide = slideshow.currentSlide;

  // Date info
  $scope.lastUpdatedDate = dates.lastUpdatedDate.replace(/\//g, '.');
  $scope.formatMonthFirstDate = dates.formatMonthFirstDate;
  $scope.tomorrow = dates.tomorrow;
});
