<template>
  <div class="userinfo">
     <div>

     </div>
      <div class="userimg">
         <img src="../assets/image/admin.jpg">
      </div>
      <div class="usermes">
          <div class="username"><span>姓名：</span>{{username}}</div>
          <div class="banlance"><span>账号余额:</span>{{sum}}</div>
          <div class="tab"><tab></tab></div>
      </div>
  </div>
</template>
<script>
import tab from '@/components/tab'
export default {
  data () {
    return {
      username: ''
    }
  },
  components: {
    tab
  },
  mounted () {
    this.username = JSON.parse(window.localStorage.getItem('username'))
  },
  computed: {
    sum () {
      return this.$store.state.money
    }
  }
}
</script>
<style>
.userinfo{
  display: flex;
 margin: 10px;

}
.userimg img{
  width: 260px
}
.userimg{
  width: 300px
}
.usermes{
  margin-left: 20px;
  flex: 1

}
.username,.banlance{
  text-align: left
}
</style>
