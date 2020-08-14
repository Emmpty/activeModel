<template>
  <div class="model_box container_flex column center pingmucenter"
       :class="{'active': showActive}"
       :style="{ height: aheight +'rpx', width: awidth +'rpx' }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['showActive', 'aheight', 'awidth'],
  data () {
    return {
    }
  },
  methods: {
  },
  onload () {

  }
}
</script>
<style scoped lang="less">
.model_box {
  position: absolute;
  width: 560rpx;
  height: 368rpx;
  opacity: 0;
  transform: scale(0.5);
  border-radius: 30rpx;
  transition: all 0.3s;
  background-color: #fff;
}
.active {
  transform: scale(1);
  opacity: 1;
}
</style>
