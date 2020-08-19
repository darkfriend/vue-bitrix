import Tab from './components/tabs/bxTab';
import Tabs from './components/tabs/bxTabs';
import Message from './components/mesasges/bxMessage';
import MessageSuccess from './components/mesasges/bxMessageSuccess';
import MessageError from './components/mesasges/bxMessageError';
import mixins from 'vue-dev-mixins';

export default {
    install(Vue) {
        Vue.component('bxTab', Tab);
        Vue.component('bxTabs', Tabs);
        Vue.component('bxMessage', Message);
        Vue.component('bxMessageError', MessageError);
        Vue.mixin(mixins);
    },
};

export {
    Tab,
    Tabs,
    Message,
    MessageSuccess,
    MessageError,
    mixins,
};