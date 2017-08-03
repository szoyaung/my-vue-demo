<style scoped>
    .hiddenWin{
        visibility: hidden;
    }
    .showWin{
        visibility: visible;
    }
    .wrap {
        display: flex;
        flex-direction: column;
        border: solid 1px rgba(100,100,100,0.3);
        position: absolute;
    }
    .top {
        height: 40px;
        line-height: 40px;
        text-indent: 5px;
        background-color: #ccc;
        border-bottom: 1px solid #999;
    }
    .bottom {
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #ccc;
        border-top: 1px solid #999;
    }
    .main {
        flex: 1;
        position: relative;
        background-color: white;
    }
</style>
<template>
    <div :class="classObject">
        <div class="top" attr-drag="drag">
            {{ headTitle }}
            <img :src="headImg" style="height: 30px; float: right; vertical-align:middle; cursor:pointer;"
                @click="closeWindow">
        </div>
        <div class="main">
            <slot name="container">这里是内容栏</slot>
        </div>
        <div class="bottom" v-if="hasFooter">
            {{ footerTitle }}
        </div>
    </div>
</template>
<script>
    export default {
        'name':'baseContainer',
        data(){
            return {
                'msg':'这是一个面板组件'
            }
        },
        props:{
            'showComp':  {
                type: Boolean,
                default: function(){
                    return false
                }
            },
            'headTitle': String,
            'footerTitle': String,
            'hasFooter': {
                type: Boolean,
                default: function(){
                    return false
                }
            },
            'headImg': String
        },
        computed: {
            'classObject': function(){
                return {'showWin': this.showComp,
                    'hiddenWin': !this.showComp,
                    'wrap': true
                }
            }
        },
        methods:{
            'closeWindow': function () {
                this.$emit("close_click");
            }
        }
    }
</script>