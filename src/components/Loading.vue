<template>
  <div class="loading">
    <p class="loading__desc">資料下載中...請稍後！</p>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .8);
}

.loading::before {
  content: '';
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 1em;
  background-color: #fff;
  animation: 1s ease-in-out rotate infinite;
}

@keyframes rotate {
  0% {
    transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
  }

  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
  }
}

.loading__desc {
  color: #fff;
}

</style>
