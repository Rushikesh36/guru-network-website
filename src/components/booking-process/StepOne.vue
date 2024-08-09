<template>
    <section data-aos="fade-up">
        <h2 class="text-center mt-6">Personal Meeting with Mr. Bhavesh Kaware</h2>
        <div class="mt-8"></div>
        <v-form @submit.prevent="submit" ref="form">
            <div class="center-form add-form">

                <!-- // name -->
                <v-text-field hint="Please enter your full name." v-model="obj.name" variant="solo"
                    :rules="errorMessage.name" label="Full Name*">
                </v-text-field>

                <!-- //email text -->
                <v-text-field v-if="!emailVerified" hint="Provide your Email address" v-model="obj.email" variant="solo"
                    :rules="errorMessage.email" label="Email*">
                </v-text-field>

                <!-- //email text readonly -->
                <v-text-field v-if="emailVerified" hint="Provide your Email address" v-model="obj.email" variant="solo"
                    :rules="errorMessage.email" readonly label="Email*">
                </v-text-field>

                <!-- //email otp verified -->
                <p v-if="emailOtpSent && emailVerified" style="color: green;">Email OTP Verified <v-icon icon="mdi-check"/></p>

                <!-- //email otp wrong -->
                <p v-if="confirmEmailOtp.toString().length === 4 && emailOtpSent && !emailVerified" style="color: red;">OTP Incorrect <v-icon icon="mdi-close"/></p>
                <!-- // send button email -->
                <v-btn v-if="!emailVerified" color="success mb-5" @click="sendOTPtoEmail()">
                    Send OTP
                </v-btn>
                <br>
                <p v-if="emailOtpSent && !emailVerified">Enter OTP</p>
                <v-otp-input v-if="emailOtpSent && !emailVerified" :length="4" variant="solo"
                    v-model="confirmEmailOtp"></v-otp-input>
               
                <v-text-field v-if="!phoneVerified" hint="Provide phone number for contact details"
                    v-model="phone" variant="solo" :rules="errorMessage.phoneNumber" label="Phone Number*">
                </v-text-field>
                <v-text-field v-if="phoneVerified" hint="Provide phone number for contact details"
                    v-model="phone" readonly variant="solo" :rules="errorMessage.phoneNumber"
                    label="Phone Number*">
                </v-text-field>
                <p v-if="phoneOtpSent && phoneVerified" style="color: green;">OTP Verified <v-icon icon="mdi-check"/></p>
                <p v-if="phoneDelay && confirmPhoneOtp.toString().length === 6 &&phoneOtpSent && !phoneVerified" style="color: red;">OTP Incorrect <v-icon icon="mdi-close"/></p>
                
                <div id="recaptcha-container"></div>
                <v-btn v-if="!phoneVerified" color="success mb-5" @click="sendVerificationCode()">
                    Send OTP
                </v-btn>
                <p v-if="phoneOtpSent && !phoneVerified">Enter OTP</p>
                <v-otp-input v-if="phoneOtpSent && !phoneVerified" :length="6" variant="solo-filled"
                    v-model="confirmPhoneOtp"></v-otp-input>
               
                <v-text-field hint="Please Tell your purpose for Meeting" v-model="obj.purpose" variant="solo"
                    :rules="errorMessage.purpose" label="Enter Purpose of Meeting*">
                </v-text-field>
                <v-select label="Meeting Mode" variant="solo" v-model="obj.mode" :rules="errorMessage.mode" type="text"
                    :items="['Virtual', 'In-person']"></v-select>
            </div>
            <div class="text-center mt-5 mb-8">
                <p v-if="submitClicked && !emailVerified">Please verify Email</p>
                <p v-if="submitClicked && !phoneVerified">Please verify Phone Number</p>
                <v-btn class="me-4" type="submit" color="success">
                    Submit
                </v-btn>

                <v-btn @click="handleReset" color="yellow">
                    Reset
                </v-btn>
            </div>
        </v-form>

    </section>

    <v-dialog v-model="snackbar" class="modalWidth" persistent>
        <v-card loading :text="`We are redirecting you to checkout page, please wait ...`"
            subtitle="Confirmation"></v-card>
    </v-dialog>
</template>

