const express = require("express");
const app = express();

var ts = Date.now();
var sleep = require('system-sleep');
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
const fs = require('firebase-admin');
const systemSleep = require("system-sleep");
const serviceAccount = require("./key.json");
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore();


db.collection('arxikh1').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('arxikh2').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('arxikh3').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('deuterh1').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('deuterh2').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('deuterh3').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('trith1').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('trith2').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('trith3').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('epistrofh-nai').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('epistrofh-oxi').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('sxolio-nai').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

sleep(3000);
db.collection('sxolio-oxi').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})


sleep(1000);
console.log("\nLast deployment:", year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
