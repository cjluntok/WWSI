<template>
  <section id="categories">
      <app-product-categories></app-product-categories>
      <app-our-partners>
        <h1 slot="title">Our Brands</h1>
      </app-our-partners>
  </section>
</template>

<script>
import OurPartners from "~/components/home/HomePartners";
import ProductCategories from '~/components/products/ProductCategories.vue'

export default {
  layout: 'products',
  components: {
    appOurPartners: OurPartners,
    appProductCategories : ProductCategories
  }
};
</script>

<style scoped>
#categories {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>