const express = require('express')
const compression = require('compression')
const app = express();
const path = require('path');
const dotenv = require('dotenv').config();
const cors = require('cors');
require('./models')
app.use(cors());
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({extended: true}));

const api = require('./api')

// app.use(express.static(path.join(__dirname, 'upsolve/build')));
app.use('/api', api)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'upsolve/build', 'index.html'));
// });

// app.get("*", (req, res) => {
//     let url = path.join(__dirname, 'upsolve/build', 'index.html');
//     if (!url.startsWith('/api/')) // we're on local windows
//         url = url.substring(1);
//    res.sendFile(url);
//  });


const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log("Server started...");
})