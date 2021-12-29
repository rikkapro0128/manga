<template>
  <div>
    <Header/>
    <div class='wraper'>
      <Nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header/DefaultHeader'
import Footer from '@/components/Footer/DefaultFooter'
export  default  {
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang='scss' scoped>
div {
  font-family: Overpass, sans-serif;
  .wraper {
    width: 100%;
    max-width: 1050px;
    padding: 2rem 0;
    margin: 0 auto;
  }
}
</style>
