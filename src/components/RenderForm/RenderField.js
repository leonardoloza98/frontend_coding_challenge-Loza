import { types } from "../../utils/constants";
import { InputForm } from "../InputForm/InputForm";
import { GroupForm } from "../GroupForm/GroupForm";
import { SelectForm } from "../SelectForm/SelectForm";

const RenderField = ({field, form, setForm, dataCompleted}) => {

    if(field.type === types.entry){
        if(field.input_type === 1){
            return(
                <InputForm label={field.label} setForm={setForm} dataCompleted={dataCompleted}/>
            )
        }
        return(
            <SelectForm label={field.label} options={field.options} form={form} setForm={setForm} dataCompleted={dataCompleted}/>
        )
    }

    if(field.type === types.group){
        return(
            <GroupForm title={field.name}/>
        )
    }
}

export default RenderField