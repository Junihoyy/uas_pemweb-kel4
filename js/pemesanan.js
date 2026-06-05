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
    const quantityInput = document.getElementById('jumlah');
    const priceEl = document.getElementById('price_value');
    const quantityValueEl = document.getElementById('quantity_value');
    const totalEl = document.getElementById('total_value');
    const priceInput = document.getElementById('price_input');
    const totalInput = document.getElementById('total_input');
    const paymentSelect = document.getElementById('payment');
    const paymentInfo = document.getElementById('payment_info');
    const form = document.forms['pemesanan'];

    function formatRupiah(num) {
        return num.toLocaleString('id-ID');
    }

    function updatePrice() {
        const val = paketSelect.value;
        const quantity = Math.max(1, Number(quantityInput.value) || 1);
        const price = prices[val] || 0;
        const total = price * quantity;

        priceEl.textContent = price ? `Rp ${formatRupiah(price)}` : '-';
        quantityValueEl.textContent = quantity;
        totalEl.textContent = total ? `Rp ${formatRupiah(total)}` : '-';

        priceInput.value = price;
        totalInput.value = total;
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
    quantityInput.addEventListener('input', updatePrice);
    paymentSelect.addEventListener('change', updatePaymentInfo);

    form.addEventListener('submit', (e) => {
        const price = Number(priceInput.value || 0);
        const total = Number(totalInput.value || 0);
        const payment = paymentSelect.value;
        if (price <= 0 || total <= 0) {
            e.preventDefault();
            alert('Silakan pilih paket wisata terlebih dahulu.');
            return false;
        }
        if (!payment) {
            e.preventDefault();
            alert('Silakan pilih metode pembayaran.');
            return false;
        }
        alert(`Pemesanan berhasil! Total yang harus dibayar: Rp ${formatRupiah(total)}. Metode: ${payment.toUpperCase()}`);
        return true;
    });

    updatePrice();
    updatePaymentInfo();
});