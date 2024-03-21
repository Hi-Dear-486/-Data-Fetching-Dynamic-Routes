"use client";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const wearehouse = createContext();

const Appprovider = ({ children }) => {
  const [errormsg, setErrormsg] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const productdata = async () => {
      setLoading(false);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (error) {
        setErrormsg(error.message);
      } finally {
        setLoading(true);
      }
    };
    productdata();
  }, []);

  const alldata = {
    errormsg,
    data,
  };

  if (!loading) return <p>loading...</p>;
  return (
    <div>
      <wearehouse.Provider value={alldata}>{children}</wearehouse.Provider>
    </div>
  );
};

export { Appprovider, wearehouse };
