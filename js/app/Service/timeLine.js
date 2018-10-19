angular.module('moduleDeliciousBox').factory('timeLineRepository', ['$http', function($http){

 

  var url = 'api.php';
   

 

  return {

    SetInstrument: function(timeline)

    {
      return $http.post(url, {timeline : timeline});
    },
    
    GetInstrument: function(timelineId)

    {
      return $http.get(url + '?id=' +timelineId);
    }

  };

}]);