import React from "react";

export default function Header() {
  return (
    <div className="grid grid-cols-4 gap-0.5">
      <div className=" relative col-span-2 row-span-2 flex items-center justify-center h-81 ">
        <a href="" className="w-full h-full group overflow-hidden">
          <img
            src="https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out transform"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
            <h3 className="text-lg font-semibold">Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!</h3>
            <p className="text-xs mt-2">21 March 2024</p>
          </div>
        </a>
      </div>

      <div className="relative col-span-2 flex items-center justify-center h-50">
        <a href="" className="w-full h-full group overflow-hidden">
          <img
            src="https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out transform"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
            <h3 className="text-base font-semibold">Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!</h3>
            <p className="text-xs mt-2">21 March 2024</p>
          </div>
        </a>
      </div>

      <div className="relative flex items-center justify-center h-40">
        <a href="" className="w-full h-full group overflow-hidden">
          <img
            src="https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out transform"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
            <h3 className="text-sm font-semibold">Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!</h3>
            <p className="text-xs mt-2">21 March 2024</p>
          </div>
        </a>
      </div>
      <div className="relative flex items-center justify-center h-40">
        <a href="" className="w-full h-full group overflow-hidden">
          <img
            src="https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out transform"
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
            <h3 className="text-sm font-semibold">Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!</h3>
            <p className="text-xs mt-2">21 March 2024</p>
          </div>
        </a>
      </div>
    </div>
  );
}
