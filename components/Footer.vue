<template>
  <footer class="footer">
    <div class="copyright">
      &copy;{{year}} Wired and Wireless Solutions International
      <br />
      <div class="privacy">
        <a href="#">Read privacy policy terms and conditions</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 7px 20px 0px 20px;
  // background-color: rgba(0, 157, 255,0.05);
  // background-color: rgba(86,181,219,0.1);
  background-color: #e5f5ff;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23ffffff' fill-opacity='0.6' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-attachment: fixed;
  color: black;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

a {
  color: black;
  font-weight: 700;

  &:hover {
    // color: rgba(255,255,255,0.5);
    color: black;
    text-decoration: underline;
  }
}

div {
  font-size: 15px;
}
.copyright {
  display: inline-block;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 5px;
  color: rgba(0, 0, 0, 0.8);
}
.privacy {
  padding-top: 5px;
  padding-bottom: 7px;
}
</style>
