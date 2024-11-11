import React, { useState } from "react";
import Card from "./card";

export default function SocialImpact() {
  const Data = [
    {
      category: "Social Impact",
      articles: [
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2022/9/15/e588a5b4-5d18-4af9-a1c0-c15f65c9498d.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Social Impact",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2022/8/24/b8fad339-c804-4db0-8df4-e3bb906f7963.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Social Impact",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2022/8/4/9d5f5e0d-1e40-42b7-b0ed-d9bf6528f650.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Social Impact",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2022/4/8/890655e8-d1c7-4d27-8c0c-5195546d5fcf.jpg",
          title:
            "Atasi Gejala ‘Remaja Jompo’, Simak 5 Tips Hidup Sehat ala Tokopedia",
          date: "21 March 2023",
          category: "Social Impact",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2022/4/6/f1f1ff22-ddd1-407a-be8f-9ee108e5eb2e.jpg",
          title:
            "Bisa Jadi Ide Jualan Online, Ini Kategori Produk yang Paling Banyak Dicari di Tokopedia!",
          date: "21 March 2023",
          category: "Social Impact",
        },
        {
          image:
            "https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/03/Header-324x160.jpg",
          title:
            "Kualitas Udara Tak Sehat? Tokopedia Bagi Cara Mengatasi Polusi Udara",
          date: "21 March 2023",
          category: "Social Impact",
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
