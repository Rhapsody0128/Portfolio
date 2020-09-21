<template lang="pug">
  #app
    #view
      router-view
    #scroll
</template>
<script>
export default {

}
</script>

<style lang="stylus">
html,*{
  padding 0
  margin 0
  height 100%
  font-family: 'Noto Sans TC', sans-serif;
  box-sizing: border-box;
}
#app{
  width 100%
  height 100%
  position absolute
  #view{
    position fixed
    width 100%
    height 100rem
  }
  #scroll{
    width 1px
    height 1px
    position absolute
    top 1100rem
  }
}
</style>
