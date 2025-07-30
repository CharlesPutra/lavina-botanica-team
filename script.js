// Bubble Animation for Hero 1
document.addEventListener('DOMContentLoaded', function () {
    // Create bubbles
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 50; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 100 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 10}s`;
        bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;

        bubblesContainer.appendChild(bubble);
    }

    // Add keyframes dynamically for particle movement
    const style = document.createElement('style');
    style.textContent = `
                @keyframes move {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0);
                        opacity: 0;
                    }
                }
            `;
    document.head.appendChild(style);

    // bubble end

    // kirim pesan wa 
      const produkSelect = document.getElementById("produk");
//   const previewImg = document.getElementById("previewProduk");

  // Ubah gambar saat dropdown berubah
//   produkSelect.addEventListener("change", function () {
//     const selectedOption = produkSelect.options[produkSelect.selectedIndex];
//     const imgSrc = selectedOption.getAttribute("data-img");
//     previewImg.src = imgSrc;
//   });

  // Kirim ke WhatsApp
  document.getElementById("waForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const produk = produkSelect.value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value;

    const pesan = `Halo Admin,%0ASaya ingin memesan:%0A- Nama: ${nama}%0A- Produk: ${produk}%0A- Jumlah: ${jumlah}%0A- Alamat: ${alamat}`;

    const nomorWa = "6281234567890"; // Ganti dengan nomor adminmu
    const linkWa = `https://wa.me/${nomorWa}?text=${pesan}`;
    window.open(linkWa, '_blank');
  });
    // kirim pesan wa end
});