<template>
  <div class="console">
    <div class="console__filter">
      <FilterSelect
        v-model="city"
        :list-data="cityData"
        @select="
          resetTown();
          emitFilterData();
        "
        class="console__select"
        headline="請選擇行政區域..."
        select-id="FilterCity"
      />
      <FilterSelect
        v-model="town"
        :list-data="townData"
        @select="emitFilterData"
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
      return [...new Set(this.listData.map(item => item.City))];
    },
    townData() {
      return [
        ...new Set(this.listData
          .filter(item => item.City === this.city)
          .map(item => item.Town)),
      ];
    },
    filterCity() {
      if (!this.city) {
        return this.listData;
      }
      return this.listData.filter(item => item.City === this.city);
    },
    filterTown() {
      if (!this.town) {
        return this.filterCity;
      }
      this.emitFilterData();
      return this.filterCity.filter(item => item.Town === this.town);
    },
  },
  methods: {
    emitFilterData() {
      this.$emit('filter', {
        city: this.city,
        town: this.town,
      });
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
