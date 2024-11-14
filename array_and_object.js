// OBJECT
// Array daftar karyawan
const daftarKaryawan = [
  { nama: "Devyn Ramirez", jenKel: "L", masaKerja: 10, gaji: 7000000 },
  { nama: "Harmony Duncan", jenKel: "P", masaKerja: 5, gaji: 4000000 },
  { nama: "Clarissa Burgess", jenKel: "P", masaKerja: 8, gaji: 7000000 },
  { nama: "Reilly Blanchard", jenKel: "L", masaKerja: 7, gaji: 7000000 },
  { nama: "Zion Brooks", jenKel: "L", masaKerja: 4, gaji: 4000000 },
  { nama: "Jovanny Mays", jenKel: "P", masaKerja: 10, gaji: 7000000 },
  { nama: "Cindy Chase", jenKel: "P", masaKerja: 9, gaji: 7000000 },
  { nama: "Kristin Mcdaniel", jenKel: "P", masaKerja: 8, gaji: 7000000 },
  { nama: "Macey Sanford", jenKel: "L", masaKerja: 7, gaji: 7000000 },
  { nama: "Alfredo Faulkner", jenKel: "L", masaKerja: 10, gaji: 7000000 }
];


let mode = 'tambah'


// READ
// arrow function
// Fungsi menampilkan karyawan ke tabel
// MENAMPILKAN SISWA
const tampilkanKaryawan = () => {
// mengakses dom
const tblSiswa = document.getElementById('tblKaryawan');
  tblSiswa.innerHTML = '<tr><th class="text-center">No</th><th class="text-center">Nama</th><th class="text-center">Jenis Kelamin</th><th class="text-center">Masa Kerja</th><th class="text-center">Gaji</th><th class="text-center">Edit</th><th class="text-center">Hapus</th></tr>'
  
for (let idx in daftarKaryawan) {
// menambah isinya
  tblSiswa.innerHTML += `
    <tr>
      <td class="text-center">${parseInt(idx) + 1}</td>
      <td class="text-center">${daftarKaryawan[idx].nama}</td>
      <td class="text-center">${daftarKaryawan[idx].jenKel}</td>
      <td class="text-center">${daftarKaryawan[idx].masaKerja}</td>
      <td class="text-center">${daftarKaryawan[idx].gaji}</td>
      <td class="text-center"><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td>
      <td class="text-center"><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td>
    </tr>`;
  }

  

};


// CREATE
// Fungsi untuk menambah siswa ke daftar dan memperbarui tabel
// MENAMBAH KARYAWAN
const tambahKaryawan = () => {
const nama = document.getElementById('txtNama').value;
const jenKel = document.getElementById('jenKel').value;
const masaKerja = document.getElementById('txtMasker').value;

let gaji;
if (masaKerja >= 6) {
  gaji = 7000000;
} else {
  gaji = 4000000;
}

 if (nama && jenKel && masaKerja) {
  const karyawanBaru = { nama, jenKel, masaKerja, gaji };
  
 if (mode === 'tambah') {
  daftarKaryawan.push(karyawanBaru)
  } else {
  daftarKaryawan[mode] = karyawanBaru;
  }

// Kosongkan input setelah menambah karyawan
 document.getElementById('txtNama').value = "";
 document.getElementById('jenKel').value = "";
 document.getElementById('txtMasker').value = "";

 mode = 'tambah'

tampilkanKaryawan();
  }
};


// MENGEDIT KARYAWAN
const editKaryawan = (target) => {

const indexEdit = cariIndex(target);

console.log(target)
console.log(indexEdit)

console.log(daftarKaryawan[indexEdit])

const karyawanDiedit = daftarKaryawan[indexEdit]

 document.getElementById('txtNama').value = daftarKaryawan[indexEdit].nama;
 document.getElementById('jenKel').value = daftarKaryawan[indexEdit].jenKel;
 document.getElementById('txtMasker').value = daftarKaryawan[indexEdit].masaKerja;
 

mode = indexEdit

};


// Fungsi untuk mencari indeks siswa berdasarkan nama
// MENCARI INDEX NAMA
const cariIndex = (nama) => {
// tampilkan index jika nama karyawan === nama
 for (let i = 0; i < daftarKaryawan.length; i++) {
   if (daftarKaryawan[i].nama === nama) {
     return i;
    }
  }
};


// Fungsi untuk menghapus karyawan berdasarkan nama
// MENGHAPUS KARYAWAN
const hapusKaryawan = (targetNama) => {
const indexDihapus = cariIndex(targetNama);
// menghapus element dari dalam array
 daftarKaryawan.splice(indexDihapus, 1);
   tampilkanKaryawan(); // Memperbarui tabel setelah menghapus karyawan
};


// BATAL EDIT KARYAWAN
const batalKaryawan = () => {
  mode = 'tambah'

  document.getElementById('txtNama').value = "";
  document.getElementById('jenKel').value = "";
  document.getElementById('txtMasker').value = "";

}
// Panggil fungsi untuk menampilkan data awal
tampilkanKaryawan();