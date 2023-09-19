import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getFormById } from "../../utils/FormFunctions";
import RenderForm from "../../components/RenderForm/RenderForm";

const FormDetailContainer = () => {
    const [dataForm, setDataForm] = useState({});
    const {id} = useParams();
    const location = useLocation();
    const title = location.state.title;
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
        <div style={{display:'flex', justifyContent: 'center'}}>
            <RenderForm dataForm={dataForm} title={title}/>
        </div>
    )

}

export default FormDetailContainer