<script>
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../../index';
import axios from "axios";
export default {
    data() {
        return {
            snackbar: false,
            errorMessage: {
                name: [v => !!v || 'Please Enter Your Name'],
                purpose: [v => !!v || 'Please Enter your Purpose'],
                email: [v => !!v || 'Please Enter your Email',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Please Enter a valid Email'],

                mode: [v => !!v || 'Please Enter Mode of Meeting'],
                phoneNumber: [
                    v => !!v || 'Phone number is required',
                    v => /^(\+91\d{10}|\d{10})$/.test(v) || 'Phone number must be exactly 10 digits'
                ]
            },
            phone: '',
            obj: {
                name: '',
                purpose: '',
                mode: '',
                email: '',
                phoneNumber: '',
                uid: '',
                paymentStatus: 'n/a',
                bookingStatus: false,
            },
            emailOtp: '',
            confirmEmailOtp: '',
            confirmPhoneOtp: '',
            emailVerified: false,
            emailOtpSent: false,
            phoneOtpSent: false,
            phoneVerified: false,
            submitClicked: false,
            phoneDelay: false,
        }
    },
    computed: {

    },
    mounted() {

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
            if(!this.phone.includes('+91')){
                this.obj.phoneNumber = '+91' + this.phone;
            }
            signInWithPhoneNumber(auth, this.obj.phoneNumber, appVerifier)
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
                this.obj.uid = res.user.uid;
                this.phoneDelay = true;
                this.phoneVerified = true;
                this.isAuthenticated = true;
            }).catch((error) => {
                console.error('Verification failed', error);
            });
        },
        signOut() {
            auth.signOut().then(() => {
                this.isAuthenticated = false;
            });
        },
        sendOTPtoEmail() {
            if (this.obj.name != '' && this.obj.email != '') {
                this.emailOtpSent = true;
                let obj = {
                    name: this.obj.name,
                    email: this.obj.email,
                }
                this.sendMail(obj);
                console.log(this.obj.name);
            }
        },
        async sendMail(obj) {
            let name = obj.name;
            let email = obj.email;
            let emailOtp = Math.floor(1000 + Math.random() * 9000);
            this.emailOtp = emailOtp;
            console.log(emailOtp);
            let senderType = 'Email Otp';

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlNzJkYTFkZjUwMWNhNmY3NTZiZjEwM2ZkN2M3MjAyOTQ3NzI1MDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MzgzNTM2Nzc4NjgzMTM2ODY4IiwiZW1haWwiOiJndXJ1bmV0d29yay53ZWJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJweW05V1d6TlFnVHpXVGNKMUZST3FRIiwibmJmIjoxNzAwOTE0ODI1LCJpYXQiOjE3MDA5MTUxMjUsImV4cCI6MTcwMDkxODcyNSwianRpIjoiODBlMjBhMWQ3OGMwNWYyMDEzZjAwMWYxYTk3MmEwZmNmMGFjN2I1NSJ9.c0gpWIJe6mlZMznwcTCMvEdUM9fIHwygU3OykmKX2Zyh9nTj1xYxGbIVjQrJz7WTjq4tz7ogWyeTUm1h0tv2LQ1grpYrDy7iCTc3tdj1HDER2rjgAt6Zp_ddaaeUufvM4ctUNSbIcQO-xAhQZp1K3wfnGIrMjXV-ee86ptkCGUjR5-R4yxYv3ixgKyuNl-ip0ZcTY_H84Y_2Jh78jEWTZjXrlzP1jM11uX4zZRFcdOdjR3EtYeto9fr97zpz3BTopXjIi2HhKhco9V92G76kMn-Fk2mik95hShuoFGKN2pCS883rKXBaP6fj4IdMJT34uWarnzTPqYDZ0dnMPsTpXg'
            }
            let body = JSON.stringify({
                name, email, senderType, emailOtp
            });
            const apiurl = `https://us-central1-guru-network-ab08d.cloudfunctions.net/sendEmail`;
            await axios.post(
                apiurl,
                body,
                {
                    headers: headers
                }
            )
                .then(() => {
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        handleReset() {
            this.submitClicked = false;
            this.$refs.form.reset();
            this.$refs.form.resetValidation();
        },
        async submit() {
            this.submitClicked = true;
            const validate = await this.$refs.form.validate();
            if (validate.valid && this.emailVerified && this.phoneVerified) {
                this.$store.state.phoneNumber = this.obj.phoneNumber;
                this.$store.state.uid = this.obj.uid;
                this.sendMail(this.obj);
                this.$store.state.userData = this.obj;
                this.$store.dispatch('addMeetingData', this.obj);
                this.snackbar = true;
                setTimeout(() => {
                    this.handleReset();
                    this.snackbar = false;
                    this.$router.push('/meeting/checkout');
                }, 5000);
            }
        },
    },
    watch: {
        confirmEmailOtp(val) {
            console.log(val, this.emailOtp);
            if (Number(val) === this.emailOtp) {
                this.emailVerified = true;
            }
        },
        confirmPhoneOtp(val) {
            if (String(val.length) == 6) {
                console.log(val);
                this.verifyCode();
            }else{
                this.phoneDelay = false;
            }
        }
    },
}
</script>

<style scoped>
.center-form {
    margin: 0 auto;
    width: 50%;
}

.add-form {
    padding: 20px;
}

@media (min-width:768px) {
    .modalWidth {
        width: 50%;
    }
}

@media (max-width:1023px) {
    .center-form {
        margin: 0 auto;
        width: 90%;
    }

}
</style>