import { types } from "../../utils/Forms";
import { GroupForm, InputForm, SelectForm } from "../Fields/Fields";

const RenderField = ({field, formErrors, form, setForm}) => {

    if(field.type === types.entry){
        if(field.input_type === 1){
            return(
                <InputForm label={field.label} form={form} setForm={setForm} formErrors={formErrors}/>
            )
        }
        return(
            <SelectForm label={field.label} options={field.options} form={form} setForm={setForm} formErrors={formErrors}/>
        )
    }

    if(field.type === types.group){
        return(
            <GroupForm title={field.name}/>
        )
    }
}

export default RenderField