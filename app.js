const loaders = require('./src/loaders/index');
const express = require('express');

async function startServer(){
    
    require('./src/models/db');
    require('dotenv').config();
    const PORT = process.env.PORT;
    const app = express();
    await loaders(app);

    app.listen(PORT, () => {
        console.log(`The server is listening on port ${PORT}`)
    })
}

startServer();
