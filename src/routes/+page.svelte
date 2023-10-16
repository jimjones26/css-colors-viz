<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const width = 960;
	const height = 500;

	const circleX = width / 2;
	const circleY = height / 2;
	const circleRadius = 30;

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		console.log({ clientX, clientY });
	};
</script>

<svg {width} {height} on:mousemove={handleMouseMove} role="presentation">
	<circle cx={circleX} cy={circleY} r={circleRadius} />
</svg>

{data.data}
