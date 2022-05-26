const express = require("express")


const app = express();
const cors = require("cors")
const solc = require('solc');
const fs = require('fs');

// require("./db")
const bp = require("body-parser")
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

// const indexTest = require("./helper/helper")

const port = process.env.PORT || 8000;

app.use(express.json());
const userroutes = require("./routes/supplyroutes");



app.use(cors())


app.use(userroutes)





 app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
