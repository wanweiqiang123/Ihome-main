/*
 * @Descripttion: 
 * @version: 
 * @Author: zyc
 * @Date: 2020-06-28 17:57:27
 * @LastEditors: zyc
 * @LastEditTime: 2021-01-26 10:33:34
 */

import 'ihome-common/vue.d'
import 'ihome-common/app/all.d'
import Vue from "vue";
import { ToolInterface } from 'ihome-common/util/tool'
import { RoleToolInterface } from 'ihome-common/util/roleTool'
import { MathInterface } from 'ihome-common/util/math'
declare module "vue/types/vue" {
    interface Vue {
        /**工具类
         * @param {type} 
         * @return: 
         */
        $tool: ToolInterface;
         /**工具类
         * @param {type} 
         * @return: 
         */
        $roleTool: RoleToolInterface;
        /**运算
         * @param {*}
         * @return {*}
         */
        $math: MathInterface;

    }
}
// declare module 'nprogress'
