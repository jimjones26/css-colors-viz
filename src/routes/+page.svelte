<script lang="ts">
	import { mousePositionStore } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import * as d3 from 'd3';

	const rawData: any = getContext('csvData');

	$: parsedData = d3.csvParse($rawData.csvData);

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

<!-- <div>{JSON.stringify(Math.round(data?.data.length / 1024))} kb</div>
<div>{JSON.stringify(parsedData.length)} items</div>
<div>{JSON.stringify(parsedData.columns.length)} columns</div>
 -->

<div>{JSON.stringify(Math.round($rawData.csvData.length / 1024))} kb</div>
<div>{JSON.stringify(parsedData.length)} items</div>
<div>{JSON.stringify(parsedData.columns.length)} columns</div>

{JSON.stringify($rawData.csvData)}
