const express = require("express");
const app = express();
const cliProgress = require('cli-progress');

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
const serviceAccount = require("./../keys/pritsoulhs1/key.json");
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore();
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

bar1.start(1200, 0);


db.collection('arxikh1').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})
bar1.update(100);
sleep(3000);
db.collection('arxikh2').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})
bar1.update(200);
sleep(3000);
db.collection('arxikh3').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(300);
sleep(3000);
db.collection('deuterh1').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(400);
sleep(3000);
db.collection('deuterh2').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(500);
sleep(3000);
db.collection('deuterh3').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(600);
sleep(3000);
db.collection('trith1').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(700);
sleep(3000);
db.collection('trith2').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(800);
sleep(3000);
db.collection('trith3').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(900);
sleep(3000);
db.collection('epistrofh-nai').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(1000);
sleep(3000);
db.collection('epistrofh-oxi').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(1100);
sleep(3000);
db.collection('sxolio-nai').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})

bar1.update(1200);
sleep(3000);
db.collection('sxolio-oxi').get().then(querySnapshot => {
    querySnapshot.docs.forEach(snapshot => {
        snapshot.ref.delete();
    })
})


sleep(1000);
console.log("\nLast deployment:", year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
process.exit()