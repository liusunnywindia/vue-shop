<template>
<div>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%" v-model="datalist">
    <el-table-column
    fixed
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="所在地区"
      width="180">
    </el-table-column>
    <el-table-column
      prop="city"
      label="详细地址"
      width="250">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
      <el-table-column
      prop="tel"
      label="电话/手机"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
      @click.native.prevent="deleteRow(scope.$index,tableData)"
      type="text"
      size="small">
      移除
    </el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
    <el-dialog title="地址信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
             <el-cascader
                size="large"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange">
              </el-cascader>
        </el-form-item>
         <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input rows="5" type="textarea" v-model="form.city" auto-complete="off"></el-input>
        </el-form-item>
           <el-form-item label="邮编" :label-width="formLabelWidth">
          <el-input v-model="form.zip" auto-complete="off"></el-input>
        </el-form-item>

         <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="update()">确 定</el-button>
      </div>
    </el-dialog>

</div>

</template>

<script>
import { regionData, CodeToText } from 'element-china-area-data'
export default {
  methods: {

    handleClick (row) {
      console.log(row)
      this.$alert('<div>姓名：' + row.name + '</div><div>地址：' + row.province + '</div><div>详细地址：' + row.city + '</div>', '当前地址', {
        dangerouslyUseHTMLString: true
      })
    },
    deleteRow (index, rows) {
      this.$confirm('此操作将删除地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        rows.splice(index, 1)
        let arr = JSON.parse(window.localStorage.getItem('address'))
        arr.splice(index, 1)
        window.localStorage.address = JSON.stringify(arr)
        this.tableData = JSON.parse(window.localStorage.getItem('address'))
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleEdit: function (index, row) {
      // console.log(row)
      var obj = JSON.parse(JSON.stringify(row))
      this.form = obj
      this.currentIndex = index
      this.dialogFormVisible = true
    },
    cancel () {
      this.dialogFormVisible = false
    },
    update () {
      this.tableData[this.currentIndex] = this.form
      this.dialogFormVisible = false
      this.tableData[this.currentIndex] = this.form
      window.localStorage.address = JSON.stringify(this.tableData)
      this.$emit('newNodeEvent', this.tableData)
    },
    handleChange (value) {
      this.newaddress = ''
      for (let i in value) {
        this.newaddress += (CodeToText[value[i]])
      }

      this.form.province = this.newaddress
    }
  },
  props: ['tableData'],
  data () {
    return {
      // tableData: [
      //   {
      //     name: '王小二',
      //     province: '11212',
      //     city: '3333',
      //     zip: '3333',
      //     tel: '15728003333',
      //     array: ''

      //   }
      // ],
      dialogFormVisible: false,
      formLabelWidth: '80px',
      form: {},
      selectedOptions: [],
      options: regionData,
      newaddress: ''
    }
  },
  mounted () {
    // this.tableData = JSON.parse(window.localStorage.getItem('address'))
  },
  created () {
    this.datalist = JSON.parse(window.localStorage.getItem('address'))
  },
  watch: {

  }
}
</script>
