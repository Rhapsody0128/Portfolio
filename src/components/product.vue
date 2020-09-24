<template lang="pug">
  #product
    .container
      .icon(@click="back(index)")
      span.title {{data.title}}
      span.text {{data.description}}
      iframe.iframe(:src='data.src')
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    data: Object,
    index: Number
  },
  methods: {
    back (index) {
      this.$emit('back', index)
    }
  }
}
</script>
<style lang="stylus">
#product{
  width 100%
  height 100%
  background white
  .container{
    margin 0.25% 0.5%
    position absolute
    width 99%
    height 99%
    display flex
    justify-content start
    text-align center
    align-items start
    flex-direction column
    background white
    border 10px black double
    border-radius 1.5rem
    padding 1rem
    .title{
      height 3rem
      width 100%
      font-size 2rem
    }
    .iframe{
      width 100%
      height 100%
      border-radius 1.5rem
      border 1px black solid
      box-shadow 0.5rem 0.5rem 0.3rem black
      overflow hidden
    }
    .text{
      width 100%
      height 2rem
    }
    .icon{
      width 4rem
      height 4rem
      position absolute
      border 3px black solid
      border-radius 50%
      right 1%
      transition 1s
      cursor pointer
      &:hover{
        transform rotate(180deg)
      }
    }
    .icon::before{
      content:''
      width 3rem
      height 3px
      background black
      position absolute
      top 50%
      transform translate(-50%,-50%) rotate(45deg)
      opacity 1
    }
    .icon::after{
      content:''
      width 3rem
      height 3px
      background black
      position absolute
      top 50%
      transform translate(-50%,-50%) rotate(-45deg)
      opacity 1
    }
  }
}
@media (max-width: 768px) {
  #product{
    .container{
      .title{
        height 3rem
        width 100%
        font-size 2rem
      }
      .iframe{
        border-radius 0rem
        border 0
        box-shadow 0rem 0rem 0rem white
        overflow hidden
      }
      .text{
        width 100%
        height 4rem
      }
      .icon{
        width 3rem
        height 3rem
        transition 1s
        &:hover{
          transform rotate(180deg)
        }
      }
      .icon::before{
        width 2rem
      }
      .icon::after{
        width 2rem
      }
    }
  }
}
</style>
