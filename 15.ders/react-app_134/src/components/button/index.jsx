import axios from "axios";
import {  useState } from "react";

const Button = () => {
  const [img, setImg] = useState();
  const randomImgHandle = () => {
    axios.get(` https://api.thecatapi.com/v1/images/search`)
    .then(res=>setImg(res.data[0]))
    console.log(img);
  };
  return(
    <>
     <button onClick={() => randomImgHandle()}>Click</button>;
     <img src={img?.url} alt="" />
    </>
  )
};

export default Button;
