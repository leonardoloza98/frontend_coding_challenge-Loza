import {getTitleForms} from '../../utils/FormFunctions';
import FormItem from './FormItem/FormItem';
import './ListOfForms.css';

const ListOfForms = () => {
    const listOfForms = getTitleForms()
    return(
        <div className="body-container">
            {listOfForms.map(({title, id}) => {
                return(
                    <FormItem key={id} id={id} title={title} />
                )
            })}
        </div>
    )
}

export default ListOfForms