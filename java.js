const contentSection = document.querySelector('.hero-content');

    links.forEach(link => {
      link.addEventListener('mouseover', function() {
        this.style.color = 'blue'; // Mengubah warna saat hover
      });

      link.addEventListener('mouseout', function() {
        this.style.color = ''; // Mengembalikan warna saat mouse keluar
      });

      link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link default
        const newContent = getContentForLink(this.textContent);
        contentSection.innerHTML = newContent; // Mengganti konten dinamis
      });
    });

    function getContentForLink(linkText) {
      switch(linkText) {
        case 'HTML':
          return `<h1>HTML</h1><p>HTML adalah bahasa markup standar untuk membuat halaman web.</p>`;
        case 'CSS':
          return `<h1>CSS</h1><p>CSS adalah bahasa untuk mendesain tampilan halaman web.</p>`;
        case 'JAVA':
          return `<h1>JAVA</h1><p>JAVA adalah bahasa pemrograman yang banyak digunakan untuk pengembangan aplikasi.</p>`;
        case 'PYTON':
          return `<h1>PYTHON</h1><p>PYTHON adalah bahasa pemrograman yang mudah dipelajari dan banyak digunakan dalam berbagai bidang.</p>`;
        default:
          return `<h1>HTML</h1><p>HTML adalah bahasa markup standar untuk membuat halaman web.</p>`;
          
      }
    }

    // Ambil semua tautan di sidebar
const links = document.querySelectorAll('.sidebar nav ul li a');

// Tambahkan event listener untuk setiap tautan
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah link default

        // Tambahkan kelas fade-out sebelum berpindah halaman
        document.body.classList.add('fade-out');

        // Tunggu hingga animasi selesai sebelum berpindah halaman
        setTimeout(() => {
            window.location.href = this.href; // Pindah ke halaman baru
        }, 500); // Waktu yang sama dengan durasi animasi
    });
});

// Tambahkan kelas fade-in saat halaman dimuat
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});


