<template>
  <section class="mobile-view" data-aos="fade-right">
    <div class="">
      <div class="text-center mt-5">
        <h2 class="mb-5">Our Services</h2>
        <div class="container d-flex justify-content-around">
          <div class="cards" @click="showInfo(2)">
            <p>
              <v-icon>mdi-home-plus</v-icon>
              <br>
              Buyer
            </p>
          </div>
          <div class="cards" @click="showInfo(1)">
            <p>
              <v-icon>mdi-home-minus</v-icon>
              <br>
              Seller
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-center pt-5">
          <div class="cards" @click="showInfo(3)">
            <p>
              <v-icon>mdi-currency-inr</v-icon>
              <br>
              Loan <br>
              Letter
            </p>
          </div>
        </div>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card v-if="activeBox === 2">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title class="headline">Buyer</v-card-title>
            <v-card-text>
              <div class="data">
                <b>Ghar kharidna chahte ho?<br> Searching for your dream home?</b>
                <br />
                Aa jao, we'll show you a range of options perfectly tailored to your preferences! From cozy apartments
                to spacious villas, we've got it all. Discover your ideal home with Guru Network.
                <br />
                <div class="contact_button">
                  <router-link to="/buyer">
                    <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                  </router-link>
                </div>
              </div>
            </v-card-text>

          </v-card>

          <!-- Dialog for Seller -->
          <v-card v-if="activeBox === 1">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title class="headline">Seller</v-card-title>
            <v-card-text>
              <div class="data">
                <b>Ghar bechna chahte ho?<br> Want to sell your property?</b>
                <br />
                Aa jao boss, we'll help you close the deal! List your property with us and reach the right buyers in no
                time. Let's make selling hassle-free.
                <br />
                <div class="contact_button">
                  <router-link to="/seller">
                    <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                  </router-link>
                </div>
              </div>
            </v-card-text>

          </v-card>

          <!-- Dialog for Loan -->
          <v-card v-if="activeBox === 3">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog = false">
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title class="headline">Loan Letter</v-card-title>
            <v-card-text>
              <div class="data">
                <b>Loan karana chahte ho? <br> Need a loan to fulfill your dreams?</b>
                <br />
                Aa jao, we'll connect you with the right bankers and make your loan process smooth.
                <br />
                <div class="contact_button">
                  <router-link to="/finance">
                    <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                  </router-link>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- Dialog for Brokers -->

        </v-dialog>
      </div>

      <div class="text-center mt-5" data-aos="">
        <h2 class="mb-5">Whom we work with?</h2>
        <div class="container d-flex justify-content-around">
          <div class="cards " @click="showInfo2(1)">
            <p>
              <v-icon>mdi-handshake</v-icon>
              <br>
              Brokers
            </p>
          </div>
          <div class="cards" @click="showInfo2(2)">
            <p>
              <v-icon>mdi-domain</v-icon>
              <br>
              Developer
            </p>
          </div>
        </div>
        <v-dialog v-model="dialog2" max-width="500px">
          <v-card v-if="activeBox2 === 1">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog2 = false">
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title class="headline">Brokers</v-card-title>
            <v-card-text>
              <div class="data">
                <b>Channel partner ho? <br>
                  Humare saath logo ko best service dena chahte ho?</b>
                <br />
                To Aa Jao boss!!
                <br />
                Fill the form given below & our team will reach out to you soon.
                <br />
                <div class="contact_button">
                  <router-link to="/channelpartner">
                    <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                  </router-link>
                </div>
              </div>
            </v-card-text>

          </v-card>

          <!-- Dialog for Developer -->
          <v-card v-if="activeBox2 === 2">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog2 = false">
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-title class="headline">Developer</v-card-title>
            <v-card-text>
              <div class="data">
                <b>Advertising chahiye?<br> Are you a developer looking to showcase your projects?</b>
                <br />
                Aa jao, let's amplify your reach and put your developments in the spotlight! Partner with Guru Network
                for effective advertising on Property Transaction Guru.
                <br />
                <div class="contact_button">
                  <router-link to="/developer">
                    <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                  </router-link>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </section>
  <div class="desktop-view">
    <v-carousel show-arrows="hover" hide-delimiters height="800" cycle interval="3000">
      <v-carousel-item>
        <v-img :src="require('../assets/images/carousel1.jpg')" cover></v-img>
        <router-link to="/digitalparchi">
          <div class="carousel-text">
            <p class="">
              DIGITAL PARCHI
            </p>
          </div>
        </router-link>
      </v-carousel-item>

      <v-carousel-item>
        <v-img :src="require('../assets/images/carousel2.jpg')" cover></v-img>
        <router-link to="/finance">
          <div class="carousel-text">
            <p class="">
              Loan Letter
            </p>
          </div>
        </router-link>

      </v-carousel-item>

      <v-carousel-item>
        <v-img :src="require('../assets/images/carousel3.jpg')" cover></v-img>
        <router-link to="/channelpartner">
          <div class="carousel-text">
            <p class="">
              Expert Brokers at Your Service
            </p>
          </div>
        </router-link>
      </v-carousel-item>
    </v-carousel>
  </div>
  <div class="fun-facts" data-aos="fade-left">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper" lazy-load>
            <div class="row">
              <div class="col-lg-4">
                <div class="counter">
                  <h2 class="timer count-title count-number">
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount='3000' :duration='1' prefix=''
                      suffix='+' separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' />
                  </h2>

                  <p class="count-text ">Happys<br>Clients</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="counter">
                  <h2 class="timer count-title count-number"><vue3-autocounter ref='counter' :startAmount='0'
                      :endAmount='25' :duration='1.5' prefix='' suffix=' Cr+' separator=',' decimalSeparator='.'
                      :decimals='0' :autoinit='true' /></h2>
                  <p class="count-text ">Brokerage<br>Saved</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="counter">
                  <h2 class="timer count-title count-number"><vue3-autocounter ref='counter' :startAmount='0'
                      :endAmount='1000' :duration='2' prefix='' suffix='+' separator=',' decimalSeparator='.'
                      :decimals='0' :autoinit='true' /></h2>
                  <p class="count-text ">Developers<br>Collaborated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="featured section" id="about-us">
    <div class="container what-we-do">
      <div class="typewriter text-center">
        <!-- <p>
          <vue-typewriter-effect 
          :strings="['Ghar kharidna chahte ho? Aa jao boss dikha dunga!',
            'Ghar bechna chahte ho? Aa jao boss bech dunga!',
            'Loan karana chahte ho? Banker chahiye aa jao milwa dunga!',
            'Property ke around kuch bhi legal services chahiye? Aa jao boss karva dunga!']">
          </vue-typewriter-effect>
        </p> -->
        <p>
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor"></span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </p>
      </div>

      <div class="what" data-aos="fade-up">
        <div class="pt-8">
          <div class="what-we-do-desk">
            <h1 class="pb-5">What we do?</h1>
            <ul>
              <li>At Guru Network, we have carved out a niche as a premier real estate mandate firm, often referred to
                as
                a "Sole Selling Agency." Our specialty lies in expediting the sales process for developers, ensuring
                that
                their properties find swift and efficient buyers.</li>
              <li>Our core expertise resides in the dynamic realms of sales and marketing, where we deploy our extensive
                knowledge and experience to assist developers in seamlessly selling their properties. We take pride in
                our
                ability to navigate the intricacies of the market, positioning your offerings for success.</li>
              <li>Beyond our core expertise in sales and marketing, our network proudly hosts a team of accomplished
                lawyers who play an indispensable role in handling the complex legal aspects of property transactions.
                With their legal acumen, we meticulously oversee all facets of buying and selling homes, providing our
                clients with a sense of security and confidence.</li>
              <li>In essence, Guru Network is your trusted partner for comprehensive real estate solutions, blending
                professionalism and proficiency to meet your every need.</li>
            </ul>

          </div>
          <div class="what-we-do-mob">
            <h1 class="pb-8 text-center">What we do?</h1>
            <ul>
              <li>At Guru Network, we have carved out a niche as a premier real estate mandate firm, often referred to
                as
                a "Sole Selling Agency." Our specialty lies in expediting the sales process for developers, ensuring
                that
                their properties find swift and efficient buyers. <span id="dots">...</span></li>

              <span id="more">

                <li>Our core expertise resides in the dynamic realms of sales and marketing, where we deploy our
                  extensive
                  knowledge and experience to assist developers in seamlessly selling their properties. We take pride in
                  our ability to navigate the intricacies of the market, positioning your offerings for success.</li>
                <li>Beyond our core expertise in sales and marketing, our network proudly hosts a team of accomplished
                  lawyers who play an indispensable role in handling the complex legal aspects of property transactions.
                  With their legal acumen, we meticulously oversee all facets of buying and selling homes, providing our
                  clients with a sense of security and confidence.</li>
                <li>In essence, Guru Network is your trusted partner for comprehensive real estate solutions, blending
                  professionalism and proficiency to meet your every need.</li>
              </span>
              <v-btn color="#f35525" id="myBtn" @click="myFunction">Read More</v-btn>

            </ul>

          </div>
        </div>
      </div>

    </div>
  </div>



  <div class="section connect desktop-view">
    <div class="mt-12 text-center">
      <h2 class="text-center mb-6">Connect with us right now!</h2>
      <v-tabs v-model="tab" color="#f35525" align-tabs="center">
        <v-tab :value="1">House Buyers</v-tab>
        <v-tab :value="2">House Sellers</v-tab>
        <v-tab :value="3">Channel Partners/Brokers</v-tab>
        <v-tab :value="4">Developers</v-tab>
        <v-tab :value="5">Loan Letter</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="1">
          <v-container fluid>
            <div class="row">
              <div class="col-md-6">
                <v-img :src="require('../assets/images/buyers.jpg')"></v-img>
              </div>
              <div class="col-md-6 data">
                Ghar kharidna chahte ho? Searching for your dream home?
                <br>
                Aa jao, we'll show you a range of options perfectly tailored to your preferences! From cozy apartments
                to spacious villas, we've got it all. Discover your ideal home with Guru Network.
                <br>
               
                <router-link to="/buyer">
                  <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                </router-link>
              </div>

            </div>
          </v-container>
        </v-window-item>
        <v-window-item :value="2">
          <v-container fluid>
            <div class="row">
              <div class="col-md-6">
                <v-img :src="require('../assets/images/seller.png')"></v-img>
              </div>
              <div class="col-md-6 data">
                Ghar bechna chahte ho? Want to sell your property?
                <br>
                Aa jao boss, we'll help you close the deal! List your property with us and reach the right buyers in no
                time. Let's make selling hassle-free.
                <br>
                <router-link to="/seller">
                  <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                </router-link>
              </div>

            </div>
          </v-container>
        </v-window-item>
        <v-window-item :value="3">
          <v-container fluid>
            <div class="row">
              <div class="col-md-6">
                <v-img :src="require('../assets/images/brokers.jpg')"></v-img>
              </div>
              <div class="col-md-6 data">
                Channel partner ho? Humare saath logo ko best service dena chahte ho? To Aa Jao boss!!
                <br>
                Fill the form given below & our team will reach out to you soon
                <br>
                <router-link to="/channelpartner">
                  <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                </router-link>
              </div>
            </div>
          </v-container>
        </v-window-item>
        <v-window-item :value="4">
          <v-container fluid>
            <div class="row">
              <div class="col-md-6 ">
                <v-img :src="require('../assets/images/developers.jpg')"></v-img>
              </div>
              <div class="col-md-6 data">
                Advertising chahiye? Are you a developer looking to showcase your projects?
                <br>
                Aa jao, let's amplify your reach and put your developments in the spotlight! Partner with Guru Network
                for effective advertising on Property Transaction Guru.
                <br>
                <router-link to="/developer">
                  <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                </router-link>
              </div>
            </div>
          </v-container>
        </v-window-item>
        <v-window-item :value="5">
          <v-container fluid>
            <div class="row">
              <div class="col-md-6">
                <v-img :src="require('../assets/images/banking.jpg')"></v-img>
              </div>
              <div class="col-md-6 data">
                Loan karana chahte ho? Banker chahiye? Need a loan to fulfill your dreams?
                <br>
                Aa jao, we'll connect you with the right bankers and make your loan process smooth
                <br />
                <router-link to="/finance">
                  <v-btn color="#f35525" class="mt-4">Contact Us</v-btn>
                </router-link>
              </div>
            </div>
          </v-container>
        </v-window-item>
      </v-window>
    </div>
  </div>

  <!-- <div class="video section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>| Video View</h6>
            <h2>Get Closer View & Different Feeling</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="video-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="video-frame">
            <img src="../assets/images/video-frame.jpg" alt="">
            <a href="https://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="contact section" id="contact-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>| Contact Us</h6>
            <h2>Get In Touch</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15077.993883251436!2d72.9261918!3d19.1296457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c71aa1e26fb7%3A0x13f5b4f07b2d184e!2sGuru%20Network!5e0!3m2!1sen!2sin!4v1700484506752!5m2!1sen!2sin"
              width="100%" height="500px" frameborder="0"
              style="border:0; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);"
              allowfullscreen=""></iframe>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="item phone">
                <a href="tel:8588870108">
                  <h6>8588870108<br><span>Phone Number</span></h6>
                </a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="item email">
                <a href="mailto:contact@gurunetwork.in">
                  <h6>contact@gurunetwork.in<br><span>Business Email</span></h6>
                </a>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="item email">

                <h6>A51900037622<br><span>RERA No.</span></h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <v-dialog v-model="snackbar" class="modalWidth" persistent>
            <v-card loading :text="`We are Sending your information to our Team... Please Wait...`"
              subtitle="Confirmation"></v-card>
          </v-dialog>
          <form id="contact-form" @submit.prevent="submit" ref="form">
            <h5 class="text-center mb-4">For General Queries, Please fill out this form.</h5>
            <div class="row">
              <div class="col-lg-12">
                <fieldset>
                  <label for="name">Full Name</label>
                  <input type="name" v-model="obj.name" name="name" id="name" placeholder="Your Name..."
                    autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="email">Email Address</label>
                  <input type="text" v-model="obj.email" name="email" id="email" pattern="[^ @]*@[^ @]*"
                    placeholder="Your E-mail..." required="">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="subject">Phone Number</label>
                  <input name="subject" v-model="obj.phoneNumber" id="subject" placeholder="Phone Number..."
                    autocomplete="on">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="message">Message</label>
                  <textarea name="message" v-model="obj.message" id="message" placeholder="Your Message"
                    required="Please Enter a Message"></textarea>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="orange-button">Send Message</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3AutoCounter from 'vue3-autocounter';
