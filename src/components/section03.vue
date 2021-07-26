<template lang="pug">
  #section03(:style="section03" )
    .portfolio(v-for="(data,index) in datas" :key="index")
      product.product(v-if='toggle[index]' :data="data" @back="back($event)" :index='index' :style="getProduct(index)")
      .card(@click="pick(index)" :style="[getCard(index),getCardPosition(index)]")
        span.title {{data.title}}
        span.text {{data.description}}
        .pic
          img(:src="data.littlePic")
</template>
<script>
export default {
  data () {
    return {
      section03: {},
      datas: [
        {
          title: 'Vanessa',
          description: 'Vue.js/MongoDB/Node.js/Stylas/Bootstrap/RESTful API/RWD',
          src: 'https://rhapsody0128.github.io/Vanessa/#/',
          littlePic: './images/Vanessa.jpg'
        },
        {
          title: 'Music Game',
          description: 'jQuery/JavaScript',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0407%20js_game/music_game',
          littlePic: './images/music.jpg'
        },

        {
          title: 'Card Game',
          description: 'jQuery/JavaScript/CSS',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0420%20jq_card_game/card_game.html',
          littlePic: './images/card.jpg'
        },
        {
          title: 'Zen Garden',
          description: 'CSS',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0506%20css_selector_specificity_object-fit_media_query/css_zen_garden/index.html',
          littlePic: './images/zenGarden.jpg'
        },
        {
          title: 'Just practice',
          description: 'FB SDK/People API/Gmail API/Youtube API/Vue.js',
          src: 'https://rhapsody0128.github.io/Just_practice/',
          littlePic: './images/partice.jpg'
        },
        {
          title: 'Meme Cat',
          description: 'Node.js/cheerio/linebot',
          src: 'http://line.me/ti/p/@889ieteq',
          littlePic: './images/meme.jpg'
        },
        {
          title: 'Clock',
          description: 'jQuery/CSS/JavaScript',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0330%20js_%20Timer/clock.html',
          littlePic: './images/clock.jpg'
        },
        {
          title: 'Backdrop',
          description: 'CSS/Bootstrap/RWD',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0528%20bootstrap_component_IV/Backdrop-filter.html',
          littlePic: './images/backdrop.jpg'
        },
        {
          title: 'Component',
          description: 'CSS/Bootstrap/RWD',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0527%20bootstrap_component_III/Component.html',
          littlePic: './images/component.jpg'
        },
        {
          title: 'Login',
          description: 'CSS/Bootstrap/RWD',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0521%20bootstrap_component_II/login.html',
          littlePic: './images/login.jpg'
        },
        {
          title: 'layout',
          description: 'CSS/Bootstrap/RWD',
          src: 'https://rhapsody0128.github.io/Front_end_web_development/0520%20bootstrap_component_I/layout.html',
          littlePic: './images/layout.jpg'
        },
        {
          title: 'AI_MazeGame',
          description: 'Python/AI/PyGame',
          src: 'https://github.com/Rhapsody0128/python_AI_mazeGame',
          littlePic: './images/python_mazeAI(7).gif'
        },
        {
          title: 'NewsSpider',
          description: 'Python/requests/BeautifulSoup',
          src: 'https://github.com/Rhapsody0128/newsSpider',
          littlePic: './images/python_newsSpider.gif'
        },
        {
          title: 'DiceGame',
          description: 'Java/AWT/Swing',
          src: 'https://github.com/Rhapsody0128/Dice_Game',
          littlePic: './images/JAVA_DiceGame.gif'
        }
      ],
      card: [],
      cardPosition: [],
      product: [],
      toggle: []
    }
  },
  props: {
    scroll: Number
  },
  methods: {
    pick (index) {
      this.toggle[index] = true
      this.card[index] = { transform: 'scale(5)', opacity: '0', pointerEvents: 'none' }
      this.product[index] = { opacity: '100%', pointerEvents: 'auto' }
      this.$forceUpdate()
    },
    back (index) {
      this.toggle[index] = false
      this.product[index] = {}
      this.card[index] = {}
      this.$forceUpdate()
    },
    getCard (index) {
      return this.card[index]
    },
    getCardPosition (index) {
      return this.cardPosition[index]
    },
    getProduct (index) {
      return this.product[index]
    },
    cardFlow (index, start, end, speed, top) {
      const value = end - start
      this.cardPosition[index] = { left: `${105 - value * speed}%`, top: `${top}%` }
    }
  },
  watch: {
    scroll (value) {
      value = value - 65
      if (value > 0) {
        this.section03 = { display: 'flex' }
        value > 6 && value < 14 ? this.cardFlow(0, 6, value, 8, 1) : value > 19 ? this.cardFlow(0, 11, value, 8, 1) : value < 6 ? this.cardFlow(0, 0, 0, 0, 0) : this.cardFlow(0, 6, 14, 8, 1)
        value > 8 ? this.cardFlow(10, 8, value, 7, 12.1) : this.cardFlow(10, 0, 0, 0, 0)
        value > 9 ? this.cardFlow(9, 9, value, 9, 24.2) : this.cardFlow(9, 0, 0, 0, 0)
        value > 13 ? this.cardFlow(8, 13, value, 8, 24.2) : this.cardFlow(8, 0, 0, 0, 0)
        value > 15 && value < 23 ? this.cardFlow(1, 15, value, 8, 12.1) : value > 28 ? this.cardFlow(1, 20, value, 8, 12.1) : value < 15 ? this.cardFlow(1, 0, 0, 0, 0) : this.cardFlow(1, 15, 23, 8, 12.1)
        value > 16 ? this.cardFlow(7, 16, value, 7, 1) : this.cardFlow(7, 0, 0, 0, 0)
        value > 19 ? this.cardFlow(6, 19, value, 9, 24.2) : this.cardFlow(6, 0, 0, 0, 0)
        value > 23 && value < 31 ? this.cardFlow(2, 23, value, 8, 24.2) : value > 36 ? this.cardFlow(2, 28, value, 8, 24.2) : value < 23 ? this.cardFlow(2, 0, 0, 0, 0) : this.cardFlow(2, 23, 31, 8, 24.2)
        value > 24 ? this.cardFlow(5, 24, value, 6, 12.1) : this.cardFlow(5, 0, 0, 0, 0)
        value > 26 ? this.cardFlow(4, 26, value, 9, 1) : this.cardFlow(4, 0, 0, 0, 0)
        value > 31 ? this.cardFlow(3, 31, value, 8, 1) : this.cardFlow(3, 0, 0, 0, 0)
        value > 33 ? this.cardFlow(11, 33, value, 7, 12.1) : this.cardFlow(11, 0, 0, 0, 0)
        value > 35 ? this.cardFlow(12, 35, value, 8, 24.2) : this.cardFlow(12, 0, 0, 0, 0)
        value > 38 ? this.cardFlow(13, 38, value, 9, 1) : this.cardFlow(13, 0, 0, 0, 0)
      } else {
        this.section03 = {}
      }
    }
  },
  mounted () {
    for (let i = 0; i < this.datas.length; i++) {
      this.card.push({})
      this.product.push({})
    }
  }
}
</script>
<style lang="stylus" scoped>
#section03{
  display none
  position relative
  .portfolio{
    .card{
      cursor pointer
      transition 0.1s
      display flex
      justify-content start
      text-align center
      align-items start
      flex-direction column
      position absolute
      width 30rem
      height 30rem
      border-radius 2rem
      overflow hidden
      box-shadow 0.3rem 0.3rem 0.3rem black
      background white
      border 3px black solid
      left 100%
      opacity 0.6
      &:hover{
        opacity 1
        z-index 1
        .pic{
          img{
            transform scale(1.3)
          }
        }
      }
      .title{
        height 3rem
        width 100%
        font-size 2rem
      }
      .text{
        width 100%
        height 2rem
      }
      .pic{
        overflow hidden
        width 100%
        height 100%
        img{
          transition 0.5s
          transform scale(1)
          width 100%
          height 100%
          object-fit cover
        }
      }
    }
    .product{
      transition 1s
      width 100%
      height 100%
      position fixed
      pointer-events none
      opacity 0
      top 0
      z-index 2
    }
  }
}
@media (max-width: 768px) {
    #section03{
      .portfolio{
        .card{
          transition 0s
          width 13rem
          height 13rem
          opacity 0.7
          cursor pointer
          .title{
            height 3rem
            width 100%
            font-size 1.5rem
          }
          .text{
            width 100%
            height 3rem
            font-size 0.8rem
          }
          .pic{
            img{
              transition 0s
            }
          }
        }
      }
      .product{
      transition 0s
      }
    }
  }
</style>
