<template>
    <section data-aos="fade-up">
        <h2 class="text-center mt-6">DEVELOPER FORM</h2>
        <div class="mt-8"></div>
        <v-form @submit.prevent="submit" ref="form">
            <div class="center-form add-form">
                <v-chip color="info" class="mb-2">
                    Project Information
                </v-chip>
                <v-text-field hint="Please provide the official name of the real estate development project." v-model="obj.projectName" variant="solo" :rules="errorMessage.projectName" label="Project Name*">
                </v-text-field>
                <v-text-field  hint="Name of the company or individual responsible for the project." v-model="obj.builderName" variant="solo" :rules="errorMessage.builderName" type="text"
                    label="Developer / Builder Name*">
                </v-text-field>
                <v-text-field hint="Full address or location details of the project, including landmarks if available."  v-model="obj.location" variant="solo" :rules="errorMessage.location" label="Location / Address*">
                </v-text-field>
                <v-text-field hint="The unique RERA (Real Estate Regulatory Authority) registration number for the project, if applicable."  v-model="obj.rera" variant="solo" :rules="errorMessage.rera" label="RERA Registration Number*">
                </v-text-field>

                <br>
                <v-chip color="orange" class="mb-2">
                    Select Project Type
                </v-chip>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="obj.projectType" value="Residential" id="1">
                    <label class="form-check-label" for="1">
                        Residential
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="obj.projectType" value="Commercial" id="2">
                    <label class="form-check-label" for="2">
                        Commercial
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="obj.projectType" value="Mixed-use" id="3">
                    <label class="form-check-label" for="3">
                        Mixed-use
                    </label>
                </div>

                <p class="mb-4" v-if="error1" style="color: red">*{{ error1 }}</p>

                <br>
                <v-chip color="orange" class="mb-2">
                    Select Project Status
                </v-chip>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="obj.projectStatus" value="Pre-Launch" id="projectStatus1">
                    <label class="form-check-label" for="projectStatus1">
                        Pre-Launch
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="obj.projectStatus" value="Under Construction" id="projectStatus2">
                    <label class="form-check-label" for="projectStatus2">
                        Under Construction
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="obj.projectStatus" value="Completed" id="projectStatus3">
                    <label class="form-check-label" for="projectStatus3">
                        Completed
                    </label>
                </div>

                <p class="mb-4" v-if="error2" style="color: red">*{{ error2 }}</p>

                <v-text-field hint="Provide a brief description of the project, including key features and amenities."  v-model="obj.projectOverview" variant="solo" :rules="errorMessage.projectOverview" label="Project Overview*">
                </v-text-field>

                <v-chip color="info" class="mb-2">
                    Amenities and Features
                </v-chip>

                <v-text-field hint="Please list the amenities available in the project (e.g., swimming pool, gym, park, etc.)."  v-model="obj.ammenities" variant="solo" :rules="errorMessage.ammenities" label="Amenities Offered*">
                </v-text-field>
                <v-text-field hint="Highlight any unique features of the project that set it apart from others."  v-model="obj.features" variant="solo" :rules="errorMessage.features" label="Key Features*">
                </v-text-field>

                <v-chip color="info" class="mb-2">
                    Unit Details
                </v-chip>

                <v-text-field hint="Provide the size range of units (in square feet or square meters) available."  v-model="obj.unitSizes" variant="solo" :rules="errorMessage.unitSizes" label="Unit Sizes*">
                </v-text-field>

                <v-text-field hint="Range of prices for different unit types or sizes, if available"  v-model="obj.priceRange" variant="solo" :rules="errorMessage.priceRange" label="Price Range*">
                </v-text-field>

                <v-chip color="info" class="mb-2">
                    Legal and Regulatory
                </v-chip>

                <v-text-field hint="The expected possession date or time frame for the project."  v-model="obj.possesionDate" variant="solo" :rules="errorMessage.possesionDate" label="Possession Date*">
                </v-text-field>

                <v-text-field hint="Specify if the project has received all necessary legal approvals and clearances."  v-model="obj.legalApprovals" variant="solo" :rules="errorMessage.legalApprovals" label="Legal Approvals*">
                </v-text-field>

                <v-chip color="info" class="mb-2">
                    Contact Information
                </v-chip>

                <v-text-field hint="Name and contact details of the sales or marketing team for inquiries."  v-model="obj.contact" variant="solo" :rules="errorMessage.contact" label="Sales Contact*">
                </v-text-field>
                <v-text-field hint="Enter email address."  v-model="obj.email" variant="solo" :rules="errorMessage.email" label="Email Address*"></v-text-field>
                <v-text-field hint="Website URL for the project, if available"  v-model="obj.website" variant="solo" :rules="errorMessage.website" label="Official Website*">
                </v-text-field>

                <v-textarea variant="solo" auto-grow rows="2" hint="Any other information or comments you'd like to share about the project." v-model="obj.additional" label="Additonal Comments">
                </v-textarea>

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
import axios from 'axios';
export default {
    data() {
        return {
            snackbar: false,
            errorMessage: {
                projectName: [v => !!v || 'Please Enter Project Name'],
                builderName: [v => !!v || 'Please Enter Builder Name'],
                location: [v => !!v || 'Please Enter Location'],
                rera: [v => !!v || 'Please Enter RERA no'],
                projectOverview: [v => !!v || 'Please Enter Project Overview'],
                ammenities: [v => !!v || 'Please Enter Amenities'],
                features: [v => !!v || 'Please Enter Features'],
                unitSizes: [v => !!v || 'Please Enter Unit Sizes'],
                priceRange: [v => !!v || 'Please Enter Price Range'],
                possesionDate: [v => !!v || 'Please Enter Possession Date'],
                legalApprovals: [v => !!v || 'Please Enter Legal Approvals'],
                contact: [v => !!v || 'Please Enter Contact Information'],
                website: [v => !!v || 'Please Enter Website, if not applicable Enter "N/A"'],
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
                projectName: '',
                builderName: '',
                location: '',
                rera: '',
                projectType: [],
                projectStatus: [],
                additional: '',
                projectOverview: '',
                ammenities: '',
                features: '',
                unitSizes: '',
                priceRange: '',
                possesionDate: '',
                legalApprovals: '',
                contact: '',
                website: '',
            }
        }
    },
    computed: {
        error1() {
            if (this.obj.projectType.length == 0) {
                return 'Please Select a Project Type';
            }
            return '';
        },
        error2() {
            if (this.obj.projectStatus.length == 0) {
                return 'Please Select Project Status';
            }
            return '';
        },
    },
    mounted() {

    },
    methods: {
        async sendMail(obj) {
            let name = obj.builderName;
            let email = obj.email;
            let senderType = 'Developer';

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBlNzJkYTFkZjUwMWNhNmY3NTZiZjEwM2ZkN2M3MjAyOTQ3NzI1MDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MzgzNTM2Nzc4NjgzMTM2ODY4IiwiZW1haWwiOiJndXJ1bmV0d29yay53ZWJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJweW05V1d6TlFnVHpXVGNKMUZST3FRIiwibmJmIjoxNzAwOTE0ODI1LCJpYXQiOjE3MDA5MTUxMjUsImV4cCI6MTcwMDkxODcyNSwianRpIjoiODBlMjBhMWQ3OGMwNWYyMDEzZjAwMWYxYTk3MmEwZmNmMGFjN2I1NSJ9.c0gpWIJe6mlZMznwcTCMvEdUM9fIHwygU3OykmKX2Zyh9nTj1xYxGbIVjQrJz7WTjq4tz7ogWyeTUm1h0tv2LQ1grpYrDy7iCTc3tdj1HDER2rjgAt6Zp_ddaaeUufvM4ctUNSbIcQO-xAhQZp1K3wfnGIrMjXV-ee86ptkCGUjR5-R4yxYv3ixgKyuNl-ip0ZcTY_H84Y_2Jh78jEWTZjXrlzP1jM11uX4zZRFcdOdjR3EtYeto9fr97zpz3BTopXjIi2HhKhco9V92G76kMn-Fk2mik95hShuoFGKN2pCS883rKXBaP6fj4IdMJT34uWarnzTPqYDZ0dnMPsTpXg'
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
            this.obj.projectType = [];
            this.obj.projectStatus = [];
            this.$refs.form.resetValidation();
        },
        async submit() {
            const validate = await this.$refs.form.validate();
            if (validate.valid && this.obj.projectType.length && this.obj.projectStatus.length) {
                this.$store.dispatch('addDeveloperData', this.obj);
                this.sendMail(this.obj);
                this.snackbar = true;
                setTimeout(() => {
                    this.handleReset();
                    this.snackbar = false;
                    this.$router.push('/success');
                }, 5000);
            }
        },
    },
}
</script>

<style scoped>
    .center-form {
    margin: 0 auto;
    width: 50%;
}

.add-form {
    padding: 20px;
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