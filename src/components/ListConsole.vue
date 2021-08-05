<template>
  <div class="console">
    <div class="console__filter">
      <FilterSelect
        v-model="city"
        :list-data="cityData"
        @select="
          resetTown();
          chooseFilterKeywords();
        "
        class="console__select"
        headline="請選擇行政區域..."
        select-id="FilterCity"
      />
      <FilterSelect
        v-model="town"
        @select="chooseFilterKeywords"
        :list-data="townData"
        class="console__select"
        headline="請選擇鄉鎮區..."
        select-id="FilterTown"
      />
    </div>
    <Mode class="console__mode"/>
  </div>
</template>

<script>
import Mode from './Mode';
import FilterSelect from './FilterSelect';

export default {
  name: 'ListConsole',
  props: {
    listData: {
      type: Array,
    },
  },
  data() {
    return {
      city: '',
      town: '',
    };
  },
  computed: {
    cityData() {
      return this.organizeCityData();
    },
    townData() {
      return this.organizeTownData();
    },
  },
  methods: {
    chooseFilterKeywords() {
      this.$emit('filter', {
        city: this.city,
        town: this.town,
      });
    },
    organizeCityData() {
      const list = [];
      this.listData.forEach((item) => {
        if (!list.includes(item.City)) {
          list.push(item.City);
        }
      });
      return list;
    },
    organizeTownData() {
      const list = [];
      if (!this.city) {
        return list;
      }

      this.listData.forEach((item) => {
        if (item.City === this.city && !list.includes(this.Town)) {
          list.push(item.Town);
        }
      });

      return list;
    },
    resetTown() {
      this.town = '';
    },
  },
  components: {
    Mode,
    FilterSelect,
  },
};
</script>

<style scoped>
.console {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

.console__select {
  margin-right: 6px;
}

@media screen and (max-width: 414px) {
  .console {
    flex-direction: column;
  }

  .console__select {
    width: 100%;
    margin-right: 0;
    margin-bottom: 12px;
  }

  .console__mode {
    align-self: center;
  }
}

</style>
