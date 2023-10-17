<script lang="ts">
	import type { LayoutData } from './$types';
	import { dataStore } from '$lib/stores/data-store';
	import { setContext } from 'svelte';

	export let data: LayoutData;

	$: dataStore.set(data.data);

	setContext('csvData', dataStore);
</script>

<slot />
