<template>
  <div>
    <BtnMenu
      @click.native="isMenuVisible = !isMenuVisible, products=false,company=false"
      :active="isMenuVisible"
    />
    <nav class="nav-bar" v-if="isMenuVisible" @click="scrolling">
      <ul>
        <AnimateWhenVisible name="fadeUp" :duration="1">
          <li @click="close()">
            <nuxt-link to="/">
              <a class="nav-link">Home</a>
            </nuxt-link>
          </li>
        </AnimateWhenVisible>
        <AnimateWhenVisible name="fadeUp" :duration="1.2">
          <li @click="close()">
            <nuxt-link to="/services">
              <a class="nav-link">Services</a>
            </nuxt-link>
          </li>
        </AnimateWhenVisible>
        <AnimateWhenVisible name="fadeUp" :duration="1.4">
          <li>
            <a class="nav-link left products" href @click="products=!products, company=false">
              Products
              <font-awesome-icon :icon="['fa', 'caret-down']" />
            </a>
          </li>
        </AnimateWhenVisible>

        <div class="anim-drop">
          <li v-if="products" class="li-drop" key="1" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1">
              <nuxt-link to="/products/categories">
                <a class="nav-link drop">Categories</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
          <li v-if="products" class="li-drop" key="2" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1.2">
              <nuxt-link to="/products/technologies">
                <a class="nav-link drop">Technologies</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
          <li v-if="products" class="li-drop" key="3" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1.5">
              <nuxt-link to="/products/solutions">
                <a class="nav-link drop">Solutions</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
          <li v-if="products" class="li-drop" key="4" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1.9">
              <nuxt-link to="/products/downloads">
                <a class="nav-link drop">Downloads</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
        </div>

        <!-- COMPANY DROPDOWN -->
        <AnimateWhenVisible name="fadeUp" :duration="1.6">
          <li>
            <a id="companyli" class="nav-link left" href @click="company=!company, products=false">
              Company
              <font-awesome-icon :icon="['fa', 'caret-down']" />
            </a>
          </li>
        </AnimateWhenVisible>

        <div class="dropdown2">
          <li v-if="company" class="li-drop" key="5" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1">
              <nuxt-link to="/company/about">
                <a class="nav-link drop" href>About Us</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
          <li v-if="company" class="li-drop" key="6" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1.2">
              <nuxt-link to="/company/news">
                <a class="nav-link drop" href>News & Events</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
          <li v-if="company" class="li-drop" key="7" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1.4">
              <nuxt-link to="/company/customers">
                <a class="nav-link drop" href>Clients</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
          <li v-if="company" class="li-drop" key="8" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="1.6">
              <nuxt-link to="/company/careers">
                <a class="nav-link drop">Careers</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
          <li v-if="company" class="li-drop" key="9" @click="close()">
            <AnimateWhenVisible name="fadeUp" :duration="2">
              <nuxt-link to="/company/links">
                <a class="nav-link drop">Links</a>
              </nuxt-link>
            </AnimateWhenVisible>
          </li>
        </div>
        <AnimateWhenVisible name="fadeUp" :duration="2">
          <li>
            <nuxt-link to="/contact">
              <a class="nav-link contact" @click="close()">Contact Us</a>
            </nuxt-link>
          </li>
        </AnimateWhenVisible>
      </ul>
    </nav>
  </div>
</template>

<script>
import BtnMenu from "./BtnMenu";
export default {
  name: "AppMenu",
  components: {
    BtnMenu
  },
  data: () => ({
    isMenuVisible: false,
    animation: null,
    products: false,
    company: false
  }),
  methods: {
    scrolling(event) {
      event.preventDefault();
      if (this.animation) {
        this.animation.cancel();
      }
    },
    close() {
      this.isMenuVisible = false;
      this.products = false;
      this.company = false;
    }
  }
};
</script>

<style lang="scss" scoped>
a.nav-link {
  width: 1000px;
}
a.nav-link.left {
  margin-left: 17px;
}
svg {
  padding-left: 3px;
}
.nav-bar {
  position: fixed;
  overflow: scroll;
  padding-top: 90px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 50;
  right: 0;
  top: 0;
}
span {
  display: block;
}
ul {
  text-align: center;
  align-items: center;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
li:hover {
  background-color: rgba(86, 181, 219, 0.1);
  transition: all 0.5s ease-out;
  a {
    text-decoration: none;
  }
}
a {
  font-weight: bold;
  font-size: 1.8rem;
  display: block;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  transition: all 0.5s ease-out;
  &:hover {
    color: rgba(206, 241, 255, 0.9);
  }
}
a.nav-link {
  padding-top: 17px;
  padding-bottom: 17px;
}
.li-drop a.nav-link {
  padding: 5px;
}
li.li-drop a {
  font-size: 1.65rem;
  color: rgb(116, 218, 255);
}
.drop-active {
  background-color: rgba(86, 181, 219, 0.1);
}

// Transition

@media screen and (min-height: 700px) {
  a.nav-link {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
@media screen and (max-height: 700px) {
  .nav-bar {
    padding-top: 50px;
  }
}
</style>