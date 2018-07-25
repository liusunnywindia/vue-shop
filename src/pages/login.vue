<template>
  <div class="login-container">
    <main>
      <div class="login-form">
        <el-form @keyup.enter.native="login" ref="form"  :model="form" :rules="rules">
          <div class="title">用户登录</div>
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="用户账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="用户登录密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      disabled: true,
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'change' },
          { min: 6, max: 16, message: '账号的长度为 6-16 位', trigger: 'change' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'change' },
          { min: 6, max: 16, message: '密码的长度为 6-16 位', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    login: function (e) {
      console.log(e.target)
      if (this.form.username === 'admin123' && this.form.password === 'admin123') {
        window.localStorage.username = JSON.stringify(this.form.username)
        this.$router.push({ path: '/product' })
      } else {
        this.$message.error('用户名密码错了哦！')
      }
    }
  }
}
</script>
<style>
.login-form{
  width: 600px
}
.title{
  margin-bottom: 10px;
}
.login-container{
  display: flex;
  justify-content:center;
  margin-top: 60px;
}
</style>
