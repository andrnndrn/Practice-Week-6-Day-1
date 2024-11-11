import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#E4EBF5] flex justify-between text-xs px-48 py-6">
      <div>
        <p> &#169; 2009-2024, PT Tokopedia</p>
          </div>
          <div className="flex ">
              <ul className="flex flex-row gap-4">
                <li>Tentang Kami</li>
                <li>Pusat Penjual</li>
                <li>Mobile Apps</li>
                <li>Mitra</li>
                <li>Karir</li>
                <li>Tokopedia Care</li>
                <li>B2B Digital</li>
              </ul>
          </div>
    </div>
  );
}
