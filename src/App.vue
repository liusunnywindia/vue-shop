<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    created () {
      window.localStorage.address = JSON.stringify(this.$store.state.address)
      localStorage.getItem('address') && this.$store.replaceState(JSON.parse(localStorage.getItem('address')))
      window.addEventListener('beforeunload', () => {
        localStorage.setItem('address', JSON.stringify(this.$store.state.address))
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
*{
  margin:0
}
</style>
