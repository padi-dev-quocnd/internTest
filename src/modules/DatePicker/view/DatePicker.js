import React from 'react'
import '../style/DatePicker.css'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch } from 'react-redux';
import { setDateThunk } from '../DatePickerSlices';
import { closeModalThunk } from 'modules/Modal/ModalSlice';
export default function DatePicker() {
  const [value, setValue] = React.useState();
  const dispatch = useDispatch();
  const handleValueDatePicker = (newValue) => {
    setValue(newValue)
  }
  const handleCloseModal = (value) => {
    dispatch(setDateThunk(value));

  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DesktopDatePicker
        label="Date desktop"
        closeOnSelect={true}
        inputFormat="MM/DD"
        onChange={handleValueDatePicker}
        value={value}
        open={true}
        renderInput={({ inputProps }) => { handleCloseModal(inputProps.value); return '' }}
      />
    </LocalizationProvider>
  )
}
