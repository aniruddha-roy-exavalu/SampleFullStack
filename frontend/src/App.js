
import React, { useState } from 'react';

export default function App(){
  const [msg,setMsg]=useState("Click the button");
  const callBackend = async ()=>{
    const res = await fetch('http://localhost:5000/api/hello');
    const data = await res.json();
    setMsg(data.message);
  };
  return (
    <div style={{fontFamily:'Arial',padding:40}}>
      <h1>Simple React Frontend</h1>
      <button onClick={callBackend}>Call Backend</button>
      <p>{msg}</p>
    </div>
  );
}
