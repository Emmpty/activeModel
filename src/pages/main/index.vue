<template>
  <div>
    <navigationBar :title="navigationBarTitle"
                   :navigationBarHeight="navigationBarHeight"
                   fontColor="#946B3E"
                   bgcolor='linear-gradient(90deg,rgba(176,110,39,.6),rgba(239,213,164,1),rgba(219,183,116,1))'>
    </navigationBar>
    <div class='header-box'
         :style="{top:navigationBarHeight+'px'}">
      <mask ref="testMask"
            top="0"
            :noclickhide='false'
            @onHideHander="onHideTestMask()"
            @onShowHander="onShowTestMask()">
        <activeModel :showActive="showActive">
          <div>
            <div class="test_box">这里自定义所需的弹框内容</div>
            <!-- 这里自定义所需的弹框内容-->
          </div>
        </activeModel>
      </mask>
      <button class="test_btn"
              @click="showTestMask()">立即体验</button>
    </div>
  </div>
</template>

<script>
import mask from '@/components/mask'
import activeModel from '@/components/activeModel'
import navigationBar from '@/components/navigationBar'
import { initNarBarHeight } from '@/utils/initNavigationBar'

export default {
  data () {
    return {
      navigationBarHeight: 66,
      navigationBarTitle: '自定义导航栏',
      showActive: false
    }
  },
  created () {
  },
  onLoad () {
    this.navigationBarHeight = initNarBarHeight()
  },
  components: {
    mask, activeModel, navigationBar
  },
  methods: {
    showTestMask () {
      this.$refs.testMask.showMask()
    },
    onHideTestMask () {
      this.showActive = false
    },
    onShowTestMask () {
      let _this = this
      setTimeout(() => {
        console.log('>>>>>>>>>>', _this.showActive)
        _this.showActive = true
        console.log('>>>>>>>>>>', _this.showActive)
      }, 100)
    }
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
  width: 100%;
  height: 100%;
  position: absolute;
  .test_box {
  }
  .test_btn {
    width: 200rpx;
    height: 100rpx;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: -150rpx;
  }
}
</style>