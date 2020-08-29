<template>
  <div>
    <div style="float:left;width:99%">
      <p>请选择你是谁：
        <select v-model="selectName" @change="changeUser">
          <option value="1">请选择</option>
          <option value="Mark">Mark</option>
          <option value="James">James</option>
          <option value="Lison">Lison</option>
          <option value="Peter">Peter</option>
          <option value="King">King</option>
        </select>
      </p>
      <div class="chatWindow">
        <p style="color:darkgrey">群聊：</p>
        <section>
          <div v-model="mass_div" class="mobile-page">
            <div class='user-group'>
              <div class='user-msg'>
                <span class='user-reply'>{{acceptMsg}}</span>
                <i class='triangle-user'></i>
              </div>
              {{selectName}}
            </div>
          </div>
        </section>
        <section>
          <input v-model="sendMsg"/>
          <button @click="this.sendMassMessage">发送</button>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      socket: '',
      sendMsg: '',
      selectName: '',
      mass_div: ''
    }
  },
  mounted () {
  },
  methods: {
    sendMassMessage: function () {
      if (this.selectName === '' || this.selectName == null) {
        alert('请选择你是谁！')
        return
      }
      if (this.sendMsg === '' || this.selectName == null) {
        alert('不能发送空消息！')
        return
      }
      this.socket.send(this.sendMsg)
      this.sendMsg = ''
    },
    changeUser: function () {
      if (this.socket != null) {
        this.socket.close()
      }
      if (this.selectName === 1 || this.selectName == null) {
        return
      }
      // 指定要连接的服务器地址与端口建立连接
      // ws对应http、wss对应https。
      this.socket = new WebSocket('ws://localhost:9001/ws?userId=' + this.selectName)
      // 连接打开事件
      this.socket.onopen = function () {
        console.log('Socket 已打开')
      }
      // 收到消息事件
      this.socket.onmessage = function (msg) {
        alert(msg)
        // 展示广播的接收的内容接收
        let response = this.mass_div
        let dataObj = msg.data
        let arr = dataObj.split('@^')
        let sendUser
        let acceptMsg
        $.each(arr, function (i, item) {
          if (i === 0) {
            this.sendUser = item
          } else {
            this.acceptMsg = item
          }
        })
        if (this.selectName === sendUser) {
          response.append("<div class='user-group'>" +
              "          <div class='user-msg'>" +
              "                <span class='user-reply'>" + acceptMsg + '</span>' +
              "                <i class='triangle-user'></i>" +
              '          </div>' + this.selectName +
              '     </div>')
        } else {
          response.append("     <div class='admin-group'>" +
              sendUser +
              "<div class='admin-msg'>" +
              "    <i class='triangle-admin'></i>" +
              "    <span class='admin-reply'>" + acceptMsg + '</span>' +
              '</div>' +
              '</div>')
        }
      }
      // 连接关闭事件
      this.socket.onclose = function () {
        console.log('Socket已关闭')
      }
      // 发生了错误事件
      this.socket.onerror = function () {
        alert('Socket发生了错误')
      }

      // 窗口关闭时，关闭连接
      window.unload = function () {
        this.socket.close()
      }
    }
  }
}
</script>

<style>
  /*公共样式*/
  /*body, h1, h2, h3, h4, p, ul, ol, li, form, button, input, textarea, th, td {*/
  /*  margin: 0;*/
  /*  padding: 0*/
  /*}*/

  /*body, button, input, select, textarea {*/
  /*  font: 12px/1.5 Microsoft YaHei UI Light, tahoma, arial, "\5b8b\4f53";*/
  /*  *line-height: 1.5;*/
  /*  -ms-overflow-style: scrollbar*/
  /*}*/

  /*h1, h2, h3, h4 {*/
  /*  font-size: 100%*/
  /*}*/

  /*ul, ol {*/
  /*  list-style: none*/
  /*}*/

  /*a {*/
  /*  text-decoration: none*/
  /*}*/

  /*a:hover {*/
  /*  text-decoration: underline*/
  /*}*/

  /*img {*/
  /*  border: 0*/
  /*}*/

  /*button, input, select, textarea {*/
  /*  font-size: 100%*/
  /*}*/

  /*table {*/
  /*  border-collapse: collapse;*/
  /*  border-spacing: 0*/
  /*}*/

  /*!*rem*!*/
  /*html {*/
  /*  font-size: 62.5%;*/
  /*}*/

  /*body {*/
  /*  font: 16px/1.5 "microsoft yahei", 'tahoma';*/
  /*}*/

  /*body .mobile-page {*/
  /*  font-size: 1.6rem;*/
  /*}*/

  /*!*浮动*!*/
  /*.fl {*/
  /*  float: left;*/
  /*}*/

  /*.fr {*/
  /*  float: right;*/
  /*}*/

  /*.clearfix:after {*/
  /*  content: '';*/
  /*  display: block;*/
  /*  height: 0;*/
  /*  clear: both;*/
  /*  visibility: hidden;*/
  /*}*/

  /*body {*/
  /*  background-color: #F5F5F5;*/
  /*}*/

  /*.mobile-page {*/
  /*  max-width: 600px;*/
  /*}*/

  /*.mobile-page .admin-img, .mobile-page .user-img {*/
  /*  width: 45px;*/
  /*  height: 45px;*/
  /*}*/

  /*i.triangle-admin, i.triangle-user {*/
  /*  width: 0;*/
  /*  height: 0;*/
  /*  position: absolute;*/
  /*  top: 10px;*/
  /*  display: inline-block;*/
  /*  border-top: 10px solid transparent;*/
  /*  border-bottom: 10px solid transparent;*/
  /*}*/

  /*.mobile-page i.triangle-admin {*/
  /*  left: 4px;*/
  /*  border-right: 12px solid #fff;*/
  /*}*/

  /*.mobile-page i.triangle-user {*/
  /*  right: 4px;*/
  /*  border-left: 12px solid #9EEA6A;*/
  /*}*/

  /*.mobile-page .admin-group, .mobile-page .user-group {*/
  /*  padding: 6px;*/
  /*  display: flex;*/
  /*  display: -webkit-flex;*/
  /*}*/

  /*.mobile-page .admin-group {*/
  /*  justify-content: flex-start;*/
  /*  -webkit-justify-content: flex-start;*/
  /*}*/

  /*.mobile-page .user-group {*/
  /*  justify-content: flex-end;*/
  /*  -webkit-justify-content: flex-end;*/
  /*}*/

  /*.mobile-page .admin-reply, .mobile-page .user-reply {*/
  /*  display: inline-block;*/
  /*  padding: 8px;*/
  /*  border-radius: 4px;*/
  /*  background-color: #fff;*/
  /*  margin: 0 15px 12px;*/
  /*}*/

  /*.mobile-page .admin-reply {*/
  /*  box-shadow: 0px 0px 2px #ddd;*/
  /*}*/

  /*.mobile-page .user-reply {*/
  /*  text-align: left;*/
  /*  background-color: #9EEA6A;*/
  /*  box-shadow: 0px 0px 2px #bbb;*/
  /*}*/

  /*.mobile-page .user-msg, .mobile-page .admin-msg {*/
  /*  width: 75%;*/
  /*  position: relative;*/
  /*}*/

  /*.mobile-page .user-msg {*/
  /*  text-align: right;*/
  /*}*/

  /*.chatRecord {*/
  /*  width: 100%;*/
  /*  height: 400px;*/
  /*  border-bottom: 1px solid blue;*/
  /*  line-height: 20px;*/
  /*  overflow: auto;*/
  /*  overflow-x: hidden;*/
  /*}*/
</style>
