<template>
    <div class="message-box container">
        <v-card class="checkout-card">
            <div v-if="status === 'paid'">
                <CalendlyPage />
            </div>
            <div v-else-if="status === 'n/a'">
                <p>Your personal meeting with Mr. Bhavesh Kaware has been successfully booked.
                    <br>
                    Please check your email.
                    
                </p>    
                  <hr>
                <p>
                    If still email not receievd, 
                    <br>
                    Please contact at :
                    <br>
                    <b>Email : contact@gurunetwork.in</b>
                    <br>
                    <b>Phone : +91 858870108</b>
                </p>
            </div>
            <div v-else>
                <p>Page not found</p>
            </div>
        </v-card>
    </div>
</template>

<script>
import CalendlyPage from './CalendlyPage';

export default {
    mounted() {
        this.$store.state.uid = this.$route.params.uid;
        this.$store.state.phoneNumber = this.$route.params.phone;
        this.$store.dispatch('checkStatus');
        const recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        document.head.appendChild(recaptchaScript)
    },
    components: {
        CalendlyPage,
    },
    computed: {
        status() {
            console.log('status from page', this.$store.state.status);
            return this.$store.state.status;
        }
    }
}
</script>

<style scoped>
.checkout-card {
    background-color: greenyellow;
    
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20%;
}
.checkout-card p{
    font-size: 1.2rem;
    
}

</style>