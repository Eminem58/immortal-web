<template>
  <p><a href="#/test" text>去第一个页面{{this.$route.query.id}}</a></p>
</template>
<script>
  export default {
    name: "Second",
    components: {},
    data() {
      return {
        text:"abc"
      }
    },
    mounted: {},
    methods: {},
    watch: {}
  }
</script>
<style>

</style>
