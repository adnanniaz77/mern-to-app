const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});