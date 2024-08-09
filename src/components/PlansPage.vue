<template>
    <div>
        <div class="background">
            <div class="container">
                <div class="panel pricing-table">

                    <div class="pricing-plan">
                        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
                        <h2 class="pricing-header">Basic</h2>
                        <ul class="pricing-features">
                            <li class="pricing-features-item">30 mins</li>
                            <li class="pricing-features-item">Virtual</li>
                        </ul>
                        <span class="pricing-price">₹ 5000</span>
                        <router-link :to="{ path: '/meeting/form' }" class="pricing-button is-featured">
                            BUY
                        </router-link>
                    </div>

                    <div class="pricing-plan">
                        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img">
                        <h2 class="pricing-header">Standard</h2>
                        <ul class="pricing-features">
                            <li class="pricing-features-item">60 mins</li>
                            <li class="pricing-features-item">Virtual / In-Person</li>
                        </ul>
                        <span class="pricing-price">₹ 10000</span>
                        <router-link :to="{ path: '/meeting/form' }" class="pricing-button is-featured">
                            BUY
                        </router-link>

                    </div>

                    <div class="pricing-plan">
                        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img">
                        <h2 class="pricing-header">Premimum</h2>
                        <ul class="pricing-features">
                            <li class="pricing-features-item">90 mins</li>
                            <li class="pricing-features-item">Virtual / In-Person</li>
                        </ul>
                        <span class="pricing-price">₹ 15000</span>
                        <router-link :to="{ path: '/meeting/form' }" class="pricing-button is-featured">
                            BUY
                        </router-link>
                    </div>

                </div>
            </div>
            <div class="container">
                <v-card class="mx-auto" max-width="800">
                    

                    <v-card-text>
                        <div class="font-weight-bold ms-1 mb-2">Instructions on how to book a meeting with Mr. Bhavesh Kaware</div>

                        <v-timeline align="start" density="compact">
                            <v-timeline-item v-for="message in messages" :key="message.time" dot-color="green"
                                size="x-small">
                                <div class="mb-4">
                                    <div>{{ message.message }}</div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </div>

        </div>
    </div>
</template>
<script>
  export default {
    data: () => ({
      messages: [
        {
          message: `Please choose the plan from the options above that best suits your needs.`,
          color: 'deep-purple-lighten-1',
        },
        {
          message: `Fill out all the required details for booking the meeting.`,
          color: 'deep-purple-lighten-1',
        },
        {
          message: 'Complete the payment process.',
          color: 'green',
        },
        {
          message: 'After the payment is confirmed, book a meeting based on your available time slots.',
          color: 'deep-purple-lighten-1',
        },
        {
          message: 'Once the meeting is booked, a confirmation email will be sent to you.',
          color: 'deep-purple-lighten-1',
        },
      ],
    }),
  }
</script>
<style scoped>
ol {
    list-style-type: disc;
}

html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

.background {
    padding: 0 25px 25px;
    position: relative;
    width: 100%;
}

.background::after {
    content: '';
    background: #ff9372;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#60a9ff', endColorstr='#4394f4', GradientType=0);
    height: 350px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
}

@media (min-width: 900px) {
    .background {
        padding: 0 0 25px;
    }
}

.container {
    margin: 0 auto;
    padding: 50px 0 0;
    max-width: 960px;
    width: 100%;
}

.panel {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 25px;
    position: relative;
    width: 100%;
    z-index: 10;
}

.pricing-table {
    box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
}

@media (min-width: 900px) {
    .pricing-table {
        flex-direction: row;
    }
}

.pricing-table * {
    text-align: center;
    text-transform: uppercase;
}

.pricing-plan {
    border-bottom: 1px solid #e1f1ff;
    padding: 25px;
}

.pricing-plan:last-child {
    border-bottom: none;
}

@media (min-width: 900px) {
    .pricing-plan {
        border-bottom: none;
        border-right: 1px solid #e1f1ff;
        flex-basis: 100%;
        padding: 25px 50px;
    }

    .pricing-plan:last-child {
        border-right: none;
    }
}

.pricing-img {
    margin-bottom: 25px;
    max-width: 100%;
}

.pricing-header {
    color: #888;
    font-weight: 600;
    letter-spacing: 1px;
}

.pricing-features {
    color: #f35525;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 50px 0 25px;
}

.pricing-features-item {
    border-top: 1px solid #e1f1ff;
    font-size: 12px;
    line-height: 1.5;
    padding: 15px 0;
}

.pricing-features-item:last-child {
    border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
    color: #f35525;
    display: block;
    font-size: 32px;
    font-weight: 700;
}

.pricing-button {
    border: 1px solid #9dd1ff;
    border-radius: 10px;
    color: #f35525;
    display: inline-block;
    margin: 25px 0;
    padding: 15px 35px;
    text-decoration: none;
    transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
    background-color: #e1f1ff;
}

.pricing-button.is-featured {
    background-color: #f35525;
    color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
    background-color: #f35525;
}
</style>
