<template>
  <div class="pagnation">
    <p class="pagnation__tit">
      美食頁次 {{ value }} / {{ total }}
    </p>
    <div class="pagnation__page">
      <button
        class="pagnation__btn"
        :class="{'pagnation__btn--active': item === value}"
        :value="item"
        type="button"
        v-for="(item, index) in total"
        :key="index"
        @click="changePage(item)"
      >{{ item }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagnation',
  props: ['value', 'listDataLength'],
  data() {
    return {
    };
  },
  computed: {
    total() {
      const NUM_PER_PAGE = 10;
      return Math.ceil(this.listDataLength / NUM_PER_PAGE);
    },
  },
  methods: {
    changePage(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style scoped>
.pagnation {
  display: flex;
  justify-content: space-between;
}

.pagnation__btn {
  display: inline-block;
  padding: 6px 10px;
  margin-left: 6px;
  margin-bottom: 6px;
  color: #AEADB2;
  background-color: #ddd;
  border: 0;
}

.pagnation__btn--active {
  color: #fff;
  background-color: #0CA4D3;
}

@media screen and (max-width: 414px) {
  .pagnation__tit {
    display: none;
  }
  .pagnation__btn {
    margin-left: 0;
    margin-right: 6px;
  }
}

</style>
