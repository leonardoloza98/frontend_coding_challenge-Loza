import { useState } from 'react';
import './Fields.css';

const defaultOptions = [
    {
        label: 'Yes',
        value: 'true'
    },
    {
        label: 'No',
        value: 'false'
    }
]

export const InputForm = ({label, setForm}) => {
    const [text, setText] = useState('')
    const handleOnChangeInput = (event) => {
      const valueText = event.target.value;
      const hasNumbers = /\d/.test(valueText);
      if(!hasNumbers){
        setForm((prevOptionsSelected) => ({
          ...prevOptionsSelected,
          [label]: { value: text }
        }));
        setText(valueText)
      }
    }
    return(
        <div className="input-container">
            <label className='label-form'>{label}</label>
            <input className="input-form" type='text' value={text} onChange={handleOnChangeInput}></input>
        </div>
    )
}

export const SelectForm = ({options, label, form, setForm}) => {
    const inputOptions = options || defaultOptions;
    const handleOnChangeOption = (event) => {
        const optionValue = event.target.value;
        setForm((prevOptionsSelected) => ({
            ...prevOptionsSelected,
            [label]: { value: optionValue }
          }));
    };
    return (
      <div className="select-form">
        <label className='label-form'>{label}</label>
        {inputOptions.map((option) => (
          <div key={option.label}>
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={form[label]?.value === option.value}
              onChange={(event)=>handleOnChangeOption(event, label)}
            />
            <label>{option.label}</label>
          </div>
        ))}
      </div>
    );
}


export const GroupForm = ({title}) => {
    return(
        <div className="group-container">{title}</div>
    )
}