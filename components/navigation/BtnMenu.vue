<template>
  <button class="btn-menu">
    <span class="sandwich" :class="{ active }">
      <span class="sw-topper"></span>
      <span class="sw-bottom"></span>
      <span class="sw-footer"></span>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'BtnMenu',
    props: ['active']
  }
</script>

<style scoped lang="scss">
.btn-menu {
  width: 55px;
  height: 55px;
  z-index: 100;
  border: none;
  border-style: none;
  background-color: transparent;
  -webkit-text-fill-color: transparent;
  margin-top: 15px;
  padding-top:30px;
  position: relative;
  &:active,
  &:focus {
    outline: none;
  }
}

.sandwich {
  margin: auto;
  position: absolute;
  top: -18px;
  right: 12px;
  z-index: 300;
  margin-top: 20px;
  margin-bottom: 40px;
  &.active {
    .sw-topper {
      top: 14px;
      transform: rotate(-45deg);
      background-color: #30a9f0;
      
    }
    .sw-bottom {
      top: 11px;
      transform: rotate(45deg);
      background-color: #30a9f0;
    }
    .sw-footer {
      opacity: 0;
      transform: rotate(180deg);
      background-color: #30a9f0;
    }
  }
}
.sw-topper,
.sw-bottom,
.sw-footer {
  position: relative;
  width: 31px;
  height: 3px;
  background: #30a9f0;
  border: none;
  border-radius: 4px 4px 4px 4px;
  display: block;
}
.sw-topper {
  top: 5px;
  transition: transform 0.5s, top 0.2s,;
  transition-delay: 0.2s, 0s;
}
.sw-bottom {
  top: 12px;
  transition: transform 0.5s, top 0.2s;
}
.sw-footer {
  top: 20px;
  transition: all 0.5s;
  transition-delay: 0.1s;
}
</style>