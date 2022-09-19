import React from 'react'
import { useState } from 'react';
import linePc from '../../../../assets/images/linePc.svg'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
export default function ExtentInformation() {
    const [visible, setVisible] = useState(false);
    const [animation, setAnimation] = useState("");
    const handleOpen = () => {
        setAnimation("animate__slideInLeft")
        setTimeout(() => {
            setVisible(true);
        }, 300)

    }
    const handleClose = () => {
        setAnimation("animate__fadeOutLeft")
        setTimeout(() => {
            setVisible(false);
        }, 500)

    }
    const handleExchange = () => {
        if (visible) {
            handleClose()
        } else {
            handleOpen()
        }
    }
    return (
        <div className='absolute top-[384px] left-0 h-[170px] flex items-center sm:top-[100px] ' onClick={handleExchange}>
            <div className={`flex items-center cursor-pointer h-full`}>
                <div className='w-[42px] h-full py-[16px] bg-grey-2  flex items-center justify-center flex-col '><span className='fnt-hansanB text-blue text-[14px]'>速</span><img className='bg-gradient-to-t from-[#FD4444] to-[#8AF213] h-[94px] w-[2px] ' src={linePc} /><span className='fnt-hansanB text-red text-[14px]'>遅</span></div>
                <div className={`${visible ? 'block' : 'hidden'} overflow-hidden h-full`}>
                    <div className={`flex items-center h-full  animate__animated ${animation}`}>
                        <div className=' h-full flex flex-col justify-center gap-[5px] py-[16px] pr-[8px] bg-grey-2'>
                            <p className='flex items-center gap-x-[6px]'><span className='inline-block bg-blue rounded-[50%] w-[16px] h-[16px]'></span><span className='fnt-hansanN text-[12px]'>10Mbps以上</span></p>
                            <p className='flex items-center gap-x-[6px]'><span className='inline-block bg-green rounded-[50%] w-[16px] h-[16px]'></span><span className='fnt-hansanN text-[12px]'>5M-10Mbps</span></p>
                            <p className='flex items-center gap-x-[6px]'><span className='inline-block bg-lime rounded-[50%] w-[16px] h-[16px]'></span><span className='fnt-hansanN text-[12px]'>3M-5Mbps</span></p>
                            <p className='flex items-center gap-x-[6px]'><span className='inline-block bg-yellow rounded-[50%] w-[16px] h-[16px]'></span><span className='fnt-hansanN text-[12px]'>1M-3Mbps</span></p>
                            <p className='flex items-center gap-x-[6px]'><span className='inline-block bg-orange rounded-[50%] w-[16px] h-[16px]'></span><span className='fnt-hansanN text-[12px]'>500k-1Mbps</span></p>
                            <p className='flex items-center gap-x-[6px]'><span className='inline-block bg-red rounded-[50%] w-[16px] h-[16px]'></span><span className='fnt-hansanN text-[12px]'>500kbps以下</span></p>
                        </div>
                        <button className={`px-[5px] h-full bg-white rounded-tr-[10px] rounded-br-[10px]`}>{visible ? <MdKeyboardArrowLeft className='text-[25px]' /> : <MdKeyboardArrowRight className='text-[25px]' />}</button>
                    </div>

                </div>
                <button className={`${visible?"hidden":"block"} px-[5px] h-full bg-white rounded-tr-[10px] rounded-br-[10px]`}><MdKeyboardArrowRight className='text-[25px]' /></button>
            </div>
        </div>
    )
}
