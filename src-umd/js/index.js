/**
 * Created by yaung on 2017/5/16 0016.
 */
var vm = new Vue({
    el: '#appIndex',
    data:{
        'title':{
            'jqcz': '警情处置',
            'zhyp': '综合研判',
            'ztfx': '质态分析'
        },
        'jqcj':{
            'showComp': false,
            'headTitle':'警情处置',
            'hasFooter':true,
            'footerTitle':'警情处置底部',
            'headImg':'./assets/image/close.png'
        },
        'zhyp':{
            'showComp': false,
            'headTitle':'综合研判',
            'hasFooter':false,
            'footerTitle':'综合研判底部',
            'headImg':'./assets/image/close.png'
        },
        'ztfx':{
            'showComp': false,
            'headTitle':'质态分析',
            'hasFooter':true,
            'footerTitle':'质态分析底部',
            'headImg':'./assets/image/close.png'
        }
    },
    methods:{
        showJqcj:function (txt1,txt2) {
            this.jqcj.showComp = true
        },
        showZhyp:function () {
            this.zhyp.showComp = true
        },
        showZtfx:function () {
            this.ztfx.showComp = true
        },
        Jqcj_close_click:function () {
            this.jqcj.showComp = false
        },
        Zhyp_close_click:function () {
            this.zhyp.showComp = false
        },
        Ztfx_close_click:function () {
            this.ztfx.showComp = false
        }
    }
});
