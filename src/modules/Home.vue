<template>

  <div class="home">
    <ToDo/>
  </div>

</template>

<script>

import ToDo from '@/components/ToDo.vue'

export default {
  name: 'Home',
  components: {
    ToDo
  },
  data(){
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.home{
  width: 100%;
}
</style>
