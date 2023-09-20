import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './InputForm.css';

export const InputForm = ({label, setForm, dataCompleted}) => {
    const [text, setText] = useState(dataCompleted || '')
    const handleOnChangeInput = (event) => {
      const valueText = event.target.value;
      const hasNumbers = /\d/.test(valueText);
      if(!hasNumbers){
        setForm((prevOptionsSelected) => ({
          ...prevOptionsSelected,
          [label]: { value: valueText }
        }));
        setText(valueText)
      }
    }
    return(
        <div className="input-container">
            <label className='label-form'>{label}</label>
            <TextField label='Tell us...' variant="outlined" size="small" value={text} onChange={handleOnChangeInput}/>
        </div>
    )
}
