<template>
  <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <ul class="info">
            <li><a href="mailto:contact@gurunetwork.in"><v-icon color="white">mdi-email</v-icon>contact@gurunetwork.in</a></li>
            <li><a href="tel:8588870108"><v-icon color="white">mdi-phone</v-icon> 8588870108</a></li>
            <li><a href="#"><v-icon color="white">mdi-domain</v-icon> RERA No : A51900037622</a></li>
          </ul>
        </div>
        
        <div class="col-lg-4 col-md-4">
          <ul class="social-links">
            <li><a href="https://www.instagram.com/propertytransactionguru/"
                target="_blank"><v-icon color="#000">mdi-instagram</v-icon></a></li>
            <li><a href=" https://www.youtube.com/@propertytransactionguru"
                target="_blank"><v-icon color="#000">mdi-youtube</v-icon></a></li>
            <li><a href="https://www.facebook.com/propertytransactionguru/ "
                target="_blank"><v-icon color="#000">mdi-facebook</v-icon></a></li>  
            <li><a href="#" target="_blank"><v-icon color="#000">mdi-linkedin</v-icon></a></li>
            
          </ul>
        </div>
      </div>
      
    </div>
  </div>


  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid">
      <router-link to="/">
        <img src="./assets/images/logo.png" class="logo"/>
        <a href="#" class="navbar-brand">GURU NETWORK</a>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/propertytransactionguru">
              <a class="nav-link" href="#">Property Transaction Guru</a>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link to="/buyer">
                <a class="dropdown-item" href="#">House Buyer / Seller</a>
              </router-link>
              <router-link to="/channelpartner">
                <a class="dropdown-item" href="#">Channel Partners / Broker</a>
              </router-link>
              <router-link to="/developer">
                <a class="dropdown-item" href="#">Developers</a>
              </router-link>
              <router-link to="/legal">
                <a class="dropdown-item" href="#">Lawyers</a>
              </router-link>
              <router-link to="/finance">
                <a class="dropdown-item" href="#">Bankers/Loan Service</a>
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/about-us">
            <a class="nav-link" href="#">About Us</a>
          </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact-us">
            <a class="nav-link" href="#">Contact Us</a>
          </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/digitalparchi">
                <a class="nav-link" href="#">Digital Parchi</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default{
  mounted(){

  },
  computed:{
    path(){
      return this.$route.path;
    }
  },
  watch: {
    path(val){
      if(val){
        const navbar = document.querySelector('.navbar-collapse');
        navbar.classList.remove('show');
      }
    }
  }
}
</script>

<style scoped>
.logo{
  height: 70px;
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

@media(min-width:1025px) {
  .navbar-brand {
    padding-left: 10px;
    font-size: 1.8rem;
  }

  .navbar {
    font-size: 1.2rem;

  }

  .navbar li {
    margin-left: 10px;
    margin-right: 10px;
  }

  .navbar ul {
    margin-right: 78px;
  }

  .navbar .container-fluid {
    padding-left: 11vw;
    padding-right: 10vw;
  }
}

.navbar ul li{
  color: black !important;
}
.info a {
  color: inherit;
}
.sub-header {
  background-color: #f35525;
  color: #fff;
}
.sub-header a{
  color: #fff;
}
.sub-header a{
  color: #fff;
}
</style>