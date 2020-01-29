<template>
  <nav id="navbar">
    <span class="logo">
      <nuxt-link to="/" exact>
        <h2 id="logo-top">
          Wired
          <span class="logo-sign">&</span> Wireless
        </h2>
        <h3 id="logo-bot">SOLUTIONS INTERNATIONAL</h3>
      </nuxt-link>
    </span>

    <ul class="nav-links">
      <nuxt-link to="/services" v-scroll-to="'#top'">
        <li class>Services</li>
      </nuxt-link>

      <div class="dropdown">
        <!-- <nuxt-link to="/product" v-scroll-to="'#top'"> -->
          <li class="no-hover">Products</li>
        <!-- </nuxt-link> -->
        <div class="dropdown-content dropdown-content-products">
          <nuxt-link to="/products/categories" v-scroll-to="'#top'">
            <li class>Categories</li>
          </nuxt-link>
          <nuxt-link to="/products/technologies" v-scroll-to="'#top'">
            <li class>Technologies</li>
          </nuxt-link>
          <nuxt-link to="/products/solutions" v-scroll-to="'#top'">
            <li class>Solutions</li>
          </nuxt-link>
          <nuxt-link to="/products/downloads" v-scroll-to="'#top'">
            <li class>Downloads</li>
          </nuxt-link>
        </div>
      </div>

      <div class="dropdown">
        <div class="dropdown-content dropdown-content-company">
          <nuxt-link to="/company/about" v-scroll-to="'#top'">
            <li class>About Us</li>
          </nuxt-link>
          <nuxt-link to="/company/news" v-scroll-to="'#top'">
            <li class>News & Events</li>
          </nuxt-link>
          <nuxt-link to="/company/customers" v-scroll-to="'#top'">
            <li class>Clients</li>
          </nuxt-link>
          <nuxt-link to="/company/careers" v-scroll-to="'#top'">
            <li class>Careers</li>
          </nuxt-link>
          <nuxt-link to="/company/links" v-scroll-to="'#top'">
            <li class>Links</li>
          </nuxt-link>
        </div>
        <div class="parent-drop">
            <li class="drop no-hover">Company</li>
        </div>
      </div>
      <nuxt-link to="/contact" v-scroll-to="'#top'">
        <li class="margright">Contact Us</li>
      </nuxt-link>
    </ul>
    <div class="burger">
      <app-menu></app-menu>
    </div>
  </nav>
</template>

<script>
import AppMenu from "~/components/navigation/AppMenu";

export default {
  components: {
    AppMenu
  },
  mounted() {
    window.onscroll = () => {
      const nav = document.querySelector("#navbar");

      if (this.$route.path !== "/") {
        if (document.documentElement.clientWidth >= 874) {
          if (scrollY <= 53) {
            nav.className = "";
          } else {
            nav.className = "scroll";
          }
        } else {
          if (scrollY <= 119) {
            nav.className = "";
          } else {
            nav.className = "scroll";
          }
        }
      }
    };
  }
  // methods: {
  //   isHome: function() {
  //     return this.$route.path === '/'
  //   }
  // }
};
</script>

<style lang="scss" scoped>
* {
  color: black;
}
nav.home-nav {
  background-color: transparent;
}
a:hover {
  text-decoration: none;
  // color: black;
}
#logo-top {
  margin: 0px;
  font-size: 27px;
  text-decoration: none;
  font-weight: 700;
  // color: black;
  // letter-spacing: 1.8px;
}

#logo-bot {
  margin: 0px;
  margin-top: -5px;
  // padding-right: 5px;
  font-size: 14px;
  text-decoration: none;
  // color: black;
  letter-spacing: 1.2px;
  margin-left: 3.3px;
  font-weight: 600;
}
.logo-sign {
  color: rgb(48, 169, 240);
  margin-left: -5px;
  margin-right: -5px;
}
.burger {
  display: none;
}
nav {
  display: flex;
  justify-content: space-around;
  height: 65px;
  position: relative;
  background-color: white;
}
#navbar {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.4);
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 50%;
}
.dropbtn {
  background-color: #4caf50;
  // color: black;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  float: right;
}
.dropdown-content {
  display: none;
  position: absolute;
  left: 0px;
  top: 65px;
  background-color: #f9f9f9;
  // background-color: rgba(48, 169, 240, 0.6);
  min-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content li {
  padding-left: 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 0px;
  margin: 0 auto;
  width: 100%;
  font-size: 15px;
  line-height: 52px;
}

.dropdown:hover .dropdown-content,
.dropdown:hover .dropdown-content li {
  display: block;
  visibility: visible;
  opacity: 1;
  transition: all 0.37s ease;
}
.dropdown:hover .dropdown-content-products li {
  height: 25%;
}
.dropdown:hover .dropdown-content-products {
  height: 240px;
}
.dropdown:hover .dropdown-content-company li {
  height: 20%;
}
.dropdown:hover .dropdown-content-company {
  height: 300px;
}
.dropdown .dropdown-content li {
  display: none;
}
.dropdown .dropdown-content {
  display: block;
  visibility: none;
  height: 0px;
  opacity: 0;
}

.nuxt-link-active li {
  background-color: rgb(208, 232, 241);
  // box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

nav {
  width: 100%;
  // background-color: white;
  box-sizing: border-box;
  padding: 0px 20px;
  font-weight: 500;
  letter-spacing: 1.5px;
  z-index: 999;
  transition: 1s;
}
.nav-logo {
  width: 215px;
  height: 40px;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

li {
  margin-right: 0px;
  margin-bottom: 0px;
  padding-right: 25px;
  padding-left: 25px;
  font-size: 16.5px;
  font-weight: 600;
  float: right;
  // color: black;
  line-height: 65px;
}
.scroll {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  box-shadow: 0px 20px 16px 0px rgba(0, 0, 0, 0.3);
}
li:hover,
.dropdown:hover .dropbtn {
  background-color: rgb(235, 244, 248);
  transition: 0.2s ease-in;
}
li.no-hover:hover {
  background-color: rgb(255, 255, 255); 
  cursor: pointer;
}
.nuxt-link-exact-active li:hover {
  background-color: rgb(208, 232, 241);
  transition: 0.1s ease-in;
}
@media screen and (max-width: 1200px) {
  .nav-links {
    width: 65%;
  }
  li {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media screen and (max-width: 873px) {
  ul.nav-links {
    display: none;
  }
  .burger {
    display: flex;
  }
}
</style>