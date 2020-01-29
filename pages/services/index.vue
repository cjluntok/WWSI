<template>
  <div id="services">
    <div class="wrapper">
      <div class="servicesbg"></div>
      <h1>Services</h1>
      <div class="container">
        <systems />
        <value />
        <engineering />
        <project />
        <voice />
        <building />
        <support />
        <cash />
        <repair />
      </div>
    </div>
  </div>
</template>

<script>
import Value from "~/components/services/Value";
import Building from "~/components/services/Building";
import Cash from "~/components/services/Cash";
import Engineering from "~/components/services/Engineering";
import Project from "~/components/services/Project";
import Support from "~/components/services/Support";
import Systems from "~/components/services/Systems";
import Voice from "~/components/services/Voice";
import Repair from "~/components/services/Repair";
export default {
  components: {
    Value,
    Building,
    Cash,
    Engineering,
    Project,
    Support,
    Systems,
    Voice,
    Repair
  }
};
</script>

<style lang="scss" scoped>
//Accordion styling
.servicesbg {
  background-image: url("~assets/img/products/buscoms.png");
  background-position: 50% 44%;
  height: 328px;
  background-size: cover;
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
.wrapper {
  margin-bottom: 20px;
}
</style>