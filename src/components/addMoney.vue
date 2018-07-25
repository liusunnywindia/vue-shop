<template>
<div>
  <div class="choseMoney">
    <el-radio-group v-model="radio7" @change="changMoney">

    <el-radio  :label="50" border >￥<span>50</span></el-radio>
    <el-radio  :label="100" border >￥<span>100</span></el-radio>
    <el-radio  :label="500" border >￥<span>500</span></el-radio>
    <el-radio  :label="1000" border >￥<span>1000</span></el-radio>
    <el-radio  :label="2000" border >￥<span>2000</span></el-radio>

  </el-radio-group>
  </div>
     <div class="footers">
       <div class="money">
       <div class="submit_money" @click="submit_money">充值</div>
       </div>
     </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      radio7: 50,
      money: 50
    }
  },
  methods: {
    changMoney (value) {
      console.log(value)
      this.money = value
    },
    submit_money () {
      this.$confirm('确认充值, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '充值成功，可以买买买了!'
        })
        var final = this.$store.state.money + this.money
        this.$store.state.money = final
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消充值'
        })
      })
    }
  }
}
</script>
<style>
.choseMoney{
  padding: 15px
}

.submit_money{
 width: 300px;
  height: 50px;
 background-color: rgb(55, 167, 255);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;

}
.footers{
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    height: 50px;

}
.money{
  position: relative;
  height: 100%;
}
</style>
