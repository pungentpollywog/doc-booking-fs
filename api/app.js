import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import doctorsRouter from './src/routes/doctors.js';
import { signup } from './src/controllers/auth-controller.js';

const app = express();
const port = 3000;

app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.get('/',  (req, res) => {
  res.send('Doctor Booking API');
});

app.use('/doctors', doctorsRouter);

app.post('/register', register);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
