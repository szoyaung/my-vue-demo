<template>
    <div>
        <div>
            <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" v-on:click="jqcj_click">{{ jqcz }}</el-menu-item>
                <el-menu-item index="2" v-on:click="zhyp_click">{{ zhyp }}</el-menu-item>
                <el-menu-item index="3" v-on:click="ztfx_click">{{ ztfx }}</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'headTab',
        data () {
            return {
                msg: 'this is header',
                activeIndex: '0'
            }
        },
        props:{
            'jqcz': String,
            'zhyp': String,
            'ztfx': String
        },
        methods:{
            jqcj_click: function() {
                this.$emit('jqcj_click','abc','这是一条测试事件')
            },
            zhyp_click: function(){
                this.$emit('zhyp_click')
            },
            ztfx_click: function(){
                this.$emit('ztfx_click')
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


