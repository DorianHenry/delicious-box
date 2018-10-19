angular.module('moduleDeliciousBox').controller('SoundsController', ['$scope', '$modal', function ($scope, $modal)
{
    $scope.instruments= instruments;
    
     $scope.timeLines={};
     
    $scope.totalSounds=function()
    {
        return $scope.instruments.length;
    };
    
    $scope.instrumentAdd=function()
    {
        angular.forEach($scope.instruments, function()
        {
            if($scope.instruments.add === true)
            {
                return $scope.instruments.text;
            }
        });
    };
    
    $scope.open = function(instrument)
    {
        switch(instrument.text)
        {
            case 'Batterie' :
                _openBatterie();
               break;
               
            case 'synthe-lead' :
                _openInstrument('synthelead');
              break;
              
            case 'Basse' :
                _openInstrument('basse');
              break;
              
            case 'Piano' :
                _openInstrument('synthe');
              break;
        }
    };
    
    
    function _openBatterie()
    {        
        var modalInstance= $modal.open(
                {
                    templateUrl: 'batterie.html',
                    controller: 'modalBatterie',
                    size: 'lg',
                    resolve: {
                      elements: function () {
                        return $scope.elements;
                      }
                    }
                });
                
         modalInstance.result.then(function (timeline) {
            $scope.timeLines.batterie = timeline;
          }, function () {
            
          });
    }
    
    function _openInstrument(key)
    {
        var modalInstance= $modal.open(
                {
                    templateUrl: 'instruments.html',
                    controller: 'modalInstruments',
                    size:'lg',
                    resolve: 
                            {
                                elements: function()
                                {
                                   return $scope.instruments[key];
                                },
                                timeline : function()
                                {
                                    return  $scope.timeLines[key] || [];
                                },
                                
                                key: function()
                                {
                                    return key;
                                }
                                
                            }
                });
            
            modalInstance.result.then(function (timelineInstrument) 
            {
                $scope.timeLines[key] = timelineInstrument;
            });
    }
    
}]);
