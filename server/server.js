require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Enquiry = require('./models/Enquiry');

// Root of the project (one level up from /server)
const ROOT = path.join(__dirname, '..');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(ROOT, { index: false })); // serve static files but don't auto-serve index.html

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas (ClusterDEW)'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ─── PAGE ROUTES ───────────────────────────────────────────

app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, 'code.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(ROOT, 'admin.html'));
});

// ─── API ROUTES ────────────────────────────────────────────

// GET all enquiries (admin dashboard)
app.get('/api/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    const formatted = enquiries.map(e => ({
      id:      e._id,
      name:    e.name,
      email:   e.email,
      phone:   e.phone,
      product: e.product,
      msg:     e.msg,
      status:  e.status,
      date:    new Date(e.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enquiries', error });
  }
});

// POST new enquiry (from contact form)
app.post('/api/enquiries', async (req, res) => {
  try {
    const { name, email, phone, product, msg } = req.body;
    if (!name || !email || !msg) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }
    const newEnquiry = new Enquiry({ name, email, phone, product, msg });
    const saved = await newEnquiry.save();
    res.status(201).json({ success: true, id: saved._id });
  } catch (error) {
    res.status(400).json({ message: 'Error saving enquiry', error });
  }
});

// PUT update status (from admin)
app.put('/api/enquiries/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Enquiry not found' });
    res.json({ success: true, status: updated.status });
  } catch (error) {
    res.status(400).json({ message: 'Error updating status', error });
  }
});

// DELETE an enquiry (from admin)
app.delete('/api/enquiries/:id', async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting enquiry', error });
  }
});

// DELETE all enquiries (clear all)
app.delete('/api/enquiries', async (req, res) => {
  try {
    await Enquiry.deleteMany({});
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ message: 'Error clearing enquiries', error });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Aroma Dew server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
