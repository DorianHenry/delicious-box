angular.module('moduleDeliciousBox').directive('playerLigneTemps', ['$interval', 'timeLineRepository',  function($interval, timeLineRepository){ 
  // Runs during compile
  
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
     scope: {
      ligneTemps : "=playerLigneTemps"
     }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'js/app/Directive/playerLigneTemps.html',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope) {
     
     $scope.instruments= instruments;
     $scope.bpm=150;
     $scope.tempo= function()
     {
        return (60000/$scope.bpm)/2;
     };
     
     $scope.currentTime;
     
       var i = 0,
        player;

     function _interval(){
        
        if ($scope.ligneTemps.batterie) {
           
           angular.forEach($scope.ligneTemps.batterie[i], function(element){
           if(element.isActive)
           {
               eval(element.instrument + element.key).play();
              
           };
            });
        
            $scope.currentTime = $scope.ligneTemps.batterie[i];


        }
        
        if($scope.ligneTemps.basse)
        {
            angular.forEach($scope.ligneTemps.basse[i], function(item){
            bassedefault.play({ pitch : item.pitch+2, env : { hold : item.tempsIni/1000*$scope.tempo()}});
           
            });
            
            
            $scope.currentTime = $scope.ligneTemps.basse[i];
        }
        
        if($scope.ligneTemps.synthe)
        {
            angular.forEach($scope.ligneTemps.synthe[i], function(item){
            pianodefault.play({ pitch : item.pitch+4, env : { hold : item.tempsIni/1000*$scope.tempo()}});
           });
            
            
            $scope.currentTime = $scope.ligneTemps.synthe[i];

        }
        
         if($scope.ligneTemps.synthelead)
        {
            angular.forEach($scope.ligneTemps.synthelead[i], function(item){
            synthe.play({ pitch : item.pitch+4, env : { hold : item.tempsIni/1000*$scope.tempo()}});
           
            });
            
            
            $scope.currentTime = $scope.ligneTemps.synthelead[i];

        }
        
        i++;

            if(i >= 16)
            {
                i = 0;
            }
     }
         
     $scope.play = function()
     {
        _interval();
        player = $interval(_interval, $scope.tempo());
     };
     
     $scope.stop = function()
     {
         $interval.cancel(player);
     };
     
     $scope.add= function($index)
    {
        $scope.timeLine[$index].push($scope.newTimeLine[$index]);
        $scope.newTimeLine[$index] = {pitch: null, duration: null};
    };
    
    $scope.delete= function($index)
    {
        $scope.item[$index]={};
    };
    
    
    $scope.save= function()
    {
        timeLineRepository.SetInstrument($scope.ligneTemps);
    };
    
    if(timelineId !==0)
    {
        timeLineRepository.GetInstrument(timelineId).then(function(response)
        {
            console.log(response);
            $scope.ligneTemps= response.data;
        });
    }
    
    
    }
  };
}]);
