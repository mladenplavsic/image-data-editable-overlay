angular.module('app', [
    'ngMessages'
    ,'ngResource'
]).controller('controller', function ($scope, $http, $parse) {

    $scope.reset = reset;
    $scope.range = range;
    $scope.parse = parse;
    $scope.submit = submit;

    reset();

    function range(length) {
        if (!length) {
            length = 1;
        }
        return new Array(length);
    }

    function parse(expression) {
        return $parse(expression)($scope);
    }

    function submit() {
        $http.post('data.php', {
            data: $scope.data
        }).success(function () {
            window.print();
        }).error(function () {
            if (confirm('Data cannot be saved! Continue printing?')) {
             window.print();
            }
        });
    }

    function reset() {
        $scope.data = {};
        $scope.config = false;
        $http.get('config.json').success(function (response) {
            $scope.config = response;
        }).error(function () {
            alert('Missing configuration! Copy config.json.dist to config.json and make your own configuration')
        });
    }

});