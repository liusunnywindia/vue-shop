<template>
  <el-tabs v-model="activeName"  :tab-position="tabPosition" style="height: 600px;" @tab-click="handleClick">
    <el-tab-pane label="收货地址"  name="first"><vaddress @newNodeEvent="parentListen" :tableData="tableData"></vaddress></el-tab-pane>
    <el-tab-pane label="已购买商品"  name="second"><bought></bought></el-tab-pane>
    <el-tab-pane label="添加地址" name="third"><add-address></add-address></el-tab-pane>
  </el-tabs>
</template>
<script>
import address from '@/components/address.vue'
import addAddress from '@/components/addAddress.vue'
import bought from '@/components/bought.vue'
export default {
  data () {
    return {
      tabPosition: 'top',
      activeName: '',
      tableData: [ {
      //     name: '王小二',
      //     province: '11212',
      //     city: '3333',
      //     zip: '3333',
      //     tel: '15728003333',
      //     array: ''

      }]
    }
  },
  components: {
    vaddress: address,
    addAddress,
    bought

  },
  methods: {
    handleClick (tab, event) {
      this.tableData = JSON.parse(window.localStorage.getItem('address'))
    },
    parentListen (value) {
      console.log(value)
      this.tableData = JSON.parse(JSON.stringify(value))
      // this.tableData = value
      console.log(this.tableData, '-------------------')
    }
  },
  mounted () {
    this.activeName = this.$store.state.activeName
    this.tableData = JSON.parse(window.localStorage.getItem('address'))
    console.log(this.tableData, '-------------------')
  }
}
</script>
