var mongoose = require('mongoose');



var requestSchema = new mongoose.Schema({
  sender_id: String,
  recipient_id: String,
  status: String
});


var Request = mongoose.model('Request', requestSchema);

module.exports = Request;
