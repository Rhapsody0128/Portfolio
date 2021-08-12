<template lang="pug">
  #section02(:style='section02')
    #profile(:style='profile')
      span.title(:style="title") 關於我
      span.text(:style="text01") 畢業於國立台東大學應用物理系
      span.text(:style="text02") 參與網頁前端設計課程踏入這行
      span.text(:style="text03") 近二年前端網頁設計開發經驗
      span.text(:style="text04") 喜歡找出問題癥結點並處理
      span.text(:style="text05") 也因興趣在空檔學習各種語言
      span.text(:style="text06") 正在程式/網頁這條路上邁進中
    #skill(:style='skill')
      #learning.block(:style="learning")
        span.title(:style="texts[0]") 學習中語言
        span.text(:style="texts[1]") TypeScript
        span.text(:style="texts[2]") JAVA
        span.text(:style="texts[3]") Python
      #frontend.block(:style="frontend")
        span.title(:style="texts[4]") 前端開發
        span.text(:style="texts[5]") HTML
        span.text(:style="texts[6]") CSS
        span.text(:style="texts[7]") JavaScript
        span.text(:style="texts[8]") Sass
        span.text(:style="texts[9]") Bootstrap
        span.text(:style="texts[10]") Stylus
        span.text(:style="texts[11]") Vue.js
        span.text(:style="texts[12]") jQuery
      #backend.block(:style="backend")
        span.title(:style="texts[13]") 後端技術
        span.text(:style="texts[14]") Node.js
        span.text(:style="texts[15]") MongoDB
        span.text(:style="texts[16]") RESTful API
      #block01.block(:style="block01")
      #block02.block(:style="block02")
      #block03.block(:style="block03")
