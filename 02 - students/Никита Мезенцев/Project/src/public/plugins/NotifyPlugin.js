import Vue from 'vue'
import Notify from './Notify.vue'

const NotifyPlugin = {}
NotifyPlugin.install = function(Vue, options = {}) {
    function createNotify (msg, type = 'default', cfg = {}) {
        const conf = {...options, ...cfg}
        if (!conf[type]) return
        const Component = Vue.extend(Notify)
        return new Component({
            el: document.createElement('div'),
            propsData: {
                msg,
                type,
                ...conf
            }
        })
    }
    Vue.prototype.$notify = {
        new: function(msg, type = 'default', cfg) {
            createNotify(msg, type, cfg)
        },
        error: function(msg, cfg) {
            createNotify(msg, 'error', cfg)
        },
        success: function(msg, cfg) {
            createNotify(msg, 'success', cfg)
        },
        warn: function(msg, cfg) {
            createNotify(msg, 'warn', cfg)
        },
        info: function(msg, cfg) {
            createNotify(msg, 'info', cfg)
        },
        async: function(msg, cfg) {
            const component = createNotify(msg, 'async', cfg)
            return new Promise( (resolve, reject) => {
                cfg.action().then( pkg => {
                    component && component.animateOut()
                    createNotify(cfg.success_msg, 'success', cfg)
                    resolve(pkg)
                } ).catch ( pkg => {
                    component && component.animateOut()
                    createNotify(cfg.error_msg, 'error', cfg)
                    reject(pkg)
                })
            })
        }
    }
}

export default NotifyPlugin
