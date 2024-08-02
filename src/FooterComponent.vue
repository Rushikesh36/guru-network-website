<template>
    <!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="my-5">
        <!-- Footer -->
        <footer class="text-center text-lg-start text-white pt-6" style="background-color: #000;color:white">
            <!-- Section: Social media -->
            <!-- <section class="p-4" style="background-color: #f35525">
               
                <div class="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>
                

                
                <div>
                    <a href="" class="text-white me-4">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="text-white me-4">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="text-white me-4">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="text-white me-4">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="text-white me-4">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="text-white me-4">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                
            </section> -->
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="footer">
                <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-3 col-xl-3 ml-auto mb-4">
                            <!-- Content -->
                            <img src="./assets/images/logo-footer.png" alt="" class="footer-logo">
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4 services">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold">Services</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                style="width: 60px; background-color: #f35525; height: 4px" />
                            <p>
                                <router-link to="/buyer" class="">House Buyer/Seller</router-link>
                            </p>
                            <p>
                                <router-link to="/channelpartner" class="">Channel Partners/Brokers</router-link>
                            </p>
                            <p>
                                <router-link to="/developer" class="">Developers</router-link>
                            </p>
                            <p>
                                <router-link to="/finance" class="">Loan Letter</router-link>
                            </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4 services">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold">Useful links</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                style="width: 60px; background-color: #f35525; height: 4px" />
                            <p>
                                <router-link to="/propertytransactionguru" class="">Property Transaction Guru</router-link>
                            </p>
                            <p>
                                <router-link to="/digitalparchi" class="">Digital Parchi</router-link>
                            </p>
                            <p>
                                    <router-link to="/contact-us">
                                    Contact Us
                                    </router-link>
                            </p>
                            <p>
                                    <router-link to="/credits">
                                    Credits
                                    </router-link>
                            </p>
                            <p>
                                    <router-link to="/privacypolicy">
                                    Privacy Policy
                                    </router-link>
                            </p>
                            <p>
                                    <router-link to="/terms">
                                    Terms & Conditions
                                    </router-link>
                            </p>
                            <p>
                                    <router-link to="/refundpolicy">
                                    Refund Policy
                                    </router-link>
                            </p>
                            
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 services">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold">Contact</h6>
                            <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                style="width: 60px; background-color: #f35525; height: 4px" />
                            <p><a href="https://maps.app.goo.gl/oTrjuLLCj4rupHtq5"><v-icon>mdi-map-marker</v-icon> Kanjurmarg - West</a></p>
                            <p><a href="mailto:contact@gurunetwork.in"><v-icon>mdi-email</v-icon> contact@gurunetwork.in</a></p>
                            <p><a href="tel:8588870108"><v-icon>mdi-phone</v-icon> +91 8588870108</a></p>
                            
                        </div>
                        <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                </div>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                © 2024 Copyright: Guru Network
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
    <!-- End of .container -->
</template>

<style scoped>
@media(min-width:1023px){
    .footer-logo{
    position: relative;
    right: 80px;
    bottom: 30px;
}
}
/* .footer-logo{
    position: relative;
    right: 80px;
    bottom: 30px;
} */

.footer p {
    line-height: 2.5rem;
    text-align: left !important;
    color: white;
}
.footer h6{
    color: white;
}

.services p:hover{
    color:#f35525 !important;
}

.services a{
    color: inherit !important;
}

@media(max-width:1023px){
    .footer-logo{
    height: 150px;
    width: auto;
}
    .footer p{
        text-align: center !important;
    }
}
</style>

<script>
    export default{
        
    }
</script>