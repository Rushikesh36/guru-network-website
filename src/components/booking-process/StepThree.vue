<template>
    <div v-if="status === 'paid'">
        <CalendlyPage />
    </div>
    <div v-else-if="status === 'n/a'">
        Booking already done, please check your email
    </div>
    <div v-else-if="status === 'not-paid'">
        You have not made any payments, please make a payment first through out booking system
        Link to booking page
    </div>
    <div v-else>
        Page not found
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