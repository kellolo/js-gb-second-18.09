<template>
    <div class=err-note v-if="err.length != 0"><h4>{{err}}</h4></div>
</template>

<script>
export default {
    data: function(){
        return {
            err: ''
        }
    },
    methods:{
        flashErrMsg(err_msg){
            this.err = err_msg
        }
    }
}
</script>

<style>

</style>