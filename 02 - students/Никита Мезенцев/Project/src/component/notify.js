const Notify = Vue.extend({
    props: ['msg', 'type', 'infinite', 'duration', 'action'],
    data: () => {
        return {
            timer: null,
            closing: false,
        }
    },
    template: `
        <div class='notify-wrapper'>
            <div class='notify' v-bind:class='["notify-"+type]' @mouseover='pauseTimer' @mouseleave='resumeTimer'>
                <div class='notify-header'>
                    <div class='notify-timer' v-if="!infinite">
                        <div class='notify-timer-value'>
                        </div>
                    </div>
                </div>
                <div class='notify-content'>
                    <div class='notify-msg'>{{ msg }}</div>
                    <button class='notify-btn' @click="animateOut">X</button>
                </div>
            </div>
        </div>`,
    methods: {
        getContainer () {
            let container = document.querySelector('.notify-container')
            if (!container) {
                container = document.createElement('div')
                container.classList.add('notify-container')
                document.body.appendChild(container)
            }
            return container
        },
        pauseTimer () {
            this.timer && this.timer.pause()
        },
        resumeTimer () {
            this.timer && this.timer.resume()
        },
        animateIn () {
            const tl = new TimelineLite()
            tl.from(this.$el, 1, {
                opacity: 0,
                x: 10,
                onComplete: () => {
                    if (this.infinity || this.type === 'async') return
                    this.timer = new TimelineLite()
                    this.timer.to(this.$el.querySelector('.notify-timer-value'), this.duration || 3, {
                        width: '100%',
                        onComplete: () => {
                            this.animateOut()
                        }
                    })
                }
            })
        },
        animateOut () {
            if (this.isClosing)  return
            this.isClosing = true
            const container = this.getContainer()
            const tl = new TimelineLite()
            tl.to(this.$el, .5, {
                opacity: 0,
                x: 10,
            }).to(this.$el, 1, {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                onComplete: () => {
                    container.removeChild(this.$el)
                    this.$destroy()
                }
            })
        },
    },
    beforeMount () {
        const container = this.getContainer()
        container.appendChild(this.$el)
    },
    mounted() {
        this.animateIn()
    }
})

const NotifyPlugin = {}
NotifyPlugin.install = function(Vue, options = {}) {
    function createNotify (msg, type = 'default', cfg = {}) {
        const conf = {...options, ...cfg}
        if (!conf[type]) return
        return new Notify({
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

Vue.use(NotifyPlugin, {
    // infinite: true,
    // duration: 2,
    error: true,
    // async: true,
    // success: true,
})
