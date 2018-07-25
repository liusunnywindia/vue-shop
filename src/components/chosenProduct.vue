<template>

  <el-table
    :data="tableData3"
    height="300"
    border
    style="width: 100%">
    <el-table-column
      label="宝贝图片"
      >
        <template slot-scope="scope">
      <img  :src="scope.row.imgPath" alt="" style="width: 50px;height: 50px">
    </template>

    </el-table-column>
        <el-table-column
      prop="product"
      label="宝贝详情"
      >
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="180">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="80">
    </el-table-column>
      <el-table-column
      prop="sum"
      label="总计" width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData3: []
    }
  },
  mounted () {
    let i = this.$route.query.id
    let arr = JSON.parse(window.localStorage.getItem('products'))
    var obj = []
    var num = this.$store.state.count
    obj.push({'imgPath': arr[i].img, 'product': arr[i].detail, 'price': arr[i].price, 'num': num, 'sum': arr[i].price * num})
    this.tableData3 = obj
  }
}
</script>
