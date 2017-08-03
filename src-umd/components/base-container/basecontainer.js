import BaseContainer from './basecontainer.vue';

BaseContainer.install = function(Vue) {
    Vue.component(BaseContainer.name, BaseContainer);
};

export default BaseContainer;