<template>
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
    </div>
</template>

<script>
import TimelineLite from 'gsap/TimelineLite'

export default {
    props: ['msg', 'type', 'infinite', 'duration', 'action'],
    data: () => {
        return {
            timer: null,
            closing: false,
        }
    },
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
            const tl = new TimelineLite({})
            tl.from(this.$el, 1, {
                opacity: 0,
                x: 10,
                onComplete: () => {
                    if (this.infinity || this.type === 'async') return
                    this.timer = new TimelineLite()
                    const t =this.$el.querySelector('.notify-timer-value')
                    if (!t) {
                        console.log(this.$el, 'null timer')
                    }
                    this.timer.to(t, this.duration || 3, {
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
            const tl = new TimelineLite({})
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
}
</script>

<style>

.notify-container {
    position: fixed;
    width: 300px;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
}

.notify-wrapper {
    padding: 10px 20px;
}

.notify {
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 5px 0 hsla(0, 0%, 0%, 30%);
}

.notify-error {
    background-color: hsl(0, 90%, 90%);
    color: hsl(0, 60%, 40%);
}

.notify-warn {
    background-color: hsl(50, 90%, 90%);
    color: hsl(50, 60%, 40%);
}

.notify-success {
    background-color: hsl(100, 90%, 90%);
    color: hsl(100, 60%, 40%);
}

.notify-info {
    background-color: hsl(200, 90%, 90%);
    color: hsl(200, 60%, 40%);
}

.notify-content {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.notify-timer {
    display: block;
    height: 5px;
    width: 100%;
    background-color: hsla(0,0%,0%,10%);
    position: relative;
}

.notify-timer-value {
    width: 0;
    height: 100%;
    background-color: hsla(0,0%,0%,20%);
    background-color: currentColor;
}

@keyframes async-timer {
    0% {
        left: 0;
    }
    50% {
        left: 90%;
    }
    100% {
        left: 0;
    }
}
.notify-async .notify-timer-value {
    position: absolute;
    width: 10%;
    top: 0;
    left: 0;
    animation: async-timer 1s infinite;
}

.notify-btn {
    border: none;
    background-color: transparent;
    color: inherit;
}
</style>
