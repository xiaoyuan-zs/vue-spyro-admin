// 粒子动画
import { loadSlim } from 'tsparticles-slim';

export const useParticles = () => {
	const particlesInit = async (engine) => {
		await loadSlim(engine);
	};

	const particlesLoaded = async (container) => {
		console.log('Particles container loaded success', container);
	};

	return {
		particlesInit,
		particlesLoaded
	};
};
