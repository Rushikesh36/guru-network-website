<template>
    <section data-aos="fade-up">
        <h2 class="text-center mt-6">BOOK A MEETING</h2>
        <div class="mt-8"></div>
        <div class="stepper">
            <v-stepper :items="['Step 1', 'Step 2', 'Step 3', 'Step 4']">
                <template v-slot:[`item.1`]>
                    <ReadCalendar />
                </template>

                <template v-slot:[`item.2`]>
                    <PaymentGateway />
                </template>

                <template v-slot:[`item.3`]>
                    <CalendarBooking />
                </template>

                <template v-slot:[`item.4`]>
                    <BookingAck />
                </template>
            </v-stepper>
        </div>
        <div class="stepper">
            <!-- <v-stepper alt-labels>
                <v-stepper-header v-model="steps">
                    <v-stepper-item :value="1" :complete="steps > 1" step="1" title="Step 1"></v-stepper-item>

                    <v-divider></v-divider>

                    <v-stepper-item :value="2" :complete="steps > 2" step="2" title="Step 2"></v-stepper-item>

                    <v-divider></v-divider>

                    <v-stepper-item :value="3" :complete="steps > 3" step="3" title="Step 3"></v-stepper-item>

                    <v-divider></v-divider>

                    <v-stepper-item :value="4" :complete="steps > 4" step="4" title="Step 4"></v-stepper-item>
                </v-stepper-header>
            </v-stepper> -->
            <div class="mt-8">
                <div v-if="steps == 1">
                    
                    <v-btn @click="nextStep">Next Step</v-btn>
                </div>
                <div v-if="steps == 2">
                    
                    <v-btn @click="nextStep">Next Step</v-btn>
                </div>
                <div v-if="steps == 3">
                   
                    <v-btn @click="nextStep">Next Step</v-btn>
                </div>
                <div v-if="steps == 4">
                   
                    <v-btn @click="nextStep">Next Step</v-btn>
                </div>
            </div>
            <v-btn @click="nextStep" :disabled="steps !== 4">Finished</v-btn>
        </div>
    </section>

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
import ReadCalendar from './booking-process/ReadCalendar.vue';
import PaymentGateway from './booking-process/PaymentGateway';
import CalendarBooking from './booking-process/CalendarBooking.vue';
import BookingAck from './booking-process/BookingAck.vue';

export default {
    components: {
        ReadCalendar,
        PaymentGateway,
        CalendarBooking,
        BookingAck,

    },
    data() {
       
    },
    methods: {
       

    }

}
</script>
