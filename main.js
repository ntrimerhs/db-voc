const express = require("express");
const app = express();
const rdl = require("readline")
const filesystem = require("fs");
const l = console.log
const process = require("process")
const std = process.stdout
const colors = {
  "yellow": [33, 89],
  "blue": [34, 89],
  "green": [32, 89]
}
const spinners = JSON.parse(filesystem.readFileSync('./spinners.json').toString())
class Spinner {
  constructor() {
      this.timer = null
      this.colorTxt = {
          start: "",
          stop: ""
      }
  }

  spin(spinnerName) {
      process.stdout.write("\x1B[?25l")
      const spin = spinners[spinnerName]
      const spinnerFrames = spin.frames
      const spinnerTimeInterval = spin.interval
      let index = 0
      this.timer = setInterval(() => {
          let now = spinnerFrames[index]
          if (now == undefined) {
              index = 0
              now = spinnerFrames[index]
          }
          std.write(this.colorTxt.start + now + this.colorTxt.stop)
          rdl.cursorTo(std, 0, 0)
          index = index >= spinnerFrames.length ? 0 : index + 1
      }, spinnerTimeInterval)

  }

  color(colorName) {
      colorName = colors[colorName]
      this.setColor(colorName)
      return this
  }

  setColor(colorName) {
      this.colorTxt.start = "\x1b[" + colorName[0] + "m"
      this.colorTxt.stop = "\x1b[" + colorName[1] + "m\x1b[0m"
  }
}

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
new Spinner().color("blue").spin("line")
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
console.log("\n\nLast deployment:", year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
