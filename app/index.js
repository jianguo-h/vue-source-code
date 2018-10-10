window.__WEEX__ = undefined;    // must, 不然__WEEX__会报错
// 通过vue-dev目录下scripts/config.js里的配置得知
import Vue from '../vue-dev/src/platforms/web/entry-runtime-with-compiler.js';
import App from './App';

if(module.hot) {
  module.hot.accept();
}

new Vue({
  el: '#app',
  render: h => h(App),
});