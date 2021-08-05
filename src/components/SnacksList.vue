<template>
  <div class="snacks" :class="getSnacksModeClass">
    <ListConsole :list-data="cardData" @filter="setFilterKeywords"/>
    <div class="snacks__cntr">
      <ul
        class="snacks__ls"
        v-if="mode === 'ListMode' || mode === 'CardMode'"
      >
        <li class="snacks__li" v-for="(item, index) in filterTown" :key="index">
          <Card :mode="mode" :card-data="item"/>
        </li>
      </ul>
      <div class="snacks__table" v-else-if="mode === 'TableMode'">
        <ListTable :card-data-list="filterTown"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card';
import ListTable from './ListTable';
import ListConsole from './ListConsole';

export default {
  name: 'SnacksList',
  data() {
    return {
      mode: 'ListMode',
      cardData: [],
      filterKeywords: {
        city: '',
        town: '',
      },
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
    setFilterKeywords(keywords) {
      this.filterKeywords = keywords;
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
    filterCity() {
      if (!this.filterKeywords.city) {
        return this.cardData;
      }

      return this.cardData.filter(item => item.City === this.filterKeywords.city);
    },
    filterTown() {
      if (!this.filterKeywords.town) {
        return this.filterCity;
      }

      return this.filterCity.filter(item => item.Town === this.filterKeywords.town);
    },
  },
  components: {
    Card,
    ListTable,
    ListConsole,
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
