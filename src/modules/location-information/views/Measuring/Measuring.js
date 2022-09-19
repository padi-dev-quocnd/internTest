import React from 'react'

export default function Measuring() {
  return (
    <div className='w-[268px] h-[271px] rounded-[14px] bg-[#F2F2F2] overflow-hidden '>
    <div className='pt-[24px] px-[16px] pb-[15px] text-center'>
        <p className='fnt-hansanN text-[16px]'>測定中…</p>
        <h2 className='fnt-hansanB'>
            <span className='text-[66px] text-[rgba(0,0,0,.4)]'>221</span>
            <span className='text-[20px] text-[rgba(0,0,0,.4)]'>Mbps</span>
        </h2>
    </div>
        <img className='w-[40%] mx-auto' src={require("../../../../assets/images/loading.gif")}/>
</div>
  )
}
