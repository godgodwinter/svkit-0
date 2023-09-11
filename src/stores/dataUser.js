import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const siswa_token = writable(
  (browser && localStorage.getItem("siswa_token")) || null
);
siswa_token.subscribe((val) => {
  if (browser) return (localStorage.siswa_token = val);
});
