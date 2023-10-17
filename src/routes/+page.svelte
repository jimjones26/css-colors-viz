<script lang="ts">
	import { mousePositionStore } from '$lib/stores';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import * as d3 from 'd3';

	export let data: PageData;
	let parsedData = d3.csvParse(data.data);

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

<div>{JSON.stringify(Math.round(data?.data.length / 1024))} kb</div>
<div>{JSON.stringify(parsedData.length)} items</div>
<div>{JSON.stringify(parsedData.columns.length)} columns</div>
