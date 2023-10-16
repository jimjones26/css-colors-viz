<script lang="ts">
	import { mousePositionStore } from '$lib/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const width = 960;
	const height = 500;

	const circleRadius = 20;

	const initialMousePosition = { x: width / 2, y: height / 2 };

	onMount(() => mousePositionStore.hydrate(initialMousePosition));

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		mousePositionStore.update(clientX, clientY);
	};
</script>

<svg {width} {height} on:mousemove={handleMouseMove} role="presentation">
	<circle cx={$mousePositionStore.clientX} cy={$mousePositionStore.clientY} r={circleRadius} />
</svg>

{data.data}
