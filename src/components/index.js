import Vue from 'vue'
import Alert from './test.vue';

/* istanbul ignore next */
Alert.install = function(Vue) {
    Vue.component(Alert.name, Alert);
};

export default Alert;
