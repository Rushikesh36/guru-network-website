<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <h1 class="checkout-title text-center">Checkout Summary</h1>
                    <v-card class="checkout-card">
                        <v-card-text>
                            <div class="info-row">
                                <span class="info-label">Name:</span>
                                <span class="info-value">{{ info.name }}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Email:</span>
                                <span class="info-value">{{ info.email }}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Phone:</span>
                                <span class="info-value">{{ info.phoneNumber }}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Price:</span>
                                <span class="info-value">₹ 25000</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">GST:</span>
                                <span class="info-value">₹ 4500</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Total:</span>
                                <span class="info-value total">₹ 29500</span>
                            </div>
                        </v-card-text>
                        <div class="text-center">
                            <v-btn @click="handleSubmit" color="#f35525">Pay</v-btn>
                        </div>
                    </v-card>
                </v-col>

            </v-row>

        </v-container>

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

            if (this.info === '') {
                return;
            }
            axios.post('https://us-central1-guru-network-ab08d.cloudfunctions.net/expressApi/api/phonepe/payment', {
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
    },
    mounted() {
        this.info = this.$store.state.userData;
    }
}

</script>

<style scoped>
.checkout-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.checkout-card {
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-row {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}

.info-label {
    font-weight: bold;
    color: #333;
}

.info-value {
    color: #555;
    padding-left: 5%;
}

.total {
    font-size: 20px;
    font-weight: bold;
    color: #1976d2;
}

@media(min-width: 1025px) {
    .v-container {
        padding-left: 20%;
        padding-right: 20%;
    }
}
</style>