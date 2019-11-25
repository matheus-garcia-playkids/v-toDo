<template>
  <Dropdown
          :options="options"
          v-on:selected="validateSelection"
          v-on:filter="getDropdownValues"
          :disabled="false"
          name="zipcode"
          :maxItem="10"
          placeholder="Please select an option">
  </Dropdown>
</template>

<script>
  import Dropdown from 'vue-simple-search-dropdown';

  export default {
    name: 'DropDown',
    components: {
      Dropdown
    },
    methods: {
      validateSelection(selection) {
        this.selected = selection;
        console.log(selection.name+' has been selected');
      },
      getDropdownValues(keyword) {
        console.log('You could refresh options by querying the API with '+keyword);
      }
    },
    data() {
      return {
        options: [
          { name: 'Cat', id: 'cat' },
          { name: 'Dog', id: 'dog' },
          { name: 'Elephant', id: 'elephant' },
          { name: 'Girafe', id: 'girafe' },
          { name: 'Snake', id: 'snake' },
          { name: 'Spider', id: 'spider' },
          { name: 'Unicorn', id: 'unicorn' }
        ],
        selected: { name: null, id: null }
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
</style>
