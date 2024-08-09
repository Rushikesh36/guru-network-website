<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {

        }
    },
    methods: {
        handleSubmit() {
            axios.post('http://localhost:3000/api/phonepe/payment', {
                data: {
                    name: 'Abhishek',
                    email: 'abhishekwani619@gmail.com',
                    phone: '1234567890',
                    amount: 25000,
                    user_id: Math.floor(100 + Math.random() * 900),
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