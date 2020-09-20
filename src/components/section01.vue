<template lang="pug">
  #section01(:style="section01")
    #floatText(:style='floatText')
      .text(:style="text04") 但現在，似乎已經不再迷茫了。
      .text(:style="text03") 雖然偶爾還是會質疑自己，這真的是自己想要的嗎？
      .text(:style="text02") 跌跌撞撞、迷迷糊糊的踏入這個產業。
      .text(:style="text01") 曾經，我對人生非常迷惘。
</template>
<script>
export default {
  data () {
    return {
      section01: {},
      floatText: {},
      text01: {},
      text02: {},
      text03: {},
      text04: {}
    }
  },
  props: {
    scroll: Number
  },
  watch: {
    scroll (value) {
      if (value > 10) {
        this.section01 = { display: 'none' }
      }
      if (value > 8 && value <= 10) {
        this.section01 = {
          opacity: '0',
          backgroundImage: "url('/images/pic (4).jpeg')"
        }
        this.text04 = {
          opacity: '0'
        }
      }
      if (value > 6 && value <= 8) {
        this.section01 = { backgroundImage: "url('/images/pic (4).jpeg')" }
        this.text01 = {
          opacity: '0'
        }
        this.text02 = {
          opacity: '0'
        }
        this.text03 = {
          opacity: '0'
        }
        this.text04 = {
          opacity: '100%'
        }
      } else if (value > 4 && value <= 6) {
        this.section01 = { backgroundImage: "url('/images/pic (3).jpeg')" }
        this.text01 = {
          opacity: '0'
        }
        this.text02 = {
          opacity: '0'
        }
        this.text03 = {
          opacity: '100%'
        }
        this.text04 = {
          opacity: '0'
        }
      } else if (value > 2 && value <= 4) {
        this.section01 = { backgroundImage: "url('/images/pic (2).jpeg')" }
        this.text01 = {
          opacity: '0'
        }
        this.text02 = {
          opacity: '100%'
        }
        this.text03 = {
          opacity: '0'
        }
        this.text04 = {
          opacity: '0'
        }
      } else if (value >= 0 && value <= 2) {
        this.section01 = { backgroundImage: "url('/images/pic (1).jpeg')" }
        this.text01 = {
          opacity: '100%'
        }
        this.text02 = {
          opacity: '0'
        }
        this.text03 = {
          opacity: '0'
        }
        this.text04 = {
          opacity: '0'
        }
      }
      this.floatText = {
        top: `${-330 + value * 49}` + '%'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#section01{
  max-height 70%
  width 100%
  transition 0.5s
  position absolute
  background url('/images/pic (1).jpeg') no-repeat center/cover
  #floatText{
    transition 0.1s
    position absolute
    height 100rem
    width 100%
    top -340%
    .text{
      width 100%
      text-align center
      height 70%
      font-size 2rem
      color rgb(0,50,105)
    }
  }
}
@media (max-width: 768px) {
  #section01{
  max-height 70%
  width 100%
  transition 0.5s
  position absolute
  background url('/images/pic (1).jpeg') no-repeat center/cover
  #floatText{
    transition 0.1s
    position absolute
    height 100rem
    width 100%
    top -340%
    .text{
      width 100%
      text-align center
      height 70%
      font-size 2.5rem
      color rgb(0,50,105)
      }
    }
  }
}
</style>
