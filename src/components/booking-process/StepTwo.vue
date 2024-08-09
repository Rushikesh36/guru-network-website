<template>
    <div>
        <v-btn @click="handleSubmit">Pay</v-btn>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            info: '',
        }
    },
    methods: {
        handleSubmit() {
            this.info = this.$store.state.userData;
            console.log('zippy here',this.info);
            axios.post('http://localhost:5000/api/phonepe/payment', {
                data: {
                    name: this.info.name,
                    email: this.info.email,
                    phone: this.info.phoneNumber,
                    uid: this.info.uid,
                    userid: Math.floor(100 + Math.random() * 900),
                }
            })
                .then(response => {
                    console.log('zippy', response.data.data.data.instrumentResponse.redirectInfo.url);
                    window.location.href = response.data.data.data.instrumentResponse.redirectInfo.url;
                })
                .catch(error => {
                    console.log('zippy2', error);
                });

        }
    }
}

</script>