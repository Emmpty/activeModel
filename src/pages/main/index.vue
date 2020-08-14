<template>
  <div>
    <navigationBar :title="navigationBarTitle"
                   :navigationBarHeight="navigationBarHeight"
                   fontColor="#946B3E"
                   bgcolor='linear-gradient(90deg,rgba(176,110,39,.6),rgba(239,213,164,1),rgba(219,183,116,1))'>
    </navigationBar>
    <div class='header-box'
         :style="{top:navigationBarHeight+'px'}">
    </div>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar'
import { initNarBarHeight } from '@/utils/initNavigationBar'

export default {
  data () {
    return {
      navigationBarHeight: 66,
      navigationBarTitle: '自定义导航栏'
    }
  },

  components: {
    navigationBar
  },

  methods: {
  },

  created () {
  },
  onLoad () {
    this.navigationBarHeight = 66
    this.navigationBarTitle = '自定义导航栏'
    this.navigationBarHeight = initNarBarHeight()
  },
  onShow () {
  },
  onShareAppMessage: function (res) {
  }

}
</script>

<style lang="less">
page {
  background-color: rgb(243, 243, 242);
  height: unset;
}
</style>
<style scoped lang="less">
.header-box {
}
</style>