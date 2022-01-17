const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const router = require('./routes');
require("dotenv").config();
app.use(express.json());
app.use(router);
app.listen(port , ()=>{
 console.log(`server is running on port ${port}`);
});//menjalankan server harus 2000 ke atas
