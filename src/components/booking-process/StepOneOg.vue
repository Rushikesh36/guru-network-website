<!-- src/components/PhoneAuth.vue -->
<template>
    <div>
      <h2>Phone Authentication</h2>
      <div v-if="!isAuthenticated">
        <div id="recaptcha-container"></div>
        <input type="text" v-model="phoneNumber" placeholder="Enter phone number" />
        <button @click="sendVerificationCode">Send Verification Code</button>
  
        <div v-if="verificationSent">
          <input type="text" v-model="verificationCode" placeholder="Enter verification code" />
          <button @click="verifyCode">Verify Code</button>
        </div>
      </div>
  
      <div v-else>
        <h3>You are authenticated</h3>
        <button @click="signOut">Sign Out</button>
      </div>
    </div>
  </template>
  
  <script>
  import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../index';
  
  export default {
    data() {
      return {
        phoneNumber: '',
        verificationCode: '',
        verificationSent: false,
        isAuthenticated: false,
      };
    },
    methods: {
      sendVerificationCode() {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
          'size': 'invisible',
          'callback': () => {
            this.onSignInSubmit();
          }
        });
  
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, this.phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            this.verificationSent = true;
          }).catch((error) => {
            console.error('SMS not sent', error);
          });
      },
      verifyCode() {
        const code = this.verificationCode;
        window.confirmationResult.confirm(code).then(() => {
          this.isAuthenticated = true;
        }).catch((error) => {
          console.error('Verification failed', error);
        });
      },
      signOut() {
        auth.signOut().then(() => {
          this.isAuthenticated = false;
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  