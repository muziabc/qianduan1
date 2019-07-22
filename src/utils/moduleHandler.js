import { forOwn } from 'lodash';

// eslint-disable-next-line no-unused-vars
const extractModule = (esModule, path) => {
  const module = {};
  if (!esModule.default) {
    // 使用export变量名作为module key
    forOwn(esModule, (value, key) => {
      module[key] = value;
    });
  } else {
    // 使用文件名作为module key
    // const array = path.split('/');
    // const moduleName = array[array.length - 2];
    // module[moduleName] = esModule;
  }
  return module;
};

const collectVuexModules = () => {
  const pageContext = require.context('../store/modules', true, /index.js$/);
  const module = {};
  pageContext.keys().forEach((key) => {
    const subModule = extractModule(pageContext(key), key);
    Object.assign(module, subModule);
  });
  return module;
};

export default collectVuexModules;
