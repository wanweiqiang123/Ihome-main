/* eslint-disable */
/* 此脚本由swagger-ui的api-docs自动生成，请勿修改 */
//2021-4-25 10:32:45
import { request } from '@/api/base'
const basePath = "/sales-api/channel"
/**添加渠道*/
export async function post_channel_add (d?: any) {
return await request.post< number,number> (basePath+'/channel/add', d)
}
/**渠道审核操作*/
export async function post_channel_approveRecord (d?: any) {
return await request.post< string,string> (basePath+'/channel/approveRecord', d)
}
/**退回起草*/
export async function post_channel_backToDraft__id (d?: any) {
return await request.post< number,number> (basePath+'/channel/backToDraft/{id}', d)
}
/**根据渠道商id、经纪人id；查该经纪人是否从属于渠道商*/
export async function post_channel_checkAgencyIsInChannel (d?: any) {
return await request.post< boolean,boolean> (basePath+'/channel/checkAgencyIsInChannel', d)
}
/**检查成立时间是否大于等于三个月*/
export async function get_channel_checkSetupTime (d?: any) {
return await request.get<boolean,boolean>(basePath+'/channel/checkSetupTime', { params: d })
}
/**删除渠道信息*/
export async function post_channel_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channel/delete/{id}', d)
}
/**修改渠道*/
export async function post_channel_edit (d?: any) {
return await request.post< number,number> (basePath+'/channel/edit', d)
}
/**查询渠道详情*/
export async function get_channel_get__id (d?: any) {
return await request.get<ChannelDetail,ChannelDetail>(basePath+'/channel/get/{id}', { params: d })
}
/**查询所有渠道商*/
export async function get_channel_getAll (d?: any) {
return await request.get<ChannelVO[],ChannelVO[]>(basePath+'/channel/getAll', { params: d })
}
/**根据渠道商名称模糊查所有渠道商id、名字列表*/
export async function post_channel_getAllListByName (d?: any) {
return await request.post< ChannelNameQueryDto[],ChannelNameQueryDto[]> (basePath+'/channel/getAllListByName', d)
}
/**根据渠道商id返回营业执照附件*/
export async function get_channel_getChannelBusinessLicense__channelId (d?: any) {
return await request.get<string[],string[]>(basePath+'/channel/getChannelBusinessLicense/{channelId}', { params: d })
}
/**查询渠道列表*/
export async function post_channel_getList (d?: any) {
return await request.post< any,any> (basePath+'/channel/getList', d)
}
/**根据渠道商名称等级城市事业部模糊查渠道商id、名字分页列表[不需要审批通过]*/
export async function post_channel_getListByCityAndDeptWithoutNoPass (d?: any) {
return await request.post< any,any> (basePath+'/channel/getListByCityAndDeptWithoutNoPass', d)
}
/**根据渠道商名称模糊查渠道商id、名字分页列表*/
export async function post_channel_getListByName (d?: any) {
return await request.post< any,any> (basePath+'/channel/getListByName', d)
}
/**渠道信息变更跟进人*/
export async function post_channel_modifyFollowUser (d?: any) {
return await request.post< number,number> (basePath+'/channel/modifyFollowUser', d)
}
/**渠道等级信息变更录入人*/
export async function post_channel_modifyInputUser (d?: any) {
return await request.post< number,number> (basePath+'/channel/modifyInputUser', d)
}
/**添加渠道经纪人*/
export async function post_channelAgent_add (d?: any) {
return await request.post< string,string> (basePath+'/channelAgent/add', d)
}
/**批量删除*/
export async function post_channelAgent_batchDelete (d?: any) {
return await request.post< number,number> (basePath+'/channelAgent/batchDelete', d)
}
/**删除渠道经纪人信息*/
export async function post_channelAgent_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelAgent/delete/{id}', d)
}
/**禁用渠道经纪人信息*/
export async function post_channelAgent_disable__id (d?: any) {
return await request.post< number,number> (basePath+'/channelAgent/disable/{id}', d)
}
/**修改渠道经纪人*/
export async function post_channelAgent_edit (d?: any) {
return await request.post< string,string> (basePath+'/channelAgent/edit', d)
}
/**启用渠道经纪人信息*/
export async function post_channelAgent_enable__id (d?: any) {
return await request.post< number,number> (basePath+'/channelAgent/enable/{id}', d)
}
/**查询渠道经纪人详情*/
export async function get_channelAgent_get__id (d?: any) {
return await request.get<ChannelAgentVO,ChannelAgentVO>(basePath+'/channelAgent/get/{id}', { params: d })
}
/**根据渠道商id获取经纪人负责人列表数据*/
export async function post_channelAgent_getAgentAndChannelPersonByChannelId (d?: any) {
return await request.post< any,any> (basePath+'/channelAgent/getAgentAndChannelPersonByChannelId', d)
}
/**根据渠道商ID查询渠道经纪人列表*/
export async function post_channelAgent_getAgentByChannelId (d?: any) {
return await request.post< any,any> (basePath+'/channelAgent/getAgentByChannelId', d)
}
/**根据渠道商ID查询渠道经纪人列表*/
export async function get_channelAgent_getAllByChannelId__channelId (d?: any) {
return await request.get<ChannelAgent[],ChannelAgent[]>(basePath+'/channelAgent/getAllByChannelId/{channelId}', { params: d })
}
/**查询经纪人渠道等级渠道商信息列表*/
export async function post_channelAgent_getChannelAgentAndChannelGrade (d?: any) {
return await request.post< any,any> (basePath+'/channelAgent/getChannelAgentAndChannelGrade', d)
}
/**根基用户ID查询渠道经纪人渠道商ID*/
export async function get_channelAgent_getChannelIdByUSerId__userId (d?: any) {
return await request.get<number,number>(basePath+'/channelAgent/getChannelIdByUSerId/{userId}', { params: d })
}
/**根据渠道商id获取经纪人负责人列表数据*/
export async function post_channelAgent_getDealChannelAgentList (d?: any) {
return await request.post< any,any> (basePath+'/channelAgent/getDealChannelAgentList', d)
}
/**查询渠道经纪人列表*/
export async function post_channelAgent_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelAgent/getList', d)
}
/**根据经纪人名字模糊查经纪人id、名字分页列表*/
export async function post_channelAgent_getListByName (d?: any) {
return await request.post< any,any> (basePath+'/channelAgent/getListByName', d)
}
/**根据经纪人姓名电话,渠道商id转换成经纪人名称*/
export async function post_channelAgent_getNameByChannelIdAndUserId (d?: any) {
return await request.post< string,string> (basePath+'/channelAgent/getNameByChannelIdAndUserId', d)
}
/**根基渠道经纪人姓名电话查询用户ID*/
export async function post_channelAgent_getUserIdByNameAndMobile (d?: any) {
return await request.post< number,number> (basePath+'/channelAgent/getUserIdByNameAndMobile', d)
}
/**新增渠道呈批*/
export async function post_channelApproval_add (d?: any) {
return await request.post< number,number> (basePath+'/channelApproval/add', d)
}
/**撤回重发*/
export async function post_channelApproval_backToDraft__id (d?: any) {
return await request.post< number,number> (basePath+'/channelApproval/backToDraft/{id}', d)
}
/**删除渠道呈批信息*/
export async function post_channelApproval_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelApproval/delete/{id}', d)
}
/**下载供应商名录*/
export async function post_channelApproval_downloadDirectoryFile__id (d?: any) {
return await request.post< string,string> (basePath+'/channelApproval/downloadDirectoryFile/{id}', d)
}
/**下载OA附件*/
export async function post_channelApproval_downloadOaAttachment__id (d?: any) {
return await request.post< OaAttachmentVO[],OaAttachmentVO[]> (basePath+'/channelApproval/downloadOaAttachment/{id}', d)
}
/**修改渠道呈批*/
export async function post_channelApproval_edit (d?: any) {
return await request.post< number,number> (basePath+'/channelApproval/edit', d)
}
/**查询渠道呈批详情*/
export async function get_channelApproval_get__id (d?: any) {
return await request.get<ChannelApprovalDetail,ChannelApprovalDetail>(basePath+'/channelApproval/get/{id}', { params: d })
}
/**查询OA审批日志*/
export async function post_channelApproval_getFlowCommentList__id (d?: any) {
return await request.post< ChannelApprovalRecord[],ChannelApprovalRecord[]> (basePath+'/channelApproval/getFlowCommentList/{id}', d)
}
/**查询当前OA审批状态*/
export async function post_channelApproval_getFlowState__id (d?: any) {
return await request.post< string,string> (basePath+'/channelApproval/getFlowState/{id}', d)
}
/**查询渠道呈批列表*/
export async function post_channelApproval_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelApproval/getList', d)
}
/**getSummaryIds*/
export async function get_channelApproval_getSummaryIds (d?: any) {
return await request.get<number[],number[]>(basePath+'/channelApproval/getSummaryIds', { params: d })
}
/**变更经办人*/
export async function post_channelApproval_modifyApprovalUser (d?: any) {
return await request.post< number,number> (basePath+'/channelApproval/modifyApprovalUser', d)
}
/**预览供应商名录*/
export async function post_channelApproval_previewDirectoryFile (d?: any) {
return await request.post< string,string> (basePath+'/channelApproval/previewDirectoryFile', d)
}
/**预览OA附件*/
export async function post_channelApproval_previewOaAttachment (d?: any) {
return await request.post< OaAttachmentVO[],OaAttachmentVO[]> (basePath+'/channelApproval/previewOaAttachment', d)
}
/**查询当前OA待办人*/
export async function post_channelApproval_queryOaApprovalUser__id (d?: any) {
return await request.post< string,string> (basePath+'/channelApproval/queryOaApprovalUser/{id}', d)
}
/**syncState*/
export async function post_channelApproval_syncState (d?: any) {
return await request.post< number,number> (basePath+'/channelApproval/syncState', d)
}
/**根据渠道呈批id查询渠道呈批处理列表*/
export async function get_channelApprovalRecord_getAll__approvalId (d?: any) {
return await request.get<ChannelApprovalRecordVO[],ChannelApprovalRecordVO[]>(basePath+'/channelApprovalRecord/getAll/{approvalId}', { params: d })
}
/**添加渠道商银行账户*/
export async function post_channelBank_add (d?: any) {
return await request.post< number,number> (basePath+'/channelBank/add', d)
}
/**批量删除*/
export async function post_channelBank_batchDelete (d?: any) {
return await request.post< number,number> (basePath+'/channelBank/batchDelete', d)
}
/**删除渠道商银行账户信息*/
export async function post_channelBank_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelBank/delete/{id}', d)
}
/**修改渠道商银行账户*/
export async function post_channelBank_edit (d?: any) {
return await request.post< number,number> (basePath+'/channelBank/edit', d)
}
/**查询渠道商银行账户详情*/
export async function get_channelBank_get__id (d?: any) {
return await request.get<ChannelBankVO,ChannelBankVO>(basePath+'/channelBank/get/{id}', { params: d })
}
/**查询渠道商银行账户列表*/
export async function get_channelBank_getAll__channelId (d?: any) {
return await request.get<ChannelBank[],ChannelBank[]>(basePath+'/channelBank/getAll/{channelId}', { params: d })
}
/**根据渠道商ID，银行账号获取银行账户名称*/
export async function post_channelBank_getNameByChannelIdAndCode (d?: any) {
return await request.post< string,string> (basePath+'/channelBank/getNameByChannelIdAndCode', d)
}
/**添加变更渠道商银行账户*/
export async function post_channelBankChange_add (d?: any) {
return await request.post< number,number> (basePath+'/channelBankChange/add', d)
}
/**删除渠道商银行账户变更信息*/
export async function post_channelBankChange_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelBankChange/delete/{id}', d)
}
/**修改变更渠道商银行账户*/
export async function post_channelBankChange_edit (d?: any) {
return await request.post< number,number> (basePath+'/channelBankChange/edit', d)
}
/**查询渠道商银行账户变更详情*/
export async function get_channelBankChange_get__id (d?: any) {
return await request.get<ChannelBankChangeVO,ChannelBankChangeVO>(basePath+'/channelBankChange/get/{id}', { params: d })
}
/**查询渠道商银行账户变更列表*/
export async function get_channelBankChange_getAll__channelId (d?: any) {
return await request.get<ChannelBankChange[],ChannelBankChange[]>(basePath+'/channelBankChange/getAll/{channelId}', { params: d })
}
/**添加渠道变更*/
export async function post_channelChange_add (d?: any) {
return await request.post< number,number> (basePath+'/channelChange/add', d)
}
/**渠道变更审核操作*/
export async function post_channelChange_approveRecord (d?: any) {
return await request.post< string,string> (basePath+'/channelChange/approveRecord', d)
}
/**退回起草*/
export async function post_channelChange_backToDraft__id (d?: any) {
return await request.post< number,number> (basePath+'/channelChange/backToDraft/{id}', d)
}
/**渠道变更时判断是否存在变更中的记录*/
export async function get_channelChange_changeCheck__oldChannelId (d?: any) {
return await request.get<boolean,boolean>(basePath+'/channelChange/changeCheck/{oldChannelId}', { params: d })
}
/**删除渠道变更信息*/
export async function post_channelChange_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelChange/delete/{id}', d)
}
/**修改渠道变更*/
export async function post_channelChange_edit (d?: any) {
return await request.post< number,number> (basePath+'/channelChange/edit', d)
}
/**查询渠道变更详情*/
export async function get_channelChange_get__id (d?: any) {
return await request.get<ChannelChangeDetail,ChannelChangeDetail>(basePath+'/channelChange/get/{id}', { params: d })
}
/**查询渠道变更列表*/
export async function post_channelChange_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelChange/getList', d)
}
/**渠道信息变更跟进人*/
export async function post_channelChange_modifyFollowUser (d?: any) {
return await request.post< number,number> (basePath+'/channelChange/modifyFollowUser', d)
}
/**渠道等级信息变更录入人*/
export async function post_channelChange_modifyInputUser (d?: any) {
return await request.post< number,number> (basePath+'/channelChange/modifyInputUser', d)
}
/**查询城市等级*/
export async function get_channelCityLevel_get__cityCode (d?: any) {
return await request.get<ChannelCityLevel,ChannelCityLevel>(basePath+'/channelCityLevel/get/{cityCode}', { params: d })
}
/**查询城市等级列表*/
export async function post_channelCityLevel_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelCityLevel/getList', d)
}
/**批量更新城市等级*/
export async function post_channelCityLevel_updateLevel (d?: any) {
return await request.post< number,number> (basePath+'/channelCityLevel/updateLevel', d)
}
/**添加渠道等级信息*/
export async function post_channelGrade_add (d?: any) {
return await request.post< number,number> (basePath+'/channelGrade/add', d)
}
/**渠道等级审核操作*/
export async function post_channelGrade_approveRecord (d?: any) {
return await request.post< string,string> (basePath+'/channelGrade/approveRecord', d)
}
/**退回起草*/
export async function post_channelGrade_backToDraft__id (d?: any) {
return await request.post< number,number> (basePath+'/channelGrade/backToDraft/{id}', d)
}
/**删除等级信息*/
export async function post_channelGrade_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelGrade/delete/{id}', d)
}
/**修改渠道等级信息*/
export async function post_channelGrade_edit (d?: any) {
return await request.post< number,number> (basePath+'/channelGrade/edit', d)
}
/**查询渠道等级详情*/
export async function get_channelGrade_get__id (d?: any) {
return await request.get<ChannelGradeDetail,ChannelGradeDetail>(basePath+'/channelGrade/get/{id}', { params: d })
}
/**查询渠道等级渠道商信息列表*/
export async function post_channelGrade_getChannelAndChannelGrade (d?: any) {
return await request.post< any,any> (basePath+'/channelGrade/getChannelAndChannelGrade', d)
}
/**根据渠道等级类型查询附件*/
export async function post_channelGrade_getChannelGradeAttachmentByType (d?: any) {
return await request.post< ChannelGradeAttachmentVO,ChannelGradeAttachmentVO> (basePath+'/channelGrade/getChannelGradeAttachmentByType', d)
}
/**根据渠道商id，城市编号，查找一个渠道等级*/
export async function post_channelGrade_getChannelGradeByChannelIdAndCityCode (d?: any) {
return await request.post< ChannelGrade,ChannelGrade> (basePath+'/channelGrade/getChannelGradeByChannelIdAndCityCode', d)
}
/**根据当前用户id获取当前用户对应的渠道商等级的事业部id*/
export async function get_channelGrade_getCurrentUserGradeDeptId (d?: any) {
return await request.get<number[],number[]>(basePath+'/channelGrade/getCurrentUserGradeDeptId', { params: d })
}
/**根据渠道商id返回所有的渠道等级的业务开展城市*/
export async function get_channelGrade_getGradeCitiesByChannelId__channelId (d?: any) {
return await request.get<string[],string[]>(basePath+'/channelGrade/getGradeCitiesByChannelId/{channelId}', { params: d })
}
/**查询渠道等级列表*/
export async function post_channelGrade_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelGrade/getList', d)
}
/**查询渠道等级列表*/
export async function post_channelGrade_getOne (d?: any) {
return await request.post< ChannelGradeGetOneVO,ChannelGradeGetOneVO> (basePath+'/channelGrade/getOne', d)
}
/**渠道等级信息变更录入人*/
export async function post_channelGrade_modifyInputUser (d?: any) {
return await request.post< number,number> (basePath+'/channelGrade/modifyInputUser', d)
}
/**添加渠道等级变更信息*/
export async function post_channelGradeChange_add (d?: any) {
return await request.post< number,number> (basePath+'/channelGradeChange/add', d)
}
/**渠道等级变更审核操作*/
export async function post_channelGradeChange_approveRecord (d?: any) {
return await request.post< string,string> (basePath+'/channelGradeChange/approveRecord', d)
}
/**退回起草*/
export async function post_channelGradeChange_backToDraft__id (d?: any) {
return await request.post< number,number> (basePath+'/channelGradeChange/backToDraft/{id}', d)
}
/**渠道变更时判断是否存在变更中的记录*/
export async function get_channelGradeChange_changeCheck__oldGradeId (d?: any) {
return await request.get<boolean,boolean>(basePath+'/channelGradeChange/changeCheck/{oldGradeId}', { params: d })
}
/**删除渠道等级变更信息*/
export async function post_channelGradeChange_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelGradeChange/delete/{id}', d)
}
/**修改渠道等级变更信息*/
export async function post_channelGradeChange_edit (d?: any) {
return await request.post< number,number> (basePath+'/channelGradeChange/edit', d)
}
/**查询渠道等级变更详情*/
export async function get_channelGradeChange_get__id (d?: any) {
return await request.get<ChannelGradeChangeDetail,ChannelGradeChangeDetail>(basePath+'/channelGradeChange/get/{id}', { params: d })
}
/**查询渠道等级变更列表*/
export async function post_channelGradeChange_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelGradeChange/getList', d)
}
/**渠道等级变更信息变更录入人*/
export async function post_channelGradeChange_modifyInputUser (d?: any) {
return await request.post< number,number> (basePath+'/channelGradeChange/modifyInputUser', d)
}
/**查询渠道等级处理列表*/
export async function get_channelGradeRecord_getAll__gradeId (d?: any) {
return await request.get<ChannelGradeRecordVO[],ChannelGradeRecordVO[]>(basePath+'/channelGradeRecord/getAll/{gradeId}', { params: d })
}
/**查询渠道等级变更处理列表*/
export async function get_channelGradeRecordChange_getAll__gradeId (d?: any) {
return await request.get<ChannelGradeRecordChangeVO[],ChannelGradeRecordChangeVO[]>(basePath+'/channelGradeRecordChange/getAll/{gradeId}', { params: d })
}
/**添加渠道评级标准*/
export async function post_channelGradeStandard_add (d?: any) {
return await request.post< string,string> (basePath+'/channelGradeStandard/add', d)
}
/**保存渠道供应商管理办法附件*/
export async function post_channelGradeStandard_addManagementAttachment (d?: any) {
return await request.post< string,string> (basePath+'/channelGradeStandard/addManagementAttachment', d)
}
/**删除渠道评级标准信息*/
export async function post_channelGradeStandard_delete__id (d?: any) {
return await request.post< number,number> (basePath+'/channelGradeStandard/delete/{id}', d)
}
/**修改渠道评级标准*/
export async function post_channelGradeStandard_edit (d?: any) {
return await request.post< string,string> (basePath+'/channelGradeStandard/edit', d)
}
/**查询渠道评级标准详情*/
export async function get_channelGradeStandard_get__id (d?: any) {
return await request.get<ChannelGradeStandardVO,ChannelGradeStandardVO>(basePath+'/channelGradeStandard/get/{id}', { params: d })
}
/**根据城市编码渠道等级查询*/
export async function post_channelGradeStandard_getAllByCityCodeAndChannelGrade (d?: any) {
return await request.post< ChannelGradeStandardAndAttachmentVO,ChannelGradeStandardAndAttachmentVO> (basePath+'/channelGradeStandard/getAllByCityCodeAndChannelGrade', d)
}
/**查询渠道评级标准列表*/
export async function post_channelGradeStandard_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelGradeStandard/getList', d)
}
/**查询渠道供应商管理办法附件列表*/
export async function get_channelGradeStandard_getSupplierManagementAttachments (d?: any) {
return await request.get<ChannelSupplierManagementAttachment[],ChannelSupplierManagementAttachment[]>(basePath+'/channelGradeStandard/getSupplierManagementAttachments', { params: d })
}
/**查看渠道评级标准所需材料*/
export async function get_channelGradeStandard_viewMaterials (d?: any) {
return await request.get<ChannelGradeStandardBaseVO,ChannelGradeStandardBaseVO>(basePath+'/channelGradeStandard/viewMaterials', { params: d })
}
/**邀请码作废*/
export async function post_channelInvitationCode_cancel (d?: any) {
return await request.post< number,number> (basePath+'/channelInvitationCode/cancel', d)
}
/**生成邀请码*/
export async function get_channelInvitationCode_create (d?: any) {
return await request.get<string,string>(basePath+'/channelInvitationCode/create', { params: d })
}
/**删除邀请码*/
export async function get_channelInvitationCode_delete__invitationCode (d?: any) {
return await request.get<number,number>(basePath+'/channelInvitationCode/delete/{invitationCode}', { params: d })
}
/**查询邀请码详情*/
export async function get_channelInvitationCode_get__id (d?: any) {
return await request.get<ChannelInvitationCodeDetail,ChannelInvitationCodeDetail>(basePath+'/channelInvitationCode/get/{id}', { params: d })
}
/**查询渠道邀请码列表*/
export async function post_channelInvitationCode_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelInvitationCode/getList', d)
}
/**查询渠道处理列表*/
export async function get_channelRecord_getAll__channelId (d?: any) {
return await request.get<ChannelRecordVO[],ChannelRecordVO[]>(basePath+'/channelRecord/getAll/{channelId}', { params: d })
}
/**查询渠道变更处理列表*/
export async function get_channelRecordChange_getAll__channelId (d?: any) {
return await request.get<ChannelRecordChangeVO[],ChannelRecordChangeVO[]>(basePath+'/channelRecordChange/getAll/{channelId}', { params: d })
}
/**检查公司是否已经注册*/
export async function get_channelRegistUser_checkIsExists (d?: any) {
return await request.get<boolean,boolean>(basePath+'/channelRegistUser/checkIsExists', { params: d })
}
/**校验短信*/
export async function get_channelRegistUser_checkVerifyCode (d?: any) {
return await request.get<boolean,boolean>(basePath+'/channelRegistUser/checkVerifyCode', { params: d })
}
/**查询注册用户列表*/
export async function post_channelRegistUser_getList (d?: any) {
return await request.post< any,any> (basePath+'/channelRegistUser/getList', d)
}
/**渠道用户注册*/
export async function post_channelRegistUser_regist (d?: any) {
return await request.post< number,number> (basePath+'/channelRegistUser/regist', d)
}
/**sendMessage*/
export async function get_channelRegistUser_sendMessage (d?: any) {
return await request.get<string,string>(basePath+'/channelRegistUser/sendMessage', { params: d })
}
/**渠道用户更新公司信息*/
export async function post_channelRegistUser_updateCompany (d?: any) {
return await request.post< number,number> (basePath+'/channelRegistUser/updateCompany', d)
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
list:T[];
/**总记录数*/
total: number;
}
/**AllChannelNameQueryVO*/
export interface AllChannelNameQueryVO {
/**分销协议渠道类型(BigPlatform-大平台、Big-大型中介/一级平台、Middle-中型中介/二级平台、Small-小型中介、Appoint-指定中介行、Strategic-战略合作方)*/
channelEnum: string;
/**周期城市编码*/
cycleCity: string;
/**事业部ID*/
departmentOrgId: number;
/**是否不需要渠道等级审核通过*/
isNotNeedChannelLevelApprove: boolean;
/**名称*/
name: string;
}
/**ApproveRecordVO*/
export interface ApproveRecordVO {
/**综合查询被执行人查询结果附件*/
channelAttachments: ChannelAttachmentBaseVO[];
/**(必填)id*/
id: number;
/**(必填)处理意见*/
remark: string;
/**(必填)审核操作(Revoke-撤回、Confirm-确认、Pass-通过、Reject-驳回)*/
result: string;
}
/**ChannelAgencyCheckVO*/
export interface ChannelAgencyCheckVO {
/**undefined*/
agencyId: number;
/**undefined*/
channelId: number;
}
/**ChannelAgent*/
export interface ChannelAgent {
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**邮箱*/
email: string;
/**ID*/
id: number;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**是否结佣(Has-有、No-无)*/
settlementFlag: string;
/**状态(Valid-有效、Invalid-无效)*/
status: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
/**关联用户表的ID*/
userId: number;
}
/**ChannelAgentAndLeaderVO*/
export interface ChannelAgentAndLeaderVO {
/**邮箱*/
email: string;
/**ID*/
id: number;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**姓名或手机号码*/
nameOrTel: string;
/**渠道经纪人/渠道负责人类型*/
type: string;
/**关联用户表的ID*/
userId: number;
}
/**ChannelAgentBaseVO*/
export interface ChannelAgentBaseVO {
/**渠道商ID*/
channelId: number;
/**邮箱*/
email: string;
/**ID*/
id: number;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**是否结佣(Has-有、No-无)*/
settlementFlag: string;
/**状态(Valid-有效、Invalid-无效)*/
status: string;
/**关联用户表的ID*/
userId: number;
}
/**ChannelAgentGradeAndChannelQueryVO*/
export interface ChannelAgentGradeAndChannelQueryVO {
/**渠道经纪人*/
agentName: string;
/**渠道IDs*/
channelIds: number[];
/**渠道商名称*/
channelName: string;
/**周期ID*/
cycleId: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
}
/**ChannelAgentGradeAndChannelVO*/
export interface ChannelAgentGradeAndChannelVO {
/**经纪人ID*/
agentId: number;
/**经纪人姓名*/
agentName: string;
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道等级ID*/
channelGradeId: number;
/**渠道商ID*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**岗位*/
job: string;
/**岗位ID*/
jobId: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**渠道等级状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
}
/**ChannelAgentNameAndMobileVO*/
export interface ChannelAgentNameAndMobileVO {
/**渠道商ID*/
channelId: number;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
}
/**ChannelAgentNameQueryParam*/
export interface ChannelAgentNameQueryParam {
/**渠道商ID*/
channelId: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**用户ID*/
userId: number;
}
/**ChannelAgentNameVO*/
export interface ChannelAgentNameVO {
/**ID*/
id: number;
/**姓名*/
name: string;
}
/**ChannelAgentQueryVO*/
export interface ChannelAgentQueryVO {
/**渠道商ID*/
channelId: number;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**姓名或者手机号码*/
nameOrMobile: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**是否结佣(Has-有、No-无)*/
settlementFlag: string;
/**状态(Valid-有效、Invalid-无效)*/
status: string;
}
/**ChannelAgentSimpleQueryVO*/
export interface ChannelAgentSimpleQueryVO {
/**渠道商ID*/
channelId: number;
/**姓名或者电话*/
nameOrTel: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
}
/**ChannelAgentSimpleVO*/
export interface ChannelAgentSimpleVO {
/**邮箱*/
email: string;
/**ID*/
id: number;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**姓名或手机号码*/
nameOrTel: string;
/**关联用户表的ID*/
userId: number;
}
/**ChannelAgentVO*/
export interface ChannelAgentVO {
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**邮箱*/
email: string;
/**ID*/
id: number;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**是否结佣(Has-有、No-无)*/
settlementFlag: string;
/**状态(Valid-有效、Invalid-无效)*/
status: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
/**关联用户表的ID*/
userId: number;
}
/**ChannelApprovalAttachment*/
export interface ChannelApprovalAttachment {
/**渠道呈批ID*/
approvalId: number;
/**渠道商ID*/
channelId: number;
/**城市*/
city: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**文件类型(ChannelGrade-ChannelGrade、Specially-Specially、OA-OA)*/
fileType: string;
/**ID*/
id: number;
/**入库编号*/
storageNum: string;
/**类型(Specially-特批入库材料、SupplierList-供应商名录)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelApprovalBaseVO*/
export interface ChannelApprovalBaseVO {
/**经办部门意见*/
approvalDesc: string;
/**呈批标题*/
approvalTitle: string;
/**渠道等级信息*/
channelApprovalGrades: ChannelApprovalGradeBaseVO[];
/**事业部*/
departmentOrgId: number;
/**1保存2提交*/
operateType: number;
}
/**ChannelApprovalDetail*/
export interface ChannelApprovalDetail {
/**呈批说明*/
approvalDesc: string;
/**申请编号*/
approvalNo: string;
/**呈批标题*/
approvalTitle: string;
/**经办人*/
approvalUser: number;
/**经办人*/
approvalUserName: string;
/**附件信息*/
channelApprovalAttachments: ChannelApprovalAttachment[];
/**渠道等级信息*/
channelApprovalGrades: ChannelApprovalGradeDetail[];
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentName: string;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**发起日期(yyyy-MM-dd)*/
inputTime: string;
/**OA附件信息*/
oaAttachmentVOs: OaAttachmentVO[];
/**状态(Draft-草稿、SubmittedForApproval-已发起呈批、Approved-审批通过、ApprovalFailed-审批不通过)*/
status: string;
/**呈批OA流程ID*/
summaryId: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelApprovalGradeBaseVO*/
export interface ChannelApprovalGradeBaseVO {
/**渠道等级ID*/
gradeId: number;
/**渠道等级类型(Basic-Basic、Change-Change)*/
gradeType: string;
}
/**ChannelApprovalGradeDetail*/
export interface ChannelApprovalGradeDetail {
/**渠道呈批ID*/
approvalId: number;
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道ID*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**渠道等级ID*/
gradeId: number;
/**渠道等级类型(Basic-Basic、Change-Change)*/
gradeType: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**入库编号*/
storageNum: string;
}
/**ChannelApprovalModifyVO*/
export interface ChannelApprovalModifyVO {
/**渠道id数组*/
ids: number[];
/**undefined*/
userId: number;
}
/**ChannelApprovalPreviewVO*/
export interface ChannelApprovalPreviewVO {
/**渠道等级ID集合*/
channelApprovalGrades: ChannelApprovalGradeBaseVO[];
/**事业部ID*/
departmentOrgId: number;
}
/**ChannelApprovalQueryVO*/
export interface ChannelApprovalQueryVO {
/**申请编号*/
approvalNo: string;
/**经办人*/
approvalUser: number;
/**事业部*/
departmentOrgId: number;
/**发起日期结束*/
inputTimeEnd: string;
/**发起日期开始*/
inputTimeStart: string;
/**OA发文文号*/
oaNo: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**状态(Draft-草稿、SubmittedForApproval-已发起呈批、Approved-审批通过、ApprovalFailed-审批不通过)*/
status: string;
}
/**ChannelApprovalRecord*/
export interface ChannelApprovalRecord {
/**渠道ID*/
approvalId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**处理时间(yyyy-MM-dd HH:mm:ss)*/
operateTime: string;
/**操作*/
operation: string;
/**处理人*/
operator: number;
/**处理人岗位*/
operatorDept: string;
/**处理人姓名*/
operatorUsername: string;
/**处理意见*/
remark: string;
/**结果*/
result: string;
/**OA流程ID*/
summaryId: number;
/**系统类型*/
systemType: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelApprovalRecordVO*/
export interface ChannelApprovalRecordVO {
/**渠道ID*/
approvalId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**处理时间(yyyy-MM-dd HH:mm:ss)*/
operateTime: string;
/**操作*/
operation: string;
/**处理人*/
operator: number;
/**处理人岗位*/
operatorDept: string;
/**处理人姓名*/
operatorName: string;
/**处理人姓名*/
operatorUsername: string;
/**处理意见*/
remark: string;
/**结果*/
result: string;
/**OA流程ID*/
summaryId: number;
/**系统类型*/
systemType: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelApprovalUpdateBaseVO*/
export interface ChannelApprovalUpdateBaseVO {
/**经办部门意见*/
approvalDesc: string;
/**呈批标题*/
approvalTitle: string;
/**渠道等级信息*/
channelApprovalGrades: ChannelApprovalGradeBaseVO[];
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**1保存2提交*/
operateType: number;
}
/**ChannelApprovalVO*/
export interface ChannelApprovalVO {
/**呈批说明*/
approvalDesc: string;
/**申请编号*/
approvalNo: string;
/**呈批标题*/
approvalTitle: string;
/**经办人*/
approvalUser: number;
/**经办人*/
approvalUserName: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentName: string;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**发起日期(yyyy-MM-dd)*/
inputTime: string;
/**状态(Draft-草稿、SubmittedForApproval-已发起呈批、Approved-审批通过、ApprovalFailed-审批不通过)*/
status: string;
/**呈批OA流程ID*/
summaryId: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelAttachmentBaseVO*/
export interface ChannelAttachmentBaseVO {
/**文件ID*/
fileId: string;
/**文件名*/
fileName: string;
/**类型(BusinessLicense-（盖章）营业执照、PermitToOpenAccount-（盖章）开户许可证、CopyOfIDCardOfLegalPerson-（盖章）法人身份证正反面复印件、ConfirmationOfAuthorization-（盖章）签约授权确认函、PowerOfAttorney-（盖章）法人授权书、CopyOfClientIDCard-（盖章）被委托人身份证复印件、ComprehensiveQueryResult-综合查询被执行人查询结果、OtherAttachment-其他附件)*/
type: string;
}
/**ChannelAttachmentChange*/
export interface ChannelAttachmentChange {
/**渠道ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**ID*/
id: number;
/**类型(BusinessLicense-（盖章）营业执照、PermitToOpenAccount-（盖章）开户许可证、CopyOfIDCardOfLegalPerson-（盖章）法人身份证正反面复印件、ConfirmationOfAuthorization-（盖章）签约授权确认函、PowerOfAttorney-（盖章）法人授权书、CopyOfClientIDCard-（盖章）被委托人身份证复印件、ComprehensiveQueryResult-综合查询被执行人查询结果、OtherAttachment-其他附件)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelAttachmentChangeBaseVO*/
export interface ChannelAttachmentChangeBaseVO {
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**类型(BusinessLicense-（盖章）营业执照、PermitToOpenAccount-（盖章）开户许可证、CopyOfIDCardOfLegalPerson-（盖章）法人身份证正反面复印件、ConfirmationOfAuthorization-（盖章）签约授权确认函、PowerOfAttorney-（盖章）法人授权书、CopyOfClientIDCard-（盖章）被委托人身份证复印件、ComprehensiveQueryResult-综合查询被执行人查询结果、OtherAttachment-其他附件)*/
type: string;
}
/**ChannelAttachmentVO*/
export interface ChannelAttachmentVO {
/**渠道ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**ID*/
id: number;
/**文件名后缀*/
suffix: string;
/**类型(BusinessLicense-（盖章）营业执照、PermitToOpenAccount-（盖章）开户许可证、CopyOfIDCardOfLegalPerson-（盖章）法人身份证正反面复印件、ConfirmationOfAuthorization-（盖章）签约授权确认函、PowerOfAttorney-（盖章）法人授权书、CopyOfClientIDCard-（盖章）被委托人身份证复印件、ComprehensiveQueryResult-综合查询被执行人查询结果、OtherAttachment-其他附件)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelBank*/
export interface ChannelBank {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelBankBaseVO*/
export interface ChannelBankBaseVO {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
}
/**ChannelBankChange*/
export interface ChannelBankChange {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelBankChangeBaseVO*/
export interface ChannelBankChangeBaseVO {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
}
/**ChannelBankChangeUpdateVO*/
export interface ChannelBankChangeUpdateVO {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
/**ID*/
id: number;
}
/**ChannelBankChangeVO*/
export interface ChannelBankChangeVO {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelBankQueryParamVO*/
export interface ChannelBankQueryParamVO {
/**账户号码*/
accountNo: string;
/**渠道商ID*/
channelId: number;
}
/**ChannelBankUpdateBaseVO*/
export interface ChannelBankUpdateBaseVO {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
}
/**ChannelBankUpdateVO*/
export interface ChannelBankUpdateVO {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
/**ID*/
id: number;
}
/**ChannelBankVO*/
export interface ChannelBankVO {
/**账户名称*/
accountName: string;
/**账户号码*/
accountNo: string;
/**账号类型(Base-基本存款账户、Commonly-一般存款账户)*/
accountType: string;
/**账号类型-中文*/
accountTypeName: string;
/**开户银行*/
branchName: string;
/**联行号*/
branchNo: string;
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelBaseVO*/
export interface ChannelBaseVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**附件信息*/
channelAttachments: ChannelAttachmentBaseVO[];
/**渠道银行账号信息*/
channelBanks: ChannelBankBaseVO[];
/**渠道负责人信息*/
channelPersons: ChannelPersonBaseVO[];
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**统一社会信用代码*/
creditCode: string;
/**跟进人*/
followUserId: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**1保存2提交*/
operateType: number;
/**渠道所在省份*/
province: string;
/**企业概况*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
}
/**ChannelChangeBaseVO*/
export interface ChannelChangeBaseVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**变更原因*/
changeReason: string;
/**附件信息*/
channelAttachmentChanges: ChannelAttachmentChangeBaseVO[];
/**渠道银行账号信息*/
channelBankChanges: ChannelBankChangeBaseVO[];
/**渠道负责人信息*/
channelPersonChanges: ChannelPersonChangeBaseVO[];
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**统一社会信用代码*/
creditCode: string;
/**跟进人*/
followUserId: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**原渠道ID*/
oldChannelId: number;
/**1保存2提交*/
operateType: number;
/**渠道所在省份*/
province: string;
/**企业概况*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
}
/**ChannelChangeDetail*/
export interface ChannelChangeDetail {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**变更原因*/
changeReason: string;
/**变更时间(yyyy-MM-dd)*/
changeTime: string;
/**附件信息*/
channelAttachmentChanges: ChannelAttachmentChange[];
/**银行账户信息*/
channelBankChanges: ChannelBankChange[];
/**负责人信息*/
channelPersonChanges: ChannelPersonChange[];
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**统一社会信用代码*/
creditCode: string;
/**已删除*/
deleted: number;
/**跟进人*/
followUserId: number;
/**跟进人*/
followUserName: string;
/**ID*/
id: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**原渠道ID*/
oldChannelId: number;
/**渠道所在省份*/
province: string;
/**备注*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**状态(DRAFT-草稿、ToBeConfirmed-待确认、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核)*/
status: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelChangeModifyVO*/
export interface ChannelChangeModifyVO {
/**渠道id数组*/
channelIds: number[];
/**undefined*/
userId: number;
}
/**ChannelChangeQueryVO*/
export interface ChannelChangeQueryVO {
/**城市*/
city: string;
/**行政区*/
county: string;
/**信用代码*/
creditCode: string;
/**跟进人*/
followUserId: number;
/**录入人*/
inputUser: number;
/**名称*/
name: string;
/**原渠道ID*/
oldChannelId: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**省份*/
province: string;
/**简称*/
shortName: string;
/**状态(DRAFT-草稿、ToBeConfirmed-待确认、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核)*/
status: string;
}
/**ChannelChangeUpdateBaseVO*/
export interface ChannelChangeUpdateBaseVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**变更原因*/
changeReason: string;
/**附件信息*/
channelAttachmentChanges: ChannelAttachmentChangeBaseVO[];
/**渠道银行账号信息*/
channelBankChanges: ChannelBankChangeBaseVO[];
/**渠道负责人信息*/
channelPersonChanges: ChannelPersonChangeBaseVO[];
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**统一社会信用代码*/
creditCode: string;
/**跟进人*/
followUserId: number;
/**ID*/
id: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**原渠道ID*/
oldChannelId: number;
/**1保存2提交*/
operateType: number;
/**渠道所在省份*/
province: string;
/**企业概况*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
}
/**ChannelChangeVO*/
export interface ChannelChangeVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**变更原因*/
changeReason: string;
/**变更时间(yyyy-MM-dd)*/
changeTime: string;
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**统一社会信用代码*/
creditCode: string;
/**已删除*/
deleted: number;
/**跟进人*/
followUserId: number;
/**跟进人*/
followUserName: string;
/**ID*/
id: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**原渠道ID*/
oldChannelId: number;
/**渠道所在省份*/
province: string;
/**备注*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**是否跳过平台文员审核*/
skipPlatformClerk: string;
/**状态(DRAFT-草稿、ToBeConfirmed-待确认、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核)*/
status: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelCityLevel*/
export interface ChannelCityLevel {
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**编码*/
code: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**名称*/
name: string;
/**父编码*/
parentCode: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelCityLevelQueryVO*/
export interface ChannelCityLevelQueryVO {
/**城市编码*/
cityCode: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**省份编码*/
proviceCode: string;
}
/**ChannelCityLevelUpdateVO*/
export interface ChannelCityLevelUpdateVO {
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**需要更新城市ids*/
ids: number[];
}
/**ChannelCityLevelVO*/
export interface ChannelCityLevelVO {
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**编码*/
code: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**名称*/
name: string;
/**父编码*/
parentCode: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelDetail*/
export interface ChannelDetail {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**附件信息*/
channelAttachments: ChannelAttachmentVO[];
/**银行账户信息*/
channelBanks: ChannelBankVO[];
/**负责人信息*/
channelPersons: ChannelPerson[];
/**渠道所在城市*/
city: string;
/**渠道所在城市-中文*/
cityName: string;
/**渠道所在行政区*/
county: string;
/**渠道所在行政区-中文*/
countyName: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**统一社会信用代码*/
creditCode: string;
/**已删除*/
deleted: number;
/**跟进人*/
followUserId: number;
/**跟进人*/
followUserName: string;
/**ID*/
id: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**渠道所在省份*/
province: string;
/**渠道所在省份-中文*/
provinceName: string;
/**企业概况*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**状态(DRAFT-草稿、ToBeConfirmed-待确认、Confirmed-已确认、PASS-已审核、Changing-变更中)*/
status: string;
/**状态-中文*/
statusName: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
/**公司类型-中文*/
typeName: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGrade*/
export interface ChannelGrade {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道ID*/
channelId: number;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**录入人*/
inputUser: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeAndChannelQueryVO*/
export interface ChannelGradeAndChannelQueryVO {
/**渠道IDs*/
channelIds: number[];
/**渠道商名称*/
channelName: string;
/**业务开展城市*/
city: string;
/**周期ID*/
cycleId: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
}
/**ChannelGradeAndChannelVO*/
export interface ChannelGradeAndChannelVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道等级ID*/
channelGradeId: number;
/**渠道商ID*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**业务开展城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**业务开展省份*/
province: string;
/**简称*/
shortName: string;
/**渠道等级状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
}
/**ChannelGradeAttachmentBaseVO*/
export interface ChannelGradeAttachmentBaseVO {
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**类型(工商年报显示的缴纳社保人数截图-工商年报显示的缴纳社保人数截图、门店照片（20家以下提供所有，否则至少提供20家）-门店照片（20家以下提供所有，否则至少提供20家）、开发商《文字下发单》-开发商《文字下发单》、相关成交数据（须分子公司及事业部负责人签字）-相关成交数据（须分子公司及事业部负责人签字）、（签字）合格供应商推荐表-（签字）合格供应商推荐表、合作的开发商《分销合同》（可模糊佣金标准）-合作的开发商《分销合同》（可模糊佣金标准）、（签字）供应商考察基本情况表-（签字）供应商考察基本情况表、（盖章签字）供应商调查函-（盖章签字）供应商调查函、成交数据导出表-成交数据导出表、特批入库材料-特批入库材料、其他材料-其他材料)*/
type: string;
}
/**ChannelGradeAttachmentChangeBaseVO*/
export interface ChannelGradeAttachmentChangeBaseVO {
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**类型(工商年报显示的缴纳社保人数截图-工商年报显示的缴纳社保人数截图、门店照片（20家以下提供所有，否则至少提供20家）-门店照片（20家以下提供所有，否则至少提供20家）、开发商《文字下发单》-开发商《文字下发单》、相关成交数据（须分子公司及事业部负责人签字）-相关成交数据（须分子公司及事业部负责人签字）、（签字）合格供应商推荐表-（签字）合格供应商推荐表、合作的开发商《分销合同》（可模糊佣金标准）-合作的开发商《分销合同》（可模糊佣金标准）、（签字）供应商考察基本情况表-（签字）供应商考察基本情况表、（盖章签字）供应商调查函-（盖章签字）供应商调查函、成交数据导出表-成交数据导出表、特批入库材料-特批入库材料、其他材料-其他材料)*/
type: string;
}
/**ChannelGradeAttachmentChangeVO*/
export interface ChannelGradeAttachmentChangeVO {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**渠道ID*/
gradeId: number;
/**ID*/
id: number;
/**文件名后缀*/
suffix: string;
/**类型(工商年报显示的缴纳社保人数截图-工商年报显示的缴纳社保人数截图、门店照片（20家以下提供所有，否则至少提供20家）-门店照片（20家以下提供所有，否则至少提供20家）、开发商《文字下发单》-开发商《文字下发单》、相关成交数据（须分子公司及事业部负责人签字）-相关成交数据（须分子公司及事业部负责人签字）、（签字）合格供应商推荐表-（签字）合格供应商推荐表、合作的开发商《分销合同》（可模糊佣金标准）-合作的开发商《分销合同》（可模糊佣金标准）、（签字）供应商考察基本情况表-（签字）供应商考察基本情况表、（盖章签字）供应商调查函-（盖章签字）供应商调查函、成交数据导出表-成交数据导出表、特批入库材料-特批入库材料、其他材料-其他材料)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeAttachmentDetailVO*/
export interface ChannelGradeAttachmentDetailVO {
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**文件名后缀*/
suffix: string;
}
/**ChannelGradeAttachmentVO*/
export interface ChannelGradeAttachmentVO {
/**文件集合*/
attachmentDetails: ChannelGradeAttachmentDetailVO[];
/**渠道商ID*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**业务开展城市*/
city: string;
/**渠道等级ID*/
gradeId: number;
/**入库编号*/
storageNum: string;
/**文件类型*/
type: string;
}
/**ChannelGradeAttachmentVO_1*/
export interface ChannelGradeAttachmentVO_1 {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**渠道等级ID*/
gradeId: number;
/**ID*/
id: number;
/**文件名后缀*/
suffix: string;
/**类型(工商年报显示的缴纳社保人数截图-工商年报显示的缴纳社保人数截图、门店照片（20家以下提供所有，否则至少提供20家）-门店照片（20家以下提供所有，否则至少提供20家）、开发商《文字下发单》-开发商《文字下发单》、相关成交数据（须分子公司及事业部负责人签字）-相关成交数据（须分子公司及事业部负责人签字）、（签字）合格供应商推荐表-（签字）合格供应商推荐表、合作的开发商《分销合同》（可模糊佣金标准）-合作的开发商《分销合同》（可模糊佣金标准）、（签字）供应商考察基本情况表-（签字）供应商考察基本情况表、（盖章签字）供应商调查函-（盖章签字）供应商调查函、成交数据导出表-成交数据导出表、特批入库材料-特批入库材料、其他材料-其他材料)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeBaseVO*/
export interface ChannelGradeBaseVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**附件信息*/
channelGradeAttachments: ChannelGradeAttachmentBaseVO[];
/**渠道评级标准信息*/
channelGradeItems: ChannelGradeItemBaseVO[];
/**渠道ID*/
channelId: number;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**事业部*/
departmentOrgId: number;
/**1保存2提交*/
operateType: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**入库编号*/
storageNum: string;
}
/**ChannelGradeChangeBaseVO*/
export interface ChannelGradeChangeBaseVO {
/**变更原因*/
changeReason: string;
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**附件信息*/
channelGradeAttachmentChanges: ChannelGradeAttachmentChangeBaseVO[];
/**渠道评级标准信息*/
channelGradeItemChanges: ChannelGradeItemChangeBaseVO[];
/**渠道ID*/
channelId: number;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**事业部*/
departmentOrgId: number;
/**原渠道等级ID*/
oldGradeId: number;
/**1保存2提交*/
operateType: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**入库编号*/
storageNum: string;
}
/**ChannelGradeChangeDetail*/
export interface ChannelGradeChangeDetail {
/**变更原因*/
changeReason: string;
/**变更时间(yyyy-MM-dd)*/
changeTime: string;
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**附件信息*/
channelGradeAttachmentChanges: ChannelGradeAttachmentChangeVO[];
/**渠道评级标准信息*/
channelGradeItemChanges: ChannelGradeItemChangeVO[];
/**公司名称*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**录入人*/
inputUser: number;
/**原渠道等级ID*/
oldGradeId: number;
/**营业住所*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeChangeModifyVO*/
export interface ChannelGradeChangeModifyVO {
/**等级id数组*/
ids: number[];
/**undefined*/
userId: number;
}
/**ChannelGradeChangeQueryVO*/
export interface ChannelGradeChangeQueryVO {
/**变更原因*/
changeReason: string;
/**变更日期结束*/
changeTimeEnd: string;
/**变更日期开始*/
changeTimeStart: string;
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道ID*/
channelId: number;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**事业部*/
departmentOrgId: number;
/**录入人*/
inputUser: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**业务开展省份*/
province: string;
/**是否特批入库*/
special: number;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
}
/**ChannelGradeChangeUpdateBaseVO*/
export interface ChannelGradeChangeUpdateBaseVO {
/**变更原因*/
changeReason: string;
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**附件信息*/
channelGradeAttachmentChanges: ChannelGradeAttachmentChangeBaseVO[];
/**渠道评级标准信息*/
channelGradeItemChanges: ChannelGradeItemChangeBaseVO[];
/**渠道ID*/
channelId: number;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**原渠道等级ID*/
oldGradeId: number;
/**1保存2提交*/
operateType: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**入库编号*/
storageNum: string;
}
/**ChannelGradeChangeVO*/
export interface ChannelGradeChangeVO {
/**变更原因*/
changeReason: string;
/**变更时间(yyyy-MM-dd)*/
changeTime: string;
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**公司名称*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentName: string;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**录入人*/
inputUser: number;
/**录入人*/
inputUserName: string;
/**原渠道等级ID*/
oldGradeId: number;
/**营业住所*/
province: string;
/**是否跳过平台文员审核*/
skipPlatformClerk: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeDetail*/
export interface ChannelGradeDetail {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**附件信息*/
channelGradeAttachments: ChannelGradeAttachmentVO_1[];
/**渠道评级标准信息*/
channelGradeItems: ChannelGradeItemVO[];
/**渠道ID*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**录入人*/
inputUser: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeGetOneParamVO*/
export interface ChannelGradeGetOneParamVO {
/**渠道ID*/
channelId: number;
/**业务开展城市*/
city: string;
/**事业部*/
departmentOrgId: number;
}
/**ChannelGradeGetOneVO*/
export interface ChannelGradeGetOneVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道ID*/
channelId: number;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**录入人*/
inputUser: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeItemBaseVO*/
export interface ChannelGradeItemBaseVO {
/**录入信息*/
inputValue: string;
/**评级标准id*/
standardId: number;
}
/**ChannelGradeItemChangeBaseVO*/
export interface ChannelGradeItemChangeBaseVO {
/**录入信息*/
inputValue: string;
/**评级标准id*/
standardId: number;
}
/**ChannelGradeItemChangeVO*/
export interface ChannelGradeItemChangeVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**渠道ID*/
gradeId: number;
/**评级项*/
gradeItem: string;
/**评级标准*/
gradeStandard: string;
/**ID*/
id: number;
/**文件ID*/
inputValue: string;
/**类型*/
standardId: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeItemVO*/
export interface ChannelGradeItemVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**渠道ID*/
gradeId: number;
/**评级项*/
gradeItem: string;
/**评级标准*/
gradeStandard: string;
/**ID*/
id: number;
/**录入信息*/
inputValue: string;
/**评级标准id*/
standardId: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeModifyVO*/
export interface ChannelGradeModifyVO {
/**等级id数组*/
ids: number[];
/**undefined*/
userId: number;
}
/**ChannelGradeQueryVO*/
export interface ChannelGradeQueryVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道ID*/
channelId: number;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**事业部*/
departmentOrgId: number;
/**录入人*/
inputUser: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
}
/**ChannelGradeRecordChangeVO*/
export interface ChannelGradeRecordChangeVO {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**渠道ID*/
gradeId: number;
/**ID*/
id: number;
/**处理时间(yyyy-MM-dd HH:mm:ss)*/
operateTime: string;
/**操作*/
operation: string;
/**处理人*/
operator: number;
/**处理人岗位*/
operatorJobName: string;
/**处理人姓名*/
operatorName: string;
/**处理意见*/
remark: string;
/**结果(Revoke-撤回、Confirm-确认、Pass-通过、Reject-驳回)*/
result: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeRecordVO*/
export interface ChannelGradeRecordVO {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**渠道等级ID*/
gradeId: number;
/**ID*/
id: number;
/**处理时间(yyyy-MM-dd HH:mm:ss)*/
operateTime: string;
/**操作*/
operation: string;
/**处理人*/
operator: number;
/**处理人岗位*/
operatorJobName: string;
/**处理人姓名*/
operatorName: string;
/**处理意见*/
remark: string;
/**结果(Revoke-撤回、Confirm-确认、Pass-通过、Reject-驳回)*/
result: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeStandard*/
export interface ChannelGradeStandard {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**评级项*/
gradeItem: string;
/**评级标准*/
gradeStandard: string;
/**ID*/
id: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeStandardAndAttachmentVO*/
export interface ChannelGradeStandardAndAttachmentVO {
/**所需材料*/
channelGradeStandardAttachments: string[];
/**评级标准集合*/
channelGradeStandards: ChannelGradeStandard[];
}
/**ChannelGradeStandardAttachment*/
export interface ChannelGradeStandardAttachment {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**类型(工商年报显示的缴纳社保人数截图-工商年报显示的缴纳社保人数截图、门店照片（20家以下提供所有，否则至少提供20家）-门店照片（20家以下提供所有，否则至少提供20家）、开发商《文字下发单》-开发商《文字下发单》、相关成交数据（须分子公司及事业部负责人签字）-相关成交数据（须分子公司及事业部负责人签字）、（签字）合格供应商推荐表-（签字）合格供应商推荐表、合作的开发商《分销合同》（可模糊佣金标准）-合作的开发商《分销合同》（可模糊佣金标准）、（签字）供应商考察基本情况表-（签字）供应商考察基本情况表、（盖章签字）供应商调查函-（盖章签字）供应商调查函、成交数据导出表-成交数据导出表、特批入库材料-特批入库材料、其他材料-其他材料)*/
materialType: string;
/**渠道ID*/
standardId: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeStandardBaseVO*/
export interface ChannelGradeStandardBaseVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**评级项*/
gradeItem: string;
/**评级标准*/
gradeStandard: string;
/**ID*/
id: number;
/**所需材料*/
standardAttachments: string[];
}
/**ChannelGradeStandardQueryVO*/
export interface ChannelGradeStandardQueryVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
}
/**ChannelGradeStandardSearchVO*/
export interface ChannelGradeStandardSearchVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**城市编码*/
cityCode: string;
}
/**ChannelGradeStandardVO*/
export interface ChannelGradeStandardVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**所需材料*/
channelGradeStandardAttachments: ChannelGradeStandardAttachment[];
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**评级项*/
gradeItem: string;
/**评级标准*/
gradeStandard: string;
/**ID*/
id: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelGradeUpdateBaseVO*/
export interface ChannelGradeUpdateBaseVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**附件信息*/
channelGradeAttachments: ChannelGradeAttachmentBaseVO[];
/**渠道评级标准信息*/
channelGradeItems: ChannelGradeItemBaseVO[];
/**渠道ID*/
channelId: number;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**1保存2提交*/
operateType: number;
/**业务开展省份*/
province: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**入库编号*/
storageNum: string;
}
/**ChannelGradeVO*/
export interface ChannelGradeVO {
/**渠道等级(BigPlatform-大平台、LargeIntermediary-大型中介、FirstPlatform-一级平台、MediumIntermediary-中型中介、SecondPlatform-二级平台、SmallIntermediary-小型中介)*/
channelGrade: string;
/**渠道ID*/
channelId: number;
/**渠道商名称*/
channelName: string;
/**渠道类型(Platform-平台)*/
channelType: string;
/**业务开展城市*/
city: string;
/**城市等级(OneTierCity-一线城市、SecondTierCity-二线城市、ThirdTierCity-三线城市)*/
cityGrade: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentName: string;
/**事业部*/
departmentOrgId: number;
/**ID*/
id: number;
/**录入人*/
inputUser: number;
/**录入人*/
inputUserName: string;
/**业务开展省份*/
province: string;
/**是否跳过平台文员审核*/
skipPlatformClerk: string;
/**是否特批入库(Yes-是、No-否)*/
special: string;
/**状态(DRAFT-草稿、PTWYSH-待平台文员审核、FGSYGSH-待分公司业管审核、ZBYGSH-待总部业管审核、PASS-已审核、Changing-变更中、SubmittedForApproval-已发起呈批、Approved-已审批)*/
status: string;
/**入库编号*/
storageNum: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelIdAndCityCodeQueryVO*/
export interface ChannelIdAndCityCodeQueryVO {
/**渠道商ID*/
channelId: number;
/**城市编号*/
cityCode: string;
/**事业部*/
departmentOrgId: number;
}
/**ChannelInvitationCodeDetail*/
export interface ChannelInvitationCodeDetail {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**事业部*/
departmentOrgId: number;
/**失效时间(yyyy-MM-dd HH:mm:ss)*/
expiresTime: string;
/**二维码文件ID*/
fileId: string;
/**ID*/
id: number;
/**邀请码*/
invitationCode: string;
/**邀请人ID/创建人*/
invitationUserId: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelInvitationCodeQueryVO*/
export interface ChannelInvitationCodeQueryVO {
/**事业部*/
departmentOrgId: number;
/**失效时间开始(yyyy-MM-dd)*/
expiresTimeBegin: string;
/**失效时间结束(yyyy-MM-dd)*/
expiresTimeEnd: string;
/**邀请码*/
invitationCode: string;
/**邀请人ID*/
invitationUserId: number;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
}
/**ChannelInvitationCodeVO*/
export interface ChannelInvitationCodeVO {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**创建人*/
createUserName: string;
/**已删除*/
deleted: number;
/**事业部*/
departmentName: string;
/**事业部*/
departmentOrgId: number;
/**失效时间(yyyy-MM-dd HH:mm:ss)*/
expiresTime: string;
/**二维码文件ID*/
fileId: string;
/**ID*/
id: number;
/**邀请码*/
invitationCode: string;
/**邀请人ID/创建人*/
invitationUserId: number;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelModifyVO*/
export interface ChannelModifyVO {
/**渠道id数组*/
channelIds: number[];
/**undefined*/
userId: number;
}
/**ChannelNameQueryDto*/
export interface ChannelNameQueryDto {
/**ID*/
id: number;
/**名称*/
name: string;
}
/**ChannelNameQueryVO*/
export interface ChannelNameQueryVO {
/**分销协议渠道类型(BigPlatform-大平台、Big-大型中介/一级平台、Middle-中型中介/二级平台、Small-小型中介、Appoint-指定中介行、Strategic-战略合作方)*/
channelEnum: string;
/**周期城市编码*/
cycleCity: string;
/**事业部ID*/
departmentOrgId: number;
/**是否不需要渠道等级审核通过*/
isNotNeedChannelLevelApprove: boolean;
/**名称*/
name: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
}
/**ChannelPerson*/
export interface ChannelPerson {
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**邮箱 */
email: string;
/**ID*/
id: number;
/**证件编号*/
identityCode: string;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
/**关联用户表的ID*/
userId: number;
}
/**ChannelPersonBaseVO*/
export interface ChannelPersonBaseVO {
/**邮箱 */
email: string;
/**ID*/
id: number;
/**证件编号*/
identityCode: string;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**关联用户表的ID*/
userId: number;
}
/**ChannelPersonChange*/
export interface ChannelPersonChange {
/**渠道商ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**邮箱 */
email: string;
/**ID*/
id: number;
/**证件编号*/
identityCode: string;
/**证件类型*/
identityType: string;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
/**关联用户表的ID*/
userId: number;
}
/**ChannelPersonChangeBaseVO*/
export interface ChannelPersonChangeBaseVO {
/**邮箱 */
email: string;
/**ID*/
id: number;
/**证件编号*/
identityCode: string;
/**证件类型*/
identityType: string;
/**手机号码*/
mobile: string;
/**姓名*/
name: string;
/**关联用户表的ID*/
userId: number;
}
/**ChannelQueryVO*/
export interface ChannelQueryVO {
/**城市*/
city: string;
/**行政区*/
county: string;
/**信用代码*/
creditCode: string;
/**周期城市编码*/
cycleCity: string;
/**事业部ID*/
departmentOrgId: number;
/**跟进人*/
followUserId: number;
/**录入人*/
inputUser: number;
/**名称*/
name: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**省份*/
province: string;
/**简称*/
shortName: string;
/**状态(DRAFT-草稿、ToBeConfirmed-待确认、Confirmed-已确认、PASS-已审核、Changing-变更中)*/
status: string;
}
/**ChannelRecordChangeVO*/
export interface ChannelRecordChangeVO {
/**渠道ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**处理时间(yyyy-MM-dd HH:mm:ss)*/
operateTime: string;
/**操作*/
operation: string;
/**处理人*/
operator: number;
/**处理人岗位*/
operatorJobName: string;
/**处理人姓名*/
operatorName: string;
/**处理意见*/
remark: string;
/**结果(Revoke-撤回、Confirm-确认、Pass-通过、Reject-驳回)*/
result: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelRecordVO*/
export interface ChannelRecordVO {
/**渠道ID*/
channelId: number;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**ID*/
id: number;
/**处理时间(yyyy-MM-dd HH:mm:ss)*/
operateTime: string;
/**操作*/
operation: string;
/**处理人*/
operator: number;
/**处理人岗位*/
operatorJobName: string;
/**处理人姓名*/
operatorName: string;
/**处理意见*/
remark: string;
/**结果(Revoke-撤回、Confirm-确认、Pass-通过、Reject-驳回)*/
result: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelRegistUserBaseVO*/
export interface ChannelRegistUserBaseVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**附件信息*/
channelAttachments: ChannelAttachmentBaseVO[];
/**渠道银行账号信息*/
channelBanks: ChannelBankBaseVO[];
/**渠道所在城市*/
city: string;
/**公司名称*/
companyName: string;
/**渠道所在行政区*/
county: string;
/**信用代码*/
creditCode: string;
/**电子邮箱*/
email: string;
/**undefined*/
followUserId: number;
/**身份证号码*/
identityCode: string;
/**邀请码*/
invitationCode: string;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**手机号码*/
mobile: string;
/**渠道所在省份*/
province: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
/**姓名*/
username: string;
}
/**ChannelRegistUserQueryVO*/
export interface ChannelRegistUserQueryVO {
/**渠道商ID*/
channelId: number;
/**公司名称*/
companyName: string;
/**邀请码*/
invitationCode: string;
/**手机号码*/
mobile: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**姓名*/
username: string;
}
/**ChannelRegistUserVO*/
export interface ChannelRegistUserVO {
/**渠道商ID*/
channelId: number;
/**公司名称*/
companyName: string;
/**ID*/
id: number;
/**手机号码*/
mobile: string;
/**注册日期(yyyy-MM-dd)*/
registTime: string;
/**姓名*/
username: string;
}
/**ChannelSupplierManagementAttachment*/
export interface ChannelSupplierManagementAttachment {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**文件ID*/
fileId: string;
/**文件名*/
fileName: string;
/**ID*/
id: number;
/**类型*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelSupplierManagementAttachmentVO*/
export interface ChannelSupplierManagementAttachmentVO {
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**已删除*/
deleted: number;
/**文件ID*/
fileId: string;
/**文件名*/
fileName: string;
/**ID*/
id: number;
/**类型*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**ChannelUpdateBaseVO*/
export interface ChannelUpdateBaseVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**附件信息*/
channelAttachments: ChannelAttachmentBaseVO[];
/**渠道银行账号信息*/
channelBanks: ChannelBankBaseVO[];
/**渠道负责人信息*/
channelPersons: ChannelPersonBaseVO[];
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**统一社会信用代码*/
creditCode: string;
/**跟进人*/
followUserId: number;
/**ID*/
id: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**1保存2提交*/
operateType: number;
/**渠道所在省份*/
province: string;
/**企业概况*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
}
/**ChannelVO*/
export interface ChannelVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**创建时间(yyyy-MM-dd HH:mm:ss)*/
createTime: string;
/**创建用户*/
createUser: number;
/**统一社会信用代码*/
creditCode: string;
/**已删除*/
deleted: number;
/**跟进人*/
followUserId: number;
/**跟进人*/
followUserName: string;
/**ID*/
id: number;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**公司名称*/
name: string;
/**渠道所在省份*/
province: string;
/**企业概况*/
remark: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**是否跳过平台文员审核*/
skipPlatformClerk: string;
/**状态(DRAFT-草稿、ToBeConfirmed-待确认、Confirmed-已确认、PASS-已审核、Changing-变更中)*/
status: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
/**更新时间(yyyy-MM-dd HH:mm:ss)*/
updateTime: string;
/**更新用户*/
updateUser: number;
}
/**DealChannelAgentQueryVO*/
export interface DealChannelAgentQueryVO {
/**渠道商ID*/
channelId: number;
/**姓名*/
name: string;
/**(必填)当前页*/
pageNum: number;
/**(必填)每页条数*/
pageSize: number;
/**状态(Valid-有效、Invalid-无效)*/
status: string;
}
/**FlowComment*/
export interface FlowComment {
/**事项id*/
affairId: number;
/**审核时间(yyyy-MM-dd HH:mm:ss)*/
auditTime: string;
/**审核类型*/
auditType: string;
/**审核类型名称*/
auditTypeDesc: string;
/**审核用户id*/
auditUserId: number;
/**审核用户姓名*/
auditUserName: string;
/**审核意见内容*/
content: string;
/**部门id*/
departmentId: number;
/**部门名称*/
departmentName: string;
/**拓展属性1*/
extAttr1: string;
/**拓展属性2*/
extAttr2: string;
/**拓展属性3*/
extAttr3: string;
/**id*/
id: number;
/**节点名称*/
nodeName: string;
/**节点用户*/
nodeUserName: string;
/**组织id*/
orgId: number;
/**组织名称*/
orgName: string;
/**岗位id*/
postId: number;
/**岗位名称*/
postName: string;
/**流程id*/
summaryId: number;
}
/**OaAttachmentVO*/
export interface OaAttachmentVO {
/**文件ID*/
fileId: string;
/**文件名称*/
fileName: string;
/**文件类型(Specially-特批入库材料、SupplierList-供应商名录)*/
type: string;
}
/**OaFlowInfoModel*/
export interface OaFlowInfoModel {
/**OA流程审批日志*/
commentList: FlowComment[];
/**OA流程状态枚举(Process-处理中、Pass-通过、NoPass-不通过)*/
stateEnum: string;
/**OA流程ID*/
summaryId: number;
}
/**RegistUserUpdateChannelVO*/
export interface RegistUserUpdateChannelVO {
/**营业住所*/
address: string;
/**营业期限*/
businessTime: string;
/**注册资本*/
capital: string;
/**附件信息*/
channelAttachments: ChannelAttachmentBaseVO[];
/**渠道银行账号信息*/
channelBanks: ChannelBankBaseVO[];
/**渠道商ID*/
channelId: number;
/**渠道所在城市*/
city: string;
/**渠道所在行政区*/
county: string;
/**法人身份证号码*/
legalIdentityCode: string;
/**法人代表*/
legalPerson: string;
/**渠道所在省份*/
province: string;
/**成立日期(yyyy-MM-dd)*/
setupTime: string;
/**简称*/
shortName: string;
/**公司类型(limitedLiabilityCompany-有限责任公司（自然人投资或控股）、CompanyLimitedByShares-股份有限公司、IndividualIndustrial-个体工商户)*/
type: string;
}
/**batchDeleteListVO*/
export interface batchDeleteListVO {
/**渠道商ID*/
channelId: number;
/**要删除的ID集合*/
ids: number[];
}
