<template>
  <div class="console">
    <div class="console__filter">
      <select name="" id="" disabled="disabled"></select>
      <select name="" id="" disabled="disabled"></select>
    </div>
    <Mode/>
  </div>
</template>

<script>
import Mode from './Mode';

export default {
  name: 'ListConsole',
  components: {
    Mode,
  },
};
</script>

<style scoped>
.console {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

</style>
