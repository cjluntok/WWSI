<template>
  <div class="sticky-footer">
    <div class="fill-page">
      <div class="no-jump">
        <top />
        <default-nav />
      </div>
      <nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
import DefaultNav from "~/components/navigation/Nav.vue";
import AppFooter from "~/components/Footer.vue";
import Top from "~/components/Top.vue";
export default {
  components: {
    DefaultNav,
    AppFooter,
    Top
  }
};
</script>

<style scoped>
.no-jump {
  min-height: 118px;
}
.sticky-footer {
  min-height: 100.05vh;
  display: flex;
  flex-direction: column;
}
.fill-page {
  flex: 1;
}
</style>
