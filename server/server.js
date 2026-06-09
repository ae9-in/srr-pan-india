require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Enquiry = require('./models/Enquiry');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes

// Get all enquiries (for admin dashboard)
app.get('/api/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    // Transform _id to id and createdAt to date to match frontend expectations
    const formattedEnquiries = enquiries.map(eq => ({
      id: eq._id,
      businessName: eq.businessName,
      contactPerson: eq.contactPerson,
      phone: eq.phone,
      gst: eq.gst,
      volume: eq.volume,
      product: eq.product,
      status: eq.status,
      date: eq.createdAt
    }));
    res.json(formattedEnquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enquiries', error });
  }
});

// Create a new enquiry (from frontend form)
app.post('/api/enquiries', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    const savedEnquiry = await newEnquiry.save();
    res.status(201).json(savedEnquiry);
  } catch (error) {
    res.status(400).json({ message: 'Error creating enquiry', error });
  }
});

// Update enquiry status (from admin dashboard)
app.put('/api/enquiries/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updatedEnquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }
    res.json(updatedEnquiry);
  } catch (error) {
    res.status(400).json({ message: 'Error updating enquiry', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
