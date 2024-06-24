import { ElNotification, type FormInstance, type FormRules } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '@/store';
import type { LoginParams } from '@/api/login/types';

export const useLoginForm = () => {
	const { t } = useI18n();
	const ruleFormRef = ref<FormInstance>();
	const router = useRouter();
	const route = useRoute();
	const userStore = useUserStore();
	const rules = reactive<FormRules<LoginParams>>({
		username: [{ required: true, message: t(`login.usernamePlaceholder`), trigger: 'blur' }],
		password: [{ required: true, message: t(`login.passwordPlaceholder`), trigger: 'blur' }]
	});

	const loginForm = reactive<LoginParams>({
		username: 'admin',
		password: 'admin123'
	});

	// 记住密码
	let rememberPassword = ref(false);
	// 验证码开关
	let captchaEnabled = ref(false);

	// 登录提交
	const submitForm = async (formEl: FormInstance | undefined) => {
		if (!formEl) return;
		await formEl.validate(async (valid) => {
			if (valid) {
				await userStore.loginAction(loginForm);
				rememberPass();
				// "??" 运算符只会在左侧的值为 null 或 undefined 时返回默认值
				router.replace((route.query?.redirect ?? '/') as string);
				ElNotification({
					title: '登录成功',
					type: 'success',
					message: `欢迎回来！${userStore.nickname}`
				});
			} else {
				throw new Error('校验失败');
			}
		});
	};

	// 记住密码
	const rememberPass = () => {
		// const { username, password } = loginForm;
		// if (rememberPassword.value) {
		// 	setCookie('username', rsaEncrypt(username), 30);
		// 	setCookie('password', rsaEncrypt(password), 30);
		// 	setCookie('rememberPassword', rememberPassword.value + '', 30);
		// } else {
		// 	removeCookie('username');
		// 	removeCookie('password');
		// 	removeCookie('rememberPassword');
		// }
	};

	// 读取账号密码
	const readCookie = () => {
		// const username = getCookie('username');
		// const password = getCookie('password');
		// const remember = getCookie('rememberPassword');
		// if (username) loginForm.username = rsaDecrypt(username);
		// if (username) loginForm.password = rsaDecrypt(password);
		// if (username) rememberPassword.value = !!remember;
	};

	onMounted(() => {
		readCookie();
	});

	return {
		ruleFormRef,
		rules,
		loginForm,
		rememberPassword,
		captchaEnabled,
		submitForm
	};
};
