<template>
    <section data-aos="fade-up">
        <h2 class="text-center mt-6">BOOK A MEETING</h2>
        <div class="mt-8"></div>
        <div class="text-center">
            <v-btn color="#f35525" @click="handleSubmit()">PAY</v-btn>
        </div>

        <div class="stepper">
            <v-stepper alt-labels v-model="steps">
                <v-stepper-header >
                    <v-stepper-item :value="1" :complete="steps > 1" step="1" title="Step 1"></v-stepper-item>
                   
                    <v-divider></v-divider>
                    <v-stepper-item :value="2" :complete="steps > 2" step="2" title="Step 2"></v-stepper-item>

                    <v-divider></v-divider>

                    <v-stepper-item :value="3" :complete="steps > 3" step="3" title="Step 3"></v-stepper-item>

                    <v-divider></v-divider>

                    <v-stepper-item :value="4" :complete="steps > 4" step="4" title="Step 4"></v-stepper-item>
                </v-stepper-header>
            </v-stepper>
            <div class="mt-8">
                <div v-if="steps == 1">
                    <StepOne />
                    <v-btn @click="steps=2">Next Step</v-btn>
                </div>
                <div v-if="steps == 2">
                    <StepTwo />
                    <v-btn @click="steps=3">Next Step</v-btn>
                </div>
                <div v-if="steps == 3">
                    <StepThree />
                    <v-btn @click="steps=4">Next Step</v-btn>
                </div>
                <div v-if="steps == 4">
                   
                    <v-btn @click="steps=5">Next Step</v-btn>
                </div>
            </div>
            <v-btn @click="nextStep" :disabled="steps !== 4">Finished</v-btn>
        </div>
    </section>
    <ReadCalendar />
</template>

<style>
.stepper {
    padding-left: 20%;
    padding-right: 20%;
}
@media (max-width:1023px){
    .stepper {
    padding-left: 1%;
    padding-right: 1%;
}
}
</style>

<script>
import StepOne from './booking-process/StepOne';
import StepTwo from './booking-process/StepTwo';
import StepThree from './booking-process/StepThree';
import axios from 'axios';

export default {
    components: {
        StepOne,
        StepTwo,
        StepThree,
    },
    data() {
       return {
        steps: 1,
       }
    },
    methods: {
       handleSubmit(){
        axios.post('http://localhost:3000/api/phonepe/payment', {
            data : {
                name : 'Abhishek',
                email : 'abhishekwani619@gmail.com',
                phone : '1234567890',
                amount : 25000,
                user_id: Math.floor(100 + Math.random() * 900),
            }
        })
        .then(response => {
            console.log('zippy',response.data.data.data.instrumentResponse.redirectInfo.url);
            window.location.href = response.data.data.data.instrumentResponse.redirectInfo.url;
        })
        .catch(error => {
            console.log('zippy2',error);
        });

       }
    }

}
</script>
