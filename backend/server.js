const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://luckypandumax:8688175453mongodb@testcluster.ajyni.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster",{
}).then(()=>{
    console.log("connected to MongoDB");
}).catch(err => {
    console.log("error connecting to MongoDB", err);
    
})

app.get('/' , (req ,res)=>{
    res.send('Hello World! from backend server');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});