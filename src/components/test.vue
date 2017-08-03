<template id="aaa">
    <div>
        这是我的一个测试
    </div>
</template>
<script>
    export default {
        name: 'test',
        data () {
            return {
                msg: 'this is header'
            }
        },
        methods:{
            jqcj_click: function() {
                this.$emit('jqcj_click',1111)
            }
        },
        computed: {
            upper () {
                return this.msg.toUpperCase();
            }
        }
    }
</script>
