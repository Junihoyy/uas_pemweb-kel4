document.addEventListener('DOMContentLoaded', () => {
    const prices = {
        paket1: 500000,
        paket2: 15000,
        paket3: 20000,
        paket4: 10000,
        paket5: 35000,
        paket6: 25000
    };

    const paketSelect = document.getElementById('paket');
    const priceEl = document.getElementById('price_value');
    const priceInput = document.getElementById('price_input');
    const paymentSelect = document.getElementById('payment');
    const paymentInfo = document.getElementById('payment_info');
    const form = document.forms['pemesanan'];

    function formatRupiah(num) {
        return num.toLocaleString('id-ID');
    }

    function updatePrice() {
        const val = paketSelect.value;
        const price = prices[val] || 0;
        priceEl.textContent = price ? `Rp ${formatRupiah(price)}` : '-';
        priceInput.value = price;
    }

    function updatePaymentInfo() {
        const method = paymentSelect.value;
        if (!method) {
            paymentInfo.textContent = '';
            return;
        }
        if (method === 'transfer') {
            paymentInfo.innerHTML = `Silakan transfer ke <strong>BNI 123-456-789 a.n. Gunungkidul Explore</strong>. Konfirmasi via email setelah transfer.`;
        } else if (method === 'gopay' || method === 'ovo' || method === 'dana') {
            paymentInfo.innerHTML = `Pilih aplikasi dompet digital Anda (${method.toUpperCase()}) dan selesaikan pembayaran saat checkout.`;
        } else if (method === 'cod') {
            paymentInfo.innerHTML = `Bayar di lokasi (Cash on Arrival). Pastikan membawa bukti pemesanan.`;
        } else {
            paymentInfo.textContent = '';
        }
    }

    paketSelect.addEventListener('change', updatePrice);
    paymentSelect.addEventListener('change', updatePaymentInfo);

    form.addEventListener('submit', (e) => {
        const price = Number(priceInput.value || 0);
        const payment = paymentSelect.value;
        if (price <= 0) {
            e.preventDefault();
            alert('Silakan pilih paket wisata terlebih dahulu.');
            return false;
        }
        if (!payment) {
            e.preventDefault();
            alert('Silakan pilih metode pembayaran.');
            return false;
        }
        // allow form to submit; in a real app we'd process payment here
        alert(`Pemesanan berhasil! Total yang harus dibayar: Rp ${formatRupiah(price)}. Metode: ${payment.toUpperCase()}`);
        return true;
    });

    updatePrice();
    updatePaymentInfo();
});