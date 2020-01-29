<template>
  <div>
    <div class="box col-lg-4 col-md-6 col-sm-12">
      <div class="imgBx">
        <slot name="img"></slot>
      </div>
      <div class="content">
        <slot name="title"></slot>
        <slot name="para"></slot>
        <slot name="btn"></slot>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.box {
  width: 300px;
  height: 400px;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.6);
  background-size: cover;
  float: right;
  margin: 50px 40px 0px 40px;
  display: table;
  max-width: 300px;
}

.box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #E5F5FF;
  /* opacity: 0.3; */
  background: no-repeat cover;
}
.box .content {
  position: absolute;
  bottom: 30px;
  left: 10%;
  width: 80%;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  transition: 0.5s;
  overflow: hidden;

  padding: 15px;
  box-sizing: border-box;
}
.box:hover .content {
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
}
</style>