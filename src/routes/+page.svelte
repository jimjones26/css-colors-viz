<script lang="ts">
	import { getContext } from 'svelte';
	import * as d3 from 'd3';
	import ChartStats from '$lib/components/ui/ChartStats.svelte';

	const chartData: any = getContext('csvData');

	/* const handleAdd = () =>
		dataStore.update({
			Specification: 'CSS Level 1',
			Keyword: 'black',
			'RGB hex value': '#000000'
		}); */

	const width = 960;
	const height = 500;

	//$: console.log('chart data: ', $chartData.csvData);
</script>

<ChartStats
	dataSize={Math.round(d3.csvFormat($chartData.csvData).length / 1024)}
	numberOfItems={$chartData.csvData.length}
	numberOfColumns={$chartData.csvData.columns.length}
/>
<!-- <div><button on:click={handleAdd}>Hello</button></div> -->
