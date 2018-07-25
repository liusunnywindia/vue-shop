<template>
   <div class="contain">
       <div class="reviewimg">
          <img :src="img">
       </div>
       <div class="reviewmes">
              <div> <el-input type="textarea" v-model="reviewcontent" :rows="7" ></el-input></div>
              <div class="reviewBtn"><el-button type="primary" @click="addReview">发表评论</el-button></div>
       </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      'img': '',
      'reviewcontent': ''

    }
  },
  methods: {
    addReview () {
      if (this.reviewcontent === '') {
        this.$message({
          showClose: true,
          message: '您没填评论哦',
          type: 'warning'
        })
      } else {
        this.$message({
          showClose: true,
          message: '提交评论成功',
          type: 'success'
        })
        let j = this.$route.query.id
        let date = new Date()
        let currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        this.$store.state.reviewlist[j].push({'reviewcontent': this.reviewcontent, 'currentDate': currentDate})
        this.$router.push({ name: 'productDetail', query: {id: j} })
      }
    }
  },
  mounted () {
    let img = this.$route.query.img
    this.img = img
  }
}
</script>
<style>
.contain{
  display: flex;
  margin: 20px 60px
}
.reviewimg img{
  width: 132px;
  height: 132px;
}
.reviewmes{
  width: 600px;
    margin: 0 20px;
    height: 400px;
}
.reviewBtn{
  display: flex;
  margin-top: 10px;
 justify-content: flex-end;
}
</style>
