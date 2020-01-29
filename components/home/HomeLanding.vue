<template>
  <div>
    <div class="header position" id="animate-area">
      <div class="container-page"></div>
    </div>
    <div class="box" v-if="show">
      <a>
        <span @click="travel"></span>
        <span @click="travel"></span>
        <span @click="travel"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: 0,
      show: true
    };
  },
  methods: {
    travel() {
      this.about = document.getElementById("about").offsetTop - 65;
        window.scrollTo({ top: this.about, behavior: "smooth" });
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$el.clientWidth <= 873) {
        this.show = false;
      }
      console.log(scrollY)
    });
  }
};
</script>


<style lang="scss" scoped>
#animate-area {
  // background-size: 100% 100%;
  background-size: 100% 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url("~assets/img/banner.jpg") !important;
  background-attachment: fixed;
}
.header {
  background-color: rgb(255, 255, 255);
}

.box {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 100px;
  bottom: 0px;
  right: 25%;
}
.box span {
  display: block;
  width: 35px;
  height: 35px;
  border-bottom: 5px solid #fff;
  border-right: 5px solid #fff;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
  // padding: 10px;
}
.box span:nth-child(2) {
  animation-delay: -0.2s;
  transform: rotate(45deg) translate(-20px, -20px);
}
.box span:nth-child(3) {
  animation-delay: -0.4s;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px, 20px);
  }
}

@media only screen and (max-width: 873px) {
  #animate-area {
    background-size: 100% 50%;
    height: 50vh;
  }
}
</style>