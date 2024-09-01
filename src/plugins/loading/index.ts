// @unocss-include
// 告诉 UnoCSS 扫描该文件，从而识别 unocss 类名
// TODO 带改成模板形式
import { localForage } from '@spyro/utils';
import { platformConfig } from '@/config';
export async function setupLoading() {
	// 获取主题颜色
	const themeColor = (await localForage().getItem('layout_theme')) ?? platformConfig.themeColor;
	// 设置 loading 主题颜色
	const html = document.documentElement as HTMLElement;
	html.style.setProperty('--primary-color', themeColor as string);

	// 获取 系统title
	const title = import.meta.env.VITE_APP_TITLE;

	const circleClass = `box-border absolute wh-full b-(6 solid transparent) content-[''] rounded-[100%]`;

	const circle = `
    <div class="box-border relative w-15 h-15 rounded-[100%] ">
        <div class="${circleClass} animate-spin b-t-loading"></div>
        <div class="${circleClass} animate-spin animate-alternate b-b-loading"></div>
      </div>
  `;

	const loading = `
    <div class="fixed-center flex-center bg-[#1D2139]">
      <div class="flex-col-center text-loading">
        <div class="font-bold text-40px pb-4">${title}</div>
        ${circle}
        <div class="py-4">正在加载资源...</div>
        <div class="text-sm">初次加载资源可能需要较多时间 请耐心等待</div>
      </div>
    </div>
  `;

	const app = document.getElementById('app');
	if (app) app.innerHTML = loading;
}
