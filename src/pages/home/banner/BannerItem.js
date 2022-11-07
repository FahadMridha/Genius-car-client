import React from "react";
import "./bannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  // console.log(id, prev, next);
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carusale-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-24  top-1/4 ">
        <h1 className="text-6xl text-white">
          Affordable
          <br /> Price for Car
          <br />
          Service
        </h1>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 w-2/5 left-24  top-1/2">
        <p className="text-xl text-white">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock.
        </p>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 w-2/5 left-24  top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning ">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
