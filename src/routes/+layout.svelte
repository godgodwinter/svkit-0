<script>
	import Header from './Header.svelte';
	import './styles.css';
  	import "./app.css";
</script>

<div >
	<Header/>
 <!-- <div>Ini layout Utama</div> -->
	<main >
		<slot />
	</main>
</div>
