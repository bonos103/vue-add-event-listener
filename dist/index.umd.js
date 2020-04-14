(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueAddEventListener = factory());
}(this, (function () { 'use strict';

  var VueAddEventListener = {
    install: function install(Vue) {
      Vue.prototype.$listen = function(target, eventType, callback) {
        var self = this;
        if (!self._eventRemovers) {
          self._eventRemovers = [];
        }
        target.addEventListener(eventType, callback);
        self._eventRemovers.push({
          target: target,
          remove: function remove() {
            var this$1 = this;

            target.removeEventListener(eventType, callback);
            self._eventRemovers = self._eventRemovers.filter(function (event) { return event !== this$1; });
          },
        });
      };

      Vue.mixin({
        destroyed: function destroyed() {
          if (this._eventRemovers && this._eventRemovers.length) {
            this._eventRemovers.forEach(function (eventRemover) {
              eventRemover.remove();
            });
          }
        },
      });
    },
  };

  return VueAddEventListener;

})));
