import React, { useState } from "react";
import Card from "./card";

export default function BehindTheScene() {
  const Data = [
    {
      category: "Behind The Scene",
      articles: [
        {
          image:
            "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/04/NakaBunda-1-324x160.png",
          title:
            "Mengenal Sosok Kartini Masa Kini: NakaBunda Tim Tokopedia Care",
          date: "21 March 2023",
          category: "Behind The Scene",
        },
        {
          image:
            "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/IMG_0464-324x160.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Behind The Scene",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/8/29/e5ccdc10-fbb0-4158-9011-420702a793e6.jpg",
          title:
            "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
          date: "21 March 2023",
          category: "Behind The Scene",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg",
          title:
            "Atasi Gejala ‘Remaja Jompo’, Simak 5 Tips Hidup Sehat ala Tokopedia",
          date: "21 March 2023",
          category: "Behind The Scene",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/7/31/b1afcc36-5fd5-46b4-9ede-420e938a1b9f.jpg",
          title:
            "Bisa Jadi Ide Jualan Online, Ini Kategori Produk yang Paling Banyak Dicari di Tokopedia!",
          date: "21 March 2023",
          category: "Behind The Scene",
        },
        {
          image:
            "https://images.tokopedia.net/img/KRMmCm/2023/7/3/ba34120a-7bc2-4f39-b8b2-a0d968567593.jpg",
          title:
            "Kualitas Udara Tak Sehat? Tokopedia Bagi Cara Mengatasi Polusi Udara",
          date: "21 March 2023",
          category: "Behind The Scene",
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
