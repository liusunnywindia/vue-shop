<template>

  <el-table
    :data="tableData5"
    border
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
       <el-form label-position="left" inline class="demo-table-expand">
           <el-form-item label="商品编号">
             <span>{{props.row.id}}</span>
           </el-form-item>
            <el-form-item label="商品价格">
             <span>{{props.row.price}}</span>
           </el-form-item>
            <el-form-item label="收货人">
             <span>{{props.row.name}}</span>
           </el-form-item>
            <el-form-item label="收货地址">
             <span>{{props.row.province}}</span>
           </el-form-item>
            <el-form-item label="详细地址">
             <span>{{props.row.city}}</span>
           </el-form-item>
            <el-form-item label="电话">
             <span>{{props.row.tel}}</span>
           </el-form-item>
       </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="宝贝图片"
         width="120"
      >
        <template slot-scope="scope">
      <img  :src="scope.row.imgPath" alt="" style="width: 50px;height: 50px">
    </template>

    </el-table-column>
        <el-table-column
      prop="product"
      label="宝贝详情"
         width="180"
      >
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="100">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="80">
    </el-table-column>
      <el-table-column
      prop="sum"
      label="总计" width="100">
    </el-table-column>
      <el-table-column
      prop="ordertime"
      label="下单时间" width="180">
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="addReview(scope.row)" type="text" size="small">添加评论</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData5: []
    }
  },
  methods: {
    addReview (row) {
      console.log(row)
      this.$router.push({ name: 'review', query: {id: row.id, img: row.imgPath} })
    }

  },
  mounted () {
    let arr = []

    let peop = this.$store.state.pepo
    let orderlist = this.$store.state.orderlist
    this.$store.state.orderDetail = []
    for (var i = 0; i < orderlist.length; i++) {
      if (this.$store.state.orderDetail.length === 0) {
        this.$store.state.orderDetail = [{
          'id': orderlist[i].id, 'product': orderlist[i].product, 'price': orderlist[i].price, 'name': peop[i].name, 'province': peop[i].province, 'city': peop[i].city, 'tel': peop[i].tel, 'imgPath': orderlist[i].imgPath, 'num': orderlist[i].num, 'sum': orderlist[i].sum, 'ordertime': orderlist[i].ordertime
        }]
      } else {
        this.$store.state.orderDetail.push({
          'id': orderlist[i].id, 'product': orderlist[i].product, 'price': orderlist[i].price, 'name': peop[i].name, 'province': peop[i].province, 'city': peop[i].city, 'tel': peop[i].tel, 'imgPath': orderlist[i].imgPath, 'num': orderlist[i].num, 'sum': orderlist[i].sum, 'ordertime': orderlist[i].ordertime
        })
      }
    }

    arr = this.$store.state.orderDetail
    this.tableData5 = arr
  }
}

</script>
<style>
 .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
    text-align: left;
  }

</style>
