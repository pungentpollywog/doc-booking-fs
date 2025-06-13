import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  credentials: {
    username: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, required: true },
  },
  // type: Patient | Doctor | Admin
});

export default model('User', userSchema);
