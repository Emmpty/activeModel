let globalData = getApp().globalData
export function initNarBarHeight () {
  let device = wx.getSystemInfoSync()
  if (!globalData.deviceInfo || !globalData) {
    globalData.deviceInfo = device
    globalData.navigationBarHeightg = wx.getMenuButtonBoundingClientRect().height + wx.getMenuButtonBoundingClientRect().top + 8
  }
  if (device.version > '7.0.0') {
    return globalData.navigationBarHeightg
  } else {
    return 0
  }
}
