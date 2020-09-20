<template lang='pug'>
#home
  section01(:scroll='scroll')
</template>

<script>
export default {
  data () {
    return {
      scroll: 0
    }
  },
  methods: {
    getScroll (event) {
      const scrollValue = window.scrollY
      this.scroll = scrollValue / 145
      console.log(this.scroll)
    }
  },
  computed: {
  },
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  }
}
</script>
<style lang="stylus">

.iframe{
  border 0
}

</style>