</template>
<script>
export default {
  data () {
    return {
      section02: {},
      profile: {},
      title: {},
      text01: {},
      text02: {},
      text03: {},
      text04: {},
      text05: {},
      text06: {},
      skill: {},
      learning: {},
      frontend: {},
      backend: {},
      block01: {},
      block02: {},
      block03: {},
      texts: []
    }
  },
  props: {
    scroll: Number
  },
  watch: {
    scroll (value) {
      // 個人資料
      value = value - 8
      if (value > 1) {
        this.section02 = { display: 'flex' }
        if (value > 2 && value < 18) {
          this.profile = { opacity: `${value * 30}` + '%' }
          value > 2 ? this.title = { opacity: `${value * 20}` + '%' } : this.title = { opacity: 0 }
          value > 4 ? this.text01 = { opacity: `${value * 20}` + '%' } : this.text01 = { opacity: 0 }
          value > 5 ? this.text02 = { opacity: `${value * 20}` + '%' } : this.text02 = { opacity: 0 }
          value > 6 ? this.text03 = { opacity: `${value * 20}` + '%' } : this.text03 = { opacity: 0 }
          value > 7 ? this.text04 = { opacity: `${value * 20}` + '%' } : this.text04 = { opacity: 0 }
          value > 8 ? this.text05 = { opacity: `${value * 20}` + '%' } : this.text05 = { opacity: 0 }
          value > 9 ? this.text06 = { opacity: `${value * 20}` + '%' } : this.text06 = { opacity: 0 }
          if (value >= 9) {
            let profileValue = value - 9
            if (value >= 12) {
              profileValue = 3
            }
            this.profile = {
              transform: `rotate(-${(profileValue) * 2}deg) scale(${1 - profileValue * 0.08}) skew(${profileValue * 8}deg)`,
              boxShadow: '-0.3rem 0.3rem 0.3rem black',
              opacity: 1
            }
          }
          if (value >= 14 && value < 18) {
            const profileValue = 3
            const profileValue2 = value - 13
            this.profile = {
              transform: `rotate(-${(profileValue) * 2}deg) scale(${1 - profileValue * 0.06}) skew(${profileValue * 8}deg)`,
              boxShadow: '-0.3rem 0.3rem 0.3rem black',
              opacity: `${100 - profileValue2 * 20}%`,
              margin: `${profileValue2 * 20}% auto`
            }
          }
        } else {
          this.profile = { opacity: '0%' }
        }
        // 技能總覽
        if (value >= 18 && value < 54) {
          const designValue = value - 18
          this.profile = { display: 'none' }
          this.skill = { display: 'flex' }
          if (designValue <= 10.88) {
            this.design = { top: `${121 - designValue * 10.88}%`, background: `rgba(${255 - designValue * 23},0,237,0.3` }
            this.block01 = { top: `${81 - designValue * 7.2}%`, background: `rgba(0,${255 - designValue * 23},237,0.3)` }
            this.block02 = { left: `${120 - designValue * 6}%`, transform: `rotate(${designValue * 20}deg)` }
            this.backend = { opacity: '0' }
          }
          if (designValue >= 10.88 && designValue <= 15) {
            this.design = { top: '2%', background: 'rgba(0,0,237,0.6)' }
            this.block01 = { top: '2%', opacity: '0' }
            this.block02 = { left: `${120 - designValue * 6}%`, transform: `rotate(${designValue * 20}deg)` }
            this.frontend = { left: `${-90 + (designValue - 11.34) * 15}%`, transform: `rotate(${designValue * 20}deg)` }
            this.backend = { opacity: `${(designValue - 11) / 3.7}` }
            this.learning = { opacity: `${(designValue - 18) / 3.7}` }
          }
          if (designValue >= 15) {
            this.learning = { opacity: `${(designValue - 20) / 3.7}` }
            this.frontend = { left: `${-90 + (designValue - 11.34) * 15}%`, transform: `rotate(${designValue * 20}deg)` }
            this.block02 = { left: `${120 - designValue * 6}%`, transform: `rotate(${designValue * 20}deg)` }
            this.backend = { opacity: `${1 - (designValue - 15) * 0.5}` }
            this.block03 = { top: `${-44 + (designValue - 15) * 5}% `, transform: `rotate(${designValue * 25}deg)`, borderRadius: `${(designValue - 15) * 3}%` }
            if (designValue >= 18) {
              this.frontend = { left: '15%', transform: `rotate(${-(designValue - 18) * 158}deg)` }
              this.block02 = { left: '15%', transform: `rotate(${-(designValue - 18) * 158}deg)`, opacity: `${1 - (designValue - 18) * 0.3}` }
            }
            if (designValue >= 20) {
              this.frontend = { left: '15%', background: 'rgba(255,220,50,0.5)' }
              this.block02 = { display: 'none' }
            }
            if (designValue >= 28.77) {
              this.backend = { opacity: `${(designValue - 28.7) * 0.8}`, background: `rgba(${(designValue - 28) * 100},120,0,0.4)` }
              this.block03 = { top: '25% ', borderRadius: '50%', opacity: `${30 - designValue}` }
            }
          }
          designValue > 12 ? this.texts[0] = { opacity: '100%' } : this.texts[0] = { opacity: 0 }
          designValue > 14 ? this.texts[1] = { opacity: '100%' } : this.texts[1] = { opacity: 0 }
          designValue > 16 ? this.texts[2] = { opacity: '100%' } : this.texts[2] = { opacity: 0 }
          designValue > 18 ? this.texts[3] = { opacity: '100%' } : this.texts[3] = { opacity: 0 }
          designValue > 21 ? this.texts[4] = { opacity: '100%' } : this.texts[4] = { opacity: 0 }
          designValue > 23 ? this.texts[5] = { opacity: '100%' } : this.texts[5] = { opacity: 0 }
          designValue > 24 ? this.texts[6] = { opacity: '100%' } : this.texts[6] = { opacity: 0 }
          designValue > 25 ? this.texts[7] = { opacity: '100%' } : this.texts[7] = { opacity: 0 }
          designValue > 26 ? this.texts[8] = { opacity: '100%' } : this.texts[8] = { opacity: 0 }
          designValue > 27 ? this.texts[9] = { opacity: '100%' } : this.texts[9] = { opacity: 0 }
          designValue > 28 ? this.texts[10] = { opacity: '100%' } : this.texts[10] = { opacity: 0 }
          designValue > 29 ? this.texts[11] = { opacity: '100%' } : this.texts[11] = { opacity: 0 }
          designValue > 30 ? this.texts[12] = { opacity: '100%' } : this.texts[12] = { opacity: 0 }
          designValue > 31 ? this.texts[13] = { opacity: '100%' } : this.texts[13] = { opacity: 0 }
          designValue > 32 ? this.texts[14] = { opacity: '100%' } : this.texts[14] = { opacity: 0 }
          designValue > 33 ? this.texts[15] = { opacity: '100%' } : this.texts[15] = { opacity: 0 }
          designValue > 34 ? this.texts[16] = { opacity: '100%' } : this.texts[16] = { opacity: 0 }
        }
        if (value > 54 && value < 60) {
          this.section02 = { top: `${-(value - 54) * 20}%`, display: 'flex' }
        } else if (value > 60) {
          this.section02 = {}
        }
      } else {
        this.section02 = {}
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#section02{
  display none
  transition 0.1s
  width 100%
  height 100%
  flex-wrap wrap
  position absolute
  #profile{
    opacity 0
    transition 0.1s
    background rgba(255,230,150,0.5)
    border-radius 1rem
    height 50rem
    width 40rem
    margin 5% auto
    display flex
    justify-content center
    flex-wrap wrap
    text-align center
    .title{
      transition 0.5s
      font-size 3rem
      height 0.1rem
      width 100%
      margin-top 1rem
      opacity 0
    }
    .text{
      transition 0.5s
      opacity 0
      font-size 2rem
      width 100%
      height 0rem
    }
  }
  #skill{
    position absolute
    display none
    width 90%
    .block{
      transition 0.2s
      width 30rem
      height 30rem
      position absolute
      border-radius 2rem
      display flex
      flex-wrap wrap
      text-align center
      .title{
        transition 0.5s
        font-size 2.5rem
        height 0.1rem
        width 100%
        opacity 0
        margin-top 0.5rem
        color white
        text-shadow 0 0 0.5rem black
      }
      .text{
        transition 0.5s
        font-size 1.5rem
        width 50%
        opacity 0
        color white
        text-shadow 0 0 0.5rem black
        height 0rem
      }
    }
    #learning{
      right 12%
      top 5%
      z-index 1
      background rgba(0,0,237,0.2)
    }
    #block01{
      right  12%
    }
    #frontend{
      background rgba(0,255,120,0.5)
      top 14%
      left -120rem
    }
    #block02{
      background rgba(255,0,0,0.3)
      left 120%
      top 14%
      z-index 1
      backdrop-filter: hue-rotate(270deg)
    }
    #backend{
      background rgba(255,120,0,0.4)
      left 40%
      top 25%
      opacity 0
      backdrop-filter: hue-rotate(120deg)
    }
    #block03{
      background rgba(120,120,120,0.4)
      top -40%
      left 40%
      backdrop-filter: hue-rotate(90deg)
      z-index 2
    }
    #learning{
      background rgba(50,200,10,0.4)
      right 7%
      top 27%
      opacity 0
      z-index 3
      backdrop-filter: hue-rotate(60deg)
    }
  }
  @media (max-width: 768px) {
    #section02{ transition 0s}
    #skill{
      margin-top 1rem
      #learning{
        top 33%
        right 45%
      }
      .block{
        width 12rem
        height 12rem
        transition 0s
        .title{
          transition 0s
          font-size 1.8rem
        }
        .text{
          font-size 1rem
        }
      }
    }
    #profile{
      height 43rem
      width 40rem
      margin 3%
      padding 1%
      transition 0s
      .title{
      transition 0s
      font-size 2.5rem
    }
      .text{
      transition 0s
      font-size 1.3rem
      }
    }
  }
}
</style>
