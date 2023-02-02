const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/data", (req, res) => {
  axios
    .get(
      "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/" +
        req.query.page_count,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log("err", err);
      res.send(err);
    });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
