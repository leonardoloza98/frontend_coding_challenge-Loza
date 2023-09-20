import {forms} from "./constants";

export const getTitleForms = () => {
    const formsTitles = forms.map((form)=>{
        return{
            id: form.id,
            title: form.name,
            description: form.description
        }
    })
    return formsTitles
}

export const getFormById = (id) => {
    const listForm = forms.filter(form => form.id === id)
    return listForm[0].content
}
