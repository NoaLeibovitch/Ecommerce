import React from 'react'; // we need this to make JSX compile
import './forms.css';

type Props = {
    id: string,
    label: string,
    placeholder: string,
    type?: string,
    readonly?: boolean
}

export const FormField = ({id, label, placeholder, type='text', readonly=false}: Props) =>
    <div className='FormField'>
        <div className='FormFieldLabel'>
            {label}
        </div>
        <div className='FormFieldText'>
            <input type={type} id={id} placeholder={placeholder} readOnly={readonly}></input>
        </div>
    </div>

