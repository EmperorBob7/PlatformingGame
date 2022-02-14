const express = require("express");
const app = express();
const db = require("better-sqlite3")("levels.db", { verbose: console.log });
const rateLimit = require("express-rate-limit");
const { compress, decompress } = require("compress-json");

const limiter = rateLimit({
  windowMs: 1000, // 1 seconds
  max: 30, // limit each IP to 100 requests per windowMs
  message: "Please try again later, too many requests."
});

app.use(limiter);
app.use(express.static("public"));
app.use(express.json());

const listener = app.listen(process.env.PORT, async () => {
  console.log("Your app is listening on port " + listener.address().port);
  console.log(await db.prepare(`SELECT * FROM Levels`).all());
  //await db.close();
});

app.post("/create", (req, res) => {
  const data = req.body;
  console.log(data);
});

app.post("/compress", (req, res) => {
  try {
    const data = req.body;
    let compressed = compress(data);
    res.json(compressed);
  } catch (e) {
    res.error("Invalid Data");
  }
});

app.post("/decompress", (req, res) => {
  try {
    const data = req.body;
    let decompressed = decompress(data);
    res.json(decompressed);
  } catch (e) {
    res.error("Invalid Data");
  }
});

app.get("/insert/:a/:b", (req, res) => {
  try {
    insert(req.params.a, req.params.b);
    res.send("Success");
  } catch (e) {
    res.send(e);
  }
});

const insert = db.transaction(async (a, b) => {
  await db.prepare(`INSERT INTO levels VALUES (?, ?)`).run(a, b);
});
