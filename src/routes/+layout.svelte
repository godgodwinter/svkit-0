<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div >
	<Header/>
 <div>Ini layout Utama</div>
	<main>
		<slot />
	</main>
</div>