import axios from 'axios';

export default {
  component: {
    'vue3-autocounter': Vue3AutoCounter
  },
  data: () => {
    return {
      snackbar: false,
      activeBox: null,
      activeBox2: null,
      dialog: false,
      dialog2: false,
      obj: {
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
      },
      tab: null,
      typeValue: '',
      typeStatus: false,
      typeArray: ['Ghar kharidna chahte ho? Aa jao boss dikha dunga.',
        'Ghar bechna chahte ho? Aa jao boss bech dunga.',
        'Loan karana chahte ho? Banker chahiye aa jao milwa dunga.',
        'Property ke around kuch bhi legal services chahiye? Aa jao boss karva dunga!'
      ],
      typingSpeed: 70,
      erasingSpeed: 30,
      newTextDelayed: 500,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  mounted() {
    if (this.path === '/about-us') {
      document.querySelector(".what").scrollIntoView({ behavior: 'smooth' });
    } else if (this.path === '/contact-us') {
      document.querySelector("#contact-us").scrollIntoView({ behavior: 'smooth' });
    }
  },
  computed: {
    path() {
      return this.$route.path;
    }
  },
  watch: {
    path(val) {
      if (val === '/about-us') {
        document.querySelector(".what").scrollIntoView({ behavior: 'smooth' });
      } else if (val === '/contact-us') {
        document.querySelector("#contact-us").scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },

  methods: {
    showInfo(boxNumber) {
      this.activeBox = boxNumber;
      this.dialog = true;
    },
    showInfo2(boxNumber) {
      this.activeBox2 = boxNumber;
      this.dialog2 = true;
    },
    goToContact() {
      document.querySelector("#contact-us").scrollIntoView({ behavior: 'smooth' });
    },
    async sendMail(obj) {
      let name = obj.name;
      let email = obj.email;
      let senderType = 'General Enquiry';

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
    async submit() {
      this.$store.dispatch('addGeneralData', this.obj);
      this.sendMail(this.obj);
      this.snackbar = true;
      setTimeout(() => {
        this.handleReset();
        this.snackbar = false;
        this.$refs.form.reset();
        this.$router.push('/success');
      }, 5000);
    },
    theFormat(number) {
      return number.toFixed(2);
    },
    completed() {
    },
    playAnimation() {
      this.$refs.number2.play()
    },
    myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
      }
    },
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);

      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) {
          this.typeStatus = true;
        }
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) {
          this.typeArrayIndex = 0;
        }
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },

  }

}
</script>

