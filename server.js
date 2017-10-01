"use strict"
const webSocket = require('ws');
const http = require('http');
const https = require('https');
//const crypto = require('crypto');

var MongoClient = require('mongodb').MongoClient;

// Connection URL 
var url = 'mongodb://control:control1234@ds159254.mlab.com:59254/control';

// Use connect method to connect to the Server 


MongoClient.connect(url, function(err, db) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected correctly to server");
        db.close();
    }
});


const wss = new webSocket.Server({ port: 8081 });

let connectionsCout = 0;
wss.on('connection', function connection(ws) {
    ws.on('message', (message) => { });
    ws.on('close', () => { });
    ws.send(JSON.stringify({
        message: "Hello"
    }), (error) => { });
});