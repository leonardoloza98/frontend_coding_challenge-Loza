import {getTitleForms} from '../../utils/FormFunctions';
import FormItem from './FormItem/FormItem';
import { useState } from 'react';
import { Search } from '../Search/Search';
import './ListOfForms.css';

const ListOfForms = () => {
    const [listOfForms, setListOfForms] = useState(getTitleForms())

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Search setListOfForms={setListOfForms}/>
            <div className="body-container">
                {listOfForms.map(({title, id, description}) => {
                    return(
                        <FormItem key={id} id={id} title={title} description={description}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ListOfForms