<template>
  <div role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <slot name="button"></slot>
      </b-card-header>
        <slot name="collapse"></slot>
    </b-card>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: none;
  border: none !important;
  border-bottom: none !important;
  border-bottom-color: none !important;
  border-right-color: none!important;
}
header.card-header.p-1 {
  background-color: rgba(0,0,0,0) !important;
  border: none;
  width: 100%;
}
.btn {
  height: 50px;
  font-size: 25px;
  font-weight: 600;
  text-decoration: underline;
  // text-align: left;
  background-color: rgba(240, 247, 251, 0) !important;
  border: 0px solid #007497;
  // border-bottom: 1px solid #007497;
  color: #007497;
  // margin-top: 7px;
  margin-bottom: 10px;
}
.btn:focus {
  box-shadow: none;
}
a.btn:active {
  box-shadow: none !important;
  color: #007497 !important;
  transform: scale(0.95);
  // display: none;
}
.card-body {
  padding: 0px;
}
</style>