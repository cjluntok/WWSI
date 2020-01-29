<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-5
        variant="info"
      >Voice Data 3G WIMAX Installation & Commissioning</b-button>
      <b-collapse slot="collapse" id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>Our engineers and technical staffs together have decades of combined practical experience in our fields of expertise. We are happy to assist in all areas of deployment of technological solutions. And our ability is to pull together a team that best suits our clients requirements in terms of technology, and other aspects.</p>
            <p>
              The scope of our services for our distributors, resellers includes:
              <br />• site survey, audits & recommendations
              <br />• outdoor housings, rectifiers, ac and networking
              <br />• equipment and product integration
              <br />• installation of equipment
              <br />• AC/DC power provisioning
              <br />• testing & commissioning
              <br />• system integration
              <br />• network maintenance & support services
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