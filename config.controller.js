angular.module('app').controller('configController', function (config, $scope, $uibModalInstance, $cookies) {

    $scope.config = config;
    $scope.submit = submit;
    $scope.cancel = cancel;

    function submit() {
        $uibModalInstance.close(config);
    }

    function cancel() {
        $uibModalInstance.dismiss('cancel');
    }

});