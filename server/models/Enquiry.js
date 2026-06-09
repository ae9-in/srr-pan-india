const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phone: { type: String, required: true },
  gst: { type: String },
  volume: { type: String, required: true },
  product: { type: String },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Contacted', 'Closed'] },
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', EnquirySchema);
