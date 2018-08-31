
angular.module('weather', [])
    .controller('weatherctrl', function($scope, $http) {

        $scope.getWeather = function() {

            $http.get("https://api.wunderground.com/api/36b799dc821d5836/hourly/q/" + $scope.Ccode + "/" + $scope.Cname + ".json").then(function(data) {

                temp1 = data.data.hourly_forecast[0].temp.english ;
                weather1 = data.data.hourly_forecast[0].condition ;
                icon1 = data.data.hourly_forecast[0].icon_url ;
                temp2 = data.data.hourly_forecast[1].temp.english ;
                weather2 = data.data.hourly_forecast[1].condition ;
                icon2 = data.data.hourly_forecast[1].icon_url ;
                temp3 = data.data.hourly_forecast[2].temp.english ;
                weather3 = data.data.hourly_forecast[2].condition ;
                icon3 = data.data.hourly_forecast[2].icon_url ;
                temp4 = data.data.hourly_forecast[3].temp.english ;
                weather4 = data.data.hourly_forecast[3].condition ;
                icon4 = data.data.hourly_forecast[3].icon_url ;
                temp5 = data.data.hourly_forecast[4].temp.english ;
                weather5 = data.data.hourly_forecast[4].condition ;
                icon5 = data.data.hourly_forecast[4].icon_url ;



                $scope.cw1 = "Current temperature in " +$scope.Cname + " at first hour is " + temp1 + " F and " + weather1;
                $scope.cw2 = "Current temperature in " +$scope.Cname + " at Second hour is " + temp2 + " F and " + weather2;
                $scope.cw3 = "Current temperature in " +$scope.Cname + " at Third hour is " + temp3 + " F and " + weather3;
                $scope.cw4 = "Current temperature in " +$scope.Cname + " at Fourth hour is " + temp4 + " F and " + weather4;
                $scope.cw5 = "Current temperature in " +$scope.Cname + " at Fifth hour is " + temp5 + " F and " + weather5;
                $scope.Image1 = icon1;
                $scope.Image2 = icon2;
                $scope.Image3 = icon3;
                $scope.Image4 = icon4;
                $scope.Image5 = icon5;
            })
        }

    });
