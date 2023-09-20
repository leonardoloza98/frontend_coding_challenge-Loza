import TextField from '@mui/material/TextField';
import { getTitleForms } from '../../utils/FormFunctions';
export const Search = ({setListOfForms}) => {
    const handleOnChangeSearch = (e) =>{
        const listOfForms = getTitleForms()
        const search = (e.target.value).toUpperCase()
        const listOfFormsSearch = listOfForms.filter(form => 
            form.description.toString().toUpperCase().includes(search) || form.id.includes(search)
        )
        setListOfForms(listOfFormsSearch)
    }
    return(
        <TextField 
            label='Search by code or description...' 
            variant="standard" 
            style={{width: 'fit-content'}}
            onChange={handleOnChangeSearch}
        />
    )
}