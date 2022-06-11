import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageCarrusel, putImagesCarrousel } from "../../../redux/actions";
import s from "./changeCarrousel.module.css";
import logo from "../../../imgNavBar/logoH.svg";
import loadingImg from "../../../img/loading.gif";
import axios from "axios";
export default function ChangeCarrousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  let carrousel = useSelector((state) =>
    state.imgCarrusel.length ? state.imgCarrusel[0].images : []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImageCarrusel());
  }, []);
  useEffect(() => {
    if (carrousel.length) {
      setImages(carrousel);
    }
  }, [carrousel]);

  const handleClick = async (e) => {
    let idx = e.target.value;
    if (images.length > 2) {
      carrousel = carrousel.filter((img, ix) => ix !== parseInt(idx));
      setImages(carrousel);
      dispatch (putImagesCarrousel(carrousel))
    } else {
      alert("Debes tener minimo dos imagenes");
    }
  };
  const upload = async (img) => {
    const files = img;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "No-Conuntry-Opus");
    setLoading (true);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/jair1020/image/upload",
      data
    );
    setLoading (false);   
    const file = res.data;
    setInput(file.secure_url);
    console.log(res);
  };
  const uploadImage = (e) => {
    e.preventDefault();
    const files = e.target.files;
    upload(files);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    upload(files);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  const OnChangeAgregar= async () =>{
    if (input.length > 0) {
    let newImage= [...images, input]
    setImages (newImage)
    dispatch (putImagesCarrousel (images))
    setInput ("")
    }else alert ("Debes ingresar una imagen")
  }
  return (
    <div className={s.container} >
      <div className={s.contImages}>
        {images?.map((e, index) => (
          <>
            <img key={index} src={e} alt="" />
            <button onClick={handleClick} value={index}>
              X
            </button>
          </>
        ))}
      </div>
      <div onDragOver={dragOver} className={s.profilepicture}>
        <div className= {s.cont} >
          {!input? (
            <img className={!loading?s.img1:s.img2} src={!loading?logo:loadingImg} onDrop={(e) => onDrop(e)}></img>
          ) : (
            <img
              className={s.img2}
              src={input}
              onDrop={(e) => onDrop(e)}
            ></img>
          )}
          <label className={s.label} for="img">
            Elige o arrastra una imagen
          </label>
          <input
            id="img"
            className={s.input}
            type="file"
            onChange={(e) => uploadImage(e)}
          />
          {/* <img src={profile_picture}/> */}
        </div>
      </div>
      <button onClick={OnChangeAgregar} >Agregar</button>
    </div>
  );
}
