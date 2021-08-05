<template>
  <select
    class="filterSelect"
    :id="selectId"
    :name="selectId"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @change="$emit('select')"
  >
    <option value="" selected disabled>{{ headline }}</option>
    <option :value="item" v-for="(item, index) in listData" :key="index">{{ item }}</option>
  </select>
</template>

<script>
export default {
  name: 'FilterSelect',
  props: [
    'value',
    'listData',
    'headline',
    'selectId',
  ],
};
</script>

<style>
.filterSelect {
  padding: 10px;
  font-size: 16px;
  background-color: #D6D6D6;
  border: 0;
  border-radius: 3px;
}

</style>
