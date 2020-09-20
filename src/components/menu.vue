<template lang="pug">
  #menu
    .icon
    .col
      .title.item 首頁
      .title.item 簡介
      .title.item 作品
      .product.item CardGame
      .product.item CardGame
      .product.item CardGame
</template>
<style lang="stylus">
#menu{
  transition 1s
  width 12rem
  height 100%
  z-index 1
  position absolute
  right 0%
  display flex
  &:hover{
    background rgba(225,222,222,0.3)
    height 100%
  }
  .icon{

  }
  .col{
    display flex
    flex-direction column
    width 100%
    height 25rem
    margin-top 100%
    .title{
      width 100%
      text-align center
      font-size 2.2rem
    }
    .product{
      width 100%
      font-size 1.4rem
      margin-left 40%
    }
    .item{
      height 10rem
      color white
      transition 0.5s
      text-shadow 0.5rem 0.5rem 0.3rem black
      &:hover{
        text-shadow 0.8rem 0.8rem 0.1rem black
        padding 0 0.5rem 0rem 0.5rem
      }
    }
  }
}
@media (max-width: 768px) {
  #menu{
  width 100%
  height 5%
  z-index 1
  position absolute
  top  0%
  display flex
  &:hover{
    background rgba(225,222,222,0.3)
    height 7%
  }
  .col{
    display flex
    width 100%
    height 100%
    margin-top 2%
    flex-direction row
    .title{
      text-align center
      font-size 1.5rem
    }
    .product{
      width 100%
      font-size 1rem
      margin-top 2%
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
