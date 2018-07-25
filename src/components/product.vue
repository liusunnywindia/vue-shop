<template>
   <div class="product_list">
      <div class="product" v-for="(item,index) in productsList" v-bind:key="index" @click="lookDetail(index)">
          <img  :src="item.img">
          <div class="product_detail">
             {{item.detail}}
          </div>
          <div class="product_mes">
              <div class="product_price">￥{{item.price}}</div>
              <div class="product_stock">{{item.sold}}</div>
          </div>
      </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      productsList: [
        {
          id: 1,
          img: require('../assets/image/food.png'),
          detail: '112232334343',
          price: '200',
          sold: '2324已售',
          stock: 300

        },
        {
          id: 2,
          img: require('../assets/image/food2.png'),
          detail: '美味美味好好吃美味美味好好吃美味美味好好吃',
          price: '300',
          sold: '2324已售',
          stock: 1000
        },
        {
          id: 3,
          img: require('../assets/image/food3.png'),
          detail: '112232334343',
          price: '100',
          sold: '23已售',
          stock: 300
        }
      ]
    }
  },
  methods: {
    lookDetail  (index) {
      this.$router.push({ name: 'productDetail', query: {id: index} })
    }
  },
  mounted () {
    window.localStorage.products = JSON.stringify(this.productsList)
    // console.log(JSON.parse(window.localStorage.getItem('products')))
  }
}
</script>
<style>
.product {
  width: 180px;
  height: 245px;
  border: solid 1px #ececec;
  position: relative;
  margin-right: 10px;
}

.product_list{
  margin: 10px;
  display: flex;
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
