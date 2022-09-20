import { closeModalThunk } from 'modules/Modal/ModalSlice';
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Alert() {
    const dispatch=useDispatch();
    const handleConfirm=()=>{
          dispatch(closeModalThunk());
    }
  return (
    <div className='w-[268px] h-[133px] bg-[#F2F2F2] rounded-[14px] overflow-hidden'>
        <h2 className='px-[16px] py-[16px] text-[17px] fnt-hansanB text-center m-0'>位置情報の取得を 許可しますか？</h2>
        <div className='flex items-center  border-t border-[#3C3C434A]'>
            <button className='fnt-hansanN py-[11px] w-full  text-[17px] border-r border-[#3C3C434A] transition duration-300 hover:font-bold hover:text-green'>キャンセル</button>
            <button className='fnt-hansanN py-[11px]  w-full text-[17px] border-[#3C3C434A] transition duration-300  hover:font-bold hover:text-green' onClick={handleConfirm}>許可</button>
        </div>
    </div>
  )
}
