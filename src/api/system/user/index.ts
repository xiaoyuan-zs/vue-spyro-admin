import request from '@/utils/request';
import { UserDTO, UserInfoDTO } from './types';
import { DeptTreeType } from '@/api/system/dept/types';
const baseUrl = '/system/user';

/**
 * 用户列表
 * @param params
 * @returns
 */
export const getUserList = (params: PageRequest) => {
	return request<UserDTO[]>({
		url: baseUrl + '/list',
		method: 'get',
		params
	});
};

/**
 * 新增用户
 * @param data
 * @returns
 */
export const addUser = (data: UserDTO) => {
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
export const editUser = (data: UserDTO) => {
	return request<null>({
		url: baseUrl,
		method: 'put',
		data
	});
};

/**
 * 状态修改
 * @param data
 * @returns
 */
export const changeUserStatus = (data: UserDTO) => {
	return request<void>({
		url: baseUrl + `/changeStatus`,
		method: 'put',
		data
	});
};

/**
 * 根据用户编号获取详细信息
 * @param userId
 * @returns
 */
export const getUserInfoByUserId = (userId: number) => {
	return request<UserInfoDTO>({
		url: baseUrl + '/' + userId,
		method: 'get'
	});
};

/**
 * 根据用户编号获取授权角色
 * @param userId
 * @returns
 */
export const getUserAuthRoleByUserId = (userId: string) => {
	return request<UserInfoDTO>({
		url: baseUrl + `/authRole/${userId}`,
		method: 'get'
	});
};

/**
 * 用户授权角色
 * @param userId
 * @param roleIds
 * @returns
 */
export const insertAuthRole = (userId: number, roleIds: string) => {
	return request<void>({
		url: baseUrl + `/authRole`,
		method: 'put',
		params: {
			userId,
			roleIds
		}
	});
};

/**
 * 删除用户
 * @param userIds
 * @returns
 */
export const removeUserById = (userIds: number[]) => {
	return request<UserInfoDTO>({
		url: baseUrl + '/' + userIds,
		method: 'delete'
	});
};

/**
 * 获取部门树列表
 * @param params
 * @returns
 */
export const getDeptTree = (params?: PageRequest) => {
	return request<DeptTreeType[]>({
		url: baseUrl + '/deptTree',
		method: 'get',
		params
	});
};
