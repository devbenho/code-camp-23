const express = require('express')
const app = express();
const PORT = 4050;
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
})