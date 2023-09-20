import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getFormById } from "../../utils/FormFunctions";
import RenderForm from "../../components/RenderForm/RenderForm";
import './FormDetail.css';

const FormDetailContainer = () => {
    const [dataForm, setDataForm] = useState({});
    const [formDataCompleted, setFormDataCompleted] = useState({});
    const {id} = useParams();
    const location = useLocation();
    const title = location.state.title;

    
    useEffect(()=>{
        setFormDataCompleted(JSON.parse(localStorage.getItem(title)));
    },[title])

    const fetchDataForm = (id) => {
        try{
            const form = getFormById(id);
            setDataForm(form);
        }catch(error){
            throw new Error(error);
        }
    }

    useEffect(()=>{
        fetchDataForm(id);
    }, [id])

    return (
        <div className="render-form-container">
            <RenderForm dataForm={dataForm} title={title} formDataCompleted={formDataCompleted}/>
        </div>
    )

}

export default FormDetailContainer