import { localForage } from '@/utils/localforage';
import { platformConfig } from '@/config';
export function setupLoading() {
	// 获取主题颜色
	const themeColor = localForage().getItem('layout_theme') ?? platformConfig.themeColor;
	// 获取 系统title
	const title = import.meta.env.VITE_APP_TITLE;

	const loading = `
    <div class="fixed-center flex-col bg-[#1D2139]">
      <div class="">
        <div class="">${title}</div>
        <div class="box-content">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
        <div class="text-blue">正在加载资源...</div>
        <div class="">初次加载资源可能需要较多时间 请耐心等待</div>
      </div>
    </div>
  `;

	const app = document.getElementById('app');
	if (app) app.innerHTML = loading;
}
