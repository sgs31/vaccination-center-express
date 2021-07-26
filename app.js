const loaders = require('./src/loaders/index');
const express = require('express');

async function startServer(){

    const app = express();
    await loaders(app);
    app.listen(3000, () => {
        console.log('The server is listening on port 3000')
    })
}

startServer();
