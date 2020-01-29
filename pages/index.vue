<template>
  <div>
    <home-landing />
    <home-about />
    <home-solutions />
    <home-products />
    <home-partners><h1 slot="title">Our Partners</h1></home-partners>
  </div>
</template>

<script>
import HomeLanding from "~/components/home/HomeLanding";
import HomeAbout from "~/components/home/HomeAbout";
import HomeSolutions from "~/components/home/HomeSolutions";
import HomeProducts from "~/components/home/HomeProducts";
import HomePartners from "~/components/home/HomePartners";
export default {
  layout: "home",
  components: {
    HomeLanding,
    HomeAbout,
    HomeSolutions,
    HomeProducts,
    HomePartners,
  }
};
</script>

<style>
</style>
