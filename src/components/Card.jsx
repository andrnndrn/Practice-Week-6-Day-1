import React from "react";

export default function Card({ image, title, date, link, category }) {
  return (
    <div>
      <div>
        <a href={link}>
          <div className="relative flex flex-col justify-center h-30">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-[70px] left-2 font-semibold  text-[10px] rounded-md text-white bg-slate-600 bg-opacity-70 w-fit py-1 px-2">{category}</span>

            <h3 className="text-sm font-semibold title-cstm">{title}</h3>
            <p className="flex items-start text-sm mt-1">{date}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
