<template>
  <div>
    <home-nav />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import HomeNav from "~/components/navigation/HomeNav.vue"
import AppFooter from "~/components/Footer.vue"
export default {
  components: {
    HomeNav,
    AppFooter
  }
}
</script>