import request from '@/utils/request';
import { MenuDTO, MenuTreeDTO } from './types';
const baseUrl = '/system/menu';

/**
 * 菜单列表
 * @param params
 * @returns
 */
export const getMenuList = (params: PageRequest) => {
	return request<MenuDTO[]>({
		url: baseUrl + '/list',
		method: 'get',
		params
	});
};

/**
 * 菜单新增
 * @param data
 * @returns
 */
export const addMenu = (data: MenuDTO) => {
	return request<void>({
		url: baseUrl,
		method: 'post',
		data
	});
};

/**
 * 菜单修改
 * @param data
 * @returns
 */
export const editMenu = (data: MenuDTO) => {
	return request<void>({
		url: baseUrl,
		method: 'put',
		data
	});
};

/**
 * 根据菜单编号获取详细信息
 * @param data
 * @returns
 */
export const getMenuInfoById = (menuId: number) => {
	return request<MenuDTO>({
		url: baseUrl + `/${menuId}`,
		method: 'get'
	});
};

/**
 * 删除菜单
 * @param menuId
 * @returns
 */
export const deleteMenuById = (menuId: number) => {
	return request<void>({
		url: baseUrl + `/${menuId}`,
		method: 'delete'
	});
};

/**
 * 获取菜单下拉树列表
 * @param params
 * @returns
 */
export const menuTreeselect = (params?: PageRequest) => {
	return request<MenuTreeDTO[]>({
		url: baseUrl + '/treeselect',
		method: 'get',
		params
	});
};
