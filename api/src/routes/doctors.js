import express from 'express';

import mongoose from 'mongoose';

import Doctor from '../models/Doctor.js';

const router = express.Router();

const host = '127.0.0.1'; // works with IPv4 and IPv6
const port = 27017;
const database = 'db2';
const uri = `mongodb://${host}:${port}/${database}`;

router.get('/', async (req, res, next) => {
  let {limit = 10, page=1} = req.query;
  limit = +limit;
  page = +page;
  const offset = (page - 1) * limit;

  try {
    await mongoose.connect(uri, {serverSelectionTimeoutMS: 5000});

    const total = await Doctor.estimatedDocumentCount();
    const pages = Math.ceil(total / limit);
    const docs = await Doctor.find().limit(limit).skip(offset).exec();

    console.log(docs);

    const response = {
      totalItems: total,
      totalPages: pages, 
      currentPage: page,
      itemsPerPage: limit,
      doctors: docs
    };

    res.send(response);

  } catch (err) {
    res.status(500).end();
  } finally {
    mongoose.connection.close();
  }


});


export default router;