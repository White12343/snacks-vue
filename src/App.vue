<template>
  <div id="app">
    <Header/>
    <main class="main container mx-auto">
      <div class="main__cntr">
        <SnacksList/>
      </div>
      <aside class="aside">
        <Ad/>
      </aside>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import SnacksList from './components/SnacksList';
import Ad from './components/Ad';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    SnacksList,
    Ad,
    Footer,
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
  margin: 0;
  line-height: 1.7;
  background-color: #eee;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.main {
  display: flex;
}

.main__cntr {
  width: 75%;
  margin-right: 2em;
}

.aside {
  width: 25%;
}

@media screen and (max-width: 768px) {
  .main {
    display: block;
    padding: 0 12px;
  }

  .main__cntr {
    width: 100%;
    margin-right: 0;
  }

  .aside {
    width: 100%;
  }
}

.container {
  max-width: 1200px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
