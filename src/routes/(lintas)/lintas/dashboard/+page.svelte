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
</script>
<div>
    Ini dashboard lintas
</div>