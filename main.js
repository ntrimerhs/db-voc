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

//Print out all the documents
//db.collection("arxikh1").get().then(snapshot=>snapshot.docs.forEach(doc=>console.log(doc.data())))

console.log("\nΕίστε ευχαρηστιμένοι από τις υπηρεσίες μας;\n")

db.collection('arxikh1').get().then(snap => {
  size = snap.size 
  console.log('Πολύ:', size);
});

db.collection('arxikh2').get().then(snap => {
  size = snap.size
  console.log('Αρκετά:', size);
});

db.collection('arxikh3').get().then(snap => {
  size = snap.size
  console.log('Καθόλου:', size);
});

sleep(2*1000);
console.log("\nΠώς σας φάνηκε η εξυπηρέτηση στο κατάστημά μας;\n");

db.collection('deuterh1').get().then(snap => {
  size = snap.size
  console.log('Καλή:', size);
});

db.collection('deuterh2').get().then(snap => {
  size = snap.size
  console.log('Μέτρια:', size);
});

db.collection('deuterh3').get().then(snap => {
  size = snap.size
  console.log('Κακή:', size);
});

sleep(2*1000);
console.log("\nΠώς σας φάνηκε η ποικιλία των προϊόντων μας;\n");

db.collection('trith1').get().then(snap => {
  size = snap.size
  console.log('Καλή:', size);
});

db.collection('trith2').get().then(snap => {
  size = snap.size
  console.log('Μέτρια:', size);
});

db.collection('trith3').get().then(snap => {
  size = snap.size
  console.log('Ελλιπής:', size);
});

sleep(2*1000);
console.log("\nΘα επιλέγατε ξανά το κατάστημά μας;\n");

db.collection('epistrofh-nai').get().then(snap => {
  size = snap.size
  console.log('Ναι:', size);
});

db.collection('epistrofh-oxi').get().then(snap => {
  size = snap.size
  console.log('Όχι:', size);
});

sleep(2*1000);
console.log("\nΘα θέλατε να προσθέσετε κάποιο σχόλιο;\n");

db.collection('sxolio-nai').get().then(snap => {
  size = snap.size
  console.log('Ναι:', size);
});

db.collection('sxolio-oxi').get().then(snap => {
  size = snap.size
  console.log('Όχι:', size);
});


sleep(2150);
console.log("\nLast deployment:", year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
