import express from "express";
import bodyParser from "body-parser";
import AuthRouter from "./routes";
import config from "./config";
import mongoose from "mongoose";
import cors from "cors";

/** connect to db */
mongoose.connect(config.connStr);
mongoose.Promise = global.Promise;

const app = express();
//const PORT = process.env.PORT || 3300;
const PORT = 3300;

app.use(cors()); // API ye farklı originlerden bağlantı sağlamak için.
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

AuthRouter(app);

app.get("/", (req, res) => {
  const sonuc = {
    name: "Rest API.",
    durum: true,
    mesaj: "Tamamlandi."
  };
  res.send(sonuc);
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
