// 1. Toggle Menu Navigasi pada Layar Mobile
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

// Tutup menu otomatis saat salah satu link diklik di HP
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuBtn.textContent = '☰';
  });
});

// 2. Galeri Produk Interaktif (Ganti Gambar Utama)
function gantiGambar(sumberGambar, tombolAktif) {
  const mainImg = document.getElementById('mainProductImg');
  mainImg.style.opacity = '0.3';

  setTimeout(() => {
    mainImg.src = sumberGambar;
    mainImg.style.opacity = '1';
  }, 150);

  document.querySelectorAll('.thumb-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  tombolAktif.classList.add('active');
}

// 3. Modal Pemesanan & Integrasi WhatsApp
const modal = document.getElementById('orderModal');
const modalInfo = document.getElementById('modalPaketInfo');
let paketTerpilih = '';

function bukaModal(namaPaket) {
  paketTerpilih = namaPaket;
  modalInfo.textContent = 'Pilihan: ' + namaPaket;
  modal.classList.add('open');
}

function tutupModal() {
  modal.classList.remove('open');
}

// Tutup modal jika area gelap di luar kotak diklik
modal.addEventListener('click', (e) => {
  if (e.target === modal) tutupModal();
});

function kirimPesanan(event) {
  event.preventDefault();
  const nama = document.getElementById('namaPemesan').value;
  const jumlah = document.getElementById('jumlahPaket').value;
  const catatan = document.getElementById('catatanPesanan').value || '-';

  const nomorWA = '628999331003'; // Nomor kontak Artworks
  const pesan = `Halo Artworks! Saya ingin memesan:\n` +
                `• Produk: *${paketTerpilih}*\n` +
                `• Jumlah: ${jumlah} paket\n` +
                `• Nama: ${nama}\n` +
                `• Catatan/Alamat: ${catatan}`;

  const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
  window.open(urlWA, '_blank');
  tutupModal();
}

// 4. Animasi Muncul Halus saat Halaman di-Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
