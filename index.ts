import express, { Request, Response } from 'express';
import { convertSearchData } from "./src/index";
import { Seat, TripType, Passenger, LocationType,SearchDetails } from "./src/SearchDetails";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
// Simple GET endpoint
app.post('/google', (req: Request, res: Response) => {
  const searchData = req.body;
  const result = convertSearchData(searchData);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
