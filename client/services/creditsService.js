angular.module('BudgetApp')
    .service('CreditsService', CreditsService);

CreditsService.$inject = ['$http'];

function CreditsService($http) {

    var self = this;

    self.getCredits = function () {
        return $http.get('/credits');
    };
};

 self.addCredit = function (newCredit) {
        return $http.post('/credits', newCredit);
};