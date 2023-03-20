const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");

const pool = require("./database/dbconfigaration")

const app = express();
dotenv.config();

const port = process.env.SERVER_PORT;

app.use(cors());
app.use(bodyparser.json());

const serverlog = pool.query("INSERT INTO serverlifelog (datetime) VALUES (NOW()) RETURNING *");

if(serverlog){
    console.log(`server is connected to the database`);
}
else{
    console.log(`Server is not connected to the database`);
}

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})
