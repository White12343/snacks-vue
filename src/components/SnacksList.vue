<template>
  <div class="snacks" :class="getSnacksModeClass">
    <ul
      class="snacks__ls"
      v-if="mode === 'ListMode' || mode === 'CardMode'"
    >
      <li class="snacks__li" v-for="(item, index) in cardData" :key="index">
        <Card :mode="mode" :card-data="item"/>
      </li>
    </ul>
    <div class="snacks__table" v-else-if="mode === 'TableMode'">
      <ListTable :card-data-list="cardData"/>
    </div>
  </div>
</template>

<script>
import Card from './Card';
import ListTable from './ListTable';

export default {
  name: 'SnacksList',
  data() {
    return {
      mode: 'ListMode',
      cardData: [],
    };
  },
  created() {
    this.getData();
    this.$bus.$on('changeMode', (mode) => { this.mode = mode; });
  },
  methods: {
    getData() {
      const api = '/static/data/data.json';
      fetch(api)
        .then(res => res.json())
        .then((data) => { this.cardData = data; });
    },
  },
  computed: {
    getSnacksModeClass() {
      switch (this.mode) {
        case 'ListMode':
          return 'snacks-list';
        case 'CardMode':
          return 'snacks-card';
        case 'TableMode':
          return 'snacks-table';
        default:
          return '';
      }
    },
  },
  components: {
    Card,
    ListTable,
  },
};
</script>

<style>

.snacks__li {
  margin-bottom: 1em;
}

.snacks-card .snacks__ls {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.snacks-card .snacks__li {
  width: 49%;
}

/* media query */
@media screen and (max-width: 414px) {
  .snacks-card .snacks__li {
    width: 100%;
  }
}

</style>
