"use client";
import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { useParams } from "next/navigation";
import { wearehouse } from "@/app/contextapi/page";
const Products = () => {
  const { data: allData } = useContext(wearehouse);
  const { product: id } = useParams();

  const data = allData[id];
  console.log(allData[id]);
  return (
    <>
      <div className="detail px-36">
        <div className="img det">
          <img src={data.image} alt="" />
        </div>
        <div className="info det px-4 py-2">
          <div className="heading">
            <h2 className="text-bold text-2xl text-gray-500">
              {data?.title?.slice(0, 19)}
            </h2>
            <h2 className="text-bold py-2">{data?.price}</h2>
          </div>
          <div className="reviewstar">
            <div className="star">
              <ul className="flex gap-4">
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
                <li>.</li>
              </ul>
            </div>
            <div className="desc py-3 text-justify">
              {data?.description?.slice(0, 145)}
            </div>
            <div className="Note">
              <h1>
                <span className="font-bold">Good To Know:</span>Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Enim, ut?
              </h1>
            </div>
            <div className="btn  flex justify-center mb-3">
              <button className="cartbtn p-3  rounded-2xl font-mono">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
