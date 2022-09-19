import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function HowToUseView() {
  const navigate=useNavigate();
  
  const returnPrevPage=()=>{
     navigate('/location-information')
  }
  return (
    <div className='container mx-auto py-[20px] px-[16px]'>
      <button className='fnt-hansanN opacity-70 mb-[10px]' onClick={returnPrevPage}>戻る</button>
      <h1 className='fnt-hansanB text-[24px] mb-[20px]'>ご利用方法</h1>
      <p>
        テキストが入ります <br />
        テキストが入りますテキス
        トが入りますテキス<br />
        トが入りますテキストが入ります
        <br />
        <br />
        
        テキストが入ります<br/>
         テキストが入りますテキストが入りますテキストが入ります
        テキストが入りますテキストが入ります テキストが入ります<br/>テキストが入りますテキストが入りますテキストが入ります
      </p>
    </div>
  )
}
