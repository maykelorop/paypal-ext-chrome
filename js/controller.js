angular.module('paypalApp', [])
  .controller('paypalCalculator', function($scope) {

    $scope.monto = 0;
    $scope.tasa = 0;
    $scope.comision = 'Dolares';
    $scope.totalpaypal = 'Dolares';
    $scope.totalbs;

    $scope.calcular = function () {

      if($scope.monto > 0.10000000){
           $scope.comision = ((  $scope.monto * (5.4/100) ) + 0.30).toFixed(4) ;
           $scope.totalpaypal =  ($scope.monto - $scope.comision).toFixed(4);
           if($scope.tasa > 0){
             $scope.totalbs = ($scope.totalpaypal * $scope.tasa).toFixed(0);
           }else{
             $scope.totalbs = 0;
           }
      }else{
          $scope.comision = 0;
          $scope.totalpaypal = 0;
      }

    }


  });
