<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-6
        variant="info"
      >In-building Solutions (IBS)</b-button>
      <b-collapse slot="collapse" id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>WWSI and our partners have designed and deployed end-to-end IBS solutions for clients in many places around the globe.</p>
            <p>
              Our capabilities cover all facets in IBS technology rollouts
              <br />• project design and project management
              <br />• construction & installation
              <br />• commissioning, integration & audits.
            </p>
            <p>WWSI and out partners use the latest technical solutions and procedures to ensure out comes are met. Our partenrs and our own people have leading experience in the technical aspects of providing IBS including cabling design, RF engineering, and Implementation. Examples: Taiwan Tunnels, High Rise in Middle East.</p>
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