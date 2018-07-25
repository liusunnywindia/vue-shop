<template>
<div>
   <div class="contaniner">
     <div>
      <choose-address></choose-address>
      </div>
      <div>
        <chosenProduct></chosenProduct>
      </div>
   </div>
<div class="footer">
            <div class="orderimg">
               <img :src="productimg">
            </div>
            <div class="ordertitpro">
              {{producttit}}
            </div>
            <div class="num">
             X {{counts}}
            </div>
            <div class="ordermes">
                <div>寄送至
                {{chosenaddress.province+chosenaddress.city}}</div>
                <div>{{chosenaddress.name+','+chosenaddress.tel}}</div>
            </div>
            <div class="ordersum">
               <span>实付款:</span>￥{{productprice*counts}}
            </div>
            <div class="order_btn">
                <div class="submit_btn" @click="submit_order">提交订单</div>
            </div>
         </div>
</div>
</template>
<script>
import chooseAddress from '@/components/chooseAddress'
import chosenProduct from '@/components/chosenProduct'
export default {
  data () {
    return {
      productimg: '',
      producttit: '',
      productprice: '',
      address: '',
      people: ''

    }
  },
  components: {
    chooseAddress: chooseAddress,
    chosenProduct
  },
  methods: {
    submit_order () {
      this.$confirm('是否提交订单, 是否继续?', '提示', {
        confirmButtonText: '确定并付款',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '付款成功!'
        })
        var obj = []
        let date = new Date()
        let currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        obj.push({'id': this.$route.query.id, 'imgPath': this.productimg, 'product': this.producttit, 'price': this.productprice, 'num': this.counts, 'sum': this.counts * this.productprice, 'ordertime': currentDate})

        this.$store.state.orderlist.push(obj[0])
        this.people = this.chosenaddress.name
        this.$store.state.pepo.push({'name': this.people, 'province': this.chosenaddress.province, 'city': this.chosenaddress.city, 'tel': this.chosenaddress.tel})
        this.$store.state.order = {'imgPath': this.productimg, 'product': this.producttit, 'price': this.productprice, 'num': this.counts, 'sum': this.counts * this.productprice, 'ordertime': currentDate}
        var final = this.$store.state.money - this.productprice * this.counts
        if (final > 0) {
          this.$store.state.money = final
        } else {
          this.$message({
            type: 'info',
            message: '您的余额不足，请充值'
          })
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消提交'
        })
      })
    }
  },
  mounted () {
    let i = this.$route.query.id
    let arr = JSON.parse(window.localStorage.getItem('products'))
    this.productimg = arr[i].img
    this.producttit = arr[i].detail
    this.productprice = arr[i].price
  },
  computed: {
    counts () {
      return this.$store.state.count
    },
    chosenaddress () {
      return this.$store.state.chosenSend
    }
  }

}
</script>
<style>
.contaniner{
  margin: 10px 50px;
}
.footer{
  position: fixed;
  height: 50px;
  background-color: gray;
  width: 100%;
  bottom: 0;
  display: flex;
  align-content: center
}
.orderimg{
  display: flex;
  width: 60px;
  height: 100%;
  align-items: center;
  justify-content: center
}
.orderimg img{
  width: 30px;
  height: 30px
}
.ordermes{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  color: #fff;
  font-size: 14px

}
.submit_btn{
  width: 300px;
  height: 50px;
 background-color: rgb(55, 167, 255);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center
}
.ordersum{
  display: flex;
  color: orange;
  align-items: center;
  padding: 10px;
  font-size: 18px
}
.ordersum span{
  color: #fff;
  font-size: 13px
}
.ordertitpro,.num{
  display: flex;
  align-items: center;
  color: #fff;
  margin: 0 10px;
  width:240px;
  overflow: hidden;
  font-size: 15px
}
.num{
  width: 40px
}
</style>
