<template>
  <table class="SnacksTable">
    <thead class="SnacksTable__head">
      <tr class="SnacksTable__tr">
        <th class="SnacksTable__th SnacksTable__num text-cancel">編號</th>
        <th class="SnacksTable__th SnacksTable__city text-cancel">行政區域</th>
        <th class="SnacksTable__th SnacksTable__town text-cancel">鄉鎮區</th>
        <th class="SnacksTable__th SnacksTable__name text-cancel">商家</th>
        <th class="SnacksTable__th SnacksTable__address text-cancel">地址</th>
      </tr>
    </thead>
    <tbody class="SnacksTable__body">
      <tr
        class="SnacksTable__tr"
        :class="{'SnacksTable__tr--cancel': index % 2}"
        v-for="(item, index) in cardDataList"
        :key="index">
        <td class="SnacksTable__td text-cancel text-right">{{ countIndex(index) }}</td>
        <td class="SnacksTable__td text-cancel" :title="item.City">{{ item.City }}</td>
        <td class="SnacksTable__td text-cancel" :title="item.Town">{{ item.Town }}</td>
        <td class="SnacksTable__td" :title="item.Name">{{ item.Name }}</td>
        <td class="SnacksTable__td" :title="item.Address">{{ item.Address }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SnacksTable',
  props: {
    cardDataList: {
      type: Array,
      require: true,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    countIndex(index) {
      return ((this.page - 1) * this.$Global.NUM_PER_PAGE) + (index + 1);
    },
  },
};
</script>

<style scoped>
.SnacksTable {
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  table-layout: fixed;
}

.SnacksTable__head {
  background: linear-gradient(#f7f7f7, #e8e8e8);
}

.SnacksTable__th,
.SnacksTable__td {
  padding: 10px 12px;
  border: 1px solid #ddd;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.SnacksTable__th {
  text-align: center;
  border-bottom: 2px solid #ddd;
}

.SnacksTable__num {
  width: 45px;
}

.SnacksTable__city {
  width: 85px;
}

.SnacksTable__town {
  width: 85px;
}

.SnacksTable__name {
  width: 180px;
}

.SnacksTable__tr--cancel {
  background-color: #F9F9F9;
}

.SnacksTable__body .SnacksTable__tr:hover {
  background-color: #EFF4F7;
}

@media screen and (max-width: 768px) {
  .SnacksTable {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

/* tools */
.text-cancel {
  color: #666;
}

.text-right {
  text-align: right;
}


</style>
