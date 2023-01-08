const express = require("express");
const app = express();

var ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
const fs = require('firebase-admin');
const serviceAccount = require("./key.json");
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore();
var sleep = require('system-sleep');


db.collection("emails").get().then(snapshot=>snapshot.docs.forEach(doc=>console.log(doc.data())))