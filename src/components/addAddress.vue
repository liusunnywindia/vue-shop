<template>
<div class="addmain">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="收货人" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="所在地区" prop="region">
    <el-cascader
      size="large"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
     <el-input v-model="ruleForm.array" class="classObject"></el-input>
  </el-form-item>
    <el-form-item label="详细地址" prop="detailAddress">
    <el-input rows="5" type="textarea" v-model="ruleForm.detailAddress"></el-input>
  </el-form-item>
    <el-form-item label="邮编" prop="zip">
    <el-input v-model="ruleForm.zip"></el-input>
  </el-form-item>
    <el-form-item label="电话/手机" prop="tel">
    <el-input v-model="ruleForm.tel"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        zip: '',
        tel: '',
        detailAddress: '',
        arr: ''
      },
      options: regionData,
      selectedOptions: [],
      rules: {
        name: [
          { required: true, message: '请输入收货人', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        zip: [
          { required: true, message: '请输入邮编', trigger: 'blur' }

        ],
        tel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '手机号格式错误'}
        ],
        detailAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var data1 = JSON.parse(window.localStorage.getItem('address'))
          console.log(data1)
          var newaddress = {
            name: this.ruleForm.name, province: this.arr, array: this.array, city: this.ruleForm.detailAddress, zip: this.ruleForm.zip, tel: this.ruleForm.tel }
          if (data1 === null) {
            data1 = [newaddress]
          } else {
            data1.push(newaddress)
          }

          console.log(data1)
          window.localStorage.address = JSON.stringify(data1)
          this.$message({
            message: '地址添加成功',
            type: 'success'
          })
          this.$refs['ruleForm'].resetFields()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleChange (value) {
      this.arr = ''
      this.array = ''
      for (let i in value) {
        this.arr += (CodeToText[value[i]])
      }
    }
  }
}
</script>
<style>
.addmain{
  width: 500px
}
.classObject{
  display: none
}
</style>
