import { Schema, model } from "mongoose";

const doctorSchema = new Schema({
  name: {
    first: String,
    last: String
  },
  birthDate: Date,
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  phone: String,
  email: String,
  specialty: String,
  yearsExperience: Number,
  practiceHours: String,
  insurance: [String],
  languages: [String],
  office: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    location: {
      latitude: Number,
      longitude: Number
    },
    phone: String,
    email: String
  }
});

export default model('Doctor', doctorSchema);
