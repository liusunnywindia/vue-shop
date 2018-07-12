<template>
  <div class="login-container">
    <main>
      <div class="login-form">
        <el-form @keyup.enter.native="login" ref="form"  :model="form" :rules="rules" @validate="checkForm">
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
    <qm-footer></qm-footer>
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
    login: function () {
      if (this.form.username === 'admin123' && this.form.password === 'admin123') {
        this.$router.push({ path: '/hello' })
      }
    }
  }
}
</script>
<style>
.login-form{
  width: 600px
}
.login-container{
  display: flex;
  justify-content:center;
}
</style>
