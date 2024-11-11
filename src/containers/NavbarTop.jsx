import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between text-xs bg-black text-white px-60 py-1'>
      <div className=' flex gap-5'>
        <button>Jual Beli Online</button>
        <button>Official Store</button>
        <button>Produk Digital</button>
        <button>Tiket Kereta</button>
        <button>Tiket Pesawat</button>
        <button>Donasi</button>
        <button>Layanan Finansial</button>
        <button>Bantuan</button>
      </div>
      <div className='flex gap-3'> 
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
      </div>
    </div>
  )
}
