<script lang="ts">
	import { mousePositionStore } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import * as d3 from 'd3';
	import { dataStore } from '$lib/stores/data-store';

	const rawData: any = getContext('csvData');
	$: parsedData = d3.csvParse($rawData.csvData);

	const handleAdd = () => dataStore.update('\nCSS Level 1,black,#000000');

	const width = 960;
	const height = 500;

	const circleRadius = 20;

	const initialMousePosition = { x: width / 2, y: height / 2 };

	onMount(() => mousePositionStore.hydrate(initialMousePosition));

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		mousePositionStore.update(clientX, clientY);
	};

	$: console.log('parsed data: ', parsedData);
</script>

<div>
	<svg {width} {height} on:mousemove={handleMouseMove} role="presentation">
		<circle cx={$mousePositionStore.clientX} cy={$mousePositionStore.clientY} r={circleRadius} />
	</svg>
</div>
<div><button on:click={handleAdd}>Hello</button></div>
<div>{JSON.stringify(Math.round($rawData.csvData.length / 1024))} kb</div>
<div>{JSON.stringify(parsedData.length)} items</div>
<div>{JSON.stringify(parsedData.columns.length)} columns</div>
