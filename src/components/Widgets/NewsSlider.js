import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SliderTemplate from './SliderTemplate'

export default function NewsSlider() {

    const [ news, setNews ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
        .then(response => {
            setNews(response.data)
        })
    
      }, []);
    return (
        <div>
            <SliderTemplate data ={news} />
        </div>
    )
}
