import { createStore } from 'vuex';
import { addBuyerData, addSellerData, addDeveloperData, addLegalData, addBrokerData , addGeneralData, addFinanceData, addParchiData, addMeetingData, checkStatus, setBookingStatus } from './index';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const config = {
//   apiKey: "AIzaSyAqGzRGsNMI_LQPZKsJEz8SrH8gVMjj7Rg",
//   authDomain: "wani-samaj.firebaseapp.com",
//   projectId: "wani-samaj",
//   storageBucket: "wani-samaj.appspot.com",
//   messagingSenderId: "236432959431",
//   appId: "1:236432959431:web:dbbe6674c7f310acabdbe2"
// };

// firebase.initializeApp(config);

const store = createStore({
  state: {
    uid: '5c88EYnDAcfGUJXk4XZivrb1mBD2',
    phoneNumber: '+919920690020',
    status: false,
  },
  actions: {
    addSellerData({state}, obj){
      console.log(state);
      addSellerData(obj);
    },
    addBuyerData({state}, obj){
      console.log(state);
      addBuyerData(obj);
    },
    addParchiData({state}, obj){
      console.log(state);
      addParchiData(obj);
    },
    addFinanceData({state}, obj){
      console.log(state);
      addFinanceData(obj);
    },
    addGeneralData({state}, obj){
      console.log(state);
      addGeneralData(obj);
    },
    addDeveloperData({state}, obj){
      console.log(state);
      addDeveloperData(obj);
    },
    addLegalData({state}, obj){
      console.log(state);
      addLegalData(obj);
    },
    addBrokerData({state}, obj){
      console.log(state);
      addBrokerData(obj);
    },
    addMeetingData({state}, obj){
      console.log(state);
      addMeetingData(obj);
    },
    async checkStatus({state}) {
      console.log(state);
      state.status = await checkStatus(state.uid,state.phoneNumber);
      console.log(state.status);
    },
    setBookingStatus({state}) {
      console.log(state);
      setBookingStatus(state.uid,state.phoneNumber);
    }
    
  },
  getters: {
  
  }
});

export default store;