<template>
  <div class="snacks" :class="getSnacksModeClass">
    <div class="snacks__console">
      <div class="snacks__filter">
        <SnacksFilter
          v-model="city"
          :list-data="cityData"
          @select="resetHandler"
          class="snacks__select"
          headline="請選擇行政區域..."
          select-id="FilterCity"
        />
        <SnacksFilter
          v-model="town"
          :list-data="townData"
          @select="resetPage"
          class="snacks__select"
          headline="請選擇鄉鎮區..."
          select-id="FilterTown"
        />
      </div>
      <SnacksMode class="snacks__mode" v-model="mode"/>

    </div>
    <div class="snacks__cntr">
      <ul
        class="snacks__ls"
        v-if="mode === 'ListMode' || mode === 'CardMode'"
      >
        <li class="snacks__li" v-for="(item, index) in perPageData" :key="index">
          <SnacksCard :mode="mode" :card-data="item"/>
        </li>
      </ul>

      <div class="snacks__table" v-else-if="mode === 'TableMode'">
        <SnacksTable :card-data-list="perPageData" :page="nowPage"/>
      </div>
    </div>

    <Pagnation class="snacks__pagnation" :list-data-length="filterData.length" v-model="nowPage"/>

    <Loading v-if="isLoading"/>
  </div>
</template>

<script>
import SnacksCard from './SnacksCard';
import SnacksTable from './SnacksTable';
import Pagnation from '../pagnation/Pagnation';
import Loading from '../loading/Loading';
import SnacksFilter from './SnacksFilter';
import SnacksMode from './SnacksMode';

export default {
  name: 'SnacksList',
  data() {
    return {
      mode: 'ListMode',
      isLoading: false,
      cardData: [],
      city: '',
      town: '',
      nowPage: 1,
    };
  },
  created() {
    this.getData();
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
    resetPage() {
      this.nowPage = 1;
    },
    resetTown() {
      this.town = '';
    },
    resetHandler() {
      this.resetPage();
      this.resetTown();
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
    cityData() {
      return [...new Set(this.cardData.map(item => item.City))];
    },
    townData() {
      return [
        ...new Set(this.cardData
          .filter(item => item.City === this.city)
          .map(item => item.Town)),
      ];
    },
    filterData() {
      if (!this.city) {
        // 沒選 city
        return this.cardData;
      } else if (!this.town) {
        // 選 city，未選 town
        return this.cardData.filter(item => item.City === this.city);
      }
      // 選 city，也選 town
      return this.cardData
        .filter(item => item.City === this.city && item.Town === this.town);
    },
    perPageData() {
      const arr = [];
      const min = (this.nowPage - 1) * this.$Global.NUM_PER_PAGE;
      const max = min + this.$Global.NUM_PER_PAGE;
      for (let i = min; i < max; i += 1) {
        if (!this.filterData[i]) {
          break;
        }
        arr.push(this.filterData[i]);
      }
      return arr;
    },
  },
  components: {
    SnacksCard,
    SnacksTable,
    Pagnation,
    Loading,
    SnacksFilter,
    SnacksMode,
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


.snacks__console {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

.snacks__select {
  margin-right: 6px;
}

@media screen and (max-width: 414px) {
  .snacks__console {
    flex-direction: column;
  }

  .snacks__select {
    width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
  }

  .snacks__mode {
    align-self: center;
  }
}

</style>
