<template>
  <div id="app">
    <Header/>
    <main class="main container mx-auto">
      <ListConsole/>
      <SnacksList/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header';
import ListConsole from './components/ListConsole';
import SnacksList from './components/SnacksList';

export default {
  name: 'App',
  components: {
    Header,
    ListConsole,
    SnacksList,
  },
};
</script>

<style>
h2,
h3,
p,
figure {
  margin: 0;
}

ul,
ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

body {
  line-height: 1.7;
  background-color: #eee;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.container {
  max-width: 1200px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
