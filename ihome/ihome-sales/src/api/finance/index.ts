/* eslint-disable */
/* 此脚本由swagger-ui的api-docs自动生成，请勿修改 */
//2020-12-17 4:31:26 ├F10: PM┤
import { request } from '@/api/base'
const basePath = "/sales-api/finance"
/**新增收款账号在线支付信息*/
export async function post_accountOnlinePay_add(d?: any) {
  return await request.post<number, number>(basePath + '/accountOnlinePay/add', d)
}
/**查询收款账号在线支付信息*/
export async function get_accountOnlinePay_get__id(d?: any) {
  return await request.get<AccountOnlinePayVO, AccountOnlinePayVO>(basePath + '/accountOnlinePay/get/{id}', { params: d })
}
/**根据收款账号ID查询收款账号在线支付信息*/
export async function get_accountOnlinePay_getByAccountId__accountId(d?: any) {
  return await request.get<AccountOnlinePayVO, AccountOnlinePayVO>(basePath + '/accountOnlinePay/getByAccountId/{accountId}', { params: d })
}
/**修改收款账号在线支付信息*/
export async function post_accountOnlinePay_update(d?: any) {
  return await request.post<number, number>(basePath + '/accountOnlinePay/update', d)
}
/**添加公司收款账户*/
export async function post_bankAccount_add(d?: any) {
  return await request.post<number, number>(basePath + '/bankAccount/add', d)
}
/**删除公司收款账户*/
export async function post_bankAccount_delete__id(d?: any) {
  return await request.post<number, number>(basePath + '/bankAccount/delete/{id}', d)
}
/**获取公司对应收款账户信息*/
export async function get_bankAccount_get__companyId(d?: any) {
  return await request.get<BankAccountVO[], BankAccountVO[]>(basePath + '/bankAccount/get/{companyId}', { params: d })
}
/**查询公司收款账户信息详情*/
export async function get_bankAccount_getById__id(d?: any) {
  return await request.get<BankAccountVO, BankAccountVO>(basePath + '/bankAccount/getById/{id}', { params: d })
}
/**查询公司收款账户信息列表数据*/
export async function post_bankAccount_getList(d?: any) {
  return await request.post<PageModel<BankAccountVO>, PageModel<BankAccountVO>>(basePath + '/bankAccount/getList', d)
}
/**修改公司收款账户*/
export async function post_bankAccount_update(d?: any) {
  return await request.post<number, number>(basePath + '/bankAccount/update', d)
}
/**删除银行网点*/
export async function post_bankBranch_delete__id(d?: any) {
  return await request.post<number, number>(basePath + '/bankBranch/delete/{id}', d)
}
/**查询银行网点详情*/
export async function get_bankBranch_get__id(d?: any) {
  return await request.get<BankBranchVO, BankBranchVO>(basePath + '/bankBranch/get/{id}', { params: d })
}
/**查询银行网点信息列表数据*/
export async function post_bankBranch_getList(d?: any) {
  return await request.post<PageModel<BankBranchVO>, PageModel<BankBranchVO>>(basePath + '/bankBranch/getList', d)
}
/**请款单开票员审核通过后生成一笔开票信息*/
export async function post_invoice_applyRecAdd(d?: any) {
  return await request.post<number, number>(basePath + '/invoice/applyRecAdd', d)
}
/**航天自动红冲可批量*/
export async function post_invoice_autoHCInvoicing(d?: any) {
  return await request.post<number, number>(basePath + '/invoice/autoHCInvoicing', d)
}
/**航天自动开票可批量*/
export async function post_invoice_autoZPInvoicing(d?: any) {
  return await request.post<number, number>(basePath + '/invoice/autoZPInvoicing', d)
}
/**成交报告审核通过后新增开票信息*/
export async function post_invoice_dealAdd(d?: any) {
  return await request.post<number, number>(basePath + '/invoice/dealAdd', d)
}
/**删除开票信息*/
export async function post_invoice_delete_businessId__businessId(d?: any) {
  return await request.post<number, number>(basePath + '/invoice/delete/businessId/{businessId}', d)
}
/**下载发票文件-可批量*/
export async function post_invoice_downloadFile(d?: any) {
  return await request.post<string[], string[]>(basePath + '/invoice/downloadFile', d)
}
/**查询开票详情*/
export async function get_invoice_get__id(d?: any) {
  return await request.get<InvoiceDetailVO, InvoiceDetailVO>(basePath + '/invoice/get/{id}', { params: d })
}
/**查询开票信息列表数据*/
export async function post_invoice_getList(d?: any) {
  return await request.post<PageModel<InvoiceVO>, PageModel<InvoiceVO>>(basePath + '/invoice/getList', d)
}
/**手动红冲可批量*/
export async function post_invoice_handHCInvoicing(d?: any) {
  return await request.post<number, number>(basePath + '/invoice/handHCInvoicing', d)
}
/**手动开票可批量*/
export async function post_invoice_handInvoicing(d?: any) {
  return await request.post<number, number>(basePath + '/invoice/handInvoicing', d)
}
/**(未实现)Excel导入开票基础数据*/
export async function post_invoiceBase_importData(d?: any) {
  return await request.post<number, number>(basePath + '/invoiceBase/importData', d)
}
/**(未实现)下载航天发票文件-可批量*/
export async function post_invoiceBillOld_downloadFile(d?: any) {
  return await request.post<number, number>(basePath + '/invoiceBillOld/downloadFile', d)
}
/**(已实现)查询航天发票信息列表数据*/
export async function post_invoiceBillOld_getList(d?: any) {
  return await request.post<PageModel<InvoiceHTBillVO>, PageModel<InvoiceHTBillVO>>(basePath + '/invoiceBillOld/getList', d)
}
/**添加发票税率配置信息*/
export async function post_invoiceConfig_add(d?: any) {
  return await request.post<number, number>(basePath + '/invoiceConfig/add', d)
}
/**删除发票税率配置信息*/
export async function post_invoiceConfig_delete__id(d?: any) {
  return await request.post<number, number>(basePath + '/invoiceConfig/delete/{id}', d)
}
/**查询发票税率配置信息详情*/
export async function get_invoiceConfig_get__id(d?: any) {
  return await request.get<InvoiceConfigVO, InvoiceConfigVO>(basePath + '/invoiceConfig/get/{id}', { params: d })
}
/**查询公司收款账户信息列表数据*/
export async function post_invoiceConfig_getList(d?: any) {
  return await request.post<PageModel<InvoiceConfigVO>, PageModel<InvoiceConfigVO>>(basePath + '/invoiceConfig/getList', d)
}
/**修改发票税率配置信息*/
export async function post_invoiceConfig_update(d?: any) {
  return await request.post<number, number>(basePath + '/invoiceConfig/update', d)
}
/**(已实现)新增甲方开票信息数据*/
export async function post_invoiceOld_add(d?: any) {
  return await request.post<string, string>(basePath + '/invoiceOld/add', d)
}
/**(已实现)航天自动红冲-可批量*/
export async function post_invoiceOld_autoHongChong(d?: any) {
  return await request.post<string, string>(basePath + '/invoiceOld/autoHongChong', d)
}
/**(已实现)航天自动开正票-可批量*/
export async function post_invoiceOld_autoKaiPiao(d?: any) {
  return await request.post<string, string>(basePath + '/invoiceOld/autoKaiPiao', d)
}
/**(已实现)下载发票文件-可批量*/
export async function post_invoiceOld_downloadFile(d?: any) {
  return await request.post<string[], string[]>(basePath + '/invoiceOld/downloadFile', d)
}
/**(未实现)导出数据*/
export async function post_invoiceOld_exportData(d?: any) {
  return await request.post<any, any>(basePath + '/invoiceOld/exportData', d)
}
/**[已实现]查询航天发票文件信息*/
export async function post_invoiceOld_getHtFileInfo(d?: any) {
  return await request.post<InvoiceBillHtPdfInfo, InvoiceBillHtPdfInfo>(basePath + '/invoiceOld/getHtFileInfo', d)
}
/**(未实现)查询开票信息列表数据*/
export async function post_invoiceOld_getList(d?: any) {
  return await request.post<PageModel<InvoiceVO>, PageModel<InvoiceVO>>(basePath + '/invoiceOld/getList', d)
}
/**(未实现)查询甲方正票信息列表数据*/
export async function post_invoiceOld_getPartyAList(d?: any) {
  return await request.post<PageModel<InvoicePartyAVO>, PageModel<InvoicePartyAVO>>(basePath + '/invoiceOld/getPartyAList', d)
}
/**(未实现)查询甲方红票信息列表数据*/
export async function post_invoiceOld_getPartyARedList(d?: any) {
  return await request.post<PageModel<InvoicePartyAVO>, PageModel<InvoicePartyAVO>>(basePath + '/invoiceOld/getPartyARedList', d)
}
/**(已实现)Excel导入历史发票信息*/
export async function post_invoiceOld_importData(d?: any) {
  return await request.post<number, number>(basePath + '/invoiceOld/importData', d)
}
/**(已实现)手动开票*/
export async function post_invoiceOld_manualKaiPiao(d?: any) {
  return await request.post<string, string>(basePath + '/invoiceOld/manualKaiPiao', d)
}
/**(实现中)甲方手动开票*/
export async function post_invoiceOld_partyAManualKaiPiao(d?: any) {
  return await request.post<string, string>(basePath + '/invoiceOld/partyAManualKaiPiao', d)
}
/**(实现中)查询开票详情*/
export async function post_invoiceOld_queryInvoiceInfo(d?: any) {
  return await request.post<InvoiceInfoVO, InvoiceInfoVO>(basePath + '/invoiceOld/queryInvoiceInfo', d)
}
/**测试航天开票*/
export async function post_invoiceOld_test(d?: any) {
  return await request.post<number, number>(basePath + '/invoiceOld/test', d)
}
/**添加代理费付款记录*/
export async function post_payment_addAgency(d?: any) {
  return await request.post<number, number>(basePath + '/payment/addAgency', d)
}
/**添加服务费付款记录*/
export async function post_payment_addService(d?: any) {
  return await request.post<object, object>(basePath + '/payment/addService', d)
}
/**付款批量解除关联成交报告*/
export async function post_payment_batchRelieveDeal(d?: any) {
  return await request.post<number, number>(basePath + '/payment/batchRelieveDeal', d)
}
/**检查订单是否未支付*/
export async function get_payment_checkIsExistNoPay__id(d?: any) {
  return await request.get<boolean, boolean>(basePath + '/payment/checkIsExistNoPay/{id}', { params: d })
}
/**付款对账*/
export async function post_payment_checkPayment__id(d?: any) {
  return await request.post<number, number>(basePath + '/payment/checkPayment/{id}', d)
}
/**删除付款记录*/
export async function post_payment_delete__id(d?: any) {
  return await request.post<number, number>(basePath + '/payment/delete/{id}', d)
}
/**根据优惠告知书ID删除未付款付款记录*/
export async function post_payment_deleteByBusinessId__businessId(d?: any) {
  return await request.post<number, number>(basePath + '/payment/deleteByBusinessId/{businessId}', d)
}
/**广州银联POS支付 撤销支付 回调更新数据接口*/
export async function post_payment_gZPosCancelResultCallback(d?: any) {
  return await request.post<any, any>(basePath + '/payment/gZPosCancelResultCallback', d)
}
/**广州银联POS支付 支付成功回调更新数据接口*/
export async function post_payment_gZPosPayResultCallback(d?: any) {
  return await request.post<any, any>(basePath + '/payment/gZPosPayResultCallback', d)
}
/**广州银联POS支付 冲正 回调更新数据接口*/
export async function post_payment_gZPosRushResultCallback(d?: any) {
  return await request.post<any, any>(basePath + '/payment/gZPosRushResultCallback', d)
}
/**查询一条付款记录*/
export async function get_payment_get__id(d?: any) {
  return await request.get<PaymentVO, PaymentVO>(basePath + '/payment/get/{id}', { params: d })
}
/**根据优惠告知书ID获取已付金额*/
export async function get_payment_getAmountPaidByBusinessId__businessId(d?: any) {
  return await request.get<any, any>(basePath + '/payment/getAmountPaidByBusinessId/{businessId}', { params: d })
}
/**根据成交ID获取已付金额*/
export async function get_payment_getAmountPaidByDealId__dealId(d?: any) {
  return await request.get<any, any>(basePath + '/payment/getAmountPaidByDealId/{dealId}', { params: d })
}
/**查询收款信息列表数据*/
export async function get_payment_getAppList__businessId(d?: any) {
  return await request.get<PaymentVO[], PaymentVO[]>(basePath + '/payment/getAppList/{businessId}', { params: d })
}
/**获取待付款记录ID*/
export async function get_payment_getBusinessId__businessId(d?: any) {
  return await request.get<number, number>(basePath + '/payment/getBusinessId/{businessId}', { params: d })
}
/**查询一条付款记录详情*/
export async function get_payment_getDetail__id(d?: any) {
  return await request.get<PaymentPCDetailVO, PaymentPCDetailVO>(basePath + '/payment/getDetail/{id}', { params: d })
}
/**查询PC端收款信息列表*/
export async function post_payment_getList(d?: any) {
  return await request.post<PageModel<PaymentPCVO>, PageModel<PaymentPCVO>>(basePath + '/payment/getList', d)
}
/**查询收款信息列表数据*/
export async function get_payment_getNotCheckList__businessId(d?: any) {
  return await request.get<PaymentVO[], PaymentVO[]>(basePath + '/payment/getNotCheckList/{businessId}', { params: d })
}
/**获取二维码信息*/
export async function get_payment_getPaymentQRCodeInfo__id(d?: any) {
  return await request.get<PaymentQRCodeVO, PaymentQRCodeVO>(basePath + '/payment/getPaymentQRCodeInfo/{id}', { params: d })
}
/**获取银联支付接口参数*/
export async function post_payment_getUnionPayParameter(d?: any) {
  return await request.post<PaymentOnlinePayParamVO, PaymentOnlinePayParamVO>(basePath + '/payment/getUnionPayParameter', d)
}
/**广州银联在线支付-支付成功回调更新数据接口*/
export async function post_payment_onlinePayResultCallback(d?: any) {
  return await request.post<any, any>(basePath + '/payment/onlinePayResultCallback', d)
}
/**广州银联在线支付-查询支付交易结果（实时对账）接口*/
export async function post_payment_queryOnlinePayTradeResult(d?: any) {
  return await request.post<string, string>(basePath + '/payment/queryOnlinePayTradeResult', d)
}
/**付款关联成交报告*/
export async function post_payment_relevanceDeal(d?: any) {
  return await request.post<number, number>(basePath + '/payment/relevanceDeal', d)
}
/**修改付款记录*/
export async function post_payment_update(d?: any) {
  return await request.post<number, number>(basePath + '/payment/update', d)
}
//===============================================================================================
/**ResModel模型*/
export interface ResModel<T> {
  /**是否成功（0 是 -1 否）*/
  code: number;
  /**响应信息*/
  msg: string;
  /**返回对象*/
  result: T;
}
/**PageModel模型*/
export interface PageModel<T> {
  /**结果集*/
  list: T[];
  /**总记录数*/
  total: number;
}
/**AccountOnlinePayAddVO*/
export interface AccountOnlinePayAddVO {
  /**(必填)公司收款账号ID*/
  accountId: number;
  /**对账密码*/
  checkPasswd: string;
  /**(必填)对账账号*/
  checkUser: string;
  /**(必填)商户ID*/
  merId: string;
  /**(必填)秘钥*/
  secret: string;
}
/**AccountOnlinePayUpdateVO*/
export interface AccountOnlinePayUpdateVO {
  /**(必填)公司收款账号ID*/
  accountId: number;
  /**对账密码*/
  checkPasswd: string;
  /**(必填)对账账号*/
  checkUser: string;
  /**ID*/
  id: number;
  /**(必填)商户ID*/
  merId: string;
  /**(必填)秘钥*/
  secret: string;
}
/**AccountOnlinePayVO*/
export interface AccountOnlinePayVO {
  /**公司收款账号ID*/
  accountId: number;
  /**对账密码*/
  checkPasswd: string;
  /**对账账号*/
  checkUser: string;
  /**ID*/
  id: number;
  /**商户ID*/
  merId: string;
  /**秘钥*/
  secret: string;
}
/**BankAccountAddVO*/
export interface BankAccountAddVO {
  /**(必填)账户名称*/
  accountName: string;
  /**(必填)账号*/
  accountNo: string;
  /**(必填)账号类型(Basic-基本存款账户、General-一般存款账户)*/
  accountType: string;
  /**(必填)开户银行*/
  branchName: string;
  /**(必填)联行号*/
  branchNo: string;
  /**(必填)账户类别(MainAccount-主账号、SubAccount-分账号)*/
  category: string;
  /**(必填)公司主体ID*/
  companyId: number;
}
/**BankAccountQueryVO*/
export interface BankAccountQueryVO {
  /**账户名称*/
  accountName: string;
  /**账号*/
  accountNo: string;
  /**账号类型(Basic-基本存款账户、General-一般存款账户)*/
  accountType: string;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
}
/**BankAccountUpdateVO*/
export interface BankAccountUpdateVO {
  /**(必填)账户名称*/
  accountName: string;
  /**(必填)账号*/
  accountNo: string;
  /**(必填)账号类型(Basic-基本存款账户、General-一般存款账户)*/
  accountType: string;
  /**(必填)开户银行*/
  branchName: string;
  /**(必填)联行号*/
  branchNo: string;
  /**(必填)账户类别(MainAccount-主账号、SubAccount-分账号)*/
  category: string;
  /**(必填)公司主体ID*/
  companyId: number;
  /**(必填)id*/
  id: number;
}
/**BankAccountVO*/
export interface BankAccountVO {
  /**账户名称*/
  accountName: string;
  /**账号*/
  accountNo: string;
  /**账号类型(Basic-基本存款账户、General-一般存款账户)*/
  accountType: string;
  /**开户银行*/
  branchName: string;
  /**联行号*/
  branchNo: string;
  /**账户类别(MainAccount-主账号、SubAccount-分账号)*/
  category: string;
  /**公司主体ID*/
  companyId: number;
  /**ID*/
  id: number;
}
/**BankBranchQueryVO*/
export interface BankBranchQueryVO {
  /**所属银行*/
  bankName: string;
  /**开户行*/
  branchName: string;
  /**联行号*/
  branchNo: string;
  /**城市*/
  cityName: string;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
  /**省份*/
  provinceName: string;
}
/**BankBranchVO*/
export interface BankBranchVO {
  /**所属银行*/
  bankName: string;
  /**开户行*/
  branchName: string;
  /**联行号*/
  branchNo: string;
  /**城市*/
  cityName: string;
  /**ID*/
  id: number;
  /**省份*/
  provinceName: string;
}
/**GZPosPayResultCallback*/
export interface GZPosPayResultCallback {
  /**支付账户*/
  acctNo: string;
  /**支付金额*/
  amount: string;
  /**商户编号*/
  busCode: string;
  /**业务模式*/
  businessModel: string;
  /**银行卡类型*/
  cardType: string;
  /**参考号*/
  indexnum: string;
  /**银联支付流水(凭证号)*/
  payCode: string;
  /**交易订单号*/
  payNo: string;
  /**支付结果标识码*/
  payResultCode: string;
  /**支付结果信息*/
  payResultMessage: string;
  /**支付方式*/
  payType: string;
  /**终端号*/
  posCode: string;
  /**清算日期*/
  settDate: string;
  /**币种*/
  tranCurr: string;
  /**支付时间*/
  tranTime: string;
  /**消费模式*/
  transMark: string;
}
/**HandInvoiceBillVO*/
export interface HandInvoiceBillVO {
  /**发票金额[含税]*/
  billAmount: number;
  /**发票代码*/
  billCode: string;
  /**发票号码*/
  billNo: string;
  /**发票抬头*/
  billTitle: string;
  /**发票类型(General_ZZ-增值税普通发票（纸质）、General_DZ-增值税普通发票（电子）、Special_ZZ-增值税专用发票(纸质）)*/
  billTypeCode: string;
  /**附件ID*/
  fileId: string;
  /**附件名称*/
  fileName: string;
  /**附件类型*/
  fileType: string;
  /**附件链接*/
  fileUrl: string;
  /**开票票据信息ID*/
  id: number;
  /**开票日期(yyyy-MM-dd HH:mm:ss)*/
  invoiceTime: string;
  /**确认主营[不含税]*/
  mainAmount: number;
  /**NC凭证号*/
  ncCode: string;
  /**备注*/
  remark: string;
  /**税额[公式]*/
  taxAmount: number;
}
/**InvoiceApplyRecAddVO*/
export interface InvoiceApplyRecAddVO {
  /**请款单代理费金额（含税）*/
  amount: number;
  /**请款信息ID*/
  businessId: number;
  /**请款单编号*/
  businessNo: string;
  /**事业部ID*/
  departmentId: number;
  /**发票抬头为请款单中的甲方公司名称*/
  invoiceTitle: string;
  /**发票类型(SpecialElectron-增值税专用发票（电子）、OrdinaryElectron-增值税普通发票（电子）、OrdinaryPaper-增值税普通发票（纸质)、SpecialPaper-增值税专用发票（纸质）)*/
  invoiceType: string;
  /**请款单收款方*/
  payee: string;
  /**收款方账号*/
  payeeAccountNo: string;
  /**税率*/
  taxRate: number;
}
/**InvoiceAttachmentVO*/
export interface InvoiceAttachmentVO {
  /**附件ID*/
  fileId: string;
  /**附件名称*/
  fileName: string;
  /**附件类型*/
  type: string;
}
/**InvoiceBaseVO*/
export interface InvoiceBaseVO {
  /**商品分类编码*/
  classifyCode: string;
  /**公司名称*/
  companyName: string;
  /**创建时间(yyyy-MM-dd HH:mm:ss)*/
  createTime: string;
  /**创建用户*/
  createUser: number;
  /**已删除*/
  deleted: number;
  /**开票员*/
  handlers: string;
  /**undefined*/
  id: number;
  /**收款员*/
  payee: string;
  /**项目名称*/
  projectName: string;
  /**项目单位*/
  projectUnit: string;
  /**复核人*/
  reviewer: string;
  /**销方地址*/
  sellerAddress: string;
  /**销方银行账号*/
  sellerBankAccount: string;
  /**销方公司ID*/
  sellerCompanyId: number;
  /**销方公司名称*/
  sellerName: string;
  /**销方开户行支行*/
  sellerOpeningBankBranch: string;
  /**销方开户行类型*/
  sellerOpeningBankType: string;
  /**销方电话*/
  sellerPhone: string;
  /**销方税号*/
  sellerTaxNo: string;
  /**税率*/
  taxRate: number;
  /**更新时间(yyyy-MM-dd HH:mm:ss)*/
  updateTime: string;
  /**更新用户*/
  updateUser: number;
}
/**InvoiceBasicVO*/
export interface InvoiceBasicVO {
  /**(必填)业务编号*/
  businessCodes: string[];
  /**购方类型Code[CUSTOMER表示客户, PARTYA表示甲方](CUSTOMER-客户、PARTYA-甲方)*/
  buyerTypeCode: string;
}
/**InvoiceBilIdslVO*/
export interface InvoiceBilIdslVO {
  /**(必填)航天发票信息id数组*/
  billIds: number[];
}
/**InvoiceBillHandVO*/
export interface InvoiceBillHandVO {
  /**发票金额[含税]*/
  billAmount: number;
  /**发票代码*/
  billCode: string;
  /**发票号码*/
  billNo: string;
  /**发票抬头*/
  billTitle: string;
  /**发票类型(General_ZZ-增值税普通发票（纸质）、General_DZ-增值税普通发票（电子）、Special_ZZ-增值税专用发票(纸质）)*/
  billTypeCode: string;
  /**业务编码[成交报告编号]*/
  businessCode: number;
  /**文件ID*/
  fileId: string;
  /**文件名称*/
  fileName: string;
  /**文件类型*/
  fileType: string;
  /**文件地址*/
  fileUrl: string;
  /**开票票据信息ID*/
  id: number;
  /**开票信息ID*/
  invoiceId: number;
  /**开票方式(HAND-手动开票、AUTO-自动开票)*/
  invoiceModeCode: string;
  /**开票日期(yyyy-MM-dd HH:mm:ss)*/
  invoiceTime: string;
  /**开票类型[1正票、2红票]*/
  invoiceType: number;
  /**确认主营[不含税]*/
  mainAmount: number;
  /**NC凭证号*/
  ncCode: string;
  /**订单号*/
  orderNo: string;
  /**备注*/
  remark: string;
  /**流水号*/
  serialNo: string;
  /**税额[公式]*/
  taxAmount: number;
}
/**InvoiceBillHtPdfInfo*/
export interface InvoiceBillHtPdfInfo {
  /**undefined*/
  htPdfFile: string;
  /**undefined*/
  htPdfUrl: string;
}
/**InvoiceBillInfoVO*/
export interface InvoiceBillInfoVO {
  /**金额（含税）*/
  amount: number;
  /**红冲状态*/
  cancelFlag: number;
  /**ID*/
  id: number;
  /**发票代码*/
  invoiceCode: string;
  /**开票ID*/
  invoiceId: number;
  /**发票号码*/
  invoiceNo: string;
  /**发票类别*/
  invoiceType: number;
  /**确认主营（不含税）*/
  noTax: number;
  /**航天开票流水号*/
  serialNo: string;
  /**税额*/
  tax: number;
}
/**InvoiceBillQueryVO*/
export interface InvoiceBillQueryVO {
  /**开票起始日期(yyyy-MM-dd HH:mm:ss)*/
  beginTime: string;
  /**发票代码*/
  billCode: string;
  /**发票号码*/
  billNo: string;
  /**发票抬头*/
  billTitle: string;
  /**业务编号[成交报告编号,请款申请单号]*/
  businessCode: string;
  /**开票截止日期(yyyy-MM-dd HH:mm:ss)*/
  endTime: string;
  /**发票类型[1正票、2红票]*/
  invoiceType: number;
  /**订单号*/
  orderNo: string;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
  /**是否已红冲(NotRed-未红冲、Red-已红冲、PendingRefundRed-待退款红冲)*/
  redDashedStatus: string;
  /**流水号*/
  serialNo: string;
}
/**InvoiceConfigAddVO*/
export interface InvoiceConfigAddVO {
  /**地址*/
  address: string;
  /**收款员*/
  cashier: string;
  /**商品分类编码*/
  categoryCode: string;
  /**复核人*/
  checker: string;
  /**公司主体ID*/
  companyId: number;
  /**名称*/
  companyName: string;
  /**开票员*/
  invoiceClerk: string;
  /**项目名称*/
  itemName: string;
  /**项目单位*/
  itemUnits: string;
  /**电话*/
  phone: string;
  /**税率*/
  taxRate: string;
  /**纳税人规模(General-一般纳税人、SmallScale-小规模纳税人)*/
  taxScale: string;
  /**纳税人识别号*/
  taxpayerNo: string;
}
/**InvoiceConfigQueryVO*/
export interface InvoiceConfigQueryVO {
  /**名称*/
  companyName: string;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
  /**纳税人规模(General-一般纳税人、SmallScale-小规模纳税人)*/
  taxScale: string;
  /**纳税人识别号*/
  taxpayerNo: string;
}
/**InvoiceConfigUpdateVO*/
export interface InvoiceConfigUpdateVO {
  /**地址*/
  address: string;
  /**收款员*/
  cashier: string;
  /**商品分类编码*/
  categoryCode: string;
  /**复核人*/
  checker: string;
  /**公司主体ID*/
  companyId: number;
  /**名称*/
  companyName: string;
  /**(必填)id*/
  id: number;
  /**开票员*/
  invoiceClerk: string;
  /**项目名称*/
  itemName: string;
  /**项目单位*/
  itemUnits: string;
  /**电话*/
  phone: string;
  /**税率*/
  taxRate: string;
  /**纳税人规模(General-一般纳税人、SmallScale-小规模纳税人)*/
  taxScale: string;
  /**纳税人识别号*/
  taxpayerNo: string;
}
/**InvoiceConfigVO*/
export interface InvoiceConfigVO {
  /**地址*/
  address: string;
  /**收款员*/
  cashier: string;
  /**商品分类编码*/
  categoryCode: string;
  /**复核人*/
  checker: string;
  /**公司主体ID*/
  companyId: number;
  /**名称*/
  companyName: string;
  /**ID*/
  id: number;
  /**开票员*/
  invoiceClerk: string;
  /**项目名称*/
  itemName: string;
  /**项目单位*/
  itemUnits: string;
  /**电话*/
  phone: string;
  /**税率*/
  taxRate: string;
  /**纳税人规模(General-一般纳税人、SmallScale-小规模纳税人)*/
  taxScale: string;
  /**纳税人识别号*/
  taxpayerNo: string;
}
/**InvoiceDealAddVO*/
export interface InvoiceDealAddVO {
  /**服务费金额（含税）*/
  amount: number;
  /**成交报告ID*/
  businessId: number;
  /**成交报告编号*/
  businessNo: string;
  /**事业部ID*/
  departmentId: number;
  /**发票抬头为业主姓名（多个业主使用；分隔）*/
  invoiceTitle: string;
  /**立项ID*/
  termId: number;
}
/**InvoiceDetailVO*/
export interface InvoiceDetailVO {
  /**undefined*/
  attachmentVOs: InvoiceAttachmentVO[];
  /**发票信息集合*/
  invoiceBillInfos: InvoiceBillInfoVO[];
  /**开票信息*/
  invoiceInfo: InvoiceInfoVO_1;
  /**开票历史记录信息集合*/
  invoiceRecords: InvoiceRecordVO[];
}
/**InvoiceDownloadVO*/
export interface InvoiceDownloadVO {
  /**开票信息ID集合*/
  ids: number[];
}
/**InvoiceHCVO*/
export interface InvoiceHCVO {
  /**开票信息ID集合*/
  ids: number[];
  /**代理费红冲备注*/
  remark: string;
  /**代理费红冲初始化状态*/
  state: number;
}
/**InvoiceHTBillVO*/
export interface InvoiceHTBillVO {
  /**发票金额[含税]*/
  billAmount: number;
  /**发票代码*/
  billCode: string;
  /**发票号码*/
  billNo: string;
  /**发票抬头*/
  billTitle: string;
  /**业务编码[成交报告编号]*/
  businessCode: string;
  /**开票票据信息ID*/
  id: number;
  /**开票日期(yyyy-MM-dd HH:mm:ss)*/
  invoiceTime: string;
  /**开票类型[1正票、2红票]*/
  invoiceType: string;
  /**确认主营[不含税]*/
  mainAmount: number;
  /**NC凭证号*/
  ncCode: string;
  /**订单号*/
  orderNo: string;
  /**红冲状态(NotRed-未红冲、Red-已红冲、PendingRefundRed-待退款红冲)*/
  redDashedStatus: string;
  /**流水号*/
  serialNo: string;
  /**税额[公式]*/
  taxAmount: number;
}
/**InvoiceHTZPVO*/
export interface InvoiceHTZPVO {
  /**开票信息ID集合*/
  ids: number[];
  /**发票类型(SpecialElectron-增值税专用发票（电子）、OrdinaryElectron-增值税普通发票（电子）、OrdinaryPaper-增值税普通发票（纸质)、SpecialPaper-增值税专用发票（纸质）)*/
  operationType: string;
}
/**InvoiceHandVO*/
export interface InvoiceHandVO {
  /**附件集合信息集合*/
  attachments: InvoiceAttachmentVO[];
  /**开票信息ID*/
  invoiceId: number;
  /**map: key-发票号码 value-发票代码)*/
  invoiceNoAndInvoiceCodeMap: object;
  /**发票类型(SpecialElectron-增值税专用发票（电子）、OrdinaryElectron-增值税普通发票（电子）、OrdinaryPaper-增值税普通发票（纸质)、SpecialPaper-增值税专用发票（纸质）)*/
  invoiceType: string;
  /**NC凭证号*/
  ncCode: string;
  /**开票日期(yyyy-MM-dd)*/
  operationDate: string;
  /**备注*/
  remark: string;
  /**税额*/
  tax: number;
}
/**InvoiceInfoVO*/
export interface InvoiceInfoVO {
  /**undefined*/
  baseInfo: InvoiceBaseVO;
  /**undefined*/
  billList: InvoiceBillHandVO[];
  /**undefined*/
  invoiceInfo: InvoiceVO;
}
/**InvoiceInfoVO_1*/
export interface InvoiceInfoVO_1 {
  /**金额（含税）*/
  amount: number;
  /**业务ID*/
  businessId: number;
  /**业务单号*/
  businessNo: string;
  /**事业部ID*/
  departmentId: number;
  /**费用类型(ServiceFee-服务费、AgencyFee-代理费)*/
  feeType: string;
  /**ID*/
  id: number;
  /**发票抬头*/
  invoiceTitle: string;
  /**发票类型(SpecialElectron-增值税专用发票（电子）、OrdinaryElectron-增值税普通发票（电子）、OrdinaryPaper-增值税普通发票（纸质)、SpecialPaper-增值税专用发票（纸质）)*/
  invoiceType: string;
  /**NC凭证号*/
  ncCode: string;
  /**确认主营（不含税）*/
  noTax: number;
  /**开票日期(yyyy-MM-dd)*/
  operationDate: string;
  /**开票类型(Hand-手工开票、Auto-自动开票)*/
  operationType: string;
  /**开票人*/
  operationUser: number;
  /**收款方*/
  payee: string;
  /**收款方账号*/
  payeeAccountNo: string;
  /**备注*/
  remark: string;
  /**状态(Done-已开票、NotDone-未开票)*/
  status: string;
  /**税额*/
  tax: number;
  /**税率*/
  taxRate: number;
}
/**InvoiceManualInfoVO*/
export interface InvoiceManualInfoVO {
  /**发票信息*/
  billList: HandInvoiceBillVO[];
  /**(必填)业务编号[成交报告编号 或 请佣申请单号]*/
  businessCode: string;
  /**购方类型Code[CUSTOMER表示客户, PARTYA表示甲方](CUSTOMER-客户、PARTYA-甲方)*/
  buyerTypeCode: string;
}
/**InvoiceOperateListVO*/
export interface InvoiceOperateListVO {
  /**(必填)发票信息*/
  datas: InvoiceOperateVO[];
}
/**InvoiceOperateVO*/
export interface InvoiceOperateVO {
  /**(必填)业务编号[成交报告编号 或 请佣申请单号]*/
  businessCode: string;
  /**购方类型Code[CUSTOMER表示客户, PARTYA表示甲方](CUSTOMER-客户、PARTYA-甲方)*/
  buyerTypeCode: string;
}
/**InvoicePartyAAddVO*/
export interface InvoicePartyAAddVO {
  /**申请费用类型Code[甲方](SaleAgentFee-销售代理费)*/
  applyFeeTypeCode: string;
  /**请佣申请单号*/
  businessCode: string;
  /**购方邮箱*/
  buyerEmail: string;
  /**甲方名称*/
  buyerName: string;
  /**甲方手机*/
  buyerPhone: string;
  /**已付金额*/
  paidAmount: number;
  /**应付金额*/
  payableAmount: number;
  /**收款银行账号*/
  payeeBankAccount: string;
  /**收款方公司ID*/
  payeeCompanyId: number;
  /**收款方公司名称*/
  payeeCompanyName: string;
  /**退款金额*/
  refundAmount: number;
  /**开票备注信息*/
  remark: string;
}
/**InvoicePartyAQueryVO*/
export interface InvoicePartyAQueryVO {
  /**开票起始日期(yyyy-MM-dd HH:mm:ss)*/
  beginTime: string;
  /**请款申请单号*/
  businessCode: string;
  /**甲方公司名称*/
  buyerName: string;
  /**开票截止日期(yyyy-MM-dd HH:mm:ss)*/
  endTime: string;
  /**开票方式(HAND-手动开票、AUTO-自动开票)*/
  invoiceModeCode: string;
  /**开票状态(NotInvoiced-未开票、Invoiced-已开票)*/
  invoicingStatus: string;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
  /**红冲起始日期(yyyy-MM-dd HH:mm:ss)*/
  redBeginTime: string;
  /**红冲状态(NotRed-未红冲、Red-已红冲、PendingRefundRed-待退款红冲)*/
  redDashedStatus: string;
  /**红冲截止日期(yyyy-MM-dd HH:mm:ss)*/
  redEndTime: string;
}
/**InvoicePartyARedQueryVO*/
export interface InvoicePartyARedQueryVO {
  /**开票起始日期(yyyy-MM-dd HH:mm:ss)*/
  beginTime: string;
  /**请款申请单号*/
  businessCode: string;
  /**甲方公司名称*/
  buyerName: string;
  /**开票截止日期(yyyy-MM-dd HH:mm:ss)*/
  endTime: string;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
  /**红冲起始日期(yyyy-MM-dd HH:mm:ss)*/
  redBeginTime: string;
  /**红冲状态(NotRed-未红冲、Red-已红冲、PendingRefundRed-待退款红冲)*/
  redDashedStatus: string;
  /**红冲截止日期(yyyy-MM-dd HH:mm:ss)*/
  redEndTime: string;
}
/**InvoicePartyAVO*/
export interface InvoicePartyAVO {
  /**申请费用类型(SaleAgentFee-销售代理费)*/
  applyFeeTypeCode: string;
  /**业务编码*/
  businessCode: string;
  /**甲方公司名称*/
  buyerName: string;
  /**发票信息ID*/
  id: number;
  /**开票方式(HAND-手动开票、AUTO-自动开票)*/
  invoiceModeCode: string;
  /**开票时间(yyyy-MM-dd HH:mm:ss)*/
  invoiceTime: string;
  /**开票状态(NotInvoiced-未开票、Invoiced-已开票)*/
  invoicingStatus: string;
  /**正票状态Code(NotInvoiced-未开票、Invoiced-已开票)*/
  normalStatusCode: string;
  /**本次申请金额(元)*/
  payableAmount: number;
  /**收款银行账号*/
  payeeBankAccount: string;
  /**收款方公司名称*/
  payeeCompanyName: string;
  /**红冲状态Code(NotRed-未红冲、Red-已红冲、PendingRefundRed-待退款红冲)*/
  redDashedStatusCode: string;
  /**红冲时间(yyyy-MM-dd HH:mm:ss)*/
  redInvoiceTime: string;
}
/**InvoiceQueryHtFileVO*/
export interface InvoiceQueryHtFileVO {
  /**发票代码*/
  billCode: string;
  /**发票号码*/
  billNo: string;
}
/**InvoiceQueryVO*/
export interface InvoiceQueryVO {
  /**(必填)业务编号*/
  businessCodes: string[];
}
/**InvoiceQueryVO_1*/
export interface InvoiceQueryVO_1 {
  /**业务单号*/
  businessNo: string;
  /**截止开票日期(yyyy-MM-dd)*/
  endTime: string;
  /**费用类型(ServiceFee-服务费、AgencyFee-代理费)*/
  feeType: string;
  /**发票抬头*/
  invoiceTitle: string;
  /**开票类型(Hand-手工开票、Auto-自动开票)*/
  operationType: string;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
  /**起始开票日期(yyyy-MM-dd)*/
  startTime: string;
  /**开票状态(Done-已开票、NotDone-未开票)*/
  status: string;
}
/**InvoiceRecordVO*/
export interface InvoiceRecordVO {
  /**开票ID*/
  invoiceId: number;
  /**操作时间(yyyy-MM-dd HH:mm:ss)*/
  operateTime: string;
  /**操作(HandMake-手工开票、AutoMake-自动开票、HandCancel-手工红冲、AutoCancel-自动红冲)*/
  operation: string;
  /**操作人*/
  operator: number;
  /**备注*/
  remark: string;
}
/**InvoiceVO*/
export interface InvoiceVO {
  /**业绩确认时间(yyyy-MM-dd HH:mm:ss)*/
  achieveConfirmTime: string;
  /**申请费用类型Code[甲方]*/
  applyFeeTypeCode: string;
  /**业务编码*/
  businessCode: string;
  /**购方邮箱*/
  buyerEmail: string;
  /**购方名称*/
  buyerName: string;
  /**购方手机*/
  buyerPhone: string;
  /**购方类型(CUSTOMER-客户、PARTYA-甲方)*/
  buyerTypeCode: string;
  /**立项周期ID*/
  cycleId: number;
  /**立项周期名称*/
  cycleName: string;
  /**成交组织ID*/
  dealOrgId: number;
  /**成交人ID*/
  dealPersonId: number;
  /**房屋地址*/
  houseAddress: string;
  /**发票信息ID*/
  id: number;
  /**开票方式Code(HAND-手动开票、AUTO-自动开票)*/
  invoiceModeCode: string;
  /**正票状态Code(NotInvoiced-未开票、Invoiced-已开票)*/
  normalStatusCode: string;
  /**已付金额*/
  paidAmount: number;
  /**应付金额*/
  payableAmount: number;
  /**收款银行账号*/
  payeeBankAccount: string;
  /**收款方公司ID*/
  payeeCompanyId: number;
  /**收款方公司名称*/
  payeeCompanyName: string;
  /**联动项目ID*/
  projectId: number;
  /**联动项目名称*/
  projectName: string;
  /**红冲状态Code(NotRed-未红冲、Red-已红冲、PendingRefundRed-待退款红冲)*/
  redDashedStatusCode: string;
  /**退款金额*/
  refundAmount: number;
  /**备注信息*/
  remark: string;
}
/**InvoiceVO_1*/
export interface InvoiceVO_1 {
  /**金额（含税）*/
  amount: number;
  /**业务ID*/
  businessId: number;
  /**业务单号*/
  businessNo: string;
  /**费用类型(ServiceFee-服务费、AgencyFee-代理费)*/
  feeType: string;
  /**ID*/
  id: number;
  /**发票抬头*/
  invoiceTitle: string;
  /**开票日期(yyyy-MM-dd)*/
  operationDate: string;
  /**开票类型(Hand-手工开票、Auto-自动开票)*/
  operationType: string;
  /**收款方*/
  payee: string;
  /**收款方账号*/
  payeeAccountNo: string;
  /**状态(Done-已开票、NotDone-未开票)*/
  status: string;
  /**税额*/
  tax: number;
}
/**OnlinePayResultVO*/
export interface OnlinePayResultVO {
  /**undefined*/
  currCode: string;
  /**undefined*/
  getordertime: string;
  /**undefined*/
  orderNo: string;
  /**undefined*/
  payAmount: number;
  /**undefined*/
  payNo: string;
  /**undefined*/
  reserved01: string;
  /**undefined*/
  reserved02: string;
  /**undefined*/
  respCode: string;
  /**undefined*/
  settDate: string;
  /**undefined*/
  signMsg: string;
  /**undefined*/
  systemSSN: string;
}
/**PaymentAddVO*/
export interface PaymentAddVO {
  /**(必填)支付金额*/
  amount: number;
  /**(必填)优惠告知书I*/
  businessId: number;
  /**文件ID-转账方式才传*/
  fileId: string;
  /**(必填)店组ID*/
  groupId: number;
  /**(必填)经办人*/
  operator: number;
  /**(必填)支付方式(Pos-POS刷卡、WeChatPay-微信支付、UnionPay-银联支付、Alipay-支付宝支付、Transfer-银行转账、PosNoOrder-无订单刷卡)*/
  payType: string;
  /**(必填)付款方(Customer-客户、PartyA-甲方)*/
  payer: string;
  /**(必填)项目ID*/
  proId: number;
  /**(必填)房号ID*/
  roomId: number;
  /**(必填)付款服务费*/
  serviceAmount: number;
  /**(必填)已付服务费*/
  serviceFeePaid: number;
  /**(必填)立项ID*/
  termId: number;
  /**录入终端(WeChatApp-微信小程序、Pc-电脑)*/
  terminal: string;
  /**(必填)未付服务费*/
  unpaidServiceFee: number;
}
/**PaymentAgencyAddVO*/
export interface PaymentAgencyAddVO {
  /**undefined*/
  list: PaymentAgencyVO[];
}
/**PaymentAgencyVO*/
export interface PaymentAgencyVO {
  /**(必填)支付金额*/
  amount: number;
  /**(必填)请款单ID*/
  businessId: number;
  /**(必填)成交ID*/
  dealId: number;
  /**(必填)店组ID*/
  groupId: number;
  /**(必填)经办人*/
  operator: number;
  /**(必填)每份代理费回款时间(yyyy-MM-dd HH:mm:ss)*/
  payTime: string;
  /**(必填)项目ID*/
  proId: number;
  /**(必填)房号ID*/
  roomId: number;
  /**(必填)立项ID*/
  termId: number;
  /**(必填)操作人*/
  userId: number;
}
/**PaymentBatchRelieveDealVO*/
export interface PaymentBatchRelieveDealVO {
  /**undefined*/
  ids: number[];
}
/**PaymentOnlinePayParamVO*/
export interface PaymentOnlinePayParamVO {
  /**undefined*/
  bankCode: string;
  /**undefined*/
  buzType: string;
  /**undefined*/
  callBackUrl: string;
  /**undefined*/
  currCode: string;
  /**undefined*/
  goods: string;
  /**页面跳转同步通知页面地址*/
  gzCallBackUrl: string;
  /**商户私钥*/
  gzPKey: string;
  /**支付地址*/
  gzPayUrl: string;
  /**是否已支付*/
  isPay: string;
  /**undefined*/
  langType: string;
  /**undefined*/
  merId: string;
  /**undefined*/
  orderAmount: string;
  /**undefined*/
  orderNo: string;
  /**undefined*/
  orderType: string;
  /**undefined*/
  payType: string;
  /**undefined*/
  reserved01: string;
  /**undefined*/
  reserved02: string;
  /**undefined*/
  signMsg: string;
  /**undefined*/
  subOpenId: string;
}
/**PaymentOnlinePayVO*/
export interface PaymentOnlinePayVO {
  /**付款ID*/
  id: number;
  /**微信openId*/
  openId: string;
}
/**PaymentPCDetailVO*/
export interface PaymentPCDetailVO {
  /**收款信息*/
  payment: PaymentPCVO;
  /**undefined*/
  recordVOs: PaymentRecordVO[];
}
/**PaymentPCVO*/
export interface PaymentPCVO {
  /**支付金额*/
  amount: number;
  /**业务编号*/
  businessId: number;
  /**对账时间(yyyy-MM-dd HH:mm:ss)*/
  checkTime: string;
  /**实收确认时间(yyyy-MM-dd HH:mm:ss)*/
  confirmTime: string;
  /**创建时间(yyyy-MM-dd HH:mm:ss)*/
  createTime: string;
  /**创建用户*/
  createUser: number;
  /**成交ID*/
  dealId: number;
  /**已删除*/
  deleted: number;
  /**款项类型(ServiceFee-服务费、AgencyFee-代理费)*/
  foundType: string;
  /**店组ID*/
  groupId: number;
  /**店组名称*/
  groupName: string;
  /**ID*/
  id: number;
  /**经办人*/
  operator: number;
  /**经办人*/
  operatorName: string;
  /**凭证号*/
  payCode: string;
  /**收款日期(yyyy-MM-dd)*/
  payDate: string;
  /**收款编号*/
  payNo: string;
  /**支付时间(yyyy-MM-dd HH:mm:ss)*/
  payTime: string;
  /**支付方式(Pos-POS刷卡、WeChatPay-微信支付、UnionPay-银联支付、Alipay-支付宝支付、Transfer-银行转账、PosNoOrder-无订单刷卡)*/
  payType: string;
  /**收款账号*/
  payeeAccount: string;
  /**收款账户*/
  payeeName: string;
  /**付款方(Customer-客户、PartyA-甲方)*/
  payer: string;
  /**项目ID*/
  proId: number;
  /**项目名称*/
  projectName: string;
  /**房号ID*/
  roomId: number;
  /**房号*/
  roomNo: string;
  /**状态(NotPaid-待支付、Paid-已支付、NotCheck-待对账、Revoked-已撤销、Flushed-已冲正)*/
  status: string;
  /**立项ID*/
  termId: number;
  /**立项周期名称*/
  termName: string;
  /**录入终端(WeChatApp-微信小程序、Pc-电脑)*/
  terminal: string;
  /**更新时间(yyyy-MM-dd HH:mm:ss)*/
  updateTime: string;
  /**更新用户*/
  updateUser: number;
}
/**PaymentQRCodeVO*/
export interface PaymentQRCodeVO {
  /**订单编码*/
  billNo: string;
  /**商户号集合*/
  merchantNoList: string[];
  /**终端号集合*/
  terminalNoList: string[];
  /**交易金额*/
  transAmount: number;
}
/**PaymentQueryVO*/
export interface PaymentQueryVO {
  /**业务编号*/
  businessId: number;
  /**业主姓名*/
  customerName: string;
  /**截止对账时间(yyyy-MM-dd)*/
  endCheckTime: string;
  /**截止确认时间(yyyy-MM-dd)*/
  endConfirmTime: string;
  /**截止收款日期(yyyy-MM-dd)*/
  endPayDate: string;
  /**截止支付时间(yyyy-MM-dd HH:mm:ss)*/
  endPayTime: string;
  /**款项类型(ServiceFee-服务费、AgencyFee-代理费)*/
  foundType: string;
  /**店组ID*/
  groupId: number;
  /**经办人*/
  operator: number;
  /**(必填)当前页*/
  pageNum: number;
  /**(必填)每页条数*/
  pageSize: number;
  /**收款编号*/
  payNo: string;
  /**支付方式(Pos-POS刷卡、WeChatPay-微信支付、UnionPay-银联支付、Alipay-支付宝支付、Transfer-银行转账、PosNoOrder-无订单刷卡)*/
  payType: string;
  /**付款方(Customer-客户、PartyA-甲方)*/
  payer: string;
  /**项目ID*/
  proId: number;
  /**房号*/
  roomId: number;
  /**起始对账时间(yyyy-MM-dd)*/
  startCheckTime: string;
  /**起始确认时间(yyyy-MM-dd)*/
  startConfirmTime: string;
  /**起始收款日期(yyyy-MM-dd)*/
  startPayDate: string;
  /**起始支付时间(yyyy-MM-dd HH:mm:ss)*/
  startPayTime: string;
  /**状态(NotPaid-待支付、Paid-已支付、NotCheck-待对账、Revoked-已撤销、Flushed-已冲正)*/
  status: string;
  /**立项ID*/
  termId: number;
}
/**PaymentRecordVO*/
export interface PaymentRecordVO {
  /**ID*/
  id: number;
  /**操作时间(yyyy-MM-dd HH:mm:ss)*/
  operateTime: string;
  /**操作(Pay-支付、Check-对账、Link-关联、CancelLink-取消关联、Revoke-撤销、Rush-冲正)*/
  operation: string;
  /**操作人*/
  operator: number;
  /**操作人*/
  operatorName: string;
  /**收款ID*/
  paymentId: number;
  /**备注*/
  remark: string;
  /**操作结果*/
  result: string;
}
/**PaymentRelevanceDealVO*/
export interface PaymentRelevanceDealVO {
  /**成交报告ID*/
  dealId: number;
  /**付款ID*/
  id: number;
}
/**PaymentUpdateVO*/
export interface PaymentUpdateVO {
  /**(必填)支付金额*/
  amount: number;
  /**(必填)优惠告知书I*/
  businessId: number;
  /**文件ID-转账方式才传*/
  fileId: string;
  /**(必填)款项类型(ServiceFee-服务费、AgencyFee-代理费)*/
  foundType: string;
  /**(必填)ID*/
  id: number;
  /**(必填)支付方式(Pos-POS刷卡、WeChatPay-微信支付、UnionPay-银联支付、Alipay-支付宝支付、Transfer-银行转账、PosNoOrder-无订单刷卡)*/
  payType: string;
  /**(必填)付款服务费*/
  serviceAmount: number;
  /**(必填)已付服务费*/
  serviceFeePaid: number;
  /**(必填)未付服务费*/
  unpaidServiceFee: number;
}
/**PaymentVO*/
export interface PaymentVO {
  /**支付金额*/
  amount: number;
  /**业务编号*/
  businessId: number;
  /**ID*/
  id: number;
  /**收款日期(yyyy-MM-dd)*/
  payDate: string;
  /**收款编号*/
  payNo: string;
  /**支付方式(Pos-POS刷卡、WeChatPay-微信支付、UnionPay-银联支付、Alipay-支付宝支付、Transfer-银行转账、PosNoOrder-无订单刷卡)*/
  payType: string;
  /**状态(NotPaid-待支付、Paid-已支付、NotCheck-待对账、Revoked-已撤销、Flushed-已冲正)*/
  status: string;
}
