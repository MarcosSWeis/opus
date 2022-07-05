import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageBody, putImagesCarrouselBody } from "../../../redux/actions";
import s from "./changePhothosSpaces.module.css";
import logo from "../../../imgNavBar/logoH.svg";
import axios from "axios";
import loadingImg from "../../../img/loading.gif";
import { Toaster, toast } from "react-hot-toast";

export default function ChangePhotosSpaces() {
  const [loading, setLoading] = useState({ load: false });
  const [spaces, setSpaces] = useState([]);

  const imgBody = useSelector((state) => state.imgBody);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImageBody());
  }, []);
  useEffect(() => {
    if (imgBody.length) {
      setSpaces(imgBody);
    }
  }, [imgBody]);
  console.log(imgBody);

  const upload = async (img, space) => {
    const files = img;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "No-Conuntry-Opus");
    setLoading({ load: true, space: space });
    console.log (data);
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/jair1020/image/upload",
      data
    );
    const file = res.data;
    const newImages = spaces.map((e) => {
      if (e.space === space) {
        e.images.push(file.secure_url);
      }
      return e;
    });
    setLoading({ load: false });
    const Space = newImages.filter((e) => e.space === space);
    dispatch(putImagesCarrouselBody(Space[0]));
  };
  const uploadImage = (e) => {
    e.preventDefault();
    const files = e.target.files;
    const space = e.target.id;
    console.log(space);
    upload(files, space);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const space = e.target.id;
    upload(files, space);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  const handleClick = async (e) => {
    let idx = e.target.value;
    let space = e.target.name;
    let objspace = spaces.filter((e) => e.space === space);
    if (objspace[0].images.length > 2) {
      let carrousel = objspace[0].images.filter(
        (img, ix) => ix !== parseInt(idx)
      );
      const deleteImages = spaces.map((e) => {
        if (e.space === space) {
          e.images = carrousel;
        }
        return e;
      });
      setSpaces(deleteImages);
      dispatch(
        putImagesCarrouselBody(deleteImages.filter((e) => e.space === space)[0])
      );
    } else {
      toast.error("Debes tener almenos 2 imagenes");
    }
  };

  return (
    <div className={s.container}>
      {spaces.length > 0 &&
        spaces.map((e) => (
          <div className={s.carts}>
            <h2>{e.space}</h2>
            <div className={s.contImgs}>
              {e.images.map((img, index) => (
                <div className={s.images}>
                  <img src={img} alt={index} />
                  <button onClick={handleClick} name={e.space} value={index}>
                    X
                  </button>
                </div>
              ))}
              <div onDragOver={dragOver} className={s.profilepicture}>
                <div className={s.cont}>
                  <img
                    name={e.space}
                    className={
                      loading.load && loading.space === e.space
                        ? s.img2
                        : s.img1
                    }
                    src={
                      loading.load && loading.space === e.space
                        ? loadingImg
                        : logo
                    }
                    onDrop={(e) => onDrop(e)}
                  ></img>
                  <label className={s.label} for={e.space}>
                    Elige o arrastra una imagen
                  </label>
                  <input
                    id={e.space}
                    className={s.input}
                    type="file"
                    onChange={(e) => uploadImage(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
