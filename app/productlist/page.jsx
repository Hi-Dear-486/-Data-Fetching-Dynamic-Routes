"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { wearehouse } from "../contextapi/page";
const Productlists = () => {
  const { data, errormsg } = useContext(wearehouse);

  return (
    <>
      {/* <Myfunc3 {...apidata} /> */}

      <div className="heading m-8">
        <h4 className="font-bold text-center text-2xl">
          Data Fetching, Dynamic Routes
        </h4>
      </div>
      <div className="error grid place-items-center relative top-64">
        <h3>{errormsg}</h3>
      </div>

      <div className="containersection">
        {data?.map((items, index) => {
          const { id, category, image } = items;
          return (
            <Link href={`/productlist/${id}`} key={index}>
              <div className="item">
                <div className="img h-44 w-full border">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="itemdetail relative top-6 flex justify-between px-4">
                  <div className="user h-4 w-4">
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="name">
                    <h3>{category}</h3>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Productlists;
