import express from 'express';
import Booking from './booking.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log(req.body);  // Debug input
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ message: 'Booking successful' });
  } catch (err) {
    console.error(err);  // Debug error
    res.status(500).json({ error: 'Booking failed' });
  }
});

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId flightId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Fetch failed' });
  }
});

export default router;