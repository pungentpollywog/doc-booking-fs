import mongoose, { Schema, model } from 'mongoose';

const apptSchema = new Schema({
  start: { type: Date, required: true }, // 12/03/2024T1500Z
  duration: { type: Number, default: 60 },
  doctorId: { type: mongoose.ObjectId, required: true },
  patientId: { type: mongoose.ObjectId, required: true },
  docNotes: String,
  patientNotes: String,
});

export default model('Appointment', apptSchema);

// 12 - 8p
// [{time: 1200, available: true}, {time: 1300}, ...]
// what are the booked slots for the doctor?
// [1300, 1500]
//
// slots.map((_slot) => {
//   if (_slot.time in [1300, 1500]) {
//     _slot.available = false;
//   }
//   return _slot;
// });
