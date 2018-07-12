<template>
<div class="entrance">
   <div class="buy_entrance" @click="gointo()">购买入口</div>
    <div class="user_info" @click="gointoPeople()">个人信息</div>
    <div class="add_money" @click="gointoAdd()">添加金额</div>
</div>
</template>
<script>
export default {
  methods: {
    gointo: function () {
      this.$router.push({ path: '/product' })
    }
  }
}
</script>

<style>
  .buy_entrance,.user_info,.add_money{
    width: 200px;
    height: 100px;
    margin: 10px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blueviolet

  }
  .entrance{
    display: flex;
    justify-content: center;;
  }
</style>
