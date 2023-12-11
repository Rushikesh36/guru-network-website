<template>
    <section>
        <div class="">
        <h2 class="text-center mt-6">BUYER / SELLER FORM</h2>
        </div>
        <div class="mt-8"></div>
        <v-form @submit.prevent="submit" ref="form">
            <div class="center-form add-form">
                <v-select label="Consumer Type" variant="solo" v-model="obj.consumer" :rules="errorMessage.consumer"
                    type="text" :items="['Buyer', 'Seller']"></v-select>
                <v-chip color="info" class="mb-2">
                    Personal Information
                </v-chip>
                <v-text-field v-model="obj.name" variant="solo" :rules="errorMessage.name" label="Full Name*">
                </v-text-field>
                <v-text-field v-model="obj.phoneNumber" variant="solo" :rules="errorMessage.phone" type="text"
                    label="Phone Number*">
                </v-text-field>
                <v-text-field v-model="obj.email" variant="solo" :rules="errorMessage.email" label="Email*">
                </v-text-field>

                <br>
                <div v-if="obj.consumer != ''">
                    <v-chip color="info" class="mb-2">
                        Property Related Information
                    </v-chip>
                    <br>


                    <div v-if="obj.consumer == 'Seller'">
                        <v-chip color="orange" class="mb-2">
                            Select Property Type
                        </v-chip>
                        <v-select label="Property Type*" variant="solo" v-model="obj.flatType" :rules="errorMessage.flatType"
                            type="text" :items="['1 BHK', '2 BHK', '3 BHK', 'Other',]"></v-select>
                        <v-text-field
                            hint="Enter Property Area i.e. square foot, and property type i.e. 4BHK etc if selected Other Property Type above"
                            v-model="obj.configuration" variant="solo" :rules="errorMessage.configuration"
                            label="Enter Your Property Configuration*">
                        </v-text-field>
                        <v-text-field hint="Enter Property Address" v-model="obj.address" variant="solo"
                            :rules="errorMessage.address" label="Enter Your Property Address*">
                        </v-text-field>
                        <v-text-field hint="Enter Expected Price to Sell the Property" v-model="obj.price" variant="solo"
                            :rules="errorMessage.price" label="Enter Expected Price to Sell the Property*">
                        </v-text-field>
                    </div>

                    <div v-if="obj.consumer == 'Buyer'">
                        <v-chip color="orange" class="mb-2">
                            Select Property Type
                        </v-chip>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.flatType" value="1 BHK" id="1">
                            <label class="form-check-label" for="1">
                                1 BHK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.flatType" value="2 BHK" id="2">
                            <label class="form-check-label" for="2">
                                2 BHK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.flatType" value="3 BHK" id="3">
                            <label class="form-check-label" for="3">
                                3 BHK
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.flatType" value="Other" id="4">
                            <label class="form-check-label" for="4">
                                Other
                            </label>
                        </div>

                        <p class="mb-4" v-if="error1" style="color: red">*{{ error1 }}</p>
                        <v-text-field v-if="obj.flatType.includes('Other')" v-model="obj.otherRequirement"
                            :rules="errorMessage.other" label="Please Enter your Property Requirement">
                        </v-text-field>

                        <v-text-field hint="E.g. Mumbai, Delhi, Kanjurmarg etc.." v-model="obj.locationPreferences"
                            variant="solo" label="Location Preferences">
                        </v-text-field>

                        <v-chip color="orange" class="mb-2">
                            Select Budget Range
                        </v-chip>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.budget"
                                value="Rs 20 Lakh - Rs 50 Lakh" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Rs 20 Lakh - Rs 50 Lakh
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.budget"
                                value="Rs 50 Lakh - Rs 75 Lakh" id="flexCheck1">
                            <label class="form-check-label" for="flexCheck1">
                                Rs 50 Lakh - Rs 75 Lakh
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.budget"
                                value="Rs 75 Lakh - Rs 1 Cr" id="flexCheck2">
                            <label class="form-check-label" for="flexCheck2">
                                Rs 75 Lakh - Rs 1 Cr
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="obj.budget" value="Other"
                                id="flexCheck3">
                            <label class="form-check-label" for="flexCheck3">
                                Other
                            </label>
                        </div>
                        <v-text-field hint="Please Enter your Budget" v-if="obj.budget.includes('Other')"
                            v-model="obj.otherBudget" :rules="errorMessage.other" label="Budget">
                        </v-text-field>
                        <p class="mb-4" v-if="error2" style="color: red">*{{ error2 }}</p>
                    </div>
                    <v-chip color="orange" class="mb-2">
                        Select Facility / Amenities
                    </v-chip>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Parking"
                            id="facility1">
                        <label class="form-check-label" for="facility1">
                            Parking
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Gym" id="facility2">
                        <label class="form-check-label" for="facility2">
                            Gym
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Swimming Pool"
                            id="facility3">
                        <label class="form-check-label" for="facility3">
                            Swimming Pool
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Security"
                            id="facility4">
                        <label class="form-check-label" for="facility4">
                            Security
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Pet-Friendly"
                            id="facility5">
                        <label class="form-check-label" for="facility5">
                            Pet-Friendly
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Balcony/Patio"
                            id="facility6">
                        <label class="form-check-label" for="facility6">
                            Balcony/Patio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Furnished"
                            id="facility7">
                        <label class="form-check-label" for="facility7">
                            Furnished
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Unfurnished"
                            id="facility8">
                        <label class="form-check-label" for="facility8">
                            Unfurnished
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.facility" value="Other" id="facility9">
                        <label class="form-check-label" for="facility9">
                            Other
                        </label>
                    </div>
                    <v-text-field hint="Please Enter the Facilities or Amenities you want"
                        v-if="obj.facility.includes('Other')" v-model="obj.otherFacility" :rules="errorMessage.other"
                        label="Enter Facility">
                    </v-text-field>
                    <p class="mb-4" v-if="error3" style="color: red">*{{ error3 }}</p>


                    <v-chip color="orange" class="mb-2">
                        Select Move In Time
                    </v-chip>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.movein" value="Ready to move"
                            id="movein1">
                        <label class="form-check-label" for="movein1">
                            Ready to move
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.movein" value="Within 1-6 months"
                            id="movein2">
                        <label class="form-check-label" for="movein2">
                            Within 1-6 months
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.movein" value="Within 1 year"
                            id="movein3">
                        <label class="form-check-label" for="movein3">
                            Within 1 year
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.movein" value="More than 2 years"
                            id="movein4">
                        <label class="form-check-label" for="movein4">
                            More than 2 years
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="obj.movein" value="Flexible" id="movein5">
                        <label class="form-check-label" for="movein5">
                            Flexible
                        </label>
                    </div>

                    <p class="mb-4" v-if="error4" style="color: red">*{{ error4 }}</p>

                    <v-textarea variant="solo" auto-grow rows="2"
                        hint="Please use this space to provide any specific details or requirements you have for your flat inquiry."
                        v-model="obj.additional" label="Additonal Comments/Requirements">
                    </v-textarea>
                </div>
            </div>
            <div class="text-center mt-5 mb-8">
                <v-btn class="me-4" type="submit" color="success">
                    Submit
                </v-btn>

                <v-btn @click="handleReset" color="yellow">
                    Reset
                </v-btn>
            </div>
        </v-form>

    </section>

    <v-dialog v-model="snackbar" class="modalWidth" persistent>
        <v-card loading :text="`We are Sending your information to our Team... Please Wait...`"
            subtitle="Confirmation"></v-card>
    </v-dialog>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            snackbar: false,
            errorMessage: {
                configuration: [v => !!v || 'Please Enter Flat Configuration'],
                consumer: [v => !!v || 'Please Select a Consumer Type'],
                name: [v => !!v || 'Please Enter a name'],
                phone: [v => !!v || 'Please Enter Phone Number'],
                address: [v => !!v || 'Please Enter your Property Address'],
                price: [v => !!v || 'Please Enter Property Price'],
                email: [
                    value => {
                        if (value) return true

                        return 'E-mail is required.'
                    },
                    value => {
                        if (/.+@.+\..+/.test(value)) return true

                        return 'E-mail must be valid.'
                    },
                ],
            },
            obj: {
                locationPreferences: '',
                configuration: '',
                price: '',
                consumer: '',
                additional: '',
                otherRequirement: '',
                otherBudget: '',
                otherFacility: '',
                name: '',
                phoneNumber: '',
                email: '',
                flatType: [],
                budget: [],
                facility: [],
                movein: [],
                address: '',
            }
        }
    },
    computed: {
        error1() {
            if (this.obj.flatType.length == 0) {
                return 'Please Select a Property Type';
            }
            return '';
        },
        error2() {
            if (this.obj.budget.length == 0) {
                return 'Please Select your Budget';
            }
            return '';
        },
        error3() {
            if (this.obj.facility.length == 0) {
                return 'Please Select your Requirements';
            }
            return '';
        },
        error4() {
            if (this.obj.movein.length == 0) {
                return 'Please Select your Move In Time';
            }
            return '';
        }
    },
    mounted() {
        //const obj = {name: 'rush', email: 'rushikeshwani36@gmail.com', senderType: 'seller'};
        //this.sendMail(obj);

    },
    methods: {
        async sendMail(obj) {
            let name = obj.name;
            let email = obj.email;
            let senderType = obj.consumer;

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
        handleReset() {
            this.$refs.form.reset();
            this.obj.flatType = [];
            this.obj.budget = [];
            this.obj.facility = [];
            this.obj.movein = [];
            this.$refs.form.resetValidation();
        },
        async submit() {
            const validate = await this.$refs.form.validate();
            if (this.obj.consumer === 'Buyer') {
                if (validate.valid && this.obj.flatType.length && this.obj.budget.length && this.obj.movein.length && this.obj.facility.length) {
                    delete this.obj.address;
                    delete this.obj.configuration;
                    delete this.obj.price;
                    this.$store.dispatch('addBuyerData', this.obj);
                    this.sendMail(this.obj);
                    this.snackbar = true;
                    setTimeout(() => {
                        this.handleReset();
                        this.snackbar = false;
                        this.$router.push('/success');
                    }, 5000);
                }
            }
            else if (this.obj.consumer === 'Seller') {
                if (validate.valid && this.obj.movein.length && this.obj.facility.length) {
                    delete this.obj.locationPreferences;
                    delete this.obj.budget;
                    delete this.obj.otherRequirement;
                    delete this.obj.otherBudget;
                    this.$store.dispatch('addSellerData', this.obj);
                    this.sendMail(this.obj);
                    this.snackbar = true;
                    setTimeout(() => {
                        this.handleReset();
                        this.snackbar = false;
                        this.$router.push('/success');
                    }, 5000);
                }
            }
        },
    },
}
</script>

<style>
    .center-form {
    margin: 0 auto;
    width: 50%;
}

.add-form {
    padding: 20px;
}

.planet-imgs{
    height: 80px;
    width: auto;
}


@media (min-width:768px) {
    .modalWidth {
        width: 50%;
    }
}

@media (max-width:1023px) {
    .center-form {
        margin: 0 auto;
        width: 90%;
    }

}
</style>