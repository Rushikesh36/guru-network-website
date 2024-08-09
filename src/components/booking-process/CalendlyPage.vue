<template>
        <!-- <div class="calendly-inline-widget" data-url="https://calendly.com/abhishekwani2022/one-on-one"
            style="min-width:320px;height:700px;"></div> -->
            <div class="mt-6">
                <iframe src="https://calendly.com/abhishekwani2022/one-on-one?embed_domain=localhost%3A8080&amp;embed_type=Inline" width="100%" height="950px" frameborder="0" title="Select a Date &amp; Time - Calendly"></iframe>
            </div>
           
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        window.addEventListener('message', this.handleIframeMessage);
    },
    beforeUnmount() {
        window.removeEventListener('message', this.handleIframeMessage);
    },
    methods: {
        handleIframeMessage(e) {
            if (this.isCalendlyEvent(e)) {
                /* Example to get the name of the event */
                if(e.data.event === 'calendly.event_scheduled') {
                    this.$store.dispatch('setBookingStatus');
                    console.log('Event Booked');
                }
                console.log("Event name:", e.data.event);

                /* Example to get the payload of the event */
                console.log("Event details:", e.data.payload);
            }
        },
        isCalendlyEvent(e) {
            return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
        },
    },
}
</script>