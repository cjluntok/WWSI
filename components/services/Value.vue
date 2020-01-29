<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-2
        variant="info"
      >Value Added Distribution Services</b-button>
      <b-collapse slot="collapse" id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>Our Equipment Distribution Division offer our value- added services to integrators, resellers, and Telco carriers to support the deployment and utilisation of the Voice-Data-Video Wireless and Industrial Networking products available.</p>
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