<template>
    <section data-aos="fade-up">
        <h2 class="text-center mt-6">DIGITAL PARCHI</h2>
        <div class="mt-8"></div>
        <v-form @submit.prevent="submit" ref="form">
            <div class="center-form add-form">
                <v-text-field hint="Please enter your full name." v-model="obj.name" variant="solo" :rules="errorMessage.name" label="Full Name*">
                </v-text-field>
                <v-text-field  hint="Specify the city or location where you are based or operate." v-model="obj.location" variant="solo" :rules="errorMessage.location" type="text"
                    label="City / Location Name*">
                </v-text-field>
                <v-text-field hint="Provide your Email address where you will receive your digital parchi"  v-model="obj.email" variant="solo" :rules="errorMessage.email" label="Email*">
                </v-text-field>
                <v-text-field hint="Provide phone number for contact details"  v-model="obj.phoneNumber" variant="solo" :rules="errorMessage.phoneNumber" label="Phone Number*">
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
import axios from "axios";
export default {
    data() {
        return {
            snackbar: false,
            errorMessage: {
                name: [v => !!v || 'Please Enter Project Name'],
                location: [v => !!v || 'Please Enter your Location'],
                email: [v => !!v || 'Please Enter your Email'],
                configuration: [v => !!v || 'Please Enter your Configuration Details'],
                phoneNumber: [v => !!v || 'Please Enter your Phone Number'],
                developer: [v => !!v || 'Please Enter your Developer Name'],
                project: [v => !!v || 'Please Enter your Project Name'],
                pincode: [v => !!v || 'Please Enter your Pincode'],
            },
            obj: {
                name: '',
                location: '',
                email: '',
                phoneNumber: '',
            }
        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
        async sendMail(obj) {
            let name = obj.name;
            let email = obj.email;
            let location = obj.location;
            let phoneNumber = obj.phoneNumber;
            let developer = obj.developer;
            let project = obj.project;
            let configuration = obj.configuration;
            let senderType = 'Digital Parchi';

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MzgzNTM2Nzc4NjgzMTM2ODY4IiwiZW1haWwiOiJndXJ1bmV0d29yay53ZWJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJWN09HNC10OWpFd0l6Yk4tOENMZEpBIiwibmJmIjoxNzAxNTA0NDMwLCJpYXQiOjE3MDE1MDQ3MzAsImV4cCI6MTcwMTUwODMzMCwianRpIjoiNGU0ZTgzODU5Y2I1MGQzMmJiYzkwZWJiZDQxMTgwZDRhZjkzYWFjMCJ9.MHjQktlijnJ5eJps-hE48irgq4ATJUg43-lhGdI_Bj0giEcWzjI-tKVNFXdle14RV0qLdlwZuxXrPpAc_SOzmhQTv_mXle_eCcg23frs_miE3rly4I-B_j943KzaP8xGduQavrVgcaWgdqiM4XfMTNvvJREGNvoX5nbBWv7kKOc0-hQhnle233Nyzngg27XUQ0gkhZQkIhW2vXbOQWtKlUvgwIgI14jSguAkTruQTI1OncNBbNGqMC__EQPGZuRbEYoX7cabgNAg07xOvAtXfkFHlENBU0a_XOVVVq28iMzlz4Lgnlf2oFjUdl6n36MfVt0TxtSauPHmUHMl178Rlg'
            }
            let body = JSON.stringify({
                name, email, senderType, location, phoneNumber, developer, project, configuration
            });
            const apiurl = `https://us-central1-guru-network-ab08d.cloudfunctions.net/sendParchiEmail`;
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
            this.$refs.form.resetValidation();
        },
        async submit() {
            const validate = await this.$refs.form.validate();
            if (validate.valid) {
                this.sendMail(this.obj);
                this.$store.dispatch('addParchiData', this.obj);
                this.snackbar = true;
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