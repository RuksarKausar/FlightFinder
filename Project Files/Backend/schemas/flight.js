import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airline: String,
  from: String,
  to: String,
  date: String,
  returnDate: String,
  price: Number,
  classType: String,
  duration: String,
  seatsAvailable: Number
});

export default mongoose.model('Flight', flightSchema);