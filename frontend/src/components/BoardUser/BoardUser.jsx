
import React, {useState,useEffect} from 'react'
import userService from '../../services/user.service'

export default function BoardUser() {

/* const [content, setContent] = useState('')

useEffect(() =>{


userService.getUserBoard().then((response)=>{

setContent(response.data);


},

(error) => {
    const _content =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
    setContent(_content);
  }
);
}, []); */


  return (
    <div>Escritorio </div>
  )
}
