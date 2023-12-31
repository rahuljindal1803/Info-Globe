import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import { APIContext } from "../context/APIContextProvider";

const News = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const { country } = useContext(APIContext);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${API_KEY}&page=1&pageSize=${props.pageSize}`;

      setLoading(true);

      let data = await (await fetch(url)).json();

      setArticles(data.articles);
      setTotalResults(data.totalResults);
      setLoading(false);
    };
    props.setProgress(30);

    fetchData();
    props.setProgress(70);

    window.scrollTo({ top: 0, behavior: "smooth" });
    props.setProgress(100);
  }, [country]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.setProgress(100);
  }, [page]);

  const handlePrev = async () => {
    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${
      props.category
    }&apiKey=${API_KEY}&page=${page - 1}&pagesize=${props.pageSize}`;

    setLoading(true);

    let data = await (await fetch(url)).json();

    setArticles(data.articles);
    setPage(page - 1);
    setLoading(false);
  };

  const handleNext = async () => {
    props.setProgress(10);

    if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${
        props.category
      }&apiKey=${API_KEY}&page=${page + 1}&pagesize=${props.pageSize}`;

      setLoading(true);
      try {
        let data = await (await fetch(url)).json();

        setArticles(data.articles);
        setPage(page + 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container my-4 ">
      <h1 className="text-center">Info Globe -Top Headlines</h1>

      {loading && <Spinner />}

      <div className="row" style={{ marginRight: "3px" }}>
        {!loading &&
          articles?.map((element) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 100) : ""}
                  description={
                    element.description ? element.description.slice(0, 143) : ""
                  }
                  imgUrl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  Date={new Date(element.publishedAt).toGMTString()}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrev}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className="btn btn-dark"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
