import Vue from 'vue'

Vue.prototype.$listen = function(target, eventType, callback) {
  const self = this
  if (!self._eventRemovers) {
    self._eventRemovers = []
  }
  target.addEventListener(eventType, callback)
  self._eventRemovers.push({
    target,
    remove() {
      target.removeEventListener(eventType, callback)
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
