<template lang="pug">
  #menu(:style="menu")
    .col
      .title.item 首頁
      .title.item 簡介
      .title.item 作品
      .product.item CardGame
      .product.item CardGame
      .product.item CardGame
</template>
<script>
export default {
  data () {
    return {
      menu: {}
    }
  },
  props: {
    scroll: Number
  },
  watch: {
    scroll (value, value2) {
      const direction = value - value2
      if (direction > 0) {
        this.menu = { opacity: '0' }
        setTimeout(() => {
          this.menu = {
            pointerEvents: 'none',
            opacity: '0'
          }
        }, 1000)
      } else {
        this.menu = {
          opacity: '100%',
          display: 'flex',
          pointerEvents: 'auto'
        }
      }
    }
  }
}
</script>
<style lang="stylus">
#menu{
  transition 1s
  width 13rem
  height 100%
  z-index 1
  position absolute
  right 0%
  display flex
  &:hover{
    background rgba(225,222,222,0.3)
    height 100%
  }
  .col{
    display flex
    flex-direction column
    width 100%
    height 25rem
    margin-top 100%
    margin-left 10%
    .title{
      width 100%
      font-size 2.2rem
    }
    .product{
      width 100%
      font-size 1.4rem
      margin-left 12%
    }
    .item{
      height 10rem
      color white
      transition 0.5s
      text-shadow 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.5)
      &:hover{
        text-shadow 0.2rem 0.2rem 0.2rem black
        padding 0 0.5rem 0rem 0.5rem
      }
    }
  }
}
@media (max-width: 768px) {
  #menu{
  width 100%
  height 3%
  z-index 1
  position absolute
  top  0%
  display flex
  &:hover{
    background rgba(225,222,222,0.3)
    height 4%
  }
  .col{
    display flex
    width 100%
    height 100%
    margin-top 2%
    margin-left 0
    flex-direction row
    .title{
      text-align center
      font-size 1.5rem
    }
    .product{
      width 100%
      font-size 0.5rem
      margin-top 2.5%
      margin-left 0%
    }
    .item{
      color white
      height 0
      transition 0.5s
      text-shadow 0.3rem 0.3rem 0.3rem black
      &:hover{
        text-shadow 0.5rem 0.5rem 0.1rem black
        padding 0 0.3rem 0rem 0.3rem
      }
    }
  }}
}
</style>
