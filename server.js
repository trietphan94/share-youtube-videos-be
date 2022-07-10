// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import "dotenv/config";
import logger from 'morgan';
import "./db.js"

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

// set up port
const port = process.env.PORT || 4000;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Successful',
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});