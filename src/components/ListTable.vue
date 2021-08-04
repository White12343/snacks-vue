<template>
  <table class="listTable">
    <thead class="listTable__head">
      <tr class="listTable__tr">
        <th class="listTable__th listTable__num text-cancel">編號</th>
        <th class="listTable__th listTable__city text-cancel">行政區域</th>
        <th class="listTable__th listTable__town text-cancel">鄉鎮區</th>
        <th class="listTable__th listTable__name text-cancel">商家</th>
        <th class="listTable__th listTable__address text-cancel">地址</th>
      </tr>
    </thead>
    <tbody class="listTable__body">
      <tr
        class="listTable__tr"
        :class="{'listTable__tr--cancel': index % 2}"
        v-for="(item, index) in cardDataList"
        :key="index">
        <td class="listTable__td text-cancel text-right">{{ index + 1 }}</td>
        <td class="listTable__td text-cancel" :title="item.City">{{ item.City }}</td>
        <td class="listTable__td text-cancel" :title="item.Town">{{ item.Town }}</td>
        <td class="listTable__td" :title="item.Name">{{ item.Name }}</td>
        <td class="listTable__td" :title="item.Address">{{ item.Address }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ListTable',
  props: {
    cardDataList: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.listTable {
  width: 100%;
  background-color: #fff;
  border-collapse: collapse;
  table-layout: fixed;
}

.listTable__head {
  background: linear-gradient(#f7f7f7, #e8e8e8);
}

.listTable__th,
.listTable__td {
  padding: 10px 12px;
  border: 1px solid #ddd;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.listTable__th {
  text-align: center;
  border-bottom: 2px solid #ddd;
}

.listTable__num {
  width: 45px;
}

.listTable__city {
  width: 85px;
}

.listTable__town {
  width: 85px;
}

.listTable__name {
  width: 180px;
}

.listTable__tr--cancel {
  background-color: #F9F9F9;
}

.listTable__body .listTable__tr:hover {
  background-color: #EFF4F7;
}

@media screen and (max-width: 768px) {
  .listTable {
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
