<template>
  <div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },

  onLaunch (option) {
  },
  onload () {
  },
  onHide () {
  },
  methods: {

  }
}
</script>

<style lang="less">
page {
  height: 100%;
  background-color: #fff;
  font-size: 16px;
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
  margin: 0;
  padding: 0;
}
.container_flex {
  display: flex;
  display: -webkit-flex;
}
.container_flex.column {
  flex-direction: column;
}
.container_flex.row {
  flex-direction: row;
}
.container_flex.center {
  align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  -webkit-align-items: center;
}
.pingmucenter {
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>

