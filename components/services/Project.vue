<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-4
        variant="info"
      >Project Management Services</b-button>
      <b-collapse slot="collapse" id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>WWSI Group offers a diverse range of project management services. Incorporating planning right through to the commissioning and even management of the operations as required. WWSI personnel are Experienced and skilled managers and are available with a focus on Australia, Indian subcontinent and the Middle East. Our expertise means that our clients can be sure that the project will be finished on time and on budget.</p>
            <p>
              Our project management services:
              <br />• Project management planning
              <br />• Supplier and Subcontractor management
              <br />• Risk management
              <br />• Schedule management
              <br />• Scope & Procurement management
              <br />• Factory Acceptance Test management
              <br />• Contract administration
              <br />• Project procurement
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