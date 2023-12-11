// Replace with your Firestore credentials
const firebaseConfig = {
  apiKey: "AIzaSyCCJqJbDoXeczrKtK2AoBtJ5oeUcNrCbCE",
  authDomain: "guru-network-ab08d.firebaseapp.com",
  projectId: "guru-network-ab08d",
  storageBucket: "guru-network-ab08d.appspot.com",
  messagingSenderId: "886480936605",
  appId: "1:886480936605:web:71050f5c9ab8b59dd37e74",
};

const firestoreKey = {
  type: "service_account",
  project_id: "guru-network-ab08d",
  private_key_id: "fa9e4d7896a518ea69b764fe0372f7de4f9a11fb",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCKYKKu8jy39rMi\ntYuxsLeXps75jyD4xE7XdYLJtCWpa56gEAO/CuwQkGdatnjGGENpmKEADBgVBiFk\nu7LvK2BjpV/8rVm/SS/w02DR3amJwUmYhDsvZP8eUwSTdfaZzc9MzpVo1lpaqrZq\n/z1PlCqtq8f+32T+5k4gb8npgMyxtNSpW8G+BcttHKk/3T3ctUkLMxAyFaBtu5Fi\nAV1KUCqGkJU4NEaCHiKL9j9r99cnYx309zr9rCwfQdbmpg1Vy2AK48OpfigNv0Q1\nh5TpZZtUZ7f+FniojraK5hvOEuXqw8AtDR7beo3gOlSUgbNqW/Ff6H3Q3UB+Bkpv\nsEIlkYYBAgMBAAECggEAAbpn6rdZUDb4TRCTTOP1EYOQk/ncWJX/SfIgiN1HT4Gx\nyZwEl3Wa/dCXXVjwOoFb4WshxtvXzsaoqurcDuAJ1km+2HuH3n9rBhL2O329KeR6\nS0mKuY51YBEbam3pn1lsX3A4qgZcCtQFJuI+104tb6WAqBF9N/CbcPzTar9YQxd/\nUUpiJ8Mjth4O1Iqlqxjp+wTRpXwqbENCjNj4j5fIyHFwzt3wNxiUX5iuQddr8Xxk\nS8otY+kQ5NR8jNnpOtPrwI8EgTWI2rr8MK9lKc1GoovzxfMpWA/REGHkHdD1oMEZ\nR92YMuesjhSWvXnVT+H2kBfNJrS5f8pnuRVbT+hUIQKBgQC8Ti9PrQuxMwmpsWXU\nejP3T04Ptxdsi5hcGWwZujwgGaWHCIXZat2nJIaz+UzTRAKisfBy9UFoU0Q4FzsQ\nf23x+SFNM2qS4XpqoWTmAGW3zutGQDFlnHfxWdJPsGbIVxLFzlidoYaoKQ9Zd/GQ\n+/pxGRXurksklx3VKcyMTXPEIQKBgQC8H5C/UPmkOo6P+wIGQ8w3HrAerROtKBMP\nj1y/eMkZurhxhkYAJ5wiyxt988834KcNVOH+OUhuG7ppCJwoF6PKP3VSw0gUli9k\nBycjjeRuzYFtSTWhcsRhzXEfiKX8I/LOnI6eaal36LfMJSa5zrL/QdnIwKarMG5p\nSxCE8E2F4QKBgQCOvbmxbRyS23x0rOvjECt6ShyDXygbeQoqrn66Vekj8C0A2l4U\nPKT/AXo2zUEGWOSijb4WdoF5Yr0ww7NbQy2FonMzAUnFQ7S3RdalXyG8HtdMLncD\nboOhaZQ6Ih8XuKGbXlrgSsQ3jsB68qgkXk4vE3QDtQ1zFDZiEshihoe94QKBgQCT\ntmlOf4N1W3FDRoFBcAyynwsFGzte9B97UUMvKOUmqcFXimn+hxuHClns3PqxUll5\nE1Rb7JidtHH7NQKATIeUL52svZ8kYwSVEzS9KxXZls1whVJyEY53iPuxGffS8lsd\ntjoZ0rd5aqaeyfENZmqQGSGrCvITavTXAlTXPWRxoQKBgF+nUl3R1c+doUsXDG7F\nz+yuWmhsqbKmaqWA9aY/4jJ65smZPugevH25CBSq7gmB+3ZbkcCALdLbsCyKqnn3\n5qHlJQ3d/4OcHNof29uGpVCChT908oT85Pr6eX3+hLbb5MMQwzEcH34LSU2BaK3R\n1PYOuFD5XAcNAiA1565tNdfS\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-ngy4d@guru-network-ab08d.iam.gserviceaccount.com",
  client_id: "107941821497084252063",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ngy4d%40guru-network-ab08d.iam.gserviceaccount.com"
};

function checkValueInColumn(value, columnRange) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log(columnRange);
  var values = sheet.getRange(columnRange).getValues();

  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === value) {
      return 0;
    }
  }

  return 1;
}

function doGet() {
  Logger.log("1")
  const firestore = FirestoreApp.getFirestore(firestoreKey.client_email, firestoreKey.private_key, firestoreKey.project_id);
  Logger.log("2")
  const data = firestore.query("parchi").OrderBy('timestamp').Execute();
  Logger.log(data[0]);

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  for (let i = 0; i < data.length; i++) {
    let id = data[i].name.split('/');
    id = id[id.length - 1];
    Logger.log(id);
    const check = checkValueInColumn(id, "A:A")

    if (check) {
      let name = data[i]?.fields?.name?.stringValue;
      let location = data[i]?.fields?.location?.stringValue;
      let email = data[i]?.fields?.email?.stringValue;
      let phoneNumber = data[i]?.fields?.phoneNumber?.stringValue;

      let timestamp = data[i]?.fields?.timestamp?.timestampValue;
      var sheet = ss.getSheets()[0];
      sheet.appendRow([id, name, location, email, phoneNumber,timestamp]);
    }

  }

}