<template>
  <section id="contact">
    <!-- <app-long-banner> -->
    <div class="bg">
      <img src="~/assets/img/contact.jpg" id="locations">
    </div>
    <!-- </app-long-banner> -->
    <h1>Contact Us</h1>
    <div class="container">
      <div class="row">
        <div class="main col-lg-6 col-md-12 col-sm-12">
          <div class="sydney">
            <h3>WWSI Sydney Head Office</h3>
              <p>
                <ul>  
                  <li>
                    Level 7, 6 Help St
                  </li>
                  <li>Chatswood NSW 2067</li>
                  <li>Nationwide support: 1300 765 543</li>
                  <li>Phone: +61 2 9412 2100</li>
                  <li>Fax: +61 2 8003 9840</li>
                  <li>Email: enquiry@wwsinternational.net</li>
                  <li>Customer support: support@wwsinternational.net</li>
                </ul>
                <strong>(For all system and sales enquiries, please contact our head office above)</strong>
              </p>
          </div>
          
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6631.264238342831!2d151.17973!3d-33.795997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd4cda59dcf18542!2sWired%20%26%20Wireless%20Solutions%20International!5e0!3m2!1sen!2sau!4v1576202491389!5m2!1sen!2sau" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
        </div>
        <div class="alt col-lg-6 col-md-12 col-sm-12">
          <!-- Brisbane Office -->
          <h3>WWSI Brisbane Office</h3>
          <p>
            <ul>
              <li>227 Koplick Rd</li>
              <li>Park Ridge QLD 4125</li>
              <li>Phone: 1300 765 543</li>
              <li>Email: enquiry@wwsinternational.net</li>
              <li>Customer support: support@wwsinternational.net</li>
            </ul>
          </p>

          <!-- Melbourne office -->
          <h3>WWSI Melbourne Office</h3>
          <p>
            <ul>
              <li>1/21 Davey Street</li>
              <li>Box Hill VIC 3128</li>
              <li>Phone: 1300 765 543</li>
              <li>Email: enquiry@wwsinternational.net</li>
              <li>Customer support: support@wwsinternational.net</li>
            </ul>
          </p>

          <!-- Perth Office -->
          <h3>WWSI Perth Office</h3>
          <p>
            <ul>
              <li>Suite 2, 197 High Street</li>
              <li>Fremantle WA 6160</li>
              <li>Phone: 1300 765 543</li>
              <li>Email: enquiry@wwsinternational.net</li>
              <li>Customer support: support@wwsinternational.net</li>
            </ul>
          </p>

          <!-- Middle East Office -->
          <h3>WWSI Middle East Office</h3>
          <p>
            <ul>
              <li>Bldg #61 - pr10 Street</li>
              <li>12103 Hazmieh, Lebanon</li>
              <li>Phone/Fax: +961 5 45 43 45</li>
              <li>Email: enquiry@wwsinternational.net</li>
              <li>Customer support: support@wwsinternational.net</li>
            </ul>
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>

<style scoped>
#contact {
  padding-top: 0px;
  /* position: relative; */
}
.row {
  position: relative;
  /* display: block; */
}
.map {
  height: 100%;
}
iframe {
  /* position: absolute; */
  max-width: 96%;
  height: 60%;
}
div.img {
  text-align: center;
  margin: 0 auto;
}

li {
  margin-bottom: 0px;
  text-align: left;
}

h3 {
  margin-bottom: 5px;
  margin-top: 5px;
}
img {
  margin: 0 auto;
  text-align: center;
  /* max-width: 100%; */
}
.bg {
  text-align: center;
}
#locations {
  /* position: absolute; */
  top: 118px;
  /* top:120px; */
  left: 0;
  height: 328px;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  border-radius: 20% 20%;
  box-shadow: 0px 6px 0px 0px rgba(86, 181, 219, 0.2);
}
.alt li{
  font-size: 100%;
}
.alt h3 {
  font-size: 21px;
}
.alt p {
  margin-bottom: 25px;
  padding-bottom: 0;
}
.main {
  padding-right: 30px;
  display: block;
}
.alt {
  padding-left: 30px;
}
.sydney {
  padding-right: 30px;
}
@media screen and (max-width: 991px) {
  div.map {
    display: none;
  }
  div, h3, p, li {
    text-align: center;
  }
  .main {
    padding-right: 0px;
    margin-left: 10px;
  }
}
</style>