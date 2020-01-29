<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-7
        variant="info"
      >Support and Maintenance</b-button>
      <b-collapse slot="collapse" id="accordion-7" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>WWSI maintenance services have been active since 1989 and utilise the latest techniques as well as offering 24/7 monitoring and callouts if required. Our remote access services can assist in locating and rectifying potential problems before they occur.</p>
            <p>
              WWSI offer all preventative maintenance services to ensure the continuing operation of a clients network and systems.
              <br />‣ Voice data Networks and cabling networks.
              <br />‣ Base Stations and Backhaul Systems.
            </p>
            <p>Wired & Wireless Maintenance Support Service represents an ongoing partnership between ourselves and our partners business, ensuring that their communication system meets, and continues to adapt to, changing business requirements.</p>
            <p>
              With our multi-vendor capability, we provide end-to-end service and support for networking environments; whether a small local business or a multi-site national operation.
              <br />The depth and breadth of experience in the Wired & Wireless organisation together with our ethos of 100% customer care sets us apart from other suppliers.
            </p>
            <p>Wired & Wireless offers the highest Quality after-sales service via our specialist teams in Project Implementation and Customer Support. We provide remote maintenance support, on-site maintenance and facilities management.</p>
            <p>
              Our support and maintenance platforms ensure rapid response times are met. Our clients have access to a dedicated call line for assistance and service. Our expertise in support helps deliver fast remote maintenance service, fast fault diagnoses and correction resulting in less down time and lower service costs to the customer. We ensure all service levels agreed are supplied. Wired & Wireless provide exceptional levels of service that move beyond a service statement policy by:
              <br />‣ Employing world class engineers and providing thorough training
              <br />‣ Holding stock on hand, so service staff can offer loan units until repair or replacement is organised.
              <br />‣ Fielding service calls through our qualified staff who can assess the call and determine the right course of action.
              <br />‣ Offering telephone support to help our clients diagnose faults and as such help them to reduce their network running costs.
              <br />‣ Offering various remote dial-in service
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