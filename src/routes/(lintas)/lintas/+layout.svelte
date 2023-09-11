<script>
	import { goto } from '$app/navigation';
import { browser } from "$app/environment";
  // import { redirect } from '@sveltejs/kit';

import { siswa_token } from '../../../stores/dataUser.js';
import Api from "../../../axios/axios.js";
  import { onDestroy } from 'svelte';
  import { notifications } from '../../../components/Toast/notifications.js';
// import ApiSiswa from "../../../axios/axiosSiswa";
const doCheckToken = async (token) => {
  try {
    console.log(token);
    console.log(token==null||token==undefined||token=='null');
    if(token==null||token==undefined||token=='null'){
        // notifications.info('Login Terlebih dahulu!', 2000)
        goto('/')
        // redirect(307, '/');
    }
  } catch (error) {
    // Toast.danger("Error", `Gagal menghubungkan ke Server!`);
    console.error(error);
    return false;
  }
};

let token;

// Subscribe ke nilai siswa_token
const unsubscribe = siswa_token.subscribe((value) => {
  token = value;
});

// Unsubscribe dari store saat komponen dihancurkan
onDestroy(() => {
  unsubscribe();
});
// console.log(token);
doCheckToken(token);


// Untuk menghapus data dari store dan local storage
function hapusToken() {
  siswa_token.set(null); // Menghapus data dari store
  if (browser) {
    localStorage.removeItem("siswa_token"); // Menghapus data dari local storage jika di browser
  }
}

// Untuk mengubah data dalam store dan local storage
function ubahToken(namaTokenBaru) {
  siswa_token.set(namaTokenBaru); // Mengubah data dalam store
  if (browser) {
    localStorage.setItem("siswa_token", namaTokenBaru); // Mengubah data dalam local storage jika di browser
  }
}
const do_logout = ()=>{
  hapusToken()
  goto('/')
}
</script>
<div>
  <button on:click={do_logout} class="btn btn-warning">Logout</button>
    Ini layout lintas
    <slot></slot>
</div>