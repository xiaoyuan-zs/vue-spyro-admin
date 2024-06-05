import systemLogo from '@/assets/icons/logo.svg?raw';

export function setupLoading() {
	const title = import.meta.env.VITE_APP_TITLE;

	const logoWithClass = systemLogo.replace('<svg', `<svg style="font-size: 5px; color: red"`);

	const loading = `
    <div class="fixed-center flex-col-center">
      <div class="sw:logo w-10 h-10" style="color: red;"></div>
      <div class="w-14 h-14 my-9">
        <div class="relative h-full animate-spin">
            <div class="i-svg-spinners:bars-scale-middle w-10 h-10" style="color: red;"></div>
        </div>
      </div>
      <h2 class="text-10 font-700 text-primary">${title}</h2>
    </div>`;

	const app = document.getElementById('app');
	if (app) {
		app.innerHTML = loading;
	}
}
