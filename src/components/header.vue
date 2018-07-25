<template>
<div>
<el-menu
  :default-active="active"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#37A7FF"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item  index="product">商品中心</el-menu-item>
  <el-menu-item index="money" >添加金额</el-menu-item>
  <el-menu-item index="userinfo" >个人信息</el-menu-item>
 <el-submenu index="userinfo">
    <template slot="title">欢迎您{{username}}</template>
    <el-menu-item index="2-1" @click="loginout">login out</el-menu-item>
  </el-submenu>
</el-menu>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      required: true
    }

  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$emit('update:active', key)
    },
    loginout () {
      window.localStorage.removeItem('username')
      this.$router.push({ path: '/' })
    }
  },
  mounted () {
    this.username = JSON.parse(window.localStorage.getItem('username'))
  }
}
</script>
