<script>
    
import Api from "../../../../axios/axios";

let data={};
let dataAsli ={};;
let isLoading = true;
let isError = false;


isLoading = false

const onSubmit = async (values) => {
    console.log(values);
    // const resSubmit = await ApiKategori.doStoreData(values);
    let dataSend = {
        nama: values.nama,
    }
    const resSubmit = await Api.put(`admin/supplier/${supplier_id}`, dataSend);
    if (resSubmit) {
        Toast.success("Info", "Data berhasil ditambahkan!");
        router.push({ name: "admin-supplier" });
    }
};

const getData = async () => {
    console.log('1');
    try {
        console.log('2');
        isLoading = true;
        const response = await Api.get(`admin/supplier/`);
        console.log(response);
        data = response.data;
        dataForm.nama = data.nama
        console.log(data);
        isLoading = false;
    } catch (error) {
        isLoading = false;
        isError = true;
        // Toast.danger("Warning", "Data Gagal dimuat");
        console.error(error);
    }
};
getData();


let a = 0;
    let b = 0;
    let total = 0;

    async function add() {
        const response = await fetch('/lintas/dashboard', {
            method: 'POST',
            body: JSON.stringify({ a, b }),
            headers: {
                'content-type': 'application/json'
            }
        });

        total = await response.json();
    }
</script>
<div>
    Ini dashboard lintas
    
<input type="number" bind:value={a}> +
<input type="number" bind:value={b}> =
{total}

<button on:click={add}>Calculate</button>
</div>