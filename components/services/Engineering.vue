<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-3
        variant="info"
      >Engineering and Planning Services</b-button>
      <b-collapse slot="collapse" id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>
              WWSI provide services and support for our distributors and for the carriers with communications technologies including 2g / 3g / wimax / cellular, microwave backhaul, fibre optic and wireless enterprise and in -building solutions, from a range of equipment providers.
              We currently provide service and network support infrastructures to major telecommunications providers in our markets. Our organisation offers an integrated service including telecommunications engineering and design service. Our services include technologies and interfacing in these fields – Mobile, Microwave, WiFi, Messaging, Voice Networks and Data Networks.
            </p>
            <p>
              We can assist in arranging/ co-ordinating providers for:
              <br />• Site Acquisition
              <br />• Site Survey & Audits
              <br />• Transmission Planning
              <br />• Microwave Link Planning
              <br />• Network Planning
              <br />• Design & Construction (antenna, tower & transmission)
              <br />• RF Engineering & Design (WiMax, Cellular, Microwave, )
              <br />• Licensing of RF deployments
              <br />
• Cellular 2G / 3g Repeaters and In-building Solutions
            </p>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </AppAccordion>
  </div>
</template>

<script>
import AppAccordion from "~/components/UI/Accordion";
export default {
  components: {
    AppAccordion
  }
};
</script>

<style lang="scss" scoped>
p {
  color: black;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 19px;
  letter-spacing: 0;
  padding-bottom: 10px;
  font-weight: 500;
}
h3 {
  font-size: 27px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 30px;
  margin-left: 20px;
  letter-spacing: 1.2px;
  text-align: left;
  color: rgba(86, 181, 219, 0.9);
}
hr {
  margin-left: 20px;
  margin-right: 20px;
  border-top: 1px solid rgba(86, 181, 219, 0.9);
}
b {
  font-weight: 600;
}
</style>