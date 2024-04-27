require('dotenv').config();
const express = require('express');
const userRoute = require('./Routes/UserRoute');
const bookRoute = require('./Routes/bookRoute');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
});
app.use(limiter);
app.use(express.json());
app.use(cors());

app.use('/auth', userRoute);
app.use('/books', bookRoute);

// enable the static url

// `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.otro2lv.mongodb.net/`
app.listen(port, async (req, res) => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.otro2lv.mongodb.net/`
    )
    .then((responce) => {
      console.log('server is connected with databse ');
    })
    .catch((error) => {
      console.log(`server connection is faild  ${error}`);
    });

  console.log('server is live on the http://localhost:8080');
});
