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
      <div>
        <p className='m-0'>テキストが入ります</p>
        <p className='m-0'>テキストが入りますテキス
        トが入りますテキス</p>
        <p className='m-0'>トが入りますテキストが入ります</p>
        <br />
        <br />
        
        <p className='m-0'>テキストが入ります</p>
         <p className='m-0'>テキストが入りますテキストが入りますテキストが入ります
        テキストが入りますテキストが入ります テキストが入ります</p>
        <p className='m-0'>テキストが入りますテキストが入りますテキストが入ります</p>
      </div>
    </div>
  )
}
