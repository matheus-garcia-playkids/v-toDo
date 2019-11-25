<template>
  <div id="app">
    <Menu :items="getMenuItems()"/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    Menu,
  },
  methods:{
    getMenuItems(){
      return [
        {link : "home", ref : 'Home', params: {}},
        {link : "users", ref : 'Users', params: {}}
      ]
    }
  }
}
</script>

<style>

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,body{
    height: 100%;
  }

  main{
    display: inline-flex;
    width: 100%;
    height: calc(100% - 80px);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }


</style>
