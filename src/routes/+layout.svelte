<script>
	import Header from './Header.svelte';
	import './styles.css';
  	import "./app.css";
	import Toast from '../components/Toast/Toast.svelte'
</script>

<div >
	<Toast />
	<Header/>
 <!-- <div>Ini layout Utama</div> -->
	<main >
		<slot />
	</main>
</div>
