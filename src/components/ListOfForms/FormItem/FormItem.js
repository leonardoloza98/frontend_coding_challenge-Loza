import { useNavigate } from 'react-router-dom';
import './FormItem.css';

const FormItem = ({id, title}) => {
    const navigate = useNavigate();
    const handleOnClickForm = () => {
        navigate(`/form/${id}`, {state: {title}});
    }
    
    return(
        <div className="form-item">
            <div onClick={handleOnClickForm}>{title}</div>
        </div>
    )
}

export default FormItem;