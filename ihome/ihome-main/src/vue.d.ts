/*
 * @Descripttion: 
 * @version: 
 * @Author: zyc
 * @Date: 2020-06-28 17:57:27
 * @LastEditors: zyc
 * @LastEditTime: 2021-01-26 17:21:37
 */

import 'ihome-common/vue.d'
import 'ihome-common/app/all.d'
import Vue from "vue";
import { ToolInterface } from 'ihome-common/util/tool'

declare module "vue/types/vue" {
    interface Vue {
        /**工具类
         * @param {type} 
         * @return: 
         */
        $tool: ToolInterface;
     

    }
}
// declare module 'nprogress'
