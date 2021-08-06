<template>
  <div class="snacks" :class="getSnacksModeClass">
    <ListConsole :list-data="cardData" @filter="setFilterKeywords"/>
    <div class="snacks__cntr">
      <ul
        class="snacks__ls"
        v-if="mode === 'ListMode' || mode === 'CardMode'"
      >
        <li class="snacks__li" v-for="(item, index) in perPageData" :key="index">
          <Card :mode="mode" :card-data="item"/>
        </li>
      </ul>

      <div class="snacks__table" v-else-if="mode === 'TableMode'">
        <ListTable :card-data-list="perPageData" :page="nowPage"/>
      </div>
    </div>

    <Pagnation class="snacks__pagnation" :list-data-length="filterTown.length" v-model="nowPage"/>

    <Loading v-if="isLoading"/>
  </div>
</template>

<script>
import Card from './Card';
import ListTable from './ListTable';
import ListConsole from './ListConsole';
import Pagnation from './Pagnation';
import Loading from './Loading';
import FilterSelect from './FilterSelect';

export default {
  name: 'SnacksList',
  data() {
    return {
      mode: 'ListMode',
      isLoading: false,
      cardData: [],
      filterKeywords: {
        city: '',
        town: '',
      },
      nowPage: 1,
    };
  },
  created() {
    this.getData();
    this.$bus.$on('changeMode', (mode) => { this.mode = mode; });
  },
  methods: {
    getData() {
      const api = `${process.env.VUE_APP_SERVER}static/data/data.json`;
      this.isLoading = true;
      document.body.style.overflow = 'hidden';
      fetch(api)
        .then(res => res.json())
        .then((data) => {
          this.isLoading = false;
          document.body.style.overflow = '';
          this.cardData = data;
        });
    },
    setFilterKeywords(keywords) {
      this.filterKeywords = keywords;
      this.resetPage();
    },
    resetPage() {
      this.nowPage = 1;
    },
    getPerPageData(firstIndex, lastIndex) {
      const arr = [];
      for (let i = firstIndex; i < lastIndex; i += 1) {
        if (!this.filterTown[i]) {
          break;
        }
        arr.push(this.filterTown[i]);
      }
      return arr;
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
    firstIndexPerPage() {
      return (this.nowPage - 1) * this.$Global.NUM_PER_PAGE;
    },
    lastIndexPerPage() {
      return this.firstIndexPerPage + this.$Global.NUM_PER_PAGE;
    },
    perPageData() {
      return this.getPerPageData(this.firstIndexPerPage, this.lastIndexPerPage);
    },
  },
  components: {
    Card,
    ListTable,
    ListConsole,
    Pagnation,
    Loading,
    FilterSelect,
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

.snacks__cntr {
  margin-bottom: 1em;
}

.snacks__pagnation {
  margin-bottom: 1em;
}

/* media query */
@media screen and (max-width: 414px) {
  .snacks-card .snacks__li {
    width: 100%;
  }
}

</style>
