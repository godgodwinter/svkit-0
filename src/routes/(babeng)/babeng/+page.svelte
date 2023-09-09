<script>
	import ExButton from "../../../components/Button/ExButton.svelte";
  import { count } from './stores.js';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Mendapatkan nilai count dari store
  let countValue;
  count.subscribe(value => {
    countValue = value;
  });

  // Fungsi yang akan dipanggil saat tombol diklik
  function increment() {
    count.update(n => n + 1);
  }
  
  let condition=true;
  const do_transition = ()=>{
	condition=!condition;
  }
</script>
<svelte:head>
	<title>Babeng</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<ExButton/>
	<h1>Babeng Pages</h1>
	<h1>Counter</h1>
	<p>Jumlah Klik: {countValue}</p>
	<button on:click={increment}>Klik Saya</button>

	
	<button on:click={do_transition}>Klik Transisi</button>
{#if condition}
<div transition:slide={{ delay: 250, duration: 1300, easing: quintOut, axis: 'x' }}>
  slides in and out horizontally
</div>
{/if}

</div>
