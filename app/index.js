// 通过vue-dev目录下scripts/config.js里的配置得知
import Vue from '../vue-dev/src/platforms/web/entry-runtime.js';

if(module.hot) {
  module.hot.accept();
}

console.log('>>> Vue', Vue);