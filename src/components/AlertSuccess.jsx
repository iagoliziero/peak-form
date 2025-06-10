import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce  } from 'react-toastify';

function AlertSuccess(){

 useEffect(() => {
  toast('Login realizado com sucesso!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
 }, [])  

  return <ToastContainer />
}

export default AlertSuccess;