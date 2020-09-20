<template lang='pug'>
#home
  my-menu(:scroll='scroll')
  section01(:scroll='scroll')
  section02(:scroll='scroll')
</template>

<script>
export default {
  data () {
    return {
      scroll: 0,
      scrollBar: {}
    }
  },
  methods: {
    getScroll (event) {
      const scrollValue = window.scrollY
      this.scroll = scrollValue / 145
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  }
}
</script>
<style lang="stylus">
</style>
