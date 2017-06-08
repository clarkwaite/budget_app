angular.module('BudgetApp')
    .controller('CreditsController', CreditsController);

CreditsController.$inject = ['CreditsService'];

function CreditsController(CreditsService) {
    const vm = this;
    vm.creditEntries = [];
    vm.addCredit = addCredit;
    vm.credit = {};

    vm.getCredits = function () {
        CreditsService.getCredits().then(function (response) {
            vm.creditEntries = response.data.credits;
        });
    }
    vm.getCredits();

    vm.addCredit = function () {
        // make an ajax call to save the new Credit to the database
        // only push to the creditEntries array if the ajax call is successful
        CreditsService.addCredit(vm.credit).then(function () {
            vm.creditEntries.push({
                total: vm.newCreditTotal,
                note: vm.newCreditNote,
                created_at: new Date()
            })

        });
        resetForm();
    }

    function resetForm() {
        vm.newCreditTotal = '';
        vm.newCreditNote = '';
    }
}
module.exports = CreditsController;