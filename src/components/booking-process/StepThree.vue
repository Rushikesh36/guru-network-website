<template>
    <div v-if="status">
        <CalendlyPage />
    </div>
    <div v-else>
        Booking already done, please check your email
    </div>
</template>

<script>
import CalendlyPage from './CalendlyPage';

export default {
    mounted() {
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
    },
}
</script>