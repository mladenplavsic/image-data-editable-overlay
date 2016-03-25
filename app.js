angular.module('app', [
    'ngMessages'
    ,'ngResource'
    ,'ui.bootstrap'
]).filter('replace', function () {
    return function (string, regex, replacement) {
        return string.replace(new RegExp(regex), replacement);
    }
}).controller('controller', function ($scope, $http, $parse, $uibModal) {

    $scope.reset = reset;
    $scope.range = range;
    $scope.parse = parse;
    $scope.submit = submit;
    $scope.configure = configure;
    $scope.reload = reload;

    $scope.data = {};
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

    function configure(config) {
        var modalInstance = $uibModal.open({
            templateUrl: 'config.html',
            controller: 'configController',
            resolve: {
                config: function () {
                    return config;
                }
            }
        });

        modalInstance.result.then(function (config) {
            localStorage.setItem('config', JSON.stringify(config));
            reset();
        });
    }

    function reset(resetConfiguration) {
        if (resetConfiguration) {
            localStorage.removeItem('config');
        }
        var config = localStorage.getItem('config');
        if (config) {
            $scope.config = JSON.parse(config);
        } else {
            $scope.config = false;
            $http.get('config.json').success(function (response) {
                $scope.config = response;
            }).error(function () {
                alert('Missing configuration! Copy config.json.dist to config.json and make your own configuration')
            });
        }
    }

    function reload() {
        window.location.reload();
    }

});