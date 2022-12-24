<script lang="ts">
	import '@shoelace-style/shoelace/dist/themes/light.css';
	import '@shoelace-style/shoelace/dist/components/button/button.js';
	import '@shoelace-style/shoelace/dist/components/icon/icon.js';
	import '@shoelace-style/shoelace/dist/components/input/input.js';
	import '@shoelace-style/shoelace/dist/components/rating/rating.js';
	import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
	import '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
	import '@shoelace-style/shoelace/dist/components/radio-button/radio-button.js';
	import '@shoelace-style/shoelace/dist/components/radio/radio.js';

	import TodoCanvas from './TodoCanvas.svelte';




	import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

	setBasePath('/dist/shoelace');

	import {drawerScript} from './shoelace-modules/drawer.js';


	


</script>

<main>
	

<TodoCanvas ></TodoCanvas>
	


</main>



<style>
	main {
		max-width:800px;
		padding: 1em;
		margin: 0 auto;
	}


	@media (min-width: 640px) {
		main {
			max-width: 800px;
		}
	}


</style>