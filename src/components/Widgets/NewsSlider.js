import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderTemplate from "./SliderTemplate";

export default function NewsSlider(props) {
  const [news, setNews] = useState([]);
  console.log(news)

  useEffect(() => {
    axios
      .get(
        `http://localhost:3004/articles?_start=${props.start}&_end=${props.amount}`
      )
      .then((response) => {

        setNews(response.data);
      })
       // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <SliderTemplate data={news} type={props.type} settings={props.settings} />
    </div>
  );
}
