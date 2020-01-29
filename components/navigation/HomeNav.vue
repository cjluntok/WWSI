<template>
  <nav id="homenavbar" class="before-scroll">
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
          <li class>Products</li>
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
          <nuxt-link to="/company" v-scroll-to="'#top'">
            <li class="drop">Company</li>
          </nuxt-link>
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
import AppMenu from "~/components/navigation/AppMenu.vue";

export default {
  components: {
    AppMenu
  },
  mounted() {
    window.onscroll = () => {
      const nav = document.querySelector("#homenavbar");
      // if (document.documentElement.clientWidth >= 874) {
        if (scrollY < document.getElementById("about").offsetTop - 180) {
          // nav.style.padding = 0;
          nav.className = "before-scroll";
        } else {
          nav.className = "scroll";
        }
      // }
    };
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
* {
  color:white;
}
#logo-top {
  margin: 0px;
  font-size: 27px;
  text-decoration: none;
  font-weight: 700;
}

#logo-bot {
  margin: 0px;
  margin-top: -5px;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 1.2px;
  margin-left: 3.3px;
  font-weight: 600;
}
.before-scroll {
  // padding-top: 20px;
  background-color: rgba(0,0,0,0.25);
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0,0.6);
  position: fixed;
  color:black;
}
li {
  // margin: 0 auto;
  padding-top: 0px;
}
h2 {
  margin: 0px;
  font-size: 27px;
  text-decoration: none;
  // letter-spacing: 1.8px;
}
a:hover {
  text-decoration: none;
  // color: black;
}
h3 {
  margin: 0px;
  margin-top: -5px;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: 1.64px;
  margin-left: 3.5px;
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
  // box-shadow: 0px 20px 16px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 20px 16px 0px rgba(0, 0, 0, 0);
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 50%;
}
.dropbtn {
  background-color: #4caf50;
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
  background-color: rgba(0,0,0, 0.4);
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

.dropdown-content li:hover {
  // background-color: rgb(235, 244, 248);
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

nav {
  width: 100%;
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
  line-height: 65px;
}
.scroll {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  // height:80px;
  // background-color: rgba(0,0,0,0.3);
  box-shadow: 0px 10px 16px 0px rgba(0, 0, 0,0.5);
  li,h2,h3 {
    color:black;
  }
  .dropdown-content {
    background-color: white;
  }
  transition: all 0.4s ease;
  
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

/* slidedown 2 */
</style>