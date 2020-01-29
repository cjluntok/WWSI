<template>
  <section id="about">
    <div class="main">
      <AnimateWhenVisible name="fadeDown" :duration="1">
        <h1>About Us</h1>
      </AnimateWhenVisible>
    </div>

    <div class="container">
      <div class="row">
        <!-- <img src="../../assets/img/about.svg" alt=""> -->
        <div class="col-12">
          <p>Wired & Wireless Solutions International (WWSI) is an Australian-owned distribution, consulting and ITC Services company head-quartered in Australia. We specialise in advanced technology by the world’s leading suppliers and focus on M2M, RFID, IIOT, IOT, Sensors, RTLS, Messaging, Wi-Fi AC, WiFi6, IP PBX, IP DECT, Trunked Radio, Cloud innovations customised to the organisation’s requirements in telemetry, alarms, IP, communications, wireless, industrial, safety and security applications.</p>

          <button v-if="read" @click="readMore">Read More</button>

          <div v-if="opened">
            <AnimateWhenVisible name="fade" :duration="2">
              <p>Our decades of experience and high level of tech expertise guarantee our customised best technology approaches. Our consulting services assist and support in those areas as well as in maintenance agreements. We develop electronic, hardware and software solutions.</p>
              <p>Our business experts, engineers, technicians have more than 6 decades of combined experienced in design, deployment and maintenance of critical communications networks.</p>
              <p>Our integrators and resellers are trained to provide both on-site solutions as well as wide-area / in-motion solutions. We provide managed services to government and Integrators and the Top 400 companies. Value-added customised Service, Maintenance and Support.</p>
              <p>Suppliers and integrators who use our services include Australia’s leading Electrical companies, Automation, Construction and Facilities Management companies.</p>
              <p>We consult to large organisations including Ericsson, Vodafone, Optus, BHP, RIO Tinto, Downer, Kordia, Westfields and hundreds more.</p>
              <p>Use-sectors range from health, hospitality, government, enterprise, factory, warehousing, industrial, utilities, agriculture and mining.</p>
            </AnimateWhenVisible>
          </div>
        </div>
      </div>
    </div>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#000000" fill-opacity="1" d="M0,160L48,165.3C96,171,192,181,288,208C384,235,480,277,576,298.7C672,320,768,320,864,277.3C960,235,1056,149,1152,112C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
      read: true
    };
  },
  methods: {
    readMore() {
      this.opened = true;
      this.read = false;
    }
  }
};
</script>

<style scoped lang="scss">
svg {
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23ffffff' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E");
}
#about {
  background-color: #fafafa;
  // padding-bottom: 0px;
  padding-top: 25px;
  padding-bottom: 30px;
}
img {
  position: absolute;
  width: 300px;
  left: -50px;
  opacity: 0.1;
}
p {
  color: rgba(0, 0, 0, 0.75);
}
.main {
  text-align: center;
}
h1 {
  padding-bottom: 20px;
  padding-top: 0px;
}
p {
  padding-bottom: 0px;
}
button {
  background: transparent;
  border: none !important;
  color: blue;
  padding-left: 0;
  font-size: 17px;
  padding-right: 0;
}
button:hover {
  text-decoration: underline;
}
@media screen and (max-width: 550px) {
  p {
    font-size: 15px;
  }
}
@media screen and (max-width: 400px) {
  p {
    text-align: left;
  }
}
</style>
