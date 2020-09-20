<template lang="pug">
  #app
    my-menu
    router-view
</template>
<script>
export default {

}
</script>

<style lang="stylus">
html,*{
  padding 0
  margin 0
  height 200rem
}
#app{
  width 100%
  height 100rem
  position fixed
}
@media (max-width: 768px) {
  #app{
    height 70rem
  }
}
</style>
