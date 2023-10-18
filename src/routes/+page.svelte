<script lang="ts">
	import { getContext } from 'svelte';
	import * as d3 from 'd3';
	import ChartStats from '$lib/components/ui/ChartStats.svelte';

	const chartData: any = getContext('csvData');

	const width = 960;
	const height = 500;
	const centerX = width / 2;
	const centerY = height / 2;
	const pieArc: any = d3.arc().innerRadius(width).outerRadius(2);

	/* const handleAdd = () =>
		dataStore.update({
			Specification: 'CSS Level 1',
			Keyword: 'black',
			'RGB hex value': '#000000'
		}); */
	//$: console.log('chart data: ', $chartData.csvData);
</script>

<svg {height} {width}>
	<g transform={`translate(${centerX}, ${centerY})`}>
		{#each d3.pie().value(1)($chartData.csvData) as item}
			<path fill={item.data['RGB hex value']} d={pieArc(item)} />
		{/each}
	</g>
</svg>
<ChartStats
	dataSize={Math.round(d3.csvFormat($chartData.csvData).length / 1024)}
	numberOfItems={$chartData.csvData.length}
	numberOfColumns={$chartData.csvData.columns.length}
/>
<!-- <div><button on:click={handleAdd}>Hello</button></div> -->
