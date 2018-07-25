<template>
  <div class="home">
       <v-product></v-product>
  </div>
</template>
<script>
import product from '@/components/product'
export default {
  data () {
    return {}
  },
  components: {
    'v-product': product
  }
}
</script>
