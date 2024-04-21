"use client";
import {  useState } from "react";

import Result from "./components/Result";
const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const[result,setResult]=useState([])
  const gener = searchParams.gener || "fetchTrending";

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        gener === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`
      // { next: { revalidate: 10000 } }
    );
    if (!res.ok) {
      throw new Error("something went wrong");
    }

    const data = await res.json();
    setResult(data.results);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }

  return (
    <div>
      <Result results={result} />
    </div>
  );
};

export default Home;
