<template>
  <div class="mode">
    <p class="mode__tit">檢視模式：</p>
    <div class="mode__cntr">
      <button
        v-for="(item, index) in modeList" :key="index"
        @click="clickModehandler(item.id)"
        class="mode__btn"
        :class="{'mode__btn--active': item.id === nowMode}"
        :id="item.id"
        type="button"
      >
        <img class="mode__icon" :src="item.imgUrl" :alt="item.id">
      </button>
    </div>
  </div>
</template>

<script>
import ListModeImg from '../../assets/icon/th-list-solid.svg';
import TableModeImg from '../../assets/icon/align-justify-solid.svg';
import CardModeImg from '../../assets/icon/th-large-solid.svg';

export default {
  name: 'SnacksMode',
  props: ['value'],
  data() {
    return {
      nowMode: 'ListMode',
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
      this.nowMode = mode;
      this.$emit('input', mode);
    },
  },
};
</script>

<style>
.mode {
  display: flex;
  align-items: center;
}

.mode__tit {
  color: #aaa;
}

.mode__cntr {
  display: flex;
  align-items: center;
}

.mode__btn + .mode__btn{
  margin-left: 10px;
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
  filter: opacity(.6);
  vertical-align: middle;
}

.mode__btn--active .mode__icon {
  filter: opacity(1);
}

</style>
