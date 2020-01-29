<template>
  <section id="products">
    <AppAnimate name="fadeDown" :duration="1">
      <h1>Our Products</h1>
    </AppAnimate>
    <div class="container">
      <div class="middle row">
        <AnimateWhenVisible name="bounce" :duration="1">
          <div>
            <h2>
              <i>Business Comms</i>
            </h2>
            <nuxt-link to="/products/categories#buscomms" class="prod col-lg-4 col-md-4 col-sm-12">
              <font-awesome-icon :icon="['fas', 'tty']" />
            </nuxt-link>
          </div>
        </AnimateWhenVisible>

        <AnimateWhenVisible name="bounce" :duration="1.5">
          <div>
            <h2>
              <i>Data Comms</i>
            </h2>
            <nuxt-link to="/products/categories#datacomms" class="prod col-lg-4 col-md-4 col-sm-12">
              <font-awesome-icon :icon="['fa', 'server']" />
            </nuxt-link>
          </div>
        </AnimateWhenVisible>

        <AnimateWhenVisible name="bounce" :duration="1">
          <div>
            <h2>
              <i>Wireless Voice Comms</i>
            </h2>
            <nuxt-link to="/products/categories#wirelessvoice" class="prod col-lg-4 col-md-4 col-sm-12">
              <font-awesome-icon :icon="['fa', 'phone-volume']" />
            </nuxt-link>
          </div>
        </AnimateWhenVisible>

        <AnimateWhenVisible name="bounce" :duration="1">
          <div>
            <h2>
              <i>Network Comms</i>
            </h2>
            <nuxt-link to="/products/categories#wirelesslan" class="prod col-lg-4 col-md-4 col-sm-12">
              <font-awesome-icon :icon="['fa', 'project-diagram']" />
            </nuxt-link>
          </div>
        </AnimateWhenVisible>

        <AnimateWhenVisible name="bounce" :duration="1.5">
          <div>
            <h2>
              <i>Industrial Networks</i>
            </h2>
            <nuxt-link to="/products/categories#industrialnet" class="prod col-lg-4 col-md-4 col-sm-12">
              <font-awesome-icon :icon="['fa', 'cogs']" />
            </nuxt-link>
          </div>
        </AnimateWhenVisible>

        <AnimateWhenVisible name="bounce" :duration="1">
          <div>
            <h2>
              <i>Duress and Safety</i>
            </h2>
            <nuxt-link to="/products/categories#duressandsafety" class="prod col-lg-4 col-md-4 col-sm-12">
              <font-awesome-icon :icon="['fa', 'user-shield']" />
            </nuxt-link>
          </div>
        </AnimateWhenVisible>

        <AnimateWhenVisible name="bounce" :duration="1.5">
          <div class="bot">
            <h2>
              <i>Large Site Comms</i>
            </h2>
            <nuxt-link to="/products/categories#largesitecoms" class="prod col-lg-4 col-md-4 col-sm-12">
              <font-awesome-icon :icon="['fa', 'hotel']" />
            </nuxt-link>
          </div>
          
        </AnimateWhenVisible>
      </div>
    </div>
  </section>
</template>

<script>
export default {
};
</script>

<style scoped>
#products {
  background-color: #fafafa;
  background-attachment: fixed;

  padding-top: 0;
  /* text-align: center; */
  margin: 0;
  padding: 0;
  /* justify-content: center; */
  /* align-items: center; */
  /* min-height: 100vh; */
}
h1 {
  text-align: center;
}
h2 {
  top: 0;
  left: 0;
  font-weight: 600;
  max-width: 100%;
  margin-top: 20px;
}
.middle {
  text-align: center;
  justify-content: center;
  color: rgba(30, 172, 233, 1);
}

i {
  font-size: 22px;
  font-weight: 700;
}

/* Products styling */
.prod {
  display: inline-block;
  width: 200px;
  height: 200px;
  /* background: rgb(235, 244, 248); */
  background: rgba(235, 244, 248, 0.65);
  margin: 5px 60px 20px 60px;
  border-radius: 30%;
  box-shadow: 0 5px 15px -5px #00000070;
  color: rgba(30, 172, 233, 0.7);
  overflow: hidden;
  position: relative;
  max-width: 220px;
}
.prod svg {
  /* line-height: 220px; */
  font-size: 80px;
  transition: 0.2s linear;
  margin-top: 56px;
}
.prod:hover svg {
  transform: scale(1.3);
  color: #f1f1f1;
}
.prod::before {
  content: "";
  position: absolute;
  width: 120%;
  height: 120%;
  background: rgba(30, 172, 233, 1);
  transform: rotate(45deg);
  left: -110%;
  top: 90%;
}
.prod:hover::before {
  animation: aaa 0.7s 1;
  top: -10%;
  left: -10%;
}
@keyframes aaa {
  0% {
    left: -110%;
    top: 90%;
  }
  50% {
    left: 10%;
    top: -30%;
  }
  100% {
    top: -10%;
    left: -10%;
  }
}
.bot {
  padding-bottom: 40px;
}
</style>