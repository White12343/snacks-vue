<template>
  <div class="ad">
    <a
      class="ad__link"
      :class="{'ad__link--sticky': index === (adData.length - 1)}"
      href="#"
      v-for="(item, index) in adData"
      :key="index">
      <figure class="ad__inner">
        <img class="ad__img" :src="item.imgUrl" :alt="item.name">
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Ad',
  data() {
    return {
      adData: [
        {
          name: 'adv1',
          imgUrl: '/static/images/adv1.png',
        },
        {
          name: 'adv2',
          imgUrl: '/static/images/adv2.png',
        },
        {
          name: 'adv3',
          imgUrl: '/static/images/adv3.png',
        },
      ],
    };
  },
};
</script>

<style>
.ad {
  height: 100%;
}

.ad__link {
  display: block;
  margin-bottom: 1em;
}

.ad__img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}

.ad__link--sticky {
  position: sticky;
  top: 0;
}

@media screen and (max-width: 768px) {
  .ad {
    display: none;
  }
}

</style>
