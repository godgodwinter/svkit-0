<script>
	import Api from "../../axios/axios"
	import ApiNode from "../../axios/axiosNode"
	import logo from '../../assets/img/logo/bash.svg';
	import {
		goto
	} from '$app/navigation';
	import {
		notifications
	} from '../../components/Toast/notifications'
	const do_Toast = () => {
		toast('Hello Darkness!', {
			icon: '👏',
			style: 'border-radius: 200px; background: #333; color: #fff;'
		});
	}

	
const fn_getProfile = async () => {
  try {
    const response = await ApiNode.get("siswa/profile");
	console.log('====================================');
	console.log(response.data);
	console.log('====================================');
    // ujianstudiPagesStore.set_siswa_profile(response.data);
  } catch (error) {
    console.error(error);
    // Toast.danger("Warning", "Login gagal!");
  }
};

const fn_get_PeriksaUjianAktif = async () => {
  try {
    const response = await ApiNode.get(
      `studiv3/siswa/ujianstudi/vless/periksaUjianAktif`
    );
    console.log(response.hasOwnProperty("data"));
    if (response.hasOwnProperty("data")) {
      console.log(response);
    //   return response.data;
    } else {
      return null;
    }
  } catch (error) {
    // Toast.danger("Error", `Gagal menghubungkan ke Server!`);
    console.error(error);
    return false;
  }
};

	const fn_do_Login = async (username, password) => {
		try {
			// riskaa2461
			// zi5fym
			const response = await Api.post("siswa/auth/login", {
				email: username,
				password: password,
			});

			if (response.code === 200) {
				const {
					token
				} = response;
				localStorage.setItem("siswa_token", token);
				localStorage.setItem("siswa_isLogin", true);
				console.log("Login berhasil");
				//   siswaAuthStore.setToken(token);
				//   siswaAuthStore.setIsLogin(true);
				// let decoded = jwt_decode(token);
				//   storeAuth.commit("setDataAuth", decoded);
				// console.log(decoded);
				  await fn_getProfile();
				  await fn_get_PeriksaUjianAktif();
				// await getAspekDetail();
				// await timerStore.set_reset_timer_batas();
				// await timerStore.do_run_reset_timer()
				//   Toast.success("Success", "Login Berhasil!");
				notifications.success('Login Berhasil!', 2000)
				goto('/lintas/dashboard');
			} else {
				//   Toast.danger("Warning", "Login gagal!");
				notifications.danger('Login gagal!', 2000)
			}
			return true;
		} catch (error) {
			console.error(error);
			// Toast.danger("Warning", "Login gagal!");
			notifications.danger('Login gagal!', 2000)
		}
	}

	// 	let quantity = 0;
	//   function addToCart() {
	//     quantity = ++quantity;
	//   }
	//   $: remaining = 10 - quantity;
	import * as yup from 'yup';
	const schema = yup.object().shape({
		username: yup.string().required('Username harus diisi').min(3),
		password: yup.string().required('Password harus diisi').min(3)
	});

	let values = {};
	let errors = {};

	async function submitHandler() {
		try {
			// `abortEarly: false` to get all the errors
			await schema.validate(values, {
				abortEarly: false
			});
			// alert(JSON.stringify(values, null, 2));
			fn_do_Login(values.username, values.password);
			errors = {};
		} catch (err) {
			errors = extractErrors(err);
		}
	}

	function extractErrors(err) {
		return err.inner.reduce((acc, err) => {
			return {
				...acc,
				[err.path]: err.message
			};
		}, {});
	}
</script>
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>

	<!-- <button on:click="{addToCart}">Add To Cart</button>
	<div> quantity: {quantity}</div>
	<div>Remaining Inventory: {remaining}</div> -->
	<!-- <button on:click={() => notifications.danger('Wait a INFO...', 2000)}>
	info!
</button> -->
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

							<form on:submit|preventDefault={submitHandler}>
								<div class="form-control">
									<!-- svelte-ignore a11y-label-has-associated-control -->
									<label class="label">
										<span class="label-text">Email / Username</span>
									</label>
									<input name="username" type="text" placeholder="username"
										class="input input-bordered input-secondary" bind:value={values.username} />
									<div class="text-xs text-red-600 mt-1">
										{#if errors.username}{errors.username}{/if}
								</div>
							</div>
							<div class="form-control">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label class="label">
									<span class="label-text">Password</span>
								</label>
								<input  name="password"
									type="password" placeholder="password"
									class="input input-bordered input-secondary"  bind:value={values.password}/>
								<div class="text-xs text-red-600 mt-1">
									{#if errors.password}{errors.password}{/if}
								</div>
							</div>
							<div class="form-control mt-6">
								<button  class="btn btn-primary w-full" type="submit">Login</button>
							</div>
						</form>
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