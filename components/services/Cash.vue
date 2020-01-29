<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-8
        variant="info"
      >WWSI Easy Cash Flow Rental Plan</b-button>
      <b-collapse slot="collapse" id="accordion-8" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>WWSI easy start rental plan – helping you access the latest technology now!</p>
            <p>With technology having an ever increasing role in effectively operating your business, keeping pace with it can you leave juggling needs, priorities and can put a strain on your working capital.</p>
            <p>With our “Easy Cash Flow” rental plan, it will allow you to expand or upgrade your system to the latest technology.</p>
            <p>WWSI can help you keep your business using the latest in leading technology whilst preserving capital, starting with as little as $2,000.00.</p>
            <span class="middle">
              <b style="font-weight:700;">Download PDF</b>
              <p>
                <a href="/rental.pdf" target="_blank" class="prod">
                  <font-awesome-icon :icon="['fas', 'file-pdf']" />
                </a>
              </p>
            </span>
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
p svg {
  font-size: 50px;
  color: black;
  margin-top: 8px;
}
b {
  margin-left: 20px;
  margin-bottom: 5px;
}
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