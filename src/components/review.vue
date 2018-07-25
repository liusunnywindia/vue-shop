<template>
   <div class="reviewList">
       <div class="review"  v-for="(item,index) in reviewlist" v-bind:key="index">
        <div class="reviewhead">
           <div class="reviewheader"><img src="../assets/image/user.png"></div>
           <div class="reviewname">{{username}}</div>
        </div>
        <div class="reviewcontent">
             <div class="review_mes">{{item.reviewcontent}}</div>
              <div class="time">{{item.currentDate}}</div>
        </div>
       </div>
   </div>
</template>
<script>
export default {
  data () {
    return {
      'reviewlist': [],
      'username': ''
    }
  },
  mounted () {
    let j = this.$route.query.id
    this.reviewlist = this.$store.state.reviewlist[j]
    this.username = JSON.parse(window.localStorage.getItem('username'))
  }
}
</script>
<style>
.review{
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  width: 600px
}
  .reviewheader img{
  width: 40px;
  height: 40px;
  }
  .reviewhead{
    width: 100px;
    height: 76px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .reviewcontent{
    width: 630px
  }
  .time{
    font-size: 12px;
    color: #B0B0B0;
    display: flex;
    justify-content: flex-start;
  }
  .review_mes{
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    overflow: auto

  }
</style>
