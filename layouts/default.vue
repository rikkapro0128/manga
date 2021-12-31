<template>
  <div>
    <Header />
    <section>
      <div class="wraper">
        <Nuxt />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header/DefaultHeader"
import Footer from "@/components/Footer/DefaultFooter"
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
div {
  font-family: Overpass, sans-serif;
  section {
    width: 100%;
    background-color: $default-bg-color-section;
    .wraper {
      width: 100%;
      max-width: 1520px;
      padding: 2rem 100px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }
}
</style>
