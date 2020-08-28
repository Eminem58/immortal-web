<template>
  <div class="confirm-button">
    <button @click="getButtonClick">{{ text ||'确认'}}</button>
  </div>
</template>
<script>
  export default {
    name: "confirm-button",
    props: ["text", "a"],
    comments: {},
    data() {
      return {
        msg: "hh"
      }
    },
    mounted: {},
    methods: {
      getButtonClick() {
        this.$emit("message", this.msg)
      }
    },
    watch: {}
  }
</script>
<style>

</style>
