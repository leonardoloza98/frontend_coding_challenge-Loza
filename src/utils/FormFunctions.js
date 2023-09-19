import {forms} from "./Forms";

const mockedForms = [
    {
        id: '1',
        title: 'A fancy form'
    },
    {
        id: '2',
        title: 'Installation form'
    }
]


export const getTitleForms = () => {
    return mockedForms
}

export const getFormById = (id) => {
    const listForm = forms.filter(form => form.id === id)
    return listForm[0].content
}
