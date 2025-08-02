//navbar
function closeDropdown() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (window.innerWidth < 992) {
      const dropdown = document.querySelector('.dropdown-menu.show');
      if (dropdown) {
        dropdown.classList.remove('show');
      }
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click(); // ini untuk menutup nav di mobile
      }
    }
  }
//end navbar


// Bubble Animation for Hero 1
document.addEventListener('DOMContentLoaded', function () {
  // Create bubbles
  const bubblesContainer = document.querySelector('.bubbles');
  for (let i = 0; i < 50; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const size = Math.random() * 60 + 20; // lebih kecil & aman
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * (100 - size / window.innerWidth * 100)}%`;

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
  //     p reviewImg.src = imgSrc;
  //   });

  // Kirim ke WhatsApp
  function kirimWhatsApp() {
    const admin = "6283830031659";
    const text = "Halo Saya Customers LAVINA BOTANICA,%0ASaya ingin Bertanya";
    window.open(`https://wa.me/${admin}?text=${encodeURIComponent(text)}`, '_blank');
  }
  // document.getElementById("waWeb").addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   const nama = document.getElementById("nama").value;
  //   const produk = produkSelect.value;
  //   const jumlah = document.getElementById("jumlah").value;
  //   const alamat = document.getElementById("alamat").value;

  //   const pesan = `Halo Saya Customers LAVINA BOTANICA,%0ASaya ingin Bertanya`;
  //   const nomorWa = "6283830031659"; // Ganti dengan nomor adminmu
  //   const linkWa = `https://wa.me/${nomorWa}?text=${pesan}`;
  //   window.open(linkWa, '_blank');
  // });
  // kirim pesan wa end
  function tambah() {
    var jumlah = document.getElementById("jumlah");
    jumlah.value = parseInt(jumlah.value) + 1;
  }

  function kurang() {
    var jumlah = document.getElementById("jumlah");
    if (parseInt(jumlah.value) > 1) {
      jumlah.value = parseInt(jumlah.value) - 1;
    }
  }
});


