const express = require('express');
const userRoutes = require('./routes/userRoutes');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use("/user",userRoutes);

app.listen(PORT, () => {
    console.log("Server listening to port", PORT);
});
