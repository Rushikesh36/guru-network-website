<!-- src/components/PhoneAuth.vue -->
<template>
    <section data-aos="fade-up">
        <div class="center-form add-form">
            <h2>Phone Authentication</h2>
            <v-text-field v-if="!phoneVerified" hint="Provide phone number for contact details" v-model="phone"
                variant="solo" label="Phone Number*">
            </v-text-field>
            <v-text-field v-if="phoneVerified" hint="Provide phone number for contact details" v-model="phone" readonly
                variant="solo" label="Phone Number*">
            </v-text-field>
            <p v-if="phoneOtpSent && phoneVerified" style="color: green;">OTP Verified <v-icon icon="mdi-check" /></p>
            <p v-if="phoneDelay && confirmPhoneOtp.toString().length === 6 && phoneOtpSent && !phoneVerified" style="color: red;">OTP
                Incorrect <v-icon icon="mdi-close" /></p>

            <div id="recaptcha-container"></div>
            <v-btn v-if="!phoneVerified" color="success mb-5" @click="sendVerificationCode()">
                Send OTP
            </v-btn>
            <p v-if="phoneOtpSent && !phoneVerified">Enter OTP</p>
            <v-otp-input v-if="phoneOtpSent && !phoneVerified" :length="6" variant="solo-filled"
                v-model="confirmPhoneOtp"></v-otp-input>
        </div>
    </section>
</template>

<script>
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../index';

export default {
    data() {
        return {
            phoneOtpSent: false,
            phoneVerified: false,
            confirmPhoneOtp: '',
            phoneNumber: '',
            phone: '',
            phoneDelay: false,
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
            if (!this.phone.includes('+91')) {
                this.phoneNumber = '+91' + this.phone;
            }
            signInWithPhoneNumber(auth, this.phoneNumber, appVerifier)
                .then((confirmationResult) => {
                    this.phoneOtpSent = true;
                    window.confirmationResult = confirmationResult;
                    this.verificationSent = true;
                }).catch((error) => {
                    console.error('SMS not sent', error);
                });
        },
        verifyCode() {
            const code = String(this.confirmPhoneOtp);
            window.confirmationResult.confirm(code).then((res) => {
                console.log(res);
                this.$store.state.uid = res.user.uid;
                this.$store.state.phoneNumber = this.phoneNumber;
                this.phoneVerified = true;
                this.isAuthenticated = true;
                this.phoneDelay = true;
                this.$router.push(`/meeting/booking/${this.phoneNumber}/${res.user.uid}`);
            }).catch((error) => {
                console.error('Verification failed', error);
            });
        },
        signOut() {
            auth.signOut().then(() => {
                this.isAuthenticated = false;
            });
        },
    },
    watch: {
        confirmPhoneOtp(val) {
            if (String(val.length) == 6) {
                console.log(val);
                this.verifyCode();
            }else{
                this.phoneDelay = false;
            }
        }
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>