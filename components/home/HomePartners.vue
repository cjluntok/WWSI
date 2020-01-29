<template>
  <section id="partners">
    <AppAnimate name="fadeDown" :duration="1">
    <slot name="title"></slot>
    </AppAnimate>
    
    <AnimateWhenVisible name="fade" :duration="3.3">
      <div class="container">
        <div class="middle row">
          <AnimateWhenVisible name="fadeLeftBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 left">
              <img id="part" src="../../assets/img/partners/twig.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="bounce" :duration="2">
            <div class="col-lg-3 col-md-3 col-sm-3 right">
              <img id="part" src="../../assets/img/partners/sircom.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="fadeRightBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 left">
              <img id="part" src="../../assets/img/partners/hirsch.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="fadeLeftBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 right">
              <img id="part" src="../../assets/img/partners/maestro.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="bounce" :duration="2">
            <div class="col-lg-3 col-md-3 col-sm-3 left">
              <img id="part" src="../../assets/img/partners/heart.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="fadeRightBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 right">
              <img id="part" src="../../assets/img/partners/motorola.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="fadeLeftBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 left">
              <img id="part" src="../../assets/img/partners/ack.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="bounce" :duration="2">
            <div class="col-lg-3 col-md-3 col-sm-3 right">
              <img id="part" src="../../assets/img/partners/duress.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="fadeRightBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 left">
              <img id="part" src="../../assets/img/partners/belden.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="fadeLeftBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 right">
              <img id="part" src="../../assets/img/partners/Ericsson.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="bounce" :duration="2">
            <div class="col-lg-3 col-md-3 col-sm-3 left">
              <img id="part" src="../../assets/img/partners/harris.png" alt />
            </div>
          </AnimateWhenVisible>

          <AnimateWhenVisible name="fadeRightBig" :duration="1">
            <div class="col-lg-3 col-md-3 col-sm-3 right">
              <img id="part" src="../../assets/img/partners/selex.png" alt />
            </div>
          </AnimateWhenVisible>
        </div>
      </div>
    </AnimateWhenVisible>
  </section>
</template>

<script>
</script>

<style scoped>
#partners {
  background: rgba(86, 181, 219, 0.1);
  padding-top: 25px;
  background-color: #e5f5ff;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23ffffff' fill-opacity='0.8' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-attachment: fixed;
}
#part {
  width: 255px;
  height: 100px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.middle {
  justify-content: center;
}
.col-lg-3 {
  margin: 0px 55px 0px 40px;
  display: table;
}
h1 {
  padding-top: 0px;
  margin-top: 0px;
}
@media screen and (max-width: 991px) {
  .col-lg-3 {
    margin: 0;
  }  
  .left {
    margin-right: 15px;
  }
  .right {
    margin-left: 15px;
  }
}
@media screen and (max-width: 1200px) {
  #part {
    width: 180px;
    height: 75px;
  }
}
@media screen and (max-width: 600px) {
  #part {
    width: 130px;
    height: 60px;
  }
}
</style>