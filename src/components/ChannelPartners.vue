<template>
    <section>
        <h2 class="text-center mt-6">CHANNEL PARTNER / BROKER FORM</h2>
        <div class="mt-8"></div>
        <v-form @submit.prevent="submit" ref="form">
            <div class="center-form add-form">
                <v-text-field hint="Please enter your full name." v-model="obj.name" variant="solo" :rules="errorMessage.name" label="Full Name*">
                </v-text-field>
                <v-text-field  hint="Specify the city or location where you are based or operate." v-model="obj.location" variant="solo" :rules="errorMessage.location" type="text"
                    label="City / Location Name*">
                </v-text-field>
                <v-text-field hint="Enter email address"  v-model="obj.email" variant="solo" :rules="errorMessage.email" label="Email Address*"></v-text-field>
                <v-text-field hint="Provide your contact information, including phone number.*"  v-model="obj.contact" variant="solo" :rules="errorMessage.contact" label="Contact Details*">
                </v-text-field>
                <v-text-field hint="If you represent a company, please provide the name of the organization."  v-model="obj.company" variant="solo" label="Company Name">
                </v-text-field>

                <br>
                <v-chip color="orange" class="mb-2">
                    Select Expertise in
                </v-chip>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="obj.expertise" value="Residential" id="1">
                    <label class="form-check-label" for="1">
                        Residential
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="obj.expertise" value="Commercial" id="2">
                    <label class="form-check-label" for="2">
                        Commercial
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="obj.expertise" value="Both" id="3">
                    <label class="form-check-label" for="3">
                        Both
                    </label>
                </div>

                <p class="mb-4" v-if="error1" style="color: red">*{{ error1 }}</p>


                <v-text-field hint="How many years of experience do you have in real estate or as a broker?"  v-model="obj.experience" variant="solo" :rules="errorMessage.experience" type="Number" label="Years of Experience*">
                </v-text-field>

            </div>
            <div class="text-center mt-5 mb-8">
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
        <v-card loading :text="`We are Sending your information to our Team... Please Wait...`"
            subtitle="Confirmation"></v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            snackbar: false,
            errorMessage: {
                name: [v => !!v || 'Please Enter Project Name'],
                location: [v => !!v || 'Please Enter your Location'],
                contact: [v => !!v || 'Please Enter your Contact Details'],
                experience: [v => !!v || 'Please Enter your Experience in Years'],
                email: [
                    value => {
                        if (value) return true

                        return 'E-mail is required.'
                    },
                    value => {
                        if (/.+@.+\..+/.test(value)) return true

                        return 'E-mail must be valid.'
                    },
                ],
            },
            obj: {
                email:'',
                name: '',
                location: '',
                contact: '',
                company: '',
                expertise: '',
                experience: '',
            }
        }
    },
    computed: {
        error1() {
            if (this.obj.expertise === '') {
                return 'Please Select your Expertise';
            }
            return '';
        },
    },
    mounted() {

    },
    methods: {
        async sendMail(obj) {
            let name = obj.name;
            let email = obj.email;
            let senderType = 'Channel Partner';

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlNzJkYTFkZjUwMWNhNmY3NTZiZjEwM2ZkN2M3MjAyOTQ3NzI1MDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MzgzNTM2Nzc4NjgzMTM2ODY4IiwiZW1haWwiOiJndXJ1bmV0d29yay53ZWJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJweW05V1d6TlFnVHpXVGNKMUZST3FRIiwibmJmIjoxNzAwOTE0ODI1LCJpYXQiOjE3MDA5MTUxMjUsImV4cCI6MTcwMDkxODcyNSwianRpIjoiODBlMjBhMWQ3OGMwNWYyMDEzZjAwMWYxYTk3MmEwZmNmMGFjN2I1NSJ9.c0gpWIJe6mlZMznwcTCMvEdUM9fIHwygU3OykmKX2Zyh9nTj1xYxGbIVjQrJz7WTjq4tz7ogWyeTUm1h0tv2LQ1grpYrDy7iCTc3tdj1HDER2rjgAt6Zp_ddaaeUufvM4ctUNSbIcQO-xAhQZp1K3wfnGIrMjXV-ee86ptkCGUjR5-R4yxYv3ixgKyuNl-ip0ZcTY_H84Y_2Jh78jEWTZjXrlzP1jM11uX4zZRFcdOdjR3EtYeto9fr97zpz3BTopXjIi2HhKhco9V92G76kMn-Fk2mik95hShuoFGKN2pCS883rKXBaP6fj4IdMJT34uWarnzTPqYDZ0dnMPsTpXg'
            }
            let body = JSON.stringify({
                name, email, senderType
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
            this.$refs.form.reset();
            this.obj.expertise = '';
            this.$refs.form.resetValidation();
        },
        async submit() {
            const validate = await this.$refs.form.validate();
            if (validate.valid && this.obj.expertise !== '') {
                this.$store.dispatch('addBrokerData', this.obj);
                this.snackbar = true;
                this.sendMail(this.obj);
                setTimeout(() => {
                    this.handleReset();
                    this.snackbar = false;
                    this.$router.push('/success');
                }, 5000);
            }
        },
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