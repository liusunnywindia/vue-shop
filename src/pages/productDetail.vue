<template>
<div>
  <div class="detail">
      <div class="detail_img">
         <img  :src="productimg">
      </div>
      <div class="detail_mes">
          <div class="detail_tit">{{producttit}}</div>
           <div class="detail_price">价格：<span class="price">￥{{productprice}}</span></div>
           <div class="detail_message">
              <div class="detail_stock">货存：{{stock}}</div>
              <div class="detail_sold">
                数量：<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
               <span class="sell">{{sold}}</span></div>
           </div>
           <div class="detail_btn">
                <div class="buy" @click="buy">购买</div>
           </div>
             <v-review></v-review>
      </div>
  </div>

</div>
</template>
<script>
import review from '@/components/review'
export default {
  data () {
    return {
      num1: 1,
      productimg: '',
      producttit: '',
      productprice: '',
      stock: '',
      sold: ''

    }
  },
  components: {
    'v-review': review
  },
  methods: {
    handleChange (value) {
      this.$store.state.count = value
    },
    buy () {
      this.$router.push({ path: '/order', query: {id: this.$route.query.id} })
    }
  },
  mounted () {
    // this.$router.params.id
    let i = this.$route.query.id
    let arr = JSON.parse(window.localStorage.getItem('products'))
    this.productimg = arr[i].img
    this.producttit = arr[i].detail
    this.productprice = arr[i].price
    this.stock = arr[i].stock
    this.sold = arr[i].sold
  }
}
</script>
<style>
.detail{
  display: flex;
}
.detail_img img{
  width: 400px;
  height: 400px;
}
.detail_mes{
  width: 349px;
  height: 500px;
  margin-left: 30px;
  text-align: left;
}
.price{
  color: orange;
  font-size: 20px
}
.detail_tit{
  height: 50px;
  color: black;
  font-size: 30px;
  margin-bottom: 30px
}
.detail_message{
  height: 100px;
padding-top: 20px;
}
.buy{
  width: 80px;
    height: 40px;
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.detail_stock{
  margin-bottom: 30px
}
.sell{
  color: gray;
  font-size: 15px
}
.detail_btn{
  margin-bottom: 180px
}
</style>
