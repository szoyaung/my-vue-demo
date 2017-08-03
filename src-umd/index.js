import HeadTab from './components/head/headtab';
import BaseContainer from './components/base-container/basecontainer';

const components = [
    HeadTab,
    BaseContainer
];

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    version: '1.0.0',
    install,
    HeadTab,
    BaseContainer
};