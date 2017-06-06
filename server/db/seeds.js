var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/budget_app');

var Credit = require('../models/credit');
var Expense = require('../models/expense');

// Use native promises
mongoose.Promise = global.Promise;

var credits = [
    {note: 'Paycheck', total: 500},
    {note: 'Birthday Gift', total: 100},
];

Credit.remove({})
  .then(function(){
    return Credit.create(credits);
  })
  .then(function(credits){
    console.log(credits);
  })

  var expenses = [
    {note: 'Gas Bill', total: 100},
    {note: 'Tacos', total: 10},
];

Expense.remove({})
  .then(function(){
    return Expense.create(expenses);
  })
  .then(function(expenses){
    console.log(expenses);
  })
  .then(function(){
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected');
    });
  });

