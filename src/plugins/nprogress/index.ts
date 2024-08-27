import Nprogress from 'nprogress';
// nprogress
import 'nprogress/nprogress.css';

Nprogress.configure({
	minimum: 0.3, // 初始化时的最小百分比
	showSpinner: false, // 关闭右侧转动的小圈
	easing: 'linear', // CSS3缓冲动画字符串 如 ease、linear、ease-in、ease-out、ease-in-out、cubic-bezier
	speed: 500, // 递增进度条的速度
	trickleSpeed: 200 // 自动递增间隔
});

export const start = () => {
	Nprogress.start();
};

export const done = () => {
	Nprogress.done();
};
