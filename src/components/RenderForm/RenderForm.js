
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import RenderField from "./RenderField";
import { types } from "../../utils/constants";
import 'react-toastify/dist/ReactToastify.css';
import './RenderForm.css';

const RenderForm = ({dataForm, title, formDataCompleted}) => {
    const [form, setForm] = useState(formDataCompleted);
    const navigate = useNavigate();

    const handleOnClickSubmit = () => {
        const errors = checkErrors(form);
        const toastProps = {autoClose: 3000, closeButton: false};
        if(errors) {
            toast.error("Debe completar todos los campos", toastProps);
            return
        }
        localStorage.setItem(title, JSON.stringify(form));
        toast.success("Se ha enviado el formulario correctamente", toastProps);
        handleOnClickBack();
    }

    const handleOnClickBack = () => {
        navigate('/');
    }
    
    const checkErrors = (form)=>{
        let hasErrors = false;
        for(let field of dataForm){
            if(field.type !== types.group) {
                if(!form[field.label] || form[field.label] === ''){
                    hasErrors = true
                }
            }
        }
        return hasErrors
    }

    useEffect(()=>{
        if(formDataCompleted){
            setForm(formDataCompleted)
        }
    },[formDataCompleted])

    return(
        <div className="form-container">
            <div className="form-title">
                {title}
            </div>
            {dataForm.length && dataForm?.map(fieldForm => {
                return(
                    <div key={fieldForm.index} className="render-field">
                        <RenderField 
                        field={fieldForm} 
                        form={form} 
                        setForm={setForm}
                        dataCompleted={formDataCompleted && formDataCompleted[fieldForm?.label]?.value}
                        />
                    </div>
                )
            })}
            <div className="form-buttons">
                <Button variant="outlined" className="button-submit-form" color="error" size="large" onClick={handleOnClickBack}>Cancel</Button>
                <Button variant="outlined" className="button-submit-form" color="success" size="large" onClick={handleOnClickSubmit}>Save</Button>
            </div>
        </div>
    )
}

export default RenderForm