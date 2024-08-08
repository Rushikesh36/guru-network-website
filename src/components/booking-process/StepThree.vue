<template>
    <div>
        <div class="calendly-inline-widget" data-url="https://calendly.com/abhishekwani2022/one-on-one"
            style="min-width:320px;height:700px;"></div>
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