const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev")); // log every request to the console
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})