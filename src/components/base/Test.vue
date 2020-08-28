<template>
  <div class="test">
    {{msg}}
    <confirm text="注册" @message="getMessage"></confirm>
    <P><router-link to="/second">去第二个页面</router-link></P>
    <P><router-link :to="{
      path:'/second',
      params:{
        item:'itemA'
      },
      query:{
        id:'123'
      }
    }">去第二个页面</router-link></P>
  </div>
</template>
<script>
  import Confirm from '../sub/Confirm'
  export default {
    name: "Test",
    components: {Confirm},
    data() {
      return {
        msg: "test vue"
      }
    },
    mounted: {},
    methods: {
      getMessage(val){
        alert(val)
      }
    },
    watch: {}
  }
</script>
<style>

</style>