<style scoped>
.mobile-view {
  padding: 20px;
  background-color: #f9f9f9;
}

.cards {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 150px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
}

.v-card-title {
  text-align: center;
  padding-top: 2.5vh;
  margin-bottom: -2.5vh;
  font-size: 1.75rem;
  font-weight: bold;
}

.v-card-actions {
  margin-bottom: -5vh;
}

.contact_button {
  text-align: center;
}

.cards:hover {
  transform: translateY(-5px);
}

.info.box {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info.box .data {
  font-size: 16px;
  line-height: 1.6;
}

v-btn {
  background-color: #f35525;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s;
}

v-btn:hover {
  background-color: #d9441d;
}

.cards {
  width: 30vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  /* Horizontal alignment */
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

.cards p {
  font-weight: 500;
  font-size: 1.2em;
}

.cards v-icon {
  font-size: 2rem;

}



.box {
  text-align: center;
  justify-content: center !important;
  height: auto;
  width: auto;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}


.work-icons .v-icon {
  color: #f35525;
  font-size: 3.5rem;
  margin-right: 20px;

}

.featured li {
  font-size: 1.2rem;
  font-weight: 500;
  list-style: disc;
  padding-bottom: 3%;
}

.section-heading {
  padding-right: 60px !important;
}

.best-deal {
  padding: 0px !important;
}

.what-we-do-mob {
  display: none !important;
}

.what-we-do-desk {
  display: block !important;
  padding-left: 20%;
  padding-right: 20%;
}

#more {
  display: none;
}

.connect {
  margin-left: 10vw;
  margin-right: 10vw;
}

.connect .data {
  text-align: left !important;

  padding-right: 3vw;
}

.v-carousel-item .v-img {
  filter: blur(0.5px);
  opacity: 0.75;
}


.carousel-text {
  /* font-size: 3rem;
  position: relative;
  top: 30%;
  left: 15%;
  color: #f35525; */
  font-family: didot;
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  background:
    linear-gradient(rgba(243, 85, 37, 0.6),
      rgba(243, 85, 37, 0.6));
  height: 10%;
  padding-top: 1.5%;
  text-transform: uppercase;
}

.carousel-text p {
  font-size: 1.9rem;
  color: #fff;


  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}

.whom-desk {
  padding-left: 100px;
}

.contact-content .item {
  padding: 0px !important;
}

.contact-content .email {
  margin-left: 0px !important;
}

.data {
  font-size: 1.25rem;
}

.planet-imgs {
  position: relative;
  height: 60px;
  width: auto;
}

.mobile-view {
  display: none;
}

.desktop-view {
  display: block;
}


/* //mobilesection */
@media(max-width: 1023px) {
  .desktop-view {
    display: none !important;
  }

  .mobile-view {
    display: block !important;
  }

  .typed-text {
    line-height: 50px !important;
    font-size: 1.5rem !important;
  }

  .carousel-text p {
    font-size: 0.75rem;
    color: #fff;


    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
  }

  .carousel-text {
    /* font-size: 3rem;
  position: relative;
  top: 30%;
  left: 15%;
  color: #f35525; */
    font-family: didot;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    background:
      linear-gradient(rgba(243, 85, 37, 0.6),
        rgba(243, 85, 37, 0.6));
    height: 10%;
    padding-top: 0;
    text-transform: uppercase;
  }

  .data {
    padding-top: 2vh;
    padding-bottom: 2vh;
    font-size: 1.15rem;
  }

  
  .featured {
    margin-top: 0px !important;
  }

  .featured h2 {
    padding-bottom: 10px;
  }

  .v-carousel {
    width: 100% !important;
    height: auto !important;
  }

  .v-carousel-item {
    width: 100% !important;
    height: auto !important;
  }

  .what-we-do {
    font-size: 10px;
    padding-left: 20px;
    padding-right: 10px;

  }

  .what-we-do li {
    list-style: none !important;
  }

  .what-we-do-desk {
    display: none !important;
  }

  .what-we-do-mob {
    display: block !important;
  }

  .what-we-do-mob li {
    font-size: 1rem !important;
  }

  .info-table h2 {
    font-size: 1.75rem !important;
    text-align: left !important;
  }

  .info-table {
    padding: 15px;
  }

  .featured .info-table ul li {
    padding-bottom: 10px !important;
    padding-top: 10px !important;
    margin: 0px !important;
  }

  .whom-desk {
    display: none !important;

  }

  .what-we-do-mob h1 {
    margin-bottom: -20px !important;
    margin-top: 10px !important;
  }


  .connect {
    margin: 20px;
  }
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #f35525;
  animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
  49% {
    background-color: #f35525;
  }

  50% {
    background-color: transparent
  }

  99% {
    background-color: transparent
  }
}

span.typed-text {
  color: #f35525;
  font-weight: bold;
}

span.typing {
  animation: none;
}

.typewriter {
  height: 10em;
  /* Adjust this value based on your text size */
  overflow: hidden;
}

.typewriter p {
  font-size: 2rem;
  padding-bottom: 6vh;
  display: inline-block;

}

.contact-content .item h6 {
  text-align: center;
  padding: 5px;
}
</style>