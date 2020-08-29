<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          关于我们
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          资源和社区
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          法律声明及隐私权政策
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          联系我们
        </a>
      </li>
    </ul>
    <div class="ali-copyright-text">© 2009-2020 immortal.com 版权所有 增值电信业务经营许可证：<a href="http://beian.miit.gov.cn/"
                                                                                 target="_blank"
                                                                                 data-spm-anchor-id="5176.12825654.7y9jhqsfz.112">陕B2-20080101</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to 永生科技'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
