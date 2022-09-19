import { closeModalThunk } from 'modules/Modal/ModalSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function MeasureResult() {
    const dispatch=useDispatch();
    const handleCloseModal=()=>{
        dispatch(closeModalThunk())
    }
    return (
        <div className='w-[268px] h-[271px] rounded-[14px] bg-[#F2F2F2] overflow-hidden '>
            <div className='pt-[24px] px-[16px] mb-[20px] text-center'>
                <p className='fnt-hansanN text-[16px] mb-[12px]'>測定結果</p>
                <div className='fnt-hansanB'>
                    <div className="flex flex-row-reverse gap-[10px] items-center justify-center" >
                        <span className=' text-blue text-[14px]'>速</span>
                        <span className='inline-block bg-blue rounded-[50%] w-[16px] h-[16px]'></span>
                        <span className='inline-block bg-green rounded-[50%] w-[26px] h-[26px] relative after:content[""] after:w-[20px] after:h-[20px] after:absolute after:border-[3px] after:border-white after:rounded-[50%] after:top-[50%] after:left-[50%] after:-translate-x-2/4 after:-translate-y-2/4'></span>
                        <span className='inline-block bg-lime rounded-[50%] w-[16px] h-[16px]'></span>
                        <span className='inline-block bg-yellow rounded-[50%] w-[16px] h-[16px]'></span>
                        <span className='inline-block bg-orange rounded-[50%] w-[16px] h-[16px]'></span>
                        <span className='inline-block bg-red rounded-[50%] w-[16px] h-[16px]'></span>
                        <span className=' text-red text-[14px]'>遅</span>
                    </div>
                </div>
                <h2 className='fnt-hansanB'>
                    <span className='text-[66px] text-green'>590</span>
                    <span className='text-[20px] text-[#000]'>Mbps</span>
                </h2>
                <p className='fnt-hansanB text-[16px]'>現在地の速度は<span className='text-green'>良好</span>です</p>
            </div>
           <button className='fnt-hansanB py-[11px] w-full bg-[rgba(107,109,111,0.1)] text-[15px] text-[#6B6D6F] 'onClick={handleCloseModal}>閉じる</button>
        </div>
    )
}
