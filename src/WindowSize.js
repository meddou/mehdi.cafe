class WindowSize {
  static getWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
  }

  static isLarge() {
    return typeof window !== 'undefined' ? (WindowSize.getWidth() >= WindowSize.ceil) : true
  }

  static isSafari() {
    return /constructor/i.test(window.HTMLElement)
      || (!window.safari || (typeof window.safari !== 'undefined' && window.safari.pushNotification)).toString() === '[object SafariRemoteNotification]';
  }
}

WindowSize.ceil = 812

export default WindowSize
