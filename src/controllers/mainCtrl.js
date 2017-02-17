app.controller('mainCtrl', function($scope, dates, misc, slideshowFactory) {
  // Misc Info
  $scope.contactInfo = misc.contactInfo;

  // Slideshow info
  $scope.plusSlides = slideshowFactory.plusSlides;
  $scope.currentSlide = slideshowFactory.currentSlide;

  // Date info
  $scope.lastUpdatedDate = dates.lastUpdatedDate.replace(/\//g, '.');
  $scope.formatMonthFirstDate = dates.formatMonthFirstDate;
  $scope.tomorrow = dates.tomorrow;
});
