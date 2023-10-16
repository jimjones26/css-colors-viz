<script lang="ts">
	import { mousePositionStore } from '$lib/stores';
	import type { PageData } from './$types';

	export let data: PageData;

	const width = 960;
	const height = 500;

	const circleX = width / 2;
	const circleY = height / 2;
	const circleRadius = 30;

	const initialMousePosition = { x: width / 2, y: height / 2 };

	mousePositionStore.hydrate(initialMousePosition);

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		console.log({ clientX, clientY });
	};
</script>

<svg {width} {height} on:mousemove={handleMouseMove} role="presentation">
	<circle cx={circleX} cy={circleY} r={circleRadius} />
</svg>

{data.data}
