<script>
	import logo from '../../assets/img/logo/bash.svg';
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	
	<div class="relative py-16 bg-gradient-to-br  bg-primary text-primary-content min-h-screen">
		<div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
			<div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
				<div class="rounded-xl bg-white shadow-xl">
					<div class="p-6 sm:p-16">
						<div class="space-y-4">
							<img src={logo} loading="lazy" class="w-10" alt="tailus logo">
							<h2 class="mb-8 text-2xl text-cyan-900 font-bold">UJIAN <br> LINTAS STUDI
							</h2>
						</div>
						<div class="mt-16 grid space-y-4">

							<div class="form-control">
								<label class="label">
									<span class="label-text">Email / Username</span>
								</label>
								<input  name="username" type="text"
									placeholder="username" class="input input-bordered input-secondary" />
								<div class="text-xs text-red-600 mt-1">
									error
								</div>
							</div>
							<div class="form-control">
								<label class="label">
									<span class="label-text">Password</span>
								</label>
								<input  name="password"
									type="password" placeholder="password"
									class="input input-bordered input-secondary" />
								<div class="text-xs text-red-600 mt-1">
									error
								</div>
							</div>
							<div class="form-control mt-6">
								<a href="/lintas/dashboard" class="btn btn-primary w-full">Login</a>
							</div>
						</div>

						<!-- <div class="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
							<p class="text-xs">Copyright © 2023
								- <strong>v.1</strong>.23.07.27
							</p>

						</div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
