<template>
  <div id="top">
    <li>
      <strong>
        <font-awesome-icon :icon="['fa', 'envelope']" />Enquiry@wwsinternational.net
      </strong>
    </li>
    <li>
      <strong>
        <font-awesome-icon :icon="['fa', 'phone']" />(+612) 9412 2100
      </strong>
    </li>
    <li>
      <strong>
        <font-awesome-icon :icon="['fa', 'location-arrow']" />Chatswood NSW 2067, Australia
      </strong>
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#top {
  background-color: #f0f7fb;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    display: flex;
    justify-content: space-around;
}
li {
  margin-bottom: 0px;
  list-style: none;
  color: rgba(86, 181, 219, 0.9);

  font-size: 18.5px;
  line-height: 33px;
  text-align: center;
}
svg {
  margin-right: 8px;
}
@media screen and (max-width: 873px) {
  #top {
    flex-direction: column;
    align-items: center;
  }
}
</style>