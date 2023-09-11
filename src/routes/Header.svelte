<script>
	import { page } from '$app/stores';
	// import logo from '$lib/images/svelte-logo.svg';
	import logo from '../assets/img/logo/bash.svg';
	// import github from '$lib/images/github.svg';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
	  <div class="dropdown">
		<label tabindex="0" class="btn lg:hidden btn-outline btn-primary">
			<img src={logo} alt="logo" width="80px" height="80px">
		</label>
		<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
		  <li><a href="/">Home</a></li>
		  <li>
			<a>Parent</a>
			<ul class="p-2">
			  <li><a>Submenu 1</a></li>
			  <li><a>Submenu 2</a></li>
			</ul>
		  </li>
		  <li><a>Item 3</a></li>
		</ul>
	  </div>
	  <img src={logo} alt="logo" width="80px" height="80px" class="hidden lg:block">
	  <!-- <a class="btn btn-ghost normal-case text-xl">daisyUI</a> -->
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal px-1">
		<li><a  href="/">HOME</a></li>
		<!-- <li tabindex="0">
		  <details>
			<summary>Parent</summary>
			<ul class="p-2">
			  <li><a>Submenu 1</a></li>
			  <li><a>Submenu 2</a></li>
			</ul>
		  </details>
		</li> -->
		<li><a  href="/lintas">UJIAN LINTAS STUDI</a></li>
		<li><a  href="/hspq">UJIAN HSPQ</a></li>
		<li><a  href="/ist">UJIAN IST</a></li>
		<li><a  href="/404">404</a></li>
	  </ul>
	</div>
	<div class="navbar-end">
	  <!-- <a class="btn">Button</a> -->
	</div>
  </div>