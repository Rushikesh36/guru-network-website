import { createStore } from 'vuex';
import { addBuyerData, addSellerData, addDeveloperData, addLegalData, addBrokerData , addGeneralData, addFinanceData, addParchiData, addMeetingData } from './index';
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
    }
    
  },
  getters: {
  
  }
});

export default store;