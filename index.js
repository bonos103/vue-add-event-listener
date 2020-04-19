const VueAddEventListener = {
  install(Vue) {
    Vue.prototype.$listen = function(target, eventType, callback, options) {
      const self = this
      if (!self._eventRemovers) {
        self._eventRemovers = []
      }
      target.addEventListener(eventType, callback, options)
      self._eventRemovers.push({
        target,
        remove() {
          target.removeEventListener(eventType, callback, options)
          self._eventRemovers = self._eventRemovers.filter(event => event !== this)
        },
      })
    }

    Vue.mixin({
      destroyed() {
        if (this._eventRemovers && this._eventRemovers.length) {
          this._eventRemovers.forEach((eventRemover) => {
            eventRemover.remove()
          })
        }
      },
    })
  },
}

export default VueAddEventListener