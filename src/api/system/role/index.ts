import request from '@/utils/request';
import { RoleDTO, UserRoleDTO } from './types';
import { UserDTO } from '../types';
const baseUrl = '/system/role';

/**
 * 获取角色信息列表
 * @param params
 * @returns
 */
export const getRoleList = (params: PageRequest) => {
	return request<RoleDTO[]>({
		url: baseUrl + '/list',
		method: 'get'
	});
};

/**
 * 新增角色
 * @param data
 * @returns
 */
export const addRole = (data: RoleDTO) => {
	return request<null>({
		url: baseUrl,
		method: 'post',
		data
	});
};

/**
 * 修改用户
 * @param data
 * @returns
 */
export const editRole = (data: RoleDTO) => {
	return request<null>({
		url: baseUrl,
		method: 'put',
		data
	});
};

/**
 * 根据角色编号获取详细信息
 * @param roleId
 * @returns
 */
export const getRoleInfoById = (roleId: number) => {
	return request<RoleDTO>({
		url: baseUrl + `/${roleId}`,
		method: 'get'
	});
};

/**
 * 修改保存数据权限
 * @param data
 * @returns
 */
export const updateDataScope = (data: RoleDTO) => {
	return request<RoleDTO>({
		url: baseUrl + `/dataScope`,
		method: 'put',
		data
	});
};

/**
 * 状态修改
 * @param data
 * @returns
 */
export const changeRoleStatus = (data: RoleDTO) => {
	return request<void>({
		url: baseUrl + `/changeStatus`,
		method: 'put',
		data
	});
};

/**
 * 删除用户
 * @param roleIds
 * @returns
 */
export const removeRoleById = (roleIds: number[]) => {
	return request<void>({
		url: baseUrl + '/' + roleIds,
		method: 'delete'
	});
};

/**
 * 获取角色选择框列表
 * @returns
 */
export const getRoleOptionSelect = () => {
	return request<RoleDTO[]>({
		url: baseUrl + '/optionselect',
		method: 'get'
	});
};

/**
 * 查询已分配用户角色列表
 * @param params
 * @returns
 */
export const getAllocatedList = (params: PageRequest) => {
	return request<UserDTO[]>({
		url: baseUrl + '/authUser/allocatedList',
		method: 'get',
		params
	});
};

/**
 * 查询未分配用户角色列表
 * @param params
 * @returns
 */
export const getUnallocatedList = (params: PageRequest) => {
	return request<UserDTO[]>({
		url: baseUrl + '/authUser/unallocatedList',
		method: 'get',
		params
	});
};

/**
 * 取消授权用户
 * @param data
 * @returns
 */
export const cancelAuthUser = (data: UserRoleDTO) => {
	return request<UserDTO[]>({
		url: baseUrl + '/authUser/unallocatedList',
		method: 'put',
		data
	});
};

/**
 * 批量取消授权用户
 * @param roleId
 * @param userIds
 * @returns
 */
export const cancelAuthUserAll = (roleId: number, userIds: number[]) => {
	return request<UserDTO[]>({
		url: baseUrl + '/authUser/unallocatedList',
		method: 'put',
		params: {
			roleId,
			userIds
		}
	});
};

/**
 * 批量选择用户授权
 * @param roleId
 * @param userIds
 * @returns
 */
export const selectAuthUserAll = (roleId: number, userIds: number[]) => {
	return request<UserDTO[]>({
		url: baseUrl + '/authUser/selectAll',
		method: 'put',
		params: {
			roleId,
			userIds
		}
	});
};

/**
 * 批量选择用户授权
 * @param roleId
 * @returns
 */
export const getRoleDeptTreeselect = (roleId: number) => {
	return request<UserDTO[]>({
		url: baseUrl + `/deptTree/${roleId}`,
		method: 'get'
	});
};
