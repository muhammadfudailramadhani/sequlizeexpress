const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config
const port = process.env.PORT || 8000;
//kalo ada ngambil dari env
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port , ()=>{
 console.log(`server is running on port ${port}`);
});//menjalankan server harus 2000 ke atas
