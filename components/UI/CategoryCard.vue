<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="img"></slot>
      </div>
      <div class="flip-card-back">
        <div class="container">
          <div class="row">
            <p>
              <slot name="li"></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li {
  color: black;
  font-size: 18px;
  margin-bottom: 5px;
}

.flip-card {
  background-color: transparent;
  width: 400px;
  height: 350px;
  /* min-width: 400px; */
  /* perspective: 4000px; */
  margin: 0 auto;
  text-align: center;
  margin-bottom: 35px;
  /* background-color: rgba(86, 181, 219, 1); */
  border-radius: 5%;
}

img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  border-radius: 5%;
  border: 1px solid black;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;
  transform: rotateY(0);
  transition: transform 1.5s;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
  transition: transform 0.7s;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 5%;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: rgba(86, 181, 219, 1);
  opacity: 0.86;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #e5f5ff;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='16' viewBox='0 0 12 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 .99C4 .445 4.444 0 5 0c.552 0 1 .45 1 .99v4.02C6 5.555 5.556 6 5 6c-.552 0-1-.45-1-.99V.99zm6 8c0-.546.444-.99 1-.99.552 0 1 .45 1 .99v4.02c0 .546-.444.99-1 .99-.552 0-1-.45-1-.99V8.99z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-attachment: fixed;
  transform: rotateY(180deg);
  border: 1px solid #007497;
  /* z-index: 999; */
}
.row {
  display: flex;
}
</style>