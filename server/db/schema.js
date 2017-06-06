var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var CreditSchema = new Schema({
  note: { type: String, required: true },
  total: { type: String, required: true },
  created_at: {type: Date},
  updated_at: {type: Date}
});

CreditSchema.pre('save', function (next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

var ExpenseSchema = new Schema({
  note: { type: String, required: true },
  total: { type: String, required: true },
  created_at: {type: Date},
  updated_at: {type: Date}
});

ExpenseSchema.pre('save', function (next) {
  now = new Date();
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

var CreditModel = mongoose.model("Credit", CreditSchema);
var ExpenseModel = mongoose.model("Expense", ExpenseSchema);

module.exports = {
  Credit: CreditModel,
  Expense: ExpenseModel
};
