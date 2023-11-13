'use client'
import React, { useState } from 'react';
import axios from 'axios';
const page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    const response = await axios.get("https://picsum.photos/v2/list")
    try {
      const data = response.data;
      setImages(data)
    } catch (error) {
      console.error("Error fetching image!")
    }
  }
  return (
    <>

      <div>
        <button onClick={getImages} className='px-5 py-3 bg-green-600 text-white'>Get Images</button>
        <div className='p-10'>
          {Images.map((elem, i) => {
            return <img key={i} src={elem.download_url}
              width={300}
              height={300}
              className='m-10 rounded inline-block'
            />
          })}
        </div></div>
    </>
  )
}
export default page;
