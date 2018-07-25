<template>
<div >
  <h3 class="address_tit">确认收货地址</h3>
<div class="address_mes">
  <el-radio-group v-model="radio2" @change="changeHandler">
    <div v-for="(item, index) in addresslist" v-bind:key="index">
    <el-radio  :label="index" >{{item.province}}+{{item.city}}+{{'('+item.name+'收)'}}+{{item.tel}}+{{index}}</el-radio>
    </div>
  </el-radio-group>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      radio2: 0,
      addresslist: []
    }
  },
  methods: {
    changeHandler (value) {
      var arr = JSON.parse(window.localStorage.getItem('address'))
      var choseAddress = arr[value]
      this.$store.state.chosenSend = choseAddress
    }
  },
  mounted () {
    this.addresslist = JSON.parse(window.localStorage.getItem('address'))
  },
  created () {
    var arr = JSON.parse(window.localStorage.getItem('address'))
    var choseAddress = arr[0]
    this.$store.state.chosenSend = choseAddress
  }
}
</script>
<style>

.address_tit{
  border-bottom: 1px solid gray;
  text-align: left
}
.address_mes{
padding: 10px 0;
  text-align: left

}

</style>
