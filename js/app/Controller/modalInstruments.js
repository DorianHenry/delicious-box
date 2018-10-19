angular.module('moduleDeliciousBox').controller('modalInstruments', ['$scope','$modalInstance', 'elements', 'timeline', 'key',
    function ($scope, $modalInstance, elements, timeline, key)
{
    $scope.playedNode = null;
    
    var handlePlayedNode = function(keycode)
    {
        $scope.$apply(function()
        {
           $scope.playedNote = keyBoardNote[keycode]; 
        });
    };
    
    var unHandlePlayedNode = function()
    {
        $scope.$apply(function()
        {
           $scope.playedNote = null; 
        });
    };
    
    keyBoardDispatcher.on.add(myInstruments[key]); //add listener
    keyBoardDispatcher.on.add(handlePlayedNode);
    keyBoardDispatcher.up.add(unHandlePlayedNode);
    
    
    $scope.currentElement = elements;
    
    
    $scope.timeLine = timeline;
    
    $scope.newTimeLine = [];
    
    if ($scope.timeLine.length === 0)
    {
        for(var i = 16; i > 0; i--)
        {
            $scope.timeLine.push([]);
            $scope.newTimeLine.push([]);
        }
    }
 

    $scope.ok = function () {
      $modalInstance.close($scope.timeLine);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
      
    };
    
    $scope.delete= function (parentIndex, elementIndex)
    {
        $scope.timeLine[parentIndex].splice(elementIndex, 1);
    };
    
    $scope.$on('$destroy', function() {
            keyBoardDispatcher.on.remove(myInstruments[key]);
            keyBoardDispatcher.on.remove(handlePlayedNode);
            keyBoardDispatcher.up.remove(unHandlePlayedNode);
        });
    
}]);

