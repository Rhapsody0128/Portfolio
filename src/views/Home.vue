<template lang='pug'>
  #home
    span.bigtitle(:style="bigtitle" v-text='title')
    my-menu(:scroll='scroll')
    section01(:scroll='scroll')
    section02(:scroll='scroll')
    section03(:scroll='scroll')
    .footer(:style='footer')
      a.text(href="https://github.com/Rhapsody0128") GitHub
      a.text(href="https://www.cakeresume.com/s--qzuy_7x1N5rA11p9TaK3rA--/rhapsody0128") CakeResume
      a.text.copyright Copyright© 2020 Rhapsody0128 All rights reserved
</template>

<script>
export default {
  data () {
    return {
      scroll: 0,
      scrollBar: {},
      bigtitle: {},
      title: '請往下滑',
      footer: {}
    }
  },
  methods: {
    getScroll (event) {
      const scrollValue = window.scrollY
      this.scroll = scrollValue / 145
    }
  },
  watch: {
    scroll (value) {
      if (value >= 8 && value < 10) {
        this.title = '簡介'
        this.bigtitle = { opacity: '100%' }
      } else if (value > 25 && value < 28) {
        this.title = '技能'
        this.bigtitle = { opacity: '100%' }
      } else if (value > 65 && value < 70) {
        this.title = '作品集'
        this.bigtitle = { opacity: '100%' }
      } else if (value > 120) {
        this.title = '謝謝觀賞'
        this.bigtitle = { opacity: '100%' }
        this.footer = { opacity: '100%', height: '7%' }
      } else {
        this.bigtitle = { opacity: '0%' }
        this.footer = { opacity: '0%', height: '0%' }
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  }
}
</script>
<style lang="stylus">
.bigtitle{
  transition 1s
  position absolute
  height 20rem
  top 20%
  width 100%
  font-size 5rem
  text-align center
  pointer-events none
  color black
  opacity 100
  text-shadow 0.3rem 0.3rem 0.1rem rgba(0,0,0,0.3)
  z-index 2
}
.footer{
  transition 1s
  width 100%
  background rgba(0,0,0,0.8)
  height 1%
  position fixed
  bottom 0
  color white
  display flex
  justify-content space-around
  opacity 0
  .text{
    font-size 2rem
    color white
  }
  .copyright{
    font-size 1rem
    margin-top 1%
  }
}
@media (max-width: 768px) {
  .bigtitle{
      top 15%
    }
  .footer{
    .text{
      font-size 1rem
      color white
      margin-top 3%
    }
    .copyright{
      font-size 0.5rem
      margin-top 7%
    }
}
}
</style>
