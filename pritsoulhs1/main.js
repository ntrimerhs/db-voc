const express = require("express");
const app = express();
const rdl = require("readline")
const filesystem = require("fs");
const l = console.log
const process = require("process")
const std = process.stdout
const spawner = require('child_process').spawn;

var ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

const fs = require('firebase-admin');
const serviceAccount = require("./../keys/pritsoulhs1/key.json");
fs.initializeApp({
 credential: fs.credential.cert(serviceAccount)
});

const db = fs.firestore();
var sleep = require('system-sleep');
db.collection('arxikh1').get().then(snap => {
  arxikh1 = snap.size 
});
  
db.collection('arxikh2').get().then(snap => {
  arxikh2 = snap.size
});
  
db.collection('arxikh3').get().then(snap => {
  arxikh3 = snap.size
});
sleep(2*1000);
  
db.collection('deuterh1').get().then(snap => {
  deuterh1 = snap.size
});
  
db.collection('deuterh2').get().then(snap => {
  deuterh2 = snap.size
});
  
db.collection('deuterh3').get().then(snap => {
  deuterh3 = snap.size
});
sleep(2*1000);
  
db.collection('trith1').get().then(snap => {
  trith1 = snap.size
});
  
db.collection('trith2').get().then(snap => {
  trith2 = snap.size
});
  
db.collection('trith3').get().then(snap => {
  trith3 = snap.size
});
  
sleep(2*1000);
  
db.collection('epistrofh-nai').get().then(snap => {
  epistrofhNai = snap.size
});
  
db.collection('epistrofh-oxi').get().then(snap => {
  epistrofhOxi = snap.size
});
  
sleep(2*1000);
  
db.collection('sxolio-nai').get().then(snap => {
  sxolioNai = snap.size
});
  
db.collection('sxolio-oxi').get().then(snap => {
  sxolioOxi = snap.size
});
  
db.collection('comments').get().then(snap => {
  comments = snap.size
})
  
db.collection('emails').get().then(snap => {
  emails = snap.size
})
sleep(300);
console.log("Data successfully fetched.");

sleep(300);
console.log('\n---------------------------------------------------------------------------------');
console.log("\nΕίστε ευχαρηστιμένοι από τις υπηρεσίες μας;\n")
console.log('Πολύ:', arxikh1);
console.log('Αρκετά:', arxikh2);
console.log('Καθόλου:', arxikh3);
console.log('\n---------------------------------------------------------------------------------\n');

sleep (300);

console.log('\n---------------------------------------------------------------------------------');
console.log("\nΠώς σας φάνηκε η εξυπηρέτηση στο κατάστημά μας;\n");
console.log('Καλή:', deuterh1);
console.log('Μέτρια:', deuterh2);
console.log('Κακή:', deuterh3);
console.log('\n---------------------------------------------------------------------------------\n');

sleep (300);

console.log('\n---------------------------------------------------------------------------------');
console.log("\nΠώς σας φάνηκε η ποικιλία των προϊόντων μας;\n");
console.log('Καλή:', trith1);
console.log('Μέτρια:', trith2);
console.log('Ελλιπής:', trith3);
console.log('\n---------------------------------------------------------------------------------\n');

sleep (300);

console.log('\n---------------------------------------------------------------------------------');
console.log("\nΘα επιλέγατε ξανά το κατάστημά μας;\n");
console.log('Ναι:', epistrofhNai);
console.log('Όχι:', epistrofhOxi);
console.log('\n---------------------------------------------------------------------------------\n');

sleep (300);
console.log('\n---------------------------------------------------------------------------------');
console.log("\nΘα θέλατε να προσθέσετε κάποιο σχόλιο;\n");
console.log('Ναι:', sxolioNai);
console.log('Όχι:', sxolioOxi);
console.log('\n---------------------------------------------------------------------------------\n');

console.log('\n---------------------------------------------------------------------------------');
console.log('\nΑριθμός Σχολίων:', comments);
sleep(300);
console.log('Αριθμός Email/Τηλεφώνων:', emails);
console.log('\n---------------------------------------------------------------------------------');

sleep(1100);
console.log("Creating the Excel report..");
sleep(100);
console.log("Sending variables to data.py...");

var python_process = spawner("python", 
["./data.py", arxikh1,
              arxikh2,
              arxikh3,
              deuterh1,
              deuterh2,
              deuterh3,
              trith1,
              trith2,
              trith3,
              epistrofhNai,
              epistrofhOxi,
              sxolioNai,
              sxolioOxi,
comments]
);

python_process.stdout.on('data', (data) => {
  console.log('Python says:',data.toString());
});
sleep(1100);
console.log("\n\nLast deployment:", year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);