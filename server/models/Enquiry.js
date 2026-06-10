const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  phone:   { type: String, default: '' },
  product: { type: String, default: '' },
  msg:     { type: String, required: true },
  status:  { type: String, default: 'new', enum: ['new', 'replied', 'closed'] },
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', EnquirySchema);
