// --- FUNGSI MENDAPATKAN HARGA PAKET ---
function ambilHargaPaket(namaPaket) {
    if (namaPaket == "paket1") {
        return 500000;
    } else if (namaPaket == "paket2") {
        return 15000;
    } else if (namaPaket == "paket3") {
        return 20000;
    } else if (namaPaket == "paket4") {
        return 10000;
    } else if (namaPaket == "paket5") {
        return 35000;
    } else if (namaPaket == "paket6") {
        return 25000;
    } else {
        return 0;
    }
}


// --- FUNGSI MENGHITUNG DAN MENAMPILKAN HARGA ---
function hitungHarga() {
    var paketDipilih = document.getElementById("paket").value;
    var jumlahTiket = Number(document.getElementById("jumlah").value);

    if (jumlahTiket < 1) {
        jumlahTiket = 1;
    }

    var hargaSatuan = ambilHargaPaket(paketDipilih);
    var totalHarga = hargaSatuan * jumlahTiket;

    if (hargaSatuan == 0) {
        document.getElementById("price_value").innerText = "-";
    } else {
        document.getElementById("price_value").innerText = "Rp " + hargaSatuan;
    }

    document.getElementById("quantity_value").innerText = jumlahTiket;

    if (totalHarga == 0) {
        document.getElementById("total_value").innerText = "-";
    } else {
        document.getElementById("total_value").innerText = "Rp " + totalHarga;
    }

    document.getElementById("price_input").value = hargaSatuan;
    document.getElementById("total_input").value = totalHarga;
}


// --- FUNGSI MENAMPILKAN INFORMASI CARA BAYAR ---
function tampilkanInfoPembayaran() {
    var metodeBayar = document.getElementById("payment").value;
    var kotakInfo = document.getElementById("payment_info");

    if (metodeBayar == "transfer") {
        kotakInfo.innerHTML = "Silakan transfer ke <strong>BNI 123-456-789 a.n. Gunungkidul Explore</strong>. Konfirmasi via email setelah transfer.";
    } else if (metodeBayar == "gopay") {
        kotakInfo.innerText = "Buka aplikasi GoPay Anda dan selesaikan pembayaran saat checkout.";
    } else if (metodeBayar == "ovo") {
        kotakInfo.innerText = "Buka aplikasi OVO Anda dan selesaikan pembayaran saat checkout.";
    } else if (metodeBayar == "dana") {
        kotakInfo.innerText = "Buka aplikasi DANA Anda dan selesaikan pembayaran saat checkout.";
    } else if (metodeBayar == "cod") {
        kotakInfo.innerText = "Bayar di lokasi (Cash on Arrival). Pastikan membawa bukti pemesanan.";
    } else {
        kotakInfo.innerText = "";
    }
}


// --- FUNGSI VALIDASI SEBELUM FORM DIKIRIM ---
function validasiForm() {
    var harga = Number(document.getElementById("price_input").value);
    var total = Number(document.getElementById("total_input").value);
    var metodeBayar = document.getElementById("payment").value;

    if (harga == 0 || total == 0) {
        alert("Silakan pilih paket wisata terlebih dahulu.");
        return false;
    }

    if (metodeBayar == "") {
        alert("Silakan pilih metode pembayaran.");
        return false;
    }

    alert("Pemesanan berhasil! Total yang harus dibayar: Rp " + total + ". Metode: " + metodeBayar.toUpperCase());
    return true;
}


// --- MENGHUBUNGKAN FUNGSI KE HALAMAN ---
window.onload = function () {
    document.getElementById("paket").onchange = hitungHarga;
    document.getElementById("jumlah").oninput = hitungHarga;
    document.getElementById("payment").onchange = tampilkanInfoPembayaran;
    document.forms["pemesanan"].onsubmit = validasiForm;

    hitungHarga();
    tampilkanInfoPembayaran();
};