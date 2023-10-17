<script lang="ts">
	import { mousePositionStore } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import * as d3 from 'd3';
	import { dataStore } from '$lib/stores/data-store';
	import ChartStats from '$lib/components/ui/ChartStats.svelte';

	const chartData: any = getContext('csvData');

	const handleAdd = () =>
		dataStore.update({
			Specification: 'CSS Level 1',
			Keyword: 'black',
			'RGB hex value': '#000000'
		});

	const width = 960;
	const height = 500;

	const circleRadius = 20;

	const initialMousePosition = { x: width / 2, y: height / 2 };

	onMount(() => mousePositionStore.hydrate(initialMousePosition));

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event;
		mousePositionStore.update(clientX, clientY);
	};

	$: console.log('chart data: ', $chartData.csvData);
</script>

<div>
	<svg {width} {height} on:mousemove={handleMouseMove} role="presentation">
		<circle cx={$mousePositionStore.clientX} cy={$mousePositionStore.clientY} r={circleRadius} />
	</svg>
</div>
<div><button on:click={handleAdd}>Hello</button></div>

<ChartStats
	dataSize={Math.round(d3.csvFormat($chartData.csvData).length / 1024)}
	numberOfItems={$chartData.csvData.length}
	numberOfColumns={$chartData.csvData.columns.length}
/>
