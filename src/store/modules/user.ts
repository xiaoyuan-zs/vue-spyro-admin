import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
	state: () => ({
		token: '123'
	}),
	actions: {}
});
