<template id="aaa">
    <div>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" v-on:click="jqcj_click">警情处置</el-menu-item>
            <el-menu-item index="2">综合研判</el-menu-item>
            <el-menu-item index="3">质态分析</el-menu-item>
        </el-menu>
    </div>
</template>
<script>

    export default {
        name: 'headerTab',
        data () {
            return {
                msg: 'this is header',
                activeIndex: '1'
            }
        },
        methods:{
            jqcj_click: function() {
                this.$emit('jqcj_click',1111)
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            upper () {
                return this.msg.toUpperCase();
            }
        }
    }
</script>


