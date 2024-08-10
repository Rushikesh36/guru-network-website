<template>
    <div class="container mt-8 d-flex justify-content-center">
        <div class="error-container">
            <h4 v-if="errorMessage">{{ errorMessage }}</h4>
            <p v-else>Unknown error occurred.</p>
            <router-link to="/"><v-btn to="/" color="#f35525" class="mt-5">Go Back Home</v-btn></router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errorMessage: ''
        };
    },
    created() {
        this.setErrorMessage();
    },
    methods: {
        setErrorMessage() {
            const errorParam = this.$route.query.error;

            switch (errorParam) {
                case 'statusphonepeError':
                    this.errorMessage = 'There was a problem with the PhonePe transaction status. Please try again later.';
                    break;
                case 'paymentfailed':
                    this.errorMessage = 'Payment failed. Please check your payment method and try again.';
                    break;
                case 'phonepeError':
                    this.errorMessage = 'A PhonePe transaction error occurred. Please contact support if the problem persists.';
                    break;
                case 'internalerror':
                    this.errorMessage = 'Internal Server Error. Please try again later.';
                    break;
                default:
                    this.errorMessage = 'An unexpected error has occurred.';
            }
        }
    }
}
</script>

<style scoped>
body {
    background-color: #f8f9fa;
    color: #343a40;
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.error-container {
    text-align: center;
    max-width: 500px;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

p {
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}
h4{
    line-height: 2.5rem;
}
</style>