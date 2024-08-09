import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { serverTimestamp } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCCJqJbDoXeczrKtK2AoBtJ5oeUcNrCbCE",
  authDomain: "guru-network-ab08d.firebaseapp.com",
  projectId: "guru-network-ab08d",
  storageBucket: "guru-network-ab08d.appspot.com",
  messagingSenderId: "886480936605",
  appId: "1:886480936605:web:71050f5c9ab8b59dd37e74",
  measurementId: "G-Q3NL09H9YV"
};


const firebaseApp = firebase.initializeApp(config);
const auth = getAuth(firebaseApp);

const db = firebaseApp.firestore()
const buyer = db.collection('buyer');
const seller = db.collection('seller');
const developer = db.collection('developer');
const legal = db.collection('legal');
const broker = db.collection('broker');
const general = db.collection('general');
const financial = db.collection('financial');
const parchi = db.collection('parchi');
const meeting = db.collection('meeting');

export { auth, RecaptchaVerifier, signInWithPhoneNumber };

export const addBuyerData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await buyer.add(obj);
}

export const addSellerData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await seller.add(obj);
}


export const addDeveloperData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await developer.add(obj);
}

export const addLegalData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await legal.add(obj);
}

export const addBrokerData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await broker.add(obj);
}

export const addGeneralData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await general.add(obj);
}

export const addFinanceData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await financial.add(obj);
}

export const addParchiData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await parchi.add(obj);
}

export const addMeetingData = async (obj) => {
  obj.timestamp = serverTimestamp()
  await meeting.doc(obj.phoneNumber).collection(obj.uid).add(obj);
}

export const checkStatus = async (uid,phoneNumber) => {
  let status = await meeting.doc(phoneNumber).collection(uid).where('paymentStatus', '==', 'success').where('bookingStatus', '==', false).get();
  let result = [];
  status.forEach(doc => {
    result.push(doc.id);
  });
  console.log(result.length>0);
  return result.length>0;
}

export const setBookingStatus = async (uid,phoneNumber) => { 
  let status = await meeting.doc(phoneNumber).collection(uid).where('paymentStatus', '==', 'success').where('bookingStatus', '==', false).limit(1).get();
  let result = [];
  status.forEach(doc => {
    result.push(doc.id);
  });
  await meeting.doc(phoneNumber).collection(uid).doc(result[0]).update({ bookingStatus: true });
  console.log(result);
}