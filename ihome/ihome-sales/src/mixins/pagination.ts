/*
 * @Descripttion: 
 * @version: 
 * @Author: zyc
 * @Date: 2020-07-24 17:08:03
 * @LastEditors: zyc
 * @LastEditTime: 2021-02-15 10:10:57
 */
/* eslint-disable  no-console */
interface IPageBase {
    pageNum: number,
    pageSize: number,
}
import { IPageInfo } from "../api/base.d";
import { Vue, Component } from 'vue-property-decorator'
declare module 'vue/types/vue' {
    interface Vue {
        /**分页列表的查询参数
         * @param {type} 
         * @return: 
         */
        queryPageParameters: IPageBase;
        /**返回分页数据
         * @param {type} 
         * @return: 
         */
        resPageInfo: IPageInfo<any>
    }
}

/**
* mixins
*/
@Component
export default class PaginationMixin extends Vue {
    searchMixin() {
        this.queryPageParameters.pageNum = 1;
        this.getListMixin();
    }
    getListMixin() {
        console.error('请在页面中实现getListMixin方法')
    }
    queryPageParameters: IPageBase = {
        "pageNum": 1,
        "pageSize": 10,
    }
    resPageInfo: IPageInfo<any> = {
        total: null,
        list: []
    }
    handleSizeChangeMixin(size: number) {
        this.queryPageParameters.pageNum = 1;
        this.queryPageParameters.pageSize = size;
        this.getListMixin();
    }
    handleCurrentChangeMixin(pageSize: number) {
        (pageSize)
        this.getListMixin();
    }
    async activated() {
        if ((window as any).activatedRefresh == this.$route.path) {
            this.getListMixin();
        }
        (window as any).activatedRefresh = false;
    }
    get emptyText() {
        return this.resPageInfo.total === null ? '正在加载数据...' : '暂无数据';
    }
}
