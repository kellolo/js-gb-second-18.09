Vue.component('err-notifier',{
    data(){
        return{
            err: ''
        }
    },
    methods:{
        flashErrMsg(err_msg){
            this.err = err_msg
        }
    },
    template:   `<div class=err-note v-if="err.length != 0"><h4>{{err}}</h4></div>`
})