const express = require('express');
require("dotenv").config();

const app = express();
const PORT = 3000;
app.get("/",(req,res) =>{
    res.send("hello world !!  hii shivani");
})

app.listen(PORT, () => {
    console.log("Server listening to port", PORT);
});
