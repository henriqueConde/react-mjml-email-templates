import currentCampaing from "./AllCampaings.js";
const express = require('express');
const fs = require("fs");
const path = require('path');


const port = 3000;
const app = express();

const filePath = "./HTML_TEMPLATES/"

app.get(`/Template`, (req, res) => {
  const resolvedPath = path.resolve(filePath + `${currentCampaing[0]}.html`);
  res.sendFile(resolvedPath);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));