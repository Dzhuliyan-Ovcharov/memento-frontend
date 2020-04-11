// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// const cors = require('cors');
const proxyBlob = require('http-proxy-middleware');
const fs = require('fs');

// var rabbitConn = require('./connection');

const app = express();
const DIST_FOLDER = path.join(process.cwd(), 'dist/memento-frontend');


// Parsers for POST data
app.use(bodyParser.json({limit: '20mb'}));

app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' }));

// app.use(cors());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/memento-frontend')));

app.use('/api', proxyBlob(
    {
        target: "http://127.0.0.1:8081",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }
));

const port = '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/memento-frontend/index.html'));
});
