<template>
  <div id = "app">
    App <!-- {{ type }} -->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        type: 'test',
        app: true
      };
    },
    mounted() {
      this.type = 2;
    }
    /* computed: {
      val() {
        return this.type === 'test' ? 1 : 2;
      },
      value() {
        return this.app ? false : true;
      }
    } */
  }
</script>