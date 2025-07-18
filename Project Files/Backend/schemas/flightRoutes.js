import express from 'express';
import Flight from './flight.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const flight = new Flight(req.body);
    await flight.save();
    res.json({ message: 'Flight added' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add flight' });
  }
});

router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find(req.query);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch flights' });
  }
});

export default router;