<template>
   <div class="product_list">
      <div class="product">
          <img src="../assets/image/food.png">
          <div class="product_detail">
             商品详情商品详情商品详情商品详情商品详情商品详情
          </div>
          <div class="product_mes">
              <div class="product_price">￥200</div>
              <div class="product_stock">2324已售</div>
          </div>
      </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      products: {
        test: ''
      }
    }
  },
  mounted () {
    window.localStorage.products = JSON.stringify(this.products)
    // console.log(JSON.parse(window.localStorage.getItem('products')))
    console.log(window.localStorage.products)
  }
}
</script>
<style>
.product {
  width: 180px;
  height: 245px;
  border: solid 1px #ececec;
  position: relative;
}
.product_list{
  margin: 0 10px;
}
.product img {
  width: 180px;
  height: 180px;
}
.product_detail {
  width: 100%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 2px;
}
.product_mes {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 2px;
  width: 100%;

}
.product_price {
  color: orange;
}
.product_stock{
  color: grey
}
</style>
