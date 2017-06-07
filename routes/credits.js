var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST
var methodOverride = require('method-override') //used to manipulate POST
var Credits = require('../server/models/credit');

// GET
router.get('/', function (request, response) {
  Credits.find(function(error, credits) {
    if(error) {console.log ('Could not find any credits');
    return
    }
    response.json({credits: credits});
  });
});
// POST
router.post('/', function (request, response) {
   var credit = new Credit(request.body);

  credit.save(function(error) {
    if(error) response.json({messsage: 'Could not create credit b/c:' + error});

    response.json({credit: credit});
  });
});

module.exports = router;

