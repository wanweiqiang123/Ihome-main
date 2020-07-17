/*
 * @Descripttion: 
 * @version: 
 * @Author: zyc
 * @Date: 2020-05-21 17:06:07
 * @LastEditors: zyc
 * @LastEditTime: 2020-07-17 09:48:36
 */
/* Automatically generated by './build/bin/build-entry.js' */

import { IhButton } from '../packages/buttom/index';
import { IhButtom2 } from '../packages/buttom2/index';
import { IhTree } from '../packages/tree/index';
import { IhTableRadio } from '../packages/table-radio/index';
import { IhTableCustomColumn } from '../packages/table-custom-column/index';
import { IhSelectTree } from '../packages/select-tree/index';
import { IhCard } from '../packages/card/index';
import { IhDialog } from '../packages/dialog/index';
import { IhPage } from '../packages/page/index';
const components = [
  IhButton,
  IhButtom2,
  IhTree,
  IhTableRadio,
  IhTableCustomColumn,
  IhSelectTree,
  IhCard,
  IhDialog,
  IhPage
];
const install = function (vue: Vue | any) {
  components.forEach(component => {
    vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
