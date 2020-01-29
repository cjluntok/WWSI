<template>
  <section id="aboutus">
    <h1>About Us</h1>
    <div class="container">
      <div class="row">
        <p>Wired & Wireless Solutions International (WWSI) is an Australian-owned distribution and consulting company with a presence in major regions. We specialise in advanced technology by the world's leading suppliers. We specifically focus on M2M, RFID, IIOT, IOT, Sensors, RTLS, Messaging, Wi-Fi AC, WiFi6, IP PBX, IP DECT, Trunked Radio, Cloud innovations customised to the organisation's requirements in telemetry, alarms, IP, telecommunications, wireless, industrial, safety and security applications.</p>
        <p>We offer design and development services and products to operators, telco's, utilities, corporate/government organisations in all sectors. We provide country-wide solutions, city-wide solutions , down to small/medium businesses.</p>
        <p>Today, we are proud to work with thousands of organisations across a variety of sectors and regions.</p>

        <h3>Mission, core values and key advantages</h3>
        <p>The Wired & Wireless has always aimed to be provide the highest levels of innovative technology / service while respecting the environmental factors.</p>
        <p>Our strength is our technical capability, experience and proven track record over more than 20 years.</p>
        <p>
          Proven experience in many aspects of engineering for organisations of all sizes in the following:
        </p>
        <p>
            <ul>
                <li>‣ Audio visual systems, PABX / IP Voice systems, wireless systems, sensor systems, RFID, M2M, Radio, IPDECT, messaging, alarm systems.</li>
                <li>‣ R + D Capability software and electronic hardware.</li>
                <li>‣ Leading the industry in wireless since the early 1990's</li>
                <li>‣ Advanced technology perspective</li>
                <li>‣ Research & development and Design expertise.</li>
                <li>‣ Long history of successful projects</li>
                <li>‣ Practical and reliable approach</li>
                <li>‣ Global network operating centre GNOC providing 24/7 support</li>
                <li>‣ Security License</li>
                <li>‣ Equipment monitoring alarm centre</li>
                <li>‣ Security monitoring available in Grade A1 graded Centres</li>
            </ul>
        </p>
        <div><button v-if="read" @click="readMore">Read More >></button></div>
        <div v-if="opened">
          <AnimateWhenVisible name="fade" :duration="2">
            <h3>Our leading areas and long operating history</h3>
            <p>Wired & Wireless have led the field in integrating voice, data and video systems. </p>
            <p>A core strength is our digital wireless heritage, as leader in wireless radio systems, wireless control systems since the early 1990s. We have built upon that foundation and have implemented innovative radio/wireless projects for thousands of organisations to solve their specific communications problems.  Real time asset and staff safety is an aspect of our wireless mobility focus as well as RFID tags, and sensors. Along with this is our expertise in notification systems and alert/ alarm distribution. </p>
            <p>Suppliers and integrators who use our services include Australia’s leading Electrical companies, Automation, Construction and Facilities Management companies.</p>
            <p>An important capability is our voice systems experience from working for more than 15 years with the intricacies of the complex telephony field that has given us the edge when moving to a converged UCS designs.
            <br>
            <h3>Advanced Technical expertise</h3>
            <p>Our knowledge, experience and qualifications have given us a breadth &amp; depth enabling  us to select the optimal equipment for the application so that it performs the tasks correctly. We assess needs and specify the very best solution available, appraised before being recommended.</p>
            <p>We operate a specialised engineering and support centre.  Expert staff, with solid qualifications, as well as appropriate product training. From advice, to design, from installation to backed maintenance, our people do a complete job to ensure that your customers' expectations are met or exceeded.</p>
            <h3>Converging a balance approach to on-premises, cloud technologies</h3>
            <p>Wired &amp; Wireless provide an informative consultative approach. We assist and advise our trusted partners on efficient approaches,  for converging and customising to ensure a comprehensive best fit for application. We endeavour to provide new levels of efficiencies using appropriate technology to help give short payback periods, and with rental and subscription based options.</p>
            <h3>Wide focus and reach</h3>
            <p>We have a well-setup dealer / installer network with points of presence for service and delivery in many locations. Therefore we can assist and maintain from large city centres to small rural businesses.</p>
            <h3>Brief History</h3>
            <p>Wired &amp; Wireless was founded in Australia by business and technology leaders with decades of experience the aim of providing world-class technological consulting and expertise.</p>
            <p>Wired &amp; Wireless , through its distribution channels has already successfully completed 10,000 projects in private and government sectors.</p>
            <p>Wired &amp; Wireless today continues to equip organisations with leading edge  communications, security and business technologies.  Our maintenance services are provided on a national basis with options for extended hours and 24/7 hours support.</p>
          </AnimateWhenVisible>
        </div>
        <div>
            <h3>Our Clients</h3>
            <p>We have successfully provided software and hardware equipment for more than 10,000 projects for clients over a period of more than 20 years.</p>
            <p>Our robust innovative methodologies, combined with economical approach has proven to be a success with our partners and supplying into these clients and applications:</p>
            <p>
                <ul>
                    <li>‣ Operators, telcos, energy and utility companies</li>
                    <li>‣ Corporate, government and businesses</li>
                    <li>‣ Industrial sites, manufacturing sites</li>
                    <li>‣ Factories, food processing</li>
                    <li>‣ Shipping, logistics, warehouses</li>
                    <li>‣ Hospital, health care and hospitality</li>
                    <li>‣ Shopping malls and expo halls</li>
                    <li>‣ Universities, colleges and schools</li>
                    <li>‣ Security sectors (correctional centres, military compounds)</li>
                    <li>‣ Oil refineries</li>
                    <li>‣ Entertainment industry</li>
                    <li>‣ Governmental sectors</li>
                    <li>‣ Hotels, resorts and tourism industries</li>
                </ul>
            </p>
            <p><u>Contact us</u> for a confidential discussion of references and reference sites in your sector.</p>
        </div>
        
      </div>
    </div>
    <app-our-partners>
        <h1 slot="title">
            Our Partners
        </h1>
    </app-our-partners>
  </section>
</template>

<script>
import OurPartners from '~/components/home/HomePartners.vue'
export default {
  layout: 'company',
  data() {
    return {
      opened: false,
      read: true
    };
  },
  components: {
      appOurPartners: OurPartners
  },
  methods: {
      readMore() {
          this.opened = true;
          this.read = false;
      },
  },
};
</script>

<style scoped>
#aboutus {
  padding-top: 0px;
  padding-bottom: 0px;
}
#catalogue {
    padding-bottom: 0px;
}
div {
    display: block;
}
p {
  color: rgba(0, 0, 0, 1);
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: justify;
}
h3 {
  margin-top: 12px;
  margin-bottom: 20px;
}
ul {
  margin-left: 16px;
}
button {
  background: transparent;
  border: none !important;
  color: blue;
  padding-left: 0;
  font-size: 17px;
  padding-right: 0;
  margin-bottom: 15px;
}
button:hover {
  text-decoration: underline;
}
@media screen and (max-width: 700px) {
  h3 {
    text-align: center;
  }
  h4 {
    padding-left: 10px;
    padding-right: 20px;
  }
  p {
    font-size: 15px;
  }
  p {
    padding-left: 10px;
  }
}
</style>