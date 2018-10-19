angular.module('moduleDeliciousBox').controller('modalBatterie', ['$scope','$modalInstance',
    function ($scope, $modalInstance)
{
    $scope.instruments = instruments;
    
    $scope.timeLine = [];
    
    var temp = [];
    for(var i = 16; i > 0; i--)
    {
        angular.forEach($scope.instruments.batterie.elements, function(element){
           element.isActive = false;
           temp.push(angular.copy(element));
        });
        $scope.timeLine.push(temp);
        temp = [];
//        var length = $scope.timeLine.length - 1;
    }
    
//    console.log($scope.timeLine);
 

    $scope.ok = function () {
      $modalInstance.close($scope.timeLine);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
}]);

