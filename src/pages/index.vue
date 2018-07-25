<template>
   <div class="index">
      <vHeader :active.sync="active"></vHeader>

   </div>
</template>
<script>
import vheader from '@/components/header'
export default {
  data () {
    return {
      active: 'product'
    }
  },
  components: {
    vHeader: vheader
  },
  watch: {
    active (newVal) {
      this.$router.push({
        path: `${this.active}`
      })
    }
  }
}
</script>
<style>
.index{
  width: 100%;
  height: 100%;
}
</style>
