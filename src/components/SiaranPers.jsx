import React, { useState } from "react";
import Card from "./card";

export default function SiaranPers() {
  const Data = [
    {
      
      articles: [
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Siaran Pers",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/10/4/7595bffd-ceca-45e4-be13-c73ac8be9312.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Siaran Pers",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/9/13/5f575be0-eedd-4372-9e4d-c0ae89dd88d1.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Siaran Pers",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/9/13/90b540b2-4439-438b-8858-72412184ae35.jpg",
          title:
            "Atasi Gejala ‘Remaja Jompo’, Simak 5 Tips Hidup Sehat ala Tokopedia",
          date: "21 March 2023",
          category: "Siaran Pers",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/9/11/56e1982e-524b-42a0-95dd-5253d7e535a4.jpg",
          title:
            "Bisa Jadi Ide Jualan Online, Ini Kategori Produk yang Paling Banyak Dicari di Tokopedia!",
          date: "21 March 2023",
          category: "Siaran Pers",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/9/11/874a6fb9-760e-4db7-bb7f-fb0fb314885b.jpg",
          title:
            "Kualitas Udara Tak Sehat? Tokopedia Bagi Cara Mengatasi Polusi Udara",
          date: "21 March 2023",
          category: "Siaran Pers",
        },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;

  const currentArticles = Data[0].articles.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  const nextPage = () => {
    if ((currentPage + 1) * articlesPerPage < Data[0].articles.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-8">
      <div className=" border-b-2 border-green-600 max-w-full mb-4">
        <div className=" flex-col justify-between text-base text-white bg-green-600 px-3 py-1 inline-block">
          <h2>{Data[0].category}</h2>
        </div>
      </div>
      <a href="">
        <div className="grid grid-cols-3 gap-10">
          {currentArticles.map((article, idx) => (
            <Card
              key={idx}
              category={article.category}
              image={article.image}
              title={article.title}
              date={article.date}
              link={article.link}
            />
          ))}
        </div>
      </a>

      <div className="mt-5 mb-5 flex gap-5">
        <button onClick={prevPage} className="border border-gray-300 p-1">
          <i className="bi bi-chevron-left"></i>
        </button>

        <button onClick={nextPage} className="border border-gray-300 p-1">
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
