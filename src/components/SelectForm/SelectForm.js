import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { defaultOptions } from '../../utils/constants';
import './SelectForm.css';


export const SelectForm = ({label, options, form, setForm, dataCompleted}) => {
    const inputOptions = options || defaultOptions;
    const handleOnChangeOption = (event) => {
        const optionValue = event.target.value;
        setForm((prevOptionsSelected) => ({
            ...prevOptionsSelected,
            [label]: { value: optionValue }
          }));
    };
    return (
      <div className="select-container">
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{label}</FormLabel>
          <RadioGroup
            name="radio-buttons-form-group"
          >
            {inputOptions.map((option)=>{
              return(
                <FormControlLabel 
                key={option.label}
                value={option.value} 
                checked={form[label]?.value === option.value}
                onChange={(event)=>handleOnChangeOption(event, label)} 
                control={<Radio />} 
                label={option.label} />
              )
            })}
          </RadioGroup>
        </FormControl>
      </div>
    );
}