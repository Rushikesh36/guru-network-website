<template>
        <!-- <div class="calendly-inline-widget" data-url="https://calendly.com/abhishekwani2022/one-on-one"
            style="min-width:320px;height:700px;"></div> -->
            <div class="mt-6">
                <iframe src="https://calendly.com/abhishekwani2022/one-on-one?embed_domain=localhost%3A8080&amp;embed_type=Inline" width="100%" height="950px" frameborder="0" title="Select a Date &amp; Time - Calendly"></iframe>
            </div>
           
</template>

<script>
import axios from 'axios';
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
        async handleIframeMessage(e) {
            if (this.isCalendlyEvent(e)) {
                /* Example to get the name of the event */
                if(e.data.event === 'calendly.event_scheduled') {
                    this.$store.dispatch('setBookingStatus');
                    await this.sendMail();
                    console.log('Event Booked');
                }
                console.log("Event name:", e.data.event);

                /* Example to get the payload of the event */
                console.log("Event details:", e.data.payload);
            }
        },
        async sendMail() {
            let name = this.info.name;
            let email = this.info.email;
            let senderType = 'meeting set';

            const headers = {
                'Access-Control-Allow-Origin': 'https://guru-network-ab08d.web.app',
                'Content-Type': 'application/json',
                'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlNzJkYTFkZjUwMWNhNmY3NTZiZjEwM2ZkN2M3MjAyOTQ3NzI1MDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MzgzNTM2Nzc4NjgzMTM2ODY4IiwiZW1haWwiOiJndXJ1bmV0d29yay53ZWJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJvb1RpTUJKWnlVTERBVmh6TWJJcjRRIiwibmJmIjoxNzAwOTIwNzgxLCJpYXQiOjE3MDA5MjEwODEsImV4cCI6MTcwMDkyNDY4MSwianRpIjoiMzJkZmYxOTc3NjA1ZDM3ZjI0ZTE4ZjhhMzc1MDQ2MDUwNzMyZTdkOCJ9.V9HSKOt-eBz531hJjUlrQfU5pE9CaZI8eUSxsqNcLme1OpioEuR7iDfvtsterwkN5Mb8bMudR9vEV7jeCDBFDh4pQSZ0DjM7CPclrLXSOjHujIjjpAmjSfXMTpR1D3XvDIYMZDayoAPYvkLHk3W-Q3T38cekd9Dx9rgIOJOSemSgp7Sd7JN2WTUxOsM1FE9Rrb8LwT65eLAky-oPHChCEz9zv88gGTORXzhX_GZp6UGC6jHc8UJCGxbEslJbfOG5YPzkCD6eIuDpn-Kw1lRstAzRZgJOlMCMSMSCUkzwzf0YiMuKolDSEt2q4io-HvysWr9vH6ur25SUu1-s8NxmTQ'
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
        isCalendlyEvent(e) {
            return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
        },
    },
    computed: {
        info() {
            return this.$store.state.userData;
        }
    }
}
</script>