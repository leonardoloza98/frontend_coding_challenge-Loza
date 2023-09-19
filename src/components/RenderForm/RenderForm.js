
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import RenderField from "./RenderField";
import './RenderForm.css';
import { types } from "../../utils/Forms";

const RenderForm = ({dataForm, title}) => {
    const [form, setForm] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleOnClickSubmit = () => {
        const errors = checkErrors(form);
        const toastProps = {autoClose: 3000, closeButton: false};
        if(errors) {
            toast.error("Debe completar todos los campos", toastProps);
            return
        }
        toast.success("Se ha enviado el formulario correctamente", toastProps);
        navigate('/');
    }

    const checkErrors = (form)=>{
        let hasErrors = false
        for(let field of dataForm){
            if(field.type!==types.group) {
                if(!form[field.label] || form[field.label] === ''){
                hasErrors = true
                setFormErrors(prevState => ({
                    ...prevState,
                   [field.label]: true
                }))
                }else{
                    setFormErrors(prevState => ({
                        ...prevState,
                    [field.label]: false
                    }))
                }
            }
        }
        return hasErrors
    }

    return(
        <div className="form-container">
            <div className="form-title">{title}</div>
            {dataForm.length && dataForm?.map(fieldForm => {
                return(
                    <div key={fieldForm.index} style={{display:'flex', justifyContent:'center', alignItems:'center', width: '100%'}}>
                        <RenderField field={fieldForm} formErrors={formErrors} form={form} setForm={setForm}/>
                    </div>
                )
            })}
            <button className="button-submit-form" onClick={handleOnClickSubmit}>Submit</button>
        </div>
    )
}

export default RenderForm