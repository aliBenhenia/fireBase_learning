import React from 'react'

export default function Home({name,mail,img}) {
  const logout = ()=>{
        localStorage.clear()
        window.location.reload();
  }
  return (
    <>
        <div>wellocme : {name}</div>
        <div>your mail is  : {mail}</div>
        <img src={img}/>
        <button onClick={logout}>Logout </button>
    </>

  )
}
