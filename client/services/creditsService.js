angular.module('BudgetApp')
    .service('CreditsService', CreditsService);

CreditsService.$inject = ['$http'];

function CreditsService($http) {
    const self = this;

    self.getCredits = getCredits;
	self.addCredit = addCredit;


    function getCredits () {
        return $http.get('/credits');
    };

 self.addCredit = function (newCredit) {
        return $http.post('/credits', newCredit);
};
};