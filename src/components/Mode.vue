<template>
  <div class="mode">
    <div class="mode__cntr">
      <button
        v-for="(item, index) in modeList" :key="index"
        @click="clickModehandler(item.id)"
        class="mode__btn"
        :id="item.id"
        type="button"
      >
        <img class="mode__icon" :src="item.imgUrl" :alt="item.id">
      </button>
    </div>
  </div>
</template>

<script>
import ListModeImg from '../assets/icon/th-list-solid.svg';
import TableModeImg from '../assets/icon/align-justify-solid.svg';
import CardModeImg from '../assets/icon/th-large-solid.svg';

export default {
  name: 'Mode',
  data() {
    return {
      modeList: [
        {
          id: 'ListMode',
          imgUrl: ListModeImg,
        },
        {
          id: 'TableMode',
          imgUrl: TableModeImg,
        },
        {
          id: 'CardMode',
          imgUrl: CardModeImg,
        },
      ],
    };
  },
  methods: {
    clickModehandler(mode) {
      this.$bus.$emit('changeMode', mode);
    },
  },
};
</script>

<style>
.mode__btn + .mode__btn{
  margin-left: 6px;
}

.mode__btn {
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

.mode__icon {
  width: 20px;
  height: 20px;
  filter: opacity(.7);
  vertical-align: bottom;
}

.mode__btn--active .mode__icon {
  filter: opacity(1);
}

</style>
