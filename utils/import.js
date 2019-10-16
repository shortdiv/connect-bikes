var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://${process.env.VUE_APP_PROJECT_ID}.firebaseio.com"
});

let db = admin.firestore();

const data = require("./ride-history.json");

data.forEach(item => {
  db.collection("ride-history")
    .add({
      ...item
    })
    .then(docRef => {
      console.log(docRef);
    })
    .catch(err => {
      console.error(err);
    });
});
